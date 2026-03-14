import {
  ConditionWithValueQuery,
  Field,
  FieldFunctionExpression,
  FieldRelationship,
  FieldRelationshipWithAlias,
  FieldSubquery,
  FieldType,
  FieldTypeOf,
  FieldTypeOfCondition,
  FieldWithAlias,
  ForClause,
  FunctionExp,
  GroupByClause,
  GroupSelector,
  HavingClause,
  LiteralType,
  NullsOrder,
  OrderByClause,
  OrderByCriterion,
  Query,
  Subquery,
  UpdateClause,
  WhereClause,
  WithDataCategoryCondition,
} from '../api/api-models';
import {
  Token,
  TokenKind,
  isAggregateFunction,
  isDateFunction,
  isDateLiteral,
  isDateNLiteral,
  isFieldsFunction,
  isFieldsFunctionParam,
  isIdentifierLike,
  isLocationFunction,
  isNumberLiteral,
  isOtherFunction,
  isRelationalOperator,
  isUsingScopeEnumeration,
  tokenTypeName,
  tokenize,
} from './lexer';

export interface ParseQueryConfig {
  allowPartialQuery?: boolean;
  allowApexBindVariables?: boolean;
  ignoreParseErrors?: boolean;
  logErrors?: boolean;
}

// ---- Clause-starting keywords that cannot be aliases ----
const CLAUSE_KEYWORDS = new Set<TokenKind>([
  TokenKind.SELECT,
  TokenKind.FROM,
  TokenKind.WHERE,
  TokenKind.ORDER_BY,
  TokenKind.GROUP_BY,
  TokenKind.HAVING,
  TokenKind.LIMIT,
  TokenKind.WITH,
  TokenKind.FOR,
  TokenKind.UPDATE,
  TokenKind.USING,
  TokenKind.NULLS,
  TokenKind.ASC,
  TokenKind.DESC,
  TokenKind.AND,
  TokenKind.OR,
  TokenKind.NOT,
  TokenKind.WHEN,
  TokenKind.THEN,
  TokenKind.ELSE,
  TokenKind.END,
  TokenKind.TYPEOF,
  TokenKind.COMMA,
  TokenKind.R_PAREN,
  TokenKind.EOF,
]);

class SoqlParser {
  private tokens: Token[] = [];
  private pos: number = 0;
  private config: ParseQueryConfig = {};

  init(tokens: Token[], config: ParseQueryConfig): void {
    this.tokens = tokens;
    this.pos = 0;
    this.config = config;
  }

  getPos(): number {
    return this.pos;
  }

  // ---- Navigation helpers ----

  private peek(): Token {
    return this.tokens[this.pos];
  }

  private peekAt(offset: number): Token {
    const idx = this.pos + offset;
    if (idx >= this.tokens.length) {
      return this.tokens[this.tokens.length - 1]; // EOF
    }
    return this.tokens[idx];
  }

  private advance(): Token {
    const t = this.tokens[this.pos];
    if (t.kind !== TokenKind.EOF) {
      this.pos++;
    }
    return t;
  }

  private expect(kind: TokenKind): Token {
    const t = this.peek();
    if (t.kind !== kind) {
      throw this.error(`Expected ${TokenKind[kind]} but found ${TokenKind[t.kind]} ("${t.text}") at position ${t.start}`);
    }
    return this.advance();
  }

  private match(kind: TokenKind): boolean {
    if (this.peek().kind === kind) {
      this.advance();
      return true;
    }
    return false;
  }

  private check(kind: TokenKind): boolean {
    return this.peek().kind === kind;
  }

  isAtEnd(): boolean {
    return this.peek().kind === TokenKind.EOF;
  }

  private error(message: string): Error {
    if (this.config.logErrors) {
      console.log(message);
    }
    return new Error(message);
  }

  private static CLAUSE_BOUNDARY_KINDS = new Set<TokenKind>([
    TokenKind.WHERE,
    TokenKind.ORDER_BY,
    TokenKind.GROUP_BY,
    TokenKind.HAVING,
    TokenKind.LIMIT,
    TokenKind.OFFSET,
    TokenKind.WITH,
    TokenKind.FOR,
    TokenKind.UPDATE,
    TokenKind.USING,
    TokenKind.EOF,
  ]);

  private isAtClauseBoundary(): boolean {
    const k = this.peek().kind;
    return SoqlParser.CLAUSE_BOUNDARY_KINDS.has(k) || k === TokenKind.R_PAREN;
  }

  private synchronize(): void {
    while (!this.isAtEnd()) {
      if (this.isAtClauseBoundary()) return;
      this.advance();
    }
  }

  // ---- Identifier consumption ----
  // Consumes an identifier token. In SOQL many keywords can appear as identifiers.
  // The lexer produces specific TokenKind for keywords; we accept anything that isIdentifierLike.
  private consumeIdentifier(): Token {
    const t = this.peek();
    if (isIdentifierLike(t.kind)) {
      return this.advance();
    }
    throw this.error(`Expected identifier but found ${TokenKind[t.kind]} ("${t.text}") at position ${t.start}`);
  }

  // Check if the current token can be treated as an identifier
  private checkIdentifier(): boolean {
    return isIdentifierLike(this.peek().kind);
  }

  // ---- Check if next token is a function name followed by ( ----
  private isFunctionCall(): boolean {
    const t = this.peek();
    const next = this.peekAt(1);
    return (
      (isDateFunction(t.kind) ||
        isAggregateFunction(t.kind) ||
        isLocationFunction(t.kind) ||
        isFieldsFunction(t.kind) ||
        isOtherFunction(t.kind)) &&
      next.kind === TokenKind.L_PAREN
    );
  }

  // ---- Check if current token could be an alias ----
  // An alias is an identifier-like token that is NOT a clause keyword,
  // and NOT OFFSET followed by an unsigned integer.
  private canBeAlias(): boolean {
    const t = this.peek();
    if (!isIdentifierLike(t.kind)) return false;
    if (CLAUSE_KEYWORDS.has(t.kind)) return false;
    // OFFSET gate: if current is OFFSET and next is unsigned integer, it's a clause not an alias
    if (t.kind === TokenKind.OFFSET && this.peekAt(1).kind === TokenKind.UNSIGNED_INTEGER) return false;
    return true;
  }

  // ---- Literal type detection ----
  private getLiteralType(kind: TokenKind): LiteralType {
    const name = tokenTypeName(kind);
    if (name === 'UNSIGNED_INTEGER' || name === 'SIGNED_INTEGER') return 'INTEGER';
    if (name === 'UNSIGNED_DECIMAL' || name === 'SIGNED_DECIMAL') return 'DECIMAL';
    if (name === 'CURRENCY_PREFIXED_DECIMAL') return 'DECIMAL_WITH_CURRENCY_PREFIX';
    if (name === 'CURRENCY_PREFIXED_INTEGER') return 'INTEGER_WITH_CURRENCY_PREFIX';
    if (name === 'DATETIME') return 'DATETIME';
    if (name === 'DATE') return 'DATE';
    if (name === 'NULL') return 'NULL';
    if (name === 'StringIdentifier') return 'STRING';
    if (name === 'Identifier') return 'STRING';
    if (name === 'TRUE' || name === 'FALSE') return 'BOOLEAN';
    if (isDateLiteral(kind)) return 'DATE_LITERAL';
    if (isDateNLiteral(kind)) return 'DATE_N_LITERAL';
    return 'STRING';
  }

  // ====================================================================
  // Entry Points
  // ====================================================================

  parseSelectStatement(isSubquery: boolean = false): Query | Subquery {
    const fields = this.parseSelectClause();
    const fromResult = this.parseFromClause();

    let query: any;
    if (isSubquery) {
      query = {
        fields,
        relationshipName: fromResult.sObject,
      } as any;
      if (fromResult.sObjectPrefix) {
        query.sObjectPrefix = fromResult.sObjectPrefix;
      }
    } else {
      query = {
        fields,
        sObject: fromResult.sObject,
      } as any;
    }
    if (fromResult.alias) {
      query.sObjectAlias = fromResult.alias;
    }

    // Apply sObjectAlias prefix adjustments to fields
    this.applySObjectAlias(query);

    // Parse remaining clauses
    const clauses = this.parseClauseStatements();
    Object.assign(query, clauses);

    return query;
  }

  parseSelectStatementPartial(): Query {
    let fields: FieldType[] | undefined;
    let fromResult: { sObject: string; alias?: string; sObjectPrefix?: string[] } | undefined;

    // SELECT is optional
    if (this.check(TokenKind.SELECT)) {
      fields = this.parseSelectClause();
    }

    // FROM is optional
    if (this.check(TokenKind.FROM)) {
      fromResult = this.parseFromClause();
    }

    const query: any = {};
    if (fields) {
      query.fields = fields;
    }
    if (fromResult) {
      query.sObject = fromResult.sObject;
      if (fromResult.alias) {
        query.sObjectAlias = fromResult.alias;
      }
    }

    // Apply sObjectAlias prefix adjustments
    if (query.fields) {
      this.applySObjectAlias(query);
    }

    const clauses = this.parseClauseStatements();
    Object.assign(query, clauses);

    return query;
  }

  private applySObjectAlias(query: any): void {
    if (!query.sObjectAlias || !Array.isArray(query.fields)) return;
    const alias = query.sObjectAlias;
    query.fields.forEach((field: any) => {
      if (field.relationships && field.relationships[0] === alias) {
        field.relationships = field.relationships.slice(1);
        field.objectPrefix = alias;
        if (field.relationships.length === 0) {
          delete field.relationships;
          field.type = 'Field';
        }
      }
    });
  }

  // ====================================================================
  // SELECT Clause
  // ====================================================================

  private parseSelectClause(): FieldType[] {
    this.expect(TokenKind.SELECT);
    const fields: FieldType[] = [];
    fields.push(this.parseSelectField());
    while (this.match(TokenKind.COMMA)) {
      fields.push(this.parseSelectField());
    }
    return fields;
  }

  private parseSelectField(): FieldType {
    const t = this.peek();
    const next = this.peekAt(1);

    // Subquery: ( SELECT ...
    if (t.kind === TokenKind.L_PAREN && next.kind === TokenKind.SELECT) {
      return this.parseSelectClauseSubqueryIdentifier();
    }

    // TYPEOF
    if (t.kind === TokenKind.TYPEOF) {
      return this.parseSelectClauseTypeOf();
    }

    // Function call
    if (this.isFunctionCall()) {
      return this.parseSelectClauseFunctionIdentifier();
    }

    // Plain identifier (possibly dot-separated)
    return this.parseSelectClauseIdentifier();
  }

  private parseSelectClauseFunctionIdentifier(): FieldFunctionExpression {
    const fn = this.parseAnyFunction(true) as FieldFunctionExpression;

    // Optional alias
    if (this.canBeAlias()) {
      fn.alias = this.consumeIdentifier().text;
    }

    return fn;
  }

  private parseSelectClauseSubqueryIdentifier(): FieldSubquery {
    this.expect(TokenKind.L_PAREN);
    const subquery = this.parseSelectStatement(true) as Subquery;
    this.expect(TokenKind.R_PAREN);
    return {
      type: 'FieldSubquery',
      subquery,
    };
  }

  private parseSelectClauseTypeOf(): FieldTypeOf {
    this.expect(TokenKind.TYPEOF);
    const field = this.consumeIdentifier().text;
    const conditions: FieldTypeOfCondition[] = [];

    // At least one WHEN ... THEN ...
    while (this.check(TokenKind.WHEN)) {
      this.advance(); // consume WHEN
      const objectType = this.consumeIdentifier().text;
      this.expect(TokenKind.THEN);
      const fieldList: string[] = [];
      fieldList.push(this.consumeIdentifier().text);
      while (this.match(TokenKind.COMMA)) {
        fieldList.push(this.consumeIdentifier().text);
      }
      conditions.push({ type: 'WHEN', objectType, fieldList });
    }

    // Optional ELSE
    if (this.check(TokenKind.ELSE)) {
      this.advance();
      const fieldList: string[] = [];
      fieldList.push(this.consumeIdentifier().text);
      while (this.match(TokenKind.COMMA)) {
        fieldList.push(this.consumeIdentifier().text);
      }
      conditions.push({ type: 'ELSE', fieldList });
    }

    this.expect(TokenKind.END);

    return {
      type: 'FieldTypeof',
      field,
      conditions,
    };
  }

  private parseSelectClauseIdentifier(): Field | FieldWithAlias | FieldRelationship | FieldRelationshipWithAlias {
    const idToken = this.consumeIdentifier();
    const fullText = idToken.text;

    let output: any;
    if (!fullText.includes('.')) {
      output = {
        type: 'Field' as const,
        field: fullText,
      };
    } else {
      const parts = fullText.split('.');
      output = {
        type: 'FieldRelationship' as const,
        field: parts[parts.length - 1],
        relationships: parts.slice(0, parts.length - 1),
        rawValue: fullText,
      };
    }

    // Optional alias
    if (this.canBeAlias()) {
      output.alias = this.consumeIdentifier().text;
    }

    return output;
  }

  // ====================================================================
  // FROM Clause
  // ====================================================================

