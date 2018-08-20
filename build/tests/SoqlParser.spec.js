"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SoqlParser_1 = require("../app/SoqlParser");
const chai_1 = require("chai");
require("mocha");
const testCases = [
    {
        query: `SELECT Id, Name, BillingCity FROM Account`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Id FROM Contact WHERE Name LIKE 'A%' AND MailingCity = 'California'`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Name FROM Account ORDER BY Name DESC NULLS LAST`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Name FROM Account WHERE Industry = 'media' LIMIT 125`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Name FROM Account WHERE Industry = 'media' ORDER BY BillingPostalCode ASC NULLS LAST LIMIT 125`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT COUNT() FROM Contact`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 1`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Name, Id FROM Merchandise__c ORDER BY Name OFFSET 100`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Name, Id FROM Merchandise__c ORDER BY Name LIMIT 20 OFFSET 100`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Contact.FirstName, Contact.Account.Name FROM Contact`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'media'`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Name, (SELECT LastName FROM Contacts) FROM Account`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Account.Name, (SELECT Contact.LastName FROM Account.Contacts) FROM Account`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Name, (SELECT LastName FROM Contacts WHERE CreatedBy.Alias = 'x') FROM Account WHERE Industry = 'media'`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Id, FirstName__c, Mother_of_Child__r.FirstName__c FROM Daughter__c WHERE Mother_of_Child__r.LastName__c LIKE 'C%'`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Name, (SELECT Name FROM Line_Items__r) FROM Merchandise__c WHERE Name LIKE ‘Acme%’`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Id, Owner.Name FROM Task WHERE Owner.FirstName like 'B%'`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Id, Who.FirstName, Who.LastName FROM Task WHERE Owner.FirstName LIKE 'B%'`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Id, What.Name FROM Event`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate ELSE Name, Email END FROM Event`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Name, (SELECT CreatedBy.Name FROM Notes) FROM Account`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Amount, Id, Name, (SELECT Quantity, ListPrice, PricebookEntry.UnitPrice, PricebookEntry.Name FROM OpportunityLineItems) FROM Opportunity`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT UserId, LoginTime from LoginHistory`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT UserId, COUNT(Id) from LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z GROUP BY UserId`,
        fields: [],
        object: 'Account',
    },
    {
        query: `SELECT Id, Name, IsActive, SobjectType, DeveloperName, Description FROM RecordType`,
        fields: [],
        object: 'Account',
    },
];
describe('Parse Query', () => {
    it('should successfully parse basic query', () => {
        const query = SoqlParser_1.parseQuery('SELECT Id, Name FROM Account');
        chai_1.expect(query.name).equals('Account');
        chai_1.expect(query.fields).lengthOf(2);
        chai_1.expect(query.fields[0].text).equals('Id');
        chai_1.expect(query.fields[1].text).equals('Name');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29xbFBhcnNlci5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Rlc3RzL1NvcWxQYXJzZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUErQztBQUMvQywrQkFBOEI7QUFDOUIsaUJBQWU7QUFFZixNQUFNLFNBQVMsR0FBRztJQUNoQjtRQUNFLEtBQUssRUFBRSwyQ0FBMkM7UUFDbEQsTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsU0FBUztLQUNsQjtJQUNEO1FBQ0UsS0FBSyxFQUFFLDRFQUE0RTtRQUNuRixNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxTQUFTO0tBQ2xCO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsd0RBQXdEO1FBQy9ELE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLFNBQVM7S0FDbEI7SUFDRDtRQUNFLEtBQUssRUFBRSw2REFBNkQ7UUFDcEUsTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsU0FBUztLQUNsQjtJQUNEO1FBQ0UsS0FBSyxFQUFFLHVHQUF1RztRQUM5RyxNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxTQUFTO0tBQ2xCO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsNkJBQTZCO1FBQ3BDLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLFNBQVM7S0FDbEI7SUFDRDtRQUNFLEtBQUssRUFBRSw4REFBOEQ7UUFDckUsTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsU0FBUztLQUNsQjtJQUNEO1FBQ0UsS0FBSyxFQUFFLHdFQUF3RTtRQUMvRSxNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxTQUFTO0tBQ2xCO0lBQ0Q7UUFDRSxLQUFLLEVBQUUsOERBQThEO1FBQ3JFLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLFNBQVM7S0FDbEI7SUFDRDtRQUNFLEtBQUssRUFBRSx1RUFBdUU7UUFDOUUsTUFBTSxFQUFFLEVB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