# SOQL Parser JS

[![build](https://api.travis-ci.com/paustint/soql-parser-js.png?branch=master)](https://travis-ci.com/paustint/soql-parser-js)
[![npm version](https://badge.fury.io/js/soql-parser-js.svg)](https://badge.fury.io/js/soql-parser-js)
[![dependencies](https://david-dm.org/paustint/soql-parser-js.svg)](https://david-dm.org/paustint/soql-parser-js)

## Description
SOQL Parser JS provides the following capabilities:
1. Parse a SOQL query into a usable data structure.
2. Turn a parsed query data structure back into well a SOQL query with various format options.
3. Check if a SOQL query is syntactically valid (**note**: some cases may be structurally sound but not allowed by SFDC).

This library is written in Typescript and all type definitions are included with the library for your benefit if you choose to use Typescript or use VSCode's automatic type checking.

*Warning*: antlr4 is dependency for this library and is a rather large library (~600 KB) and is required for the parser to function, use in the browser with care.

## Examples
For an example of the parser, check out the [example application](https://paustint.github.io/soql-parser-js/).

Have a look through the unit tests for many more examples.

# Usage
## Parsing
Parsing a SOQL query can be completed by calling `parseQuery(soqlQueryString, options)` and a `Query` data structure will be returned;

#### Typescript / ES6
```typescript
import { parseQuery } from 'soql-parser-js'; // TS / ES6 imports
// var soqlParserJs = require('soql-parser-js'); // node's require format - usage: soqlParserJs.parseQuery()

const soql = 'SELECT UserId, COUNT(Id) from LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z GROUP BY UserId';

const soqlQuery = parseQuery(soql);
// const soqlQuery = soqlParserJs.parseQuery(soql); // using require()

console.log(JSON.stringify(soqlQuery, null, 2));
```

#### Options
```typescript
export interface SoqlQueryConfig {
  continueIfErrors?: boolean; // default=false
  logging: boolean; // default=false
}
```

## Composing
Composing a query will turn a Query object back to a SOQL query. The exact same data structure returned from `parseQuery()` can be used,
but there are many use-cases where you may need to build your own data structure to compose a query.
These examples show building your own Query object with the minimum required fields.

**Note:** For some operators, they may be converted to upper case (e.x. NOT, AND)

**Note:** There are a number of fields populated on the Query object when `parseQuery()` is called that are not required to compose a query.  Look at the examples below and the comments in the data model for more information.


**The base query object is shaped like this:**
```typescript
export interface QueryBase {
  fields: FieldType[];
  sObjectAlias?: string;
  where?: WhereClause;
  limit?: number;
  offset?: number;
  groupBy?: GroupByClause;
  having?: HavingClause;
  orderBy?: OrderByClause | OrderByClause[];
  withDataCategory?: WithDataCategoryClause;
  for?: ForClause;
  update?: UpdateClause;
}
```

The easiest way to build the fields is to call the utility function `getComposedField()`.

### Example
This is the query that will be composed
```sql
SELECT Id, Name, FORMAT(Amount) MyFormattedAmount,
  (SELECT Quantity, ListPrice, PricebookEntry.UnitPrice, PricebookEntry.Name FROM OpportunityLineItems)
FROM Opportunity
WHERE CreatedDate > LAST_N_YEARS:1
AND StageName = 'Closed Won'
LIMIT 150
```

```typescript
import { composeQuery, getComposedField } from 'soql-parser-js';

const oppLineItemsSubquery = {
  fields: [
    getComposedField('Quantity'),
    getComposedField('ListPrice'),
    getComposedField({
      field: 'UnitPrice',
      relationships: ['PricebookEntry'],
    }),
    getComposedField({
      field: 'Name',
      relationships: ['PricebookEntry'],
    }),
  ],
  relationshipName: 'OpportunityLineItems',
};

const soqlQuery = {
  fields: [
    getComposedField('Id'),
    getComposedField('Name'),
    getComposedField({
      fn: 'FORMAT',
      parameters: 'Amount',
      alias: 'MyFormattedAmount',
    }),
    getComposedField({ subquery: oppLineItemsSubquery }),
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
        // All other literalType values are ignored in composing a query
        literalType: 'STRING',
      },
    },
  },
  limit: 150,
};

const composedQuery = composeQuery(soqlQuery, { format: true });

console.log(composedQuery);

```

In the above examples, we made use of `getComposedField(input: string | ComposeFieldInput)` to help easily compose the fields.  The input expects a string or one of the following shapes of data below.  An error will be thrown if the data passed in is not one of the following shapes:
and will return a `FieldType` object.
```typescript
export interface ComposeField {
  field: string;
  objectPrefix?: string;
}

export interface ComposeFieldFunction {
  fn: string;
  parameters?: string | string[] | FieldFunctionExpression | FieldFunctionExpression[];
  alias?: string;
}

export interface ComposeFieldRelationship {
  field: string;
  relationships: string[];
  objectPrefix?: string;
}

export interface ComposeFieldSubquery {
  subquery?: Subquery;
}

export interface ComposeFieldTypeof {
  field: string;
  conditions: FieldTypeOfCondition[];
}
```

## Checking if a Query is Valid
This will parse the AST tree to confirm the syntax is valid, but will not parse the tree into a data structure.
This method is faster than parsing the full query.

Options:
```typescript
export interface ConfigBase {
  logging: boolean; // default=false
}
```

```typescript
import { isQueryValid } from 'soql-parser-js';

const soql = 'SELECT UserId, COUNT(Id) from LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z GROUP BY UserId';

const isValid = isQueryValid(soql);

console.log('isValid', isValid);

```

#### Node
```javascript
var soqlParserJs = require('soql-parser-js');

const soql = 'SELECT UserId, COUNT(Id) from LoginHistory WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21T22:16:30.000Z GROUP BY UserId';

const isValid = isQueryValid(soql);

console.log('isValid', isValid);
```

## Format Query
This function is provided as a convenience and just calls parse and compose under the hood.

```typescript
import { formatQuery } from 'soql-parser-js';

const query = `SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue, BillingAddress, BillingCity, BillingCountry, BillingGeocodeAccuracy, ShippingStreet, Sic, SicDesc, Site, SystemModstamp, TickerSymbol, Type, Website, (SELECT Id, Name, AccountId, Amount, CampaignId, CloseDate, CreatedById, Type FROM Opportunities), (SELECT Id, Name, AccountNumber, AccountSource, AnnualRevenue, BillingAddress, Website FROM ChildAccounts) FROM Account WHERE Name LIKE 'a%' OR Name LIKE 'b%' OR Name LIKE 'c%'`;

const formattedQuery1 = formatQuery(query);
const formattedQuery2 = formatQuery(query, { fieldMaxLineLen: 20, fieldSubqueryParensOnOwnLine: false, whereClauseOperatorsIndented: true });
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

### Options

```typescript
export interface SoqlQueryConfig {
  continueIfErrors?: boolean; // default=false
  logging: boolean; // default=false
  includeSubqueryAsField: boolean; // default=true
}

export interface SoqlComposeConfig {
  logging: boolean; // default=false
  format: boolean; // default=false
  formatOptions?: FormatOptions;
}

export interface FormatOptions {
  numIndent?: number; // default=1
  fieldMaxLineLen?: number; // default=60
  fieldSubqueryParensOnOwnLine?: boolean; // default=true
  whereClauseOperatorsIndented?: boolean; // default=false
  logging?: boolean; // default=false
}
```

## Utility Functions
The following utility functions are available:
1. `getComposedField(input: string | ComposeFieldInput)`
  1. Convenience method to construct fields in the correct data format. See example usage in the Compose example.
2. `isSubquery(query: Query | Subquery)`
  1. Returns true if the data passed in is a subquery
3. `getFlattenedFields(query: Query)`
  1. This provides a list of fields that are stringified and flattened in order to access data from a returned API call from Salesforce.  Refer to `tests/publicUtils.spec.ts` for usage examples.


## Data Models
### Query
These are all available for import in your typescript projects
```typescript
export type LogicalOperator = 'AND' | 'OR';
export type Operator = '=' | '!=' | '<=' | '>=' | '>' | '<' | 'LIKE' | 'IN' | 'NOT IN' | 'INCLUDES' | 'EXCLUDES';
export type FieldTypeOfConditionType = 'WHEN' | 'ELSE';
export type GroupSelector = 'ABOVE' | 'AT' | 'BELOW' | 'ABOVE_OR_BELOW';
export type LogicalPrefix = 'NOT';
export type ForClause = 'VIEW' | 'UPDATE' | 'REFERENCE';
export type UpdateClause = 'TRACKING' | 'VIEWSTAT';
export type LiteralType =
  | 'STRING'
  | 'INTEGER'
  | 'DECIMAL'
  | 'BOOLEAN'
  | 'NULL'
  | 'DATETIME'
  | 'DATE'
  | 'DATE_LITERAL'
  | 'DATE_N_LITERAL';
export type FieldType = Field | FieldFunctionExpression | FieldRelationship | FieldSubquery | FieldTypeOf;
export type OrderByCriterion = 'ASC' | 'DESC';
export type NullsOrder = 'FIRST' | 'LAST';
export type GroupByType = 'CUBE' | 'ROLLUP';

export interface Field {
  type: 'Field';
  field: string;
  objectPrefix?: string; // required if object is aliased
}

export interface FieldFunctionExpression {
  type: 'FieldFunctionExpression';
  fn: string;
  parameters?: string[] | FieldFunctionExpression[];
  alias?: string;
  isAggregateFn?: boolean; // not required for compose, will be populated if SOQL is parsed
  rawValue?: string; // not required for compose, will be populated if SOQL is parsed with the raw value of the entire field
}

export interface FieldRelationship {
  type: 'FieldRelationship';
  field: string;
  relationships: string[];
  objectPrefix?: string; // required if object is aliased
  rawValue?: string; // not required for compose, will be populated if SOQL is parsed with the raw value of the entire field
}

export interface FieldSubquery {
  type: 'FieldSubquery';
  subquery: Subquery;
  from?: string; // not required for compose, will be populated if SOQL is parsed
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
  where?: WhereClause;
  limit?: number;
  offset?: number;
  groupBy?: GroupByClause;
  having?: HavingClause;
  orderBy?: OrderByClause | OrderByClause[];
  withDataCategory?: WithDataCategoryClause;
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

export interface WhereClause {
  left: Condition;
  right?: WhereClause;
  operator?: LogicalOperator;
}

export interface Condition {
  openParen?: number;
  closeParen?: number;
  logicalPrefix?: LogicalPrefix;
  field?: string;
  fn?: FunctionExp;
  operator: Operator;
  value?: string | string[];
  valueQuery?: Query;
  literalType?: LiteralType; // If populated with STRING on compose, the value(s) will be wrapped in "'" if they are not already. - All other values ignored
  dateLiteralVariable?: number; // not required for compose, will be populated if SOQL is parsed
}

export interface OrderByClause {
  field?: string;
  fn?: FunctionExp;
  order?: OrderByCriterion;
  nulls?: NullsOrder;
}

export interface GroupByClause {
  field: string | string[];
  type?: GroupByType;
}

export interface HavingClause {
  left: HavingCondition;
  right?: HavingClause;
  operator?: LogicalOperator;
}

export interface HavingCondition {
  openParen?: number;
  closeParen?: number;
  field?: string;
  fn?: FunctionExp;
  operator: string;
  value: string | number;
}

export interface FunctionExp {
  text?: string; // Should be formatted like this: Count(Id)
  name?: string; // not used for compose, will be populated if SOQL is parsed
  alias?: string;
  parameter?: string | string[]; // not used for compose, will be populated if SOQL is parsed
  isAggregateFn?: boolean; // not used for compose, will be populated if SOQL is parsed
  fn?: FunctionExp; // used for nested functions FORMAT(MIN(CloseDate))
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


### Utils
```typescript
export interface ComposeField {
  field: string;
  objectPrefix?: string;
}

export interface ComposeFieldFunction {
  fn: string;
  parameters?: string | string[] | FieldFunctionExpression | FieldFunctionExpression[];
  alias?: string;
}

export interface ComposeFieldRelationship {
  field: string;
  relationships: string[];
  objectPrefix?: string;
}

export interface ComposeFieldSubquery {
  subquery?: Subquery;
}

export interface ComposeFieldTypeof {
  field: string;
  conditions: FieldTypeOfCondition[];
}

export type ComposeFieldInput =
  | ComposeField
  | ComposeFieldFunction
  | ComposeFieldRelationship
  | ComposeFieldSubquery
  | ComposeFieldTypeof;
```

## CLI Usage
The CLI can be used to parse a query or compose a previously parsed query back to SOQL.

**Examples:**
```shell
$ npm install -g soql-parser-js
$ soql --help
$ soql --query "SELECT Id FROM Account"
$ soql -query "SELECT Id FROM Account"
$ soql -query "SELECT Id FROM Account" -output some-output-file.json
$ soql -query "SELECT Id FROM Account" -json
$ soql -query some-input-file.txt
$ soql -compose some-input-file.json
$ soql -compose some-input-file.json
$ soql -compose some-input-file.json -output some-output-file.json
```

**Arguments:**
```
    --query,   -q       A SOQL query surrounded in quotes or a file path to a text file containing a SOQL query.
    --compose, -c       An escaped and quoted parsed SOQL JSON string or a file path to a text file containing a parsed query JSON object.
    --output,  -o       Filepath.
    --json,    -j       Provide all output messages as JSON.
    --debug,   -d       Print additional debug log messages.
    --help,    -h       Show this help message.
```

## Contributing
All contributions are welcome on the project. Please read the [contribution guidelines](https://github.com/paustint/soql-parser-js/blob/master/CONTRIBUTING.md).

## Special Thanks
* This library is based on the ANTLR4 grammar file [produced by Mulesoft](https://github.com/mulesoft/salesforce-soql-parser/blob/antlr4/SOQL.g4).
* The following repository also was a help to get things started: https://github.com/petermetz/antlr-4-ts-test
