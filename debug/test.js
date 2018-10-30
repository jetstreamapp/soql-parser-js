var soqlParserJs = require('./lib');

const query = `
SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue, BillingAddress, BillingCity, BillingCountry, BillingGeocodeAccuracy, ShippingStreet, Sic, SicDesc, Site, SystemModstamp, TickerSymbol, Type, Website, (SELECT Id, Name, AccountId, Amount, CampaignId, CloseDate, CreatedById, Type FROM Opportunities), (SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue, BillingAddress, Website FROM ChildAccounts) FROM Account WHERE Name LIKE 'a%' OR Name LIKE 'b%' OR Name LIKE 'c%'
`;
// SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Account.Name, (SELECT Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Id, Name, Foo, Bar, Baz, Bax, aaa, bbb, ccc, ddd, Contact.LastName FROM Account.Contacts), baz, (SELECT Id FROM account WHERE Boo.baz = 'bar'), bax, bar FROM Account
const parsedQuery = soqlParserJs.parseQuery(query, { logging: true });
console.log(JSON.stringify(parsedQuery, null, 2));

// const composedQuery = soqlParserJs.composeQuery(parsedQuery, {
//   logging: true,
//   format: true,
//   formatOptions: { fieldMaxLineLen: 20, fieldSubqueryParensOnOwnLine: true, whereClauseOperatorsIndented: true },
// });
// console.log(composedQuery);
// soqlParserJs.formatQuery(parsedQuery);
const formattedQuery1 = soqlParserJs.formatQuery(query);
const formattedQuery3 = soqlParserJs.formatQuery(query, {
  fieldMaxLineLen: 20,
  fieldSubqueryParensOnOwnLine: false,
  whereClauseOperatorsIndented: true,
});
const formattedQuery2 = soqlParserJs.formatQuery(query, {
  fieldSubqueryParensOnOwnLine: true,
  whereClauseOperatorsIndented: true,
});
console.log(formattedQuery1);
console.log(formattedQuery3);
console.log(formattedQuery2);

// SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Closed Lost')
// SELECT Id FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE IsClosed = false)
// SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false)

// const query = `
// SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false)
// `;

// const isValid = soqlParserJs.isQueryValid(query, true);
// console.log('isValid', isValid);

// const parsedQuery = soqlParserJs.parseQuery(query, { logging: true });
