/*
 * Copyright (c) Austin Turner
 * The software in this package is published under the terms of the MIT license,
 * a copy of which has been included with this distribution in the LICENSE.txt file.
 */
import {
  ConditionWithValueQuery,
  FieldFunctionExpression,
  FieldType,
  FieldTypeOf,
  FieldTypeOfCondition,
  FunctionExp,
  GroupByClause,
  HavingClause,
  NegationCondition,
  OrderByClause,
  Query,
  Subquery,
  ValueQueryCondition,
  WhereClause,
  WithDataCategoryClause,
} from '../api/api-models';
import * as utils from '../utils';

/**
 * Leaf renderers and the shared clause sequence, used by both the plain composer and the formatter.
 *
 * Every renderer in this module turns one node of the parsed query into a string
 * *without* making any whitespace/newline/indentation decisions and *without* rendering subqueries -
 * that is the job of the callers (`composePlain()` and `Formatter`).
 * `queryClauses()` owns the order and presence of the clauses themselves, so the two callers
 * only decide layout. None of these functions mutate their input.
 */

/**
 * Renders a function expression, e.g. `COUNT(Id) total`.
 * Prefers `rawValue` when populated, otherwise builds the text from `functionName` and `parameters`.
 */
export function renderFn(fn: FunctionExp): string {
  let output: string;
  if (fn.rawValue) {
    output = fn.rawValue;
  } else {
    output = `${fn.functionName}(${(fn.parameters || []).map(param => (utils.isString(param) ? param : renderFn(param))).join(', ')})`;
  }
  if (fn.alias) {
    output += ` ${fn.alias}`;
  }
  return output;
}

/**
 * Renders the text of a SELECT field. Subquery fields are not handled here since they require
 * rendering a nested query - callers must handle `FieldSubquery` themselves.
 * TYPEOF fields are rendered on a single line (see `renderTypeOfParts` for the individual parts).
 */
export function renderFieldText(field: Exclude<FieldType, { type: 'FieldSubquery' }>): string {
  const objPrefix = (field as any).objectPrefix ? `${(field as any).objectPrefix}.` : '';
  switch (field.type) {
    case 'Field': {
      return `${objPrefix}${field.field}${field.alias ? ` ${field.alias}` : ''}`;
    }
    case 'FieldFunctionExpression': {
      return `${field.functionName}(${renderFieldFunctionParams(field)})${field.alias ? ` ${field.alias}` : ''}`;
    }
    case 'FieldRelationship': {
      return `${objPrefix}${field.relationships.join('.')}.${field.field}${utils.hasAlias(field) ? ` ${field.alias}` : ''}`;
    }
    case 'FieldTypeof': {
      return renderTypeOfParts(field).join(' ');
    }
    default:
      return '';
  }
}

function renderFieldFunctionParams(field: FieldFunctionExpression): string {
  if (!field.parameters) {
    return '';
  }
  return field.parameters.map(param => (utils.isString(param) ? param : renderFieldText(param))).join(', ');
}

/**
 * Renders a TYPEOF field as its individual parts, e.g.
 * `['TYPEOF What', 'WHEN Account THEN Phone, NumberOfEmployees', 'ELSE Name, Email', 'END']`
 */
export function renderTypeOfParts(field: FieldTypeOf): string[] {
  return [`TYPEOF ${field.field}`, ...field.conditions.map(renderTypeOfCondition), 'END'];
}

export function renderTypeOfCondition(condition: FieldTypeOfCondition): string {
  const fields = condition.fieldList.join(', ');
  return condition.objectType ? `${condition.type} ${condition.objectType} THEN ${fields}` : `${condition.type} ${fields}`;
}

/**
 * Renders the FROM target (object or relationship, with optional alias), or an empty string if there is none.
 * e.g. `Account a`, `Account.Contacts c`
 */
export function renderFrom(query: Query | Subquery): string {
  if (utils.isSubquery(query)) {
    if (!query.relationshipName) {
      return '';
    }
    return `${[...(query.sObjectPrefix || []), query.relationshipName].join('.')}${utils.get(query.sObjectAlias, '', ' ')}`;
  }
  if (!query.sObject) {
    return '';
  }
  return `${query.sObject}${utils.get(query.sObjectAlias, '', ' ')}`;
}

/** Any condition other than a bare `NOT` - i.e. one that carries an operator and either a `field` or an `fn`. */
export type NonNegationCondition = Exclude<ConditionWithValueQuery, NegationCondition>;

/** A condition that is rendered as `<lhs> <operator> <value>` - excludes `NOT` and subquery (`IN (SELECT ...)`) conditions. */
export type SimpleCondition = Exclude<ConditionWithValueQuery, NegationCondition | ValueQueryCondition>;

/**
 * Renders the left-hand side of a condition, including the operator, e.g. `Name LIKE`, `COUNT(Id) >`
 */
export function renderConditionLhs(condition: NonNegationCondition): string {
  const lhs = utils.isValueFunctionCondition(condition) ? renderFn(condition.fn) : condition.field;
  return `${lhs} ${condition.operator}`;
}

