import { CstParser, IToken, CstNode } from 'chevrotain';
import * as lexer from './lexer';

export interface ParseQueryConfig {
  allowApexBindVariables: boolean;
}

export class SoqlParser extends CstParser {
  // Cache larger OR expressions
  // https://sap.github.io/chevrotain/docs/guide/performance.html#caching-arrays-of-alternatives
  private $_dateFunctionOr: any = undefined;
  private $_aggregateFunction: any = undefined;
  private $_otherFunction: any = undefined;
  private $_atomicExpression: any = undefined;
  private $_arrayExpression: any = undefined;
  private $_relationalOperator: any = undefined;
  private $_selectClause: any = undefined;
  private $_selectClauseFunctionIdentifier: any = undefined;
  private $_withDataCategoryArr: any = undefined;

  // Set to true to allow apex bind variables, such as "WHERE Id IN :accountIds"
  public allowApexBindVariables = false;

  constructor() {
    super(lexer.allTokens, {
      // true in production (webpack replaces this string)
      skipValidations: false,
      // nodeLocationTracking: 'full', // not sure if needed, could look at
    });

    this.performSelfAnalysis();
  }

  public selectStatement = this.RULE('selectStatement', () => {
    this.SUBRULE(this.selectClause);
    this.SUBRULE(this.fromClause);
    this.OPTION(() => {
      this.SUBRULE(this.usingScopeClause);
    });
    this.OPTION1(() => {
      this.SUBRULE(this.whereClause);
    });
    this.OPTION2(() => {
      this.MANY({
        DEF: () => {
          this.SUBRULE(this.withClause);
        },
      });
    });
    this.OPTION3(() => {
      this.SUBRULE(this.groupByClause);
    });
    this.OPTION4(() => {
      this.SUBRULE(this.orderByClause);
    });
    this.OPTION5(() => {
      this.SUBRULE(this.limitClause);
    });
    this.OPTION6(() => {
      this.SUBRULE(this.offsetClause);
    });
    this.OPTION7(() => {
      this.SUBRULE(this.forViewOrReference);
    });
    this.OPTION8(() => {
      this.SUBRULE(this.updateTrackingViewstat);
    });
  });

  private selectClause = this.RULE('selectClause', () => {
    this.CONSUME(lexer.Select);
    this.AT_LEAST_ONE_SEP({
      SEP: lexer.Comma,
      DEF: () => {
        this.OR(
          this.$_selectClause ||
            (this.$_selectClause = [
              // selectClauseFunctionIdentifier must be first because the alias could also be an identifier
              { ALT: () => this.SUBRULE(this.selectClauseFunctionIdentifier, { LABEL: 'field' }) },
              { ALT: () => this.SUBRULE(this.selectClauseSubqueryIdentifier, { LABEL: 'field' }) },
              { ALT: () => this.SUBRULE(this.selectClauseTypeOf, { LABEL: 'field' }) },
              { ALT: () => this.CONSUME(lexer.Identifier, { LABEL: 'field' }) },
            ]),
        );
      },
    });
  });

  private selectClauseFunctionIdentifier = this.RULE('selectClauseFunctionIdentifier', () => {
    this.OR(
      this.$_selectClauseFunctionIdentifier ||
        (this.$_selectClauseFunctionIdentifier = [
          { ALT: () => this.SUBRULE(this.dateFunction, { LABEL: 'fn' }) },
          { ALT: () => this.SUBRULE(this.aggregateFunction, { LABEL: 'fn', ARGS: [true] }) },
          { ALT: () => this.SUBRULE(this.locationFunction, { LABEL: 'fn' }) },
          { ALT: () => this.SUBRULE(this.otherFunction, { LABEL: 'fn' }) },
        ]),
    );
    this.OPTION(() => this.CONSUME(lexer.Identifier, { LABEL: 'alias' }));
  });

  private selectClauseSubqueryIdentifier = this.RULE('selectClauseSubqueryIdentifier', () => {
    this.CONSUME(lexer.LParen);
    this.SUBRULE(this.selectStatement);
    this.CONSUME(lexer.RParen);
  });

