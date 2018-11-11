import { FieldFunctionExpression, LiteralType, Query, Subquery } from './models/SoqlQuery.model';
import {
  ComposeField,
  ComposeFieldFunction,
  ComposeFieldRelationship,
  ComposeFieldSubquery,
  ComposeFieldTypeof,
} from './publicUtils';

export function isString(val: any): val is string {
  return typeof val === 'string';
}

export function isStringArray(val: any[]): val is string[] {
  if (!val) {
    return false;
  }
  return val.length > 0 && isString(val[0]);
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

export function isSubquery(query: Query | Subquery): query is Subquery {
  return isString((query as any).relationshipName);
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
  return getParams(functionFieldExp.parameters[0] as FieldFunctionExpression);
}

export function isComposeField(input: any): input is ComposeField {
  return isString(input.field) && !Array.isArray(input.relationships) && !Array.isArray(input.conditions);
}
export function isComposeFieldFunction(input: any): input is ComposeFieldFunction {
  return !isNil(input.fn);
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

export function getWhereValue(value: any | any[], literalType?: LiteralType): any {
  if (isNil(literalType)) {
    return value;
  }
  switch (literalType) {
    case 'STRING': {
      if (Array.isArray(value)) {
        return value.map(val => ((val as string).startsWith("'") ? val : `'${val}'`));
      } else {
        return (value as string).startsWith("'") ? value : `'${value}'`;
      }
    }
    default: {
      return value;
    }
  }
}
