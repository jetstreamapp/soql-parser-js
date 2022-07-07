import { Query } from '../src/api/api-models';
import { ParseQueryConfig } from '../src/parser/parser';

export interface TestCase {
  testCase: number;
  soql: string;
  options?: ParseQueryConfig;
  input: Query;
}

// Most compose test-cases are included in `test-cases.ts`
// These tests include special compose cases where bad/unexpected data may be passed in
export const testCases: TestCase[] = [
  {
    testCase: 1,
    soql: "SELECT Id FROM Account WHERE Foo IN ('1', '2')",
    input: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
      where: {
        left: { field: 'Foo', operator: 'IN', value: ["'1'", "'2'", undefined as any], literalType: 'STRING' },
      },
    },
  },
  {
    testCase: 2,
    soql: "SELECT Id FROM Account WHERE Foo = ''",
    input: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
      where: {
        left: { field: 'Foo', operator: '=', value: undefined as any, literalType: 'STRING' },
      },
    },
  },
  {
    testCase: 3,
    soql: "SELECT Id FROM Account WHERE Id IN ('foo')",
    input: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
      where: {
        left: {
          operator: 'IN',
          field: 'Id',
          value: 'foo',
          literalType: 'STRING',
        },
      },
    },
  },
  {
    testCase: 4,
    soql: "SELECT Id FROM Account WHERE Id IN ('foo')",
    input: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
      where: {
        left: {
          operator: 'IN',
          field: 'Id',
          value: 'foo',
          literalType: ['STRING'],
        },
      },
    },
  },
  {
    testCase: 5,
    soql: "SELECT Id FROM Account WHERE Id IN ('foo')",
    input: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
      where: {
        left: {
          operator: 'IN',
          field: 'Id',
          value: ['foo'],
          literalType: 'STRING',
        },
      },
    },
  },
];

export default testCases;
