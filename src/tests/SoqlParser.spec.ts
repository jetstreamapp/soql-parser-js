import { parseQuery } from '../app/SoqlParser';
import { expect } from 'chai';
import 'mocha';

const testCases = [
  {
    query: `SELECT Id, Name, BillingCity FROM Account`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Id FROM Contact WHERE Name LIKE 'A%' AND MailingCity = 'California'`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Name FROM Account ORDER BY Name DESC NULLS LAST`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Name FROM Account WHERE Industry = 'media' LIMIT 125`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Name FROM Account WHERE Industry = 'media' ORDER BY BillingPostalCode ASC NULLS LAST LIMIT 125`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT COUNT() FROM Contact`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 1`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Name, Id FROM Merchandise__c ORDER BY Name OFFSET 100`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Name, Id FROM Merchandise__c ORDER BY Name LIMIT 20 OFFSET 100`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Contact.FirstName, Contact.Account.Name FROM Contact`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'media'`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Name, (SELECT LastName FROM Contacts) FROM Account`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Account.Name, (SELECT Contact.LastName FROM Account.Contacts) FROM Account`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Name, (SELECT LastName FROM Contacts WHERE CreatedBy.Alias = 'x') FROM Account WHERE Industry = 'media'`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Id, FirstName__c, Mother_of_Child__r.FirstName__c FROM Daughter__c WHERE Mother_of_Child__r.LastName__c LIKE 'C%'`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Name, (SELECT Name FROM Line_Items__r) FROM Merchandise__c WHERE Name LIKE ‘Acme%’`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Id, Owner.Name FROM Task WHERE Owner.FirstName like 'B%'`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Id, Who.FirstName, Who.LastName FROM Task WHERE Owner.FirstName LIKE 'B%'`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Id, What.Name FROM Event`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate ELSE Name, Email END FROM Event`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Name, (SELECT CreatedBy.Name FROM Notes) FROM Account`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Amount, Id, Name, (SELECT Quantity, ListPrice, PricebookEntry.UnitPrice, PricebookEntry.Name FROM OpportunityLineItems) FROM Opportunity`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT UserId, LoginTime from LoginHistory`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT UserId, COUNT(Id) from LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z GROUP BY UserId`,
    fields: [],
    object: 'Account',
  },
  {
    query: `SELECT Id, Name, IsActive, SobjectType, DeveloperName, Description FROM RecordType`,
    fields: [],
    object: 'Account',
  },
];

describe('Parse Query', () => {
  it('should successfully parse basic query', () => {
    const query = parseQuery('SELECT Id, Name FROM Account');
    expect(query.name).equals('Account');
    expect(query.fields).lengthOf(2);
    expect(query.fields[0].text).equals('Id');
    expect(query.fields[1].text).equals('Name');
  });
});
