import { ParseQueryConfig } from '../src/parser/parser';

export interface TestCaseForFormat {
  testCase: number;
  soql: string;
  isValid: boolean;
  options?: ParseQueryConfig;
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
  // { testCase: 56, soql: `SELECT Name myAlias FROM Account`, isValid: false }, // FIXME: this should be invalid because alias is not used in groupby
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
  { testCase: 60, soql: `select count() myalias from account`, isValid: true },
  { testCase: 61, soql: `SELECT COUNT() MYALIAS FROM ACCOUNT`, isValid: true },
  { testCase: 63, soql: `SeLEct CouNt() myAlias frOM Account`, isValid: true },
  { testCase: 64, soql: `SELECT Id FROM Account WHERE CreatedDate = YESTERDAY`, isValid: true },
  { testCase: 65, soql: `SELECT Id FROM Account WHERE CreatedDate > TODAY`, isValid: true },
  { testCase: 66, soql: `SELECT Id FROM Opportunity WHERE CloseDate = TOMORROW`, isValid: true },
  { testCase: 67, soql: `SELECT Id FROM Account WHERE CreatedDate > LAST_WEEK`, isValid: true },
  { testCase: 68, soql: `SELECT Id FROM Account WHERE CreatedDate < THIS_WEEK`, isValid: true },
  { testCase: 69, soql: `SELECT Id FROM Opportunity WHERE CloseDate = NEXT_WEEK`, isValid: true },
  { testCase: 70, soql: `SELECT Id FROM Opportunity WHERE CloseDate > LAST_MONTH`, isValid: true },
  { testCase: 71, soql: `SELECT Id FROM Account WHERE CreatedDate < THIS_MONTH`, isValid: true },
  { testCase: 73, soql: `SELECT Id FROM Opportunity WHERE CloseDate = NEXT_MONTH`, isValid: true },
  { testCase: 74, soql: `SELECT Id FROM Account WHERE CreatedDate = LAST_90_DAYS`, isValid: true },
  { testCase: 75, soql: `SELECT Id FROM Opportunity WHERE CloseDate > NEXT_90_DAYS`, isValid: true },
  { testCase: 76, soql: `SELECT Id FROM Account WHERE CreatedDate = LAST_N_DAYS:365`, isValid: true },
  { testCase: 77, soql: `SELECT Id FROM Opportunity WHERE CloseDate > NEXT_N_DAYS:15`, isValid: true },
  { testCase: 78, soql: `SELECT Id FROM Opportunity WHERE CloseDate > NEXT_N_WEEKS:4`, isValid: true },
  { testCase: 79, soql: `SELECT Id FROM Account WHERE CreatedDate = LAST_N_WEEKS:52`, isValid: true },
  { testCase: 80, soql: `SELECT Id FROM Opportunity WHERE CloseDate > NEXT_N_MONTHS:2`, isValid: true },
  { testCase: 81, soql: `SELECT Id FROM Account WHERE CreatedDate = LAST_N_MONTHS:12`, isValid: true },
  { testCase: 83, soql: `SELECT Id FROM Account WHERE CreatedDate = THIS_QUARTER`, isValid: true },
  { testCase: 84, soql: `SELECT Id FROM Account WHERE CreatedDate > LAST_QUARTER`, isValid: true },
  { testCase: 85, soql: `SELECT Id FROM Account WHERE CreatedDate < NEXT_QUARTER`, isValid: true },
  { testCase: 86, soql: `SELECT Id FROM Account WHERE CreatedDate < NEXT_N_QUARTERS:2`, isValid: true },
  { testCase: 87, soql: `SELECT Id FROM Account WHERE CreatedDate > LAST_N_QUARTERS:2`, isValid: true },
  { testCase: 88, soql: `SELECT Id FROM Opportunity WHERE CloseDate = THIS_YEAR`, isValid: true },
  { testCase: 89, soql: `SELECT Id FROM Opportunity WHERE CloseDate > LAST_YEAR`, isValid: true },
  { testCase: 90, soql: `SELECT Id FROM Opportunity WHERE CloseDate < NEXT_YEAR`, isValid: true },
  { testCase: 91, soql: `SELECT Id FROM Opportunity WHERE CloseDate < NEXT_N_YEARS:5`, isValid: true },
  { testCase: 93, soql: `SELECT Id FROM Opportunity WHERE CloseDate > LAST_N_YEARS:5`, isValid: true },
  { testCase: 94, soql: `SELECT Id FROM Account WHERE CreatedDate = THIS_FISCAL_QUARTER`, isValid: true },
  { testCase: 95, soql: `SELECT Id FROM Account WHERE CreatedDate > LAST_FISCAL_QUARTER`, isValid: true },
  { testCase: 96, soql: `SELECT Id FROM Account WHERE CreatedDate < NEXT_FISCAL_QUARTER`, isValid: true },
  { testCase: 97, soql: `SELECT Id FROM Account WHERE CreatedDate < NEXT_N_FISCAL_QUARTERS:6`, isValid: true },
  { testCase: 98, soql: `SELECT Id FROM Account WHERE CreatedDate > LAST_N_FISCAL_QUARTERS:6`, isValid: true },
  { testCase: 99, soql: `SELECT Id FROM Opportunity WHERE CloseDate = THIS_FISCAL_YEAR`, isValid: true },
  { testCase: 100, soql: `SELECT Id FROM Opportunity WHERE CloseDate > LAST_FISCAL_YEAR`, isValid: true },
  { testCase: 101, soql: `SELECT Id FROM Opportunity WHERE CloseDate < NEXT_FISCAL_YEAR`, isValid: true },
  { testCase: 102, soql: `SELECT Id FROM Opportunity WHERE CloseDate < NEXT_N_FISCAL_YEARS:3`, isValid: true },
  { testCase: 103, soql: `SELECT Id FROM Opportunity WHERE CloseDate > LAST_N_FISCAL_YEARS:3`, isValid: true },
  { testCase: 104, soql: `SELECT Name FROM Account WHERE Id = :foo`, isValid: false },
  { testCase: 105, soql: `SELECT Name FROM Account WHERE Id = :foo`, isValid: true, options: { allowApexBindVariables: true } },
  { testCase: 106, soql: `SELECT Id, Title FROM Dashboard USING SCOPE allPrivate WHERE Type != 'SpecifiedUser'`, isValid: true },
  { testCase: 107, soql: `SELECT Id, Title FROM Dashboard USING SCOPE Delegated WHERE Type != 'SpecifiedUser'`, isValid: true },
  { testCase: 108, soql: `SELECT Id, Title FROM Dashboard USING SCOPE Mine WHERE Type != 'SpecifiedUser'`, isValid: true },
  { testCase: 109, soql: `SELECT Id, Title FROM Dashboard USING SCOPE Everything WHERE Type != 'SpecifiedUser'`, isValid: true },
  { testCase: 110, soql: `SELECT Id, Title FROM Dashboard USING SCOPE MineAndMyGroups WHERE Type != 'SpecifiedUser'`, isValid: true },
  { testCase: 111, soql: `SELECT Id, Title FROM Dashboard USING SCOPE My_Territory WHERE Type != 'SpecifiedUser'`, isValid: true },
  { testCase: 112, soql: `SELECT Id, Title FROM Dashboard USING SCOPE My_Team_Territory WHERE Type != 'SpecifiedUser'`, isValid: true },
  { testCase: 113, soql: `SELECT Id, Title FROM Dashboard USING SCOPE Team WHERE Type != 'SpecifiedUser'`, isValid: true },
  { testCase: 114, soql: `SELECT Name, Id FROM Merchandise__c ORDER BY Name LIMIT 100 OFFSET 0`, isValid: true },
  { testCase: 115, soql: `SELECT Name, Id FROM Merchandise__c ORDER BY Name LIMIT 100 OFFSET -10`, isValid: false },
  { testCase: 116, soql: `SELECT Name, Id FROM Merchandise__c ORDER BY Name LIMIT -10 OFFSET 10`, isValid: false },
  {
    testCase: 117,
    soql: `SELECT Title FROM Question WHERE LastReplyDate < 2005-10-08T01:02:03Z WITH DATA CATEGORY Product__c AT mobile_phones__c`,
    isValid: true,
  },
  {
    testCase: 118,
    soql: `SELECT Title, Summary FROM KnowledgeArticleVersion WHERE PublishStatus='Online' AND Language = 'en_US' WITH DATA CATEGORY Geography__c ABOVE_OR_BELOW europe__c AND Product__c BELOW All__c`,
    isValid: true,
  },
  {
    testCase: 119,
    soql: `SELECT Id, Title FROM Offer__kav WHERE PublishStatus='Draft' AND Language = 'en_US' WITH DATA CATEGORY Geography__c AT (france__c,usa__c) AND Product__c ABOVE dsl__c`,
    isValid: true,
  },
  { testCase: 120, soql: `SELECT FORMAT(MIN(closedate)) Amt FROM opportunity`, isValid: true },
  {
    testCase: 121,
    soql: `SELECT amount, FORMAT(amount) Amt, convertCurrency(amount) editDate, FORMAT(convertCurrency(amount)) convertedCurrency FROM Opportunity where id = '12345'`,
    isValid: true,
  },
  {
    testCase: 122,
    soql: `SELECT Id, Name FROM Opportunity WHERE Amount > USD5000`,
    isValid: true,
  },
  {
    testCase: 123,
    soql: `SELECT Id, Name FROM Opportunity WHERE (((((Amount > USD5000`,
    isValid: false,
  },
  {
    testCase: 124,
    soql: `SELECT Id, Name FROM Opportunity WHERE (((((Amount > USD5000))))`,
    isValid: false,
  },
  {
    testCase: 125,
    soql: `SELECT Id, Name FROM Opportunity WHERE (((((Amount > USD5000)))))`,
    isValid: true,
  },
  {
    testCase: 126,
    soql: `SELECT Id FROM Account WHERE (((Name = '1' OR Name = '2') AND Name = '3')) AND (((Description = '4') OR (Id = '5' AND Id = '6'))) AND Id = '7'`,
    isValid: true,
  },
  {
    testCase: 127,
    soql: `SELECT Id FROM Account WHERE ((Name = '1' OR Name = '2') AND Name = '3')) AND (((Description = '4') OR (Id = '5' AND Id = '6'))) AND Id = '7'`,
    isValid: false,
  },
  {
    testCase: 128,
    soql: `SELECT Id FROM Account WHERE (((Name = '1' OR Name = '2' AND Name = '3')) AND (((Description = '4') OR (Id = '5' AND Id = '6'))) AND Id = '7'`,
    isValid: false,
  },
  {
    testCase: 129,
    soql: `SELECT Id FROM Account WHERE (((Name = '1' OR Name = '2') AND Name = '3') AND (((Description = '4') OR (Id = '5' AND Id = '6'))) AND Id = '7'`,
    isValid: false,
  },
  {
    testCase: 130,
    soql: `SELECT Id FROM Account WHERE (((Name = '1' OR Name = '2') AND Name = '3') AND (((Description = '4') OR (Id = '5' AND Id = '6')) AND Id = '7'`,
    isValid: false,
  },
  {
    testCase: 131,
    soql: `SELECT Id FROM Account WHERE (((Name = '1' OR Name = '2') AND Name = '3')) AND ((Description = '4') OR (Id = '5' AND Id = '6'))) AND Id = '7'`,
    isValid: false,
  },
  {
    testCase: 132,
    soql: `SELECT Id FROM Account WHERE (((Name = '1' OR Name = '2') AND Name = '3')) AND (((Description = '4' OR (Id = '5' AND Id = '6'))) AND Id = '7'`,
    isValid: false,
  },
  {
    testCase: 133,
    soql: `SELECT Id FROM Account WHERE (((Name = '1' OR Name = '2') AND Name = '3')) AND (((Description = '4') OR Id = '5' AND Id = '6'))) AND Id = '7'`,
    isValid: false,
  },
  {
    testCase: 134,
    soql: `SELECT Name, Count(Id) FROM Account GROUP BY Name HAVING Count(Id) > 0 AND (Name LIKE '%testing%)`,
    isValid: false,
  },
  {
    testCase: 135,
    soql: `SELECT Name, Count(Id) FROM Account GROUP BY Name HAVING Count(Id) > 0 AND (Name LIKE '%testing%' OR Name LIKE '%123%')`,
    isValid: true,
  },
  {
    testCase: 136,
    soql: `SELECT Name, Count(Id) FROM Account GROUP BY Name HAVING Count(Id) > 0 AND (Name LIKE '%testing%' OR Name LIKE '%123%'`,
    isValid: false,
  },
  {
    testCase: 137,
    soql: `SELECT Name, StreetAddress__c FROM Warehouse__c WHERE GEOLOCATION(Location__c, DISTANCE(37.775, -122.418), 'mi') < 20`,
    isValid: false,
  },
  {
    testCase: 138,
    soql: `SELECT Name, StreetAddress__c FROM Warehouse__c WHERE GEOLOCATION(37.775, -122.418) < 20`,
    isValid: false,
  },
  {
    testCase: 139,
    soql: `SELECT Name, GEOLOCATION(37.775, -122.418) FROM Warehouse__c`,
    isValid: false,
  },
  {
    testCase: 140,
    soql: `SELECT Name, DISTANCE(37.775, -122.418) FROM Warehouse__c`,
    isValid: false,
  },
  {
    testCase: 141,
    soql: `SELECT Id, Name, Location, DISTANCE(Location, GEOLOCATION(10, 10), 'mi') FROM CONTACT`,
    isValid: true,
  },
  {
    testCase: 142,
    soql: `SELECT Id, Name, Location, DISTANCE(Location, GEOLOCATION(10, 10), 'km') FROM CONTACT`,
    isValid: true,
  },
  {
    testCase: 143,
    soql: `SELECT Id, Name, Location, DISTANCE(Location, GEOLOCATION(-10, -10), 'km') FROM CONTACT`,
    isValid: true,
  },
  {
    testCase: 144,
    soql: `SELECT Id, Name, Location, DISTANCE(Location, GEOLOCATION(-10.775, -10.775), 'mi') FROM CONTACT`,
    isValid: true,
  },
  {
    testCase: 145,
    soql: `SELECT Id, Name, Location, DISTANCE(Location, GEOLOCATION(10, 10), 'm') FROM CONTACT`,
    isValid: false,
  },
  {
    testCase: 146,
    soql: `SELECT Id, Name, Location, DISTANCE(GEOLOCATION(37.775,-122.418), warehouse_location__c, 'km') FROM CONTACT`,
    isValid: false,
  },
  {
    testCase: 147,
    soql: `SELECT Id, Name FROM Account ORDER BY CreatedDate Desc`,
    isValid: true,
  },
  {
    testCase: 148,
    soql: `SELECT Id, Name FROM Account ORDER BY CreatedDate desc`,
    isValid: true,
  },
  {
    testCase: 149,
    soql: `SELECT Id, Name FROM Account ORDER BY CreatedDate Asc`,
    isValid: true,
  },
  {
    testCase: 150,
    soql: `SELECT Id, Name FROM Account ORDER BY CreatedDate asc`,
    isValid: true,
  },
  {
    testCase: 151,
    soql: `SELECT sbqq__product__r.name foo, sbqq__quote__c bar FROM SBQQ__Quoteline__c group by sbqq__quote__c, sbqq__product__r.name`,
    isValid: true,
  },
  {
    testCase: 152,
    soql: `SELECT sbqq__product__r.name foo, sbqq__quote__c foo1 FROM SBQQ__Quoteline__c group by sbqq__quote__c, sbqq__product__r.name`,
    isValid: true,
  },
  {
    testCase: 153,
    soql: `SELECT AnnualRevenue FROM Account WHERE NOT (AnnualRevenue > 0 AND AnnualRevenue < 200000)`,
    isValid: true,
  },
  {
    testCase: 154,
    soql: `SELECT AnnualRevenue FROM Account WHERE ((NOT AnnualRevenue > 0) AND AnnualRevenue < 200000) LIMIT 1`,
    isValid: true,
  },
  {
    testCase: 155,
    soql: `SELECT Id FROM Account WHERE ((NOT (Name = '2' OR Name = '3')))`,
    isValid: true,
  },
  {
    testCase: 156,
    soql: `SELECT Id FROM Account WHERE NOT (Name = '2' OR Name = '3')`,
    isValid: true,
  },
  {
    testCase: 157,
    soql: `SELECT Id FROM Account WHERE NOT (Name = '2')`,
    isValid: true,
  },
  {
    testCase: 158,
    soql: `SELECT Id FROM Account WHERE NOT Name = '2'`,
    isValid: true,
  },
  {
    testCase: 158,
    options: { allowApexBindVariables: true },
    soql: `
SELECT Id
FROM Account
WHERE
  Id IN :new Map<
    Id,
    SObject
  >
  (someVar)
  .getSomeClass()
  .records
    `,
    isValid: true,
  },
];
export default testCases;
