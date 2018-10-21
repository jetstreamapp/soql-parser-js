import {
  Field,
  FunctionExp,
  GroupByClause,
  HavingClause,
  OrderByClause,
  Query,
  TypeOfField,
  WhereClause,
  WithDataCategoryClause,
} from './models/SoqlQuery.model';
import * as utils from './utils';
import { FieldData, Formatter } from './SoqlFormatter';

export interface SoqlComposeConfig {
  logging: boolean; // default=false
  format: boolean;
}

export function composeQuery(soql: Query, config: Partial<SoqlComposeConfig> = {}): string {
  config.format = config.format ? true : false;
  if (config.logging) {
    console.time('composer');
    console.log('Composing Query:', soql);
    console.log('Format output:', config.format);
  }

  const query = new Compose(soql, config).query;

  if (config.logging) {
    console.timeEnd('composer');
  }

  return query;
}

export class Compose {
  private subqueryFieldRegex = /^{.+}$/;
  private subqueryFieldReplaceRegex = /^{|}$/g;

  public logging: boolean = false;
  public format: boolean = false;
  public query: string;
  public formatter: Formatter;

  constructor(private soql: Query, config: Partial<SoqlComposeConfig> = {}) {
    const { logging } = config;
    this.logging = logging;
    this.format = config.format;
    this.query = '';

    this.formatter = new Formatter({
      active: this.format,
      logging: this.logging,
    });

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

  private parseQuery(query: Query, isSubquery: boolean = false): string {
    const fieldData: FieldData = {
      fields: this.parseFields(query.fields).map(field => ({
        text: field,
        isSubquery: false,
        prefix: '',
        suffix: '',
      })),
      isSubquery,
      lineBreaks: [],
    };

    let output = `SELECT `;

    // Replace subquery fields with parsed subqueries
    fieldData.fields.forEach((field, i) => {
      if (field.text.match(this.subqueryFieldRegex)) {
        const subquery = query.subqueries.find(
          subquery => subquery.sObjectRelationshipName === field.text.replace(this.subqueryFieldReplaceRegex, '')
        );
        if (subquery) {
          fieldData.fields[i].text = `(${this.parseQuery(subquery, true)})`;
          fieldData.fields[i].isSubquery = true;
        }
      }
    });

    // Format fields based on configuration
    this.formatter.formatFields(fieldData);

    fieldData.fields.forEach(field => {
      output += `${field.prefix}${field.text}${field.suffix}`;
    });

    output += this.formatter.formatClause('FROM', isSubquery);

    if (query.sObjectRelationshipName) {
      const sObjectPrefix = query.sObjectPrefix || [];
      sObjectPrefix.push(query.sObjectRelationshipName);
      output += ` ${sObjectPrefix.join('.')}${utils.get(query.sObjectAlias, '', ' ')}`;
    } else {
      output += ` ${query.sObject}${utils.get(query.sObjectAlias, '', ' ')}`;
    }
    this.log(output);

    if (query.where) {
      output += this.formatter.formatClause('WHERE', isSubquery);
      output += ` ${this.parseWhereClause(query.where, isSubquery)}`;
      this.log(output);
    }

    // TODO: add WITH support https://github.com/paustint/soql-parser-js/issues/18

    if (query.groupBy) {
      output += this.formatter.formatClause('GROUP BY', isSubquery);
      output += ` ${this.parseGroupByClause(query.groupBy)}`;
      this.log(output);
      if (query.having) {
        output += this.formatter.formatClause('HAVING', isSubquery);
        output += ` ${this.parseHavingClause(query.having)}`;
        this.log(output);
      }
    }

    if (query.orderBy) {
      output += this.formatter.formatClause('ORDER BY', isSubquery);
      output += ` ${this.parseOrderBy(query.orderBy)}`;
      this.log(output);
    }

    if (utils.isNumber(query.limit)) {
      output += this.formatter.formatClause('LIMIT', isSubquery);
      output += ` ${query.limit}`;
      this.log(output);
    }

    if (utils.isNumber(query.offset)) {
      output += this.formatter.formatClause('OFFSET', isSubquery);
      output += ` ${query.offset}`;
      this.log(output);
    }

    if (query.withDataCategory) {
      output += this.formatter.formatClause('WITH DATA CATEGORY', isSubquery);
      output += ` ${this.parseWithDataCategory(query.withDataCategory)}`;
      this.log(output);
    }

    if (query.for) {
      output += this.formatter.formatClause('FOR', isSubquery);
      output += ` ${query.for}`;
      this.log(output);
    }

    if (query.update) {
      output += this.formatter.formatClause('UPDATE', isSubquery);
      output += ` ${query.update}`;
      this.log(output);
    }

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

  private parseWhereClause(where: WhereClause, isSubquery: boolean): string {
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
        ? `(${this.parseQuery(where.left.valueQuery, true)})`
        : utils.getAsArrayStr(where.left.value);
      output +=
        utils.isNumber(where.left.closeParen) && where.left.closeParen > 0
          ? new Array(where.left.closeParen).fill(')').join('')
          : '';
    }
    if (where.right) {
      return `${output}${this.formatter.formatAddNewLine(' ', isSubquery)}${utils.get(
        where.operator
      )} ${this.parseWhereClause(where.right, isSubquery)}`.trim();
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