  private parseFromClause(): { sObject: string; alias?: string; sObjectPrefix?: string[] } {
    this.expect(TokenKind.FROM);
    const idToken = this.consumeIdentifier();
    const fullText = idToken.text;

    let result: any;
    if (fullText.includes('.')) {
      const parts = fullText.split('.');
      result = {
        sObjectPrefix: parts.slice(0, parts.length - 1),
        sObject: parts[parts.length - 1],
      };
    } else {
      result = { sObject: fullText };
    }

    // Optional alias with OFFSET gate
    if (this.canBeAlias()) {
      result.alias = this.consumeIdentifier().text;
    }

    return result;
  }

  // ====================================================================
  // Clause Statements (everything after FROM)
  // ====================================================================

  private parseClauseStatements(): Partial<Query> {
    const query: any = {};

    const tryParse = (fn: () => void, cleanup?: () => void) => {
      if (this.config.ignoreParseErrors) {
        const savedPos = this.pos;
        try {
          fn();
          // After successful parse, check if we're at a valid clause boundary.
          // If not, the parse consumed too little and left unexpected tokens - treat as error.
          if (!this.isAtClauseBoundary()) {
            if (cleanup) cleanup();
            this.synchronize();
          }
        } catch (e) {
          if (this.config.logErrors) {
            console.log(e);
          }
          if (cleanup) cleanup();
          this.pos = savedPos;
          this.synchronize();
        }
      } else {
        fn();
      }
    };

    // USING SCOPE
    if (this.check(TokenKind.USING)) {
      tryParse(() => {
        query.usingScope = this.parseUsingScope();
      });
    }

    // WHERE
    if (this.check(TokenKind.WHERE)) {
      tryParse(
        () => {
          query.where = this.parseWhereClause();
        },
        () => {
          delete query.where;
        },
      );
    }

    // WITH (can appear multiple times)
    while (this.check(TokenKind.WITH)) {
      tryParse(() => {
        const withResult = this.parseWithClause();
        if (withResult.withSecurityEnforced) {
          query.withSecurityEnforced = true;
        }
        if (withResult.withAccessLevel) {
          query.withAccessLevel = withResult.withAccessLevel;
        }
        if (withResult.withDataCategory) {
          query.withDataCategory = withResult.withDataCategory;
        }
      });
    }

    // GROUP BY
    if (this.check(TokenKind.GROUP_BY)) {
      tryParse(() => {
        query.groupBy = this.parseGroupByClause();
      });

      // HAVING (only after GROUP BY)
      if (this.check(TokenKind.HAVING)) {
        tryParse(() => {
          query.having = this.parseHavingClause();
        });
      }
    }

    // ORDER BY
    if (this.check(TokenKind.ORDER_BY)) {
      tryParse(() => {
        query.orderBy = this.parseOrderByClause();
      });
    }

    // LIMIT
    if (this.check(TokenKind.LIMIT)) {
      tryParse(() => {
        this.advance();
        query.limit = Number(this.expect(TokenKind.UNSIGNED_INTEGER).text);
      });
    }

    // OFFSET
    if (this.check(TokenKind.OFFSET)) {
      tryParse(() => {
        this.advance();
        query.offset = Number(this.expect(TokenKind.UNSIGNED_INTEGER).text);
      });
    }

    // FOR VIEW|REFERENCE|UPDATE
    if (this.check(TokenKind.FOR)) {
      tryParse(() => {
        this.advance();
        const t = this.peek();
        if (t.kind === TokenKind.VIEW || t.kind === TokenKind.REFERENCE || t.kind === TokenKind.UPDATE) {
          query.for = tokenTypeName(this.advance().kind) as ForClause;
        } else {
          throw this.error(`Expected VIEW, REFERENCE, or UPDATE after FOR at position ${t.start}`);
        }
      });
    }

    // UPDATE TRACKING|VIEWSTAT
    if (this.check(TokenKind.UPDATE)) {
      tryParse(() => {
        this.advance();
        const t = this.peek();
        if (t.kind === TokenKind.TRACKING || t.kind === TokenKind.VIEWSTAT) {
          query.update = tokenTypeName(this.advance().kind) as UpdateClause;
        } else {
          throw this.error(`Expected TRACKING or VIEWSTAT after UPDATE at position ${t.start}`);
        }
      });
    }

    return query;
  }

  // ====================================================================
  // USING SCOPE
  // ====================================================================

  private parseUsingScope(): string {
    this.expect(TokenKind.USING);
    this.expect(TokenKind.SCOPE);
    const t = this.peek();
    if (isUsingScopeEnumeration(t.kind)) {
      return this.advance().text;
    }
    // Also accept plain identifiers as scope values
    if (isIdentifierLike(t.kind)) {
      return this.advance().text;
    }
    throw this.error(`Expected scope enumeration value at position ${t.start}`);
  }

  // ====================================================================
  // WHERE Clause
  // ====================================================================

  private parseWhereClause(): WhereClause {
    this.expect(TokenKind.WHERE);
    return this.parseConditionExpressions(true, true);
  }

  private parseConditionExpressions(allowAggregateFn: boolean, allowLocationFn: boolean): WhereClause {
    let expressionTree: WhereClause | undefined;
    let prevExpression: any;
    // Track paren balance to avoid consuming R_PARENs that belong to an outer context (e.g., subquery wrapper)
    const parenCount = { left: 0, right: 0 };

    while (true) {
      // Check for logical operator (AND/OR) - required between expressions (except the first)
      let logicalOp: string | undefined;
      if (expressionTree) {
        if (this.check(TokenKind.AND)) {
          logicalOp = 'AND';
          this.advance();
        } else if (this.check(TokenKind.OR)) {
          logicalOp = 'OR';
          this.advance();
        } else {
          break;
        }
      }

      // Handle negation prefix(es): optional parens then NOT
      let baseExpression: any = {};
      let currExpression: any = baseExpression;
      let parentForRight: any = null;

      // Parse negation chains: (( NOT expression, NOT (NOT expression), etc.
      while (this.hasNegationPrefix()) {
        let openParenCount = 0;
        while (this.check(TokenKind.L_PAREN) && this.isNegationAhead()) {
          this.advance();
          openParenCount++;
          parenCount.left++;
        }

        if (this.check(TokenKind.NOT)) {
          this.advance();
          const negation: any = {
            left: openParenCount > 0 ? { openParen: openParenCount } : null,
            operator: 'NOT',
            right: { left: {} as any },
          };
          if (!parentForRight) {
            // First negation
            baseExpression = negation;
          } else {
            // Subsequent negation: replace parent's right
            parentForRight.right = negation;
          }
          parentForRight = negation;
          currExpression = negation.right;
        } else {
          break;
        }
      }

      // Parse the expression (LHS operator RHS)
      currExpression.left = this.parseExpression(allowAggregateFn, allowLocationFn, parenCount);

      if (!expressionTree) {
        expressionTree = baseExpression;
        prevExpression = baseExpression;
      } else {
        if (logicalOp) {
          prevExpression.operator = logicalOp;
          prevExpression.right = baseExpression;
        }
      }

      // Find the last expression in the chain (negation may produce nested chains)
      let temp: any = baseExpression;
      while (temp.right && temp.right.left !== undefined) {
        const r = temp.right;
        if (r.right && r.right.left !== undefined) {
          temp = r;
        } else {
          temp = r;
          break;
        }
      }
      prevExpression = temp;

      // Check if we should continue
      if (this.isAtEnd()) break;
      const nextKind = this.peek().kind;
      if (nextKind !== TokenKind.AND && nextKind !== TokenKind.OR) break;
    }

    // Verify balanced parens
    if (parenCount.left !== parenCount.right) {
      throw this.error(`Mismatched parentheses in WHERE/HAVING clause: ${parenCount.left} open vs ${parenCount.right} close`);
    }

    return expressionTree!;
  }

