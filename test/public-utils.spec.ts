import * as utils from '../src/api/public-utils';
import { testCases } from './public-utils-test-data';
import { FieldSubquery, Query } from '../src';
const lodashGet = require('lodash.get');

describe('getField', () => {
  it('Should compose Field', () => {
    expect(utils.getField('Id')).toEqual({ type: 'Field', field: 'Id' });
    expect(utils.getField({ field: 'Id' })).toEqual({
      type: 'Field',
      field: 'Id',
      objectPrefix: undefined,
    });
    expect(utils.getField({ field: 'Id', objectPrefix: 'a' })).toEqual({
      type: 'Field',
      field: 'Id',
      objectPrefix: 'a',
    });
  });
  it('Should compose FieldFunctionExpression', () => {
    expect(utils.getField({ functionName: 'COUNT' })).toEqual({
      type: 'FieldFunctionExpression',
      functionName: 'COUNT',
      parameters: undefined,
      alias: undefined,
    });
    expect(utils.getField({ functionName: 'FORMAT', parameters: ['Amount'] })).toEqual({
      type: 'FieldFunctionExpression',
      functionName: 'FORMAT',
      parameters: ['Amount'],
      alias: undefined,
    });
    expect(utils.getField({ functionName: 'FORMAT', parameters: 'Amount' })).toEqual({
      type: 'FieldFunctionExpression',
      functionName: 'FORMAT',
      parameters: ['Amount'],
      alias: undefined,
    });
    expect(utils.getField({ functionName: 'FORMAT', parameters: ['Amount'], alias: 'amt' })).toEqual({
      type: 'FieldFunctionExpression',
      functionName: 'FORMAT',
      parameters: ['Amount'],
      alias: 'amt',
    });
    expect(
      utils.getField({
        functionName: 'FORMAT',
        parameters: [
          {
            type: 'FieldFunctionExpression',
            functionName: 'convertCurrency',
            parameters: ['amount'],
          },
        ],
        alias: 'convertedCurrency',
      }),
    ).toEqual({
      type: 'FieldFunctionExpression',
      functionName: 'FORMAT',
      parameters: [
        {
          type: 'FieldFunctionExpression',
          functionName: 'convertCurrency',
          parameters: ['amount'],
        },
      ],
      alias: 'convertedCurrency',
    });
    expect(
      utils.getField({
        functionName: 'FORMAT',
        parameters: {
          type: 'FieldFunctionExpression',
          functionName: 'convertCurrency',
          parameters: ['amount'],
        },
        alias: 'convertedCurrency',
      }),
    ).toEqual({
      type: 'FieldFunctionExpression',
      functionName: 'FORMAT',
      parameters: [
        {
          type: 'FieldFunctionExpression',
          functionName: 'convertCurrency',
          parameters: ['amount'],
        },
      ],
      alias: 'convertedCurrency',
    });
  });
  it('Should compose FieldRelationship', () => {
    expect(utils.getField({ field: 'Id', relationships: ['Account', 'User'] })).toEqual({
      type: 'FieldRelationship',
      field: 'Id',
      relationships: ['Account', 'User'],
      objectPrefix: undefined,
    });
    expect(utils.getField({ field: 'Id', objectPrefix: 'c', relationships: ['Account', 'User'] })).toEqual({
      type: 'FieldRelationship',
      field: 'Id',
      relationships: ['Account', 'User'],
      objectPrefix: 'c',
    });
  });
  it('Should compose FieldSubquery', () => {
    expect(
      utils.getField({
        subquery: {
          fields: [
            {
              type: 'FieldRelationship',
              field: 'LastName',
              relationships: ['Contact'],
              rawValue: 'Contact.LastName',
            },
          ],
          relationshipName: 'Bars',
          sObjectPrefix: ['Account', 'Contact', 'Foo'],
        },
      }),
    ).toEqual({
      type: 'FieldSubquery',
      subquery: {
        fields: [
          {
            type: 'FieldRelationship',
            field: 'LastName',
            relationships: ['Contact'],
            rawValue: 'Contact.LastName',
          },
        ],
        relationshipName: 'Bars',
        sObjectPrefix: ['Account', 'Contact', 'Foo'],
      },
    });
  });
  it('Should compose FieldTypeof', () => {
    expect(
      utils.getField({
        field: 'What',
        conditions: [
          {
            type: 'WHEN',
            objectType: 'Account',
            fieldList: ['Phone', 'NumberOfEmployees'],
          },
          {
            type: 'WHEN',
            objectType: 'Opportunity',
            fieldList: ['Amount', 'CloseDate'],
          },
          {
            type: 'ELSE',
            fieldList: ['Name', 'Email'],
          },
        ],
      }),
    ).toEqual({
      type: 'FieldTypeof',
      field: 'What',
      conditions: [
        {
          type: 'WHEN',
          objectType: 'Account',
          fieldList: ['Phone', 'NumberOfEmployees'],
        },
        {
          type: 'WHEN',
          objectType: 'Opportunity',
          fieldList: ['Amount', 'CloseDate'],
        },
        {
          type: 'ELSE',
          fieldList: ['Name', 'Email'],
        },
      ],
    });
  });
  it('Should fail with invalid combination of data', () => {
    expect(() => utils.getField({})).toThrow();
    expect(() => utils.getField({ objectPrefix: 'foo' } as any)).toThrow(TypeError);
    expect(() => utils.getField({ parameters: 'foo' } as any)).toThrow(TypeError);
    expect(() => utils.getField({ parameters: ['foo'] } as any)).toThrow(TypeError);
    expect(() => utils.getField({ alias: 'foo' } as any)).toThrow(TypeError);
    expect(() => utils.getField({ relationships: ['foo'] } as any)).toThrow(TypeError);
    expect(() => utils.getField({ conditions: [] } as any)).toThrow(TypeError);
    expect(() =>
      utils.getField({
        conditions: [
          {
            type: 'WHEN',
            objectType: 'Account',
            fieldList: ['Phone', 'NumberOfEmployees'],
          },
        ],
      } as any),
    ).toThrow(TypeError);
  });
});

describe('getFlattenedFields', () => {
  testCases.forEach(testCase => {
    it(`Should create fields from query - Test Case: ${testCase.testCase}`, () => {
      const fields = utils.getFlattenedFields(testCase.query);
      expect(fields).toEqual(testCase.expectedFields);
      fields.forEach(field => {
        expect(lodashGet(testCase.sfdcObj, field)).not.toBeUndefined();
      });
    });
  });

  it(`Should allow a FieldSubquery to be passed in`, () => {
    const fieldSubquery: FieldSubquery = {
      type: 'FieldSubquery',
      subquery: { fields: [{ type: 'Field', field: 'LastName' }], relationshipName: 'Contacts' },
    };
    const fields = utils.getFlattenedFields(fieldSubquery);
    expect(fields).toEqual(['LastName']);
  });

  it(`Should allow a Subquery to be passed in`, () => {
    const fieldSubquery: FieldSubquery = {
      type: 'FieldSubquery',
      subquery: { fields: [{ type: 'Field', field: 'LastName' }], relationshipName: 'Contacts' },
    };
    const fields = utils.getFlattenedFields(fieldSubquery.subquery);
    expect(fields).toEqual(['LastName']);
  });

  it(`Should not blow up with invalid input`, () => {
    expect(utils.getFlattenedFields({})).toEqual([]);
    expect(utils.getFlattenedFields(null as any)).toEqual([]);
    expect(utils.getFlattenedFields({ fields: [] })).toEqual([]);
  });
});
