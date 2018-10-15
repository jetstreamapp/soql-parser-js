var soqlParserJs = require('../dist');

const query = `
SELECT Company, toLabel(Status) FROM Lead WHERE toLabel(Status) = 'le Draft'
`;

const parsedQuery = soqlParserJs.parseQuery(query, { logging: true });

console.log(JSON.stringify(parsedQuery, null, 2));

// SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Closed Lost')
// SELECT Id FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE IsClosed = false)
// SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false)