  // Check if there's a negation pattern ahead (possible parens then NOT then expression)
  private hasNegationPrefix(): boolean {
    let offset = 0;
    while (this.peekAt(offset).kind === TokenKind.L_PAREN) {
      offset++;
    }
    return this.peekAt(offset).kind === TokenKind.NOT;
  }

  // Check if after some L_PARENs there is a NOT keyword
  private isNegationAhead(): boolean {
    let offset = 1; // start after the current L_PAREN
    while (this.peekAt(offset).kind === TokenKind.L_PAREN) {
      offset++;
    }
    return this.peekAt(offset).kind === TokenKind.NOT;
  }

  // ====================================================================
  // Expression (WHERE/HAVING condition)
  // ====================================================================

  private parseExpression(
    allowAggregateFn: boolean,
    allowLocationFn: boolean,
    parenCount?: { left: number; right: number },
  ): ConditionWithValueQuery {
    // Count left parens
    let openParenCount = 0;
    while (this.check(TokenKind.L_PAREN) && !this.isSubqueryStart() && !this.isArrayExpressionStart()) {
      this.advance();
      openParenCount++;
      if (parenCount) parenCount.left++;
    }

    // Parse LHS: function or identifier
    let lhs: any;
    let isLhsFn = false;

    if (allowAggregateFn && isAggregateFunction(this.peek().kind) && this.peekAt(1).kind === TokenKind.L_PAREN) {
      lhs = this.parseAggregateFunction(false);
      isLhsFn = true;
    } else if (
      allowLocationFn &&
      isLocationFunction(this.peek().kind) &&
      this.peek().kind === TokenKind.DISTANCE &&
      this.peekAt(1).kind === TokenKind.L_PAREN
    ) {
      lhs = this.parseLocationFunction(false);
      isLhsFn = true;
    } else if (isDateFunction(this.peek().kind) && this.peekAt(1).kind === TokenKind.L_PAREN) {
      lhs = this.parseDateFunction(false);
      isLhsFn = true;
    } else if (isOtherFunction(this.peek().kind) && this.peekAt(1).kind === TokenKind.L_PAREN) {
      lhs = this.parseOtherFunction(false);
      isLhsFn = true;
    } else {
      lhs = this.consumeIdentifier().text;
    }

    // Parse operator
    const operatorResult = this.parseOperator();
    const operator: string = operatorResult.operator;
    const isSetOperator = operatorResult.isSet;

    // Parse RHS
    let value: any;
    let literalType: any;
    let dateLiteralVariable: any;

    if (isSetOperator) {
      // Set operator: parse array or subquery
      if (this.check(TokenKind.L_PAREN) && this.peekAt(1).kind === TokenKind.SELECT) {
        // Subquery
        this.expect(TokenKind.L_PAREN);
        value = this.parseSelectStatement(false) as Query;
        this.expect(TokenKind.R_PAREN);
        literalType = 'SUBQUERY';
      } else if (this.config.allowApexBindVariables && this.check(TokenKind.COLON)) {
        // Apex bind variable
        const apexResult = this.parseApexBindVariable();
        value = apexResult.value;
        literalType = 'APEX_BIND_VARIABLE';
      } else {
        // Array expression
        const arrayResult = this.parseArrayExpression();
        value = arrayResult.values;
        literalType = arrayResult.literalType;
        dateLiteralVariable = arrayResult.dateLiteralVariable;
      }
    } else {
      // Relational operator: parse atomic value
      const atomicResult = this.parseAtomicValue();
      value = atomicResult.value;
      literalType = atomicResult.literalType;
      dateLiteralVariable = atomicResult.dateLiteralVariable;
    }

    // Count right parens (only consume if there are unmatched left parens in this clause)
    let closeParenCount = 0;
    while (this.check(TokenKind.R_PAREN) && (!parenCount || parenCount.left > parenCount.right)) {
      this.advance();
      closeParenCount++;
      if (parenCount) parenCount.right++;
    }

    // Build the condition
    const condition: any = {};
    if (isLhsFn) {
      condition.fn = lhs;
    } else {
      condition.field = lhs;
    }
    condition.operator = operator;
    if (literalType === 'SUBQUERY') {
      condition.valueQuery = value;
    } else {
      condition.value = value;
    }
    condition.literalType = literalType;

    if (dateLiteralVariable !== undefined) {
      condition.dateLiteralVariable = dateLiteralVariable;
    }

    if (openParenCount > 0) {
      condition.openParen = openParenCount;
    }
    if (closeParenCount > 0) {
      condition.closeParen = closeParenCount;
    }

    return condition;
  }

  private isSubqueryStart(): boolean {
    return this.check(TokenKind.L_PAREN) && this.peekAt(1).kind === TokenKind.SELECT;
  }

  private isArrayExpressionStart(): boolean {
    // We need to differentiate between ( used for grouping in WHERE vs ( used for array/subquery in set operators
    // This is called before consuming parens in expression LHS context, so these are grouping parens
    return false;
  }

  // ====================================================================
  // Operators
  // ====================================================================

  private parseOperator(): { operator: string; isSet: boolean } {
    const t = this.peek();

    // Relational operators
    if (isRelationalOperator(t.kind)) {
      return { operator: this.advance().text, isSet: false };
    }

    // LIKE
    if (t.kind === TokenKind.LIKE) {
      this.advance();
      return { operator: 'LIKE', isSet: false };
    }

    // Set operators
    if (t.kind === TokenKind.IN) {
      this.advance();
      return { operator: 'IN', isSet: true };
    }
    if (t.kind === TokenKind.NOT && this.peekAt(1).kind === TokenKind.IN) {
      this.advance(); // NOT
      this.advance(); // IN
      return { operator: 'NOT IN', isSet: true };
    }
    if (t.kind === TokenKind.INCLUDES) {
      this.advance();
      return { operator: 'INCLUDES', isSet: true };
    }
    if (t.kind === TokenKind.EXCLUDES) {
      this.advance();
      return { operator: 'EXCLUDES', isSet: true };
    }

    throw this.error(`Expected operator but found ${TokenKind[t.kind]} ("${t.text}") at position ${t.start}`);
  }

