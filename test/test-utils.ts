import { FunctionExp, HavingClause, Query, QueryBase, WhereClause } from '../src';
import {
  isHavingClauseWithRightCondition,
  isValueFunctionCondition,
  isValueQueryCondition,
  isWhereClauseWithRightCondition,
} from '../src/api/public-utils';

/**
 * Removes properties from a parsed query that only exist to aid composition (e.g. `rawValue`, `isAggregateFn`, `from`),
 * so that composing the query exercises the real composer logic instead of echoing back the raw parsed text.
 * Every clause that can hold a function is walked, including nested subqueries and function parameters.
 * Mutates and returns the provided query.
 */
export function removeComposeOnlyFields<T extends Partial<Query>>(query: T): T {
  removeFieldsFromQuery(query);
  return query;
}

function removeFieldsFromQuery(query: Partial<QueryBase>) {
  (query.fields || []).forEach(field => {
    if (field.type === 'FieldSubquery') {
      removeFieldsFromQuery(field.subquery);
    } else {
      removeComposeOnlyField(field);
    }
  });
  removeFieldsFromWhere(query.where);
  toArray(query.groupBy).forEach(groupBy => removeComposeOnlyField((groupBy as any).fn));
  removeFieldsFromHaving(query.having);
  toArray(query.orderBy).forEach(orderBy => removeComposeOnlyField((orderBy as any).fn));
}

function removeFieldsFromWhere(where?: WhereClause) {
  if (!where) {
    return;
  }

  if (where.left && isValueQueryCondition(where.left)) {
    removeFieldsFromQuery(where.left.valueQuery);
  }

  if (where.left && isValueFunctionCondition(where.left)) {
    removeComposeOnlyField(where.left.fn);
  }

  if (isWhereClauseWithRightCondition(where)) {
    removeFieldsFromWhere(where.right);
  }
}

function removeFieldsFromHaving(having?: HavingClause) {
  if (!having) {
    return;
  }

  if (having.left && isValueFunctionCondition(having.left)) {
    removeComposeOnlyField(having.left.fn);
  }

  if (isHavingClauseWithRightCondition(having)) {
    removeFieldsFromHaving(having.right);
  }
}

/**
 * Strips the compose-only properties from a field or function, recursing into nested function parameters
 * so that a function like `FORMAT(MIN(CloseDate))` is fully reconstructed by the composer.
 */
function removeComposeOnlyField(field: any) {
  if (!field) {
    return;
  }
  delete field.isAggregateFn;
  delete field.rawValue;
  delete field.from;
  ((field.parameters as (string | FunctionExp)[]) || []).forEach(parameter => {
    if (typeof parameter !== 'string') {
      removeComposeOnlyField(parameter);
    }
  });
}

function toArray<T>(value?: T | T[]): T[] {
  if (!value) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
