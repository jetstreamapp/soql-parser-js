import * as utils from '../lib/utils';
import { expect } from 'chai';
import 'mocha';
import { Query, Subquery } from '../lib';

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

describe('isStringArray', () => {
  it(`correctly determine string array`, () => {
    expect(utils.isStringArray(['test', 'test2'])).equal(true);
    expect(utils.isStringArray([''])).equal(true);
  });
  it(`correctly only consider first parameter`, () => {
    expect(utils.isStringArray(['test', { foo: 'test' }])).equal(true);
  });
  it(`should correctly determine non-string array`, () => {
    expect(utils.isStringArray(null)).equal(false);
    expect(utils.isStringArray(undefined)).equal(false);
    expect(utils.isStringArray([true])).equal(false);
    expect(utils.isStringArray([false])).equal(false);
    expect(utils.isStringArray([])).equal(false);
    expect(utils.isStringArray([{}])).equal(false);
    expect(utils.isStringArray([100])).equal(false);
    expect(utils.isStringArray([Infinity])).equal(false);
    expect(utils.isStringArray([NaN])).equal(false);
  });
});

describe('isNumber', () => {
  it(`correctly determine number`, () => {
    expect(utils.isNumber(-1)).equal(true);
    expect(utils.isNumber(0)).equal(true);
    expect(utils.isNumber(1)).equal(true);
  });
  it(`should correctly determine non-number`, () => {
    expect(utils.isNumber(null)).equal(false);
    expect(utils.isNumber(undefined)).equal(false);
    expect(utils.isNumber(true)).equal(false);
    expect(utils.isNumber(false)).equal(false);
    expect(utils.isNumber([])).equal(false);
    expect(utils.isNumber({})).equal(false);
    expect(utils.isNumber(Infinity)).equal(false);
    expect(utils.isNumber(NaN)).equal(false);
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

describe('get', () => {
  it(`correctly get value`, () => {
    expect(utils.get('value')).equal('value');
  });
  it(`correctly get value with suffix`, () => {
    expect(utils.get('value', '.')).equal('value.');
  });
  it(`correctly get value with suffix and prefix`, () => {
    expect(utils.get('value', '.', '.')).equal('.value.');
  });
  it(`should correctly return empty string if no value`, () => {
    expect(utils.get(null)).equal('');
    expect(utils.get(null, '.')).equal('');
    expect(utils.get(null, '.', '.')).equal('');
    expect(utils.get(undefined)).equal('');
    expect(utils.get(undefined, '.')).equal('');
    expect(utils.get(undefined, '.', '.')).equal('');
  });
});

describe('getIfTrue', () => {
  it(`correctly get value`, () => {
    expect(utils.getIfTrue(true, 'retVal')).equal('retVal');
    expect(utils.getIfTrue(false, 'retVal')).equal('');
  });
});

describe('getAsArrayStr', () => {
  it(`correctly get value from array`, () => {
    expect(utils.getAsArrayStr(['a', 'b'])).equal(`(a, b)`);
    expect(utils.getAsArrayStr([])).equal(``);
    expect(utils.getAsArrayStr([], true)).equal(`()`);
  });
  it(`correctly get value from string`, () => {
    expect(utils.getAsArrayStr('a')).equal(`a`);
    expect(utils.getAsArrayStr(null)).equal(``);
    expect(utils.getAsArrayStr('')).equal(``);
    expect(utils.getAsArrayStr(null, true)).equal(`()`);
  });
});

describe('getLastItem', () => {
  it(`Should correctly pad suffix`, () => {
    const str = 'TEST';
    expect(utils.getLastItem<number>([1, 2, 3, 4, 5])).equal(5);
    expect(utils.getLastItem<string>(['a', 'b', 'c'])).equal('c');
    expect(utils.getLastItem<string>([])).equal(undefined);
  });
});

describe('pad', () => {
  it(`Should correctly pad suffix`, () => {
    const str = 'TEST';
    expect(utils.pad(str, 5)).equal(`${str} `);
    expect(utils.pad(str, 5)).lengthOf(5);
    expect(utils.pad(str, 100)).lengthOf(100);
  });
  it(`Should correctly pad prefix`, () => {
    const str = 'TEST';
    expect(utils.pad(str, 0, 2)).equal(`  ${str}`);
    expect(utils.pad(str, 0, 2)).lengthOf(str.length + 2);
  });
  it(`Should correctly pad prefix and suffix`, () => {
    const str = 'TEST';
    expect(utils.pad(str, 5, 2)).lengthOf(7);
    expect(utils.pad(str, 5, 2)).equal(`  ${str} `);
    expect(utils.pad(str, 5, null)).lengthOf(5);
    expect(utils.pad(str, 5, null)).equal(`${str} `);
  });
});

describe('isSubquery', () => {
  const query: Query = {
    fields: [
      {
        type: 'FieldRelationship',
        field: 'FirstName',
        relationships: ['Contact'],
        rawValue: 'Contact.FirstName',
      },
    ],
    sObject: 'Contact',
  };

  const subquery: Subquery = {
    fields: [
      {
        type: 'Field',
        field: 'LastName',
      },
    ],
    relationshipName: 'Contacts',
  };

  it(`Should correctly detect subquery`, () => {
    expect(utils.isSubquery(subquery)).equal(true);
  });
  it(`Should correctly detect non-subquery`, () => {
    expect(utils.isSubquery(query)).equal(false);
  });
});

describe('getParams', () => {
  it(`Should correctly get params`, () => {
    expect(
      utils.getParams({
        type: 'FieldFunctionExpression',
        fn: 'FORMAT',
        rawValue: 'FORMAT(amount)',
        parameters: ['amount'],
        alias: 'Amt',
      })
    ).deep.equal(['amount']);
    expect(
      utils.getParams({
        type: 'FieldFunctionExpression',
        fn: 'FORMAT',
        parameters: ['amount', 'foo'],
        alias: 'Amt',
      })
    ).deep.equal(['amount', 'foo']);
  });
  it(`Should correctly get nested params`, () => {
    expect(
      utils.getParams({
        type: 'FieldFunctionExpression',
        fn: 'FORMAT',
        rawValue: 'FORMAT(convertCurrency(amount))',
        parameters: [
          {
            type: 'FieldFunctionExpression',
            fn: 'convertCurrency',
            rawValue: 'convertCurrency(amount)',
            parameters: ['amount'],
          },
        ],
        alias: 'convertedCurrency',
      })
    ).deep.equal(['amount']);
  });
  it(`return empty string if no params`, () => {
    expect(
      utils.getParams({
        type: 'FieldFunctionExpression',
        fn: 'COUNT',
        rawValue: 'COUNT()',
      })
    ).deep.equal([]);
  });
});
