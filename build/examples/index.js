"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) Austin Turner
 * The software in this package is published under the terms of MIT
 * license, a copy of which has been included with this distribution in the
 * LICENSE.txt file.
 */
/**
 * This file contains examples for running various queries and observing their outcome
 */
const SoqlParser_1 = require("../lib/SoqlParser");
exports.LOGGING = true;
exports.queries = [
    /* 0 */ `SELECT Id FROM Account WHERE (Id IN ('1', '2', '3') OR (NOT Id = '2') OR (Name LIKE '%FOO%' OR (Name LIKE '%ARM%' AND FOO = 'bar')))`,
    /* 1 */ `SELECT Id FROM Contact WHERE Name LIKE 'A%' AND MailingCity = 'California'`,
    /* 2 */ `SELECT Name FROM Account ORDER BY Name DESC NULLS FIRST`,
    /* 3 */ `SELECT Name FROM Account WHERE Industry = 'media' LIMIT 125`,
    /* 4 */ `SELECT Name FROM Account WHERE Industry = 'media' ORDER BY BillingPostalCode ASC NULLS LAST LIMIT 125`,
    /* 5 */ `SELECT COUNT() FROM Contact`,
    /* 6 */ `SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource`,
    /* 7 */ `SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 1`,
    /* 8 */ `SELECT Name, Id FROM Merchandise__c ORDER BY Name OFFSET 100`,
    /* 9 */ `SELECT Name, Id FROM Merchandise__c ORDER BY Name LIMIT 20 OFFSET 100`,
    /* 10 */ `SELECT Contact.FirstName, Contact.Account.Name FROM Contact`,
    /* 11 */ `SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'media'`,
    /* 12 */ `SELECT Name, (SELECT LastName FROM Contacts) FROM Account`,
    /* 13 */ `SELECT Account.Name, (SELECT Contact.LastName FROM Account.Contacts) FROM Account`,
    /* 14 */ `SELECT Name, (SELECT LastName FROM Contacts WHERE CreatedBy.Alias = 'x') FROM Account WHERE Industry = 'media'`,
    /* 15 */ `SELECT Id, FirstName__c, Mother_of_Child__r.FirstName__c FROM Daughter__c WHERE Mother_of_Child__r.LastName__c LIKE 'C%'`,
    /* 16 */ `SELECT Name, (SELECT Name FROM Line_Items__r) FROM Merchandise__c WHERE Name LIKE 'Acme%'`,
    /* 17 */ `SELECT Id, Owner.Name FROM Task WHERE Owner.FirstName like 'B%'`,
    /* 18 */ `SELECT Id, Who.FirstName, Who.LastName FROM Task WHERE Owner.FirstName LIKE 'B%'`,
    /* 19 */ `SELECT Id, What.Name FROM Event`,
    /* 20 */ `SELECT TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate ELSE Name, Email END FROM Event`,
    /* 21 */ `SELECT Name, (SELECT CreatedBy.Name FROM Notes) FROM Account`,
    /* 22 */ `SELECT Amount, Id, Name, (SELECT Quantity, ListPrice, PricebookEntry.UnitPrice, PricebookEntry.Name FROM OpportunityLineItems) FROM Opportunity`,
    /* 23 */ `SELECT UserId, LoginTime from LoginHistory`,
    /* 24 */ `SELECT UserId, COUNT(Id) from LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z GROUP BY UserId`,
    /* 25 */ `SELECT Id, Name, IsActive, SobjectType, DeveloperName, Description FROM RecordType`,
    /* 26 */ `SELECT CampaignId, AVG(Amount) avg FROM Opportunity GROUP BY CampaignId HAVING COUNT(Id, Name) > 1`,
    /* 27 */ `SELECT LeadSource, COUNT(Name) cnt FROM Lead GROUP BY ROLLUP(LeadSource)`,
    /* 28 */ `SELECT Status, LeadSource, COUNT(Name) cnt FROM Lead GROUP BY ROLLUP(Status, LeadSource)`,
    /* 29 */ `SELECT Type, BillingCountry, GROUPING(Type) grpType, GROUPING(BillingCountry) grpCty, COUNT(id) accts FROM Account GROUP BY CUBE(Type, BillingCountry) ORDER BY GROUPING(Type), GROUPING(Id, BillingCountry), Name DESC NULLS FIRST, Id ASC NULLS LAST`,
    /* 30 */ `SELECT c.Name, c.Account.Name FROM Contact c`,
    /* 31 */ `SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource HAVING COUNT(Name) > 100 and LeadSource > 'Phone'`,
];
function runQuery(num) {
    const query = SoqlParser_1.parseQuery(exports.queries[num], { logging: exports.LOGGING });
    console.log(JSON.stringify(query, null, 2));
}
exports.runQuery = runQuery;
function runAllQueries(num) {
    exports.queries.forEach((query, i) => runQuery(i));
}
exports.runAllQueries = runAllQueries;
runQuery(24);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZXhhbXBsZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7R0FLRztBQUNIOztHQUVHO0FBQ0gsa0RBQStDO0FBRWxDLFFBQUEsT0FBTyxHQUFHLElBQUksQ0FBQztBQUVmLFFBQUEsT0FBTyxHQUFHO0lBQ3JCLE9BQU8sQ0FBQyxzSUFBc0k7SUFDOUksT0FBTyxDQUFDLDRFQUE0RTtJQUNwRixPQUFPLENBQUMseURBQXlEO0lBQ2pFLE9BQU8sQ0FBQyw2REFBNkQ7SUFDckUsT0FBTyxDQUFDLHVHQUF1RztJQUMvRyxPQUFPLENBQUMsNkJBQTZCO0lBQ3JDLE9BQU8sQ0FBQyw4REFBOEQ7SUFDdEUsT0FBTyxDQUFDLHdFQUF3RTtJQUNoRixPQUFPLENBQUMsOERBQThEO0lBQ3RFLE9BQU8sQ0FBQyx1RUFBdUU7SUFDL0UsUUFBUSxDQUFDLDZEQUE2RDtJQUN0RSxRQUFRLENBQUMsNkVBQTZFO0lBQ3RGLFFBQVEsQ0FBQywyREFBMkQ7SUFDcEUsUUFBUSxDQUFDLG1GQUFtRjtJQUM1RixRQUFRLENBQUMsZ0hBQWdIO0lBQ3pILFFBQVEsQ0FBQywwSEFBMEg7SUFDbkksUUFBUSxDQUFDLDJGQUEyRjtJQUNwRyxRQUFRLENBQUMsaUVBQWlFO0lBQzFFLFFBQVEsQ0FBQyxrRkFBa0Y7SUFDM0YsUUFBUSxDQUFDLGlDQUFpQztJQUMxQyxRQUFRLENBQUMsdUlBQXVJO0lBQ2hKLFFBQVEsQ0FBQyw4REFBOEQ7SUFDdkUsUUFBUSxDQUFDLGlKQUFpSjtJQUMxSixRQUFRLENBQUMsNENBQTRDO0lBQ3JELFFBQVEsQ0FBQyxnSkFBZ0o7SUFDekosUUFBUSxDQUFDLG9GQUFvRjtJQUM3RixRQUFRLENBQUMsb0dBQW9HO0lBQzdHLFFBQVEsQ0FBQywwRUFBMEU7SUFDbkYsUUFBUSxDQUFDLDBGQUEwRjtJQUNuRyxRQUFRLENBQUMsd1BBQXdQO0lBQ2pRLFFBQVEsQ0FBQyw4Q0FBOEM7SUFDdkQsUUFBUSxDQUFDLGdIQUFnSDtDQUMxSCxDQUFDO0FBRUYsa0JBQXlCLEdBQVc7SUFDbEMsTUFBTSxLQUFLLEdBQUcsdUJBQVUsQ0FBQyxlQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsZUFBTyxFQUFFLENBQUMsQ0FBQztJQUU3RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFKRCw0QkFJQztBQUVELHVCQUE4QixHQUFXO0lBQ3ZDLGVBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFGRCxzQ0FFQztBQUVELFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyJ9