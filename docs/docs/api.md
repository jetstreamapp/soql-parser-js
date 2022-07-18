---
sidebar_position: 3
---

# API

## Core

### ParseQuery

Parse a SOQL query string into a Query data structure.

`function parseQuery(soql: string, options?: ParseQueryConfig): Query`

**ParseQueryConfig**

- `allowPartialQuery?: boolean;` - If provided, you can provide an incomplete soql query. This is useful if you need to parse WHERE clauses, for example. Subqueries are required to be valid.
- `allowApexBindVariables?: boolean;` - Determines if apex variables are allowed in parsed query. Example: `WHERE Id IN :accountIds`. Only simple Apex is supported. Function calls are not supported. (e.x. `accountMap.keyset()` is not supported)
- `ignoreParseErrors?: boolean;` - If set to true, then queries with partially invalid syntax will still be parsed, but any clauses with invalid parts will be omitted. The SELECT clause and FROM clause must always be valid, but all other clauses can contain invalid parts.
- `logErrors?: boolean;` - If true, parsing and lexing errors will be logged to the console.

### ComposeQuery

`function composeQuery(soql: Query, config?: Partial<SoqlComposeConfig>): string`

- `format?: boolean` - Apply formatting the the composed query. This will result in a multi-line soql statement.
- `formatOptions?: boolean` - Only applies if `format` is set to true. Options to apply to the formatter.
  - `numIndent: number` - Number of tabs to indent on new lines.
  - `fieldMaxLineLength: number` - Number of characters before wrapping fields.
  - `fieldSubqueryParensOnOwnLine: boolean` - If true and the query includes a subquery, parentheses will be on their own line .
  - `whereClauseOperatorsIndented: boolean` - If true, operators (such as `=` or `IN`) in WHERE clauses will be inputted on their own line.
  - `newLineAfterKeywords: boolean` - If true, a new line will be inserted after keywords
  - `logging: boolean`
- `autoCompose?: boolean` - (superseded by `allowPartialQuery`, you normally don't need to change this setting.) If you need to compose just part of a query, you can create your own instance of the Compose class and set this to false, then call any methods that you need to just for what you would like to turn into a SOQL query.
- `logging?: boolean` - Print out logging statements to the console about the format operation.

### IsQueryValid

Return a boolean if the query was able to be parsed. Same options as `parseQuery`.

`function isQueryValid(soql: string, options?: ParseQueryConfig): boolean`

### FormatQuery

Format a provided query. This parses the query then composes the query again to apply formatting.

`function formatQuery(soql: string, formatOptions?: FormatOptions, parseOptions?: ParseQueryConfig): string`

## Utility

Refer to the [playground](/playground) for usage examples.

#### `getFlattenedFields(value)`

Turn a query object into a list of fields using dot notation. This is useful if you want to flatten a Salesforce record and display in a table, this function will provide the fields based on the query.

#### `getField(value)`

Helper function easily get a a field for a compose function

`function getField(input: string | ComposeFieldInput): SoqlModels.FieldType`

```typescript
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
```

#### Other utility functions

The following functions are generally useful for typescript type narrowing.

These are used internally in the compose function but can be used to aid in processing a query object.

- `hasAlias(value)`
- `isSubquery(value)`
- `isFieldSubquery(value)`
- `isWhereClauseWithRightCondition(value)`
- `isHavingClauseWithRightCondition(value)`
- `isWhereOrHavingClauseWithRightCondition(value)`
- `isValueCondition(value)`
- `isValueWithDateLiteralCondition(value)`
- `isValueWithDateNLiteralCondition(value)`
- `isValueFunctionCondition(value)`
- `isNegationCondition(value)`
- `isValueQueryCondition(value)`
- `isOrderByField(value)`
- `isOrderByFn(value)`
- `isGroupByField(value)`
- `isGroupByFn(value)`
