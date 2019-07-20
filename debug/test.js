var soqlParserJs = require('./lib');

const query = `SELECT Id, Name
FROM Account
WHERE (((Name = '1'
OR Name = '2')
AND Name = '3'))
AND (((Description = '123')
OR (Id = '1'
AND Id = '2')))
AND Id = '1'`;
// const query = `
// SELECT Id, Name, FORMAT(Amount),
//   (SELECT Quantity, ListPrice, PricebookEntry.UnitPrice, PricebookEntry.Name FROM OpportunityLineItems)
// FROM Opportunity
// WHERE CreatedDate > LAST_N_YEARS:1
// AND StageName = 'Closed Won'
// LIMIT 150
// `;
// SELECT Id FROM Account WHERE (Id IN ('1', '2', '3') OR (NOT Id = '2') OR (Name LIKE '%FOO%' OR (Name LIKE '%ARM%' AND FOO = 'bar')))
// SELECT Id FROM Account WHERE dateField != '2018-10-03' AND dateField < LAST_N_DAYS:5 AND dateField < LAST_WEEK AND isDeleted = false AND someOTherField = 'someVal'
// SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Account.Name, (SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Contact.LastName FROM Account.Contacts), baz, (SELECT Id FROM account WHERE Boo.baz = 'bar'), bax, bar FROM Account
// SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue, BillingAddress, BillingCity, BillingCountry, BillingGeocodeAccuracy, ShippingStreet, Sic, SicDesc, Site, SystemModstamp, TickerSymbol, Type, Website, (SELECT Id, Name, AccountId, Amount, CampaignId, CloseDate, CreatedById, Type FROM Opportunities), (SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue, BillingAddress, Website FROM ChildAccounts) FROM Account WHERE Name LIKE 'a%' OR Name LIKE 'b%' OR Name LIKE 'c%'
const parsedQuery = soqlParserJs.parseQuery(query, { logging: true });
console.log(JSON.stringify(parsedQuery, null, 2));

const composedQuery = soqlParserJs.composeQuery(parsedQuery, {
  logging: true,
  format: true,
  formatOptions: { fieldMaxLineLen: 20, fieldSubqueryParensOnOwnLine: true, whereClauseOperatorsIndented: true },
});
console.log(composedQuery);
// soqlParserJs.formatQuery(parsedQuery);
// const formattedQuery1 = soqlParserJs.formatQuery(query);
// const formattedQuery3 = soqlParserJs.formatQuery(query, {
//   fieldMaxLineLen: 20,
//   fieldSubqueryParensOnOwnLine: false,
//   whereClauseOperatorsIndented: true,
// });
// const formattedQuery2 = soqlParserJs.formatQuery(query, {
//   fieldSubqueryParensOnOwnLine: true,
//   whereClauseOperatorsIndented: true,
// });
// // console.log(formattedQuery1);
// // console.log(formattedQuery3);
// console.log(formattedQuery2);

// SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Closed Lost')
// SELECT Id FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE IsClosed = false)
// SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false)

// const query = `
// SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false)
// `;

// const isValid = soqlParserJs.isQueryValid(query, true);
// console.log('isValid', isValid);

// const parsedQuery = soqlParserJs.parseQuery(query, { logging: true });
// const queryObj = {
//   fields: [
//     {
//       type: 'Field',
//       field: 'Id',
//     },
//     {
//       type: 'FieldRelationship',
//       field: 'Id',
//       relationships: ['Account', 'LastModifiedBy'],
//     },
//     {
//       type: 'FieldRelationship',
//       field: 'Name',
//       relationships: ['Account', 'LastModifiedBy'],
//     },
//   ],
//   sObject: 'Contact',
// };
// const fields = soqlParserJs.getFlattenedFields(queryObj);
// console.log('fields', fields);

// const oppLineItemsSubquery = {
//   fields: [
//     soqlParserJs.getComposedField('Quantity'),
//     soqlParserJs.getComposedField('ListPrice'),
//     soqlParserJs.getComposedField({
//       field: 'UnitPrice',
//       relationships: ['PricebookEntry'],
//     }),
//     soqlParserJs.getComposedField({
//       field: 'Name',
//       relationships: ['PricebookEntry'],
//     }),
//   ],
//   relationshipName: 'OpportunityLineItems',
// };

// const soqlQuery = {
//   fields: [
//     soqlParserJs.getComposedField('Id'),
//     soqlParserJs.getComposedField('Name'),
//     soqlParserJs.getComposedField({
//       fn: 'FORMAT',
//       parameters: 'Amount',
//       alias: 'MyFormattedAmount',
//     }),
//     soqlParserJs.getComposedField({ subquery: oppLineItemsSubquery }),
//   ],
//   sObject: 'Opportunity',
//   where: {
//     left: {
//       field: 'CreatedDate',
//       operator: '>',
//       value: 'LAST_N_YEARS:1',
//     },
//     operator: 'AND',
//     right: {
//       left: {
//         field: 'StageName',
//         operator: '=',
//         value: 'Closed Won',
//         // literalType is optional, but if set to STRING and our value is not already wrapped in "'", they will be added
//         // All other literalType values are ignored in composing a query
//         literalType: 'STRING',
//       },
//     },
//   },
//   limit: 150,
// };

// const composedQuery = soqlParserJs.composeQuery(soqlQuery, { format: true });

// console.log(composedQuery);
