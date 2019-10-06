# Changelog

## 2.0.0

### Summary

Version 2.0 brings some significant bundle size and performance improvements. This library now uses [Chevrotain](https://github.com/SAP/chevrotain) instead of [antlr4](https://github.com/antlr/antlr4). With this change, everything related to parsing had to be re-written from scratch. Chevrotain uses pure javascript to handle lexing, parsing, and visiting the generated ast/cst as opposed to using a grammar file and generating a javascript parser based on the grammar.

With this change, the data model was reviewed and analyzed, and there are some significant breaking changes to the data structures. Review the 🔥breaking changes🔥 below for a detailed description of each breaking change.

#### Bundle Size

To compare the bundle size, the following small program was written and then compiled using the default configuration of webpack, and the resulting webpack bundle was compared to determine the full size of the library.

Minified, uncompressed:

- Version 1.x: **545kb**
- Version 2.0: **207kb**

```javascript
var soqlParser = require('soql-parser-js');

const query = soqlParser.parseQuery(`SELECT Id FROM Account WHERE Id = 'FOO'`);
console.log('query', query);
const soql = soqlParser.composeQuery(query);
console.log('soql', soql);
```

#### Benchmarks

Performance testing was done by iterating the unit tests 60K times, here are the results:

**Version 1.x parser**

```
Library import (startup time): 0.8671 milliseconds
Parsing: 58 X 1000 = 58000 iterations.
Duration: 5.7648 seconds
Average of 0.0994 milliseconds per query
```

**Version 2.0 parser**

```
Library import (startup time): 1.3793 milliseconds
Parsing: 87 X 1000 = 87000 iterations.
Duration: 3.6582 seconds
Average of 0.0420 milliseconds per query
```

### Breaking Changes 🔥

#### General Changes

- The CLI was removed.
- The `parseQuery()` `options` have changed. The only option allowed is `allowApexBindVariables` with will allow parsing queries with apex variables.
- `rawValue` will always have a space between parameters `GROUPING(Id, BillingCountry)`
- Some `literalType` values may have differing case from prior versions, regardless of the data input.
  - `TRUE`, `FALSE`, and all functions except those listed below will always be returned in uppercase, regardless of case of input.
  - **Exceptions**:
    - `toLabel`, `convertTimezone`, `convertCurrency` will always be in camelCase.
  - Added types for `DateLiteral` and `DateNLiteral` values. If you are using TypeScript, you can utilize these types.
- A new `LiteralType` value was added for `APEX_BIND_VARIABLE`.
- When composing functions in a where clause or group by clause, the `rawValue` will be preferred (if it exists) (no change here), but if rawValue is not provided, then the function will be composed using the `functionName` and `parameters`.
- A new `LiteralType` value was added for `INTEGER_WITH_CURRENCY_PREFIX` and `DECIMAL_WITH_CURRENCY_PREFIX`. e.x. `USD500.01`

#### Compose Query

- `getComposedField()` is deprecated, you should now use `getField()`. `getComposedField()` will remain available for backward compatibility.
- `getField()`/`getComposedField()` has the following changes:
  1.  `fn` property is has been deprecated (but still exists), you should now use `functionName` instead.
  2.  The `from` property has been removed for subqueries. The `relationshipName` is required to be populated to compose a subquery.
- On the FormatOptions interface `fieldMaxLineLen` was renamed to `fieldMaxLineLength`.
- Added support for `usingScope` - https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_using_scope.htm?search_text=format()
- The `having` clause condition (e.x. `left`) now uses the `Condition` interface instead of having it's own structure.

```diff
export interface FormatOptions {
  numIndent?: number;
- fieldMaxLineLen?: number;
+ fieldMaxLineLength?: number;
  fieldSubqueryParensOnOwnLine?: boolean;
  whereClauseOperatorsIndented?: boolean;
  logging?: boolean;
}
```

#### Parse Query

- `rawValue` will now be included on `Field` if `objectPrefix` is defined.
- `alias` may be included on `Field`, if defined.
- On `FieldFunctionExpression`, `fn` was renamed to `functionName`. this was done because all other usages of `fn` were `FunctionExp`, but it was a string in this case.
- The `parameters` type on `FieldFunctionExpression` was modified to allow an array of varying types.
- Removed `from` property from `FieldSubquery`.
- `having` was removed from `QueryBase` and now lives as a property on `GroupByClause`.
- On the `Condition` object, `literalType` may be an array. This will be an array if `value` is an array and there are variable types within the `value`. For example: `WHERE Foo IN ('a', null, 'b')` would produce `literalType: ['STRING', 'NULL', 'STRING']`.
- The `GroupByClause` has the following modifications:
  - `field` is now optional, and will be populated only if the grouping is on a single field.
  - `type` has been renamed to `fn` and will be populated when `CUBE` and `ROLLUP` are used.
  - The `having` clause has been added as a top-level property to the `GroupByClause` and will be populated only if a `having` clause is present.
- The `HavingCondition` interface has been removed and now uses the same `Condition` interface that the `WhereClause` uses, but without `valueQuery`.
  - The parser uses the same code to process both of these, so the `having` clause now supports the exact same capability as a `where` clause.
- `FunctionExp` has the following modifications
  - `text` was renamed to `rawValue` to be more consistent with other places in the data model.
  - `name` was renamed to `functionName`.
  - `parameter` was renamed to `parameters` and the type was changed to `(string | FunctionExp)[]` to support nested functions. This will ALWAYS be an array now even if there is only one parameter.
  - `fn` was removed, as nested functionParameters are always stored as an entry in the `parameters` array.
  - Added support for `usingScope` - https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_using_scope.htm?search_text=format()

```diff
export type LiteralType =
  | 'STRING'
  | 'INTEGER'
  | 'DECIMAL'
+ | 'INTEGER_WITH_CURRENCY_PREFIX'
+ | 'DECIMAL_WITH_CURRENCY_PREFIX'
  | 'BOOLEAN'
  | 'NULL'
  | 'DATETIME'
  | 'DATE'
  | 'DATE_LITERAL'
  | 'DATE_N_LITERAL'
+ | 'APEX_BIND_VARIABLE';

+ export type DateLiteral =
+   | 'YESTERDAY'
+   | 'TODAY'
+   | 'TOMORROW'
+   | 'LAST_WEEK'
+   | 'THIS_WEEK'
+   | 'NEXT_WEEK'
+   | 'LAST_MONTH'
+   | 'THIS_MONTH'
+   | 'NEXT_MONTH'
+   | 'LAST_90_DAYS'
+   | 'NEXT_90_DAYS'
+   | 'THIS_QUARTER'
+   | 'LAST_QUARTER'
+   | 'NEXT_QUARTER'
+   | 'THIS_YEAR'
+   | 'LAST_YEAR'
+   | 'NEXT_YEAR'
+   | 'THIS_FISCAL_QUARTER'
+   | 'LAST_FISCAL_QUARTER'
+   | 'NEXT_FISCAL_QUARTER'
+   | 'THIS_FISCAL_YEAR'
+   | 'LAST_FISCAL_YEAR'
+   | 'NEXT_FISCAL_YEAR';

+ export type DateNLiteral =
+   | 'YESTERDAY'
+   | 'NEXT_N_DAYS'
+   | 'LAST_N_DAYS'
+   | 'N_DAYS_AGO'
+   | 'NEXT_N_WEEKS'
+   | 'LAST_N_WEEKS'
+   | 'N_WEEKS_AGO'
+   | 'NEXT_N_MONTHS'
+   | 'LAST_N_MONTHS'
+   | 'N_MONTHS_AGO'
+   | 'NEXT_N_QUARTERS'
+   | 'LAST_N_QUARTERS'
+   | 'N_QUARTERS_AGO'
+   | 'NEXT_N_YEARS'
+   | 'LAST_N_YEARS'
+   | 'N_YEARS_AGO'
+   | 'NEXT_N_FISCAL_QUARTERS'
+   | 'LAST_N_FISCAL_QUARTERS'
+   | 'N_FISCAL_QUARTERS_AGO'
+   | 'NEXT_N_FISCAL_YEARS'
+   | 'LAST_N_FISCAL_YEARS'
+   | 'N_FISCAL_YEARS_AGO';

export interface Field {
  type: 'Field';
  field: string;
  objectPrefix?: string;
+ rawValue?: string;
+ alias?: string;
}

export interface FieldFunctionExpression {
  type: 'FieldFunctionExpression';
- fn: string;
+ functionName: string;
- parameters?: string[] | FieldFunctionExpression[];
+ parameters: (string | FieldFunctionExpression)[];
  alias?: string;
  isAggregateFn?: boolean;
  rawValue?: string;
}

export interface FieldRelationship {
  type: 'FieldRelationship';
  field: string;
  relationships: string[];
  objectPrefix?: string;
  rawValue?: string;
+ alias?: string;
}

export interface FieldSubquery {
  type: 'FieldSubquery';
  subquery: Subquery;
- from?: string;
}

export interface QueryBase {
  fields: FieldType[];
  sObjectAlias?: string;
+ usingScope?: string;
  where?: WhereClause;
  limit?: number;
  offset?: number;
  groupBy?: GroupByClause;
- having?: HavingClause;
  orderBy?: OrderByClause | OrderByClause[];
  withDataCategory?: WithDataCategoryClause;
  withSecurityEnforced?: boolean;
  for?: ForClause;
  update?: UpdateClause;
}

export interface WhereClause {
- left: Condition;
+ left: Condition & ValueQuery;
  right?: WhereClause;
  operator?: LogicalOperator;
}


+ export interface ValueQuery {
+   valueQuery?: Query;
+ }

export interface Condition {
  openParen?: number;
  closeParen?: number;
  logicalPrefix?: LogicalPrefix;
  field?: string;
  fn?: FunctionExp;
  operator: Operator;
  value?: string | string[];
- valueQuery?: Query;
- literalType?: LiteralType;
+ literalType?: LiteralType | LiteralType[];
  dateLiteralVariable?: number;
}

export interface GroupByClause {
- field: string | string[];
+ field?: string | string[];
- type?: GroupByType;
+ fn?: FunctionExp;
+ having?: HavingClause;
}

export interface HavingClause {
+ left: Condition;
  right?: HavingClause;
  operator?: LogicalOperator;
}

- export interface HavingCondition {
-   openParen?: number;
-   closeParen?: number;
-   field?: string;
-   fn?: FunctionExp;
-   operator: string;
-   value: string | number;
- }

export interface FunctionExp {
- text?: string;
+ rawValue?: string;
- name?: string;
+ functionName?: string;
  alias?: string;
- parameter?: string | string[];
+ parameters?: (string | FunctionExp)[];
  isAggregateFn?: boolean;
- fn?: FunctionExp;
}

```

## 1.2.1

- Queries with multiple consecutive left parens in a where clause were not correctly parsed. (#69)
- Fixed npm reported security vulnerabilities.

## 1.2.0

- Changed compose methods to public to allow external access (#65)
- Fixed lodash security vulnerability
- Updated README to reflect new changes and other minor changes

## 1.1.1

- Removed files that accidentally got included with release with update of `release-it`

## 1.1.0

- Updated `Contributing.md` with more detailed instructions on grammar updates
- Added support for `WITH SECURITY_ENFORCED` (#61)

## 1.0.2

- If a field in a query happened to have a function reserved word, such as `Format`, then parsing the query failed. (#59)

## 1.0.1

- Ensured that nothing is logged directly to the console unless logging is enabled

## 1.0.0

### Changed

**!BREAKING CHANGES!**

- Added literal type information to fields to provide additional information about the field type. (#51)
  - WHERE clause fields have one of the following types `'STRING' | 'INTEGER' | 'DECIMAL' | 'BOOLEAN' | 'NULL' | 'DATE_LITERAL' | 'DATE_N_LITERAL';` stored in the condition.
  - For date literal fields that have variables, `dateLiteralVariable` will be populated with the value
- Modified Field data structure to have explicit type information. (#46, #52)
  - The data structure for fields has been modified to include specific information about the structure of a given field to ease making sense of a parsed query,
  - To aid in creating compose fields, a new helper method is available - `getComposedField()`. This takes in a simple data structure (or even a string) and will return the structure needed to compose a query.

### New

- An additional `queryUtils` object is available with the following functions:
  - `function getComposedField(input: string | ComposeFieldInput): FieldType`
  - `function getFlattenedFields(query: Query, isAggregateResult?: boolean): string[]`
  - `function isSubquery(query: Query | Subquery): query is Subquery`
  - Look at the README and refer to the unit tests for example usage.
