import { FormatOptions } from '../src/formatter/formatter';
export interface TestCaseForFormat {
  testCase: number;
  soql: string;
  formattedSoql: string;
  formatOptions?: FormatOptions;
}

export const testCases: TestCaseForFormat[] = [
  {
    testCase: 1,
    soql: 'SELECT Id, Name, (SELECT Id, Name FROM Contacts), Foo, Bar, BillingCity FROM Account',
    formatOptions: { fieldSubqueryParensOnOwnLine: false },
    formattedSoql: `SELECT Id, Name,
\t(SELECT Id, Name
\tFROM Contacts),
\tFoo, Bar, BillingCity
FROM Account
`.trim(),
  },
  {
    testCase: 2,
    soql: 'SELECT Id, Name, (SELECT Id, Name FROM Contacts), Foo, Bar, BillingCity FROM Account',
    formatOptions: { fieldSubqueryParensOnOwnLine: true },
    formattedSoql: `SELECT Id, Name,
\t(
\t\tSELECT Id, Name
\t\tFROM Contacts
\t),
\tFoo, Bar, BillingCity
FROM Account
`.trim(),
  },
  {
    testCase: 3,
    soql: `SELECT Id, Name, Foo, Bar, Baz, Bee, Boo, Bam, Moo, Maz, Man, Name, Id, Name, Foo, Bar, Baz, Bee, Boo, Bam, Moo, Maz, Man, Name,Id, Name, Foo, Bar, Baz, Bee, Boo, Bam, Moo, Maz, Man, Name,Id, Name, Foo, Bar, Baz, Bee, Boo, Bam, Moo, Maz, Man, Name,(SELECT Name FROM Line_Items__r) FROM Merchandise__c WHERE Name LIKE 'Acme%'`,
    formattedSoql: `SELECT Id, Name, Foo, Bar, Baz, Bee, Boo, Bam, Moo, Maz, Man,
\tName, Id, Name, Foo, Bar, Baz, Bee, Boo, Bam, Moo, Maz, Man,
\tName, Id, Name, Foo, Bar, Baz, Bee, Boo, Bam, Moo, Maz, Man,
\tName, Id, Name, Foo, Bar, Baz, Bee, Boo, Bam, Moo, Maz, Man,
\tName,
\t(
\t\tSELECT Name
\t\tFROM Line_Items__r
\t)
FROM Merchandise__c
WHERE Name LIKE 'Acme%'
`.trim(),
  },
  {
    testCase: 4,
    soql: `SELECT UserId, COUNT(Id) from LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z GROUP BY UserId`,
    formattedSoql: `SELECT UserId, COUNT(Id)
FROM LoginHistory
WHERE LoginTime > 2010-09-20T22:16:30.000Z
AND LoginTime < 2010-09-21T22:16:30.000Z
GROUP BY UserId
`.trim(),
  },
  {
    testCase: 5,
    soql: `SELECT Id FROM Account WHERE (Id IN ('1', '2', '3') OR (NOT Id = '2') OR (Name LIKE '%FOO%' OR (Name LIKE '%ARM%' AND FOO = 'bar')))`,
    formattedSoql: `SELECT Id
FROM Account
WHERE (Id IN ('1', '2', '3')
OR (NOT Id = '2')
OR (Name LIKE '%FOO%'
OR (Name LIKE '%ARM%'
AND FOO = 'bar')))
`.trim(),
  },
  {
    testCase: 6,
    soql: `SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%' AND foo = 'bar') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = TRUE)`,
    formattedSoql: `SELECT Id, Name
FROM Account
WHERE Id IN (
\tSELECT AccountId
\tFROM Contact
\tWHERE LastName LIKE 'apple%'
\tAND foo = 'bar'
)
AND Id IN (
\tSELECT AccountId
\tFROM Opportunity
\tWHERE isClosed = TRUE
)
`.trim(),
  },
  {
    testCase: 7,
    soql: `SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Account.Name, (SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Contact.LastName FROM Account.Contacts WHERE Id = '123' OR Id = '456' OR pimped = TRUE), baz, (SELECT Id FROM account WHERE Boo.baz = 'bar'), bax, bar FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Foo = 'bar' OR Baz = 'boom' AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = TRUE) ORDER BY GROUPING(Type), GROUPING(Id, BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST`,
    formatOptions: { fieldMaxLineLength: 20, fieldSubqueryParensOnOwnLine: true, whereClauseOperatorsIndented: true },
    formattedSoql: `SELECT Id, Name, Foo, Bar,
\tBaz, Bax, aaa, bbb, ccc,
\tddd, Id, Name, Foo, Bar,
\tBaz, Bax, aaa, bbb, ccc,
\tddd, Id, Name, Foo, Bar,
\tBaz, Bax, aaa, bbb, ccc,
\tddd, Account.Name,
\t(
\t\tSELECT Id, Name, Foo, Bar,
\t\t\tBaz, Bax, aaa, bbb, ccc,
\t\t\tddd, Id, Name, Foo, Bar,
\t\t\tBaz, Bax, aaa, bbb, ccc,
\t\t\tddd, Contact.LastName
\t\tFROM Account.Contacts
\t\tWHERE Id = '123'
\t\t\tOR Id = '456'
\t\t\tOR pimped = TRUE
\t),
\tbaz,
\t(
\t\tSELECT Id
\t\tFROM account
\t\tWHERE Boo.baz = 'bar'
\t),
\tbax, bar
FROM Account
WHERE Id IN (
\t\tSELECT AccountId
\t\tFROM Contact
\t\tWHERE LastName LIKE 'apple%'
\t)
\tAND Foo = 'bar'
\tOR Baz = 'boom'
\tAND Id IN (
\t\tSELECT AccountId
\t\tFROM Opportunity
\t\tWHERE isClosed = TRUE
\t)
ORDER BY GROUPING(Type),
\tGROUPING(Id, BillingCountry),
\tName DESC NULLS FIRST,
\tId ASC NULLS LAST    
`.trim(),
  },
  {
    testCase: 8,
    soql: `SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Account.Name, (SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Contact.LastName FROM Account.Contacts WHERE Id = '123' OR Id = '456' OR pimped = TRUE), baz, (SELECT Id FROM account WHERE Boo.baz = 'bar'), bax, bar FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Foo = 'bar' OR Baz = 'boom' AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = TRUE) ORDER BY GROUPING(Type), GROUPING(Id, BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST`,
    formatOptions: { fieldMaxLineLength: 20, fieldSubqueryParensOnOwnLine: true, whereClauseOperatorsIndented: false },
    formattedSoql: `SELECT Id, Name, Foo, Bar,
\tBaz, Bax, aaa, bbb, ccc,
\tddd, Id, Name, Foo, Bar,
\tBaz, Bax, aaa, bbb, ccc,
\tddd, Id, Name, Foo, Bar,
\tBaz, Bax, aaa, bbb, ccc,
\tddd, Account.Name,
\t(
\t\tSELECT Id, Name, Foo, Bar,
\t\t\tBaz, Bax, aaa, bbb, ccc,
\t\t\tddd, Id, Name, Foo, Bar,
\t\t\tBaz, Bax, aaa, bbb, ccc,
\t\t\tddd, Contact.LastName
\t\tFROM Account.Contacts
\t\tWHERE Id = '123'
\t\tOR Id = '456'
\t\tOR pimped = TRUE
\t),
\tbaz,
\t(
\t\tSELECT Id
\t\tFROM account
\t\tWHERE Boo.baz = 'bar'
\t),
\tbax, bar
FROM Account
WHERE Id IN (
\tSELECT AccountId
\tFROM Contact
\tWHERE LastName LIKE 'apple%'
)
AND Foo = 'bar'
OR Baz = 'boom'
AND Id IN (
\tSELECT AccountId
\tFROM Opportunity
\tWHERE isClosed = TRUE
)
ORDER BY GROUPING(Type),
\tGROUPING(Id, BillingCountry),
\tName DESC NULLS FIRST,
\tId ASC NULLS LAST    
`.trim(),
  },
  {
    testCase: 9,
    soql: `SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Account.Name, (SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Contact.LastName FROM Account.Contacts WHERE Id = '123' OR Id = '456' OR pimped = TRUE), baz, (SELECT Id FROM account WHERE Boo.baz = 'bar'), bax, bar FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Foo = 'bar' OR Baz = 'boom' AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = TRUE) ORDER BY GROUPING(Type), GROUPING(Id, BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST`,
    formatOptions: { fieldMaxLineLength: 20, fieldSubqueryParensOnOwnLine: false, whereClauseOperatorsIndented: false },
    formattedSoql: `SELECT Id, Name, Foo, Bar,
\tBaz, Bax, aaa, bbb, ccc,
\tddd, Id, Name, Foo, Bar,
\tBaz, Bax, aaa, bbb, ccc,
\tddd, Id, Name, Foo, Bar,
\tBaz, Bax, aaa, bbb, ccc,
\tddd, Account.Name,
\t(SELECT Id, Name, Foo, Bar,
\t\tBaz, Bax, aaa, bbb, ccc,
\t\tddd, Id, Name, Foo, Bar,
\t\tBaz, Bax, aaa, bbb, ccc,
\t\tddd, Contact.LastName
\tFROM Account.Contacts
\tWHERE Id = '123'
\tOR Id = '456'
\tOR pimped = TRUE),
\tbaz,
\t(SELECT Id
\tFROM account
\tWHERE Boo.baz = 'bar'),
\tbax, bar
FROM Account
WHERE Id IN (SELECT AccountId
\tFROM Contact
\tWHERE LastName LIKE 'apple%')
AND Foo = 'bar'
OR Baz = 'boom'
AND Id IN (SELECT AccountId
\tFROM Opportunity
\tWHERE isClosed = TRUE)
ORDER BY GROUPING(Type),
\tGROUPING(Id, BillingCountry),
\tName DESC NULLS FIRST,
\tId ASC NULLS LAST    
`.trim(),
  },
  {
    testCase: 10,
    soql: `SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Account.Name, (SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Contact.LastName FROM Account.Contacts WHERE Id = '123' OR Id = '456' OR pimped = TRUE), baz, (SELECT Id FROM account WHERE Boo.baz = 'bar'), bax, bar FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Foo = 'bar' OR Baz = 'boom' AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = TRUE) ORDER BY GROUPING(Type), GROUPING(Id, BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST`,
    formatOptions: { fieldMaxLineLength: 170, fieldSubqueryParensOnOwnLine: false, whereClauseOperatorsIndented: false },
    formattedSoql: `SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Account.Name,
\t(SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Contact.LastName
\tFROM Account.Contacts
\tWHERE Id = '123'
\tOR Id = '456'
\tOR pimped = TRUE),
\tbaz,
\t(SELECT Id
\tFROM account
\tWHERE Boo.baz = 'bar'),
\tbax, bar
FROM Account
WHERE Id IN (SELECT AccountId
\tFROM Contact
\tWHERE LastName LIKE 'apple%')
AND Foo = 'bar'
OR Baz = 'boom'
AND Id IN (SELECT AccountId
\tFROM Opportunity
\tWHERE isClosed = TRUE)
ORDER BY GROUPING(Type), GROUPING(Id, BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST    
`.trim(),
  },
  {
    testCase: 11,
    soql: `SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue, BillingAddress, BillingCity, BillingCountry, BillingGeocodeAccuracy, ShippingStreet, Sic, SicDesc, Site, SystemModstamp, TickerSymbol, Type, Website, (SELECT Id, Name, AccountId, Amount, CampaignId, CloseDate, CreatedById, Type FROM Opportunities), (SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue, BillingAddress, Website FROM ChildAccounts) FROM Account WHERE Name LIKE 'a%' OR Name LIKE 'b%' OR Name LIKE 'c%'`,
    formatOptions: { fieldMaxLineLength: 0, fieldSubqueryParensOnOwnLine: true, whereClauseOperatorsIndented: false },
    formattedSoql: `SELECT 
\tId,
\tName,
\tAccountNumber,
\tAccountSource,
\tAnnualRevenue,
\tBillingAddress,
\tBillingCity,
\tBillingCountry,
\tBillingGeocodeAccuracy,
\tShippingStreet,
\tSic,
\tSicDesc,
\tSite,
\tSystemModstamp,
\tTickerSymbol,
\tType,
\tWebsite,
\t(
\t\tSELECT 
\t\t\tId,
\t\t\tName,
\t\t\tAccountId,
\t\t\tAmount,
\t\t\tCampaignId,
\t\t\tCloseDate,
\t\t\tCreatedById,
\t\t\tType
\t\tFROM Opportunities
\t),
\t(
\t\tSELECT 
\t\t\tId,
\t\t\tName,
\t\t\tAccountNumber,
\t\t\tAccountSource,
\t\t\tAnnualRevenue,
\t\t\tBillingAddress,
\t\t\tWebsite
\t\tFROM ChildAccounts
\t)
FROM Account
WHERE Name LIKE 'a%'
OR Name LIKE 'b%'
OR Name LIKE 'c%'
`.trim(),
  },
];
export default testCases;
