import { Query } from '../app/models/SoqlQuery.model';

// Queries obtained from SFDC examples
// https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_examples.htm
interface TestCase {
  testCase: number;
  soql: string;
  output: Query;
}

const testCases: TestCase[] = [
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
      whereClauseGroups: [],
      name: 'Account',
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
      whereClauseGroups: [
        [
          {
            field: 'Name',
            operator: 'LIKE',
            value: "'A%'",
          },
          {
            field: 'MailingCity',
            operator: '=',
            value: "'California'",
          },
        ],
      ],
      name: 'Contact',
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
      whereClauseGroups: [],
      name: 'Account',
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
      whereClauseGroups: [
        [
          {
            field: 'Industry',
            operator: '=',
            value: "'media'",
          },
        ],
      ],
      name: 'Account',
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
      whereClauseGroups: [
        [
          {
            field: 'Industry',
            operator: '=',
            value: "'media'",
          },
        ],
      ],
      name: 'Account',
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
      whereClauseGroups: [],
      name: 'Contact',
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
      whereClauseGroups: [],
      name: 'Lead',
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
      whereClauseGroups: [],
      name: 'Account',
      groupBy: {
        field: 'Name',
      },
      having: {
        fn: {
          text: 'COUNT(Id)',
          name: 'COUNT',
          parameter: 'Id',
        },
        operator: '>',
        value: '1',
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
      whereClauseGroups: [],
      name: 'Merchandise__c',
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
      whereClauseGroups: [],
      name: 'Merchandise__c',
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
      whereClauseGroups: [],
      name: 'Contact',
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
      whereClauseGroups: [
        [
          {
            field: 'Account.Industry',
            operator: '=',
            value: "'media'",
          },
        ],
      ],
      name: 'Contact',
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
          whereClauseGroups: [],
          name: 'Contacts',
        },
      ],
      whereClauseGroups: [],
      name: 'Account',
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
          subqueryObjName: 'Account.Contacts',
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
          whereClauseGroups: [],
          name: 'Account.',
        },
      ],
      whereClauseGroups: [],
      name: 'Account',
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
          whereClauseGroups: [
            [
              {
                field: 'CreatedBy.Alias',
                operator: '=',
                value: "'x'",
              },
            ],
          ],
          name: 'Contacts',
        },
      ],
      whereClauseGroups: [
        [
          {
            field: 'Industry',
            operator: '=',
            value: "'media'",
          },
        ],
      ],
      name: 'Account',
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
      whereClauseGroups: [
        [
          {
            field: 'Mother_of_Child__r.LastName__c',
            operator: 'LIKE',
            value: "'C%'",
          },
        ],
      ],
      name: 'Daughter__c',
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
          whereClauseGroups: [],
          name: 'Line_Items__r',
        },
      ],
      whereClauseGroups: [
        [
          {
            field: 'Name',
            operator: 'LIKE',
            value: "'Acme%'",
          },
        ],
      ],
      name: 'Merchandise__c',
    },
  },
  {
    testCase: 18,
    soql: "SELECT Id, Owner.Name FROM Task WHERE Owner.FirstName like 'B%'",
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
      whereClauseGroups: [
        [
          {
            field: 'Owner.FirstName',
            operator: 'LIKE',
            value: "'B%'",
          },
        ],
      ],
      name: 'Task',
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
      whereClauseGroups: [
        [
          {
            field: 'Owner.FirstName',
            operator: 'LIKE',
            value: "'B%'",
          },
        ],
      ],
      name: 'Task',
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
      whereClauseGroups: [],
      name: 'Event',
    },
  },
  {
    testCase: 21,
    soql:
      'SELECT TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate ELSE Name, Email END FROM Event',
    output: {
      fields: [],
      subqueries: [],
      whereClauseGroups: [],
      name: 'Event',
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
          whereClauseGroups: [],
          name: 'Notes',
        },
      ],
      whereClauseGroups: [],
      name: 'Account',
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
          whereClauseGroups: [],
          name: 'OpportunityLineItems',
        },
      ],
      whereClauseGroups: [],
      name: 'Opportunity',
    },
  },
  {
    testCase: 24,
    soql: 'SELECT UserId, LoginTime from LoginHistory',
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
      whereClauseGroups: [],
      name: 'LoginHistory',
    },
  },
  {
    testCase: 25,
    soql:
      'SELECT UserId, COUNT(Id) from LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z GROUP BY UserId',
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
      whereClauseGroups: [
        [
          {
            field: 'LoginTime',
            operator: '>',
            value: '2010-09-20T22:16:30.000Z',
          },
          {
            field: 'LoginTime',
            operator: '<',
            value: '2010-09-21T22:16:30.000Z',
          },
        ],
      ],
      name: 'LoginHistory',
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
      whereClauseGroups: [],
      name: 'RecordType',
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
      whereClauseGroups: [],
      name: 'Opportunity',
      groupBy: {
        field: 'CampaignId',
      },
      having: {
        fn: {
          text: 'COUNT(Id,Name)',
          name: 'COUNT',
          parameter: ['Id', 'Name'],
        },
        operator: '>',
        value: '1',
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
      whereClauseGroups: [],
      name: 'Lead',
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
      whereClauseGroups: [],
      name: 'Lead',
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
      whereClauseGroups: [],
      name: 'Account',
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
          nulls: 'LAST',
        },
        {
          field: 'Id',
          order: 'ASC',
          nulls: 'LAST',
        },
      ],
    },
  },
];
export default testCases;
