import { isArray } from 'util';

export function isString(val: any): boolean {
  return typeof val === 'string';
}

export function isNumber(val: any): boolean {
  return Number.isFinite(val);
}

export function isBoolean(val: any): boolean {
  return typeof val === typeof true;
}

export function isObject(val: any): boolean {
  return val instanceof Object;
}

export function isNil(val: any): boolean {
  return val === null || val === undefined;
}

export function get(val: string | null | undefined, suffix?: string, prefix?: string): string {
  return isNil(val) ? '' : `${prefix || ''}${val}${suffix || ''}`;
}

export function getIfTrue(val: boolean | null | undefined, returnStr: string): string {
  return isBoolean(val) && val ? returnStr : '';
}

export function getAsArrayStr(val: string | string[], alwaysParens: boolean = false): string {
  if (isArray(val)) {
    if (val.length > 0) {
      return `(${val.join(', ')})`;
    } else {
      return alwaysParens ? '()' : '';
    }
  } else {
    return alwaysParens ? `(${val || ''})` : val || '';
  }
}
