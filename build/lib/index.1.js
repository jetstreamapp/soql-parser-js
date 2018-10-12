"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) Austin Turner
 * The software in this package is published under the terms of MIT
 * license, a copy of which has been included with this distribution in the
 * LICENSE.txt file.
 */
const SoqlParser_1 = require("./SoqlParser");
// const soqlString: string = `
// SELECT Id, Name, SUM(0) MySummation, SUM(),
//   (SELECT Id, FirstName, LastName FROM Contacts)
// FROM Account
// WHERE123
// (Name LIKE '%FOO%'
// AND CreatedDate > TODAY
// AND Id IN ('Id1', 'Id2')
// AND Foo IN (123, 123)
// AND LastModifiedDate > YESTERDAY)
// OR Id NOT IN ('x', 'y')`;
// // Create the lexer and parser
// let inputStream = new ANTLRInputStream(soqlString);
// let lexer = new SOQLLexer(inputStream);
// console.log('Lexing finished.');
// let tokenStream = new CommonTokenStream(lexer);
// console.log('Token stream finished.');
// let parser = new SOQLParser(tokenStream);
// console.log('Parser finished.');
// parser.removeErrorListeners();
// parser.addErrorListener(new SyntaxErrorListener());
// const soqlQueryContext: Soql_queryContext = parser.soql_query();
// const listener = new Listener();
const queries = [
    `SELECT Id FROM Account WHERE (Id IN ('1', '2', '3') OR (NOT Id = '2') OR (Name LIKE '%FOO%' OR (Name LIKE '%ARM%' AND FOO = 'bar')))`,
    `SELECT Id FROM Contact WHERE Name LIKE 'A%' AND MailingCity = 'California'`,
    `SELECT Name FROM Account ORDER BY Name DESC NULLS FIRST`,
    `SELECT Name FROM Account WHERE Industry = 'media' LIMIT 125`,
    `SELECT Name FROM Account WHERE Industry = 'media' ORDER BY BillingPostalCode ASC NULLS LAST LIMIT 125`,
    `SELECT COUNT() FROM Contact`,
    `SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource`,
    `SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 1`,
    `SELECT Name, Id FROM Merchandise__c ORDER BY Name OFFSET 100`,
    `SELECT Name, Id FROM Merchandise__c ORDER BY Name LIMIT 20 OFFSET 100`,
    `SELECT Contact.FirstName, Contact.Account.Name FROM Contact`,
    `SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'media'`,
    `SELECT Name, (SELECT LastName FROM Contacts) FROM Account`,
    `SELECT Account.Name, (SELECT Contact.LastName FROM Account.Contacts) FROM Account`,
    `SELECT Name, (SELECT LastName FROM Contacts WHERE CreatedBy.Alias = 'x') FROM Account WHERE Industry = 'media'`,
    `SELECT Id, FirstName__c, Mother_of_Child__r.FirstName__c FROM Daughter__c WHERE Mother_of_Child__r.LastName__c LIKE 'C%'`,
    `SELECT Name, (SELECT Name FROM Line_Items__r) FROM Merchandise__c WHERE Name LIKE 'Acme%'`,
    `SELECT Id, Owner.Name FROM Task WHERE Owner.FirstName like 'B%'`,
    `SELECT Id, Who.FirstName, Who.LastName FROM Task WHERE Owner.FirstName LIKE 'B%'`,
    `SELECT Id, What.Name FROM Event`,
    `SELECT TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate ELSE Name, Email END FROM Event`,
    `SELECT Name, (SELECT CreatedBy.Name FROM Notes) FROM Account`,
    `SELECT Amount, Id, Name, (SELECT Quantity, ListPrice, PricebookEntry.UnitPrice, PricebookEntry.Name FROM OpportunityLineItems) FROM Opportunity`,
    `SELECT UserId, LoginTime from LoginHistory`,
    `SELECT UserId, COUNT(Id) from LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z GROUP BY UserId`,
    `SELECT Id, Name, IsActive, SobjectType, DeveloperName, Description FROM RecordType`,
    `SELECT CampaignId, AVG(Amount) avg FROM Opportunity GROUP BY CampaignId HAVING COUNT(Id, Name) > 1`,
    `SELECT LeadSource, COUNT(Name) cnt FROM Lead GROUP BY ROLLUP(LeadSource)`,
    `SELECT Status, LeadSource, COUNT(Name) cnt FROM Lead GROUP BY ROLLUP(Status, LeadSource)`,
    `SELECT Type, BillingCountry, GROUPING(Type) grpType, GROUPING(BillingCountry) grpCty, COUNT(id) accts FROM Account GROUP BY CUBE(Type, BillingCountry) ORDER BY GROUPING(Type), GROUPING(Id, BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST`,
    `SELECT c.Name, c.Account.Name FROM Contact c`,
    `SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource HAVING COUNT(Name) > 100 and LeadSource > 'Phone'`,
];
const query = SoqlParser_1.parseQuery(queries[31], { logging: true });
console.log(JSON.stringify(query, null, 2));
// const output = [];
// queries.forEach((soql, i) => {
//   const query = parseQuery(soql, {});
//   output.push({ testCase: i + 1, soql, output: query });
// });
// console.log(JSON.stringify(output, null, 2));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvaW5kZXguMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7OztHQUtHO0FBQ0gsNkNBQTBDO0FBRTFDLCtCQUErQjtBQUMvQiw4Q0FBOEM7QUFDOUMsbURBQW1EO0FBQ25ELGVBQWU7QUFDZixXQUFXO0FBQ1gscUJBQXFCO0FBQ3JCLDBCQUEwQjtBQUMxQiwyQkFBMkI7QUFDM0Isd0JBQXdCO0FBQ3hCLG9DQUFvQztBQUNwQyw0QkFBNEI7QUFDNUIsaUNBQWlDO0FBQ2pDLHNEQUFzRDtBQUN0RCwwQ0FBMEM7QUFDMUMsbUNBQW1DO0FBQ25DLGtEQUFrRDtBQUNsRCx5Q0FBeUM7QUFDekMsNENBQTRDO0FBQzVDLG1DQUFtQztBQUNuQyxpQ0FBaUM7QUFDakMsc0RBQXNEO0FBRXRELG1FQUFtRTtBQUVuRSxtQ0FBbUM7QUFDbkMsTUFBTSxPQUFPLEdBQUc7SUFDZCxzSUFBc0k7SUFDdEksNEVBQTRFO0lBQzVFLHlEQUF5RDtJQUN6RCw2REFBNkQ7SUFDN0QsdUdBQXVHO0lBQ3ZHLDZCQUE2QjtJQUM3Qiw4REFBOEQ7SUFDOUQsd0VBQXdFO0lBQ3hFLDhEQUE4RDtJQUM5RCx1RUFBdUU7SUFDdkUsNkRBQTZEO0lBQzdELDZFQUE2RTtJQUM3RSwyREFBMkQ7SUFDM0QsbUZBQW1GO0lBQ25GLGdIQUFnSDtJQUNoSCwwSEFBMEg7SUFDMUgsMkZBQTJGO0lBQzNGLGlFQUFpRTtJQUNqRSxrRkFBa0Y7SUFDbEYsaUNBQWlDO0lBQ2pDLHVJQUF1STtJQUN2SSw4REFBOEQ7SUFDOUQsaUpBQWlKO0lBQ2pKLDRDQUE0QztJQUM1QyxnSkFBZ0o7SUFDaEosb0ZBQW9GO0lBQ3BGLG9HQUFvRztJQUNwRywwRUFBMEU7SUFDMUUsMEZBQTBGO0lBQzFGLHdQQUF3UDtJQUN4UCw4Q0FBOEM7SUFDOUMsZ0hBQWdIO0NBQ2pILENBQUM7QUFFRixNQUFNLEtBQUssR0FBRyx1QkFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFNUMscUJBQXFCO0FBQ3JCLGlDQUFpQztBQUNqQyx3Q0FBd0M7QUFDeEMsMkRBQTJEO0FBQzNELE1BQU07QUFFTixnREFBZ0QifQ==