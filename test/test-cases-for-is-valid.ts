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
  {
    testCase: 33,
    soql: `SELECT Name, (SELECT LastName FROM Contacts WHERE CreatedBy.Alias='x') FROM Account WHERE Industry='media' AND Id = foo`,
    isValid: false,
  },
  { testCase: 34, soql: `SELECT Name FROM Account WHERE Id = foo`, isValid: false }, // this parses incorrectly
  { testCase: 35, soql: `SELECT Name FROM Account WHERE`, isValid: false }, // throws exception
  { testCase: 36, soql: `SELECT Name FROM Account ORDER BY`, isValid: false },
  { testCase: 37, soql: `SELECT Name FROM Account LIMIT`, isValid: false },
  { testCase: 38, soql: `SELECT Name FROM Account LIMIT 'foo'`, isValid: false },
  { testCase: 39, soql: `SELECT Name FROM Account OFFSET`, isValid: true },
  { testCase: 40, soql: `SELECT Name FROM Account OFFSET 'foo'`, isValid: false },
  { testCase: 41, soql: `SELECT Name FROM Account OFFSET 1`, isValid: true },
  { testCase: 42, soql: `SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING`, isValid: false }, // this throws exception
  { testCase: 43, soql: `SELECT FROM Account WHERE Id = foo`, isValid: false },
  { testCase: 44, soql: `SELECT Name FROM Account FROM Account WHERE Id = foo`, isValid: false },
  { testCase: 45, soql: `SELECT Name FROM Account HAVING COUNT(Id) > 1`, isValid: false },
  { testCase: 46, soql: `SELECT Name FROM Account WHERE`, isValid: false },
  { testCase: 47, soql: `SELECT Name FROM Account WITH`, isValid: false },
  { testCase: 48, soql: `SELECT Name FROM Account WITH SECURITY_ENFORCED`, isValid: true },
  { testCase: 49, soql: `SELECT Name FROM Account GROUP BY`, isValid: false },
  { testCase: 50, soql: `SELECT Name FROM Account ORDER BY`, isValid: false },
  { testCase: 51, soql: `SELECT Name FROM Account LIMIT`, isValid: false },
  { testCase: 52, soql: `SELECT Name FROM Account For`, isValid: false },
  { testCase: 53, soql: `SELECT Name FROM Account For View`, isValid: true },
  { testCase: 54, soql: `SELECT Name FROM Account For Reference`, isValid: true },
  { testCase: 55, soql: `SELECT Name FROM Account For Update`, isValid: true },
  { testCase: 56, soql: `SELECT Name myAlias FROM Account`, isValid: false },
  { testCase: 57, soql: `SELECT Count() myAlias FROM Account`, isValid: true },
  {
    testCase: 58,
    soql: `SELECT CALENDAR_YEAR(CreatedDate), SUM(Amount) mySum FROM Opportunity GROUP BY CALENDAR_YEAR(CreatedDate)`,
    isValid: true,
  },
  {
    testCase: 59,
    soql: `SELECT CALENDAR_YEAR(CreatedDate) calYear, SUM(Amount) mySum FROM Opportunity GROUP BY CALENDAR_YEAR(CreatedDate)`,
    isValid: true,
  },
];
export default testCases;