/**
 * Renders the value of a (non-subquery) condition, e.g. `'foo'`, `('a', 'b')`, `TRUE`, `LAST_N_DAYS:7`
 */
export function renderConditionValue(condition: SimpleCondition): string {
  return utils.getAsArrayStr(utils.getWhereValue(condition.value, condition.literalType, condition.operator));
}

/** e.g. `Name`, `COUNT(Id)` */
export function renderGroupByItem(groupBy: GroupByClause): string {
  return utils.isGroupByField(groupBy) ? groupBy.field : renderFn(groupBy.fn);
}

/** e.g. `Name ASC NULLS LAST`, `COUNT(Id) DESC` */
export function renderOrderByItem(orderBy: OrderByClause): string {
  let output = utils.isOrderByField(orderBy) ? `${utils.get(orderBy.field, ' ')}` : `${renderFn(orderBy.fn)} `;
  output += `${utils.get(orderBy.order, ' ')}${utils.get(orderBy.nulls, '', 'NULLS ')}`;
  return output.trim();
}

/** e.g. `Geography__c AT (usa__c, uk__c) AND Product__c ABOVE mobile_phones__c` */
export function renderWithDataCategory(withDataCategory: WithDataCategoryClause): string {
  return withDataCategory.conditions
    .map(condition => {
      const params = condition.parameters.length > 1 ? `(${condition.parameters.join(', ')})` : `${condition.parameters.join(', ')}`;
      return `${condition.groupName} ${condition.selector} ${params}`;
    })
    .join(' AND ');
}

/** True if the query has a GROUP BY clause that should be rendered (a non-empty array or a single clause) */
export function hasGroupBy(query: Query | Subquery): boolean {
  return !!query.groupBy && (!Array.isArray(query.groupBy) || query.groupBy.length > 0);
}

/** True if the query has an ORDER BY clause that should be rendered (a non-empty array or a single clause) */
export function hasOrderBy(query: Query | Subquery): boolean {
  return !!query.orderBy && (!Array.isArray(query.orderBy) || query.orderBy.length > 0);
}

/** Wraps a single clause or array of clauses in an array */
export function asArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

/**
 * One clause of a query, tagged by how it is laid out. The SELECT fields are passed through unrendered
 * because subquery fields have to be rendered by the caller.
 */
export type ClausePart =
  | { kind: 'select'; fields: FieldType[] }
  | { kind: 'value'; keyword: string; value: string }
  | { kind: 'bare'; keyword: string }
  | { kind: 'list'; keyword: string; items: string[] }
  | { kind: 'conditions'; keyword: string; clause: WhereClause | HavingClause };

/**
 * Yields the clauses of a query in the order SOQL requires, skipping any that are absent or empty.
 *
 * This is the single source of truth for clause ordering and presence - both `composePlain()` and
 * `Formatter.query()` walk this sequence and only decide how each part is laid out. Adding support for a
 * new clause means adding it here once, not in each renderer.
 */
export function* queryClauses(query: Query | Subquery): Generator<ClausePart> {
  if (query.fields) {
    yield { kind: 'select', fields: query.fields };
  }

  const from = renderFrom(query);
  if (from) {
    yield { kind: 'value', keyword: 'FROM', value: from };
  }

  if (query.usingScope) {
    yield { kind: 'value', keyword: 'USING SCOPE', value: query.usingScope };
  }

  if (query.where) {
    yield { kind: 'conditions', keyword: 'WHERE', clause: query.where };
  }

  if (query.withDataCategory) {
    yield { kind: 'value', keyword: 'WITH DATA CATEGORY', value: renderWithDataCategory(query.withDataCategory) };
  }

  if (query.withSecurityEnforced) {
    yield { kind: 'bare', keyword: 'WITH SECURITY_ENFORCED' };
  }

  if (query.withAccessLevel) {
    yield { kind: 'bare', keyword: `WITH ${query.withAccessLevel}` };
  }

  if (hasGroupBy(query)) {
    yield { kind: 'list', keyword: 'GROUP BY', items: asArray(query.groupBy!).map(renderGroupByItem) };
    // HAVING is only valid alongside GROUP BY
    if (query.having) {
      yield { kind: 'conditions', keyword: 'HAVING', clause: query.having };
    }
  }

  if (hasOrderBy(query)) {
    yield { kind: 'list', keyword: 'ORDER BY', items: asArray(query.orderBy!).map(renderOrderByItem) };
  }

  if (utils.isNumber(query.limit)) {
    yield { kind: 'value', keyword: 'LIMIT', value: `${query.limit}` };
  }

  if (utils.isNumber(query.offset)) {
    yield { kind: 'value', keyword: 'OFFSET', value: `${query.offset}` };
  }

  if (query.for) {
    yield { kind: 'value', keyword: 'FOR', value: query.for };
  }

  if (query.update) {
    yield { kind: 'value', keyword: 'UPDATE', value: query.update };
  }
}
