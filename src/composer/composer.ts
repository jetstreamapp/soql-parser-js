/*
 * Copyright (c) Austin Turner
 * The software in this package is published under the terms of the MIT license,
 * a copy of which has been included with this distribution in the LICENSE.txt file.
 */
import {
  FieldType,
  FieldTypeOf,
  GroupByClause,
  HavingClause,
  OrderByClause,
  Query,
  Subquery,
  WhereClause,
  WithDataCategoryClause,
} from '../api/api-models';
import { Formatter, FormatOptions } from '../formatter/formatter';
import { parseQuery, ParseQueryConfig } from '../parser/parser';
import { asArray, renderFieldText, renderGroupByItem, renderOrderByItem, renderTypeOfParts, renderWithDataCategory } from './leaf';
import { composePlain, composePlainConditions } from './plain';

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
export function formatQuery(soql: string, formatOptions?: FormatOptions, parseOptions?: ParseQueryConfig): string {
  return composeQuery(parseQuery(soql, parseOptions), { format: true, formatOptions });
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
 * This class handles all the logic for turning a Query into a SOQL query.
 * The individual methods are public so that parts of a query can be composed in isolation
 * (create an instance with `autoCompose: false` and call the method for the part you need).
 * With `format: false` (the default) the output is a single line, otherwise the `Formatter` produces multi-line output.
 */
export class Compose {
  public logging: boolean = false;
  public format: boolean = false;
  public query: string;
  public formatter: Formatter;

  constructor(
    private soql: Query,
    config: Partial<SoqlComposeConfig> = {},
  ) {
    config = { autoCompose: true, ...config };
    const { logging, format } = config;
    this.logging = !!logging;
    this.format = !!format;
    this.query = '';

    this.formatter = new Formatter(config.formatOptions);
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
   * Parses query
   * Base entry point for the query
   * @param query
   * @returns query
   */
  public parseQuery(query: Query | Subquery): string {
    const output = this.format ? this.formatter.formatQuery(query) : composePlain(query);
    this.log(output);
    return output;
  }

  /**
   * Parses fields
   * e.x.: SELECT amount, FORMAT(amount) Amt, (SELECT Id, Name FROM Contacts)
   * @param fields
   * @returns fields
   */
  public parseFields(fields: FieldType[]): { text: string; typeOfClause?: string[] }[] {
    return fields.map(field => {
      if (field.type === 'FieldSubquery') {
        return { text: this.format ? this.formatter.formatSubqueryField(field.subquery) : `(${composePlain(field.subquery)})` };
      }
      return { text: renderFieldText(field), typeOfClause: field.type === 'FieldTypeof' ? this.parseTypeOfField(field) : undefined };
    });
  }

  /**
   * Parses type of Field
   * e.x.: TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate ELSE Name
   * @param typeOfField
   * @returns type of field
   */
  public parseTypeOfField(typeOfField: FieldTypeOf): string[] {
    return renderTypeOfParts(typeOfField);
  }

  /**
   * Parses where clause
   * e.x.: WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z
   * WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false)
   * @param whereOrHaving
   * @param [indent] - Only used when formatting: the indentation level of the clause. Defaults to 0.
   * @returns where clause
   */
  public parseWhereOrHavingClause(whereOrHaving: WhereClause | HavingClause, indent = 0): string {
    return this.format ? this.formatter.formatWhereOrHavingClause(whereOrHaving, indent) : composePlainConditions(whereOrHaving);
  }

  /**
   * Parses group by clause
   * e.x.: GROUP BY CampaignId
   * @param groupBy
   * @returns group by clause
   */
  public parseGroupByClause(groupBy: GroupByClause | GroupByClause[]): string {
    const items = asArray(groupBy).map(renderGroupByItem);
    return this.format ? this.formatter.formatList(items) : items.join(', ');
  }

  /**
   * Parses order by
   * e.x.: ORDER BY BillingPostalCode ASC NULLS LAST
   * @param orderBy
   * @returns order by
   */
  public parseOrderBy(orderBy: OrderByClause | OrderByClause[]): string {
    const items = asArray(orderBy).map(renderOrderByItem);
    return this.format ? this.formatter.formatList(items) : items.join(', ');
  }

  /**
   * Parses with data category
   * e.x.: WITH DATA CATEGORY Geography__c AT (usa__c, uk__c)
   * @param withDataCategory
   * @returns with data category
   */
  public parseWithDataCategory(withDataCategory: WithDataCategoryClause): string {
    return renderWithDataCategory(withDataCategory);
  }
}
