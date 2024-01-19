import { Query, ValueWithDateNLiteralCondition } from '../src/api/api-models';
import { ParseQueryConfig } from '../src/parser/parser';
// Queries obtained from SFDC examples
// https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_examples.htm
export interface TestCase {
  testCase: number;
  soql: string;
  soqlComposed?: string; // used if the composed is known to be different from input
  options?: ParseQueryConfig;
  output: Query;
}

export const testCases: TestCase[] = [
  {
    testCase: 1,
    soql: 'SELECT Id, Name, BillingCity FROM Account',
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'Field', field: 'Name' },
        { type: 'Field', field: 'BillingCity' },
      ],
      sObject: 'Account',
    },
  },
  {
    testCase: 2,
    soql: "SELECT Id FROM Contact WHERE Name LIKE 'A%' AND MailingCity = 'California'",
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Contact',
      where: {
        left: { field: 'Name', operator: 'LIKE', value: "'A%'", literalType: 'STRING' },
        operator: 'AND',
        right: { left: { field: 'MailingCity', operator: '=', value: "'California'", literalType: 'STRING' } },
      },
    },
  },
  {
    testCase: 3,
    soql: 'SELECT Name FROM Account ORDER BY Name DESC NULLS LAST',
    output: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      orderBy: [{ field: 'Name', order: 'DESC', nulls: 'LAST' }],
    },
  },
  {
    testCase: 4,
    soql: "SELECT Name FROM Account WHERE Industry = 'media' LIMIT 125",
    output: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: { left: { field: 'Industry', operator: '=', value: "'media'", literalType: 'STRING' } },
      limit: 125,
    },
  },
  {
    testCase: 5,
    soql: "SELECT Name FROM Account WHERE Industry = 'media' ORDER BY BillingPostalCode ASC NULLS LAST LIMIT 125",
    output: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: { left: { field: 'Industry', operator: '=', value: "'media'", literalType: 'STRING' } },
      orderBy: [{ field: 'BillingPostalCode', order: 'ASC', nulls: 'LAST' }],
      limit: 125,
    },
  },
  {
    testCase: 6,
    soql: 'SELECT COUNT() FROM Contact',
    output: {
      fields: [{ type: 'FieldFunctionExpression', functionName: 'COUNT', rawValue: 'COUNT()', isAggregateFn: true, parameters: [] }],
      sObject: 'Contact',
    },
  },
  {
    testCase: 7,
    soql: 'SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource',
    output: {
      fields: [
        { type: 'Field', field: 'LeadSource' },
        {
          type: 'FieldFunctionExpression',
          functionName: 'COUNT',
          rawValue: 'COUNT(Name)',
          isAggregateFn: true,
          parameters: ['Name'],
        },
      ],
      sObject: 'Lead',
      groupBy: [{ field: 'LeadSource' }],
    },
  },
  {
    testCase: 8,
    soql: 'SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 1',
    output: {
      fields: [
        { type: 'Field', field: 'Name' },
        { type: 'FieldFunctionExpression', functionName: 'COUNT', rawValue: 'COUNT(Id)', isAggregateFn: true, parameters: ['Id'] },
      ],
      sObject: 'Account',
      groupBy: [
        {
          field: 'Name',
        },
      ],
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
  {
    testCase: 9,
    soql: 'SELECT Name, Id FROM Merchandise__c ORDER BY Name OFFSET 100',
    output: {
      fields: [
        { type: 'Field', field: 'Name' },
        { type: 'Field', field: 'Id' },
      ],
      sObject: 'Merchandise__c',
      orderBy: [{ field: 'Name' }],
      offset: 100,
    },
  },
  {
    testCase: 10,
    soql: 'SELECT Name, Id FROM Merchandise__c ORDER BY Name LIMIT 20 OFFSET 100',
    output: {
      fields: [
        { type: 'Field', field: 'Name' },
        { type: 'Field', field: 'Id' },
      ],
      sObject: 'Merchandise__c',
      orderBy: [{ field: 'Name' }],
      limit: 20,
      offset: 100,
    },
  },
  {
    testCase: 11,
    soql: 'SELECT Contact.FirstName, Contact.Account.Name FROM Contact',
    output: {
      fields: [
        { type: 'FieldRelationship', field: 'FirstName', relationships: ['Contact'], rawValue: 'Contact.FirstName' },
        { type: 'FieldRelationship', field: 'Name', relationships: ['Contact', 'Account'], rawValue: 'Contact.Account.Name' },
      ],
      sObject: 'Contact',
    },
  },
  {
    testCase: 12,
    soql: "SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'media'",
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'Field', field: 'Name' },
        { type: 'FieldRelationship', field: 'Name', relationships: ['Account'], rawValue: 'Account.Name' },
      ],
      sObject: 'Contact',
      where: { left: { field: 'Account.Industry', operator: '=', value: "'media'", literalType: 'STRING' } },
    },
  },
  {
    testCase: 13,
    soql: 'SELECT Name, (SELECT LastName FROM Contacts) FROM Account',
    output: {
      fields: [
        { type: 'Field', field: 'Name' },
        { type: 'FieldSubquery', subquery: { fields: [{ type: 'Field', field: 'LastName' }], relationshipName: 'Contacts' } },
      ],
      sObject: 'Account',
    },
  },
  {
    testCase: 14,
    soql: 'SELECT Account.Name, (SELECT Contact.LastName FROM Account.Contacts) FROM Account',
    output: {
      fields: [
        { type: 'FieldRelationship', field: 'Name', relationships: ['Account'], rawValue: 'Account.Name' },
        {
          type: 'FieldSubquery',
          subquery: {
            fields: [{ type: 'FieldRelationship', field: 'LastName', relationships: ['Contact'], rawValue: 'Contact.LastName' }],
            relationshipName: 'Contacts',
            sObjectPrefix: ['Account'],
          },
        },
      ],
      sObject: 'Account',
    },
  },
  {
    testCase: 15,
    soql: "SELECT Name, (SELECT LastName FROM Contacts WHERE CreatedBy.Alias='x') FROM Account WHERE Industry='media'",
    soqlComposed: "SELECT Name, (SELECT LastName FROM Contacts WHERE CreatedBy.Alias = 'x') FROM Account WHERE Industry = 'media'",
    output: {
      fields: [
        { type: 'Field', field: 'Name' },
        {
          type: 'FieldSubquery',
          subquery: {
            fields: [{ type: 'Field', field: 'LastName' }],
            relationshipName: 'Contacts',
            where: { left: { field: 'CreatedBy.Alias', operator: '=', value: "'x'", literalType: 'STRING' } },
          },
        },
      ],
      sObject: 'Account',
      where: { left: { field: 'Industry', operator: '=', value: "'media'", literalType: 'STRING' } },
    },
  },
  {
    testCase: 16,
    soql: "SELECT Id, FirstName__c, Mother_of_Child__r.FirstName__c FROM Daughter__c WHERE Mother_of_Child__r.LastName__c LIKE 'C%'",
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'Field', field: 'FirstName__c' },
        {
          type: 'FieldRelationship',
          field: 'FirstName__c',
          relationships: ['Mother_of_Child__r'],
          rawValue: 'Mother_of_Child__r.FirstName__c',
        },
      ],
      sObject: 'Daughter__c',
      where: { left: { field: 'Mother_of_Child__r.LastName__c', operator: 'LIKE', value: "'C%'", literalType: 'STRING' } },
    },
  },
  {
    testCase: 17,
    soql: "SELECT Name, (SELECT Name FROM Line_Items__r) FROM Merchandise__c WHERE Name LIKE 'Acme%'",
    output: {
      fields: [
        { type: 'Field', field: 'Name' },
        { type: 'FieldSubquery', subquery: { fields: [{ type: 'Field', field: 'Name' }], relationshipName: 'Line_Items__r' } },
      ],
      sObject: 'Merchandise__c',
      where: { left: { field: 'Name', operator: 'LIKE', value: "'Acme%'", literalType: 'STRING' } },
    },
  },
  {
    testCase: 18,
    soql: "SELECT Id, Owner.Name FROM Task WHERE Owner.FirstName LIKE 'B%'",
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'FieldRelationship', field: 'Name', relationships: ['Owner'], rawValue: 'Owner.Name' },
      ],
      sObject: 'Task',
      where: { left: { field: 'Owner.FirstName', operator: 'LIKE', value: "'B%'", literalType: 'STRING' } },
    },
  },
  {
    testCase: 19,
    soql: "SELECT Id, Who.FirstName, Who.LastName FROM Task WHERE Owner.FirstName LIKE 'B%'",
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'FieldRelationship', field: 'FirstName', relationships: ['Who'], rawValue: 'Who.FirstName' },
        { type: 'FieldRelationship', field: 'LastName', relationships: ['Who'], rawValue: 'Who.LastName' },
      ],
      sObject: 'Task',
      where: { left: { field: 'Owner.FirstName', operator: 'LIKE', value: "'B%'", literalType: 'STRING' } },
    },
  },
  {
    testCase: 20,
    soql: 'SELECT Id, What.Name FROM Event',
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'FieldRelationship', field: 'Name', relationships: ['What'], rawValue: 'What.Name' },
      ],
      sObject: 'Event',
    },
  },
  {
    testCase: 21,
    soql:
      'SELECT TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate ELSE Name, Email END FROM Event',
    output: {
      fields: [
        {
          type: 'FieldTypeof',
          field: 'What',
          conditions: [
            { type: 'WHEN', objectType: 'Account', fieldList: ['Phone', 'NumberOfEmployees'] },
            { type: 'WHEN', objectType: 'Opportunity', fieldList: ['Amount', 'CloseDate'] },
            { type: 'ELSE', fieldList: ['Name', 'Email'] },
          ],
        },
      ],
      sObject: 'Event',
    },
  },
  {
    testCase: 22,
    soql: 'SELECT Name, (SELECT CreatedBy.Name FROM Notes) FROM Account',
    output: {
      fields: [
        { type: 'Field', field: 'Name' },
        {
          type: 'FieldSubquery',
          subquery: {
            fields: [{ type: 'FieldRelationship', field: 'Name', relationships: ['CreatedBy'], rawValue: 'CreatedBy.Name' }],
            relationshipName: 'Notes',
          },
        },
      ],
      sObject: 'Account',
    },
  },
  {
    testCase: 23,
    soql:
      'SELECT Amount, Id, Name, (SELECT Quantity, ListPrice, PricebookEntry.UnitPrice, PricebookEntry.Name FROM OpportunityLineItems) FROM Opportunity',
    output: {
      fields: [
        { type: 'Field', field: 'Amount' },
        { type: 'Field', field: 'Id' },
        { type: 'Field', field: 'Name' },
        {
          type: 'FieldSubquery',
          subquery: {
            fields: [
              { type: 'Field', field: 'Quantity' },
              { type: 'Field', field: 'ListPrice' },
              {
                type: 'FieldRelationship',
                field: 'UnitPrice',
                relationships: ['PricebookEntry'],
                rawValue: 'PricebookEntry.UnitPrice',
              },
              { type: 'FieldRelationship', field: 'Name', relationships: ['PricebookEntry'], rawValue: 'PricebookEntry.Name' },
            ],
            relationshipName: 'OpportunityLineItems',
          },
        },
      ],
      sObject: 'Opportunity',
    },
  },
  {
    testCase: 24,
    soql: 'SELECT UserId, LoginTime FROM LoginHistory',
    output: {
      fields: [
        { type: 'Field', field: 'UserId' },
        { type: 'Field', field: 'LoginTime' },
      ],
      sObject: 'LoginHistory',
    },
  },
  {
    testCase: 25,
    soql:
      'SELECT UserId, COUNT(Id) FROM LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21 GROUP BY UserId',
    output: {
      fields: [
        { type: 'Field', field: 'UserId' },
        { type: 'FieldFunctionExpression', functionName: 'COUNT', rawValue: 'COUNT(Id)', isAggregateFn: true, parameters: ['Id'] },
      ],
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
    testCase: 26,
    soql: 'SELECT Id, Name, IsActive, SobjectType, DeveloperName, Description FROM RecordType',
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'Field', field: 'Name' },
        { type: 'Field', field: 'IsActive' },
        { type: 'Field', field: 'SobjectType' },
        { type: 'Field', field: 'DeveloperName' },
        { type: 'Field', field: 'Description' },
      ],
      sObject: 'RecordType',
    },
  },
  {
    testCase: 27,
    soql: 'SELECT CampaignId, AVG(Amount) avg FROM Opportunity GROUP BY CampaignId HAVING COUNT(Id, Name) > 1',
    output: {
      fields: [
        { type: 'Field', field: 'CampaignId' },
        {
          type: 'FieldFunctionExpression',
          functionName: 'AVG',
          rawValue: 'AVG(Amount)',
          isAggregateFn: true,
          parameters: ['Amount'],
          alias: 'avg',
        },
      ],
      sObject: 'Opportunity',
      groupBy: [
        {
          field: 'CampaignId',
        },
      ],
      having: {
        left: {
          operator: '>',
          value: '1',
          literalType: 'INTEGER',
          fn: { rawValue: 'COUNT(Id, Name)', functionName: 'COUNT', parameters: ['Id', 'Name'] },
        },
      },
    },
  },
  {
    testCase: 28,
    soql: 'SELECT LeadSource, COUNT(Name) cnt FROM Lead GROUP BY ROLLUP(LeadSource)',
    output: {
      fields: [
        { type: 'Field', field: 'LeadSource' },
        {
          type: 'FieldFunctionExpression',
          functionName: 'COUNT',
          rawValue: 'COUNT(Name)',
          isAggregateFn: true,
          parameters: ['Name'],
          alias: 'cnt',
        },
      ],
      sObject: 'Lead',
      groupBy: [{ fn: { functionName: 'ROLLUP', parameters: ['LeadSource'], rawValue: 'ROLLUP(LeadSource)' } }],
    },
  },
  {
    testCase: 29,
    soql: 'SELECT Status, LeadSource, COUNT(Name) cnt FROM Lead GROUP BY ROLLUP(Status, LeadSource)',
    output: {
      fields: [
        { type: 'Field', field: 'Status' },
        { type: 'Field', field: 'LeadSource' },
        {
          type: 'FieldFunctionExpression',
          functionName: 'COUNT',
          rawValue: 'COUNT(Name)',
          isAggregateFn: true,
          parameters: ['Name'],
          alias: 'cnt',
        },
      ],
      sObject: 'Lead',
      groupBy: [{ fn: { functionName: 'ROLLUP', parameters: ['Status', 'LeadSource'], rawValue: 'ROLLUP(Status, LeadSource)' } }],
    },
  },
  {
    testCase: 30,
    soql:
      'SELECT Type, BillingCountry, GROUPING(Type)grpType, GROUPING(BillingCountry) grpCty, COUNT(id) accts FROM Account GROUP BY CUBE(Type,BillingCountry) ORDER BY GROUPING(Type), GROUPING(Id,BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST',
    soqlComposed:
      'SELECT Type, BillingCountry, GROUPING(Type) grpType, GROUPING(BillingCountry) grpCty, COUNT(id) accts FROM Account GROUP BY CUBE(Type, BillingCountry) ORDER BY GROUPING(Type), GROUPING(Id, BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST',
    output: {
      fields: [
        { type: 'Field', field: 'Type' },
        { type: 'Field', field: 'BillingCountry' },
        {
          type: 'FieldFunctionExpression',
          functionName: 'GROUPING',
          rawValue: 'GROUPING(Type)',
          parameters: ['Type'],
          alias: 'grpType',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'GROUPING',
          rawValue: 'GROUPING(BillingCountry)',
          parameters: ['BillingCountry'],
          alias: 'grpCty',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'COUNT',
          rawValue: 'COUNT(id)',
          isAggregateFn: true,
          parameters: ['id'],
          alias: 'accts',
        },
      ],
      sObject: 'Account',
      groupBy: [{ fn: { rawValue: 'CUBE(Type, BillingCountry)', parameters: ['Type', 'BillingCountry'], functionName: 'CUBE' } }],
      orderBy: [
        { fn: { rawValue: 'GROUPING(Type)', functionName: 'GROUPING', parameters: ['Type'] } },
        { fn: { rawValue: 'GROUPING(Id, BillingCountry)', functionName: 'GROUPING', parameters: ['Id', 'BillingCountry'] } },
        { field: 'Name', order: 'DESC', nulls: 'FIRST' },
        { field: 'Id', order: 'ASC', nulls: 'LAST' },
      ],
    },
  },
  {
    testCase: 31,
    soql: 'SELECT c.Name, c.Account.Name FROM Contact c',
    output: {
      fields: [
        { type: 'Field', field: 'Name', objectPrefix: 'c', rawValue: 'c.Name' },
        { type: 'FieldRelationship', field: 'Name', relationships: ['Account'], rawValue: 'c.Account.Name', objectPrefix: 'c' },
      ],
      sObject: 'Contact',
      sObjectAlias: 'c',
    },
  },
  {
    testCase: 32,
    soql:
      "SELECT Id FROM Account WHERE (Id IN ('1', '2', '3') OR (NOT Id = '2') OR (Name LIKE '%FOO%' OR (Name LIKE '%ARM%' AND FOO = 'bar')))",
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
      where: {
        left: { openParen: 1, field: 'Id', operator: 'IN', value: ["'1'", "'2'", "'3'"], literalType: 'STRING' },
        operator: 'OR',
        right: {
          left: {
            openParen: 1,
          },
          operator: 'NOT',
          right: {
            left: {
              field: 'Id',
              operator: '=',
              value: "'2'",
              literalType: 'STRING',
              closeParen: 1,
            },
            operator: 'OR',
            right: {
              left: { openParen: 1, field: 'Name', operator: 'LIKE', value: "'%FOO%'", literalType: 'STRING' },
              operator: 'OR',
              right: {
                left: { openParen: 1, field: 'Name', operator: 'LIKE', value: "'%ARM%'", literalType: 'STRING' },
                operator: 'AND',
                right: { left: { field: 'FOO', operator: '=', value: "'bar'", literalType: 'STRING', closeParen: 3 } },
              },
            },
          },
        },
      },
    },
  },
  {
    testCase: 33,
    soql: "SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource HAVING COUNT(Name) > 100 AND LeadSource > 'Phone'",
    output: {
      fields: [
        { type: 'Field', field: 'LeadSource' },
        {
          type: 'FieldFunctionExpression',
          functionName: 'COUNT',
          rawValue: 'COUNT(Name)',
          isAggregateFn: true,
          parameters: ['Name'],
        },
      ],
      sObject: 'Lead',
      groupBy: [
        {
          field: 'LeadSource',
        },
      ],
      having: {
        left: {
          operator: '>',
          value: '100',
          literalType: 'INTEGER',
          fn: { rawValue: 'COUNT(Name)', functionName: 'COUNT', parameters: ['Name'] },
        },
        operator: 'AND',
        right: { left: { field: 'LeadSource', operator: '>', value: "'Phone'", literalType: 'STRING' } },
      },
    },
  },
  {
    testCase: 34,
    soql: 'SELECT a.Id, a.Name, (SELECT a2.Id FROM ChildAccounts a2), (SELECT a1.Id FROM ChildAccounts1 a1) FROM Account a',
    output: {
      fields: [
        { type: 'Field', field: 'Id', objectPrefix: 'a', rawValue: 'a.Id' },
        { type: 'Field', field: 'Name', objectPrefix: 'a', rawValue: 'a.Name' },
        {
          type: 'FieldSubquery',
          subquery: {
            fields: [{ type: 'Field', field: 'Id', objectPrefix: 'a2', rawValue: 'a2.Id' }],
            relationshipName: 'ChildAccounts',
            sObjectAlias: 'a2',
          },
        },
        {
          type: 'FieldSubquery',
          subquery: {
            fields: [{ type: 'Field', field: 'Id', objectPrefix: 'a1', rawValue: 'a1.Id' }],
            relationshipName: 'ChildAccounts1',
            sObjectAlias: 'a1',
          },
        },
      ],
      sObject: 'Account',
      sObjectAlias: 'a',
    },
  },
  {
    testCase: 35,
    soql: "SELECT Title FROM KnowledgeArticleVersion WHERE PublishStatus = 'online' WITH DATA CATEGORY Geography__c ABOVE usa__c",
    output: {
      fields: [{ type: 'Field', field: 'Title' }],
      sObject: 'KnowledgeArticleVersion',
      where: { left: { field: 'PublishStatus', operator: '=', value: "'online'", literalType: 'STRING' } },
      withDataCategory: { conditions: [{ groupName: 'Geography__c', selector: 'ABOVE', parameters: ['usa__c'] }] },
    },
  },
  {
    testCase: 36,
    soql: 'SELECT Title FROM Question WHERE LastReplyDate > 2005-10-08T01:02:03Z WITH DATA CATEGORY Geography__c AT (usa__c, uk__c)',
    output: {
      fields: [{ type: 'Field', field: 'Title' }],
      sObject: 'Question',
      where: { left: { field: 'LastReplyDate', operator: '>', value: '2005-10-08T01:02:03Z', literalType: 'DATETIME' } },
      withDataCategory: { conditions: [{ groupName: 'Geography__c', selector: 'AT', parameters: ['usa__c', 'uk__c'] }] },
    },
  },
  {
    testCase: 37,
    soql:
      "SELECT UrlName FROM KnowledgeArticleVersion WHERE PublishStatus = 'draft' WITH DATA CATEGORY Geography__c AT usa__c AND Product__c ABOVE_OR_BELOW mobile_phones__c",
    output: {
      fields: [{ type: 'Field', field: 'UrlName' }],
      sObject: 'KnowledgeArticleVersion',
      where: { left: { field: 'PublishStatus', operator: '=', value: "'draft'", literalType: 'STRING' } },
      withDataCategory: {
        conditions: [
          { groupName: 'Geography__c', selector: 'AT', parameters: ['usa__c'] },
          { groupName: 'Product__c', selector: 'ABOVE_OR_BELOW', parameters: ['mobile_phones__c'] },
        ],
      },
    },
  },
  {
    testCase: 38,
    soql: 'SELECT Id FROM Contact FOR VIEW',
    output: { fields: [{ type: 'Field', field: 'Id' }], sObject: 'Contact', for: 'VIEW' },
  },
  {
    testCase: 39,
    soql: 'SELECT Id FROM Contact FOR REFERENCE',
    output: { fields: [{ type: 'Field', field: 'Id' }], sObject: 'Contact', for: 'REFERENCE' },
  },
  {
    testCase: 40,
    soql: 'SELECT Id FROM Contact FOR UPDATE',
    output: { fields: [{ type: 'Field', field: 'Id' }], sObject: 'Contact', for: 'UPDATE' },
  },
  {
    testCase: 41,
    soql: 'SELECT Id FROM FAQ__kav FOR UPDATE',
    output: { fields: [{ type: 'Field', field: 'Id' }], sObject: 'FAQ__kav', for: 'UPDATE' },
  },
  {
    testCase: 42,
    soql: 'SELECT Id FROM FAQ__kav FOR VIEW UPDATE TRACKING',
    output: { fields: [{ type: 'Field', field: 'Id' }], sObject: 'FAQ__kav', for: 'VIEW', update: 'TRACKING' },
  },
  {
    testCase: 43,
    soql: 'SELECT Id FROM FAQ__kav UPDATE VIEWSTAT',
    output: { fields: [{ type: 'Field', field: 'Id' }], sObject: 'FAQ__kav', update: 'VIEWSTAT' },
  },
  {
    testCase: 44,
    soql:
      "SELECT amount, FORMAT(amount) Amt, convertCurrency(amount) editDate, FORMAT(convertCurrency(amount)) convertedCurrency FROM Opportunity WHERE id = '12345'",
    output: {
      fields: [
        { type: 'Field', field: 'amount' },
        {
          type: 'FieldFunctionExpression',
          functionName: 'FORMAT',
          rawValue: 'FORMAT(amount)',
          parameters: ['amount'],
          alias: 'Amt',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'convertCurrency',
          rawValue: 'convertCurrency(amount)',
          parameters: ['amount'],
          alias: 'editDate',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'FORMAT',
          rawValue: 'FORMAT(convertCurrency(amount))',
          parameters: [
            {
              type: 'FieldFunctionExpression',
              functionName: 'convertCurrency',
              rawValue: 'convertCurrency(amount)',
              parameters: ['amount'],
            },
          ],
          alias: 'convertedCurrency',
        },
      ],
      sObject: 'Opportunity',
      where: { left: { field: 'id', operator: '=', value: "'12345'", literalType: 'STRING' } },
    },
  },
  {
    testCase: 45,
    soql: 'SELECT FORMAT(MIN(closedate)) Amt FROM Opportunity',
    output: {
      fields: [
        {
          type: 'FieldFunctionExpression',
          functionName: 'FORMAT',
          rawValue: 'FORMAT(MIN(closedate))',
          parameters: [
            {
              type: 'FieldFunctionExpression',
              functionName: 'MIN',
              rawValue: 'MIN(closedate)',
              isAggregateFn: true,
              parameters: ['closedate'],
            },
          ],
          alias: 'Amt',
        },
      ],
      sObject: 'Opportunity',
    },
  },
  {
    testCase: 46,
    soql: "SELECT Company, toLabel(Status) FROM Lead WHERE toLabel(Status) = 'le Draft'",
    output: {
      fields: [
        { type: 'Field', field: 'Company' },
        { type: 'FieldFunctionExpression', functionName: 'toLabel', rawValue: 'toLabel(Status)', parameters: ['Status'] },
      ],
      sObject: 'Lead',
      where: {
        left: {
          operator: '=',
          value: "'le Draft'",
          literalType: 'STRING',
          fn: { functionName: 'toLabel', rawValue: 'toLabel(Status)', parameters: ['Status'] },
        },
      },
    },
  },
  {
    testCase: 47,
    soql: "SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Closed Lost')",
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'Field', field: 'Name' },
      ],
      sObject: 'Account',
      where: {
        left: {
          field: 'Id',
          operator: 'IN',
          literalType: 'SUBQUERY',
          valueQuery: {
            fields: [{ type: 'Field', field: 'AccountId' }],
            sObject: 'Opportunity',
            where: { left: { field: 'StageName', operator: '=', value: "'Closed Lost'", literalType: 'STRING' } },
          },
        },
      },
    },
  },
  {
    testCase: 48,
    soql: 'SELECT Id FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE IsClosed = TRUE)',
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
      where: {
        left: {
          field: 'Id',
          operator: 'NOT IN',
          literalType: 'SUBQUERY',
          valueQuery: {
            fields: [{ type: 'Field', field: 'AccountId' }],
            sObject: 'Opportunity',
            where: { left: { field: 'IsClosed', operator: '=', value: 'TRUE', literalType: 'BOOLEAN' } },
          },
        },
      },
    },
  },
  {
    testCase: 49,
    soql:
      "SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = FALSE)",
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'Field', field: 'Name' },
      ],
      sObject: 'Account',
      where: {
        left: {
          field: 'Id',
          operator: 'IN',
          literalType: 'SUBQUERY',
          valueQuery: {
            fields: [{ type: 'Field', field: 'AccountId' }],
            sObject: 'Contact',
            where: { left: { field: 'LastName', operator: 'LIKE', value: "'apple%'", literalType: 'STRING' } },
          },
        },
        operator: 'AND',
        right: {
          left: {
            field: 'Id',
            operator: 'IN',
            literalType: 'SUBQUERY',
            valueQuery: {
              fields: [{ type: 'Field', field: 'AccountId' }],
              sObject: 'Opportunity',
              where: { left: { field: 'isClosed', operator: '=', value: 'FALSE', literalType: 'BOOLEAN' } },
            },
          },
        },
      },
    },
  },
  {
    testCase: 50,
    soql: 'SELECT Account.Name, (SELECT Contact.LastName FROM Account.Contact.Foo.Bars) FROM Account',
    output: {
      fields: [
        { type: 'FieldRelationship', field: 'Name', relationships: ['Account'], rawValue: 'Account.Name' },
        {
          type: 'FieldSubquery',
          subquery: {
            fields: [{ type: 'FieldRelationship', field: 'LastName', relationships: ['Contact'], rawValue: 'Contact.LastName' }],
            relationshipName: 'Bars',
            sObjectPrefix: ['Account', 'Contact', 'Foo'],
          },
        },
      ],
      sObject: 'Account',
    },
  },
  {
    testCase: 51,
    soql: 'SELECT LeadSource, COUNT(Name)cnt FROM Lead',
    soqlComposed: 'SELECT LeadSource, COUNT(Name) cnt FROM Lead',
    output: {
      fields: [
        { type: 'Field', field: 'LeadSource' },
        {
          type: 'FieldFunctionExpression',
          functionName: 'COUNT',
          rawValue: 'COUNT(Name)',
          isAggregateFn: true,
          parameters: ['Name'],
          alias: 'cnt',
        },
      ],
      sObject: 'Lead',
    },
  },
  {
    testCase: 52,
    soql: "SELECT Id, Name FROM Account WHERE Name != 'foo'",
    soqlComposed: "SELECT Id, Name FROM Account WHERE Name != 'foo'",
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'Field', field: 'Name' },
      ],
      sObject: 'Account',
      where: { left: { field: 'Name', operator: '!=', value: "'foo'", literalType: 'STRING' } },
    },
  },
  {
    testCase: 53,
    soql: "SELECT Id FROM Account WHERE Foo IN ('1', '2', '3') OR Bar IN (1, 2, 3) OR Baz IN (101.00, 102.50) OR Bam IN ('FOO', null)",
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
      where: {
        left: { field: 'Foo', operator: 'IN', value: ["'1'", "'2'", "'3'"], literalType: 'STRING' },
        operator: 'OR',
        right: {
          left: { field: 'Bar', operator: 'IN', value: ['1', '2', '3'], literalType: 'INTEGER' },
          operator: 'OR',
          right: {
            left: { field: 'Baz', operator: 'IN', value: ['101.00', '102.50'], literalType: 'DECIMAL' },
            operator: 'OR',
            right: { left: { field: 'Bam', operator: 'IN', value: ["'FOO'", 'null'], literalType: ['STRING', 'NULL'] } },
          },
        },
      },
    },
  },
  {
    testCase: 54,
    soql: 'SELECT Id, Name FROM Account WHERE CreatedDate > LAST_N_YEARS:1 AND LastModifiedDate > LAST_MONTH',
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'Field', field: 'Name' },
      ],
      sObject: 'Account',
      where: {
        left: {
          field: 'CreatedDate',
          operator: '>',
          value: 'LAST_N_YEARS:1',
          literalType: 'DATE_N_LITERAL',
          dateLiteralVariable: 1,
        },
        operator: 'AND',
        right: { left: { field: 'LastModifiedDate', operator: '>', value: 'LAST_MONTH', literalType: 'DATE_LITERAL' } },
      },
    },
  },
  {
    testCase: 55,
    soql:
      'SELECT Id, CreatedById, CreatedDate, DefType, IsDeleted, Format, LastModifiedById, LastModifiedDate, AuraDefinitionBundleId, ManageableState, Source, SystemModstamp FROM AuraDefinition',
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'Field', field: 'CreatedById' },
        { type: 'Field', field: 'CreatedDate' },
        { type: 'Field', field: 'DefType' },
        { type: 'Field', field: 'IsDeleted' },
        { type: 'Field', field: 'Format' },
        { type: 'Field', field: 'LastModifiedById' },
        { type: 'Field', field: 'LastModifiedDate' },
        { type: 'Field', field: 'AuraDefinitionBundleId' },
        { type: 'Field', field: 'ManageableState' },
        { type: 'Field', field: 'Source' },
        { type: 'Field', field: 'SystemModstamp' },
      ],
      sObject: 'AuraDefinition',
    },
  },
  {
    testCase: 56,
    soql: 'SELECT Id, Name, BillingCity FROM Account WITH SECURITY_ENFORCED',
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'Field', field: 'Name' },
        { type: 'Field', field: 'BillingCity' },
      ],
      sObject: 'Account',
      withSecurityEnforced: true,
    },
  },
  {
    testCase: 57,
    soql:
      "SELECT Title FROM KnowledgeArticleVersion WHERE PublishStatus = 'online' WITH DATA CATEGORY Geography__c ABOVE usa__c WITH SECURITY_ENFORCED",
    output: {
      fields: [{ type: 'Field', field: 'Title' }],
      sObject: 'KnowledgeArticleVersion',
      where: { left: { field: 'PublishStatus', operator: '=', value: "'online'", literalType: 'STRING' } },
      withDataCategory: { conditions: [{ groupName: 'Geography__c', selector: 'ABOVE', parameters: ['usa__c'] }] },
      withSecurityEnforced: true,
    },
  },
  {
    testCase: 58,
    soql:
      "SELECT Id FROM Account WHERE (((Name = '1' OR Name = '2') AND Name = '3')) AND (((Description = '123') OR (Id = '1' AND Id = '2'))) AND Id = '1'",
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
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
              left: {
                openParen: 3,
                field: 'Description',
                operator: '=',
                value: "'123'",
                literalType: 'STRING',
                closeParen: 1,
              },
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
  {
    testCase: 59,
    soql: 'SELECT TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate END FROM Event',
    output: {
      fields: [
        {
          type: 'FieldTypeof',
          field: 'What',
          conditions: [
            { type: 'WHEN', objectType: 'Account', fieldList: ['Phone', 'NumberOfEmployees'] },
            { type: 'WHEN', objectType: 'Opportunity', fieldList: ['Amount', 'CloseDate'] },
          ],
        },
      ],
      sObject: 'Event',
    },
  },
  {
    testCase: 60,
    soql: 'SELECT Name FROM Account WHERE CreatedById IN (SELECT TYPEOF Owner WHEN User THEN Id WHEN Group THEN CreatedById END FROM CASE)',
    output: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: {
        left: {
          field: 'CreatedById',
          operator: 'IN',
          literalType: 'SUBQUERY',
          valueQuery: {
            fields: [
              {
                type: 'FieldTypeof',
                field: 'Owner',
                conditions: [
                  { type: 'WHEN', objectType: 'User', fieldList: ['Id'] },
                  { type: 'WHEN', objectType: 'Group', fieldList: ['CreatedById'] },
                ],
              },
            ],
            sObject: 'CASE',
          },
        },
      },
    },
  },
  {
    testCase: 61,
    soql: 'SELECT Name FROM Account OFFSET 1',
    output: { fields: [{ type: 'Field', field: 'Name' }], sObject: 'Account', offset: 1 },
  },
  {
    testCase: 62,
    soql: 'SELECT Name FROM Account WHERE Id = :foo',
    options: { allowApexBindVariables: true },
    output: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: { left: { field: 'Id', literalType: 'APEX_BIND_VARIABLE', operator: '=', value: 'foo' } },
    },
  },
  {
    testCase: 63,
    soql: "SELECT Name FROM Account WHERE Industry IN ('media', null, 1, 'media', 2) LIMIT 125",
    output: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: {
        left: {
          field: 'Industry',
          operator: 'IN',
          value: ["'media'", 'null', '1', "'media'", '2'],
          literalType: ['STRING', 'NULL', 'INTEGER', 'STRING', 'INTEGER'],
        },
      },
      limit: 125,
    },
  },
  {
    testCase: 64,
    soql: 'SELECT Name FROM Account WHERE Foo = NULL',
    output: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: { left: { field: 'Foo', literalType: 'NULL', operator: '=', value: 'NULL' } },
    },
  },
  {
    testCase: 65,
    soql: 'SELECT Name FROM Account WHERE Foo = TODAY',
    output: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: { left: { field: 'Foo', literalType: 'DATE_LITERAL', operator: '=', value: 'TODAY' } },
    },
  },
  {
    testCase: 66,
    soql: 'SELECT Name FROM Account WHERE Foo = LAST_N_YEARS:1',
    output: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: {
        left: { field: 'Foo', literalType: 'DATE_N_LITERAL', operator: '=', value: 'LAST_N_YEARS:1', dateLiteralVariable: 1 },
      },
    },
  },
  {
    testCase: 67,
    soql: 'SELECT Name FROM Account WHERE Foo = 2010-09-20T22:16:30.000Z',
    output: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: { left: { field: 'Foo', literalType: 'DATETIME', operator: '=', value: '2010-09-20T22:16:30.000Z' } },
    },
  },
  {
    testCase: 68,
    soql: 'SELECT Name FROM Account WHERE Foo = 1',
    output: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: { left: { field: 'Foo', literalType: 'INTEGER', operator: '=', value: '1' } },
    },
  },
  {
    testCase: 69,
    soql: 'SELECT Name FROM Account WHERE Foo = TRUE AND bar = FALSE',
    output: {
      fields: [{ type: 'Field', field: 'Name' }],
      sObject: 'Account',
      where: {
        left: { field: 'Foo', literalType: 'BOOLEAN', operator: '=', value: 'TRUE' },
        operator: 'AND',
        right: { left: { field: 'bar', literalType: 'BOOLEAN', operator: '=', value: 'FALSE' } },
      },
    },
  },
  {
    testCase: 70,
    soql: 'SELECT CALENDAR_YEAR(CreatedDate) calYear, SUM(Amount) mySum FROM Opportunity GROUP BY CALENDAR_YEAR(CreatedDate)',
    output: {
      fields: [
        {
          type: 'FieldFunctionExpression',
          functionName: 'CALENDAR_YEAR',
          parameters: ['CreatedDate'],
          isAggregateFn: true,
          rawValue: 'CALENDAR_YEAR(CreatedDate)',
          alias: 'calYear',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'SUM',
          isAggregateFn: true,
          parameters: ['Amount'],
          rawValue: 'SUM(Amount)',
          alias: 'mySum',
        },
      ],
      sObject: 'Opportunity',
      groupBy: [{ fn: { functionName: 'CALENDAR_YEAR', parameters: ['CreatedDate'], rawValue: 'CALENDAR_YEAR(CreatedDate)' } }],
    },
  },
  {
    testCase: 71,
    soql:
      'SELECT CALENDAR_YEAR(convertTimezone(CreatedDate)) calYear, SUM(Amount) mySum FROM Opportunity GROUP BY CALENDAR_YEAR(convertTimezone(CreatedDate))',
    output: {
      fields: [
        {
          type: 'FieldFunctionExpression',
          functionName: 'CALENDAR_YEAR',
          parameters: [
            {
              functionName: 'convertTimezone',
              type: 'FieldFunctionExpression',
              parameters: ['CreatedDate'],
              rawValue: 'convertTimezone(CreatedDate)',
            },
          ],
          isAggregateFn: true,
          rawValue: 'CALENDAR_YEAR(convertTimezone(CreatedDate))',
          alias: 'calYear',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'SUM',
          isAggregateFn: true,
          parameters: ['Amount'],
          rawValue: 'SUM(Amount)',
          alias: 'mySum',
        },
      ],
      sObject: 'Opportunity',
      groupBy: [
        {
          fn: {
            functionName: 'CALENDAR_YEAR',
            parameters: [{ functionName: 'convertTimezone', parameters: ['CreatedDate'], rawValue: 'convertTimezone(CreatedDate)' }],
            rawValue: 'CALENDAR_YEAR(convertTimezone(CreatedDate))',
          },
        },
      ],
    },
  },
  {
    testCase: 72,
    soql: 'SELECT COUNT_DISTINCT(Company) distinct FROM Lead',
    output: {
      fields: [
        {
          type: 'FieldFunctionExpression',
          functionName: 'COUNT_DISTINCT',
          parameters: ['Company'],
          rawValue: 'COUNT_DISTINCT(Company)',
          isAggregateFn: true,
          alias: 'distinct',
        },
      ],
      sObject: 'Lead',
    },
  },
  {
    testCase: 73,
    soql: 'SELECT Name, toLabel(Recordtype.Name) FROM Account',
    output: {
      fields: [
        { type: 'Field', field: 'Name' },
        {
          type: 'FieldFunctionExpression',
          functionName: 'toLabel',
          rawValue: 'toLabel(Recordtype.Name)',
          parameters: ['Recordtype.Name'],
        },
      ],
      sObject: 'Account',
    },
  },
  {
    testCase: 74,
    soql: "SELECT Id, MSP1__c FROM CustObj__c WHERE MSP1__c INCLUDES ('AAA;BBB', 'CCC')",
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'Field', field: 'MSP1__c' },
      ],
      sObject: 'CustObj__c',
      where: { left: { field: 'MSP1__c', literalType: 'STRING', operator: 'INCLUDES', value: ["'AAA;BBB'", "'CCC'"] } },
    },
  },
  {
    testCase: 75,
    soql: 'SELECT Id FROM Account WHERE CreatedDate > LAST_N_FISCAL_QUARTERS:6',
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
      where: {
        left: {
          field: 'CreatedDate',
          literalType: 'DATE_N_LITERAL',
          operator: '>',
          value: 'LAST_N_FISCAL_QUARTERS:6',
          dateLiteralVariable: 6,
        },
      },
    },
  },
  {
    testCase: 76,
    soql: 'SELECT Id FROM Opportunity WHERE CloseDate < NEXT_N_FISCAL_YEARS:3',
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Opportunity',
      where: {
        left: {
          field: 'CloseDate',
          literalType: 'DATE_N_LITERAL',
          operator: '<',
          value: 'NEXT_N_FISCAL_YEARS:3',
          dateLiteralVariable: 3,
        },
      },
    },
  },
  {
    testCase: 77,
    soql: 'SELECT Id FROM Opportunity WHERE CloseDate > LAST_N_FISCAL_YEARS:3',
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Opportunity',
      where: {
        left: {
          field: 'CloseDate',
          literalType: 'DATE_N_LITERAL',
          operator: '>',
          value: 'LAST_N_FISCAL_YEARS:3',
          dateLiteralVariable: 3,
        },
      },
    },
  },
  {
    testCase: 78,
    soql: "SELECT Id, Title FROM Dashboard USING SCOPE allPrivate WHERE Type != 'SpecifiedUser'",
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'Field', field: 'Title' },
      ],
      sObject: 'Dashboard',
      usingScope: 'allPrivate',
      where: { left: { field: 'Type', literalType: 'STRING', operator: '!=', value: "'SpecifiedUser'" } },
    },
  },
  {
    testCase: 79,
    soql:
      'SELECT LeadSource, Rating, GROUPING(LeadSource) grpLS, GROUPING(Rating) grpRating, COUNT(Name) cnt FROM Lead GROUP BY ROLLUP(LeadSource, Rating)',
    output: {
      fields: [
        { type: 'Field', field: 'LeadSource' },
        { type: 'Field', field: 'Rating' },
        {
          type: 'FieldFunctionExpression',
          functionName: 'GROUPING',
          parameters: ['LeadSource'],
          alias: 'grpLS',
          rawValue: 'GROUPING(LeadSource)',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'GROUPING',
          parameters: ['Rating'],
          alias: 'grpRating',
          rawValue: 'GROUPING(Rating)',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'COUNT',
          parameters: ['Name'],
          alias: 'cnt',
          rawValue: 'COUNT(Name)',
          isAggregateFn: true,
        },
      ],
      sObject: 'Lead',
      groupBy: [{ fn: { functionName: 'ROLLUP', parameters: ['LeadSource', 'Rating'], rawValue: 'ROLLUP(LeadSource, Rating)' } }],
    },
  },
  {
    testCase: 80,
    soql:
      'SELECT Type, BillingCountry, GROUPING(Type) grpType, GROUPING(BillingCountry) grpCty, COUNT(id) accts FROM Account GROUP BY CUBE(Type, BillingCountry) ORDER BY GROUPING(Type), GROUPING(BillingCountry)',
    output: {
      fields: [
        { type: 'Field', field: 'Type' },
        { type: 'Field', field: 'BillingCountry' },
        {
          type: 'FieldFunctionExpression',
          functionName: 'GROUPING',
          parameters: ['Type'],
          alias: 'grpType',
          rawValue: 'GROUPING(Type)',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'GROUPING',
          parameters: ['BillingCountry'],
          alias: 'grpCty',
          rawValue: 'GROUPING(BillingCountry)',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'COUNT',
          parameters: ['id'],
          alias: 'accts',
          rawValue: 'COUNT(id)',
          isAggregateFn: true,
        },
      ],
      sObject: 'Account',
      groupBy: [{ fn: { functionName: 'CUBE', parameters: ['Type', 'BillingCountry'], rawValue: 'CUBE(Type, BillingCountry)' } }],
      orderBy: [
        { fn: { functionName: 'GROUPING', parameters: ['Type'], rawValue: 'GROUPING(Type)' } },
        { fn: { functionName: 'GROUPING', parameters: ['BillingCountry'], rawValue: 'GROUPING(BillingCountry)' } },
      ],
    },
  },
  {
    testCase: 81,
    soql:
      'SELECT HOUR_IN_DAY(convertTimezone(CreatedDate)), SUM(Amount) FROM Opportunity GROUP BY HOUR_IN_DAY(convertTimezone(CreatedDate))',
    output: {
      fields: [
        {
          type: 'FieldFunctionExpression',
          functionName: 'HOUR_IN_DAY',
          parameters: [
            {
              type: 'FieldFunctionExpression',
              functionName: 'convertTimezone',
              parameters: ['CreatedDate'],
              rawValue: 'convertTimezone(CreatedDate)',
            },
          ],
          isAggregateFn: true,
          rawValue: 'HOUR_IN_DAY(convertTimezone(CreatedDate))',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'SUM',
          parameters: ['Amount'],
          rawValue: 'SUM(Amount)',
          isAggregateFn: true,
        },
      ],
      sObject: 'Opportunity',
      groupBy: [
        {
          fn: {
            functionName: 'HOUR_IN_DAY',
            parameters: [{ functionName: 'convertTimezone', parameters: ['CreatedDate'], rawValue: 'convertTimezone(CreatedDate)' }],
            rawValue: 'HOUR_IN_DAY(convertTimezone(CreatedDate))',
          },
        },
      ],
    },
  },
  {
    testCase: 82,
    soql: 'SELECT Id FROM Opportunity WHERE Amount > USD5000',
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Opportunity',
      where: { left: { field: 'Amount', literalType: 'INTEGER_WITH_CURRENCY_PREFIX', operator: '>', value: 'USD5000' } },
    },
  },
  {
    testCase: 83,
    soql: 'SELECT Id FROM Opportunity WHERE Amount > USD5000.01',
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Opportunity',
      where: { left: { field: 'Amount', literalType: 'DECIMAL_WITH_CURRENCY_PREFIX', operator: '>', value: 'USD5000.01' } },
    },
  },
  {
    testCase: 84,
    soql: 'SELECT Id, Amount FROM Opportunity WHERE Amount IN (usd500.01, usd600)',
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'Field', field: 'Amount' },
      ],
      sObject: 'Opportunity',
      where: {
        left: {
          field: 'Amount',
          literalType: ['DECIMAL_WITH_CURRENCY_PREFIX', 'INTEGER_WITH_CURRENCY_PREFIX'],
          operator: 'IN',
          value: ['usd500.01', 'usd600'],
        },
      },
    },
  },
  {
    testCase: 85,
    soql: `SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 0 AND (Name LIKE '%testing%' OR Name LIKE '%123%')`,
    output: {
      fields: [
        { type: 'Field', field: 'Name' },
        { type: 'FieldFunctionExpression', functionName: 'COUNT', rawValue: 'COUNT(Id)', isAggregateFn: true, parameters: ['Id'] },
      ],
      sObject: 'Account',
      groupBy: [
        {
          field: 'Name',
        },
      ],
      having: {
        left: {
          operator: '>',
          value: '0',
          literalType: 'INTEGER',
          fn: { rawValue: 'COUNT(Id)', functionName: 'COUNT', parameters: ['Id'] },
        },
        operator: 'AND',
        right: {
          left: {
            openParen: 1,
            field: 'Name',
            operator: 'LIKE',
            value: `'%testing%'`,
            literalType: 'STRING',
          },
          operator: 'OR',
          right: {
            left: {
              closeParen: 1,
              field: 'Name',
              operator: 'LIKE',
              value: `'%123%'`,
              literalType: 'STRING',
            },
          },
        },
      },
    },
  },
  {
    testCase: 86,
    soql: `SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 0 AND (Name IN ('4/30 testing account', 'amendment quote doc testing', null))`,
    output: {
      fields: [
        { type: 'Field', field: 'Name' },
        { type: 'FieldFunctionExpression', functionName: 'COUNT', rawValue: 'COUNT(Id)', isAggregateFn: true, parameters: ['Id'] },
      ],
      sObject: 'Account',
      groupBy: [
        {
          field: 'Name',
        },
      ],
      having: {
        left: {
          operator: '>',
          value: '0',
          literalType: 'INTEGER',
          fn: { rawValue: 'COUNT(Id)', functionName: 'COUNT', parameters: ['Id'] },
        },
        operator: 'AND',
        right: {
          left: {
            openParen: 1,
            closeParen: 1,
            field: 'Name',
            operator: 'IN',
            value: [`'4/30 testing account'`, `'amendment quote doc testing'`, 'null'],
            literalType: ['STRING', 'STRING', 'NULL'],
          },
        },
      },
    },
  },
  {
    testCase: 87,
    soql: `SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 0 AND (NOT Name IN ('4/30 testing account', 'amendment quote doc testing'))`,
    output: {
      fields: [
        { type: 'Field', field: 'Name' },
        { type: 'FieldFunctionExpression', functionName: 'COUNT', rawValue: 'COUNT(Id)', isAggregateFn: true, parameters: ['Id'] },
      ],
      sObject: 'Account',
      groupBy: [
        {
          field: 'Name',
        },
      ],
      having: {
        left: {
          operator: '>',
          value: '0',
          literalType: 'INTEGER',
          fn: { rawValue: 'COUNT(Id)', functionName: 'COUNT', parameters: ['Id'] },
        },
        operator: 'AND',
        right: {
          left: { openParen: 1 },
          operator: 'NOT',
          right: {
            left: {
              closeParen: 1,
              field: 'Name',
              operator: 'IN',
              value: [`'4/30 testing account'`, `'amendment quote doc testing'`],
              literalType: 'STRING',
            },
          },
        },
      },
    },
  },
  {
    testCase: 88,
    soql: `SELECT Name, Location__c FROM Warehouse__c WHERE DISTANCE(Location__c, GEOLOCATION(37.775, -122.418), 'mi') < 20`,
    output: {
      fields: [
        { type: 'Field', field: 'Name' },
        { type: 'Field', field: 'Location__c' },
      ],
      sObject: 'Warehouse__c',
      where: {
        left: {
          fn: {
            rawValue: `DISTANCE(Location__c, GEOLOCATION(37.775, -122.418), 'mi')`,
            functionName: 'DISTANCE',
            parameters: [
              'Location__c',
              {
                rawValue: 'GEOLOCATION(37.775, -122.418)',
                functionName: 'GEOLOCATION',
                parameters: ['37.775', '-122.418'],
              },
              `'mi'`,
            ],
          },
          operator: '<',
          value: '20',
          literalType: 'INTEGER',
        },
      },
    },
  },
  {
    testCase: 89,
    soql: `SELECT Name, StreetAddress__c FROM Warehouse__c WHERE DISTANCE(Location__c, GEOLOCATION(37.775, -122.418), 'mi') < 20 ORDER BY DISTANCE(Location__c, GEOLOCATION(37.775, -122.418), 'mi') DESC LIMIT 10`,
    output: {
      fields: [
        { type: 'Field', field: 'Name' },
        { type: 'Field', field: 'StreetAddress__c' },
      ],
      sObject: 'Warehouse__c',
      where: {
        left: {
          fn: {
            rawValue: `DISTANCE(Location__c, GEOLOCATION(37.775, -122.418), 'mi')`,
            functionName: 'DISTANCE',
            parameters: [
              'Location__c',
              {
                rawValue: 'GEOLOCATION(37.775, -122.418)',
                functionName: 'GEOLOCATION',
                parameters: ['37.775', '-122.418'],
              },
              `'mi'`,
            ],
          },
          operator: '<',
          value: '20',
          literalType: 'INTEGER',
        },
      },
      orderBy: [
        {
          order: 'DESC',
          fn: {
            rawValue: `DISTANCE(Location__c, GEOLOCATION(37.775, -122.418), 'mi')`,
            functionName: 'DISTANCE',
            parameters: [
              'Location__c',
              {
                rawValue: 'GEOLOCATION(37.775, -122.418)',
                functionName: 'GEOLOCATION',
                parameters: ['37.775', '-122.418'],
              },
              `'mi'`,
            ],
          },
        },
      ],
      limit: 10,
    },
  },
  {
    testCase: 90,
    soql: `SELECT Id, Name, Location, DISTANCE(Location, GEOLOCATION(10, 10), 'mi') FROM CONTACT`,
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'Field', field: 'Name' },
        { type: 'Field', field: 'Location' },
        {
          type: 'FieldFunctionExpression',
          functionName: 'DISTANCE',
          isAggregateFn: true,
          rawValue: `DISTANCE(Location, GEOLOCATION(10, 10), 'mi')`,
          parameters: [
            'Location',
            {
              type: 'FieldFunctionExpression',
              functionName: 'GEOLOCATION',
              parameters: ['10', '10'],
              rawValue: 'GEOLOCATION(10, 10)',
            },
            `'mi'`,
          ],
        },
      ],
      sObject: 'CONTACT',
    },
  },
  {
    testCase: 91,
    soql: 'SELECT BillingState, BillingStreet, COUNT(Id) FROM Account GROUP BY BillingState, BillingStreet',
    output: {
      fields: [
        { type: 'Field', field: 'BillingState' },
        { type: 'Field', field: 'BillingStreet' },
        {
          type: 'FieldFunctionExpression',
          functionName: 'COUNT',
          rawValue: 'COUNT(Id)',
          isAggregateFn: true,
          parameters: ['Id'],
        },
      ],
      sObject: 'Account',
      groupBy: [{ field: 'BillingState' }, { field: 'BillingStreet' }],
    },
  },
  {
    testCase: 92,
    soql: `SELECT Id, Name, Location__c, DISTANCE(Location__c, GEOLOCATION(-10.775, -10.775), 'MI') FROM CONTACT`,
    output: {
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
  },
  {
    testCase: 93,
    soql: `SELECT Id FROM Account WHERE CreatedDate IN (TODAY)`,
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
      where: {
        left: {
          field: 'CreatedDate',
          literalType: 'DATE_LITERAL',
          operator: 'IN',
          value: ['TODAY'],
        },
      },
    },
  },
  {
    testCase: 94,
    soql: `SELECT Id FROM Account WHERE CreatedDate IN (TODAY)`,
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
      where: {
        left: {
          field: 'CreatedDate',
          literalType: 'DATE_LITERAL',
          operator: 'IN',
          value: ['TODAY'],
        },
      },
    },
  },
  {
    testCase: 95,
    soql: `SELECT Id FROM Account WHERE CreatedDate IN (TODAY, LAST_N_DAYS:4)`,
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
      where: {
        left: {
          field: 'CreatedDate',
          literalType: ['DATE_LITERAL', 'DATE_N_LITERAL'],
          operator: 'IN',
          value: ['TODAY', 'LAST_N_DAYS:4'],
          dateLiteralVariable: [null, 4],
        } as ValueWithDateNLiteralCondition,
      },
    },
  },
  {
    testCase: 96,
    soql: `SELECT Id FROM Account WHERE CreatedDate IN (LAST_N_DAYS:2)`,
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
      where: {
        left: {
          field: 'CreatedDate',
          literalType: 'DATE_N_LITERAL',
          operator: 'IN',
          value: ['LAST_N_DAYS:2'],
          dateLiteralVariable: [2],
        },
      },
    },
  },
  {
    testCase: 98,
    soql: `SELECT Id FROM Account WHERE CreatedDate IN (LAST_N_DAYS:4, LAST_N_DAYS:7)`,
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
      where: {
        left: {
          field: 'CreatedDate',
          literalType: 'DATE_N_LITERAL',
          operator: 'IN',
          value: ['LAST_N_DAYS:4', 'LAST_N_DAYS:7'],
          dateLiteralVariable: [4, 7],
        },
      },
    },
  },
  {
    testCase: 99,
    soql: `SELECT SBQQ__Product__r.Name foo, SBQQ__Quote__c foo1 FROM SBQQ__Quoteline__c GROUP BY SBQQ__Quote__c, SBQQ__Product__r.Name`,
    output: {
      fields: [
        {
          type: 'FieldRelationship',
          field: 'Name',
          relationships: ['SBQQ__Product__r'],
          rawValue: 'SBQQ__Product__r.Name',
          alias: 'foo',
        },
        {
          type: 'Field',
          field: 'SBQQ__Quote__c',
          alias: 'foo1',
        },
      ],
      sObject: 'SBQQ__Quoteline__c',
      groupBy: [{ field: 'SBQQ__Quote__c' }, { field: 'SBQQ__Product__r.Name' }],
    },
  },
  {
    testCase: 100,
    soql: `SELECT Id, convertCurrency(Amount) FROM Opportunity WHERE Amount > 0 AND CALENDAR_YEAR(CloseDate) = 2020`,
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        {
          type: 'FieldFunctionExpression',
          functionName: 'convertCurrency',
          rawValue: 'convertCurrency(Amount)',
          parameters: ['Amount'],
        },
      ],
      sObject: 'Opportunity',
      where: {
        left: {
          field: 'Amount',
          literalType: 'INTEGER',
          operator: '>',
          value: '0',
        },
        operator: 'AND',
        right: {
          left: {
            operator: '=',
            value: '2020',
            literalType: 'INTEGER',
            fn: {
              functionName: 'CALENDAR_YEAR',
              parameters: ['CloseDate'],
              rawValue: 'CALENDAR_YEAR(CloseDate)',
            },
          },
        },
      },
    },
  },
  {
    testCase: 101,
    soql:
      'SELECT Id FROM LoginHistory WHERE LoginTime > 2020-04-23T09:00:00.00000000000000000000000000000000+00:00 AND LoginTime < 2020-04-15T02:40:03.000+0000',
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'LoginHistory',
      where: {
        left: {
          field: 'LoginTime',
          operator: '>',
          value: '2020-04-23T09:00:00.00000000000000000000000000000000+00:00',
          literalType: 'DATETIME',
        },
        operator: 'AND',
        right: { left: { field: 'LoginTime', operator: '<', value: '2020-04-15T02:40:03.000+0000', literalType: 'DATETIME' } },
      },
    },
  },
  {
    testCase: 102,
    soql: 'SELECT ProductCode FROM Product2 GROUP BY ProductCode HAVING COUNT(Id) > 1 ORDER BY COUNT(Id) DESC',
    output: {
      fields: [{ type: 'Field', field: 'ProductCode' }],
      sObject: 'Product2',
      groupBy: [
        {
          field: 'ProductCode',
        },
      ],
      having: {
        left: {
          operator: '>',
          value: '1',
          literalType: 'INTEGER',
          fn: { rawValue: 'COUNT(Id)', functionName: 'COUNT', parameters: ['Id'] },
        },
      },
      orderBy: [
        {
          fn: { rawValue: 'COUNT(Id)', functionName: 'COUNT', parameters: ['Id'] },
          order: 'DESC',
        },
      ],
    },
  },
  {
    testCase: 103,
    soql: 'SELECT AnnualRevenue FROM Account WHERE NOT (AnnualRevenue > 0 AND AnnualRevenue < 200000)',
    output: {
      fields: [{ type: 'Field', field: 'AnnualRevenue' }],
      sObject: 'Account',
      where: {
        left: null,
        operator: 'NOT',
        right: {
          left: {
            field: 'AnnualRevenue',
            openParen: 1,
            operator: '>',
            value: '0',
            literalType: 'INTEGER',
          },
          operator: 'AND',
          right: {
            left: {
              field: 'AnnualRevenue',
              closeParen: 1,
              operator: '<',
              value: '200000',
              literalType: 'INTEGER',
            },
          },
        },
      },
    },
  },
  {
    testCase: 104,
    soql: 'SELECT AnnualRevenue FROM Account WHERE ((NOT AnnualRevenue > 0) AND AnnualRevenue < 200000)',
    output: {
      fields: [{ type: 'Field', field: 'AnnualRevenue' }],
      sObject: 'Account',
      where: {
        left: {
          openParen: 2,
        },
        operator: 'NOT',
        right: {
          left: {
            field: 'AnnualRevenue',
            closeParen: 1,
            operator: '>',
            value: '0',
            literalType: 'INTEGER',
          },
          operator: 'AND',
          right: {
            left: {
              field: 'AnnualRevenue',
              closeParen: 1,
              operator: '<',
              value: '200000',
              literalType: 'INTEGER',
            },
          },
        },
      },
    },
  },
  {
    testCase: 105,
    soql: `SELECT Id FROM Account WHERE NOT Id = '2'`,
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
      ],
      sObject: 'Account',
      where: {
        left: null,
        operator: 'NOT',
        right: {
          left: {
            field: 'Id',
            operator: '=',
            value: "'2'",
            literalType: 'STRING',
          },
        },
      },
    },
  },
  {
    testCase: 106,
    soql: `SELECT WEEK_IN_YEAR(CloseDate), SUM(amount) FROM Opportunity GROUP BY WEEK_IN_YEAR(CloseDate) ORDER BY WEEK_IN_YEAR(CloseDate)`,
    output: {
      fields: [
        {
          type: 'FieldFunctionExpression',
          functionName: 'WEEK_IN_YEAR',
          parameters: ['CloseDate'],
          isAggregateFn: true,
          rawValue: 'WEEK_IN_YEAR(CloseDate)',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'SUM',
          parameters: ['amount'],
          isAggregateFn: true,
          rawValue: 'SUM(amount)',
        },
      ],
      sObject: 'Opportunity',
      groupBy: [
        {
          fn: {
            functionName: 'WEEK_IN_YEAR',
            parameters: ['CloseDate'],
            rawValue: 'WEEK_IN_YEAR(CloseDate)',
          },
        },
      ],
      orderBy: [
        {
          fn: {
            functionName: 'WEEK_IN_YEAR',
            parameters: ['CloseDate'],
            rawValue: 'WEEK_IN_YEAR(CloseDate)',
          },
        },
      ],
    },
  },
  {
    testCase: 107,
    soql: `SELECT WEEK_IN_YEAR(CloseDate), SUM(amount) FROM Opportunity GROUP BY WEEK_IN_YEAR(CloseDate) ORDER BY WEEK_IN_YEAR(CloseDate) DESC NULLS FIRST`,
    output: {
      fields: [
        {
          type: 'FieldFunctionExpression',
          functionName: 'WEEK_IN_YEAR',
          parameters: ['CloseDate'],
          isAggregateFn: true,
          rawValue: 'WEEK_IN_YEAR(CloseDate)',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'SUM',
          parameters: ['amount'],
          isAggregateFn: true,
          rawValue: 'SUM(amount)',
        },
      ],
      sObject: 'Opportunity',
      groupBy: [
        {
          fn: {
            functionName: 'WEEK_IN_YEAR',
            parameters: ['CloseDate'],
            rawValue: 'WEEK_IN_YEAR(CloseDate)',
          },
        },
      ],
      orderBy: [
        {
          fn: {
            functionName: 'WEEK_IN_YEAR',
            parameters: ['CloseDate'],
            rawValue: 'WEEK_IN_YEAR(CloseDate)',
          },
          order: 'DESC',
          nulls: 'FIRST',
        },
      ],
    },
  },
  {
    testCase: 108,
    soql: `SELECT WEEK_IN_YEAR(CloseDate), SUM(amount) FROM Opportunity GROUP BY WEEK_IN_YEAR(CloseDate) ORDER BY WEEK_IN_YEAR(CloseDate) DESC NULLS LAST, SUM(amount) ASC NULLS LAST`,
    output: {
      fields: [
        {
          type: 'FieldFunctionExpression',
          functionName: 'WEEK_IN_YEAR',
          parameters: ['CloseDate'],
          isAggregateFn: true,
          rawValue: 'WEEK_IN_YEAR(CloseDate)',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'SUM',
          parameters: ['amount'],
          isAggregateFn: true,
          rawValue: 'SUM(amount)',
        },
      ],
      sObject: 'Opportunity',
      groupBy: [
        {
          fn: {
            functionName: 'WEEK_IN_YEAR',
            parameters: ['CloseDate'],
            rawValue: 'WEEK_IN_YEAR(CloseDate)',
          },
        },
      ],
      orderBy: [
        {
          fn: {
            functionName: 'WEEK_IN_YEAR',
            parameters: ['CloseDate'],
            rawValue: 'WEEK_IN_YEAR(CloseDate)',
          },
          order: 'DESC',
          nulls: 'LAST',
        },
        {
          fn: {
            functionName: 'SUM',
            parameters: ['amount'],
            rawValue: 'SUM(amount)',
          },
          order: 'ASC',
          nulls: 'LAST',
        },
      ],
    },
  },
  {
    testCase: 109,
    soql: `SELECT FIELDS(ALL) FROM Account`,
    output: {
      fields: [
        {
          type: 'FieldFunctionExpression',
          functionName: 'FIELDS',
          parameters: ['ALL'],
          rawValue: 'FIELDS(ALL)',
        },
      ],
      sObject: 'Account',
    },
  },
  {
    testCase: 110,
    soql: `SELECT FIELDS(CUSTOM), FIELDS(STANDARD) FROM Account`,
    output: {
      fields: [
        {
          type: 'FieldFunctionExpression',
          functionName: 'FIELDS',
          parameters: ['CUSTOM'],
          rawValue: 'FIELDS(CUSTOM)',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'FIELDS',
          parameters: ['STANDARD'],
          rawValue: 'FIELDS(STANDARD)',
        },
      ],
      sObject: 'Account',
    },
  },
  {
    testCase: 110,
    soql: `SELECT Id, (SELECT FIELDS(ALL) FROM Contacts) FROM Account`,
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        {
          type: 'FieldSubquery',
          subquery: {
            fields: [
              {
                type: 'FieldFunctionExpression',
                functionName: 'FIELDS',
                parameters: ['ALL'],
                rawValue: 'FIELDS(ALL)',
              },
            ],
            relationshipName: 'Contacts',
          },
        },
      ],
      sObject: 'Account',
    },
  },
  {
    testCase: 111,
    soql: `SELECT UserId, CALENDAR_MONTH(LoginTime) month FROM LoginHistory WHERE NetworkId != NULL GROUP BY UserId, CALENDAR_MONTH(LoginTime)`,
    output: {
      fields: [
        {
          type: 'Field',
          field: 'UserId',
        },
        {
          type: 'FieldFunctionExpression',
          functionName: 'CALENDAR_MONTH',
          isAggregateFn: true,
          rawValue: 'CALENDAR_MONTH(LoginTime)',
          parameters: ['LoginTime'],
          alias: 'month',
        },
      ],
      sObject: 'LoginHistory',
      where: {
        left: {
          field: 'NetworkId',
          operator: '!=',
          literalType: 'NULL',
          value: 'NULL',
        },
      },
      groupBy: [
        { field: 'UserId' },
        {
          fn: {
            functionName: 'CALENDAR_MONTH',
            rawValue: 'CALENDAR_MONTH(LoginTime)',
            parameters: ['LoginTime'],
          },
        },
      ],
    },
  },
  {
    testCase: 112,
    options: { allowApexBindVariables: true },
    soql: `SELECT Id, (SELECT Id FROM Contacts WHERE Id IN :contactMap.keySet()) FROM Account WHERE Id IN :accountMap.keySet()`,
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'FieldSubquery',
          subquery: {
            fields: [{ type: 'Field', field: 'Id' }],
            relationshipName: 'Contacts',
            where: { left: { field: 'Id', literalType: 'APEX_BIND_VARIABLE', operator: 'IN', value: 'contactMap.keySet()' } },
          },
        },
      ],
      sObject: 'Account',
      where: { left: { field: 'Id', literalType: 'APEX_BIND_VARIABLE', operator: 'IN', value: 'accountMap.keySet()' } },
    },
  },
  {
    testCase: 113,
    options: { allowApexBindVariables: true, ignoreParseErrors: true },
    soql: `SELECT Id, (SELECT Id FROM Contacts WHERE Id IN :contact_900Map.keySet()) FROM Account WHERE Id IN :acco INVALID untMap.keySet()`,
    soqlComposed: `SELECT Id, (SELECT Id FROM Contacts WHERE Id IN :contact_900Map.keySet()) FROM Account`,
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'FieldSubquery',
          subquery: {
            fields: [{ type: 'Field', field: 'Id' }],
            relationshipName: 'Contacts',
            where: { left: { field: 'Id', literalType: 'APEX_BIND_VARIABLE', operator: 'IN', value: 'contact_900Map.keySet()' } },
          },
        },
      ],
      sObject: 'Account',
    },
  },
  {
    testCase: 114,
    options: { allowApexBindVariables: true },
    soql: `SELECT Id FROM Account WHERE Id IN :new Map<Id, SObject>(someVar).keySet()`,
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
      ],
      sObject: 'Account',
      where: { left: { field: 'Id', literalType: 'APEX_BIND_VARIABLE', operator: 'IN', value: 'new Map<Id, SObject>(someVar).keySet()' } },
    },
  },
  {
    testCase: 115,
    options: { allowApexBindVariables: true },
    soql: `SELECT Id FROM Account WHERE Id IN :new Map<Id, SObject>(someVar).getSomeClass().records`,
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
      ],
      sObject: 'Account',
      where: {
        left: {
          field: 'Id',
          literalType: 'APEX_BIND_VARIABLE',
          operator: 'IN',
          value: 'new Map<Id, SObject>(someVar).getSomeClass().records',
        },
      },
    },
  },
  {
    testCase: 116,
    options: { allowApexBindVariables: true },
    soql: `SELECT Id FROM SBQQ__QuoteTerm__c WHERE SBQQ__StandardTerm__c = :CPQ_Hard_Coded_Ids__c.getInstance().Standard_Quote_Term_Id__c`,
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
      ],
      sObject: 'SBQQ__QuoteTerm__c',
      where: {
        left: {
          field: 'SBQQ__StandardTerm__c',
          literalType: 'APEX_BIND_VARIABLE',
          operator: '=',
          value: 'CPQ_Hard_Coded_Ids__c.getInstance().Standard_Quote_Term_Id__c',
        },
      },
    },
  },
  {
    testCase: 117,
    options: { allowApexBindVariables: true },
    soql: `SELECT Id FROM Opportunity WHERE SBQQ__StandardTerm__c = :quotes[3].SBQQ__QuoteLine__r[0].Term__c`,
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
      ],
      sObject: 'Opportunity',
      where: {
        left: {
          field: 'SBQQ__StandardTerm__c',
          literalType: 'APEX_BIND_VARIABLE',
          operator: '=',
          value: 'quotes[3].SBQQ__QuoteLine__r[0].Term__c',
        },
      },
    },
  },
  {
    testCase: 118,
    options: { allowApexBindVariables: true },
    soql: `SELECT Name FROM Account WHERE Name IN ('GenePoint\\'s \\n Ok!?!@#$^%$&*()_+')`,
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Name',
        },
      ],
      sObject: 'Account',
      where: {
        left: {
          field: 'Name',
          literalType: 'STRING',
          operator: 'IN',
          value: [`'GenePoint\\'s \\n Ok!?!@#$^%$&*()_+'`],
        },
      },
    },
  },
  {
    testCase: 119,
    options: { allowApexBindVariables: true },
    soql: `SELECT State_Abbr_c FROM Contact WHERE State_Abbr_c = 'MI' OR State_Abbr_c = 'km'`,
    output: {
      fields: [
        {
          type: 'Field',
          field: 'State_Abbr_c',
        },
      ],
      sObject: 'Contact',
      where: {
        left: {
          field: 'State_Abbr_c',
          literalType: 'STRING',
          operator: '=',
          value: "'MI'",
        },
        operator: 'OR',
        right: {
          left: {
            field: 'State_Abbr_c',
            literalType: 'STRING',
            operator: '=',
            value: "'km'",
          },
        },
      },
    },
  },
  {
    testCase: 119,
    options: { allowApexBindVariables: true },
    soql: `SELECT State_Abbr_c FROM Contact WHERE State_Abbr_c = 'KM'`,
    output: {
      fields: [
        {
          type: 'Field',
          field: 'State_Abbr_c',
        },
      ],
      sObject: 'Contact',
      where: {
        left: {
          field: 'State_Abbr_c',
          literalType: 'STRING',
          operator: '=',
          value: "'KM'",
        },
      },
    },
  },
  {
    testCase: 120,
    options: { allowApexBindVariables: true },
    soql: `SELECT State_Abbr_c FROM Contact WHERE State_Abbr_c IN ('mi', 'KM')`,
    output: {
      fields: [
        {
          type: 'Field',
          field: 'State_Abbr_c',
        },
      ],
      sObject: 'Contact',
      where: {
        left: {
          field: 'State_Abbr_c',
          literalType: 'STRING',
          operator: 'IN',
          value: ["'mi'", "'KM'"],
        },
      },
    },
  },
  {
    testCase: 121,
    soql: "SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource HAVING COUNT(Name) > 100 AND LeadSource > 'km'",
    output: {
      fields: [
        { type: 'Field', field: 'LeadSource' },
        {
          type: 'FieldFunctionExpression',
          functionName: 'COUNT',
          rawValue: 'COUNT(Name)',
          isAggregateFn: true,
          parameters: ['Name'],
        },
      ],
      sObject: 'Lead',
      groupBy: [
        {
          field: 'LeadSource',
        },
      ],
      having: {
        left: {
          operator: '>',
          value: '100',
          literalType: 'INTEGER',
          fn: { rawValue: 'COUNT(Name)', functionName: 'COUNT', parameters: ['Name'] },
        },
        operator: 'AND',
        right: { left: { field: 'LeadSource', operator: '>', value: "'km'", literalType: 'STRING' } },
      },
    },
  },
  {
    testCase: 122,
    soql: 'SELECT Id FROM Account WITH USER_MODE',
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
      withAccessLevel: 'USER_MODE',
    },
  },
  {
    testCase: 123,
    soql: 'SELECT Id FROM Account WITH SYSTEM_MODE',
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
      withAccessLevel: 'SYSTEM_MODE',
    },
  },
  {
    testCase: 124,
    soql: `SELECT Id, BillingCity FROM Account WHERE NOT (NOT BillingCity LIKE '%123%')`,
    output: {
      fields: [
        { type: 'Field', field: 'Id' },
        { type: 'Field', field: 'BillingCity' },
      ],
      sObject: 'Account',
      where: {
        left: null,
        operator: 'NOT',
        right: {
          left: {
            openParen: 1,
          },
          operator: 'NOT',
          right: {
            left: {
              field: 'BillingCity',
              operator: 'LIKE',
              value: `'%123%'`,
              literalType: 'STRING',
              closeParen: 1,
            },
          },
        },
      },
    },
  },
  {
    testCase: 125,
    soql: `SELECT Id FROM Account WHERE NOT (NOT Invoice_Type__c LIKE '%Usage%')`,
    output: {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Account',
      where: {
        left: null,
        operator: 'NOT',
        right: {
          left: {
            openParen: 1,
          },
          operator: 'NOT',
          right: {
            left: {
              field: 'Invoice_Type__c',
              operator: 'LIKE',
              value: `'%Usage%'`,
              literalType: 'STRING',
              closeParen: 1,
            },
          },
        },
      },
    },
  },
  {
    testCase: 126,
    soql: `SELECT Id FROM Account WHERE (NOT Invoice_Type__c LIKE '%Usage%')`,
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
      ],
      sObject: 'Account',
      where: {
        left: {
          openParen: 1,
        },
        operator: 'NOT',
        right: {
          left: {
            field: 'Invoice_Type__c',
            operator: 'LIKE',
            literalType: 'STRING',
            value: "'%Usage%'",
            closeParen: 1,
          },
        },
      },
    },
  },
  {
    testCase: 127,
    soql: `SELECT Id, City FROM Lead WHERE NOT ((NOT (City LIKE '%LHR%')) AND City LIKE '%KHR%')`,
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'Field',
          field: 'City',
        },
      ],
      sObject: 'Lead',
      where: {
        left: null,
        operator: 'NOT',
        right: {
          left: {
            openParen: 2,
          },
          operator: 'NOT',
          right: {
            left: {
              field: 'City',
              operator: 'LIKE',
              literalType: 'STRING',
              value: "'%LHR%'",
              openParen: 1,
              closeParen: 2,
            },
            operator: 'AND',
            right: {
              left: {
                field: 'City',
                operator: 'LIKE',
                literalType: 'STRING',
                value: "'%KHR%'",
                closeParen: 1,
              },
            },
          },
        },
      },
    },
  },
];

export default testCases;