  private selectClauseTypeOf = this.RULE('selectClauseTypeOf', () => {
    this.CONSUME(lexer.Typeof);
    this.CONSUME(lexer.Identifier, { LABEL: 'typeOfField' });
    this.AT_LEAST_ONE({
      DEF: () => {
        this.SUBRULE(this.selectClauseTypeOfThen);
      },
    });
    this.OPTION(() => {
      this.SUBRULE(this.selectClauseTypeOfElse);
    });
    this.CONSUME(lexer.End);
  });

  private selectClauseTypeOfThen = this.RULE('selectClauseTypeOfThen', () => {
    this.CONSUME(lexer.When);
    this.CONSUME(lexer.Identifier, { LABEL: 'typeOfField' });
    this.CONSUME(lexer.Then);
    this.AT_LEAST_ONE_SEP({
      SEP: lexer.Comma,
      DEF: () => {
        this.CONSUME1(lexer.Identifier, { LABEL: 'field' });
      },
    });
  });

  private selectClauseTypeOfElse = this.RULE('selectClauseTypeOfElse', () => {
    this.CONSUME(lexer.Else);
    this.AT_LEAST_ONE_SEP({
      SEP: lexer.Comma,
      DEF: () => {
        this.CONSUME(lexer.Identifier, { LABEL: 'field' });
      },
    });
  });

  private fromClause = this.RULE('fromClause', () => {
    this.CONSUME(lexer.From);
    this.CONSUME(lexer.Identifier);
    this.OPTION({
      GATE: () => !(this.LA(1).tokenType === lexer.Offset && this.LA(2).tokenType === lexer.UnsignedInteger),
      DEF: () => this.CONSUME1(lexer.Identifier, { LABEL: 'alias' }),
    });
  });

  private usingScopeClause = this.RULE('usingScopeClause', () => {
    this.CONSUME(lexer.Using);
    this.CONSUME(lexer.Scope);
    this.CONSUME(lexer.UsingScopeEnumeration);
  });

  private whereClause = this.RULE('whereClause', () => {
    this.CONSUME(lexer.Where);
    // Get paren count to ensure that we only parse balanced parens for this where clause
    // and do not parse any extra parens that might belong to subquery or might be invalid
    const parenCount = this.getParenCount();
    this.AT_LEAST_ONE({
      DEF: () => {
        this.SUBRULE(this.whereClauseExpression, { ARGS: [parenCount] });
      },
    });

    // TODO: this is a hack and the paren expressions should be re-worked, but it is a significant amount of work and difficult to handle in the visitor
    // If There are more open parens than closing parens, force parsing error - RParenMismatch is not a valid token and does not have a pattern
    // Because we are not actually doing any calculations with results, our strategy for calculating parens within an expression is semi-ok
    // but should be considered for a refactor at some point
    this.ACTION(() => {
      const parenMatch = parenCount.left - parenCount.right;
      if (parenMatch !== 0) {
        this.CONSUME(lexer.RParenMismatch);
      }
    });
  });

  private whereClauseSubqueryIdentifier = this.RULE('whereClauseSubqueryIdentifier', () => {
    this.CONSUME(lexer.LParen);
    this.SUBRULE(this.selectStatement);
    this.CONSUME(lexer.RParen);
  });

  private whereClauseExpression = this.RULE('whereClauseExpression', parenCount => {
    // argument is undefined during self-analysis, need to initialize to avoid exception
    parenCount = this.getParenCount(parenCount);
    this.OPTION(() => {
      this.OR([
        { ALT: () => this.CONSUME(lexer.And, { LABEL: 'logicalOperator' }) },
        { ALT: () => this.CONSUME(lexer.Or, { LABEL: 'logicalOperator' }) },
      ]);
    });
    this.SUBRULE(this.expression, { ARGS: [parenCount] });
  });

  private withClause = this.RULE('withClause', () => {
    this.CONSUME(lexer.With);
    this.OR([
      { ALT: () => this.CONSUME(lexer.SecurityEnforced, { LABEL: 'withSecurityEnforced' }) },
      { ALT: () => this.SUBRULE(this.withDataCategory) },
    ]);
  });

  private withDataCategory = this.RULE('withDataCategory', () => {
    this.CONSUME(lexer.DataCategory);
    this.AT_LEAST_ONE_SEP({
      SEP: lexer.And,
      DEF: () => {
        this.SUBRULE(this.withDataCategoryArr);
      },
    });
  });

  private withDataCategoryArr = this.RULE('withDataCategoryArr', () => {
    this.CONSUME(lexer.Identifier, { LABEL: 'dataCategoryGroupName' });
    this.OR(
      this.$_withDataCategoryArr ||
        (this.$_withDataCategoryArr = [
          { ALT: () => this.CONSUME(lexer.At, { LABEL: 'filteringSelector' }) },
          { ALT: () => this.CONSUME(lexer.Above, { LABEL: 'filteringSelector' }) },
          { ALT: () => this.CONSUME(lexer.Below, { LABEL: 'filteringSelector' }) },
          { ALT: () => this.CONSUME(lexer.AboveOrBelow, { LABEL: 'filteringSelector' }) },
        ]),
    );

    this.OPTION(() => {
      this.CONSUME1(lexer.LParen);
    });
    this.AT_LEAST_ONE_SEP1({
      SEP: lexer.Comma,
      DEF: () => {
        this.CONSUME1(lexer.Identifier, { LABEL: 'dataCategoryName' });
      },
    });
    this.OPTION1(() => {
      this.CONSUME2(lexer.RParen);
    });
  });

  private groupByClause = this.RULE('groupByClause', () => {
    this.CONSUME(lexer.GroupBy);
    this.OR([
      { ALT: () => this.SUBRULE(this.cubeFunction, { LABEL: 'fn' }) },
      { ALT: () => this.SUBRULE(this.rollupFunction, { LABEL: 'fn' }) },
      { ALT: () => this.SUBRULE(this.dateFunction, { LABEL: 'fn' }) },
      { ALT: () => this.CONSUME1(lexer.Identifier) },
    ]);
    this.OPTION(() => {
      this.SUBRULE(this.havingClause);
    });
  });

  private havingClause = this.RULE('havingClause', () => {
    this.CONSUME(lexer.Having);
    this.AT_LEAST_ONE(() => {
      this.SUBRULE(this.havingClauseExpression);
    });
  });

  private havingClauseExpression = this.RULE('havingClauseExpression', () => {
    this.OPTION(() => {
      this.OR([
        { ALT: () => this.CONSUME(lexer.And, { LABEL: 'logicalOperator' }) },
        { ALT: () => this.CONSUME(lexer.Or, { LABEL: 'logicalOperator' }) },
      ]);
    });
    this.SUBRULE(this.expressionWithAggregateFunction, { LABEL: 'having' });
  });

  private orderByClause = this.RULE('orderByClause', () => {
    this.CONSUME(lexer.OrderBy);
    this.AT_LEAST_ONE_SEP({
      SEP: lexer.Comma,
      DEF: () => {
        this.OR([
          { ALT: () => this.SUBRULE(this.orderByFunctionExpression, { LABEL: 'orderByExpressionOrFn' }) },
          { ALT: () => this.SUBRULE(this.orderByExpression, { LABEL: 'orderByExpressionOrFn' }) },
        ]);
      },
    });
  });

  private orderByExpression = this.RULE('orderByExpression', () => {
    this.CONSUME(lexer.Identifier);
    this.OPTION(() => {
      this.OR([{ ALT: () => this.CONSUME(lexer.Asc, { LABEL: 'order' }) }, { ALT: () => this.CONSUME(lexer.Desc, { LABEL: 'order' }) }]);
    });
    this.OPTION1(() => {
      this.CONSUME(lexer.Nulls);
      this.OR1([{ ALT: () => this.CONSUME(lexer.First, { LABEL: 'nulls' }) }, { ALT: () => this.CONSUME(lexer.Last, { LABEL: 'nulls' }) }]);
    });
  });

  private orderByFunctionExpression = this.RULE('orderByFunctionExpression', () => {
    this.CONSUME(lexer.Grouping, { LABEL: 'fn' });
    this.SUBRULE(this.functionExpression);
  });

  private limitClause = this.RULE('limitClause', () => {
    this.CONSUME(lexer.Limit);
    this.CONSUME(lexer.UnsignedInteger, { LABEL: 'value' });
  });

