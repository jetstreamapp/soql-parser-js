import { Query } from '../lib/models/SoqlQuery.model';

// Queries obtained from SFDC examples
// https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_examples.htm
export interface TestCase {
  testCase: number;
  soql: string;
  output: Query;
}

export const testCases: TestCase[] = [
  {
    testCase: 1,
    soql: 'SELECT Id, Name, BillingCity FROM Account',
    output: {
      fields: [
        {
          text: 'Id',
        },
        {
          text: 'Name',
        },
        {
          text: 'BillingCity',
        },
      ],
      subqueries: [],
      sObject: 'Account',
    },
  },
  {
    testCase: 2,
    soql: "SELECT Id FROM Contact WHERE Name LIKE 'A%' AND MailingCity = 'California'",
    output: {
      fields: [
        {
          text: 'Id',
        },
      ],
      subqueries: [],
      sObject: 'Contact',
      where: {
        left: {
          field: 'Name',
          operator: 'LIKE',
          value: "'A%'",
        },
        operator: 'AND',
        right: {
          left: {
            field: 'MailingCity',
            operator: '=',
            value: "'California'",
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
          text: 'Name',
        },
      ],
      subqueries: [],
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
          text: 'Name',
        },
      ],
      subqueries: [],
      sObject: 'Account',
      where: {
        left: {
          field: 'Industry',
          operator: '=',
          value: "'media'",
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
          text: 'Name',
        },
      ],
      subqueries: [],
      sObject: 'Account',
      where: {
        left: {
          field: 'Industry',
          operator: '=',
          value: "'media'",
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
          fn: {
            text: 'COUNT()',
            name: 'COUNT',
          },
        },
      ],
      subqueries: [],
      sObject: 'Contact',
    },
  },
  {
    testCase: 7,
    soql: 'SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource',
    output: {
      fields: [
        {
          text: 'LeadSource',
        },
        {
          fn: {
            text: 'COUNT(Name)',
            name: 'COUNT',
            parameter: 'Name',
          },
        },
      ],
      subqueries: [],
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
          text: 'Name',
        },
        {
          fn: {
            text: 'COUNT(Id)',
            name: 'COUNT',
            parameter: 'Id',
          },
        },
      ],
      subqueries: [],
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
          text: 'Name',
        },
        {
          text: 'Id',
        },
      ],
      subqueries: [],
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
          text: 'Name',
        },
        {
          text: 'Id',
        },
      ],
      subqueries: [],
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
          text: 'Contact.FirstName',
          relationshipFields: ['Contact', 'FirstName'],
        },
        {
          text: 'Contact.Account.Name',
          relationshipFields: ['Contact', 'Account', 'Name'],
        },
      ],
      subqueries: [],
      sObject: 'Contact',
    },
  },
  {
    testCase: 12,
    soql: "SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'media'",
    output: {
      fields: [
        {
          text: 'Id',
        },
        {
          text: 'Name',
        },
        {
          text: 'Account.Name',
          relationshipFields: ['Account', 'Name'],
        },
      ],
      subqueries: [],
      sObject: 'Contact',
      where: {
        left: {
          field: 'Account.Industry',
          operator: '=',
          value: "'media'",
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
          text: 'Name',
        },
        {
          subqueryObjName: 'Contacts',
        },
      ],
      subqueries: [
        {
          fields: [
            {
              text: 'LastName',
            },
          ],
          subqueries: [],
          sObjectRelationshipName: 'Contacts',
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
          text: 'Account.Name',
          relationshipFields: ['Account', 'Name'],
        },
        {
          subqueryObjName: 'Contacts',
        },
      ],
      subqueries: [
        {
          fields: [
            {
              text: 'Contact.LastName',
              relationshipFields: ['Contact', 'LastName'],
            },
          ],
          subqueries: [],
          sObjectRelationshipName: 'Contacts',
          sObjectPrefix: ['Account'],
        },
      ],
      sObject: 'Account',
    },
  },
  {
    testCase: 15,
    soql:
      "SELECT Name, (SELECT LastName FROM Contacts WHERE CreatedBy.Alias = 'x') FROM Account WHERE Industry = 'media'",
    output: {
      fields: [
        {
          text: 'Name',
        },
        {
          subqueryObjName: 'Contacts',
        },
      ],
      subqueries: [
        {
          fields: [
            {
              text: 'LastName',
            },
          ],
          subqueries: [],
          sObjectRelationshipName: 'Contacts',
          where: {
            left: {
              field: 'CreatedBy.Alias',
              operator: '=',
              value: "'x'",
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
          text: 'Id',
        },
        {
          text: 'FirstName__c',
        },
        {
          text: 'Mother_of_Child__r.FirstName__c',
          relationshipFields: ['Mother_of_Child__r', 'FirstName__c'],
        },
      ],
      subqueries: [],
      sObject: 'Daughter__c',
      where: {
        left: {
          field: 'Mother_of_Child__r.LastName__c',
          operator: 'LIKE',
          value: "'C%'",
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
          text: 'Name',
        },
        {
          subqueryObjName: 'Line_Items__r',
        },
      ],
      subqueries: [
        {
          fields: [
            {
              text: 'Name',
            },
          ],
          subqueries: [],
          sObjectRelationshipName: 'Line_Items__r',
        },
      ],
      sObject: 'Merchandise__c',
      where: {
        left: {
          field: 'Name',
          operator: 'LIKE',
          value: "'Acme%'",
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
          text: 'Id',
        },
        {
          text: 'Owner.Name',
          relationshipFields: ['Owner', 'Name'],
        },
      ],
      subqueries: [],
      sObject: 'Task',
      where: {
        left: {
          field: 'Owner.FirstName',
          operator: 'LIKE',
          value: "'B%'",
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
          text: 'Id',
        },
        {
          text: 'Who.FirstName',
          relationshipFields: ['Who', 'FirstName'],
        },
        {
          text: 'Who.LastName',
          relationshipFields: ['Who', 'LastName'],
        },
      ],
      subqueries: [],
      sObject: 'Task',
      where: {
        left: {
          field: 'Owner.FirstName',
          operator: 'LIKE',
          value: "'B%'",
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
          text: 'Id',
        },
        {
          text: 'What.Name',
          relationshipFields: ['What', 'Name'],
        },
      ],
      subqueries: [],
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
          typeOf: {
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
        },
      ],
      subqueries: [],
      sObject: 'Event',
    },
  },
  {
    testCase: 22,
    soql: 'SELECT Name, (SELECT CreatedBy.Name FROM Notes) FROM Account',
    output: {
      fields: [
        {
          text: 'Name',
        },
        {
          subqueryObjName: 'Notes',
        },
      ],
      subqueries: [
        {
          fields: [
            {
              text: 'CreatedBy.Name',
              relationshipFields: ['CreatedBy', 'Name'],
            },
          ],
          subqueries: [],
          sObjectRelationshipName: 'Notes',
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
          text: 'Amount',
        },
        {
          text: 'Id',
        },
        {
          text: 'Name',
        },
        {
          subqueryObjName: 'OpportunityLineItems',
        },
      ],
      subqueries: [
        {
          fields: [
            {
              text: 'Quantity',
            },
            {
              text: 'ListPrice',
            },
            {
              text: 'PricebookEntry.UnitPrice',
              relationshipFields: ['PricebookEntry', 'UnitPrice'],
            },
            {
              text: 'PricebookEntry.Name',
              relationshipFields: ['PricebookEntry', 'Name'],
            },
          ],
          subqueries: [],
          sObjectRelationshipName: 'OpportunityLineItems',
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
          text: 'UserId',
        },
        {
          text: 'LoginTime',
        },
      ],
      subqueries: [],
      sObject: 'LoginHistory',
    },
  },
  {
    testCase: 25,
    soql:
      'SELECT UserId, COUNT(Id) FROM LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z GROUP BY UserId',
    output: {
      fields: [
        {
          text: 'UserId',
        },
        {
          fn: {
            text: 'COUNT(Id)',
            name: 'COUNT',
            parameter: 'Id',
          },
        },
      ],
      subqueries: [],
      sObject: 'LoginHistory',
      where: {
        left: {
          field: 'LoginTime',
          operator: '>',
          value: '2010-09-20T22:16:30.000Z',
        },
        operator: 'AND',
        right: {
          left: {
            field: 'LoginTime',
            operator: '<',
            value: '2010-09-21T22:16:30.000Z',
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
          text: 'Id',
        },
        {
          text: 'Name',
        },
        {
          text: 'IsActive',
        },
        {
          text: 'SobjectType',
        },
        {
          text: 'DeveloperName',
        },
        {
          text: 'Description',
        },
      ],
      subqueries: [],
      sObject: 'RecordType',
    },
  },
  {
    testCase: 27,
    soql: 'SELECT CampaignId, AVG(Amount) avg FROM Opportunity GROUP BY CampaignId HAVING COUNT(Id, Name) > 1',
    output: {
      fields: [
        {
          text: 'CampaignId',
        },
        {
          fn: {
            text: 'AVG(Amount)',
            name: 'avg',
            parameter: 'Amount',
            alias: 'avg',
          },
        },
      ],
      subqueries: [],
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
          text: 'LeadSource',
        },
        {
          fn: {
            text: 'COUNT(Name)',
            name: 'COUNT',
            parameter: 'Name',
            alias: 'cnt',
          },
        },
      ],
      subqueries: [],
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
          text: 'Status',
        },
        {
          text: 'LeadSource',
        },
        {
          fn: {
            text: 'COUNT(Name)',
            name: 'COUNT',
            parameter: 'Name',
            alias: 'cnt',
          },
        },
      ],
      subqueries: [],
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
      'SELECT Type, BillingCountry, GROUPING(Type) grpType, GROUPING(BillingCountry) grpCty, COUNT(id) accts FROM Account GROUP BY CUBE(Type, BillingCountry) ORDER BY GROUPING(Type), GROUPING(Id, BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST',
    output: {
      fields: [
        {
          text: 'Type',
        },
        {
          text: 'BillingCountry',
        },
        {
          fn: {
            text: 'GROUPING(Type)',
            name: 'GROUPING',
            parameter: 'Type',
            alias: 'grpType',
          },
        },
        {
          fn: {
            text: 'GROUPING(BillingCountry)',
            name: 'GROUPING',
            parameter: 'BillingCountry',
            alias: 'grpCty',
          },
        },
        {
          fn: {
            text: 'COUNT(id)',
            name: 'COUNT',
            parameter: 'id',
            alias: 'accts',
          },
        },
      ],
      subqueries: [],
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
          text: 'Name',
          alias: 'c',
        },
        {
          text: 'Account.Name',
          relationshipFields: ['Account', 'Name'],
          alias: 'c',
        },
      ],
      subqueries: [],
      sObject: 'Contact',
      sObjectAlias: 'c',
    },
  },
  {
    testCase: 32,
    soql: `SELECT Id FROM Account WHERE (Id IN ('1', '2', '3') OR (NOT Id = '2') OR (Name LIKE '%FOO%' OR (Name LIKE '%ARM%' AND FOO = 'bar')))`,
    output: {
      fields: [
        {
          text: 'Id',
        },
      ],
      subqueries: [],
      sObject: 'Account',
      where: {
        left: {
          openParen: 1,
          field: 'Id',
          operator: 'IN',
          value: ["'1'", "'2'", "'3'"],
        },
        operator: 'OR',
        right: {
          left: {
            openParen: 1,
            logicalPrefix: 'NOT',
            field: 'Id',
            operator: '=',
            value: "'2'",
            closeParen: 1,
          },
          operator: 'OR',
          right: {
            left: {
              openParen: 1,
              field: 'Name',
              operator: 'LIKE',
              value: "'%FOO%'",
            },
            operator: 'OR',
            right: {
              left: {
                openParen: 1,
                field: 'Name',
                operator: 'LIKE',
                value: "'%ARM%'",
              },
              operator: 'AND',
              right: {
                left: {
                  field: 'FOO',
                  operator: '=',
                  value: "'bar'",
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
    soql: `SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource HAVING COUNT(Name) > 100 and LeadSource > 'Phone'`,
    output: {
      fields: [
        {
          text: 'LeadSource',
        },
        {
          fn: {
            text: 'COUNT(Name)',
            name: 'COUNT',
            parameter: 'Name',
          },
        },
      ],
      subqueries: [],
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
    soql: `SELECT a.Id, a.Name, (SELECT a2.Id FROM ChildAccounts a2), (SELECT a1.Id FROM ChildAccounts1 a1) FROM Account a`,
    output: {
      fields: [
        {
          text: 'Id',
          alias: 'a',
        },
        {
          text: 'Name',
          alias: 'a',
        },
        {
          subqueryObjName: 'ChildAccounts',
        },
        {
          subqueryObjName: 'ChildAccounts1',
        },
      ],
      subqueries: [
        {
          fields: [
            {
              text: 'Id',
              alias: 'a2',
            },
          ],
          subqueries: [],
          sObjectRelationshipName: 'ChildAccounts',
          sObjectAlias: 'a2',
        },
        {
          fields: [
            {
              text: 'Id',
              alias: 'a1',
            },
          ],
          subqueries: [],
          sObjectRelationshipName: 'ChildAccounts1',
          sObjectAlias: 'a1',
        },
      ],
      sObject: 'Account',
      sObjectAlias: 'a',
    },
  },
  {
    testCase: 35,
    soql: `SELECT Title FROM KnowledgeArticleVersion WHERE PublishStatus = 'online' WITH DATA CATEGORY Geography__c ABOVE usa__c`,
    output: {
      fields: [
        {
          text: 'Title',
        },
      ],
      subqueries: [],
      sObject: 'KnowledgeArticleVersion',
      where: {
        left: {
          field: 'PublishStatus',
          operator: '=',
          value: "'online'",
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
    soql: `SELECT Title FROM Question WHERE LastReplyDate > 2005-10-08T01:02:03Z WITH DATA CATEGORY Geography__c AT (usa__c, uk__c)`,
    output: {
      fields: [
        {
          text: 'Title',
        },
      ],
      subqueries: [],
      sObject: 'Question',
      where: {
        left: {
          field: 'LastReplyDate',
          operator: '>',
          value: '2005-10-08T01:02:03Z',
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
    soql: `SELECT UrlName FROM KnowledgeArticleVersion WHERE PublishStatus = 'draft' WITH DATA CATEGORY Geography__c AT usa__c AND Product__c ABOVE_OR_BELOW mobile_phones__c`,
    output: {
      fields: [
        {
          text: 'UrlName',
        },
      ],
      subqueries: [],
      sObject: 'KnowledgeArticleVersion',
      where: {
        left: {
          field: 'PublishStatus',
          operator: '=',
          value: "'draft'",
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
    soql: `SELECT Id FROM Contact FOR VIEW`,
    output: {
      fields: [
        {
          text: 'Id',
        },
      ],
      subqueries: [],
      sObject: 'Contact',
      for: 'VIEW',
    },
  },
  {
    testCase: 39,
    soql: `SELECT Id FROM Contact FOR REFERENCE`,
    output: {
      fields: [
        {
          text: 'Id',
        },
      ],
      subqueries: [],
      sObject: 'Contact',
      for: 'REFERENCE',
    },
  },
  {
    testCase: 40,
    soql: `SELECT Id FROM Contact FOR UPDATE`,
    output: {
      fields: [
        {
          text: 'Id',
        },
      ],
      subqueries: [],
      sObject: 'Contact',
      for: 'UPDATE',
    },
  },
  {
    testCase: 41,
    soql: `SELECT Id FROM FAQ__kav FOR UPDATE`,
    output: {
      fields: [
        {
          text: 'Id',
        },
      ],
      subqueries: [],
      sObject: 'FAQ__kav',
      for: 'UPDATE',
    },
  },
  {
    testCase: 42,
    soql: `SELECT Id FROM FAQ__kav FOR VIEW UPDATE TRACKING`,
    output: {
      fields: [
        {
          text: 'Id',
        },
      ],
      subqueries: [],
      sObject: 'FAQ__kav',
      for: 'VIEW',
      update: 'TRACKING',
    },
  },
  {
    testCase: 43,
    soql: `SELECT Id FROM FAQ__kav UPDATE VIEWSTAT`,
    output: {
      fields: [
        {
          text: 'Id',
        },
      ],
      subqueries: [],
      sObject: 'FAQ__kav',
      update: 'VIEWSTAT',
    },
  },
  {
    testCase: 44,
    soql: `SELECT amount, FORMAT(amount) Amt, convertCurrency(amount) editDate, FORMAT(convertCurrency(amount)) convertedCurrency FROM Opportunity WHERE id = '12345'`,
    output: {
      fields: [
        {
          text: 'amount',
        },
        {
          fn: {
            text: 'FORMAT(amount)',
            name: 'FORMAT',
            parameter: 'amount',
            alias: 'Amt',
          },
        },
        {
          fn: {
            text: 'convertCurrency(amount)',
            name: 'convertCurrency',
            parameter: 'amount',
            alias: 'editDate',
          },
        },
        {
          fn: {
            text: 'FORMAT(convertCurrency(amount))',
            name: 'FORMAT',
            parameter: 'convertCurrency(amount)',
            fn: {
              text: 'convertCurrency(amount)',
              name: 'convertCurrency',
              parameter: 'amount',
            },
            alias: 'convertedCurrency',
          },
        },
      ],
      subqueries: [],
      sObject: 'Opportunity',
      where: {
        left: {
          field: 'id',
          operator: '=',
          value: "'12345'",
        },
      },
    },
  },
  {
    testCase: 45,
    soql: `SELECT FORMAT(MIN(closedate)) Amt FROM Opportunity`,
    output: {
      fields: [
        {
          fn: {
            text: 'FORMAT(MIN(closedate))',
            name: 'FORMAT',
            parameter: 'MIN(closedate)',
            fn: {
              text: 'MIN(closedate)',
              name: 'MIN',
              parameter: 'closedate',
            },
            alias: 'Amt',
          },
        },
      ],
      subqueries: [],
      sObject: 'Opportunity',
    },
  },
  {
    testCase: 46,
    soql: `SELECT Company, toLabel(Status) FROM Lead WHERE toLabel(Status) = 'le Draft'`,
    output: {
      fields: [
        {
          text: 'Company',
        },
        {
          fn: {
            text: 'toLabel(Status)',
            name: 'toLabel',
            parameter: 'Status',
          },
        },
      ],
      subqueries: [],
      sObject: 'Lead',
      where: {
        left: {
          operator: '=',
          value: "'le Draft'",
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
    soql: `SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Closed Lost')`,
    output: {
      fields: [
        {
          text: 'Id',
        },
        {
          text: 'Name',
        },
      ],
      subqueries: [],
      sObject: 'Account',
      where: {
        left: {
          field: 'Id',
          operator: 'IN',
          valueQuery: {
            fields: [
              {
                text: 'AccountId',
              },
            ],
            subqueries: [],
            sObject: 'Opportunity',
            where: {
              left: {
                field: 'StageName',
                operator: '=',
                value: "'Closed Lost'",
              },
            },
          },
        },
      },
    },
  },
  {
    testCase: 48,
    soql: `SELECT Id FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE IsClosed = false)`,
    output: {
      fields: [
        {
          text: 'Id',
        },
      ],
      subqueries: [],
      sObject: 'Account',
      where: {
        left: {
          field: 'Id',
          operator: 'NOT IN',
          valueQuery: {
            fields: [
              {
                text: 'AccountId',
              },
            ],
            subqueries: [],
            sObject: 'Opportunity',
            where: {
              left: {
                field: 'IsClosed',
                operator: '=',
                value: 'false',
              },
            },
          },
        },
      },
    },
  },
  {
    testCase: 49,
    soql: `SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false)`,
    output: {
      fields: [
        {
          text: 'Id',
        },
        {
          text: 'Name',
        },
      ],
      subqueries: [],
      sObject: 'Account',
      where: {
        left: {
          field: 'Id',
          operator: 'IN',
          valueQuery: {
            fields: [
              {
                text: 'AccountId',
              },
            ],
            subqueries: [],
            sObject: 'Contact',
            where: {
              left: {
                field: 'LastName',
                operator: 'LIKE',
                value: "'apple%'",
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
                  text: 'AccountId',
                },
              ],
              subqueries: [],
              sObject: 'Opportunity',
              where: {
                left: {
                  field: 'isClosed',
                  operator: '=',
                  value: 'false',
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
          text: 'Account.Name',
          relationshipFields: ['Account', 'Name'],
        },
        {
          subqueryObjName: 'Bars',
        },
      ],
      subqueries: [
        {
          fields: [
            {
              text: 'Contact.LastName',
              relationshipFields: ['Contact', 'LastName'],
            },
          ],
          subqueries: [],
          sObjectRelationshipName: 'Bars',
          sObjectPrefix: ['Account', 'Contact', 'Foo'],
        },
      ],
      sObject: 'Account',
    },
  },
];
export default testCases;
