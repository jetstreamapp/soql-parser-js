import { Query } from '../src';

export interface TestCase {
  testCase: number;
  soql: string;
  soqlComposed?: string; // used if the composed is known to be different from input
  output: Query;
}

export const testCases: TestCase[] = [
  {
    testCase: 1,
    soql: "WHERE Name LIKE 'A%' AND MailingCity = 'California'",
    output: {
      where: {
        left: { field: 'Name', operator: 'LIKE', value: "'A%'", literalType: 'STRING' },
        operator: 'AND',
        right: { left: { field: 'MailingCity', operator: '=', value: "'California'", literalType: 'STRING' } },
      },
    },
  },
  {
    testCase: 2,
    soql: 'FROM Account ORDER BY Name DESC NULLS LAST',
    output: { sObject: 'Account', orderBy: [{ field: 'Name', order: 'DESC', nulls: 'LAST' }] },
  },
  {
    testCase: 3,
    soql: "SELECT Name FROM Account WHERE Industry = 'media' LIMIT 125",
    output: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: { left: { field: 'Industry', operator: '=', value: "'media'", literalType: 'STRING' } },
      limit: 125,
    },
  },
  {
    testCase: 4,
    soql: "WHERE Industry = 'media' ORDER BY BillingPostalCode ASC NULLS LAST LIMIT 125",
    output: {
      where: { left: { field: 'Industry', operator: '=', value: "'media'", literalType: 'STRING' } },
      orderBy: [{ field: 'BillingPostalCode', order: 'ASC', nulls: 'LAST' }],
      limit: 125,
    },
  },
  { testCase: 5, soql: 'FROM Lead GROUP BY LeadSource', output: { sObject: 'Lead', groupBy: [{ field: 'LeadSource' }] } },
  {
    testCase: 6,
    soql: 'GROUP BY Name HAVING COUNT(Id) > 1',
    output: {
      groupBy: [{ field: 'Name' }],
      having: {
        left: {
          operator: '>',
          value: '1',
          literalType: 'INTEGER',
          fn: { rawValue: 'COUNT(Id)', functionName: 'COUNT', parameters: ['Id'] },
        },
      },
    },
  },
  { testCase: 7, soql: 'ORDER BY Name OFFSET 100', output: { orderBy: [{ field: 'Name' }], offset: 100 } },
  {
    testCase: 8,
    soql: 'SELECT Name, (SELECT LastName FROM Contacts)',
    output: {
      fields: [
        { type: 'Field', field: 'Name' },
        { type: 'FieldSubquery', subquery: { fields: [{ type: 'Field', field: 'LastName' }], relationshipName: 'Contacts' } },
      ],
    },
  },
  {
    testCase: 9,
    soql: "WHERE Mother_of_Child__r.LastName__c LIKE 'C%'",
    output: { where: { left: { field: 'Mother_of_Child__r.LastName__c', operator: 'LIKE', value: "'C%'", literalType: 'STRING' } } },
  },
  {
    testCase: 10,
    soql: 'FROM LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21 GROUP BY UserId',
    output: {
      sObject: 'LoginHistory',
      where: {
        left: { field: 'LoginTime', operator: '>', value: '2010-09-20T22:16:30.000Z', literalType: 'DATETIME' },
        operator: 'AND',
        right: { left: { field: 'LoginTime', operator: '<', value: '2010-09-21', literalType: 'DATE' } },
      },
      groupBy: [{ field: 'UserId' }],
    },
  },
  {
    testCase: 11,
    soql: "WHERE (((Name = '1' OR Name = '2') AND Name = '3')) AND (((Description = '123') OR (Id = '1' AND Id = '2'))) AND Id = '1'",
    output: {
      where: {
        left: { openParen: 3, field: 'Name', operator: '=', value: "'1'", literalType: 'STRING' },
        operator: 'OR',
        right: {
          left: { field: 'Name', operator: '=', value: "'2'", literalType: 'STRING', closeParen: 1 },
          operator: 'AND',
          right: {
            left: { field: 'Name', operator: '=', value: "'3'", literalType: 'STRING', closeParen: 2 },
            operator: 'AND',
            right: {
              left: { openParen: 3, field: 'Description', operator: '=', value: "'123'", literalType: 'STRING', closeParen: 1 },
              operator: 'OR',
              right: {
                left: { openParen: 1, field: 'Id', operator: '=', value: "'1'", literalType: 'STRING' },
                operator: 'AND',
                right: {
                  left: { field: 'Id', operator: '=', value: "'2'", literalType: 'STRING', closeParen: 3 },
                  operator: 'AND',
                  right: { left: { field: 'Id', operator: '=', value: "'1'", literalType: 'STRING' } },
                },
              },
            },
          },
        },
      },
    },
  },
];
export default testCases;
