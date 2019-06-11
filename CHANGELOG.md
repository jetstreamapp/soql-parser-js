# Changelog

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
