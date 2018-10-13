export function isString(val: any): boolean {
  return typeof val === 'string';
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
