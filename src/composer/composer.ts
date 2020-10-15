import {
  FieldType,
  FunctionExp,
  GroupByClause,
  HavingClause,
  OrderByClause,
  Query,
  WhereClause,
  WithDataCategoryClause,
  FieldTypeOf,
  Subquery,
  FieldFunctionExpression,
} from '../api/api-models';
import * as utils from '../utils';
import { FieldData, Formatter, FormatOptions } from '../formatter/formatter';
import { parseQuery } from '../parser/visitor';

export interface SoqlComposeConfig {
  logging: boolean; // default=false
  format: boolean; // default=false
  formatOptions?: FormatOptions;
  autoCompose: boolean; // default=true
}
/**
 * Formats query - This will compose and then parse a query with the provided format options
 * or the defaults if omitted
 * @param soql
 * @param [formatOptions]
 * @returns
 */
export function formatQuery(soql: string, formatOptions?: FormatOptions) {
  return composeQuery(parseQuery(soql), { format: true, formatOptions });
}

/**
 * Composes a parsed query back to a SOQL query
 * The parsing methods are public in case there is a need to parse just a part of a query,
 * but the common case is to call the "start()" method
 * @param soql
 * @param [config]
 * @returns query
 */
export function composeQuery(soql: Query, config: Partial<SoqlComposeConfig> = {}): string {
  if (!soql) {
    return '';
  }
  config = config || {};
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

/**
 * Compose
 * This class handles all the logic for turning a Query into a SOQL query
 * This depends on the Format class for parts of the processing
 */
export class Compose {
  public logging: boolean = false;
  public format: boolean = false;
  public query: string;
  public formatter: Formatter;

  constructor(private soql: Query, config: Partial<SoqlComposeConfig> = {}) {
    config = { autoCompose: true, ...config };
    const { logging, format } = config;
    this.logging = logging;
    this.format = format;
    this.query = '';

    this.formatter = new Formatter(this.format, {
      logging: this.logging,
      ...config.formatOptions,
    });
    if (config.autoCompose) {
      this.start();
    }
  }

  /**
   * Starts compose
   */
  public start(): void {
    this.query = this.parseQuery(this.soql);
  }

  /**
   * If logging is enabled, print the query to the console
   * @param soql
   */
  private log(soql: string) {
    if (this.logging) {
      console.log('Current SOQL:', soql);
    }
  }

  /**
   * Parses FunctionExp object
   * Prefers functionName if populated, otherwise will fallback to rawValue
   * @param fn
   * @returns fn
   */
  private parseFn(fn: FunctionExp): string {
    let output: string | undefined;

    if (fn.rawValue) {
      output = fn.rawValue;
    } else {
      output = fn.functionName;
      output += `(${(fn.parameters || []).map(param => (utils.isString(param) ? param : this.parseFn(param))).join(', ')})`;
    }

    if (fn.alias) {
      output += ` ${fn.alias}`;
    }

    return output;
  }

  /**
   * Parses query
   * Base entry point for the query
   * this may be called multiple times recursively for subqueries and WHERE queries
   * @param query
   * @returns query
   */
  public parseQuery(query: Query | Subquery): string {
    const fieldData: FieldData = {
      fields: this.parseFields(query.fields).map(field => ({
        text: field,
        isSubquery: field.startsWith('('),
        prefix: '',
        suffix: '',
      })),
      isSubquery: utils.isSubquery(query),
      lineBreaks: [],
    };

    let output = `SELECT `;

    // Format fields based on configuration
    this.formatter.formatFields(fieldData);

    fieldData.fields.forEach(field => {
      output += `${field.prefix}${field.text}${field.suffix}`;
    });

    output += this.formatter.formatClause('FROM');

    if (utils.isSubquery(query)) {
      const sObjectPrefix = query.sObjectPrefix || [];
      sObjectPrefix.push(query.relationshipName);
      output += ` ${sObjectPrefix.join('.')}${utils.get(query.sObjectAlias, '', ' ')}`;
    } else {
      output += ` ${query.sObject}${utils.get(query.sObjectAlias, '', ' ')}`;
    }
    this.log(output);

    if (query.usingScope) {
      output += this.formatter.formatClause('USING SCOPE');
      output += ` ${query.usingScope}`;
      this.log(output);
    }

    if (query.where) {
      output += this.formatter.formatClause('WHERE');
      output += ` ${this.parseWhereOrHavingClause(query.where)}`;
      this.log(output);
    }

    if (query.groupBy) {
      output += this.formatter.formatClause('GROUP BY');
      output += ` ${this.parseGroupByClause(query.groupBy)}`;
      this.log(output);
      if (query.groupBy.having) {
        output += this.formatter.formatClause('HAVING');
        output += ` ${this.parseWhereOrHavingClause(query.groupBy.having)}`;
        this.log(output);
      }
    }

    if (query.orderBy && (!Array.isArray(query.orderBy) || query.orderBy.length > 0)) {
      output += this.formatter.formatClause('ORDER BY');
      output += ` ${this.parseOrderBy(query.orderBy)}`;
      this.log(output);
    }

    if (utils.isNumber(query.limit)) {
      output += this.formatter.formatClause('LIMIT');
      output += ` ${query.limit}`;
      this.log(output);
    }

    if (utils.isNumber(query.offset)) {
      output += this.formatter.formatClause('OFFSET');
      output += ` ${query.offset}`;
      this.log(output);
    }

    if (query.withDataCategory) {
      output += this.formatter.formatClause('WITH DATA CATEGORY');
      output += ` ${this.parseWithDataCategory(query.withDataCategory)}`;
      this.log(output);
    }

    if (query.withSecurityEnforced) {
      output += this.formatter.formatClause('WITH SECURITY_ENFORCED');
      this.log(output);
    }

    if (query.for) {
      output += this.formatter.formatClause('FOR');
      output += ` ${query.for}`;
      this.log(output);
    }

    if (query.update) {
      output += this.formatter.formatClause('UPDATE');
      output += ` ${query.update}`;
      this.log(output);
    }

    return output;
  }

  /**
   * Parses fields
   * e.x.: SELECT amount, FORMAT(amount) Amt, (SELECT Id, Name FROM Contacts)
   * @param fields
   * @returns fields
   */
  public parseFields(fields: FieldType[]): string[] {
    return fields.map(field => {
      const objPrefix = (field as any).objectPrefix ? `${(field as any).objectPrefix}.` : '';
      switch (field.type) {
        case 'Field': {
          return `${objPrefix}${field.field}${field.alias ? ` ${field.alias}` : ''}`;
        }
        case 'FieldFunctionExpression': {
          let params = '';
          if (field.parameters) {
            params = field.parameters
              .map(param => (utils.isString(param) ? param : this.parseFields([param as FieldFunctionExpression])))
              .join(', ');
          }
          return `${field.functionName}(${params})${field.alias ? ` ${field.alias}` : ''}`;
        }
        case 'FieldRelationship': {
          return `${objPrefix}${field.relationships.join('.')}.${field.field}${utils.hasAlias(field) ? ` ${field.alias}` : ''}`;
        }
        case 'FieldSubquery': {
          return this.formatter.formatSubquery(this.parseQuery(field.subquery));
        }
        case 'FieldTypeof': {
          return this.parseTypeOfField(field);
        }
        default:
          break;
      }
    });
  }

  /**
   * Parses type of Field
   * e.x.: TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate ELSE Name
   * @param typeOfField
   * @returns type of field
   */
  public parseTypeOfField(typeOfField: FieldTypeOf): string {
    let output = `TYPEOF ${typeOfField.field} `;
    output += typeOfField.conditions
      .map(cond => {
        return `${cond.type} ${utils.get(cond.objectType, ' THEN ')}${cond.fieldList.join(', ')}`;
      })
      .join(' ');
    output += ` END`;
    return output;
  }

  /**
   * Parses where clause
   * e.x.: WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z
   * WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false)
   * @param where
   * @param priorIsNegationOperator - do not set this when calling manually. Recursive call will set this to ensure proper formatting.
   * @returns where clause
   */
  public parseWhereOrHavingClause(whereOrHaving: WhereClause | HavingClause): string {
    let output = '';
    const left = whereOrHaving.left;
    if (left) {
      output += utils.generateParens(left.openParen, '(');
      if (!utils.isNegationCondition(left)) {
        output += utils.isValueFunctionCondition(left) ? this.parseFn(left.fn) : left.field;
        output += ` ${left.operator} `;

        if (utils.isValueQueryCondition(left)) {
          output += this.formatter.formatSubquery(this.parseQuery(left.valueQuery), 1, true);
        } else {
          output += utils.getAsArrayStr(utils.getWhereValue(left.value, left.literalType));
        }
        output += utils.generateParens(left.closeParen, ')');
      }
    }
    if (utils.isWhereOrHavingClauseWithRightCondition(whereOrHaving)) {
      const formattedData = this.formatter.formatWhereClauseOperators(
        utils.get(whereOrHaving.operator),
        this.parseWhereOrHavingClause(whereOrHaving.right),
      );
      return `${output}${formattedData}`.trim();
    } else {
      return output.trim();
    }
  }

  /**
   * Parses group by clause
   * e.x.: GROUP BY CampaignId
   * @param groupBy
   * @returns group by clause
   */
  public parseGroupByClause(groupBy: GroupByClause): string {
    if (utils.isGroupByFn(groupBy)) {
      return this.parseFn(groupBy.fn);
    } else {
      return (Array.isArray(groupBy.field) ? groupBy.field : [groupBy.field]).join(', ');
    }
  }

  /**
   * Parses order by
   * e.x.: ORDER BY BillingPostalCode ASC NULLS LAST
   * @param orderBy
   * @returns order by
   */
  public parseOrderBy(orderBy: OrderByClause | OrderByClause[]): string {
    if (Array.isArray(orderBy)) {
      return this.formatter.formatOrderByArray(orderBy.map(ob => this.parseOrderBy(ob)));
    } else {
      let output = '';
      if (utils.isOrderByField(orderBy)) {
        output = `${utils.get(orderBy.field, ' ')}`;
      } else {
        output += `${this.parseFn(orderBy.fn)} `;
      }
      output += `${utils.get(orderBy.order, ' ')}${utils.get(orderBy.nulls, '', 'NULLS ')}`;
      return output.trim();
    }
  }

  /**
   * Parses with data category
   * e.x.: WITH DATA CATEGORY Geography__c AT (usa__c, uk__c)
   * @param withDataCategory
   * @returns with data category
   */
  public parseWithDataCategory(withDataCategory: WithDataCategoryClause): string {
    return withDataCategory.conditions
      .map(condition => {
        const params = condition.parameters.length > 1 ? `(${condition.parameters.join(', ')})` : `${condition.parameters.join(', ')}`;
        return `${condition.groupName} ${condition.selector} ${params}`;
      })
      .join(' AND ');
  }
}
