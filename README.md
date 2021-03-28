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

This library uses [Chevrotain](https://github.com/SAP/chevrotain) to parse queries. Prior to version 2.0.0, [antlr4](https://github.com/antlr/antlr4) was used.

Migrating from version 1 to version 2? [Check out the changelog](CHANGELOG.md#200) for a full list of changes.
Migrating from version 2 to version 3? [Check out the changelog](CHANGELOG.md#300) for a full list of changes.

Want to try it out? [Check out the demo](https://paustint.github.io/soql-parser-js/).

## Compatibility

**Node**: version 11 or higher, or a polyfill for [Array.flat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)  
**Browser**: Tested in all modern browsers, may not work with older browsers.

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

Many of hte utility functions are provided to easily determine the shape of specific data since there are many variations. If you are using Typescript in strict mode, you can use these to narrow types with if statements.

| Function                                | Description                                                                                                                                                                                                             | Arguments                                                                 |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| hasAlias                                | Returns `true` if the field passed in has the `alias` property.                                                                                                                                                         | input: `string | ComposeFieldInput`                                       |
| getField                                | Convenience method to construct fields in the correct format when using `composeQuery()`. Look in the data models section below for the structure of `ComposeFieldInput`.                                               | input: `string | ComposeFieldInput`                                       |
| getFlattenedFields                      | Flatten a Salesforce record based on the parsed SOQL Query. this is useful if you have relationships in your query and want to show the results in a table, using `.` dot notation for the relationship field headings. | soql: `Query | Subquery | FieldSubquery`<br> config?: `SoqlComposeConfig` |
| isSubquery                              | Returns `true` if the data passed in is a subquery.                                                                                                                                                                     | query: `Query | Subquery`                                                 |
| isFieldSubquery                         | Returns `true` if the data passed in is a FieldSubquery.                                                                                                                                                                | value: `any`                                                              |
| isWhereClauseWithRightCondition         | Returns `true` if the value passed in is a `WhereClause` with an `operator` and `right` property                                                                                                                        | value: `WhereClause`                                                      |
| isHavingClauseWithRightCondition        | Returns `true` if the value passed in is a `HavingClause` with an `operator` and `right` property                                                                                                                       | value: `HavingClause`                                                     |
| isWhereOrHavingClauseWithRightCondition | Returns `true` if the value passed in is a `WhereClause` or `HavingClause` with an `operator` and `right` property                                                                                                      | value: `WhereClause | HavingClause`                                       |
| isValueCondition                        | Returns `true` if the value passed in has `field`, `operator` and `value` properties                                                                                                                                    | value: `Condition`                                                        |
| isValueWithDateLiteralCondition         | Returns `true` if the value passed in has `field`, `operator` and `value` properties and has a `literalType` property that is `DATE_LITERAL` of `['DATE_LITERAL',...]`                                                  | value: `Condition`                                                        |
| isValueWithDateNLiteralCondition        | Returns `true` if the value passed in has `field`, `operator`, `value` and `dateLiteralVariable` properties                                                                                                             | value: `Condition`                                                        |
| isValueFunctionCondition                | Returns `true` if the value passed in has `fn`, `operator` and `value` properties                                                                                                                                       | value: `Condition`                                                        |
| isNegationCondition                     | Returns `true` if the value passed in has a `openParen` property and does not have `fn`, `field`, `operator`, `value`, and `closeParen` properties                                                                      | value: `Condition`                                                        |
| isValueQueryCondition                   | Returns `true` if the value passed in has `field`, `operator` and `valueQuery` properties and does not have a `value` property                                                                                          | value: `Condition | ValueQueryCondition`                                  |
| isOrderByField                          | Returns `true` if the value passed in has `field` property                                                                                                                                                              | value: `OrderByClause`                                                    |
| isOrderByFn                             | Returns `true` if the value passed in has `fn` property                                                                                                                                                                 | value: `OrderByClause`                                                    |
| isGroupByField                          | Returns `true` if the value passed in has `field` property                                                                                                                                                              | value: `GroupByClause`                                                    |
| isGroupByFn                             | Returns `true` if the value passed in has `fn` property                                                                                                                                                                 | value: `GroupByClause`                                                    |

**ParseQueryConfig**

| Property               | Type    | Description                                                                                          | required | default |
| ---------------------- | ------- | ---------------------------------------------------------------------------------------------------- | -------- | ------- |
| allowApexBindVariables | boolean | Determines if apex variables are allowed in parsed query. Example: `WHERE Id IN :accountIds`.        | FALSE    | FALSE   |
| logErrors              | boolean | If true, then additional detail will be logged to the console if there is a lexing or parsing error. | FALSE    | FALSE   |

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
// var soqlParserJs = require('soql-parser-js'); // node's require format - usage: soqlParserJs.parseQuery()

const soql = `
  SELECT UserId, COUNT(Id)
  FROM LoginHistory
  WHERE LoginTime > 2010-09-20T22:16:30.000Z
  AND LoginTime < 2010-09-21T22:16:30.000Z
  GROUP BY UserId
`;

const soqlQuery = parseQuery(soql);

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

If you need to compose just a part of a query instead of the entire query, you can create an instance of the Compose class directly.

For example, if you just need the "WHERE" clause from a query as a string, you can do the following:

```typescript
import { Compose, getComposedField, parseQuery } from 'soql-parser-js';

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


  const whereClause = composer.parseWhereClause(parsedQuery.where);

  console.log(whereClause);
  // Name = 'Foo'
}

```

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
  fields: FieldType[];
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
  sObject: string;
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
