export interface TestCaseForFormat {
  testCase: number;
  soql: string;
  isValid: boolean;
}

export const testCases: TestCaseForFormat[] = [
  {
    testCase: 1,
    soql: 'SELECT Id, Name, BillingCity FROM Account',
    isValid: true,
  },
  {
    testCase: 2,
    soql: 'SELECT Name FROM Account ORDER BY Name DESC NULLS LAST',
    isValid: true,
  },
  {
    testCase: 3,
    soql: 'SELECT COUNT() FROM Contact',
    isValid: true,
  },
  {
    testCase: 4,
    soql: 'SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource',
    isValid: true,
  },
  {
    testCase: 5,
    soql: 'SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 1',
    isValid: true,
  },
  {
    testCase: 6,
    soql: 'SELECT Name, Id FROM Merchandise__c ORDER BY Name OFFSET 100',
    isValid: true,
  },
  {
    testCase: 7,
    soql: 'SELECT Name, Id FROM Merchandise__c ORDER BY Name LIMIT 20 OFFSET 100',
    isValid: true,
  },
  {
    testCase: 8,
    soql: 'SELECT Contact.FirstName, Contact.Account.Name FROM Contact',
    isValid: true,
  },
  {
    testCase: 9,
    soql: 'SELECT Name, (SELECT LastName FROM Contacts) FROM Account',
    isValid: true,
  },
  {
    testCase: 10,
    soql: 'SELECT Account.Name, (SELECT Contact.LastName FROM Account.Contacts) FROM Account',
    isValid: true,
  },
  {
    testCase: 11,
    soql: 'SELECT Id, What.Name FROM Event',
    isValid: true,
  },
  {
    testCase: 12,
    soql: 'SELECT Name, (SELECT CreatedBy.Name FROM Notes) FROM Account',
    isValid: true,
  },
  {
    testCase: 13,
    soql: 'SELECT UserId, LoginTime FROM LoginHistory',
    isValid: true,
  },
  {
    testCase: 14,
    soql: 'SELECT Id, Name, IsActive, SobjectType, DeveloperName, Description FROM RecordType',
    isValid: true,
  },
  {
    testCase: 15,
    soql: 'SELECT CampaignId, AVG(Amount) avg FROM Opportunity GROUP BY CampaignId HAVING COUNT(Id, Name) > 1',
    isValid: true,
  },
  {
    testCase: 16,
    soql: 'SELECT LeadSource, COUNT(Name) cnt FROM Lead GROUP BY ROLLUP(LeadSource)',
    isValid: true,
  },
  {
    testCase: 17,
    soql: 'SELECT Status, LeadSource, COUNT(Name) cnt FROM Lead GROUP BY ROLLUP(Status, LeadSource)',
    isValid: true,
  },
  {
    testCase: 18,
    soql: 'SELECT Id, Name, BillingCity FROMAccount',
    isValid: false,
  },
  {
    testCase: 19,
    soql: 'SELECTName FROM Account ORDER BY Name DESC NULLS LAST',
    isValid: false,
  },
  {
    testCase: 20,
    soql: 'SELECT COUNT()FROM Contact',
    isValid: true,
  },
  {
    testCase: 21,
    soql: 'SELECT LeadSourceCOUNT(Name) FROM Lead GROUP BY LeadSource',
    isValid: false,
  },
  {
    testCase: 22,
    soql: 'SELECT Name, COUNT(Id) FROM Account GROUPBY Name HAVING COUNT(Id) > 1',
    isValid: false,
  },
  {
    testCase: 23,
    soql: 'SELECT Name, Id FROM Merchandise__c ORDER BY Name OFFSET100',
    isValid: false,
  },
  {
    testCase: 24,
    soql: 'SELECT Name, Id FROM ORDER BY Name LIMIT 20 OFFSET 100',
    isValid: false,
  },
  {
    testCase: 25,
    soql: 'SELECT Contact..FirstName, Contact.Account.Name FROM Contact',
    isValid: false,
  },
  {
    testCase: 26,
    soql: 'SELECT Name (SELECT LastName FROM Contacts) FROM Account',
    isValid: false,
  },
  {
    testCase: 27,
    soql: 'SELECT Account.Name, (SELECT Contact.LastName FROM Account.Contacts) FROMAccount',
    isValid: false,
  },
  {
    testCase: 28,
    soql: 'SELECT Id, What.Name FROMEvent',
    isValid: false,
  },
  {
    testCase: 29,
    soql: 'select some fake text',
    isValid: false,
  },
  {
    testCase: 30,
    soql: 'SELECT Id, Format FROM Account',
    isValid: true,
  },
  {
    testCase: 31,
    soql: `SELECT Id, FirstName__c, Mother_of_Child__r.FirstName__c FROM Daughter__c WHERE Mother_of_Child__r.LastName__c LastName__c LIKE 'C%'`,
    isValid: false,
  },
  {
    testCase: 32,
    soql: `SELECT Id FROM Contact WHERE Name LIKE 'A%' AND MailingCity = 'California' fds`,
    isValid: false,
  },
];
export default testCases;
