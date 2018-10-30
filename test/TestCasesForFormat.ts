import { FormatOptions } from '../lib/SoqlFormatter';
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
    soql: `SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%' AND foo = 'bar') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false)`,
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
\tWHERE isClosed = false
)
`.trim(),
  },
  {
    testCase: 7,
    soql: `SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Account.Name, (SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Contact.LastName FROM Account.Contacts WHERE Id = '123' OR Id = '456' OR pimped = true), baz, (SELECT Id FROM account WHERE Boo.baz = 'bar'), bax, bar FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Foo = 'bar' OR Baz = 'boom' AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false) ORDER BY GROUPING(Type), GROUPING(Id, BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST`,
    formatOptions: { fieldMaxLineLen: 20, fieldSubqueryParensOnOwnLine: true, whereClauseOperatorsIndented: true },
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
\t\t\tOR pimped = true
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
\t\tWHERE isClosed = false
\t)
ORDER BY GROUPING(Type),
\tGROUPING(Id, BillingCountry),
\tName DESC NULLS FIRST,
\tId ASC NULLS LAST    
`.trim(),
  },
  {
    testCase: 8,
    soql: `SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Account.Name, (SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Contact.LastName FROM Account.Contacts WHERE Id = '123' OR Id = '456' OR pimped = true), baz, (SELECT Id FROM account WHERE Boo.baz = 'bar'), bax, bar FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Foo = 'bar' OR Baz = 'boom' AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false) ORDER BY GROUPING(Type), GROUPING(Id, BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST`,
    formatOptions: { fieldMaxLineLen: 20, fieldSubqueryParensOnOwnLine: true, whereClauseOperatorsIndented: false },
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
\t\tOR pimped = true
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
\tWHERE isClosed = false
)
ORDER BY GROUPING(Type),
\tGROUPING(Id, BillingCountry),
\tName DESC NULLS FIRST,
\tId ASC NULLS LAST    
`.trim(),
  },
  {
    testCase: 9,
    soql: `SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Account.Name, (SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Contact.LastName FROM Account.Contacts WHERE Id = '123' OR Id = '456' OR pimped = true), baz, (SELECT Id FROM account WHERE Boo.baz = 'bar'), bax, bar FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Foo = 'bar' OR Baz = 'boom' AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false) ORDER BY GROUPING(Type), GROUPING(Id, BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST`,
    formatOptions: { fieldMaxLineLen: 20, fieldSubqueryParensOnOwnLine: false, whereClauseOperatorsIndented: false },
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
\tOR pimped = true),
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
\tWHERE isClosed = false)
ORDER BY GROUPING(Type),
\tGROUPING(Id, BillingCountry),
\tName DESC NULLS FIRST,
\tId ASC NULLS LAST    
`.trim(),
  },
  {
    testCase: 10,
    soql: `SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Account.Name, (SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Contact.LastName FROM Account.Contacts WHERE Id = '123' OR Id = '456' OR pimped = true), baz, (SELECT Id FROM account WHERE Boo.baz = 'bar'), bax, bar FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Foo = 'bar' OR Baz = 'boom' AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false) ORDER BY GROUPING(Type), GROUPING(Id, BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST`,
    formatOptions: { fieldMaxLineLen: 170, fieldSubqueryParensOnOwnLine: false, whereClauseOperatorsIndented: false },
    formattedSoql: `SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Account.Name,
\t(SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Contact.LastName
\tFROM Account.Contacts
\tWHERE Id = '123'
\tOR Id = '456'
\tOR pimped = true),
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
\tWHERE isClosed = false)
ORDER BY GROUPING(Type), GROUPING(Id, BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST    
`.trim(),
  },
];
export default testCases;
