<img src="./assets/soql-parser-js-logo.svg">

[![build](https://api.travis-ci.com/paustint/soql-parser-js.png?branch=master)](https://travis-ci.com/paustint/soql-parser-js)
[![npm version](https://badge.fury.io/js/soql-parser-js.svg)](https://badge.fury.io/js/soql-parser-js)
[![dependencies](https://david-dm.org/paustint/soql-parser-js.svg)](https://david-dm.org/paustint/soql-parser-js)

## Description

**This library allows parsing and composing SOQL queries from Salesforce using JavaScript or Typescript.**

**Available Features:**

1. Parse SOQL queries into a common `Query` data structure.
2. Deterministically compose a `Query` data structure back into a SOQL query string.
3. Validate a query to check if the syntax is valid.
   1. _Even if a query is returned as valid, it might still be invalid based on your Salesforce configuration_

Migrating from version 1 to version 2? [Check out the changelog](CHANGELOG.md#200) for a full list of changes.

Migrating from version 2 to version 3? [Check out the changelog](CHANGELOG.md#300) for a full list of changes.

Want to try it out? [Check out the demo](https://paustint.github.io/soql-parser-js/).

## Compatibility

**Node**: version 11 or higher, or a polyfill for [Array.flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)  
**Browser**: Tested in all modern browsers, may not work with older browsers.

The **commander** dependency is only required for the cli, the other two dependencies **chevrotain** and **lodash.get** are bundled with the non-cli code.

## Quick Start

```javascript
import { parseQuery, composeQuery, isQueryValid } from 'soql-parser-js';

const query = parseQuery(`SELECT Id FROM Account WHERE Id = 'FOO'`);
console.log('query', query);

const soql = composeQuery(query);
console.log('soql', soql); // SELECT Id FROM Account WHERE Id = 'FOO'

isQueryValid('SELECT Id, Foo FROM Baz'); // true
isQueryValid('SELECT Id Foo FROM Baz'); // false
```

## Available Features

| Function     | Description                                            | Arguments                                  |
| ------------ | ------------------------------------------------------ | ------------------------------------------ |
| parseQuery   | Parse a SOQL query string into a Query data structure. | soql: Query<br> config?: ParseQueryConfig  |
| isQueryValid | Returns true if the query was able to be parsed.       | soql: Query<br> config?: ParseQueryConfig  |
| composeQuery | Turn a Query object back into a SOQL statement.        | soql: Query<br> config?: SoqlComposeConfig |
| formatQuery  | Format a SOQL query string.                            | soql: Query<br> config?: FormatOptions     |

## Utility Functions

**General Utility**

Many of hte utility functions are provided to easily determine the shape of specific data since there are many variants. If you are using Typescript in strict mode, you can use these to narrow your types.

| Function                                | Description                                                                                                                                                                                                             | Arguments                                                                   |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| hasAlias                                | Returns `true` if the field passed in has the `alias` property.                                                                                                                                                         | input: `string \| ComposeFieldInput`                                        |
| getField                                | Convenience method to construct fields in the correct format when using `composeQuery()`. Look in the data models section below for the structure of `ComposeFieldInput`.                                               | input: `string \| ComposeFieldInput`                                        |
| getFlattenedFields                      | Flatten a Salesforce record based on the parsed SOQL Query. this is useful if you have relationships in your query and want to show the results in a table, using `.` dot notation for the relationship field headings. | soql: `Query \| Subquery \| FieldSubquery`<br> config?: `SoqlComposeConfig` |
| isSubquery                              | Returns `true` if the data passed in is a subquery.                                                                                                                                                                     | query: `Query \| Subquery`                                                  |
| isFieldSubquery                         | Returns `true` if the data passed in is a FieldSubquery.                                                                                                                                                                | value: `any`                                                                |
| isWhereClauseWithRightCondition         | Returns `true` if the value passed in is a `WhereClause` with an `operator` and `right` property                                                                                                                        | value: `WhereClause`                                                        |
| isHavingClauseWithRightCondition        | Returns `true` if the value passed in is a `HavingClause` with an `operator` and `right` property                                                                                                                       | value: `HavingClause`                                                       |
| isWhereOrHavingClauseWithRightCondition | Returns `true` if the value passed in is a `WhereClause` or `HavingClause` with an `operator` and `right` property                                                                                                      | value: `WhereClause \| HavingClause`                                        |
| isValueCondition                        | Returns `true` if the value passed in has `field`, `operator` and `value` properties                                                                                                                                    | value: `Condition`                                                          |
| isValueWithDateLiteralCondition         | Returns `true` if the value passed in has `field`, `operator` and `value` properties and has a `literalType` property that is `DATE_LITERAL` of `['DATE_LITERAL',...]`                                                  | value: `Condition`                                                          |
| isValueWithDateNLiteralCondition        | Returns `true` if the value passed in has `field`, `operator`, `value` and `dateLiteralVariable` properties                                                                                                             | value: `Condition`                                                          |
| isValueFunctionCondition                | Returns `true` if the value passed in has `fn`, `operator` and `value` properties                                                                                                                                       | value: `Condition`                                                          |
| isNegationCondition                     | Returns `true` if the value passed in has a `openParen` property and does not have `fn`, `field`, `operator`, `value`, and `closeParen` properties                                                                      | value: `Condition`                                                          |
| isValueQueryCondition                   | Returns `true` if the value passed in has `field`, `operator` and `valueQuery` properties and does not have a `value` property                                                                                          | value: `Condition \| ValueQueryCondition`                                   |
| isOrderByField                          | Returns `true` if the value passed in has `field` property                                                                                                                                                              | value: `OrderByClause`                                                      |
| isOrderByFn                             | Returns `true` if the value passed in has `fn` property                                                                                                                                                                 | value: `OrderByClause`                                                      |
| isGroupByField                          | Returns `true` if the value passed in has `field` property                                                                                                                                                              | value: `GroupByClause`                                                      |
| isGroupByFn                             | Returns `true` if the value passed in has `fn` property                                                                                                                                                                 | value: `GroupByClause`                                                      |

**ParseQueryConfig**

| Property               | Type    | Description                                                                                                                                                                                                                                   | required | default |
| ---------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| allowApexBindVariables | boolean | Determines if apex variables are allowed in parsed query. Example: `WHERE Id IN :accountIds`. Only simple Apex is supported. Function calls are not supported. (e.x. `accountMap.keyset()` is not supported)                                  | FALSE    | FALSE   |
| allowPartialQuery      | boolean | If provided, you can provide an incomplete soql query. This is useful if you need to parse WHERE clauses, for example. Subqueries are required to be valid.                                                                                   | FALSE    | FALSE   |
| ignoreParseErrors      | boolean | If set to true, then queries with partially invalid syntax will still be parsed, but any clauses with invalid parts will be omitted. The SELECT clause and FROM clause must always be valid, but all other clauses can contain invalid parts. | FALSE    | FALSE   |
| logErrors              | boolean | If true, parsing and lexing errors will be logged to the console.                                                                                                                                                                             | FALSE    | FALSE   |

**SoqlComposeConfig**

| Property      | Type          | Description                                                                                                                                                                                                              | required | default |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- | ------- |
| format        | boolean       | Apply formatting the the composed query. This will result in a multi-line soql statement.                                                                                                                                | FALSE    | TRUE    |
| formatOptions | FormatOptions | Options to apply to the formatter.                                                                                                                                                                                       | FALSE    |         |
| autoCompose   | boolean       | If you need to compose just part of a query, you can create your own instance of the Compose class and set this to false, then call any methods that you need to just for what you would like to turn into a SOQL query. | FALSE    | TRUE    |
| logging       | boolean       | Print out logging statements to the console about the format operation.                                                                                                                                                  | FALSE    | FALSE   |

**FormatOptions**

| Property                         | Type    | Description                                                                                                                                                                                 | required | default |
| -------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| numIndent                        | number  | The number of tab characters to indent.                                                                                                                                                     | FALSE    | 1       |
| fieldMaxLineLength               | number  | The number of characters that the fields should take up before making a new line. Set this to 1 to have every field on its own line.                                                        | FALSE    | 60      |
| fieldSubqueryParensOnOwnLine     | boolean | If true, the opening and closing parentheses will be on their own line for subqueries.                                                                                                      | FALSE    | TRUE    |
| newLineAfterKeywords             | boolean | Adds a new line and indent after all keywords (such as SELECT, FROM, WHERE, ORDER BY, etc..) Setting this to true will add new lines in other places as well, such as complex WHERE clauses | FALSE    | FALSE   |
| ~~whereClauseOperatorsIndented~~ | boolean | **Deprecated** If true, indents the where clause operators.                                                                                                                                 | FALSE    | FALSE   |
| logging                          | boolean | Print out logging statements to the console about the format operation.                                                                                                                     | FALSE    | FALSE   |

## Examples

### Parsing Queries

Parsing a SOQL query can be completed by calling `parseQuery(soqlQueryString)`. A `Query` data structure will be returned.

```typescript
import { parseQuery } from 'soql-parser-js';

const soql = `
  SELECT UserId, COUNT(Id)
  FROM LoginHistory
  WHERE LoginTime > 2010-09-20T22:16:30.000Z
  AND LoginTime < 2010-09-21T22:16:30.000Z
  GROUP BY UserId
`;

console.log(JSON.stringify(soqlQuery, null, 2));
```

<details>
  <summary><b>Results (click to show)</b></summary>

```json
{
  "fields": [
    {
      "type": "Field",
      "field": "UserId"
    },
    {
      "type": "FieldFunctionExpression",
      "functionName": "COUNT",
      "parameters": ["Id"],
      "isAggregateFn": true,
      "rawValue": "COUNT(Id)"
    }
  ],
  "sObject": "LoginHistory",
  "where": {
    "left": {
      "field": "LoginTime",
      "operator": ">",
      "value": "2010-09-20T22:16:30.000Z",
      "literalType": "DATETIME"
    },
    "operator": "AND",
    "right": {
      "left": {
        "field": "LoginTime",
        "operator": "<",
        "value": "2010-09-21T22:16:30.000Z",
        "literalType": "DATETIME"
      }
    }
  },
  "groupBy": {
    "field": "UserId"
  }
}
```

</details>

### Parsing a partial query

Added support for `allowPartialQuery` in version `4.4.0`

```typescript
import { parseQuery } from 'soql-parser-js';

const soql = `
  WHERE LoginTime > 2010-09-20T22:16:30.000Z
  AND LoginTime < 2010-09-21T22:16:30.000Z
  GROUP BY UserId
`;

const soqlQuery = parseQuery(soql, { allowPartialQuery: true });

console.log(JSON.stringify(soqlQuery, null, 2));
```

<details>
  <summary><b>Results (click to show)</b></summary>

```json
{
  "where": {
    "left": {
      "field": "LoginTime",
      "operator": ">",
      "value": "2010-09-20T22:16:30.000Z",
      "literalType": "DATETIME"
    },
    "operator": "AND",
    "right": {
      "left": {
        "field": "LoginTime",
        "operator": "<",
        "value": "2010-09-21T22:16:30.000Z",
        "literalType": "DATETIME"
      }
    }
  },
  "groupBy": {
    "field": "UserId"
  }
}
```

</details>

### Validating Queries

```typescript
import { isQueryValid } from 'soql-parser-js';

const invalidSoql = `SELECT UserId, COUNT(Id) Account`;
const validSoql = `SELECT UserId, COUNT(Id) Account`;

console.log(isQueryValid(soql));
console.log(isQueryValid(soql));
```

### Composing Queries

Build a `Query` data structure to have it converted back into a SOQL query.

Composing a query will turn a Query object back to a SOQL query string. The exact same data structure returned from `parseQuery()` can be used,
but depending on your use-case, you may need to build your own data structure to compose a query.
These examples show building your own Query object with the minimum required fields.

Some utility methods have been provided to make it easier to build the field data structures.

**Note:** Some operators may be converted to uppercase (e.x. NOT, AND)

**Note:** There are a number of fields populated on the Query object when `parseQuery()` is called that are not required to compose a query. Look at the examples below and the comments in the data model for more information.

```typescript
import { composeQuery, getField, Query } from 'soql-parser-js';

// Build a subquery
const oppLineItemsSubquery = {
  fields: [
    getField('Quantity'),
    getField('ListPrice'),
    getField({
      field: 'UnitPrice',
      relationships: ['PricebookEntry'],
    }),
    getField({
      field: 'Name',
      relationships: ['PricebookEntry'],
    }),
  ],
  relationshipName: 'OpportunityLineItems',
};

// build the main query and add the subquery as a field
const soqlQuery: Query = {
  fields: [
    getField('Id'),
    getField('Name'),
    getField({
      functionName: 'FORMAT',
      parameters: 'Amount',
      alias: 'MyFormattedAmount',
    }),
    getField({ subquery: oppLineItemsSubquery }),
  ],
  sObject: 'Opportunity',
  where: {
    left: {
      field: 'CreatedDate',
      operator: '>',
      value: 'LAST_N_YEARS:1',
    },
    operator: 'AND',
    right: {
      left: {
        field: 'StageName',
        operator: '=',
        value: 'Closed Won',
        // literalType is optional, but if set to STRING and our value is not already wrapped in "'", they will be added
        // All other literalType values are ignored when composing a query
        literalType: 'STRING',
      },
    },
  },
  limit: 150,
};

const composedQuery = composeQuery(soqlQuery, { format: true });

console.log(composedQuery);
```

**Results**

```sql
SELECT Id, Name, FORMAT(Amount) MyFormattedAmount,
  (
    SELECT Quantity, ListPrice, PricebookEntry.UnitPrice,
      PricebookEntry.Name
    FROM OpportunityLineItems
  )
FROM Opportunity
WHERE CreatedDate > LAST_N_YEARS:1
AND StageName = 'Closed Won'
LIMIT 150
```

### Composing a partial query

Starting in version `4.4`, compose will not fail if there are missing `SELECT` and `FROM` clauses in your query.

Partial compose support it supported without any additional steps.

```typescript
import { Compose, parseQuery } from 'soql-parser-js';

const soql = `WHERE Name LIKE 'A%' AND MailingCity = 'California`;
const parsedQuery = parseQuery(soql, { allowPartialQuery: true });

// Results of Parsed Query:
/**
{
  where: {
    left: { field: 'Name', operator: 'LIKE', value: "'A%'", literalType: 'STRING' },
    operator: 'AND',
    right: { left: { field: 'MailingCity', operator: '=', value: "'California'", literalType: 'STRING' } },
  },
}
*/

const composedQuery = composeQuery(soqlQuery, { format: true });

console.log(composedQuery);
```

**Results**

```sql
WHERE Name LIKE 'A%' AND MailingCity = 'California
```

<details>
  <summary><b>See the alternate way to compose partial queries by calling the Compose class directly</b></summary>

If you need to compose just a part of a query instead of the entire query, you can create an instance of the Compose class directly.

For example, if you just need the `WHERE` clause from a query as a string, you can do the following:

```typescript
import { Compose, parseQuery } from 'soql-parser-js';

const soql = `SELECT Id FROM Account WHERE Name = 'Foo'`;
const parsedQuery = parseQuery(soql);

// Results of Parsed Query:
  // const parsedQuery = {
  //   fields: [
  //     {
  //       type: 'Field',
  //       field: 'Id',
  //     },
  //   ],
  //   sObject: 'Account',
  //   where: {
  //     left: {
  //       field: 'Name',
  //       operator: '=',
  //       value: "'Foo'",
  //       literalType: 'STRING',
  //     },
  //   },
  // };

  // Create a new instance of the compose class and set the autoCompose to false to avoid composing the entire query
  const composer = new Compose(parsedQuery, { autoCompose: false });


  const whereClause = composer.parseWhereOrHavingClause(parsedQuery.where);

  console.log(whereClause);
}
```

#### Available methods on the `Compose` class

These are used internally, but are public and available for use.

```typescript
parseQuery(query: Query | Subquery): string;
parseFields(fields: FieldType[]): { text: string; typeOfClause?: string[] }[];
parseTypeOfField(typeOfField: FieldTypeOf): string[];
parseWhereOrHavingClause(whereOrHaving: WhereClause | HavingClause, tabOffset = 0, priorConditionIsNegation = false): string;
parseGroupByClause(groupBy: GroupByClause | GroupByClause[]): string;
parseOrderBy(orderBy: OrderByClause | OrderByClause[]): string;
parseWithDataCategory(withDataCategory: WithDataCategoryClause): string;
```

</details>

## Format Query

This function is provided as a convenience and just calls parse and compose.
[Check out the demo](https://paustint.github.io/soql-parser-js/) to see the outcome of the various format options.

```typescript
import { formatQuery } from 'soql-parser-js';

const query = `SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue, BillingAddress, BillingCity, BillingCountry, BillingGeocodeAccuracy, ShippingStreet, Sic, SicDesc, Site, SystemModstamp, TickerSymbol, Type, Website, (SELECT Id, Name, AccountId, Amount, CampaignId, CloseDate, CreatedById, Type FROM Opportunities), (SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue, BillingAddress, Website FROM ChildAccounts) FROM Account WHERE Name LIKE 'a%' OR Name LIKE 'b%' OR Name LIKE 'c%'`;

const formattedQuery1 = formatQuery(query);
const formattedQuery2 = formatQuery(query, {
  fieldMaxLineLength: 20,
  fieldSubqueryParensOnOwnLine: false,
  whereClauseOperatorsIndented: true,
});
const formattedQuery3 = formatQuery(query, { fieldSubqueryParensOnOwnLine: true, whereClauseOperatorsIndented: true });
```

```sql
-- formattedQuery1
SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue,
	BillingAddress, BillingCity, BillingCountry, BillingGeocodeAccuracy,
	ShippingStreet, Sic, SicDesc, Site, SystemModstamp, TickerSymbol, Type,
	Website,
	(
		SELECT Id, Name, AccountId, Amount, CampaignId, CloseDate,
			CreatedById, Type
		FROM Opportunities
	),
	(
		SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue,
			BillingAddress, Website
		FROM ChildAccounts
	)
FROM Account
WHERE Name LIKE 'a%'
OR Name LIKE 'b%'
OR Name LIKE 'c%'

-- formattedQuery2
SELECT Id, Name,
	AccountNumber, AccountSource,
	AnnualRevenue, BillingAddress,
	BillingCity, BillingCountry,
	BillingGeocodeAccuracy, ShippingStreet,
	Sic, SicDesc, Site,
	SystemModstamp, TickerSymbol, Type,
	Website,
	(SELECT Id, Name,
		AccountId, Amount, CampaignId,
		CloseDate, CreatedById, Type
	FROM Opportunities),
	(SELECT Id, Name,
		AccountNumber, AccountSource,
		AnnualRevenue, BillingAddress,
		Website
	FROM ChildAccounts)
FROM Account
WHERE Name LIKE 'a%'
	OR Name LIKE 'b%'
	OR Name LIKE 'c%'


-- formattedQuery3
SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue,
	BillingAddress, BillingCity, BillingCountry, BillingGeocodeAccuracy,
	ShippingStreet, Sic, SicDesc, Site, SystemModstamp, TickerSymbol, Type,
	Website,
	(
		SELECT Id, Name, AccountId, Amount, CampaignId, CloseDate,
			CreatedById, Type
		FROM Opportunities
	),
	(
		SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue,
			BillingAddress, Website
		FROM ChildAccounts
	)
FROM Account
WHERE Name LIKE 'a%'
	OR Name LIKE 'b%'
	OR Name LIKE 'c%'
```

## CLI

Install globally or use `npx` to interact with the cli.

### Available Commands

- `soql-parser-js --help` (or using `npx`: `npx soql-parser-js --help`)
- `soql-parser-js parse --help`
- `soql-parser-js compose --help`
- `soql-parser-js format --help`

### Examples

#### Parse

`npx soql-parser-js parse "SELECT Id FROM Account"`

```bash
{"fields":[{"type":"Field","field":"Id"}],"sObject":"Account"}
```

#### Compose

`npx soql-parser-js compose "{\"fields\":[{\"type\":\"Field\",\"field\":\"Id\"}],\"sObject\":\"Account\"}"`

```bash
SELECT Id FROM Account
```

`npx soql-parser-js compose "{\"fields\":[{\"type\":\"Field\",\"field\":\"Id\"}],\"sObject\":\"Account\"}" --json` or -j

```json
{ "query": "SELECT Id FROM Account" }
```

#### Format

`npx soql-parser-js format "SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 1"`

```bash
SELECT Name, COUNT(Id)
FROM Account
GROUP BY Name
HAVING COUNT(Id) > 1
```

`npx soql-parser-js format "SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 1 -j`

```json
{ "query": "SELECT Name, COUNT(Id)\nFROM Account\nGROUP BY Name\nHAVING COUNT(Id) > 1" }
```

#### Is Valid

`npx soql-parser-js valid "SELECT Id FROM Account"`

```bash
true
```

`npx soql-parser-js valid "SELECT Id invalid FROM Account"`

ℹ️ this returns an exit code of 1

```bash
false
```

`npx soql-parser-js valid "SELECT Id FROM Account" -j`

```json
{ "isValid": true }
```

`npx soql-parser-js valid "SELECT Id invalid invalid FROM Account" -j`

ℹ️ this returns an exit code of 0

```json
{ "isValid": false }
```

### List of options

`soql-parser-js --help`

```bash
Usage: soql-parser-js [options] [command]

Options:
  -h, --help                 output usage information

Commands:
  parse [options] <sql>
  compose [options] <query>
  format [options] <sql>
  valid <sql>
```

`soql-parser-js parse --help`

```bash
Usage: parse [options] <sql>

Options:
  -a, --allow-apex     allow apex bind variables
  -p, --allow-partial  allow partial queries
  -i, --ignore-errors  ignore parse errors, return as much of query as possible
  -h, --help           output usage information
```

`soql-parser-js compose --help`

```bash
Usage: compose [options] <query>

Options:
  -f, --format                   format output
  -i --indent <chars>            number of tab characters to indent (default: 1)
  -m --line-length <chars>       max number of characters per lins (default: 60)
  -s --subquery-parens-new-line  subquery parens on own line
  -k --keywords-new-line         new line after keywords
  -j, --json                     output as JSON
  -h, --help                     output usage information
```

`soql-parser-js format --help`

```bash
Usage: format [options] <sql>

Options:
  -a, --allow-apex     allow apex bind variables
  -p, --allow-partial  allow partial queries
  -i --indent <chars>            number of tab characters to indent (default: 1)
  -m --line-length <chars>       max number of characters per lins (default: 60)
  -s --subquery-parens-new-line  subquery parens on own line
  -k --keywords-new-line         new line after keywords
  -j, --json                     output as JSON
  -h, --help                     output usage information
```

`soql-parser-js valid --help`

```bash
Usage: valid [options] <sql>

Options:
  -a, --allow-apex     allow apex bind variables
  -p, --allow-partial  allow partial queries
  -j, --json  output as JSON
  -h, --help  output usage information
```

## Data Models

### Query

```typescript
export type LogicalOperator = 'AND' | 'OR' | 'NOT';
export type Operator = '=' | '!=' | '<=' | '>=' | '>' | '<' | 'LIKE' | 'IN' | 'NOT IN' | 'INCLUDES' | 'EXCLUDES';
export type FieldTypeOfConditionType = 'WHEN' | 'ELSE';
export type GroupSelector = 'ABOVE' | 'AT' | 'BELOW' | 'ABOVE_OR_BELOW';
export type ForClause = 'VIEW' | 'UPDATE' | 'REFERENCE';
export type UpdateClause = 'TRACKING' | 'VIEWSTAT';
export type LiteralType =
  | 'STRING'
  | 'INTEGER'
  | 'DECIMAL'
  | 'INTEGER_WITH_CURRENCY_PREFIX'
  | 'DECIMAL_WITH_CURRENCY_PREFIX'
  | 'BOOLEAN'
  | 'NULL'
  | 'DATETIME'
  | 'DATE'
  | 'DATE_LITERAL'
  | 'DATE_N_LITERAL'
  | 'APEX_BIND_VARIABLE';
export type FieldType =
  | Field
  | FieldWithAlias
  | FieldFunctionExpression
  | FieldRelationship
  | FieldRelationshipWithAlias
  | FieldSubquery
  | FieldTypeOf;
export type OrderByCriterion = 'ASC' | 'DESC';
export type NullsOrder = 'FIRST' | 'LAST';
export type GroupByType = 'CUBE' | 'ROLLUP';
export type DateLiteral =
  | 'YESTERDAY'
  | 'TODAY'
  | 'TOMORROW'
  | 'LAST_WEEK'
  | 'THIS_WEEK'
  | 'NEXT_WEEK'
  | 'LAST_MONTH'
  | 'THIS_MONTH'
  | 'NEXT_MONTH'
  | 'LAST_90_DAYS'
  | 'NEXT_90_DAYS'
  | 'THIS_QUARTER'
  | 'LAST_QUARTER'
  | 'NEXT_QUARTER'
  | 'THIS_YEAR'
  | 'LAST_YEAR'
  | 'NEXT_YEAR'
  | 'THIS_FISCAL_QUARTER'
  | 'LAST_FISCAL_QUARTER'
  | 'NEXT_FISCAL_QUARTER'
  | 'THIS_FISCAL_YEAR'
  | 'LAST_FISCAL_YEAR'
  | 'NEXT_FISCAL_YEAR';

export type DateNLiteral =
  | 'YESTERDAY'
  | 'NEXT_N_DAYS'
  | 'LAST_N_DAYS'
  | 'N_DAYS_AGO'
  | 'NEXT_N_WEEKS'
  | 'LAST_N_WEEKS'
  | 'N_WEEKS_AGO'
  | 'NEXT_N_MONTHS'
  | 'LAST_N_MONTHS'
  | 'N_MONTHS_AGO'
  | 'NEXT_N_QUARTERS'
  | 'LAST_N_QUARTERS'
  | 'N_QUARTERS_AGO'
  | 'NEXT_N_YEARS'
  | 'LAST_N_YEARS'
  | 'N_YEARS_AGO'
  | 'NEXT_N_FISCAL_QUARTERS'
  | 'LAST_N_FISCAL_QUARTERS'
  | 'N_FISCAL_QUARTERS_AGO'
  | 'NEXT_N_FISCAL_YEARS'
  | 'LAST_N_FISCAL_YEARS'
  | 'N_FISCAL_YEARS_AGO';

export interface Field {
  type: 'Field';
  field: string;
  alias?: string;
}

export interface FieldWithAlias extends Field {
  objectPrefix: string;
  rawValue: string;
}

export interface FieldFunctionExpression {
  type: 'FieldFunctionExpression';
  functionName: string;
  parameters: (string | FieldFunctionExpression)[];
  alias?: string;
  isAggregateFn?: boolean; // not required for compose, will be populated if SOQL is parsed
  rawValue?: string; // not required for compose, will be populated if SOQL is parsed
}

export interface FieldRelationship {
  type: 'FieldRelationship';
  field: string;
  relationships: string[];
  rawValue?: string; // not required for compose, will be populated if SOQL is parsed with the raw value of the entire field
}

export interface FieldRelationshipWithAlias extends FieldRelationship {
  objectPrefix: string;
  alias: string;
}

export interface FieldSubquery {
  type: 'FieldSubquery';
  subquery: Subquery;
}

export interface FieldTypeOf {
  type: 'FieldTypeof';
  field: string;
  conditions: FieldTypeOfCondition[];
}

export interface FieldTypeOfCondition {
  type: FieldTypeOfConditionType;
  objectType?: string; // not present when ELSE
  fieldList: string[];
}

export interface QueryBase {
  fields?: FieldType[];
  sObjectAlias?: string;
  usingScope?: string;
  where?: WhereClause;
  limit?: number;
  offset?: number;
  groupBy?: GroupByClause;
  orderBy?: OrderByClause | OrderByClause[];
  withDataCategory?: WithDataCategoryClause;
  withSecurityEnforced?: boolean;
  for?: ForClause;
  update?: UpdateClause;
}

export interface Query extends QueryBase {
  sObject?: string;
}

export interface Subquery extends QueryBase {
  relationshipName: string;
  sObjectPrefix?: string[];
}

export type WhereClause = WhereClauseWithoutOperator | WhereClauseWithRightCondition;

export interface WhereClauseWithoutOperator {
  left: ConditionWithValueQuery;
}

export interface WhereClauseWithRightCondition extends WhereClauseWithoutOperator {
  operator: LogicalOperator;
  right: WhereClause;
}

export type Condition =
  | ValueCondition
  | ValueWithDateLiteralCondition
  | ValueWithDateNLiteralCondition
  | ValueFunctionCondition
  | NegationCondition;

export type ConditionWithValueQuery = Condition | ValueQueryCondition;

export interface OptionalParentheses {
  openParen?: number;
  closeParen?: number;
}

export interface ValueCondition extends OptionalParentheses {
  field: string;
  operator: Operator;
  value: string | string[];
  literalType?: LiteralType | LiteralType[];
}

export interface ValueWithDateLiteralCondition extends OptionalParentheses {
  field: string;
  operator: Operator;
  value: DateLiteral | DateLiteral[];
  literalType?: 'DATE_LITERAL' | 'DATE_LITERAL'[];
}

export interface ValueWithDateNLiteralCondition extends OptionalParentheses {
  field: string;
  operator: Operator;
  value: string | string[];
  literalType?: 'DATE_N_LITERAL' | 'DATE_N_LITERAL'[];
  dateLiteralVariable: number | number[];
}

export interface ValueQueryCondition extends OptionalParentheses {
  field: string;
  operator: Operator;
  valueQuery: Query;
}

export interface ValueFunctionCondition extends OptionalParentheses {
  fn: FunctionExp;
  operator: Operator;
  value: string | string[];
  literalType?: LiteralType | LiteralType[];
}

export interface NegationCondition {
  openParen: number;
}

export type OrderByClause = OrderByFieldClause | OrderByFnClause;

export interface OrderByOptionalFieldsClause {
  order?: OrderByCriterion;
  nulls?: NullsOrder;
}

export interface OrderByFieldClause extends OrderByOptionalFieldsClause {
  field: string;
}

export interface OrderByFnClause extends OrderByOptionalFieldsClause {
  fn: FunctionExp;
}

export type GroupByClause = GroupByFieldClause | GroupByFnClause;

export interface GroupByOptionalFieldsClause {
  having?: HavingClause;
}

export interface GroupByFieldClause extends GroupByOptionalFieldsClause {
  field: string | string[];
}

export interface GroupByFnClause extends GroupByOptionalFieldsClause {
  fn: FunctionExp;
}

export type HavingClause = HavingClauseWithoutOperator | HavingClauseWithRightCondition;

export interface HavingClauseWithoutOperator {
  left: Condition;
}

export interface HavingClauseWithRightCondition extends HavingClauseWithoutOperator {
  operator: LogicalOperator;
  right: HavingClause;
}

export interface FunctionExp {
  rawValue?: string; // only used for compose fields if useRawValueForFn=true. Should be formatted like this: Count(Id)
  functionName?: string; // only used for compose fields if useRawValueForFn=false, will be populated if SOQL is parsed
  alias?: string;
  parameters?: (string | FunctionExp)[]; // only used for compose fields if useRawValueForFn=false, will be populated if SOQL is parsed
  isAggregateFn?: boolean; // not used for compose, will be populated if SOQL is parsed
}

export interface WithDataCategoryClause {
  conditions: WithDataCategoryCondition[];
}

export interface WithDataCategoryCondition {
  groupName: string;
  selector: GroupSelector;
  parameters: string[];
}
```

## Contributing

All contributions are welcome on the project. Please read the [contribution guidelines](https://github.com/paustint/soql-parser-js/blob/master/CONTRIBUTING.md).
