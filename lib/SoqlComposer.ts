import {
  Query,
  Field,
  FunctionExp,
  WhereClause,
  GroupByClause,
  HavingClause,
  OrderByClause,
  TypeOfField,
  WithDataCategoryClause,
  ForClause,
} from './models/SoqlQuery.model';
import * as utils from './utils';

export interface SoqlComposeConfig {
  logging: boolean; // default=false
}

export function composeQuery(soql: Query, config: Partial<SoqlComposeConfig> = {}): string {
  if (config.logging) {
    console.time('parser');
    console.log('Parsing Query:', soql);
  }

  const query = new Compose(soql, config).query;

  if (config.logging) {
    console.timeEnd('parser');
  }

  return query;
}

export class Compose {
  private subqueryFieldRegex = /^{.+}$/;
  private subqueryFieldReplaceRegex = /^{|}$/g;

  public logging: boolean = false;
  public query: string;

  constructor(private soql: Query, config: Partial<SoqlComposeConfig> = {}) {
    const { logging } = config;
    this.logging = logging;
    this.query = '';
    this.start();
  }

  public start(): void {
    this.query = this.parseQuery(this.soql);
  }

  private log(soql: string) {
    if (this.logging) {
      console.log('Current SOQL:', soql);
    }
  }

  private parseQuery(query: Query): string {
    let output = `SELECT`;
    // Parse Fields
    const fields = this.parseFields(query.fields);
    // Replace subquery fields with parsed subqueries
    fields.forEach((field, i) => {
      if (field.match(this.subqueryFieldRegex)) {
        const subquery = query.subqueries.find(
          subquery => subquery.sObject === field.replace(this.subqueryFieldReplaceRegex, '')
        );
        if (subquery) {
          fields[i] = `(${this.parseQuery(subquery)})`;
        }
      }
    });
    output += ` ${fields.join(', ').trim()} FROM`;
    output += ` ${utils.get(query.sObjectPrefix, '.')}${query.sObject}${utils.get(query.sObjectAlias, '', ' ')}`;
    this.log(output);

    if (query.where) {
      output += ` WHERE ${this.parseWhereClause(query.where)}`;
      this.log(output);
    }

    // TODO: add WITH support https://github.com/paustint/soql-parser-js/issues/18

    if (query.groupBy) {
      output += ` GROUP BY ${this.parseGroupByClause(query.groupBy)}`;
      this.log(output);
      if (query.having) {
        output += ` HAVING ${this.parseHavingClause(query.having)}`;
        this.log(output);
      }
    }

    if (query.orderBy) {
      output += ` ORDER BY ${this.parseOrderBy(query.orderBy)}`;
      this.log(output);
    }

    if (utils.isNumber(query.limit)) {
      output += ` LIMIT ${query.limit}`;
      this.log(output);
    }

    if (utils.isNumber(query.offset)) {
      output += ` OFFSET ${query.offset}`;
      this.log(output);
    }

    if (query.withDataCategory) {
      output += ` WITH DATA CATEGORY ${this.parseWithDataCategory(query.withDataCategory)}`;
      this.log(output);
    }

    if (query.for) {
      output += ` FOR ${query.for}`;
      this.log(output);
    }

    if (query.update) {
      output += ` UPDATE ${query.update}`;
      this.log(output);
    }

    // TODO: add FOR support https://github.com/paustint/soql-parser-js/issues/19

    return output;
  }

  private parseFields(fields: Field[]): string[] {
    return fields
      .map(field => {
        if (utils.isString(field.text)) {
          return `${utils.get(field.alias, '.')}${field.text}`;
        } else if (utils.isObject(field.fn)) {
          // parse fn
          return this.parseFn(field.fn);
        } else if (utils.isString(field.subqueryObjName)) {
          // needs to be replaced with subquery
          return `{${field.subqueryObjName}}`;
        } else if (utils.isObject(field.typeOf)) {
          return this.parseTypeOfField(field.typeOf);
        }
      })
      .filter(field => !utils.isNil(field));
  }

  private parseTypeOfField(typeOfField: TypeOfField): string {
    let output = `TYPEOF ${typeOfField.field} `;
    output += typeOfField.conditions
      .map(cond => {
        return `${cond.type} ${utils.get(cond.objectType, ' THEN ')}${cond.fieldList.join(', ')}`;
      })
      .join(' ');
    output += ` END`;
    return output;
  }

  private parseFn(fn: FunctionExp): string {
    return `${(fn.text || '').replace(/,/g, ', ')} ${fn.alias || ''}`.trim();
  }

  private parseWhereClause(where: WhereClause): string {
    let output = '';
    if (where.left) {
      output +=
        utils.isNumber(where.left.openParen) && where.left.openParen > 0
          ? new Array(where.left.openParen).fill('(').join('')
          : '';
      output += `${utils.get(where.left.logicalPrefix, ' ')}`;
      output += where.left.fn ? this.parseFn(where.left.fn) : where.left.field;
      output += ` ${where.left.operator} `;
      output += where.left.valueQuery
        ? `(${this.parseQuery(where.left.valueQuery)})`
        : utils.getAsArrayStr(where.left.value);
      output +=
        utils.isNumber(where.left.closeParen) && where.left.closeParen > 0
          ? new Array(where.left.closeParen).fill(')').join('')
          : '';
    }
    if (where.right) {
      return `${output} ${utils.get(where.operator)} ${this.parseWhereClause(where.right)}`.trim();
    } else {
      return output.trim();
    }
  }

  private parseGroupByClause(groupBy: GroupByClause): string {
    if (groupBy.type) {
      return `${groupBy.type}${utils.getAsArrayStr(groupBy.field, true)}`;
    } else {
      return (Array.isArray(groupBy.field) ? groupBy.field : [groupBy.field]).join(', ');
    }
  }

  private parseHavingClause(having: HavingClause): string {
    let output = '';
    if (having.left) {
      output += new Array(having.left.openParen || 0).fill('(').join('');
      output += having.left.fn ? this.parseFn(having.left.fn) : having.left.field;
      output += ` ${having.left.operator} ${having.left.value}`;
      output += new Array(having.left.closeParen || 0).fill(')').join('');
    }
    if (having.right) {
      return `${output} ${utils.get(having.operator)} ${this.parseHavingClause(having.right)}`;
    } else {
      return output.trim();
    }
  }

  private parseOrderBy(orderBy: OrderByClause | OrderByClause[]): string {
    if (Array.isArray(orderBy)) {
      return orderBy.map(ob => this.parseOrderBy(ob)).join(', ');
    } else {
      let output = `${utils.get(orderBy.field, ' ')}`;
      output += orderBy.fn ? this.parseFn(orderBy.fn) : '';
      output += `${utils.get(orderBy.order, ' ')}${utils.get(orderBy.nulls, '', 'NULLS ')}`;
      return output.trim();
    }
  }

  private parseWithDataCategory(withDataCategory: WithDataCategoryClause): string {
    return withDataCategory.conditions
      .map(condition => {
        const params =
          condition.parameters.length > 1
            ? `(${condition.parameters.join(', ')})`
            : `${condition.parameters.join(', ')}`;
        return `${condition.groupName} ${condition.selector} ${params}`;
      })
      .join(' AND ');
  }
}