  private offsetClause = this.RULE('offsetClause', () => {
    this.CONSUME(lexer.Offset);
    this.CONSUME(lexer.UnsignedInteger, { LABEL: 'value' });
  });

  // these are made undefined to ensure that V8 knows about these

  private dateFunction = this.RULE('dateFunction', () => {
    this.OR(
      this.$_dateFunctionOr || // https://sap.github.io/chevrotain/docs/guide/performance.html#caching-arrays-of-alternatives
        (this.$_dateFunctionOr = [
          { ALT: () => this.CONSUME(lexer.CalendarMonth, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.CalendarQuarter, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.CalendarYear, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.DayInMonth, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.DayInWeek, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.DayInYear, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.DayOnly, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.FiscalMonth, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.FiscalQuarter, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.FiscalYear, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.HourInDay, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.WeekInMonth, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.WeekInYear, { LABEL: 'fn' }) },
        ]),
    );
    this.SUBRULE(this.functionExpression);
  });

  private aggregateFunction = this.RULE('aggregateFunction', allowAlias => {
    this.OR(
      this.$_aggregateFunction ||
        (this.$_aggregateFunction = [
          { ALT: () => this.CONSUME(lexer.Avg, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.Count, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.CountDistinct, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.Min, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.Max, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.Sum, { LABEL: 'fn' }) },
        ]),
    );
    this.SUBRULE(this.functionExpression, { ARGS: [true] });
  });

  private locationFunction = this.RULE('locationFunction', () => {
    this.OR([{ ALT: () => this.CONSUME(lexer.Distance) }, { ALT: () => this.CONSUME(lexer.Geolocation) }]);
    this.SUBRULE(this.functionExpression);
  });

  private otherFunction = this.RULE('otherFunction', () => {
    this.OR(
      this.$_otherFunction ||
        (this.$_otherFunction = [
          { ALT: () => this.CONSUME(lexer.Format, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.Tolabel, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.ConvertTimeZone, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.ConvertCurrency, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.Grouping, { LABEL: 'fn' }) },
        ]),
    );
    this.SUBRULE(this.functionExpression);
  });

  private cubeFunction = this.RULE('cubeFunction', () => {
    this.CONSUME(lexer.Cube, { LABEL: 'fn' });
    this.SUBRULE(this.functionExpression);
  });

  private rollupFunction = this.RULE('rollupFunction', () => {
    this.CONSUME(lexer.Rollup, { LABEL: 'fn' });
    this.SUBRULE(this.functionExpression);
  });

  private functionExpression = this.RULE('functionExpression', (skipAggregate?: boolean) => {
    this.CONSUME(lexer.LParen);
    this.MANY_SEP({
      SEP: lexer.Comma,
      DEF: () => {
        this.OR([
          { GATE: () => !skipAggregate, ALT: () => this.SUBRULE(this.aggregateFunction, { LABEL: 'fn' }) },
          { ALT: () => this.SUBRULE(this.locationFunction, { LABEL: 'fn' }) },
          { ALT: () => this.SUBRULE(this.otherFunction, { LABEL: 'fn' }) },
          { ALT: () => this.CONSUME(lexer.Identifier) },
        ]);
      },
    });
    this.CONSUME(lexer.RParen);
  });

  /**
   * The "rhs" and "lhs" (Right/Left Hand Side) labels will provide easy to use names during CST Visitor.
   * parenCount is undefined during the analysis phases, so we have to handle the undefined case
   */
  private expression = this.RULE('expression', (parenCount?: ParenCount) => {
    this.OPTION(() => {
      this.MANY(() => {
        this.CONSUME(lexer.LParen);
        if (parenCount) {
          parenCount.left++;
        }
      });
    });

    this.OPTION1(() => {
      this.CONSUME(lexer.Not, { LABEL: 'logicalPrefix' });
    });

    this.OR1([
      { ALT: () => this.SUBRULE(this.otherFunction, { LABEL: 'lhs' }) },
      { ALT: () => this.CONSUME(lexer.Identifier, { LABEL: 'lhs' }) },
    ]);

    this.OR2([
      { ALT: () => this.SUBRULE(this.expressionWithRelationalOperator, { LABEL: 'operator' }) },
      { ALT: () => this.SUBRULE(this.expressionWithSetOperator, { LABEL: 'operator' }) },
    ]);

    this.OPTION4(() => {
      this.MANY1({
        GATE: () => (parenCount ? parenCount.left > parenCount.right : true),
        DEF: () => {
          this.CONSUME(lexer.RParen);
          if (parenCount) {
            parenCount.right++;
          }
        },
      });
    });
  });

