# Replace Chevrotain with Hand-Rolled Recursive Descent Parser

## Context

The SOQL parser library currently uses chevrotain (~500KB bundled) for lexing, parsing (CST generation), and CST-to-AST visitor transformation. This is a 3-pass pipeline: `SOQL → Tokens → CST → AST`. We want to replace it with a hand-rolled recursive descent parser that produces the AST directly in 2 passes: `SOQL → Tokens → AST`. This eliminates the entire CST intermediate layer and the visitor, yielding better performance, smaller bundle size, and zero runtime dependencies (besides `commander` for the CLI).

This is a **semver major** release since we're dropping 4 re-exported chevrotain types from the public API.

## Architecture Overview

### What changes
| File | Action | Lines (current) |
|---|---|---|
| `src/parser/lexer.ts` | **Rewrite** - Hand-rolled tokenizer | 1,074 |
| `src/parser/parser.ts` | **Rewrite** - Recursive descent parser with direct AST output | 861 |
| `src/parser/visitor.ts` | **Delete** - Logic absorbed into parser.ts | 993 |
| `src/models.ts` | **Delete** - Chevrotain CST context types, no longer needed | 331 |
| `src/utils.ts` | **Update** - Remove chevrotain import + `isToken()` | minor |
| `src/index.ts` | **Update** - Remove chevrotain re-exports, update import paths | minor |
| `src/composer/composer.ts` | **Update** - Change `import { parseQuery }` path from `visitor` to `parser` | 1 line |
| `package.json` | **Update** - Remove `chevrotain`, `lodash.get` from dependencies | minor |
| `test/test.spec.ts` | **Update** - Change `isQueryValid` import from `visitor` to `parser` | 1 line |

### What stays unchanged (the compatibility contract)
- `src/api/api-models.ts` - All AST output types (Query, Subquery, Field*, Condition*, etc.)
- `src/api/public-utils.ts` - Utility functions (getField, getFlattenedFields, type guards)
- `src/composer/composer.ts` - AST-to-SOQL composition (only import path changes)
- `src/formatter/formatter.ts` - Pretty-printing
- All test case data files (131 parse cases, 161 validity cases, 18 format cases, etc.)

---

## Phase 1: Lexer (`src/parser/lexer.ts`)

### Token Representation
```typescript
const enum TokenKind {
  // Keywords, operators, symbols, literals, identifiers
  // ~150 members, arranged contiguously by category for fast range checks
  SELECT, FROM, WHERE, AND, OR, NOT, /* ...all keywords... */
  EQUAL, NOT_EQUAL, LT, GT, LTE, GTE, /* operators */
  L_PAREN, R_PAREN, DOT, COMMA, COLON, /* symbols */
  UNSIGNED_INTEGER, SIGNED_INTEGER, /* ...numeric types... */
  STRING_LITERAL, DATETIME, DATE, IDENTIFIER, EOF
}

interface Token {
  kind: TokenKind;
  text: string;     // original matched text
  start: number;    // offset in source
}
```

Using `const enum` for TokenKind compiles to integer literals - token kind checks become integer comparisons instead of object identity checks.

### Tokenization Algorithm
Single-pass character scanner (`tokenize(input: string): Token[]`):
1. Skip whitespace (no token emitted)
2. Match in priority order:
   - Multi-char operators first: `!=`, `<>`, `<=`, `>=`
   - Single-char symbols: `(`, `)`, `[`, `]`, `,`, `:`, `;`, `*`, `+`, `-`, `.`, `=`, `<`, `>`
   - String literal: `'...'` with `\\` escape handling
   - Numbers: unsigned integer/decimal only at lexer level (signed numbers handled in parser by combining MINUS + number)
   - Currency-prefixed numbers: 3 alpha chars + digits (before identifier matching since they start with alpha)
   - DateTime: `\d{4}-\d{2}-\d{2}T...` (attempt before Date)
   - Date: `\d{4}-\d{2}-\d{2}` (only if not followed by `T`)
   - Identifiers/Keywords: `[a-zA-Z][a-zA-Z0-9_]*` with optional dot-separated parts (no `..`). After matching, case-insensitive lookup in keyword `Map<string, TokenKind>`

3. Multi-word keywords: After matching `ORDER`/`GROUP`, peek ahead for whitespace + `BY`. If found, emit single `ORDER_BY`/`GROUP_BY` token. Same for `NOT IN` and `DATA CATEGORY`.

