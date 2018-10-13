var soqlParserJs = require('../dist');

const query = `
SELECT a.Id, a.Name,
(SELECT a2.Id FROM ChildAccounts a2),
(SELECT a1.Id FROM ChildAccounts1 a1)
FROM Account a
`;

const parsedQuery = soqlParserJs.parseQuery(query, { logging: true });

console.log(JSON.stringify(parsedQuery, null, 2));
