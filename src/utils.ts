import { IToken } from 'chevrotain';
import {
  FieldFunctionExpression,
  FieldRelationship,
  FieldRelationshipWithAlias,
  FieldSubquery,
  FieldWithAlias,
  GroupByFieldClause,
  GroupByFnClause,
  HavingClauseWithRightCondition,
  LiteralType,
  NegationCondition,
  Operator,
  OrderByFieldClause,
  OrderByFnClause,
  Query,
  Subquery,
  ValueCondition,
  ValueFunctionCondition,
  ValueQueryCondition,
  ValueWithDateLiteralCondition,
  ValueWithDateNLiteralCondition,
  WhereClauseWithRightCondition,
} from './api/api-models';
import { ComposeField, ComposeFieldFunction, ComposeFieldRelationship, ComposeFieldSubquery, ComposeFieldTypeof } from './api/public-utils';

export function isToken(val: any): val is IToken[] | IToken {
  val = Array.isArray(val) ? val[0] : val;
  return val.image && true;
}

export function isSubqueryFromFlag(val: any, isSubquery: boolean): val is Subquery {
  return isSubquery;
}

export function isString(val: any): val is string {
  return typeof val === 'string';
}

export function isStringArray(val: any[]): val is string[] {
  if (!val) {
    return false;
  }
  return val.every(item => isString(item));
}

export function isNumber(val: any): val is number {
  return Number.isFinite(val);
}

export function isBoolean(val: any): val is boolean {
  return typeof val === typeof true;
}

export function isObject(val: any): val is any {
  return val instanceof Object;
}

export function isNil(val: any): val is null | undefined {
  return val === null || val === undefined;
}

export function get(val: string | null | undefined, suffix?: string, prefix?: string): string {
  return isNil(val) ? '' : `${prefix || ''}${val}${suffix || ''}`;
}

export function getIfTrue(val: boolean | null | undefined, returnStr: string): string {
  return isBoolean(val) && val ? returnStr : '';
}

export function getLastItem<T>(arr: T[]): T {
  return arr[arr.length - 1];
}

export function getAsArrayStr(val: string | string[], alwaysParens: boolean = false): string {
  if (Array.isArray(val)) {
    if (val.length > 0) {
      return `(${val.join(', ')})`;
    } else {
      return alwaysParens ? '()' : '';
    }
  } else {
    return alwaysParens ? `(${val || ''})` : val || '';
  }
}

export function pad(val: string, len: number, left: number = 0): string {
  let leftPad = left > 0 ? new Array(left).fill(' ').join('') : '';
  if (val.length > len) {
    return `${leftPad}${val}`;
  } else {
    return `${leftPad}${val}${new Array(len - val.length).fill(' ').join('')}`;
  }
}

export function generateParens(count: number, character: '(' | ')', joinCharacter = '') {
  return isNumber(count) && count > 0 ? new Array(count).fill(character).join(joinCharacter) : '';
}

/**
 * Gets params from a FieldFunctionExpression. If there are multiple nested functions as multiple parameters
 * within another function, only the first argument will be considered.
 * @param functionFieldExp
 * @returns params
 */
export function getParams(functionFieldExp: FieldFunctionExpression): string[] {
  if (!functionFieldExp.parameters || functionFieldExp.parameters.length === 0) {
    return [];
  }
  if (isStringArray(functionFieldExp.parameters)) {
    return functionFieldExp.parameters;
  }
  if (isString(functionFieldExp.parameters[0])) {
    return [functionFieldExp.parameters[0]];
  }
  return getParams(functionFieldExp.parameters[0] as FieldFunctionExpression);
}

export function isNestedParamAggregateFunction(functionFieldExp: FieldFunctionExpression): boolean {
  if (!functionFieldExp.parameters || functionFieldExp.parameters.length === 0) {
    return false;
  }
  const parameter = functionFieldExp.parameters[0];
  if (isString(parameter)) {
    return false;
  }
  return !!parameter.isAggregateFn;
}

export function hasAlias(value: any): value is FieldWithAlias | FieldRelationshipWithAlias {
  return value && !isNil(value.alias);
}

export function isComposeField(input: any): input is ComposeField {
  return isString(input.field) && !Array.isArray(input.relationships) && !Array.isArray(input.conditions);
}
export function isComposeFieldFunction(input: any): input is ComposeFieldFunction {
  return !isNil(input.functionName || input.fn);
}
export function isComposeFieldRelationship(input: any): input is ComposeFieldRelationship {
  return isString(input.field) && Array.isArray(input.relationships);
}
export function isComposeFieldSubquery(input: any): input is ComposeFieldSubquery {
  return !isNil(input.subquery);
}
export function isComposeFieldTypeof(input: any): input is ComposeFieldTypeof {
  return isString(input.field) && Array.isArray(input.conditions);
}

