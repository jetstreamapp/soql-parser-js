# Changelog

## 6.2.2

July 8, 2025

- Ensure types are referenced in exports. (#263)

## 6.2.1

July 7, 2025

- Updated build scripts to ensure esm build works correctly. (#259)

## 6.2.0

May 8, 2025

- Updated build tooling and dependencies, no externally facing changes.

## 6.1.0

June 16, 2024

- Add support for [negative currency values](https://help.salesforce.com/s/articleView?id=release-notes.rn_api_soql.htm&release=250&type=5) (#244)

## 6.0.0

June 16, 2024

- Package has been moved to `@jetstreamapp` npm organization

## 5.0.2

Jan 18, 2024

- Nested NOT negation WHERE clauses were not properly formed (#242)

## 5.0.1

Jan 13, 2024

💥 Breaking Changes
Fixed a bug where with typescript types to properly represent that `WhereClause` can have a null value for `left` in the case of a negation operator.
This was always the case, but prior to enabling strict typescript types, this went under the radar.

For Typescript consumers that have strict null checks enabled, they may need to make code changes depending on usage.

## 5.0.0

💥 Did not publish correct assets - package was marked as deprecated on npm.

## 4.10.1

Jan 13, 2024

Revert accidental breaking change to types. `WhereClause` left can have `null` in the negation case, but the types did not represent this.
Updating types to match reality is a breaking change for consumers, so worked around issue and will publish version 5 with breaking change.

## 4.10.0

💥 Use 4.10.1, this version was marked as deprecated because of accidental breaking change with is reverted in 4.10.1

Jan 13, 2024

- Fixed where clause's that have a field name beginning with `In` preceded by the `NOT` operator. These were parsed as `NOT IN` instead of `NOT` followed by a field name, example: `NOT Invoice__c`
  - https://github.com/jetstreamapp/jetstream/issues/702
- Fixed queries that have two consecutive `NOT` operators (#237)
- Enabled Typescript strict mode and made a number of minor fixes related to this.
- When using `getField` which return `FieldFunctionExpression` will now always return an empty array even if no parameters are provided.

## 4.9.2

July 24, 2023

Ensure `getFlattenedFields` does not throw exception if query does not have `fields` property.

## 4.9.1

May 29, 2023

Fixed bug with composeQuery when some of the WHERE clause values were not strings.

## 4.9.0

May 23, 2023

Upgraded Chevrotain to version 10. Chevrotain dropped support for older browsers, but since this library has a build step, the target output from the processed build should remain in the same target format that was previously available.

## 4.8.3

May 22, 2023

- Included `src` folder in npm package

## 4.8.2

May 22, 2023

- Fix output files to ensure sourcemaps are included in npm package for esm_build. (#227)
  - There was a typo in one of the output paths.

## 4.8.1

April 9, 2023

- Fix output files to ensure sourcemaps are included in npm package. (#227)

## 4.8.0

April 9, 2023

- Fix `isAggregateFn` (#228)
  - Date functions, such as `HOUR_IN_DAY(CreatedDate)` did not properly have the `isAggregateFn` property set to true for the field.
  - As a result, `getFlattenedFields` would produce incorrect results for these fields if they were not aliased.
- Upgraded webpack, migrated from Travis CI to Github Actions
- Update dependencies to resolve reported security issues
- Update build process to fix invalid sourcemap mapping (#227)
  - Removed non-minified version of application which had incorrect path to sourcemaps
  - Ensure webpack generates a sourcemap for the minified code output

## 4.7.1

January 23rd, 2023

The repository was moved from `paustint` to `jetstreamapp`. No code changes.

## 4.7.0

October 6, 2022

- Ensure the `literalType` is populated on subqueries that are part of a WHERE clause.

## 4.6.1

July 17, 2022

- Ensure boolean return from some utility functions.
- Re-designed the documentation website.

## 4.6

July 7, 2022

- Converted test framework from mocha to jest.
- Fixed bug where non-string values passed in to a where clause would throw an exception. (#121)
- Fixed bug where in some cases a soql query would be improperly formed if the operator was an array type, such as `IN`, but the value and literal types were not arrays. (#107)
- Added additional test-cases for stand-alone compose functions to test non-standard usage.

## 4.5.0 / 4.5.1

June 21, 2022

- Added support for [accessLevel parameters](https://developer.salesforce.com/docs/atlas.en-us.238.0.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm) in a `WITH` clause (#193)
  - Examples:
    - `SELECT Id FROM Account WITH USER_MODE`
    - `SELECT Id FROM Account WITH SYSTEM_MODE`
  - Thank you @ghingis
- Patch release - changed property from `accessLevel` to `withAccessLevel`

## 4.4.1

June 11, 2022

- Fixed parser error where `'mi'` and `'km'` could not be used in a WHERE clause because they were being parsed as a GeoLocationUnit (#188)
  - Thank you @divijklenty for reporting this.

## 4.4

March 11, 2022

- Add support for partial parse and compose #182
  - Added support for parsing and composing partial queries. When parsing, the new option `allowPartialQuery` enables this functionality.
  - Added a third argument for `formatQuery`, allowing `ParseQueryConfig` options to be provided.
  - Some types on the `Query` interface were made optional to support partial queries
  - Updated CLI to include additional commands

## 4.3

September 19, 2021

- Added cli support, check out the readme for usage details

## 4.2.2

August 1, 2021

#160 - `getFlattenedFields()` Did not return correct results if a normal field used an alias, such as `SELECT Count(Id), Name account_name FROM Account GROUP BY Name`

## 4.2.1

June 18, 2021

#157 - `getFlattenedFields()` Did not return correct results if the aggregate function was nested in another function, such as `FORMAT(MAX(CreatedDate))`.
This bug only applied if there was not a field alias defined.

## 4.2.0

June 8, 2021

#155 - Apex bind variable support is improved to allow parsing of more complex Apex.

Review test cases 112 - 117 for examples of supported apex bind variables.

## 4.1.1

June 6, 2021

#153 - A new parser option has been added named `ignoreParseErrors`, which will remove invalid parts of a query if there are parsing errors.

The general structure of the query must be valid and the `SELECT` and `WHERE` clauses must both be valid, but any other clause may be removed from the parsed output if there are errors parsing the query and `ignoreParseErrors` is set to `true`.

This option has been added to the documentation application.

## 4.0.0

April 13, 20201

💥 Breaking Changes 💥

Release 4.x has changed the way the `groupBy` and `having` clauses are parsed. (#149)
Previously, the `groupBy` clause only allowed multiple entries for fields, but not functions.

The `groupBy` and `orderBy` are now always returned as arrays from parsed queries to normalize the returned data structure.

For backwards compatibility, a single `groupBy` or `orderBy` object is allowed to be passed in to `composeQuery()`, but a parsed query will always return an array.

The `Query` object now has

- A list of group by clauses (a single groupBy clause is allowed if you build the data structure yourself)
- A Having clause (this was previously nested in the groupBy clause)
- A list of orderBy clauses (a single orderBy clause is allowed if you build the data structure yourself)

```diff
-groupBy?: GroupByClause;
+groupBy?: GroupByClause | GroupByClause[]; // a parsed query will always be undefined or an array
+having?: HavingClause;
orderBy?: OrderByClause | OrderByClause[]; // a parsed query will always be undefined or an array
```

Each groupBy clause

- No longer has a nested having clause
- Is an object with a single `field` or `fn` property

```diff
type GroupByClause = GroupByFieldClause | GroupByFnClause;

-interface GroupByOptionalFieldsClause {
-  having?: HavingClause;
-}

-interface GroupByFieldClause extends GroupByOptionalFieldsClause {
+interface GroupByFieldClause {
-  field: string | string[];
+  field: string;
}

-interface GroupByFnClause extends GroupByOptionalFieldsClause {
+interface GroupByFnClause {
  fn: FunctionExp;
}
```

Here are a few examples of how the `groupBy` is parsed or expected when composing a query:

`SELECT UserId, CALENDAR_MONTH(LoginTime) month FROM LoginHistory WHERE NetworkId != NULL GROUP BY UserId, CALENDAR_MONTH(LoginTime)`

```javascript
{
  fields: [
    {
      type: 'Field',
      field: 'UserId',
    },
    {
      type: 'FieldFunctionExpression',
      functionName: 'CALENDAR_MONTH',
      rawValue: 'CALENDAR_MONTH(LoginTime)',
      parameters: ['LoginTime'],
      alias: 'month',
    },
  ],
  sObject: 'LoginHistory',
  where: {
    left: {
      field: 'NetworkId',
      operator: '!=',
      literalType: 'NULL',
      value: 'NULL',
    },
  },
  groupBy: [
    { field: 'UserId' },
    {
      fn: {
        functionName: 'CALENDAR_MONTH',
        rawValue: 'CALENDAR_MONTH(LoginTime)',
        parameters: ['LoginTime'],
      },
    },
  ],
}
```

`SELECT ProductCode FROM Product2 GROUP BY ProductCode HAVING COUNT(Id) > 1 ORDER BY COUNT(Id) DESC`

```javascript
{
  fields: [{ type: 'Field', field: 'ProductCode' }],
  sObject: 'Product2',
  groupBy: [{
    field: 'ProductCode',
  }],
  having: {
    left: {
      operator: '>',
      value: '1',
      literalType: 'INTEGER',
      fn: { rawValue: 'COUNT(Id)', functionName: 'COUNT', parameters: ['Id'] },
    },
  },
  orderBy: [{
    fn: { rawValue: 'COUNT(Id)', functionName: 'COUNT', parameters: ['Id'] },
    order: 'DESC',
  }],
}
```

`SELECT SBQQ__Product__r.Name foo, SBQQ__Quote__c foo1 FROM SBQQ__Quoteline__c GROUP BY SBQQ__Quote__c, SBQQ__Product__r.Name`

```javascript
{
  fields: [
    {
      type: 'FieldRelationship',
      field: 'Name',
      relationships: ['SBQQ__Product__r'],
      rawValue: 'SBQQ__Product__r.Name',
      alias: 'foo',
    },
    {
      type: 'Field',
      field: 'SBQQ__Quote__c',
      alias: 'foo1',
    },
  ],
  sObject: 'SBQQ__Quoteline__c',
  groupBy: [{ field: 'SBQQ__Quote__c' }, { field: 'SBQQ__Product__r.Name' }],
}
```

## 3.2.0

March 27, 2021

A number of improvements to the formatter have been made with this release.

- The formatter option `whereClauseOperatorsIndented` has been deprecated and will always be applied.
- A new boolean formatter option named `newLineAfterKeywords` has been added and will ensure that there is always a new line after any keyword. (#137)
- `TYPEOF` fields will now always be included on their own line be default, or will span multiple lines, split by keywords if `newLineAfterKeywords` is set to true. (#135)

## Example

`SELECT Id, TYPEOF What WHEN Account THEN Phone, NumberOfEmployees WHEN Opportunity THEN Amount, CloseDate ELSE Name, Email END, Name FROM Event`

`formatOptions: { newLineAfterKeywords: true, fieldMaxLineLength: 1 },`

```sql
SELECT
  Id,
  TYPEOF What
    WHEN
      Account
    THEN
      Phone, NumberOfEmployees
    WHEN
      Opportunity
    THEN
      Amount, CloseDate
    ELSE
      Name, Email
  END,
  Name
FROM
  Event
```

## 3.1.0

March 27, 2021

1. Added support for the `FIELDS()` function

## 3.0.2

March 6, 2021

1. Date functions were not properly parsed when used in order by clauses. (#139)
2. Modified names of functions / types (internal)
3. Removed improper import of `isString` from node utils

Changes also released to 2.5.6

## 3.0.1

January 7, 20201

1. `getFlattenedFields` did not properly handle the alias for an aggregate function within an aggregate query. (#131)

## 3.0.0

October 14, 2020

🔥 Breaking Changes 🔥

This version changes the `WHERE` clause structure when using the `NOT` operator t0 fix issue #122, and has implemented stricter type definitions.

The `NOT` operator is now treated as a `LogicalOperator` and will be set in the `operator` field between `left` and `right`.
In cases where this is populated, the preceding `left` condition will either be set to `null` or will at most have the `openParens` field populated.

The `logicalPrefix` property has been removed from `Condition`.

Example of the change in structure for queries using NOT - `SELECT Id FROM Account WHERE NOT Id = '2'`

```diff
{
  "fields": [
    {
      "type": "Field",
      "field": "Id"
    }
  ],
  "sObject": "Account",
  "where": {
-    "left": {
-      "logicalPrefix": "NOT",
-      "field": "Id",
-      "operator": "=",
-      "value": "'2'",
-      "literalType": "STRING"
-    }
+    "left": null
+    "operator": "NOT",
+    "right": {
+      "left": {
+        "field": "Id",
+        "operator": "=",
+        "value": "'2'",
+        "literalType": "STRING"
+      }
  }
}
```

If you are using Typescript in strict mode, you may encounter some breaking changes to your types depending on how you pre-checked for the presence of fields.

`Field` and `FieldRelationship` are now made up of two types, one with and one without alias.
`Condition` is now made up of multiple individual interfaces that represent different data types based on what data is populated.
`OrderByClause` is now made up of multiple individual interfaces that represent different data types based on what data is populated.
`GroupByClause` is now made up of multiple individual interfaces that represent different data types based on what data is populated.
`HavingClause` is now made up of multiple individual interfaces that represent different data types based on what data is populated.

Previously you could have just done null/undefined checks in Typescript strict mode.
Now, to avoid using the `any` type, you can use the newly introduced utility methods that provide type detection and type narrowing.

- `hasAlias()`
- `isFieldSubquery()`
- `isGroupByField()`
- `isGroupByFn()`
- `isHavingClauseWithRightCondition()`b
- `isNegationCondition()`
- `isOrderByField()`
- `isOrderByFn()`
- `isString()`
- `isSubquery()`
- `isValueCondition()`
- `isValueFunctionCondition()`
- `isValueQueryCondition()`
- `isValueWithDateLiteralCondition()`
- `isValueWithDateNLiteralCondition()`
- `isWhereClauseWithRightCondition()`
- `isWhereOrHavingClauseWithRightCondition()`

Here is a summary of the core changes, view the `Readme` for the comprehensive types.

```diff
export type FieldType =
   | Field
+  | FieldWithAlias
   | FieldFunctionExpression
   | FieldRelationship
+  | FieldRelationshipWithAlias
   | FieldSubquery
   | FieldTypeOf;
```

```diff
-export interface WhereClause {
-  left: Condition & ValueQuery;
-  right?: WhereClause;
-  operator?: LogicalOperator;
-}

+export type WhereClause = WhereClauseWithoutOperator | WhereClauseWithRightCondition;

-export interface Condition {
-  openParen?: number;
-  closeParen?: number;
-  logicalPrefix?: LogicalPrefix;
-  field?: string;
-  fn?: FunctionExp;
-  operator: Operator;
-  value?: string | string[];
-  literalType?: LiteralType | LiteralType[]; // If populated with STRING on compose, the value(s) will be wrapped in "'" if they are not already. - All other values ignored
-  dateLiteralVariable?: number | number[]; // not required for compose, will be populated if SOQL is parsed
-}

+export type Condition =
+  | ValueCondition
+  | ValueWithDateLiteralCondition
+  | ValueWithDateNLiteralCondition
+  | ValueFunctionCondition
+  | NegationCondition;
```

```diff
-export interface OrderByClause {
-  field?: string;
-  fn?: FunctionExp;
-  order?: OrderByCriterion;
-  nulls?: NullsOrder;
-}

+export type OrderByClause = OrderByFieldClause | OrderByFnClause;
```

```diff
-export interface GroupByClause {
-  field?: string | string[];
-  fn?: FunctionExp;
-  having?: HavingClause;
-}

+export type GroupByClause = GroupByFieldClause | GroupByFnClause;

-export interface HavingClause {
-  left: Condition;
-  right?: HavingClause;
-  operator?: LogicalOperator;
-}

+export type HavingClause = HavingClauseWithoutOperator | HavingClauseWithRightCondition;
```

## 2.5.5

Aug 23, 2020

1. `getFlattenedFields` ignores `typeof` clauses in query. (#115)

## 2.5.4

April 12, 2020

1. `getFlattenedFields` returns incorrect results if relationship field is grouped and you are grouping for only one field (#113)

## 2.5.3

April 24, 2020

1. Fixed nanoseconds on date (#102)

## 2.5.2

April 23, 2020

1. Added support for dates formatted with nanoseconds, such as `2020-04-15T02:40:03.000+0000`. (#102)
2. Added support for aggregate function in the `ORDER BY` clause (#103)
3. Queries would not be properly composed if an order by had a function and also specified ASC or DESC (#104)

## 2.5.1

April 23, 2020

1. Queries with date functions in a WHERE clause would throw an error when parsing. (#100)

## 2.5.0

April 3, 2020

1. Passing in null or undefined to compose query no longer throws an exception, but instead returns an empty string. (#95)
2. Regular fields in a select clause now allow aliases because this is allowed if the field is used as part of a group by clause. (#97)
3. `getFlattenedFields()` now considers if a relationship field was used as part of a group by, and if so it returns just the field name instead of the entire field path, as this is how Salesforce will return the records. (#98)

## 2.4.1

Mar 22, 2020

1. Updated dependencies to resolve known security vulnerabilities.

## 2.4

Feb 25, 2020

1. Date literals were not properly parsed if they were included as part of a SET within a WHERE clause, such as `WHERE IN (TODAY, LAST_N_DAYS:5)`.
   1. As part of this change, the `dateLiteralVariable` property in the `Condition` will be an array if a variable date literal is included in a SET where clause. Refer to test cases `93` through `98` for examples

## 2.3.0

Jan 13, 2020

1. The `DESC` operator in the `ORDER BY` clause was treated as a case-sensitive field.
2. The following fields we treated as case-sensitive:
   1. `NEXT_N_FISCAL_QUARTERS`, `LAST_N_FISCAL_QUARTERS`, `N_FISCAL_QUARTERS_AGO`, `NEXT_N_FISCAL_YEARS`, `LAST_N_FISCAL_YEARS`,
   2. `mi`, `km` on `GEOLOCATION` functions
3. Updated the `DISTANCE` function to properly be tagged as `isAggregateFn=true` if used as a field
   1. This fixed an issue where `getFlattenedFields()` would throw an exception

## 2.2.3

Jan 4, 2020

1. Added logo to README and updated docs.

## 2.2.2

Dec 2, 2019

1. When composing a query, if an empty OrderBy array was provided, the composed query would still include the `ORDER BY` clause in the composed query.

## 2.2.1

Nov 17, 2019

1. `GROUP BY` did not allow multiple fields to be listed, for example: `SELECT BillingState, BillingStreet, COUNT(Id) FROM Account GROUP BY BillingState, BillingStreet` would fail to parse.

## 2.2.0

Nov 6, 2019

1. `DISTANCE` and `GEOLOCATION` functions failed to parse when used in a `WHERE` clauses and `ORDER BY` clauses.

## 2.1.0

Oct 28, 2019

1. The method signature for `getFlattenedFields` has changed to allow `Query | Subquery | FieldSubquery` to be passed in. this is not being considered a breaking change because it is fully backwards compatible.
2. A new helper method `isFieldSubquery(value: any)` was added to allow determining if a Field is a FieldSubquery. This is used internally for `getFlattenedFields()`.

## 2.0.0

Oct 6, 2019

### Summary

Version 2.0 brings some significant bundle size and performance improvements. This library now uses [Chevrotain](https://github.com/SAP/chevrotain) instead of [antlr4](https://github.com/antlr/antlr4). With this change, everything related to parsing had to be re-written from scratch. Chevrotain uses pure javascript to handle lexing, parsing, and visiting the generated ast/cst as opposed to using a grammar file and generating a javascript parser based on the grammar.

With this change, the data model was reviewed and analyzed, and there are some significant breaking changes to the data structures. Review the 🔥breaking changes🔥 below for a detailed description of each breaking change.

#### Bundle Size

To compare the bundle size, the following small program was written and then compiled using the default configuration of webpack, and the resulting webpack bundle was compared to determine the full size of the library.

Minified, uncompressed:

- Version 1.x: **545kb**
- Version 2.0: **207kb**

```javascript
var soqlParser = require('@jetstreamapp/soql-parser-js');

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
