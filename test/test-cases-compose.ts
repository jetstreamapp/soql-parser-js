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
  {
    testCase: 6,
    soql: "SELECT Id, Fax FROM Account WHERE Fax IN ('55', 'foo')",
    input: {
      sObject: 'Account',
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'Field',
          field: 'Fax',
        },
      ],
      where: {
        left: {
          field: 'Fax',
          operator: 'IN',
          value: [55, null, undefined, 'foo'],
          literalType: 'STRING',
        },
      },
    },
  },
  {
    testCase: 7,
    soql: "SELECT Id, Fax FROM Account WHERE Fax IN ('55')",
    input: {
      sObject: 'Account',
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'Field',
          field: 'Fax',
        },
      ],
      where: {
        left: {
          field: 'Fax',
          operator: 'IN',
          value: 55 as any,
          literalType: 'STRING',
        },
      },
    },
  },
  {
    testCase: 7,
    soql: "SELECT Id, Fax FROM Account WHERE Fax = '55'",
    input: {
      sObject: 'Account',
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'Field',
          field: 'Fax',
        },
      ],
      where: {
        left: {
          field: 'Fax',
          operator: '=',
          value: 55 as any,
          literalType: 'STRING',
        },
      },
    },
  },
  // Escape a single quote in a value
  {
    testCase: 100,
    soql: "SELECT Name FROM Account WHERE Industry = 'med\\'ia' LIMIT 125",
    input: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: {
        left: { field: 'Industry', operator: '=', value: "med'ia", literalType: 'STRING' },
      },
      limit: 125,
    },
  },
  // Pre-escaped single quote is left unchanged
  {
    testCase: 101,
    soql: "SELECT Name FROM Account WHERE Name = 'mr\\'s'",
    input: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: {
        left: { field: 'Name', operator: '=', value: "mr\\'s", literalType: 'STRING' },
      },
    },
  },
  // Lone backslash gets escaped
  {
    testCase: 102,
    soql: "SELECT Name FROM Account WHERE Name = 'back\\\\slash'",
    input: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: {
        left: { field: 'Name', operator: '=', value: 'back\\slash', literalType: 'STRING' },
      },
    },
  },
  // Multiple lone backslashes (using chars not in the SOQL escape set)
  {
    testCase: 103,
    soql: "SELECT Name FROM Account WHERE Name = 'a\\\\xb\\\\yc'",
    input: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: {
        left: { field: 'Name', operator: '=', value: 'a\\xb\\yc', literalType: 'STRING' },
      },
    },
  },
  // Pre-escaped backslash (\\) left unchanged
  {
    testCase: 104,
    soql: "SELECT Name FROM Account WHERE Name = 'a\\\\b'",
    input: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: {
        left: { field: 'Name', operator: '=', value: 'a\\\\b', literalType: 'STRING' },
      },
    },
  },
  // LIKE wildcard escapes (\% and \_) left unchanged
  {
    testCase: 105,
    soql: "SELECT Name FROM Account WHERE Name LIKE 'like\\%pct'",
    input: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: {
        left: { field: 'Name', operator: 'LIKE', value: 'like\\%pct', literalType: 'STRING' },
      },
    },
  },
  {
    testCase: 106,
    soql: "SELECT Name FROM Account WHERE Name LIKE 'a\\_b'",
    input: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: {
        left: { field: 'Name', operator: 'LIKE', value: 'a\\_b', literalType: 'STRING' },
      },
    },
  },
  // Unicode escape (\uXXXX) left unchanged
  {
    testCase: 107,
    soql: "SELECT Name FROM Account WHERE Name = 'caf\\u00e9'",
    input: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: {
        left: { field: 'Name', operator: '=', value: 'caf\\u00e9', literalType: 'STRING' },
      },
    },
  },
  // Invalid unicode escape (not 4 hex digits) — backslash escaped, body preserved
  {
    testCase: 108,
    soql: "SELECT Name FROM Account WHERE Name = '\\\\uZZZZ'",
    input: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: {
        left: { field: 'Name', operator: '=', value: '\\uZZZZ', literalType: 'STRING' },
      },
    },
  },
  // Other valid backslash escapes (\n, \t, \r, \", \b, \f) preserved
  {
    testCase: 109,
    soql: "SELECT Name FROM Account WHERE Name = 'line1\\nline2\\ttab\\rret'",
    input: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: {
        left: { field: 'Name', operator: '=', value: 'line1\\nline2\\ttab\\rret', literalType: 'STRING' },
      },
    },
  },
  // Mixed: unescaped quote alongside pre-escaped sequences
  {
    testCase: 110,
    soql: "SELECT Name FROM Account WHERE Name = 'it\\'s\\na test'",
    input: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: {
        left: { field: 'Name', operator: '=', value: "it's\\na test", literalType: 'STRING' },
      },
    },
  },
  // IN array with mixed escape needs
  {
    testCase: 111,
    soql: "SELECT Id FROM Account WHERE Name IN ('a\\'b', 'c\\\\d', 'e\\nf')",
    input: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
      where: {
        left: { field: 'Name', operator: 'IN', value: ["a'b", 'c\\d', 'e\\nf'], literalType: 'STRING' },
      },
    },
  },
  // Trailing backslash with nothing after it gets escaped
  {
    testCase: 112,
    soql: "SELECT Name FROM Account WHERE Name = 'trailing\\\\'",
    input: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: {
        left: { field: 'Name', operator: '=', value: 'trailing\\', literalType: 'STRING' },
      },
    },
  },
  // Round-trip: value already wrapped in quotes (as parseQuery produces) passes through unchanged
  {
    testCase: 113,
    soql: "SELECT Name FROM Account WHERE Name = 'already\\'quoted'",
    input: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: {
        left: { field: 'Name', operator: '=', value: "'already\\'quoted'", literalType: 'STRING' },
      },
    },
  },
];

export default testCases;
