import { Query } from '../lib/models/SoqlQuery.model';

// Queries obtained from SFDC examples
// https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_examples.htm
export interface TestCase {
  testCase: number;
  soql: string;
  soqlComposed?: string; // used if the composed is known to be different from input
  output: Query;
}

export const testCases: TestCase[] = [
  {
    testCase: 1,
    soql: 'SELECT Id, Name, BillingCity FROM Account',
    output: {
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
  },
  {
    testCase: 2,
    soql: "SELECT Id FROM Contact WHERE Name LIKE 'A%' AND MailingCity = 'California'",
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
      ],
      sObject: 'Contact',
      where: {
        left: {
          field: 'Name',
          operator: 'LIKE',
          value: "'A%'",
          literalType: 'STRING',
        },
        operator: 'AND',
        right: {
          left: {
            field: 'MailingCity',
            operator: '=',
            value: "'California'",
            literalType: 'STRING',
          },
        },
      },
    },
  },
  {
    testCase: 3,
    soql: 'SELECT Name FROM Account ORDER BY Name DESC NULLS LAST',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Name',
        },
      ],
      sObject: 'Account',
      orderBy: {
        field: 'Name',
        order: 'DESC',
        nulls: 'LAST',
      },
    },
  },
  {
    testCase: 4,
    soql: "SELECT Name FROM Account WHERE Industry = 'media' LIMIT 125",
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
          field: 'Industry',
          operator: '=',
          value: "'media'",
          literalType: 'STRING',
        },
      },
      limit: 125,
    },
  },
  {
    testCase: 5,
    soql: "SELECT Name FROM Account WHERE Industry = 'media' ORDER BY BillingPostalCode ASC NULLS LAST LIMIT 125",
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
          field: 'Industry',
          operator: '=',
          value: "'media'",
          literalType: 'STRING',
        },
      },
      orderBy: {
        field: 'BillingPostalCode',
        order: 'ASC',
        nulls: 'LAST',
      },
      limit: 125,
    },
  },
  {
    testCase: 6,
    soql: 'SELECT COUNT() FROM Contact',
    output: {
      fields: [
        {
          type: 'FieldFunctionExpression',
          fn: 'COUNT',
          rawValue: 'COUNT()',
          isAggregateFn: true,
        },
      ],
      sObject: 'Contact',
    },
  },
  {
    testCase: 7,
    soql: 'SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'LeadSource',
        },
        {
          type: 'FieldFunctionExpression',
          fn: 'COUNT',
          rawValue: 'COUNT(Name)',
          isAggregateFn: true,
          parameters: ['Name'],
        },
      ],
      sObject: 'Lead',
      groupBy: {
        field: 'LeadSource',
      },
    },
  },
  {
    testCase: 8,
    soql: 'SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 1',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Name',
        },
        {
          type: 'FieldFunctionExpression',
          fn: 'COUNT',
          rawValue: 'COUNT(Id)',
          isAggregateFn: true,
          parameters: ['Id'],
        },
      ],
      sObject: 'Account',
      groupBy: {
        field: 'Name',
      },
      having: {
        left: {
          operator: '>',
          value: '1',
          fn: {
            text: 'COUNT(Id)',
            name: 'COUNT',
            parameter: 'Id',
          },
        },
      },
    },
  },
  {
    testCase: 9,
    soql: 'SELECT Name, Id FROM Merchandise__c ORDER BY Name OFFSET 100',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Name',
        },
        {
          type: 'Field',
          field: 'Id',
        },
      ],
      sObject: 'Merchandise__c',
      orderBy: {
        field: 'Name',
      },
      offset: 100,
    },
  },
  {
    testCase: 10,
    soql: 'SELECT Name, Id FROM Merchandise__c ORDER BY Name LIMIT 20 OFFSET 100',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Name',
        },
        {
          type: 'Field',
          field: 'Id',
        },
      ],
      sObject: 'Merchandise__c',
      orderBy: {
        field: 'Name',
      },
      limit: 20,
      offset: 100,
    },
  },
  {
    testCase: 11,
    soql: 'SELECT Contact.FirstName, Contact.Account.Name FROM Contact',
    output: {
      fields: [
        {
          type: 'FieldRelationship',
          field: 'FirstName',
          relationships: ['Contact'],
          rawValue: 'Contact.FirstName',
        },
        {
          type: 'FieldRelationship',
          field: 'Name',
          relationships: ['Contact', 'Account'],
          rawValue: 'Contact.Account.Name',
        },
      ],
      sObject: 'Contact',
    },
  },
  {
    testCase: 12,
    soql: "SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'media'",
    output: {
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
          type: 'FieldRelationship',
          field: 'Name',
          relationships: ['Account'],
          rawValue: 'Account.Name',
        },
      ],
      sObject: 'Contact',
      where: {
        left: {
          field: 'Account.Industry',
          operator: '=',
          value: "'media'",
          literalType: 'STRING',
        },
      },
    },
  },
  {
    testCase: 13,
    soql: 'SELECT Name, (SELECT LastName FROM Contacts) FROM Account',
    output: {
      fields: [
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
                field: 'LastName',
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
    testCase: 14,
    soql: 'SELECT Account.Name, (SELECT Contact.LastName FROM Account.Contacts) FROM Account',
    output: {
      fields: [
        {
          type: 'FieldRelationship',
          field: 'Name',
          relationships: ['Account'],
          rawValue: 'Account.Name',
        },
        {
          type: 'FieldSubquery',
          from: 'Contacts',
          subquery: {
            fields: [
              {
                type: 'FieldRelationship',
                field: 'LastName',
                relationships: ['Contact'],
                rawValue: 'Contact.LastName',
              },
            ],
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
    soqlComposed:
      "SELECT Name, (SELECT LastName FROM Contacts WHERE CreatedBy.Alias = 'x') FROM Account WHERE Industry = 'media'",
    output: {
      fields: [
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
                field: 'LastName',
              },
            ],
            relationshipName: 'Contacts',
            where: {
              left: {
                field: 'CreatedBy.Alias',
                operator: '=',
                value: "'x'",
                literalType: 'STRING',
              },
            },
          },
        },
      ],
      sObject: 'Account',
      where: {
        left: {
          field: 'Industry',
          operator: '=',
          value: "'media'",
          literalType: 'STRING',
        },
      },
    },
  },
  {
    testCase: 16,
    soql:
      "SELECT Id, FirstName__c, Mother_of_Child__r.FirstName__c FROM Daughter__c WHERE Mother_of_Child__r.LastName__c LIKE 'C%'",
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'Field',
          field: 'FirstName__c',
        },
        {
          type: 'FieldRelationship',
          field: 'FirstName__c',
          relationships: ['Mother_of_Child__r'],
          rawValue: 'Mother_of_Child__r.FirstName__c',
        },
      ],
      sObject: 'Daughter__c',
      where: {
        left: {
          field: 'Mother_of_Child__r.LastName__c',
          operator: 'LIKE',
          value: "'C%'",
          literalType: 'STRING',
        },
      },
    },
  },
  {
    testCase: 17,
    soql: "SELECT Name, (SELECT Name FROM Line_Items__r) FROM Merchandise__c WHERE Name LIKE 'Acme%'",
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Name',
        },
        {
          type: 'FieldSubquery',
          from: 'Line_Items__r',
          subquery: {
            fields: [
              {
                type: 'Field',
                field: 'Name',
              },
            ],
            relationshipName: 'Line_Items__r',
          },
        },
      ],
      sObject: 'Merchandise__c',
      where: {
        left: {
          field: 'Name',
          operator: 'LIKE',
          value: "'Acme%'",
          literalType: 'STRING',
        },
      },
    },
  },
  {
    testCase: 18,
    soql: "SELECT Id, Owner.Name FROM Task WHERE Owner.FirstName LIKE 'B%'",
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'FieldRelationship',
          field: 'Name',
          relationships: ['Owner'],
          rawValue: 'Owner.Name',
        },
      ],
      sObject: 'Task',
      where: {
        left: {
          field: 'Owner.FirstName',
          operator: 'LIKE',
          value: "'B%'",
          literalType: 'STRING',
        },
      },
    },
  },
  {
    testCase: 19,
    soql: "SELECT Id, Who.FirstName, Who.LastName FROM Task WHERE Owner.FirstName LIKE 'B%'",
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'FieldRelationship',
          field: 'FirstName',
          relationships: ['Who'],
          rawValue: 'Who.FirstName',
        },
        {
          type: 'FieldRelationship',
          field: 'LastName',
          relationships: ['Who'],
          rawValue: 'Who.LastName',
        },
      ],
      sObject: 'Task',
      where: {
        left: {
          field: 'Owner.FirstName',
          operator: 'LIKE',
          value: "'B%'",
          literalType: 'STRING',
        },
      },
    },
  },
  {
    testCase: 20,
    soql: 'SELECT Id, What.Name FROM Event',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'FieldRelationship',
          field: 'Name',
          relationships: ['What'],
          rawValue: 'What.Name',
        },
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
      ],
      sObject: 'Event',
    },
  },
  {
    testCase: 22,
    soql: 'SELECT Name, (SELECT CreatedBy.Name FROM Notes) FROM Account',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Name',
        },
        {
          type: 'FieldSubquery',
          from: 'Notes',
          subquery: {
            fields: [
              {
                type: 'FieldRelationship',
                field: 'Name',
                relationships: ['CreatedBy'],
                rawValue: 'CreatedBy.Name',
              },
            ],
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
        {
          type: 'Field',
          field: 'Amount',
        },
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
          from: 'OpportunityLineItems',
          subquery: {
            fields: [
              {
                type: 'Field',
                field: 'Quantity',
              },
              {
                type: 'Field',
                field: 'ListPrice',
              },
              {
                type: 'FieldRelationship',
                field: 'UnitPrice',
                relationships: ['PricebookEntry'],
                rawValue: 'PricebookEntry.UnitPrice',
              },
              {
                type: 'FieldRelationship',
                field: 'Name',
                relationships: ['PricebookEntry'],
                rawValue: 'PricebookEntry.Name',
              },
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
        {
          type: 'Field',
          field: 'UserId',
        },
        {
          type: 'Field',
          field: 'LoginTime',
        },
      ],
      sObject: 'LoginHistory',
    },
  },
  {
    testCase: 25,
    soql: `SELECT UserId, COUNT(Id) FROM LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21 GROUP BY UserId`,
    output: {
      fields: [
        {
          type: 'Field',
          field: 'UserId',
        },
        {
          type: 'FieldFunctionExpression',
          fn: 'COUNT',
          rawValue: 'COUNT(Id)',
          isAggregateFn: true,
          parameters: ['Id'],
        },
      ],
      sObject: 'LoginHistory',
      where: {
        left: {
          field: 'LoginTime',
          operator: '>',
          value: '2010-09-20T22:16:30.000Z',
          literalType: 'DATETIME',
        },
        operator: 'AND',
        right: {
          left: {
            field: 'LoginTime',
            operator: '<',
            value: '2010-09-21',
            literalType: 'DATE',
          },
        },
      },
      groupBy: {
        field: 'UserId',
      },
    },
  },
  {
    testCase: 26,
    soql: 'SELECT Id, Name, IsActive, SobjectType, DeveloperName, Description FROM RecordType',
    output: {
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
          field: 'IsActive',
        },
        {
          type: 'Field',
          field: 'SobjectType',
        },
        {
          type: 'Field',
          field: 'DeveloperName',
        },
        {
          type: 'Field',
          field: 'Description',
        },
      ],
      sObject: 'RecordType',
    },
  },
  {
    testCase: 27,
    soql: 'SELECT CampaignId, AVG(Amount) avg FROM Opportunity GROUP BY CampaignId HAVING COUNT(Id, Name) > 1',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'CampaignId',
        },
        {
          type: 'FieldFunctionExpression',
          fn: 'AVG',
          rawValue: 'AVG(Amount)',
          isAggregateFn: true,
          parameters: ['Amount'],
          alias: 'avg',
        },
      ],
      sObject: 'Opportunity',
      groupBy: {
        field: 'CampaignId',
      },
      having: {
        left: {
          operator: '>',
          value: '1',
          fn: {
            text: 'COUNT(Id,Name)',
            name: 'COUNT',
            parameter: ['Id', 'Name'],
          },
        },
      },
    },
  },
  {
    testCase: 28,
    soql: 'SELECT LeadSource, COUNT(Name) cnt FROM Lead GROUP BY ROLLUP(LeadSource)',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'LeadSource',
        },
        {
          type: 'FieldFunctionExpression',
          fn: 'COUNT',
          rawValue: 'COUNT(Name)',
          isAggregateFn: true,
          parameters: ['Name'],
          alias: 'cnt',
        },
      ],
      sObject: 'Lead',
      groupBy: {
        field: 'LeadSource',
        type: 'ROLLUP',
      },
    },
  },
  {
    testCase: 29,
    soql: 'SELECT Status, LeadSource, COUNT(Name) cnt FROM Lead GROUP BY ROLLUP(Status, LeadSource)',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Status',
        },
        {
          type: 'Field',
          field: 'LeadSource',
        },
        {
          type: 'FieldFunctionExpression',
          fn: 'COUNT',
          rawValue: 'COUNT(Name)',
          isAggregateFn: true,
          parameters: ['Name'],
          alias: 'cnt',
        },
      ],
      sObject: 'Lead',
      groupBy: {
        field: ['Status', 'LeadSource'],
        type: 'ROLLUP',
      },
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
        {
          type: 'Field',
          field: 'Type',
        },
        {
          type: 'Field',
          field: 'BillingCountry',
        },
        {
          type: 'FieldFunctionExpression',
          fn: 'GROUPING',
          rawValue: 'GROUPING(Type)',
          parameters: ['Type'],
          alias: 'grpType',
        },
        {
          type: 'FieldFunctionExpression',
          fn: 'GROUPING',
          rawValue: 'GROUPING(BillingCountry)',
          parameters: ['BillingCountry'],
          alias: 'grpCty',
        },
        {
          type: 'FieldFunctionExpression',
          fn: 'COUNT',
          rawValue: 'COUNT(id)',
          isAggregateFn: true,
          parameters: ['id'],
          alias: 'accts',
        },
      ],
      sObject: 'Account',
      groupBy: {
        field: ['Type', 'BillingCountry'],
        type: 'CUBE',
      },
      orderBy: [
        {
          fn: {
            text: 'GROUPING(Type)',
            name: 'GROUPING',
            parameter: 'Type',
          },
        },
        {
          fn: {
            text: 'GROUPING(Id,BillingCountry)',
            name: 'GROUPING',
            parameter: ['Id', 'BillingCountry'],
          },
        },
        {
          field: 'Name',
          order: 'DESC',
          nulls: 'FIRST',
        },
        {
          field: 'Id',
          order: 'ASC',
          nulls: 'LAST',
        },
      ],
    },
  },
  {
    testCase: 31,
    soql: 'SELECT c.Name, c.Account.Name FROM Contact c',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Name',
          objectPrefix: 'c',
        },
        {
          type: 'FieldRelationship',
          field: 'Name',
          relationships: ['Account'],
          rawValue: 'c.Account.Name',
          objectPrefix: 'c',
        },
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
          field: 'Id',
          operator: 'IN',
          value: ["'1'", "'2'", "'3'"],
          literalType: 'STRING',
        },
        operator: 'OR',
        right: {
          left: {
            openParen: 1,
            logicalPrefix: 'NOT',
            field: 'Id',
            operator: '=',
            value: "'2'",
            literalType: 'STRING',
            closeParen: 1,
          },
          operator: 'OR',
          right: {
            left: {
              openParen: 1,
              field: 'Name',
              operator: 'LIKE',
              value: "'%FOO%'",
              literalType: 'STRING',
            },
            operator: 'OR',
            right: {
              left: {
                openParen: 1,
                field: 'Name',
                operator: 'LIKE',
                value: "'%ARM%'",
                literalType: 'STRING',
              },
              operator: 'AND',
              right: {
                left: {
                  field: 'FOO',
                  operator: '=',
                  value: "'bar'",
                  literalType: 'STRING',
                  closeParen: 3,
                },
              },
            },
          },
        },
      },
    },
  },
  {
    testCase: 33,
    soql:
      "SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource HAVING COUNT(Name) > 100 and LeadSource > 'Phone'",
    output: {
      fields: [
        {
          type: 'Field',
          field: 'LeadSource',
        },
        {
          type: 'FieldFunctionExpression',
          fn: 'COUNT',
          rawValue: 'COUNT(Name)',
          isAggregateFn: true,
          parameters: ['Name'],
        },
      ],
      sObject: 'Lead',
      groupBy: {
        field: 'LeadSource',
      },
      having: {
        left: {
          operator: '>',
          value: '100',
          fn: {
            text: 'COUNT(Name)',
            name: 'COUNT',
            parameter: 'Name',
          },
        },
        operator: 'AND',
        right: {
          left: {
            operator: '>',
            value: "'Phone'",
            field: 'LeadSource',
          },
        },
      },
    },
  },
  {
    testCase: 34,
    soql:
      'SELECT a.Id, a.Name, (SELECT a2.Id FROM ChildAccounts a2), (SELECT a1.Id FROM ChildAccounts1 a1) FROM Account a',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
          objectPrefix: 'a',
        },
        {
          type: 'Field',
          field: 'Name',
          objectPrefix: 'a',
        },
        {
          type: 'FieldSubquery',
          from: 'ChildAccounts',
          subquery: {
            fields: [
              {
                type: 'Field',
                field: 'Id',
                objectPrefix: 'a2',
              },
            ],
            relationshipName: 'ChildAccounts',
            sObjectAlias: 'a2',
          },
        },
        {
          type: 'FieldSubquery',
          from: 'ChildAccounts1',
          subquery: {
            fields: [
              {
                type: 'Field',
                field: 'Id',
                objectPrefix: 'a1',
              },
            ],
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
    soql:
      "SELECT Title FROM KnowledgeArticleVersion WHERE PublishStatus = 'online' WITH DATA CATEGORY Geography__c ABOVE usa__c",
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Title',
        },
      ],
      sObject: 'KnowledgeArticleVersion',
      where: {
        left: {
          field: 'PublishStatus',
          operator: '=',
          value: "'online'",
          literalType: 'STRING',
        },
      },
      withDataCategory: {
        conditions: [
          {
            groupName: 'Geography__c',
            selector: 'ABOVE',
            parameters: ['usa__c'],
          },
        ],
      },
    },
  },
  {
    testCase: 36,
    soql:
      'SELECT Title FROM Question WHERE LastReplyDate > 2005-10-08T01:02:03Z WITH DATA CATEGORY Geography__c AT (usa__c, uk__c)',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Title',
        },
      ],
      sObject: 'Question',
      where: {
        left: {
          field: 'LastReplyDate',
          operator: '>',
          value: '2005-10-08T01:02:03Z',
          literalType: 'DATETIME',
        },
      },
      withDataCategory: {
        conditions: [
          {
            groupName: 'Geography__c',
            selector: 'AT',
            parameters: ['usa__c', 'uk__c'],
          },
        ],
      },
    },
  },
  {
    testCase: 37,
    soql:
      "SELECT UrlName FROM KnowledgeArticleVersion WHERE PublishStatus = 'draft' WITH DATA CATEGORY Geography__c AT usa__c AND Product__c ABOVE_OR_BELOW mobile_phones__c",
    output: {
      fields: [
        {
          type: 'Field',
          field: 'UrlName',
        },
      ],
      sObject: 'KnowledgeArticleVersion',
      where: {
        left: {
          field: 'PublishStatus',
          operator: '=',
          value: "'draft'",
          literalType: 'STRING',
        },
      },
      withDataCategory: {
        conditions: [
          {
            groupName: 'Geography__c',
            selector: 'AT',
            parameters: ['usa__c'],
          },
          {
            groupName: 'Product__c',
            selector: 'ABOVE_OR_BELOW',
            parameters: ['mobile_phones__c'],
          },
        ],
      },
    },
  },
  {
    testCase: 38,
    soql: 'SELECT Id FROM Contact FOR VIEW',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
      ],
      sObject: 'Contact',
      for: 'VIEW',
    },
  },
  {
    testCase: 39,
    soql: 'SELECT Id FROM Contact FOR REFERENCE',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
      ],
      sObject: 'Contact',
      for: 'REFERENCE',
    },
  },
  {
    testCase: 40,
    soql: 'SELECT Id FROM Contact FOR UPDATE',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
      ],
      sObject: 'Contact',
      for: 'UPDATE',
    },
  },
  {
    testCase: 41,
    soql: 'SELECT Id FROM FAQ__kav FOR UPDATE',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
      ],
      sObject: 'FAQ__kav',
      for: 'UPDATE',
    },
  },
  {
    testCase: 42,
    soql: 'SELECT Id FROM FAQ__kav FOR VIEW UPDATE TRACKING',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
      ],
      sObject: 'FAQ__kav',
      for: 'VIEW',
      update: 'TRACKING',
    },
  },
  {
    testCase: 43,
    soql: 'SELECT Id FROM FAQ__kav UPDATE VIEWSTAT',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
      ],
      sObject: 'FAQ__kav',
      update: 'VIEWSTAT',
    },
  },
  {
    testCase: 44,
    soql:
      "SELECT amount, FORMAT(amount) Amt, convertCurrency(amount) editDate, FORMAT(convertCurrency(amount)) convertedCurrency FROM Opportunity WHERE id = '12345'",
    output: {
      fields: [
        {
          type: 'Field',
          field: 'amount',
        },
        {
          type: 'FieldFunctionExpression',
          fn: 'FORMAT',
          rawValue: 'FORMAT(amount)',
          parameters: ['amount'],
          alias: 'Amt',
        },
        {
          type: 'FieldFunctionExpression',
          fn: 'convertCurrency',
          rawValue: 'convertCurrency(amount)',
          parameters: ['amount'],
          alias: 'editDate',
        },
        {
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
        },
      ],
      sObject: 'Opportunity',
      where: {
        left: {
          field: 'id',
          operator: '=',
          value: "'12345'",
          literalType: 'STRING',
        },
      },
    },
  },
  {
    testCase: 45,
    soql: 'SELECT FORMAT(MIN(closedate)) Amt FROM Opportunity',
    output: {
      fields: [
        {
          type: 'FieldFunctionExpression',
          fn: 'FORMAT',
          rawValue: 'FORMAT(MIN(closedate))',
          parameters: [
            {
              type: 'FieldFunctionExpression',
              fn: 'MIN',
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
        {
          type: 'Field',
          field: 'Company',
        },
        {
          type: 'FieldFunctionExpression',
          fn: 'toLabel',
          rawValue: 'toLabel(Status)',
          parameters: ['Status'],
        },
      ],
      sObject: 'Lead',
      where: {
        left: {
          operator: '=',
          value: "'le Draft'",
          literalType: 'STRING',
          fn: {
            text: 'toLabel(Status)',
            name: 'toLabel',
            parameter: 'Status',
          },
        },
      },
    },
  },
  {
    testCase: 47,
    soql:
      "SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Closed Lost')",
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'Field',
          field: 'Name',
        },
      ],
      sObject: 'Account',
      where: {
        left: {
          field: 'Id',
          operator: 'IN',
          valueQuery: {
            fields: [
              {
                type: 'Field',
                field: 'AccountId',
              },
            ],
            sObject: 'Opportunity',
            where: {
              left: {
                field: 'StageName',
                operator: '=',
                value: "'Closed Lost'",
                literalType: 'STRING',
              },
            },
          },
        },
      },
    },
  },
  {
    testCase: 48,
    soql: 'SELECT Id FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE IsClosed = false)',
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
          operator: 'NOT IN',
          valueQuery: {
            fields: [
              {
                type: 'Field',
                field: 'AccountId',
              },
            ],
            sObject: 'Opportunity',
            where: {
              left: {
                field: 'IsClosed',
                operator: '=',
                value: 'false',
                literalType: 'BOOLEAN',
              },
            },
          },
        },
      },
    },
  },
  {
    testCase: 49,
    soql:
      "SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false)",
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'Field',
          field: 'Name',
        },
      ],
      sObject: 'Account',
      where: {
        left: {
          field: 'Id',
          operator: 'IN',
          valueQuery: {
            fields: [
              {
                type: 'Field',
                field: 'AccountId',
              },
            ],
            sObject: 'Contact',
            where: {
              left: {
                field: 'LastName',
                operator: 'LIKE',
                value: "'apple%'",
                literalType: 'STRING',
              },
            },
          },
        },
        operator: 'AND',
        right: {
          left: {
            field: 'Id',
            operator: 'IN',
            valueQuery: {
              fields: [
                {
                  type: 'Field',
                  field: 'AccountId',
                },
              ],
              sObject: 'Opportunity',
              where: {
                left: {
                  field: 'isClosed',
                  operator: '=',
                  value: 'false',
                  literalType: 'BOOLEAN',
                },
              },
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
        {
          type: 'FieldRelationship',
          field: 'Name',
          relationships: ['Account'],
          rawValue: 'Account.Name',
        },
        {
          type: 'FieldSubquery',
          from: 'Bars',
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
        {
          type: 'Field',
          field: 'LeadSource',
        },
        {
          type: 'FieldFunctionExpression',
          fn: 'COUNT',
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
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'Field',
          field: 'Name',
        },
      ],
      sObject: 'Account',
      where: {
        left: {
          field: 'Name',
          operator: '!=',
          value: "'foo'",
          literalType: 'STRING',
        },
      },
    },
  },
  {
    testCase: 53,
    soql:
      "SELECT Id FROM Account WHERE Foo IN ('1', '2', '3') OR Bar IN (1, 2, 3) OR Baz IN (101.00, 102.50) OR Bam IN ('FOO', null)",
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
          field: 'Foo',
          operator: 'IN',
          value: ["'1'", "'2'", "'3'"],
          literalType: 'STRING',
        },
        operator: 'OR',
        right: {
          left: {
            field: 'Bar',
            operator: 'IN',
            value: ['1', '2', '3'],
            literalType: 'INTEGER',
          },
          operator: 'OR',
          right: {
            left: {
              field: 'Baz',
              operator: 'IN',
              value: ['101.00', '102.50'],
              literalType: 'DECIMAL',
            },
            operator: 'OR',
            right: {
              left: {
                field: 'Bam',
                operator: 'IN',
                value: ["'FOO'", 'null'],
                literalType: 'NULL',
              },
            },
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
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'Field',
          field: 'Name',
        },
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
        right: {
          left: {
            field: 'LastModifiedDate',
            operator: '>',
            value: 'LAST_MONTH',
            literalType: 'DATE_LITERAL',
          },
        },
      },
    },
  },
  {
    testCase: 55,
    soql:
      'SELECT Id, CreatedById, CreatedDate, DefType, IsDeleted, Format, LastModifiedById, LastModifiedDate, AuraDefinitionBundleId, ManageableState, Source, SystemModstamp FROM AuraDefinition',
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
        {
          type: 'Field',
          field: 'CreatedById',
        },
        {
          type: 'Field',
          field: 'CreatedDate',
        },
        {
          type: 'Field',
          field: 'DefType',
        },
        {
          type: 'Field',
          field: 'IsDeleted',
        },
        {
          type: 'Field',
          field: 'Format',
        },
        {
          type: 'Field',
          field: 'LastModifiedById',
        },
        {
          type: 'Field',
          field: 'LastModifiedDate',
        },
        {
          type: 'Field',
          field: 'AuraDefinitionBundleId',
        },
        {
          type: 'Field',
          field: 'ManageableState',
        },
        {
          type: 'Field',
          field: 'Source',
        },
        {
          type: 'Field',
          field: 'SystemModstamp',
        },
      ],
      sObject: 'AuraDefinition',
    },
  },
  {
    testCase: 56,
    soql: 'SELECT Id, Name, BillingCity FROM Account WITH SECURITY_ENFORCED',
    output: {
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
      withSecurityEnforced: true,
    },
  },
  {
    testCase: 57,
    soql:
      "SELECT Title FROM KnowledgeArticleVersion WHERE PublishStatus = 'online' WITH DATA CATEGORY Geography__c ABOVE usa__c WITH SECURITY_ENFORCED",
    output: {
      fields: [
        {
          type: 'Field',
          field: 'Title',
        },
      ],
      sObject: 'KnowledgeArticleVersion',
      where: {
        left: {
          field: 'PublishStatus',
          operator: '=',
          value: "'online'",
          literalType: 'STRING',
        },
      },
      withDataCategory: {
        conditions: [
          {
            groupName: 'Geography__c',
            selector: 'ABOVE',
            parameters: ['usa__c'],
          },
        ],
      },
      withSecurityEnforced: true,
    },
  },

  {
    testCase: 58,
    soql:
      "SELECT Id FROM Account WHERE (((Name = '1' OR Name = '2') AND Name = '3')) AND (((Description = '123') OR (Id = '1' AND Id = '2'))) AND Id = '1'",
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
          openParen: 3,
          field: 'Name',
          operator: '=',
          value: "'1'",
          literalType: 'STRING',
        },
        operator: 'OR',
        right: {
          left: {
            field: 'Name',
            operator: '=',
            value: "'2'",
            literalType: 'STRING',
            closeParen: 1,
          },
          operator: 'AND',
          right: {
            left: {
              field: 'Name',
              operator: '=',
              value: "'3'",
              literalType: 'STRING',
              closeParen: 2,
            },
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
                left: {
                  openParen: 1,
                  field: 'Id',
                  operator: '=',
                  value: "'1'",
                  literalType: 'STRING',
                },
                operator: 'AND',
                right: {
                  left: {
                    field: 'Id',
                    operator: '=',
                    value: "'2'",
                    literalType: 'STRING',
                    closeParen: 3,
                  },
                  operator: 'AND',
                  right: {
                    left: {
                      field: 'Id',
                      operator: '=',
                      value: "'1'",
                      literalType: 'STRING',
                    },
                  },
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
