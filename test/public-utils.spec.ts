import * as utils from '../src/api/public-utils';
import { expect } from 'chai';
import 'mocha';
import { testCases } from './public-utils-test-data';
const lodashGet = require('lodash.get');

describe('getField', () => {
  it('Should compose Field', () => {
    expect(utils.getField('Id')).to.deep.equal({ type: 'Field', field: 'Id' });
    expect(utils.getField({ field: 'Id' })).to.deep.equal({
      type: 'Field',
      field: 'Id',
      objectPrefix: undefined,
    });
    expect(utils.getField({ field: 'Id', objectPrefix: 'a' })).to.deep.equal({
      type: 'Field',
      field: 'Id',
      objectPrefix: 'a',
    });
  });
  it('Should compose FieldFunctionExpression', () => {
    expect(utils.getField({ functionName: 'COUNT' })).to.deep.equal({
      type: 'FieldFunctionExpression',
      functionName: 'COUNT',
      parameters: undefined,
      alias: undefined,
    });
    expect(utils.getField({ functionName: 'FORMAT', parameters: ['Amount'] })).to.deep.equal({
      type: 'FieldFunctionExpression',
      functionName: 'FORMAT',
      parameters: ['Amount'],
      alias: undefined,
    });
    expect(utils.getField({ functionName: 'FORMAT', parameters: 'Amount' })).to.deep.equal({
      type: 'FieldFunctionExpression',
      functionName: 'FORMAT',
      parameters: ['Amount'],
      alias: undefined,
    });
    expect(utils.getField({ functionName: 'FORMAT', parameters: ['Amount'], alias: 'amt' })).to.deep.equal({
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
    ).to.deep.equal({
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
    ).to.deep.equal({
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
    expect(utils.getField({ field: 'Id', relationships: ['Account', 'User'] })).to.deep.equal({
      type: 'FieldRelationship',
      field: 'Id',
      relationships: ['Account', 'User'],
      objectPrefix: undefined,
    });
    expect(utils.getField({ field: 'Id', objectPrefix: 'c', relationships: ['Account', 'User'] })).to.deep.equal({
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
    ).to.deep.equal({
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
    it('Should compose FieldSubquery', () => {
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
      ).to.deep.equal({
        type: 'FieldSubquery',
        subquery: {
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
        },
      });
    });
  });
  it('Should fail with invalid combination of data', () => {
    expect(() => utils.getField({})).to.throw();
    expect(() => utils.getField({ objectPrefix: 'foo' } as any)).to.throw(TypeError);
    expect(() => utils.getField({ parameters: 'foo' } as any)).to.throw(TypeError);
    expect(() => utils.getField({ parameters: ['foo'] } as any)).to.throw(TypeError);
    expect(() => utils.getField({ alias: 'foo' } as any)).to.throw(TypeError);
    expect(() => utils.getField({ relationships: ['foo'] } as any)).to.throw(TypeError);
    expect(() => utils.getField({ conditions: [] } as any)).to.throw(TypeError);
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
    ).to.throw(TypeError);
  });
});

describe('getFlattenedFields', () => {
  testCases.forEach(testCase => {
    it(`Should create fields from query - Test Case: ${testCase.testCase}`, () => {
      const fields = utils.getFlattenedFields(testCase.query);
      expect(fields).to.deep.equal(testCase.expectedFields);
      fields.forEach(field => {
        expect(lodashGet(testCase.sfdcObj, field)).to.not.be.undefined;
      });
    });
  });
});
