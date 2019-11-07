import { CstNode, IToken } from 'chevrotain';
import { LiteralType } from './api/api-models';

export type LiteralTypeWithSubquery = (LiteralType | 'SUBQUERY') | LiteralType[];

// export type HavingConditionWithDateLiteralVar = HavingCondition & { dateLiteralVariable: string };

export interface ArrayExpressionWithType {
  type: string;
  value: string;
}

export interface ExpressionTree<T> {
  expressionTree?: T;
  prevExpression?: T;
}

/**
 * CONTEXT TYPES
 */

interface WithIdentifier {
  Identifier?: IToken[];
}

export interface SelectStatementContext {
  selectClause: CstNode[];
  fromClause: CstNode[];
  usingScopeClause?: CstNode[];
  whereClause?: CstNode[];
  withClause?: CstNode[];
  groupByClause?: CstNode[];
  orderByClause?: CstNode[];
  limitClause?: CstNode[];
  offsetClause?: CstNode[];
  forViewOrReference?: CstNode[];
  updateTrackingViewstat?: CstNode[];
}

export interface SelectClauseIdentifierContext extends WithIdentifier {
  alias?: IToken[];
}

export interface SelectClauseFunctionIdentifierContext extends WithIdentifier {}

export interface SelectClauseContext {
  field: (IToken | CstNode)[];
}

export interface SelectClauseFieldIdentifierContext extends WithIdentifier {
  fn: CstNode[];
  alias?: IToken[];
}

export interface SelectClauseFunctionIdentifierContext extends WithIdentifier {
  fn: CstNode[];
  alias?: IToken[];
}

export interface SelectClauseSubqueryIdentifierContext extends WithIdentifier {
  selectStatement?: CstNode[];
}

export interface SelectClauseTypeOfContext extends WithIdentifier {
  typeOfField: IToken[];
  selectClauseTypeOfThen: CstNode[];
  selectClauseTypeOfElse?: CstNode[];
}

export interface SelectClauseTypeOfThenContext extends WithIdentifier {
  typeOfField: IToken[];
  field: IToken[];
}

export interface SelectClauseTypeOfElseContext extends WithIdentifier {
  field: IToken[];
}

export interface usingScopeClauseContext {
  UsingScopeEnumeration: IToken[];
}

export interface WhereClauseContext {
  conditionExpression: CstNode[];
}

export interface WhereClauseSubqueryContext {
  selectStatement: CstNode[];
}

export interface ConditionExpressionContext {
  logicalOperator?: IToken[];
  expression: CstNode[];
}

export interface WithClauseContext {
  withSecurityEnforced?: CstNode[];
  withDataCategory?: CstNode[];
}

export interface WithDateCategoryContext {
  withDataCategoryArr: CstNode[];
}

export interface WithDateCategoryConditionContext {
  dataCategoryGroupName: IToken[];
  filteringSelector: IToken[];
  dataCategoryName: IToken[];
}

export interface GroupByClauseContext extends WithIdentifier {
  fn: CstNode[];
  havingClause: CstNode[];
}

export interface HavingClauseContext {
  conditionExpression: CstNode[];
}

export interface OrderByClauseContext {
  orderByExpressionOrFn: CstNode[];
}

export interface OrderByExpressionContext extends WithIdentifier {
  field: IToken[];
  order?: IToken[];
  nulls?: IToken[];
}

export interface OrderByFunctionExpressionContext extends WithIdentifier {
  fn: IToken[];
  order?: IToken[];
  nulls?: IToken[];
}

export interface OrderByLocationExpressionContext {
  locationFunction: CstNode[];
  order?: IToken[];
  nulls?: IToken[];
}

export interface ValueContext {
  value: IToken[];
}

export interface OperatorContext {
  operator: IToken[];
}

export interface BooleanContext {
  boolean: IToken[];
}

export interface DateLiteralContext {
  dateLiteral: IToken[];
}

export interface DateNLiteralContext {
  dateNLiteral: IToken[];
  variable: IToken[];
}

export interface FieldFunctionContext {
  [value: string]: any;
  functionExpression?: CstNode[];
  fn: IToken[];
}

export interface LocationFunctionContext {
  location1: IToken[];
  location2: IToken[] | CstNode[];
  unit: IToken[];
}

export interface GeoLocationFunctionContext {
  latitude: IToken[];
  longitude: IToken[];
}

export interface ExpressionContext {
  logicalPrefix?: IToken[];
  lhs: IToken[] | CstNode[];
  operator: CstNode[]; // ExpressionOperatorContext
  L_PAREN?: IToken[];
  R_PAREN?: IToken[];
}

export interface ApexBindVariableExpressionContext {
  Identifier: IToken[];
}

export interface ExpressionOperatorContext {
  rhs: CstNode[];
  relationalOperator?: CstNode[];
  setOperator?: CstNode[];
}

export interface FromClauseContext extends WithIdentifier {
  alias?: IToken[];
}

export interface FunctionExpressionContext {
  params?: (CstNode | IToken)[];
}

export interface AtomicExpressionContext {
  apexBindVariableExpression?: CstNode[];
  NumberIdentifier?: IToken[];
  UnsignedInteger?: IToken[];
  SignedInteger?: IToken[];
  RealNumber?: IToken[];
  CurrencyPrefixedDecimal?: IToken[];
  CurrencyPrefixedInteger?: IToken[];
  DateIdentifier?: IToken[];
  DateTime?: IToken[];
  date?: IToken[];
  NULL?: IToken[];
  StringIdentifier?: IToken[];
  Identifier?: IToken[];
  booleanValue?: CstNode[];
  DateLiteral?: IToken[];
  dateNLiteral?: CstNode[];
  arrayExpression?: CstNode[];
  whereClauseSubqueryIdentifier?: CstNode[];
  DateToken?: IToken[];
}

export interface ExpressionWithAggregateFunctionContext {
  logicalPrefix?: IToken[];
  lhs: IToken[] | CstNode[];
  rhs: CstNode[];
  relationalOperator?: CstNode[];
  setOperator?: CstNode[];
}

// CstNode | CstNode[]
