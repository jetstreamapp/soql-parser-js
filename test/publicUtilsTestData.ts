import { Query } from '../lib';

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
          fn: 'COUNT',
          isAggregateFn: true,
          parameters: ['Id'],
        },
      ],
      sObject: 'LoginHistory',
      groupBy: {
        field: 'UserId',
      },
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
          fn: 'FORMAT',
          parameters: ['Amount'],
          alias: 'Amt',
        },
        {
          type: 'FieldFunctionExpression',
          fn: 'convertCurrency',
          parameters: ['Amount'],
          alias: 'editDate',
        },
        {
          type: 'FieldFunctionExpression',
          fn: 'FORMAT',
          parameters: [
            {
              type: 'FieldFunctionExpression',
              fn: 'convertCurrency',
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
          fn: 'FORMAT',
          parameters: ['Opportunity.amount'],
          alias: 'Amt',
        },
        {
          type: 'FieldFunctionExpression',
          fn: 'convertCurrency',
          parameters: ['Opportunity.amount'],
          alias: 'editDate',
        },
        {
          type: 'FieldFunctionExpression',
          fn: 'FORMAT',
          parameters: [
            {
              type: 'FieldFunctionExpression',
              fn: 'convertCurrency',
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
          from: 'Contacts',
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
];