  // ====================================================================
  // Atomic Values
  // ====================================================================

  private parseAtomicValue(): { value: any; literalType: LiteralType; dateLiteralVariable?: any } {
    const t = this.peek();

    // Apex bind variable
    if (this.config.allowApexBindVariables && t.kind === TokenKind.COLON) {
      const result = this.parseApexBindVariable();
      return { value: result.value, literalType: 'APEX_BIND_VARIABLE' as LiteralType };
    }

    // String literal
    if (t.kind === TokenKind.STRING_LITERAL) {
      return { value: this.advance().text, literalType: 'STRING' };
    }

    // GEOLOCATION_UNIT treated as string
    if (t.kind === TokenKind.GEOLOCATION_UNIT) {
      return { value: this.advance().text, literalType: 'STRING' };
    }

    // Numbers
    if (t.kind === TokenKind.UNSIGNED_INTEGER) {
      return { value: this.advance().text, literalType: 'INTEGER' };
    }
    if (t.kind === TokenKind.SIGNED_INTEGER) {
      return { value: this.advance().text, literalType: 'INTEGER' };
    }
    if (t.kind === TokenKind.UNSIGNED_DECIMAL) {
      return { value: this.advance().text, literalType: 'DECIMAL' };
    }
    if (t.kind === TokenKind.SIGNED_DECIMAL) {
      return { value: this.advance().text, literalType: 'DECIMAL' };
    }

    // Currency-prefixed
    if (t.kind === TokenKind.CURRENCY_PREFIXED_DECIMAL) {
      return { value: this.advance().text, literalType: 'DECIMAL_WITH_CURRENCY_PREFIX' };
    }
    if (t.kind === TokenKind.CURRENCY_PREFIXED_INTEGER) {
      return { value: this.advance().text, literalType: 'INTEGER_WITH_CURRENCY_PREFIX' };
    }

    // DateTime
    if (t.kind === TokenKind.DATETIME) {
      return { value: this.advance().text, literalType: 'DATETIME' };
    }

    // Date
    if (t.kind === TokenKind.DATE_TOKEN) {
      return { value: this.advance().text, literalType: 'DATE' };
    }

    // NULL
    if (t.kind === TokenKind.NULL) {
      this.advance();
      return { value: 'NULL', literalType: 'NULL' };
    }

    // Boolean
    if (t.kind === TokenKind.TRUE || t.kind === TokenKind.FALSE) {
      return { value: tokenTypeName(this.advance().kind), literalType: 'BOOLEAN' };
    }

    // Date literal
    if (isDateLiteral(t.kind)) {
      return { value: this.advance().text, literalType: 'DATE_LITERAL' };
    }

    // Date N literal
    if (isDateNLiteral(t.kind)) {
      const dateNToken = this.advance();
      this.expect(TokenKind.COLON);
      const numToken = this.peek();
      let variable: number;
      if (numToken.kind === TokenKind.UNSIGNED_INTEGER || numToken.kind === TokenKind.SIGNED_INTEGER) {
        variable = Number(this.advance().text);
      } else {
        throw this.error(`Expected integer after date N literal colon at position ${numToken.start}`);
      }
      const value = `${dateNToken.text}:${variable}`;
      return { value, literalType: 'DATE_N_LITERAL', dateLiteralVariable: variable };
    }

    // Note: bare identifiers are NOT valid atomic values in SOQL.
    // Only specific literal types are accepted (strings, numbers, dates, booleans, null, date literals).

    throw this.error(`Expected value but found ${TokenKind[t.kind]} ("${t.text}") at position ${t.start}`);
  }

  // ====================================================================
  // Array Expression
  // ====================================================================

  private parseArrayExpression(): { values: string[]; literalType: LiteralType | LiteralType[]; dateLiteralVariable?: any } {
    this.expect(TokenKind.L_PAREN);
    const items: { value: string; type: string; variable?: number }[] = [];

    items.push(this.parseArrayItem());
    while (this.match(TokenKind.COMMA)) {
      items.push(this.parseArrayItem());
    }
    this.expect(TokenKind.R_PAREN);

    const values = items.map(i => i.value);
    const types = items.map(i => i.type);
    const dateLiteralTemp = items.map(i => (i.variable !== undefined ? i.variable : null));
    const hasDateLiterals = dateLiteralTemp.some(item => item !== null);

    let literalType: LiteralType | LiteralType[];
    if (new Set(types).size === 1) {
      literalType = this.getLiteralType(this.tokenKindFromTypeName(types[0]));
    } else {
      literalType = types.map(t => this.getLiteralType(this.tokenKindFromTypeName(t)));
    }

    const result: any = { values, literalType };
    if (hasDateLiterals) {
      result.dateLiteralVariable = dateLiteralTemp;
    }
    return result;
  }

  private tokenKindFromTypeName(name: string): TokenKind {
    // Reverse lookup: find the TokenKind from the tokenTypeName
    for (let i = 0; i <= TokenKind.EOF; i++) {
      if (tokenTypeName(i) === name) return i;
    }
    return TokenKind.IDENTIFIER;
  }

