var soqlParserJs = require('../dist');

const query = `
SELECT Title FROM FAQ__kav WHERE PublishStatus='online' and Language = 'en_US' and KnowledgeArticleVersion = 'ka230000000PCiy' UPDATE VIEWSTAT
`;

const parsedQuery = soqlParserJs.parseQuery(query, { logging: true });

console.log(JSON.stringify(parsedQuery, null, 2));

// SELECT amount, FORMAT(amount) Amt, convertCurrency(amount) editDate, FORMAT(convertCurrency(amount)) convertedCurrency FROM Opportunity where id = '12345'
// SELECT FORMAT(MIN(closedate)) Amt FROM opportunity