  private expressionWithRelationalOperator = this.RULE('expressionWithRelationalOperator', () => {
    this.SUBRULE(this.relationalOperator);
    this.SUBRULE(this.atomicExpression, { LABEL: 'rhs' });
  });

  private expressionWithSetOperator = this.RULE('expressionWithSetOperator', () => {
    this.SUBRULE(this.setOperator);
    this.SUBRULE2(this.atomicExpression, { LABEL: 'rhs', ARGS: [true] });
  });

  private atomicExpression = this.RULE('atomicExpression', isArray => {
    this.OR(
      this.$_atomicExpression ||
        (this.$_atomicExpression = [
          { GATE: () => this.allowApexBindVariables, ALT: () => this.SUBRULE(this.apexBindVariableExpression) },
          // SET / SUBQUERY
          { GATE: () => isArray, ALT: () => this.SUBRULE(this.arrayExpression) },
          { GATE: () => isArray, ALT: () => this.SUBRULE(this.whereClauseSubqueryIdentifier) },
          // NON-SET
          { GATE: () => !isArray, ALT: () => this.CONSUME(lexer.DateIdentifier) },
          { GATE: () => !isArray, ALT: () => this.CONSUME(lexer.CurrencyPrefixedDecimal, { LABEL: 'CurrencyPrefixedDecimal' }) },
          { GATE: () => !isArray, ALT: () => this.CONSUME(lexer.CurrencyPrefixedInteger, { LABEL: 'CurrencyPrefixedInteger' }) },
          { GATE: () => !isArray, ALT: () => this.CONSUME(lexer.NumberIdentifier) },
          { GATE: () => !isArray, ALT: () => this.CONSUME(lexer.Null) },
          { GATE: () => !isArray, ALT: () => this.SUBRULE(this.booleanValue) },
          { GATE: () => !isArray, ALT: () => this.CONSUME(lexer.DateLiteral) },
          { GATE: () => !isArray, ALT: () => this.SUBRULE(this.dateNLiteral) },
          { GATE: () => !isArray, ALT: () => this.CONSUME(lexer.StringIdentifier) },
        ]),
    );
  });

  private apexBindVariableExpression = this.RULE('apexBindVariableExpression', () => {
    this.CONSUME(lexer.Colon);
    this.CONSUME(lexer.Identifier);
  });

  private arrayExpression = this.RULE('arrayExpression', () => {
    this.CONSUME(lexer.LParen);
    this.AT_LEAST_ONE_SEP({
      SEP: lexer.Comma,
      DEF: () => {
        this.OR(
          this.$_arrayExpression ||
            (this.$_arrayExpression = [
              { ALT: () => this.CONSUME(lexer.CurrencyPrefixedDecimal, { LABEL: 'value' }) },
              { ALT: () => this.CONSUME(lexer.CurrencyPrefixedInteger, { LABEL: 'value' }) },
              { ALT: () => this.CONSUME(lexer.NumberIdentifier, { LABEL: 'value' }) },
              { ALT: () => this.CONSUME(lexer.DateIdentifier, { LABEL: 'value' }) },
              { ALT: () => this.CONSUME(lexer.Null, { LABEL: 'value' }) },
              { ALT: () => this.CONSUME(lexer.True, { LABEL: 'value' }) },
              { ALT: () => this.CONSUME(lexer.False, { LABEL: 'value' }) },
              { ALT: () => this.CONSUME(lexer.StringIdentifier, { LABEL: 'value' }) },
            ]),
        );
      },
    });
    this.CONSUME(lexer.RParen);
  });

