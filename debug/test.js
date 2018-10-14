var soqlParserJs = require('../dist');

const query = `
SELECT Account.Name, (SELECT Contact.LastName FROM Account.Contacts) FROM Account
`;

const parsedQuery = soqlParserJs.parseQuery(query, { logging: true });

console.log(JSON.stringify(parsedQuery, null, 2));