  private parseArrayItem(): { value: string; type: string; variable?: number } {
    const t = this.peek();

    if (t.kind === TokenKind.STRING_LITERAL) {
      return { value: this.advance().text, type: tokenTypeName(TokenKind.STRING_LITERAL) };
    }
    if (t.kind === TokenKind.GEOLOCATION_UNIT) {
      return { value: this.advance().text, type: tokenTypeName(TokenKind.GEOLOCATION_UNIT) };
    }
    if (t.kind === TokenKind.CURRENCY_PREFIXED_DECIMAL) {
      return { value: this.advance().text, type: tokenTypeName(TokenKind.CURRENCY_PREFIXED_DECIMAL) };
    }
    if (t.kind === TokenKind.CURRENCY_PREFIXED_INTEGER) {
      return { value: this.advance().text, type: tokenTypeName(TokenKind.CURRENCY_PREFIXED_INTEGER) };
    }
    if (isNumberLiteral(t.kind)) {
      const token = this.advance();
      return { value: token.text, type: tokenTypeName(token.kind) };
    }
    if (t.kind === TokenKind.DATETIME) {
      return { value: this.advance().text, type: tokenTypeName(TokenKind.DATETIME) };
    }
    if (t.kind === TokenKind.DATE_TOKEN) {
      return { value: this.advance().text, type: tokenTypeName(TokenKind.DATE_TOKEN) };
    }
    if (t.kind === TokenKind.NULL) {
      this.advance();
      return { value: 'null', type: 'NULL' };
    }
    if (t.kind === TokenKind.TRUE) {
      return { value: this.advance().text, type: 'TRUE' };
    }
    if (t.kind === TokenKind.FALSE) {
      return { value: this.advance().text, type: 'FALSE' };
    }
    if (isDateLiteral(t.kind)) {
      return { value: this.advance().text, type: tokenTypeName(t.kind) };
    }
    if (isDateNLiteral(t.kind)) {
      const dateNToken = this.advance();
      this.expect(TokenKind.COLON);
      const numToken = this.peek();
      let variable: number;
      if (numToken.kind === TokenKind.UNSIGNED_INTEGER || numToken.kind === TokenKind.SIGNED_INTEGER) {
        variable = Number(this.advance().text);
      } else {
        throw this.error(`Expected integer after date N literal colon at position ${numToken.start}`);
      }
      return {
        value: `${dateNToken.text}:${variable}`,
        type: tokenTypeName(dateNToken.kind),
        variable,
      };
    }

    throw this.error(`Expected array value but found ${TokenKind[t.kind]} ("${t.text}") at position ${t.start}`);
  }

  // ====================================================================
  // Apex Bind Variables
  // ====================================================================

  private parseApexBindVariable(): { value: string } {
    this.expect(TokenKind.COLON);

    const parts: string[] = [];

    // First part: could be 'new' instantiation, function call, or identifier
    if (this.check(TokenKind.APEX_NEW)) {
      parts.push(this.parseApexBindNewInstantiation());
    } else if (this.checkIdentifier()) {
      // Check if this is a function call (identifier followed by L_PAREN)
      if (this.peekAt(1).kind === TokenKind.L_PAREN) {
        parts.push(this.parseApexBindFunctionCall());
      } else {
        parts.push(this.parseApexBindIdentifier());
      }
    }

    // Chained parts separated by dots
    while (this.check(TokenKind.DOT)) {
      this.advance();
      if (this.checkIdentifier() && this.peekAt(1).kind === TokenKind.L_PAREN) {
        parts.push(this.parseApexBindFunctionCall());
      } else if (this.checkIdentifier()) {
        parts.push(this.parseApexBindIdentifier());
      }
    }

    return { value: parts.join('.') };
  }

  private parseApexBindIdentifier(): string {
    let output = this.consumeIdentifier().text;
    // Optional array accessor
    if (this.check(TokenKind.L_SQUARE_BRACKET)) {
      output += this.parseApexBindArrayAccessor();
    }
    return output;
  }

  private parseApexBindNewInstantiation(): string {
    this.expect(TokenKind.APEX_NEW);
    const fnName = this.consumeIdentifier().text;
    let output = `new ${fnName}`;

    // Optional generic <T, U>
    if (this.check(TokenKind.LESS_THAN)) {
      this.advance();
      const params: string[] = [];
      params.push(this.consumeIdentifier().text);
      while (this.match(TokenKind.COMMA)) {
        params.push(this.consumeIdentifier().text);
      }
      this.expect(TokenKind.GREATER_THAN);
      output += `<${params.join(', ')}>`;
    }

    // Function params
    output += this.parseApexBindFunctionParams();

    // Optional array accessor
    if (this.check(TokenKind.L_SQUARE_BRACKET)) {
      output += this.parseApexBindArrayAccessor();
    }

    return output;
  }

  private parseApexBindFunctionCall(): string {
    const fnName = this.consumeIdentifier().text;
    let output = fnName + this.parseApexBindFunctionParams();

    // Optional array accessor
    if (this.check(TokenKind.L_SQUARE_BRACKET)) {
      output += this.parseApexBindArrayAccessor();
    }

    return output;
  }

  private parseApexBindFunctionParams(): string {
    this.expect(TokenKind.L_PAREN);
    const params: string[] = [];
    if (!this.check(TokenKind.R_PAREN)) {
      params.push(this.consumeIdentifier().text);
      while (this.match(TokenKind.COMMA)) {
        params.push(this.consumeIdentifier().text);
      }
    }
    this.expect(TokenKind.R_PAREN);
    return `(${params.join(', ')})`;
  }

  private parseApexBindArrayAccessor(): string {
    this.expect(TokenKind.L_SQUARE_BRACKET);
    const t = this.peek();
    let val: string;
    if (t.kind === TokenKind.UNSIGNED_INTEGER) {
      val = this.advance().text;
    } else if (isIdentifierLike(t.kind)) {
      val = this.advance().text;
    } else {
      throw this.error(`Expected integer or identifier in array accessor at position ${t.start}`);
    }
    this.expect(TokenKind.R_SQUARE_BRACKET);
    return `[${val}]`;
  }

  // ====================================================================
  // Functions
  // ====================================================================

  // Parse any function type, used in SELECT clause function identifier context
  private parseAnyFunction(includeType: boolean): FunctionExp | FieldFunctionExpression {
    const t = this.peek();
    if (isDateFunction(t.kind)) return this.parseDateFunction(includeType);
    if (isAggregateFunction(t.kind)) return this.parseAggregateFunction(includeType);
    if (t.kind === TokenKind.DISTANCE) return this.parseLocationFunction(includeType);
    if (isFieldsFunction(t.kind)) return this.parseFieldsFunction(includeType);
    if (isOtherFunction(t.kind)) return this.parseOtherFunction(includeType);
    throw this.error(`Expected function name but found ${TokenKind[t.kind]} at position ${t.start}`);
  }

  private parseDateFunction(includeType: boolean): FunctionExp | FieldFunctionExpression {
    const fnToken = this.advance();
    const fnName = tokenTypeName(fnToken.kind);
    const params = this.parseFunctionExpression(false, includeType);

    const output: any = {};
    if (includeType) {
      output.type = 'FieldFunctionExpression';
    }
    output.functionName = fnName;
    output.parameters = params;
    if (includeType) {
      output.isAggregateFn = true;
    }
    output.rawValue = `${fnToken.text}(${params.map((p: any) => (typeof p === 'string' ? p : p.rawValue)).join(', ')})`;
    return output;
  }

  private parseAggregateFunction(includeType: boolean): FunctionExp | FieldFunctionExpression {
    const fnToken = this.advance();
    const fnName = tokenTypeName(fnToken.kind);
    const params = this.parseFunctionExpression(true, includeType);

    const output: any = {};
    if (includeType) {
      output.type = 'FieldFunctionExpression';
    }
    output.functionName = fnName;
    output.parameters = params;
    if (includeType) {
      output.isAggregateFn = true;
    }
    output.rawValue = `${fnToken.text}(${params.map((p: any) => (typeof p === 'string' ? p : p.rawValue)).join(', ')})`;
    return output;
  }