### Category Helpers (replace chevrotain token categories)
```typescript
function isDateFunction(kind: TokenKind): boolean { /* range check */ }
function isAggregateFunction(kind: TokenKind): boolean { /* range check */ }
function isIdentifierLike(kind: TokenKind): boolean { /* IDENTIFIER or any non-reserved keyword */ }
// etc.
```

### Exports
`TokenKind`, `Token`, `tokenize()`, category helper functions

---

## Phase 2: Parser (`src/parser/parser.ts`)

### Structure
```typescript
class SoqlParser {
  private tokens: Token[];
  private pos: number;
  private config: ParseQueryConfig;

  // Navigation helpers
  private peek(): Token
  private advance(): Token
  private expect(kind: TokenKind): Token
  private match(kind: TokenKind): boolean
  private check(kind: TokenKind): boolean
  private isAtEnd(): boolean

  // ~30 parse methods, each directly returning AST nodes
}
```

### Grammar Rule → Method Mapping

Each parse method directly constructs and returns the AST types from `api-models.ts`:

**Entry points:**
- `parseSelectStatement()` → `Query | Subquery`
- `parseSelectStatementPartial()` → `Query` (partial, with optional SELECT/FROM)

**SELECT clause:**
- `parseSelectClause()` → `FieldType[]`
- `parseSelectField()` → `FieldType` (disambiguates via 2-token lookahead: function name + `(` = function call, `(` + SELECT = subquery, TYPEOF = typeof, else identifier)
- `parseSelectClauseFunctionIdentifier()` → `FieldFunctionExpression`
- `parseSelectClauseSubqueryIdentifier()` → `FieldSubquery`
- `parseSelectClauseTypeOf()` → `FieldTypeOf`
- `parseSelectClauseIdentifier()` → `Field | FieldWithAlias | FieldRelationship | FieldRelationshipWithAlias`

**FROM clause:**
- `parseFromClause()` → `{ sObject, alias?, sObjectPrefix? }`
- Alias disambiguation: don't consume next token as alias if it's `OFFSET <number>` (the OFFSET clause)

**WHERE/HAVING (most complex area):**
- `parseWhereClause()` → `WhereClause` (right-recursive linked list)
- `parseConditionExpression()` → chain of conditions linked by AND/OR
- `parseExpression()` → individual `Condition` with `openParen`/`closeParen` counts
- Parenthesis tracking via mutable counter passed through parse methods
- NOT/negation: consume `NOT` prefix, track as `WhereClauseWithoutNegationOperator`

**Operators:**
- `parseRelationalOperator()` → `=`, `!=`, `<`, `>`, `<=`, `>=`, `LIKE`
- `parseSetOperator()` → `IN`, `NOT IN`, `INCLUDES`, `EXCLUDES`

**Values:**
- `parseAtomicExpression()` → `{ value, literalType, dateLiteralVariable? }`
- Handles: strings, numbers (combining MINUS + unsigned if needed), booleans, null, dates, date literals, date N-literals with `:N`, apex bind variables, subqueries
- `parseArrayExpression()` → array of values for IN/INCLUDES/EXCLUDES

**Functions:**
- `parseDateFunction()` → `FunctionExp | FieldFunctionExpression`
- `parseAggregateFunction()` → `FunctionExp | FieldFunctionExpression`
- `parseLocationFunction()` → handles DISTANCE(field, GEOLOCATION(...), unit)
- `parseOtherFunction()` → FORMAT, TOLABEL, CONVERTTIMEZONE, CONVERTCURRENCY, GROUPING
- `parseFieldsFunction()` → FIELDS(ALL|CUSTOM|STANDARD)
- `parseFunctionExpression()` → recursive parameter parsing (functions can nest)

**Other clauses:**
- `parseGroupByClause()` → `GroupByClause[]` (handles CUBE, ROLLUP, date functions, fields)
- `parseHavingClause()` → `HavingClause` (same linked-list structure as WHERE)
- `parseOrderByClause()` → `OrderByClause[]` (field or function, ASC/DESC, NULLS FIRST/LAST)
- `parseWithClause()` → `SECURITY_ENFORCED | USER_MODE | SYSTEM_MODE | DATA CATEGORY`
- `parseLimitClause()` → `number`
- `parseOffsetClause()` → `number`
- `parseUsingScopeClause()` → `string`
- `parseForViewOrReference()` → `ForClause`
- `parseUpdateTrackingViewstat()` → `UpdateClause`

