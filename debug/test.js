var soqlParserJs = require('../dist');

const query = `
SELECT Id, c.FirstName, c.LastName
FROM Contact c
LIMIT 1
`;

const parsedQuery = soqlParserJs.parseQuery(query, { logging: true });
console.log(JSON.stringify(parsedQuery, null, 2));

const composedQuery = soqlParserJs.composeQuery(parsedQuery, { logging: true, format: true });
console.log(composedQuery);

// SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Closed Lost')
// SELECT Id FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE IsClosed = false)
// SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false)

// const query = `
// SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false)
// `;

// const isValid = soqlParserJs.isQueryValid(query, true);
// console.log('isValid', isValid);

// const parsedQuery = soqlParserJs.parseQuery(query, { logging: true });