export function isSubquery(query: Query | Subquery): query is Subquery {
  return isString((query as any).relationshipName);
}

export function isFieldSubquery(value: any): value is FieldSubquery {
  return value && value.type && value.type === 'FieldSubquery';
}

export function isWhereClauseWithRightCondition(value: any): value is WhereClauseWithRightCondition {
  return value && value.operator && value.right;
}

export function isHavingClauseWithRightCondition(value: any): value is HavingClauseWithRightCondition {
  return value && value.operator && value.right;
}

export function isWhereOrHavingClauseWithRightCondition(
  value: any,
): value is WhereClauseWithRightCondition | HavingClauseWithRightCondition {
  return value && value.operator && value.right;
}

export function isValueCondition(value: any): value is ValueCondition {
  return value && isString(value.field) && isString(value.operator) && !isNil(value.value);
}

export function isValueWithDateLiteralCondition(value: any): value is ValueWithDateLiteralCondition {
  return (
    value &&
    isString(value.field) &&
    isString(value.operator) &&
    !isNil(value.value) &&
    (value.literalType === 'DATE_LITERAL' || (Array.isArray(value.literalType) && value.literalType[0] === 'DATE_LITERAL'))
  );
}

export function isValueWithDateNLiteralCondition(value: any): value is ValueWithDateNLiteralCondition {
  return value && isString(value.field) && isString(value.operator) && !isNil(value.value) && !isNil(value.dateLiteralVariable);
}

export function isValueFunctionCondition(value: any): value is ValueFunctionCondition {
  return value && !isNil(value.fn) && isString(value.operator) && !isNil(value.value);
}

export function isNegationCondition(value: any): value is NegationCondition {
  return value && isNumber(value.openParen) && isNil(value.operator) && isNil(value.field) && isNil(value.fn) && isNil(value.closeParen);
}

export function isValueQueryCondition(value: any): value is ValueQueryCondition {
  return value && isString(value.field) && isString(value.operator) && !isNil(value.valueQuery) && isNil(value.value);
}

export function isOrderByField(value: any): value is OrderByFieldClause {
  return value && !isNil(value.field);
}

export function isOrderByFn(value: any): value is OrderByFnClause {
  return value && !isNil(value.fn);
}

export function isGroupByField(value: any): value is GroupByFieldClause {
  return value && !isNil(value.field);
}

export function isGroupByFn(value: any): value is GroupByFnClause {
  return value && !isNil(value.fn);
}

export function isArrayOperator(operator: Operator) {
  return ['IN', 'NOT IN', 'INCLUDES', 'EXCLUDES'].includes(operator);
}

export function getWhereValue(value: any | any[], literalType?: LiteralType | LiteralType[], operator?: Operator): any {
  if (isNil(literalType)) {
    return value;
  }

  // Ensure that we process as an array for array type operators
  if (operator && literalType !== 'APEX_BIND_VARIABLE' && isArrayOperator(operator) && !Array.isArray(value)) {
    value = [value];
    literalType = Array.isArray(literalType) ? literalType : [literalType];
  }

  if (Array.isArray(literalType) && Array.isArray(value)) {
    return value.map((val, i) => {
      return whereValueHelper(val, literalType[i] as LiteralType);
    });
  } else {
    // This path should never hit, but on the off chance that literal type is an array and value is a string
    // then the first literal type is considered
    if (Array.isArray(literalType)) {
      literalType = literalType[0];
    }

    switch (literalType) {
      case 'STRING': {
        if (Array.isArray(value)) {
          return value.filter(Boolean).map(val => ((val as string).startsWith("'") ? val : `'${val ?? ''}'`));
        } else {
          value = String(value ?? '');
          return value.startsWith("'") ? value : `'${value}'`;
        }
      }
      case 'APEX_BIND_VARIABLE': {
        return `:${value}`;
      }
      default: {
        return value;
      }
    }
  }
}

function whereValueHelper(value: any, literalType?: LiteralType) {
  switch (literalType) {
    case 'STRING': {
      value = String(value ?? '');
      return value.startsWith("'") ? value : `'${value ?? ''}'`;
    }
    default: {
      return value;
    }
  }
}