  private parseFieldsFunction(includeType: boolean): FunctionExp | FieldFunctionExpression {
    this.advance(); // FIELDS
    this.expect(TokenKind.L_PAREN);
    const t = this.peek();
    let paramText: string;
    if (isFieldsFunctionParam(t.kind)) {
      paramText = this.advance().text;
    } else if (isIdentifierLike(t.kind)) {
      paramText = this.advance().text;
    } else {
      throw this.error(`Expected FIELDS function parameter at position ${t.start}`);
    }
    this.expect(TokenKind.R_PAREN);

    const output: any = {};
    if (includeType) {
      output.type = 'FieldFunctionExpression';
    }
    output.functionName = 'FIELDS';
    output.parameters = [paramText];
    output.rawValue = `FIELDS(${paramText})`;
    return output;
  }

  private parseOtherFunction(includeType: boolean): FunctionExp | FieldFunctionExpression {
    const fnToken = this.advance();
    const fnName = tokenTypeName(fnToken.kind);
    const params = this.parseFunctionExpression(false, includeType);

    const output: any = {};
    if (includeType) {
      output.type = 'FieldFunctionExpression';
    }
    output.functionName = fnName;
    output.parameters = params;
    output.rawValue = `${fnToken.text}(${params.map((p: any) => (typeof p === 'string' ? p : p.rawValue)).join(', ')})`;
    return output;
  }

  private parseLocationFunction(includeType: boolean): FunctionExp | FieldFunctionExpression {
    this.advance(); // DISTANCE
    this.expect(TokenKind.L_PAREN);
    const location1 = this.consumeIdentifier().text;
    this.expect(TokenKind.COMMA);

    let location2: any;
    if (this.check(TokenKind.GEOLOCATION) && this.peekAt(1).kind === TokenKind.L_PAREN) {
      location2 = this.parseGeolocationFunction(includeType);
    } else {
      location2 = this.consumeIdentifier().text;
    }
    this.expect(TokenKind.COMMA);
    const unit = this.expect(TokenKind.GEOLOCATION_UNIT).text;
    this.expect(TokenKind.R_PAREN);

    const output: any = {};
    if (includeType) {
      output.type = 'FieldFunctionExpression';
    }
    output.functionName = 'DISTANCE';
    output.parameters = [location1, location2, unit];
    if (includeType) {
      output.isAggregateFn = true;
    }

    const loc2Str = typeof location2 === 'string' ? location2 : location2.rawValue;
    output.rawValue = `DISTANCE(${location1}, ${loc2Str}, ${unit})`;
    return output;
  }

  private parseGeolocationFunction(includeType: boolean): FunctionExp | FieldFunctionExpression {
    this.advance(); // GEOLOCATION
    this.expect(TokenKind.L_PAREN);

    // latitude - can be any number type
    const lat = this.parseNumberValue();
    this.expect(TokenKind.COMMA);
    // longitude - can be any number type
    const lon = this.parseNumberValue();
    this.expect(TokenKind.R_PAREN);

    const output: any = {};
    if (includeType) {
      output.type = 'FieldFunctionExpression';
    }
    output.functionName = 'GEOLOCATION';
    output.parameters = [lat, lon];
    output.rawValue = `GEOLOCATION(${lat}, ${lon})`;
    return output;
  }

  private parseNumberValue(): string {
    const t = this.peek();
    if (
      t.kind === TokenKind.UNSIGNED_INTEGER ||
      t.kind === TokenKind.SIGNED_INTEGER ||
      t.kind === TokenKind.UNSIGNED_DECIMAL ||
      t.kind === TokenKind.SIGNED_DECIMAL
    ) {
      return this.advance().text;
    }
    throw this.error(`Expected number but found ${TokenKind[t.kind]} ("${t.text}") at position ${t.start}`);
  }

  private parseFunctionExpression(skipAggregate: boolean, includeType: boolean = true): (string | FieldFunctionExpression)[] {
    this.expect(TokenKind.L_PAREN);
    const params: (string | FieldFunctionExpression)[] = [];

    if (!this.check(TokenKind.R_PAREN)) {
      params.push(this.parseFunctionParam(skipAggregate, includeType));
      while (this.match(TokenKind.COMMA)) {
        params.push(this.parseFunctionParam(skipAggregate, includeType));
      }
    }

    this.expect(TokenKind.R_PAREN);
    return params;
  }

  private parseFunctionParam(skipAggregate: boolean, includeType: boolean): string | FieldFunctionExpression {
    const t = this.peek();
    const next = this.peekAt(1);

    // Nested aggregate function (when not skipped)
    if (!skipAggregate && isAggregateFunction(t.kind) && next.kind === TokenKind.L_PAREN) {
      return this.parseAggregateFunction(includeType) as FieldFunctionExpression;
    }

    // Nested other function
    if (isOtherFunction(t.kind) && next.kind === TokenKind.L_PAREN) {
      return this.parseOtherFunction(includeType) as FieldFunctionExpression;
    }

    // String literal
    if (t.kind === TokenKind.STRING_LITERAL) {
      return this.advance().text;
    }

    // Number
    if (isNumberLiteral(t.kind)) {
      return this.advance().text;
    }

    // Identifier (includes keyword-named identifiers)
    if (isIdentifierLike(t.kind)) {
      return this.advance().text;
    }

    throw this.error(`Expected function parameter but found ${TokenKind[t.kind]} ("${t.text}") at position ${t.start}`);
  }

  // ====================================================================
  // GROUP BY Clause
  // ====================================================================

  private parseGroupByClause(): GroupByClause[] {
    this.expect(TokenKind.GROUP_BY);
    const groups: GroupByClause[] = [];

    groups.push(this.parseGroupByItem());
    while (this.match(TokenKind.COMMA)) {
      groups.push(this.parseGroupByItem());
    }

    return groups;
  }

  private parseGroupByItem(): GroupByClause {
    const t = this.peek();

    // CUBE(...)
    if (t.kind === TokenKind.CUBE && this.peekAt(1).kind === TokenKind.L_PAREN) {
      return { fn: this.parseCubeOrRollupFunction('CUBE') };
    }

    // ROLLUP(...)
    if (t.kind === TokenKind.ROLLUP && this.peekAt(1).kind === TokenKind.L_PAREN) {
      return { fn: this.parseCubeOrRollupFunction('ROLLUP') };
    }

    // Date function
    if (isDateFunction(t.kind) && this.peekAt(1).kind === TokenKind.L_PAREN) {
      return { fn: this.parseDateFunction(false) as FunctionExp };
    }

    // Plain identifier
    return { field: this.consumeIdentifier().text };
  }

