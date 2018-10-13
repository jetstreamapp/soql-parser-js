import * as utils from '../lib/utils';
import { expect } from 'chai';
import 'mocha';

describe('isString', () => {
  it(`correctly determine string`, () => {
    expect(utils.isString('foo')).equal(true);
    expect(utils.isString('')).equal(true);
    expect(utils.isString('[{}]')).equal(true);
  });
  it(`should correctly determine non-string`, () => {
    expect(utils.isString(null)).equal(false);
    expect(utils.isString(undefined)).equal(false);
    expect(utils.isString(true)).equal(false);
    expect(utils.isString(false)).equal(false);
    expect(utils.isString([])).equal(false);
    expect(utils.isString({})).equal(false);
    expect(utils.isString(100)).equal(false);
    expect(utils.isString(Infinity)).equal(false);
    expect(utils.isString(NaN)).equal(false);
  });
});

describe('isBoolean', () => {
  it(`correctly determine boolean`, () => {
    expect(utils.isBoolean(true)).equal(true);
    expect(utils.isBoolean(false)).equal(true);
  });
  it(`should correctly determine non-boolean`, () => {
    expect(utils.isBoolean(null)).equal(false);
    expect(utils.isBoolean(undefined)).equal(false);
    expect(utils.isBoolean('true')).equal(false);
    expect(utils.isBoolean('false')).equal(false);
    expect(utils.isBoolean([])).equal(false);
    expect(utils.isBoolean({})).equal(false);
    expect(utils.isBoolean(100)).equal(false);
    expect(utils.isBoolean(0)).equal(false);
    expect(utils.isBoolean(Infinity)).equal(false);
    expect(utils.isBoolean(NaN)).equal(false);
  });
});

describe('isObject', () => {
  it(`correctly determine object`, () => {
    expect(utils.isObject({})).equal(true);
    expect(utils.isObject({ foo: 'bar' })).equal(true);
    expect(utils.isObject([])).equal(true);
    expect(utils.isObject([{ foo: 'bar' }])).equal(true);
    expect(utils.isObject(Object.assign({}))).equal(true);
  });
  it(`should correctly determine non-object`, () => {
    expect(utils.isObject(null)).equal(false);
    expect(utils.isObject(undefined)).equal(false);
    expect(utils.isObject(true)).equal(false);
    expect(utils.isObject(false)).equal(false);
    expect(utils.isObject('true')).equal(false);
    expect(utils.isObject('false')).equal(false);
    expect(utils.isObject(100)).equal(false);
    expect(utils.isObject(Infinity)).equal(false);
    expect(utils.isObject(NaN)).equal(false);
  });
});

describe('isNil', () => {
  it(`correctly determine null or undefined`, () => {
    expect(utils.isNil(null)).equal(true);
    expect(utils.isNil(undefined)).equal(true);
  });
  it(`should correctly determine non-null or non-undefined`, () => {
    expect(utils.isNil(true)).equal(false);
    expect(utils.isNil(false)).equal(false);
    expect(utils.isNil('true')).equal(false);
    expect(utils.isNil('false')).equal(false);
    expect(utils.isNil('')).equal(false);
    expect(utils.isNil([])).equal(false);
    expect(utils.isNil({})).equal(false);
    expect(utils.isNil(100)).equal(false);
    expect(utils.isNil(0)).equal(false);
    expect(utils.isNil(Infinity)).equal(false);
    expect(utils.isNil(NaN)).equal(false);
  });
});
