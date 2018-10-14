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

export function getLastItem<T>(arr: T[]): T {
  return arr[arr.length - 1];
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

export function pad(val: string, len: number, left: number = 0) {
  let leftPad = left > 0 ? new Array(left).fill(' ').join('') : '';
  if (val.length > len) {
    return `${leftPad}${val}`;
  } else {
    return `${leftPad}${val}${new Array(len - val.length).fill(' ').join('')}`;
  }
}
