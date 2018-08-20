"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    `SELECT Id, Name, BillingCity FROM Account`,
    `SELECT Id FROM Contact WHERE Name LIKE 'A%' AND MailingCity = 'California'`,
    `SELECT Name FROM Account ORDER BY Name DESC NULLS LAST`,
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
    `SELECT Name, (SELECT Name FROM Line_Items__r) FROM Merchandise__c WHERE Name LIKE ‘Acme%’`,
    `SELECT Id, Owner.Name FROM Task WHERE Owner.FirstName like 'B%'`,
    `SELECT Id, Who.FirstName, Who.LastName FROM Task WHERE Owner.FirstName LIKE 'B%'`,
    `SELECT Id, What.Name FROM Event`,
    `SELECT TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate ELSE Name, Email END FROM Event`,
    `SELECT Name, (SELECT CreatedBy.Name FROM Notes) FROM Account`,
    `SELECT Amount, Id, Name, (SELECT Quantity, ListPrice, PricebookEntry.UnitPrice, PricebookEntry.Name FROM OpportunityLineItems) FROM Opportunity`,
    `SELECT UserId, LoginTime from LoginHistory`,
    `SELECT UserId, COUNT(Id) from LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z GROUP BY UserId`,
    `SELECT Id, Name, IsActive, SobjectType, DeveloperName, Description FROM RecordType`,
];
const soql = queries[22];
console.log('Parsing Query: ', soql);
const query = SoqlParser_1.parseQuery(soql, {
    logging: true,
});
console.log(JSON.stringify(query, null, 2));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBcUJBLDZDQUEwQztBQUUxQywrQkFBK0I7QUFDL0IsOENBQThDO0FBQzlDLG1EQUFtRDtBQUNuRCxlQUFlO0FBQ2YsV0FBVztBQUNYLHFCQUFxQjtBQUNyQiwwQkFBMEI7QUFDMUIsMkJBQTJCO0FBQzNCLHdCQUF3QjtBQUN4QixvQ0FBb0M7QUFDcEMsNEJBQTRCO0FBQzVCLGlDQUFpQztBQUNqQyxzREFBc0Q7QUFDdEQsMENBQTBDO0FBQzFDLG1DQUFtQztBQUNuQyxrREFBa0Q7QUFDbEQseUNBQXlDO0FBQ3pDLDRDQUE0QztBQUM1QyxtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDLHNEQUFzRDtBQUV0RCxtRUFBbUU7QUFFbkUsbUNBQW1DO0FBQ25DLE1BQU0sT0FBTyxHQUFHO0lBQ2QsMkNBQTJDO0lBQzNDLDRFQUE0RTtJQUM1RSx3REFBd0Q7SUFDeEQsNkRBQTZEO0lBQzdELHVHQUF1RztJQUN2Ryw2QkFBNkI7SUFDN0IsOERBQThEO0lBQzlELHdFQUF3RTtJQUN4RSw4REFBOEQ7SUFDOUQsdUVBQXVFO0lBQ3ZFLDZEQUE2RDtJQUM3RCw2RUFBNkU7SUFDN0UsMkRBQTJEO0lBQzNELG1GQUFtRjtJQUNuRixnSEFBZ0g7SUFDaEgsMEhBQTBIO0lBQzFILDJGQUEyRjtJQUMzRixpRUFBaUU7SUFDakUsa0ZBQWtGO0lBQ2xGLGlDQUFpQztJQUNqQyx1SUFBdUk7SUFDdkksOERBQThEO0lBQzlELGlKQUFpSjtJQUNqSiw0Q0FBNEM7SUFDNUMsZ0pBQWdKO0lBQ2hKLG9GQUFvRjtDQUNyRixDQUFDO0FBRUYsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRXpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDckMsTUFBTSxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxJQUFJLEVBQUU7SUFDN0IsT0FBTyxFQUFFLElBQUk7Q0FDZCxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDIn0=