**Apex bind variables (when `allowApexBindVariables` is true):**
- `parseApexBindVariableExpression()` → string representation
- Handles: `:varName`, `:obj.field`, `:new Class<T>().method()[0].field`, `:fn(args)`

### Error Handling

**Normal mode:** Throw `Error` with descriptive message including expected vs actual token.

**`ignoreParseErrors` mode:** Wrap each clause-level parse in try-catch. On error, call `synchronize()` which advances to the next clause keyword (WHERE, ORDER, GROUP, HAVING, LIMIT, OFFSET, FOR, UPDATE, WITH, USING) or EOF.

**`logErrors` mode:** `console.log` errors before throwing.

### Exports
`parseQuery()`, `isQueryValid()`, `ParseQueryConfig` interface

---

## Phase 3: Integration & Cleanup

1. **Update `src/index.ts`:**
   - Change: `export { parseQuery, isQueryValid } from './parser/parser'` (was `./parser/visitor`)
   - Remove: `export type { CstNode, CstParser, ILexingError, IRecognitionException } from 'chevrotain'`
   - Keep all other exports unchanged

2. **Update `src/utils.ts`:**
   - Remove `import { IToken } from 'chevrotain'`
   - Remove `isToken()` function (only used by deleted visitor.ts)

3. **Update `src/composer/composer.ts`:**
   - Change import: `from '../parser/visitor'` → `from '../parser/parser'`

4. **Delete files:**
   - `src/parser/visitor.ts`
   - `src/models.ts`

5. **Update `package.json`:**
   - Remove from dependencies: `chevrotain`, `lodash.get`
   - Move `lodash.get` to devDependencies (still used in test/public-utils.spec.ts)
   - Remove from devDependencies: `@types/lodash.get`

6. **Update test imports:**
   - `test/test.spec.ts`: change `isQueryValid` import from `../src/parser/visitor` to `../src/parser/parser`

---

## Phase 4: Verification

1. **Run full test suite:** `npm test` - all 330+ tests must pass
2. **Run build:** `npm run build` - verify all 5 build targets (ESM, CJS, LWC, CLI, declarations)
3. **Bundle size comparison:**
   - Current CJS: ~190KB minified, ESM: ~427KB
   - Target: ~30-50KB CJS, ~80-120KB ESM (60-80% reduction)
4. **Performance benchmark:** Un-skip `test/performance-test.spec.ts`, run 131 queries x 1000 iterations, compare against baseline (run baseline first on current code)

---

## Agent Delegation Strategy

### Agent 1: Lexer
- Build complete `src/parser/lexer.ts`
- All token types, tokenizer, category helpers
- Can be tested independently by tokenizing the 131 test case SOQL strings
- ~400-500 lines

### Agent 2: Parser (depends on Agent 1)
- Build complete `src/parser/parser.ts`
- All ~30 parse methods producing AST directly
- Reference `src/api/api-models.ts` for exact output types
- Reference current `src/parser/parser.ts` (grammar rules) and `src/parser/visitor.ts` (AST construction logic) for behavior
- ~900-1100 lines

### Agent 3: Integration & Testing (depends on Agent 2)
- Wire up all imports, delete old files, update package.json
- Run tests, fix failures iteratively
- Performance benchmark

### Agent 4: (if needed) Fix remaining test failures
- Targeted fixes based on specific failing test cases

---

## Key Design Decisions

1. **Signed numbers handled in parser, not lexer** - Avoids lexer context-sensitivity. Parser combines `MINUS` + `UNSIGNED_INTEGER` when in value position.
2. **Multi-word keywords combined in lexer** - `ORDER BY`, `GROUP BY`, `NOT IN`, `DATA CATEGORY` emitted as single tokens for simpler parser logic.
3. **Non-reserved keywords lexed as keyword kinds** - Parser uses `isIdentifierLike()` to accept them where identifiers are expected.
4. **No intermediate CST** - Parser directly constructs `api-models.ts` types, eliminating an entire transformation pass.
5. **Re-usable parser instance** - Module-level instance, reset state per parse call (matches current pattern).

## Critical Files Reference
- `src/api/api-models.ts` - **THE** contract. Every AST type the parser must produce.
- `test/test-cases.ts` - 131 test cases with exact expected AST output. The compatibility oracle.
- `src/parser/parser.ts` (current) - Grammar rules to replicate.
- `src/parser/visitor.ts` (current) - AST construction logic to absorb into new parser.
- `src/parser/lexer.ts` (current) - Token universe to replicate.
