import { Query } from '../src/api/api-models';

interface FlattenedObjTestCase {
  testCase: number;
  expectedFields: string[];
  query: Query;
  isAggregateResult?: boolean;
  sfdcObj: any;
}

export const testCases: FlattenedObjTestCase[] = [
  {
    testCase: 1,
    expectedFields: ['Id', 'Name', 'BillingCity'],
    query: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'Field',
          field: 'Name',
        },
        {
          type: 'Field',
          field: 'BillingCity',
        },
      ],
      sObject: 'Account',
    },
    sfdcObj: {
      Id: '0011800000ahbs3AAA',
      Name: 'Amendment Demo',
      BillingCity: 'Missoula',
    },
  },
  {
    testCase: 2,
    expectedFields: ['FirstName', 'Account.Name'],
    query: {
      fields: [
        {
          type: 'FieldRelationship',
          field: 'FirstName',
          relationships: ['Contact'],
        },
        {
          type: 'FieldRelationship',
          field: 'Name',
          relationships: ['Contact', 'Account'],
        },
      ],
      sObject: 'Contact',
    },
    sfdcObj: {
      FirstName: 'Rose',
      Account: {
        Name: 'Edge Communications',
      },
    },
  },
  {
    testCase: 3,
    expectedFields: ['UserId', 'expr0'],
    query: {
      fields: [
        {
          type: 'Field',
          field: 'UserId',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'COUNT',
          isAggregateFn: true,
          parameters: ['Id'],
        },
      ],
      sObject: 'LoginHistory',
      groupBy: [
        {
          field: 'UserId',
        },
      ],
    },
    sfdcObj: {
      UserId: '0051I000000rg53QAA',
      expr0: 41,
    },
  },
  {
    testCase: 4,
    expectedFields: ['Amount', 'Amt', 'editDate', 'convertedCurrency'],
    query: {
      fields: [
        {
          type: 'Field',
          field: 'Amount',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'FORMAT',
          parameters: ['Amount'],
          alias: 'Amt',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'convertCurrency',
          parameters: ['Amount'],
          alias: 'editDate',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'FORMAT',
          parameters: [
            {
              type: 'FieldFunctionExpression',
              functionName: 'convertCurrency',
              parameters: ['Amount'],
            },
          ],
          alias: 'convertedCurrency',
        },
      ],
      sObject: 'Opportunity',
    },
    sfdcObj: {
      Amount: 785,
      Amt: 'USD 785.00',
      editDate: 785,
      convertedCurrency: 'USD 785.00',
    },
  },
  {
    testCase: 5,
    expectedFields: ['Opportunity.Amt', 'Opportunity.editDate', 'Opportunity.convertedCurrency'],
    query: {
      fields: [
        {
          type: 'FieldFunctionExpression',
          functionName: 'FORMAT',
          parameters: ['Opportunity.amount'],
          alias: 'Amt',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'convertCurrency',
          parameters: ['Opportunity.amount'],
          alias: 'editDate',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'FORMAT',
          parameters: [
            {
              type: 'FieldFunctionExpression',
              functionName: 'convertCurrency',
              parameters: ['oli.Opportunity.amount'],
            },
          ],
          alias: 'convertedCurrency',
        },
      ],
      sObject: 'OpportunityLineItem',
      sObjectAlias: 'oli',
    },
    sfdcObj: {
      Opportunity: {
        Amt: 'USD 6,170.00',
        editDate: 6170,
        convertedCurrency: 'USD 6,170.00',
      },
    },
  },
  {
    testCase: 6,
    expectedFields: ['Id', 'Account.LastModifiedBy.Id', 'Account.LastModifiedBy.Name'],
    query: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'FieldRelationship',
          field: 'Id',
          relationships: ['Account', 'LastModifiedBy'],
        },
        {
          type: 'FieldRelationship',
          field: 'Name',
          relationships: ['Account', 'LastModifiedBy'],
        },
      ],
      sObject: 'Contact',
    },
    sfdcObj: {
      Id: '0031I000008E4wUQAS',
      Account: {
        LastModifiedBy: {
          Id: '0051I000001j0yAQAQ',
          Name: 'Austin Turner',
        },
      },
    },
  },
  {
    testCase: 7,
    expectedFields: ['Id', 'Name', 'Contacts'],
    query: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'Field',
          field: 'Name',
        },
        {
          type: 'FieldSubquery',
          subquery: {
            fields: [
              {
                type: 'Field',
                field: 'Id',
              },
              {
                type: 'Field',
                field: 'Name',
              },
              {
                type: 'Field',
                field: 'LastName',
              },
            ],
            relationshipName: 'Contacts',
          },
        },
      ],
      sObject: 'Account',
    },
    sfdcObj: {
      Id: '0011I00000CthpiQAB',
      Name: 'Lightning Superbadge',
      Contacts: {
        totalSize: 2,
        done: true,
        records: [
          {
            Id: '0031I000008E4wUQAS',
            Name: 'Jamie Powell',
            LastName: 'Powell',
          },
          {
            Id: '0031I000008E4wVQAS',
            Name: 'Gayatri Bhatt',
            LastName: 'Bhatt',
          },
        ],
      },
    },
  },
  {
    testCase: 8,
    expectedFields: ['Id', 'Contacts'],
    query: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
        { type: 'FieldSubquery', subquery: { fields: [{ type: 'Field', field: 'LastName' }], relationshipName: 'Contacts' } },
      ],
      sObject: 'Account',
    },
    sfdcObj: {
      Id: '0011800000ahbs3AAA',
      Name: 'Amendment Demo',
      BillingCity: 'Missoula',
      Contacts: {},
    },
  },
  {
    testCase: 9,
    expectedFields: ['Id', 'Name', 'Location__c', `expr0`],
    query: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'Field', field: 'Name' },
        { type: 'Field', field: 'Location__c' },
        {
          type: 'FieldFunctionExpression',
          functionName: 'DISTANCE',
          isAggregateFn: true,
          rawValue: `DISTANCE(Location__c, GEOLOCATION(-10.775, -10.775), 'MI')`,
          parameters: [
            'Location__c',
            {
              type: 'FieldFunctionExpression',
              functionName: 'GEOLOCATION',
              parameters: ['-10.775', '-10.775'],
              rawValue: 'GEOLOCATION(-10.775, -10.775)',
            },
            `'MI'`,
          ],
        },
      ],
      sObject: 'CONTACT',
    },
    sfdcObj: {
      Id: '0011800000ahbs3AAA',
      Name: 'Amendment Demo',
      Location__c: 'Location__c',
      expr0: {},
    },
  },
  {
    testCase: 10,
    expectedFields: ['expr0', 'Name', `SBQQ__Quote__c`],
    query: {
      fields: [
        {
          type: 'FieldFunctionExpression',
          functionName: 'COUNT',
          parameters: ['Id'],
          isAggregateFn: true,
          rawValue: 'Count(Id)',
        },
        {
          type: 'FieldRelationship',
          field: 'Name',
          relationships: ['SBQQ__Product__r'],
          rawValue: 'SBQQ__Product__r.name',
        },
        {
          type: 'Field',
          field: 'SBQQ__Quote__c',
        },
      ],
      sObject: 'SBQQ__Quoteline__c',
      groupBy: [{ field: 'SBQQ__Quote__c' }, { field: 'SBQQ__Product__r.name' }],
    },
    sfdcObj: {
      expr0: 1,
      Name: 'CPQ SaaS Admin License',
      SBQQ__Quote__c: 'a1j50000004BBOmAAO',
    },
  },
  {
    testCase: 11,
    expectedFields: ['Name', 'expr0'],
    query: {
      fields: [
        {
          type: 'FieldRelationship',
          field: 'Name',
          relationships: ['Account'],
          rawValue: 'Account.Name',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'AVG',
          parameters: ['Amount'],
          isAggregateFn: true,
          rawValue: 'AVG(Amount)',
        },
      ],
      sObject: 'Opportunity',
      groupBy: [
        {
          field: 'Account.Name',
        },
      ],
      limit: 5,
    },
    sfdcObj: {
      expr0: 1,
      Name: 'Test',
      SBQQ__Quote__c: 'a1j50000004BBOmAAO',
    },
  },
  {
    testCase: 12,
    expectedFields: ['Id', 'What.Id', 'What.Phone', 'What.Name'],
    query: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'FieldTypeof',
          field: 'What',
          conditions: [
            {
              type: 'WHEN',
              objectType: 'Account',
              fieldList: ['Id', 'Phone'],
            },
            {
              type: 'ELSE',
              fieldList: ['Id', 'Name'],
            },
          ],
        },
      ],
      sObject: 'Event',
    },
    sfdcObj: {
      Id: '00U6g000008goSXEAY',
      What: {
        Id: '5006g00000Bt97JAAR',
        Phone: '(312) 596-1000',
        Name: '00001016',
      },
    },
  },
  {
    testCase: 13,
    expectedFields: ['AccountId', 'AcctCreatedDate'],
    query: {
      fields: [
        {
          type: 'Field',
          field: 'AccountId',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'MAX',
          parameters: ['Account.CreatedDate'],
          isAggregateFn: true,
          rawValue: 'MAX(Account.CreatedDate)',
          alias: 'AcctCreatedDate',
        },
      ],
      sObject: 'Contact',
      groupBy: [
        {
          field: 'AccountId',
        },
      ],
    },
    sfdcObj: {
      AccountId: '0016g00000ETu0HAAT',
      AcctCreatedDate: '2020-02-28T03:00:31.000+0000',
    },
  },
];
