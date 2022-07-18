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

## Documentation

**[Read the documentation on our docs site](https://paustint.github.io/soql-parser-js/)**.

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

| Property                         | Type    | Description                                                                                                                                                                                  | required | default |
| -------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------- |
| numIndent                        | number  | The number of tab characters to indent.                                                                                                                                                      | FALSE    | 1       |
| fieldMaxLineLength               | number  | The number of characters that the fields should take up before making a new line. Set this to 1 to have every field on its own line.                                                         | FALSE    | 60      |
| fieldSubqueryParensOnOwnLine     | boolean | If true, the opening and closing parentheses will be on their own line for subqueries.                                                                                                       | FALSE    | TRUE    |
| newLineAfterKeywords             | boolean | Adds a new line and indent after all keywords (such as SELECT, FROM, WHERE, ORDER BY, etc..) Setting this to true will add new lines in other places as well, such as complex WHERE clauses. | FALSE    | FALSE   |
| ~~whereClauseOperatorsIndented~~ | boolean | **Deprecated** If true, indents the where clause operators.                                                                                                                                  | FALSE    | FALSE   |
| logging                          | boolean | Print out logging statements to the console about the format operation.                                                                                                                      | FALSE    | FALSE   |

## Contributing

All contributions are welcome on the project. Please read the [contribution guidelines](https://github.com/paustint/soql-parser-js/blob/master/CONTRIBUTING.md).