  private expressionWithAggregateFunction = this.RULE('expressionWithAggregateFunction', () => {
    this.MANY(() => {
      this.CONSUME(lexer.LParen);
    });
    this.OR([
      { ALT: () => this.SUBRULE(this.aggregateFunction, { LABEL: 'lhs' }) },
      { ALT: () => this.CONSUME(lexer.Identifier, { LABEL: 'lhs' }) },
    ]);
    this.SUBRULE(this.expressionWithRelationalOperator, { LABEL: 'operator' });

    this.MANY1(() => {
      this.CONSUME(lexer.RParen);
    });
  });

  private relationalOperator = this.RULE('relationalOperator', () => {
    this.OR(
      this.$_relationalOperator ||
        (this.$_relationalOperator = [
          { ALT: () => this.CONSUME(lexer.Equal, { LABEL: 'operator' }) },
          { ALT: () => this.CONSUME(lexer.NotEqual, { LABEL: 'operator' }) },
          { ALT: () => this.CONSUME(lexer.GreaterThan, { LABEL: 'operator' }) },
          { ALT: () => this.CONSUME(lexer.GreaterThanOrEqual, { LABEL: 'operator' }) },
          { ALT: () => this.CONSUME(lexer.LessThan, { LABEL: 'operator' }) },
          { ALT: () => this.CONSUME(lexer.LessThanOrEqual, { LABEL: 'operator' }) },
          { ALT: () => this.CONSUME(lexer.Like, { LABEL: 'operator' }) },
        ]),
    );
  });

  private setOperator = this.RULE('setOperator', () => {
    this.OR([
      { ALT: () => this.CONSUME(lexer.In, { LABEL: 'operator' }) },
      { ALT: () => this.CONSUME(lexer.NotIn, { LABEL: 'operator' }) },
      { ALT: () => this.CONSUME(lexer.Includes, { LABEL: 'operator' }) },
      { ALT: () => this.CONSUME(lexer.Excludes, { LABEL: 'operator' }) },
    ]);
  });

  private booleanValue = this.RULE('booleanValue', () => {
    this.OR([
      { ALT: () => this.CONSUME(lexer.True, { LABEL: 'boolean' }) },
      { ALT: () => this.CONSUME(lexer.False, { LABEL: 'boolean' }) },
    ]);
  });

  private dateNLiteral = this.RULE('dateNLiteral', () => {
    this.CONSUME(lexer.DateNLiteral, { LABEL: 'dateNLiteral' });
    this.CONSUME(lexer.Colon);
    this.OR1([
      { ALT: () => this.CONSUME(lexer.UnsignedInteger, { LABEL: 'variable' }) },
      { ALT: () => this.CONSUME(lexer.SignedInteger, { LABEL: 'variable' }) },
    ]);
  });

  private forViewOrReference = this.RULE('forViewOrReference', () => {
    this.CONSUME(lexer.For);
    this.OR([
      { ALT: () => this.CONSUME(lexer.View, { LABEL: 'value' }) },
      { ALT: () => this.CONSUME(lexer.Reference, { LABEL: 'value' }) },
      { ALT: () => this.CONSUME(lexer.Update, { LABEL: 'value' }) },
    ]);
  });

  private updateTrackingViewstat = this.RULE('updateTrackingViewstat', () => {
    this.CONSUME(lexer.Update);
    this.OR([
      { ALT: () => this.CONSUME(lexer.Tracking, { LABEL: 'value' }) },
      { ALT: () => this.CONSUME(lexer.Viewstat, { LABEL: 'value' }) },
    ]);
  });

  private getParenCount(parenCount?: ParenCount): ParenCount {
    return parenCount || { right: 0, left: 0 };
  }
}

interface ParenCount {
  right: number;
  left: number;
}

const parser = new SoqlParser();

export function parse(soql: string, options?: ParseQueryConfig) {
  options = options || { allowApexBindVariables: false };
  const lexResult = lexer.lex(soql);
  const lexErrors = lexResult.errors;

  // setting a new input will RESET the parser instance's state.
  parser.input = lexResult.tokens;

  // any top level rule may be used as an entry point
  parser.allowApexBindVariables = options.allowApexBindVariables || false;

  const cst = parser.selectStatement();
  const parseErrors = parser.errors;

  return {
    // This is a pure grammar, the value will be undefined until we add embedded actions or enable automatic CST creation.
    cst: cst,
    lexErrors,
    parseErrors,
  };
}
