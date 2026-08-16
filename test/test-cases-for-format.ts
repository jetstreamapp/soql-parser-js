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
\tName, Id, Name, Foo, Bar, Baz, Bee, Boo, Bam, Moo, Maz,
\tMan, Name, Id, Name, Foo, Bar, Baz, Bee, Boo, Bam, Moo,
\tMaz, Man, Name, Id, Name, Foo, Bar, Baz, Bee, Boo, Bam,
\tMoo, Maz, Man, Name,
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
\tAND LoginTime < 2010-09-21T22:16:30.000Z
GROUP BY UserId
`.trim(),
  },
  {
    testCase: 5,
    soql: `SELECT Id FROM Account WHERE (Id IN ('1', '2', '3') OR (NOT Id = '2') OR (Name LIKE '%FOO%' OR (Name LIKE '%ARM%' AND FOO = 'bar')))`,
    formattedSoql: `SELECT Id
FROM Account
WHERE (
\t\tId IN ('1', '2', '3')
\t\tOR (NOT Id = '2')
\t\tOR (
\t\t\tName LIKE '%FOO%'
\t\t\tOR (
\t\t\t\tName LIKE '%ARM%'
\t\t\t\tAND FOO = 'bar'
\t\t\t)
\t\t)
\t)
`.trim(),
  },
  {
    testCase: 6,
    soql: `SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%' AND foo = 'bar') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = TRUE)`,
    formattedSoql: `SELECT Id, Name
FROM Account
WHERE Id IN (
\t\tSELECT AccountId
\t\tFROM Contact
\t\tWHERE LastName LIKE 'apple%'
\t\t\tAND foo = 'bar'
\t)
\tAND Id IN (
\t\tSELECT AccountId
\t\tFROM Opportunity
\t\tWHERE isClosed = TRUE
\t)
`.trim(),
  },
  {
    testCase: 7,
    soql: `SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Account.Name, (SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Contact.LastName FROM Account.Contacts WHERE Id = '123' OR Id = '456' OR pimped = TRUE), baz, (SELECT Id FROM account WHERE Boo.baz = 'bar'), bax, bar FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Foo = 'bar' OR Baz = 'boom' AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = TRUE) ORDER BY GROUPING(Type), GROUPING(Id, BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST`,
    formatOptions: { fieldMaxLineLength: 20, fieldSubqueryParensOnOwnLine: true },
    formattedSoql: `SELECT Id, Name, Foo, Bar,
\tBaz, Bax, aaa, bbb,
\tccc, ddd, Id, Name,
\tFoo, Bar, Baz, Bax,
\taaa, bbb, ccc, ddd,
\tId, Name, Foo, Bar,
\tBaz, Bax, aaa, bbb,
\tccc, ddd,
\tAccount.Name,
\t(
\t\tSELECT Id, Name, Foo, Bar,
\t\t\tBaz, Bax, aaa, bbb,
\t\t\tccc, ddd, Id, Name,
\t\t\tFoo, Bar, Baz, Bax,
\t\t\taaa, bbb, ccc, ddd,
\t\t\tContact.LastName
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
    soql: 'SELECT Id, (SELECT Id FROM Contacts) FROM Account WHERE Id IN (SELECT AccountId FROM Contact) ORDER BY Name, Type, Industry',
    formatOptions: { numIndent: 2, fieldMaxLineLength: 10 },
    formattedSoql: `SELECT Id,
\t\t(
\t\t\t\tSELECT Id
\t\t\t\tFROM Contacts
\t\t)
FROM Account
WHERE Id IN (
\t\t\t\tSELECT AccountId
\t\t\t\tFROM Contact
\t\t)
ORDER BY Name,
\t\tType,
\t\tIndustry
`.trim(),
  },
  {
    testCase: 9,
    soql: `SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Account.Name, (SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Contact.LastName FROM Account.Contacts WHERE Id = '123' OR Id = '456' OR pimped = TRUE), baz, (SELECT Id FROM account WHERE Boo.baz = 'bar'), bax, bar FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Foo = 'bar' OR Baz = 'boom' AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = TRUE) ORDER BY GROUPING(Type), GROUPING(Id, BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST`,
    formatOptions: { fieldMaxLineLength: 20, fieldSubqueryParensOnOwnLine: false },
    formattedSoql: `SELECT Id, Name, Foo, Bar,
\tBaz, Bax, aaa, bbb,
\tccc, ddd, Id, Name,
\tFoo, Bar, Baz, Bax,
\taaa, bbb, ccc, ddd,
\tId, Name, Foo, Bar,
\tBaz, Bax, aaa, bbb,
\tccc, ddd,
\tAccount.Name,
\t(SELECT Id, Name, Foo, Bar,
\t\tBaz, Bax, aaa, bbb,
\t\tccc, ddd, Id, Name,
\t\tFoo, Bar, Baz, Bax,
\t\taaa, bbb, ccc, ddd,
\t\tContact.LastName
\tFROM Account.Contacts
\tWHERE Id = '123'
\t\tOR Id = '456'
\t\tOR pimped = TRUE),
\tbaz,
\t(SELECT Id
\tFROM account
\tWHERE Boo.baz = 'bar'),
\tbax, bar
FROM Account
WHERE Id IN (SELECT AccountId
\tFROM Contact
\tWHERE LastName LIKE 'apple%')
\tAND Foo = 'bar'
\tOR Baz = 'boom'
\tAND Id IN (SELECT AccountId
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
    formatOptions: { fieldMaxLineLength: 170, fieldSubqueryParensOnOwnLine: false },
    formattedSoql:
      `SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Account.Name,
\t(SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Contact.LastName
\tFROM Account.Contacts
\tWHERE Id = '123'
\t\tOR Id = '456'
\t\tOR pimped = TRUE),
\tbaz,
\t(SELECT Id
\tFROM account
\tWHERE Boo.baz = 'bar'),
\tbax, bar
FROM Account
WHERE Id IN (SELECT AccountId
\tFROM Contact
\tWHERE LastName LIKE 'apple%')
\tAND Foo = 'bar'
\tOR Baz = 'boom'
\tAND Id IN (SELECT AccountId
\tFROM Opportunity
\tWHERE isClosed = TRUE)
ORDER BY GROUPING(Type), GROUPING(Id, BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST
`.trim(),
  },
  {
    testCase: 11,
    soql: `SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue, BillingAddress, BillingCity, BillingCountry, BillingGeocodeAccuracy, ShippingStreet, Sic, SicDesc, Site, SystemModstamp, TickerSymbol, Type, Website, (SELECT Id, Name, AccountId, Amount, CampaignId, CloseDate, CreatedById, Type FROM Opportunities), (SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue, BillingAddress, Website FROM ChildAccounts) FROM Account WHERE Name LIKE 'a%' OR Name LIKE 'b%' OR Name LIKE 'c%'`,
    formatOptions: { fieldMaxLineLength: 0, fieldSubqueryParensOnOwnLine: true },
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
\tOR Name LIKE 'b%'
\tOR Name LIKE 'c%'
`.trim(),
  },
  {
    testCase: 12,
    soql: 'SELECT AccountNumber, (SELECT AccountNumber FROM ChildAccounts WHERE CreatedDate = 2017-04-05T10:41:42.000+0000) FROM Account WHERE CreatedDate >= 2017-04-05T10:41:42.000+0000 AND CreatedDate <= 2017-05-05T10:41:42.000+0000',
    formatOptions: { newLineAfterKeywords: true, fieldMaxLineLength: 1 },
    formattedSoql: `SELECT
\tAccountNumber,
\t(
\t\tSELECT
\t\t\tAccountNumber
\t\tFROM
\t\t\tChildAccounts
\t\tWHERE
\t\t\tCreatedDate = 2017-04-05T10:41:42.000+0000
\t)
FROM
\tAccount
WHERE
\tCreatedDate >= 2017-04-05T10:41:42.000+0000
\tAND CreatedDate <= 2017-05-05T10:41:42.000+0000
`.trim(),
  },
  {
    testCase: 13,
    soql: `SELECT Id FROM Account WHERE (((Name = '1' OR Name = '2') AND Name = '3')) AND (((Description = '123') OR (Id = '1' AND Id = '2'))) AND Id = '1' ORDER BY Name, CreatedDate`,
    formatOptions: { newLineAfterKeywords: true, fieldMaxLineLength: 1 },
    formattedSoql: `SELECT
\tId
FROM
\tAccount
WHERE
\t(
\t\t(
\t\t\t(
\t\t\t\tName = '1'
\t\t\t\tOR Name = '2'
\t\t\t)
\t\t\tAND Name = '3'
\t\t)
\t)
\tAND (
\t\t(
\t\t\t(
\t\t\t\tDescription = '123'
\t\t\t)
\t\t\tOR (
\t\t\t\tId = '1'
\t\t\t\tAND Id = '2'
\t\t\t)
\t\t)
\t)
\tAND Id = '1'
ORDER BY
\tName,
\tCreatedDate
`.trim(),
  },
  {
    testCase: 14,
    soql: `SELECT Id FROM Account WHERE (Id IN ('1', '2', '3') OR (NOT Id = '2') OR (Name LIKE '%FOO%' OR (Name LIKE '%ARM%' AND FOO = 'bar')))`,
    formatOptions: { newLineAfterKeywords: true, fieldMaxLineLength: 1 },
    formattedSoql: `SELECT
\tId
FROM
\tAccount
WHERE
\t(
\t\tId IN ('1', '2', '3')
\t\tOR (NOT Id = '2')
\t\tOR (
\t\t\tName LIKE '%FOO%'
\t\t\tOR (
\t\t\t\tName LIKE '%ARM%'
\t\t\t\tAND FOO = 'bar'
\t\t\t)
\t\t)
\t)
`.trim(),
  },
  {
    testCase: 15,
    soql: `SELECT Id, TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate ELSE Name, Email END, Name FROM Event`,
    formatOptions: { newLineAfterKeywords: true, fieldMaxLineLength: 1 },
    formattedSoql: `SELECT
\tId,
\tTYPEOF What
\t\tWHEN
\t\t\tAccount
\t\tTHEN
\t\t\tPhone, NumberOfEmployees
\t\tWHEN
\t\t\tOpportunity
\t\tTHEN
\t\t\tAmount, CloseDate
\t\tELSE
\t\t\tName, Email
\tEND,
\tName
FROM
\tEvent
`.trim(),
  },
  {
    testCase: 16,
    soql: `SELECT Id, TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate ELSE Name, Email END, Name FROM Event`,
    formatOptions: { newLineAfterKeywords: false, fieldMaxLineLength: 60 },
    formattedSoql: `SELECT Id,
\tTYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate ELSE Name, Email END,
\tName
FROM Event
`.trim(),
  },
  {
    testCase: 17,
    soql: `SELECT TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate ELSE Name, Email END, Name FROM Event`,
    formatOptions: { newLineAfterKeywords: false, fieldMaxLineLength: 60 },
    formattedSoql: `SELECT
\tTYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate ELSE Name, Email END,
\tName
FROM Event
`.trim(),
  },
  {
    testCase: 18,
    soql: `SELECT Id, Name, Account__pc, CurrencyIsoCode, Description FROM Account WHERE percent__c IN (1, 3, 4, 5) AND PersonOtherCity NOT IN ('zurich')`,
    formatOptions: { newLineAfterKeywords: true, fieldMaxLineLength: 1, numIndent: 2 },
    formattedSoql: `SELECT
\t\tId,
\t\tName,
\t\tAccount__pc,
\t\tCurrencyIsoCode,
\t\tDescription
FROM
\t\tAccount
WHERE
\t\tpercent__c IN (1, 3, 4, 5)
\t\tAND PersonOtherCity NOT IN ('zurich')
`.trim(),
  },
  {
    testCase: 19,
    soql: 'SELECT Id, (SELECT Id FROM Contacts) FROM Account WHERE Id IN (SELECT AccountId FROM Contact) ORDER BY Name, Type, Industry',
    formatOptions: { numIndent: 2, fieldMaxLineLength: 10, fieldSubqueryParensOnOwnLine: false },
    formattedSoql: `SELECT Id,
\t\t(SELECT Id
\t\tFROM Contacts)
FROM Account
WHERE Id IN (SELECT AccountId
\t\tFROM Contact)
ORDER BY Name,
\t\tType,
\t\tIndustry
`.trim(),
  },
  {
    testCase: 20,
    soql: 'SELECT Id, TYPEOF What WHEN Account THEN Phone ELSE Name END FROM Event',
    formatOptions: { numIndent: 2, newLineAfterKeywords: true },
    formattedSoql: `SELECT
\t\tId,
\t\tTYPEOF What
\t\t\t\tWHEN
\t\t\t\t\t\tAccount
\t\t\t\tTHEN
\t\t\t\t\t\tPhone
\t\t\t\tELSE
\t\t\t\t\t\tName
\t\tEND
FROM
\t\tEvent
`.trim(),
  },
  {
    testCase: 21,
    soql: 'SELECT (SELECT Id FROM Contacts), Name FROM Account',
    formatOptions: { newLineAfterKeywords: true },
    formattedSoql: `SELECT
\t(
\t\tSELECT
\t\t\tId
\t\tFROM
\t\t\tContacts
\t),
\tName
FROM
\tAccount
`.trim(),
  },
  {
    testCase: 22,
    soql: 'SELECT TYPEOF What WHEN Account THEN Phone ELSE Name END, Name FROM Event',
    formatOptions: { newLineAfterKeywords: true },
    formattedSoql: `SELECT
\tTYPEOF What
\t\tWHEN
\t\t\tAccount
\t\tTHEN
\t\t\tPhone
\t\tELSE
\t\t\tName
\tEND,
\tName
FROM
\tEvent
`.trim(),
  },
  {
    testCase: 23,
    soql: 'SELECT Id FROM Account WITH SECURITY_ENFORCED FOR VIEW',
    formatOptions: { newLineAfterKeywords: true },
    formattedSoql: `SELECT
\tId
FROM
\tAccount
WITH SECURITY_ENFORCED
FOR
\tVIEW
`.trim(),
  },
  {
    testCase: 24,
    soql: 'SELECT Id FROM Account WITH USER_MODE UPDATE TRACKING',
    formatOptions: { newLineAfterKeywords: true },
    formattedSoql: `SELECT
\tId
FROM
\tAccount
WITH USER_MODE
UPDATE
\tTRACKING
`.trim(),
  },
  {
    testCase: 25,
    soql: "SELECT Id FROM Account WHERE (Name = 'a' OR Id IN (SELECT AccountId FROM Contact)) AND Name = 'b'",
    formattedSoql: `SELECT Id
FROM Account
WHERE (
\t\tName = 'a'
\t\tOR Id IN (
\t\t\tSELECT AccountId
\t\t\tFROM Contact
\t\t)
\t)
\tAND Name = 'b'
`.trim(),
  },
  {
    testCase: 26,
    soql: "SELECT Id FROM Account WHERE (Name = 'a' OR Id IN (SELECT AccountId FROM Contact)) AND Name = 'b'",
    formatOptions: { newLineAfterKeywords: true },
    formattedSoql: `SELECT
\tId
FROM
\tAccount
WHERE
\t(
\t\tName = 'a'
\t\tOR Id IN (
\t\t\tSELECT
\t\t\t\tAccountId
\t\t\tFROM
\t\t\t\tContact
\t\t)
\t)
\tAND Name = 'b'
`.trim(),
  },
  {
    testCase: 27,
    soql: "SELECT Id FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE Id IN (SELECT ContactId FROM Case WHERE Status = 'Open'))",
    formattedSoql: `SELECT Id
FROM Account
WHERE Id IN (
\t\tSELECT AccountId
\t\tFROM Contact
\t\tWHERE Id IN (
\t\t\t\tSELECT ContactId
\t\t\t\tFROM Case
\t\t\t\tWHERE Status = 'Open'
\t\t\t)
\t)
`.trim(),
  },
  {
    testCase: 28,
    soql: 'SELECT COUNT(Id) FROM Account GROUP BY Name, Type, Industry, BillingCity, BillingState, BillingCountry, OwnerId, CreatedById',
    formatOptions: { fieldMaxLineLength: 30 },
    formattedSoql: `SELECT COUNT(Id)
FROM Account
GROUP BY Name, Type, Industry,
\tBillingCity, BillingState,
\tBillingCountry, OwnerId,
\tCreatedById
`.trim(),
  },
  {
    testCase: 29,
    soql: "SELECT COUNT(Id) FROM Account GROUP BY Name, Type HAVING COUNT(Id) > 1 AND Name = 'x' ORDER BY Name, Type",
    formatOptions: { newLineAfterKeywords: true },
    formattedSoql: `SELECT
\tCOUNT(Id)
FROM
\tAccount
GROUP BY
\tName,
\tType
HAVING
\tCOUNT(Id) > 1
\tAND Name = 'x'
ORDER BY
\tName,
\tType
`.trim(),
  },
  {
    testCase: 30,
    soql: "SELECT Id FROM Account USING SCOPE Mine WHERE Id = '1' WITH SECURITY_ENFORCED GROUP BY Name HAVING COUNT(Id) > 1 ORDER BY Name LIMIT 10 OFFSET 5 FOR VIEW",
    formattedSoql: `SELECT Id
FROM Account
USING SCOPE Mine
WHERE Id = '1'
WITH SECURITY_ENFORCED
GROUP BY Name
HAVING COUNT(Id) > 1
ORDER BY Name
LIMIT 10
OFFSET 5
FOR VIEW
`.trim(),
  },
  {
    testCase: 31,
    soql: "SELECT Id FROM Account USING SCOPE Mine WHERE Id = '1' WITH SECURITY_ENFORCED GROUP BY Name HAVING COUNT(Id) > 1 ORDER BY Name LIMIT 10 OFFSET 5 FOR VIEW",
    formatOptions: { newLineAfterKeywords: true },
    formattedSoql: `SELECT
\tId
FROM
\tAccount
USING SCOPE
\tMine
WHERE
\tId = '1'
WITH SECURITY_ENFORCED
GROUP BY
\tName
HAVING
\tCOUNT(Id) > 1
ORDER BY
\tName
LIMIT
\t10
OFFSET
\t5
FOR
\tVIEW
`.trim(),
  },
  {
    testCase: 32,
    soql: "SELECT Title FROM KnowledgeArticleVersion WHERE PublishStatus = 'online' WITH DATA CATEGORY Geography__c AT (usa__c, uk__c) AND Product__c ABOVE mobile_phones__c UPDATE TRACKING",
    formatOptions: { newLineAfterKeywords: true },
    formattedSoql: `SELECT
\tTitle
FROM
\tKnowledgeArticleVersion
WHERE
\tPublishStatus = 'online'
WITH DATA CATEGORY
\tGeography__c AT (usa__c, uk__c) AND Product__c ABOVE mobile_phones__c
UPDATE
\tTRACKING
`.trim(),
  },
  {
    testCase: 33,
    soql: 'SELECT Id FROM Account WHERE ((NOT AnnualRevenue > 0) AND AnnualRevenue < 200000)',
    formattedSoql: `SELECT Id
FROM Account
WHERE (
\t\t(NOT AnnualRevenue > 0)
\t\tAND AnnualRevenue < 200000
\t)
`.trim(),
  },
  {
    testCase: 34,
    soql: "SELECT Id FROM Account WHERE (NOT Name = 'a' AND Id = '1')",
    formattedSoql: `SELECT Id
FROM Account
WHERE (
\t\tNOT Name = 'a'
\t\tAND Id = '1'
\t)
`.trim(),
  },
  {
    testCase: 35,
    soql: "SELECT Id FROM Account WHERE NOT ((NOT (City LIKE '%LHR%')) AND City LIKE '%KHR%')",
    formattedSoql: `SELECT Id
FROM Account
WHERE NOT (
\t\t(
\t\t\tNOT (
\t\t\t\tCity LIKE '%LHR%'
\t\t\t)
\t\t)
\t\tAND City LIKE '%KHR%'
\t)
`.trim(),
  },
  {
    testCase: 36,
    soql: "SELECT Id FROM Account WHERE NOT (NOT BillingCity LIKE '%123%') OR NOT (Name = 'a' AND Id = '1')",
    formatOptions: { newLineAfterKeywords: true },
    formattedSoql: `SELECT
\tId
FROM
\tAccount
WHERE
\tNOT (NOT BillingCity LIKE '%123%')
\tOR NOT (
\t\tName = 'a'
\t\tAND Id = '1'
\t)
`.trim(),
  },
  {
    testCase: 37,
    soql: "SELECT Id, Name, (SELECT Id FROM Contacts) FROM Account WHERE Name = 'a' AND (Id = '1' OR Id = '2') ORDER BY Name",
    formatOptions: { indentString: '  ', numIndent: 2 },
    formattedSoql: `SELECT Id, Name,
    (
        SELECT Id
        FROM Contacts
    )
FROM Account
WHERE Name = 'a'
    AND (
        Id = '1'
        OR Id = '2'
    )
ORDER BY Name
`.trim(),
  },
];
export default testCases;
