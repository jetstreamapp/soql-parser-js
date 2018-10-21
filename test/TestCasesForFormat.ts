export interface TestCaseForFormat {
  testCase: number;
  soql: string;
  formattedSoql: string;
}

export const testCases: TestCaseForFormat[] = [
  {
    testCase: 1,
    soql: 'SELECT Id, Name, (SELECT Id, Name FROM Contacts), Foo, Bar, BillingCity FROM Account',
    formattedSoql: `SELECT Id, Name,
\t(SELECT Id, Name
\tFROM Contacts),
\tFoo, Bar, BillingCity
FROM Account
`.trim(),
  },
  {
    testCase: 2,
    soql: `SELECT Id, Name, Foo, Bar, Baz, Bee, Boo, Bam, Moo, Maz, Man, Name, Id, Name, Foo, Bar, Baz, Bee, Boo, Bam, Moo, Maz, Man, Name,Id, Name, Foo, Bar, Baz, Bee, Boo, Bam, Moo, Maz, Man, Name,Id, Name, Foo, Bar, Baz, Bee, Boo, Bam, Moo, Maz, Man, Name,(SELECT Name FROM Line_Items__r) FROM Merchandise__c WHERE Name LIKE 'Acme%'`,
    formattedSoql: `SELECT Id, Name, Foo, Bar, Baz, Bee, Boo, Bam, Moo, Maz, Man, Name, Id, Name, Foo, Bar, Baz, Bee, Boo,
\tBam, Moo, Maz, Man, Name, Id, Name, Foo, Bar, Baz, Bee, Boo, Bam, Moo, Maz, Man, Name, Id, Name, Foo,
\tBar, Baz, Bee, Boo, Bam, Moo, Maz, Man, Name,
\t(SELECT Name
\tFROM Line_Items__r)
FROM Merchandise__c
WHERE Name LIKE 'Acme%'
`.trim(),
  },
  {
    testCase: 3,
    soql: `SELECT UserId, COUNT(Id) from LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z GROUP BY UserId`,
    formattedSoql: `SELECT UserId, COUNT(Id)
FROM LoginHistory
WHERE LoginTime > 2010-09-20T22:16:30.000Z
AND LoginTime < 2010-09-21T22:16:30.000Z
GROUP BY UserId
`.trim(),
  },
  {
    testCase: 2,
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
    testCase: 2,
    soql: `SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%' AND foo = 'bar') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false)`,
    formattedSoql: `SELECT Id, Name
FROM Account
WHERE Id IN (SELECT AccountId
\tFROM Contact
\tWHERE LastName LIKE 'apple%'
\tAND foo = 'bar')
AND Id IN (SELECT AccountId
\tFROM Opportunity
\tWHERE isClosed = false)
`.trim(),
  },
];
export default testCases;