  private parseCubeOrRollupFunction(name: string): FunctionExp {
    const fnToken = this.advance();
    const params = this.parseFunctionExpression(false);
    return {
      functionName: name,
      parameters: params,
      rawValue: `${name}(${(params as string[]).join(', ')})`,
    };
  }

  // ====================================================================
  // HAVING Clause
  // ====================================================================

  private parseHavingClause(): HavingClause {
    this.expect(TokenKind.HAVING);
    // HAVING uses the same condition expression logic as WHERE, with aggregate functions allowed but no location functions
    return this.parseConditionExpressions(true, false) as any as HavingClause;
  }

  // ====================================================================
  // ORDER BY Clause
  // ====================================================================

  private parseOrderByClause(): OrderByClause[] {
    this.expect(TokenKind.ORDER_BY);
    const items: OrderByClause[] = [];

    items.push(this.parseOrderByItem());
    while (this.match(TokenKind.COMMA)) {
      items.push(this.parseOrderByItem());
    }

    return items;
  }

  private parseOrderByItem(): OrderByClause {
    const t = this.peek();
    const next = this.peekAt(1);
    let clause: any;

    // GROUPING function
    if (t.kind === TokenKind.GROUPING && next.kind === TokenKind.L_PAREN) {
      const fnToken = this.advance();
      const params = this.parseFunctionExpression(false);
      clause = {
        fn: {
          functionName: tokenTypeName(fnToken.kind),
          parameters: params,
          rawValue: `${fnToken.text}(${(params as string[]).join(', ')})`,
        },
      };
    }
    // Aggregate function
    else if (isAggregateFunction(t.kind) && next.kind === TokenKind.L_PAREN) {
      clause = { fn: this.parseAggregateFunction(false) };
    }
    // Date function
    else if (isDateFunction(t.kind) && next.kind === TokenKind.L_PAREN) {
      clause = { fn: this.parseDateFunction(false) };
    }
    // Location function
    else if (t.kind === TokenKind.DISTANCE && next.kind === TokenKind.L_PAREN) {
      clause = { fn: this.parseLocationFunction(false) };
    }
    // Plain identifier
    else {
      clause = { field: this.consumeIdentifier().text };
    }

    // Optional ASC/DESC
    if (this.check(TokenKind.ASC)) {
      clause.order = tokenTypeName(this.advance().kind) as OrderByCriterion;
    } else if (this.check(TokenKind.DESC)) {
      clause.order = tokenTypeName(this.advance().kind) as OrderByCriterion;
    }

    // Optional NULLS FIRST/LAST
    if (this.check(TokenKind.NULLS)) {
      this.advance();
      if (this.check(TokenKind.FIRST)) {
        clause.nulls = tokenTypeName(this.advance().kind) as NullsOrder;
      } else if (this.check(TokenKind.LAST)) {
        clause.nulls = tokenTypeName(this.advance().kind) as NullsOrder;
      } else {
        throw this.error(`Expected FIRST or LAST after NULLS at position ${this.peek().start}`);
      }
    }

    return clause;
  }

  // ====================================================================
  // WITH Clause
  // ====================================================================

  private parseWithClause(): { withSecurityEnforced?: boolean; withAccessLevel?: string; withDataCategory?: any } {
    this.expect(TokenKind.WITH);
    const t = this.peek();

    if (t.kind === TokenKind.SECURITY_ENFORCED) {
      this.advance();
      return { withSecurityEnforced: true };
    }

    if (t.kind === TokenKind.USER_MODE) {
      this.advance();
      return { withAccessLevel: 'USER_MODE' };
    }

    if (t.kind === TokenKind.SYSTEM_MODE) {
      this.advance();
      return { withAccessLevel: 'SYSTEM_MODE' };
    }

    if (t.kind === TokenKind.DATA_CATEGORY) {
      return { withDataCategory: this.parseWithDataCategory() };
    }

    throw this.error(`Expected SECURITY_ENFORCED, USER_MODE, SYSTEM_MODE, or DATA CATEGORY after WITH at position ${t.start}`);
  }

  private parseWithDataCategory(): { conditions: WithDataCategoryCondition[] } {
    this.expect(TokenKind.DATA_CATEGORY);
    const conditions: WithDataCategoryCondition[] = [];

    conditions.push(this.parseDataCategoryCondition());
    while (this.check(TokenKind.AND)) {
      this.advance();
      conditions.push(this.parseDataCategoryCondition());
    }

    return { conditions };
  }

  private parseDataCategoryCondition(): WithDataCategoryCondition {
    const groupName = this.consumeIdentifier().text;

    // Selector: AT, ABOVE, BELOW, ABOVE_OR_BELOW
    const t = this.peek();
    let selector: string;
    if (t.kind === TokenKind.AT || t.kind === TokenKind.ABOVE || t.kind === TokenKind.BELOW || t.kind === TokenKind.ABOVE_OR_BELOW) {
      selector = this.advance().text;
    } else {
      throw this.error(`Expected data category selector (AT, ABOVE, BELOW, ABOVE_OR_BELOW) at position ${t.start}`);
    }

    // Parameters: optionally in parens
    const hasParen = this.match(TokenKind.L_PAREN);
    const parameters: string[] = [];
    parameters.push(this.consumeIdentifier().text);
    while (this.match(TokenKind.COMMA)) {
      parameters.push(this.consumeIdentifier().text);
    }
    if (hasParen) {
      this.expect(TokenKind.R_PAREN);
    }

    return { groupName, selector: selector as GroupSelector, parameters };
  }
}

// ====================================================================
// Module-level parser instance, reused per parse call
// ====================================================================

const parser = new SoqlParser();

/**
 * Parse a SOQL query string into a Query AST.
 */
export function parseQuery(soql: string, options?: ParseQueryConfig): Query {
  const config = options || {};
  const tokens = tokenize(soql);
  parser.init(tokens, config);

  let query: Query;
  if (config.allowPartialQuery) {
    query = parser.parseSelectStatementPartial();
  } else {
    query = parser.parseSelectStatement(false) as Query;
  }

  // Verify all tokens were consumed (except EOF)
  if (!parser.isAtEnd() && !config.ignoreParseErrors) {
    const remaining = tokens[parser.getPos()];
    throw new Error(`Unexpected token "${remaining.text}" at position ${remaining.start}. Expected end of query.`);
  }

  return query;
}

/**
 * Check if a SOQL query string is valid (parseable without errors).
 */
export function isQueryValid(soql: string, options?: ParseQueryConfig): boolean {
  try {
    parseQuery(soql, options);
    return true;
  } catch (e) {
    return false;
  }
}
