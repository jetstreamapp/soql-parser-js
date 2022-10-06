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
  | 'APEX_BIND_VARIABLE'
  | 'SUBQUERY';
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
export type AccessLevel = 'USER_MODE' | 'SYSTEM_MODE';
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
  fields?: FieldType[];
  sObjectAlias?: string;
  usingScope?: string;
  where?: WhereClause;
  limit?: number;
  offset?: number;
  groupBy?: GroupByClause | GroupByClause[];
  having?: HavingClause;
  orderBy?: OrderByClause | OrderByClause[];
  withDataCategory?: WithDataCategoryClause;
  withSecurityEnforced?: boolean;
  withAccessLevel?: AccessLevel;
  for?: ForClause;
  update?: UpdateClause;
}

export interface Query extends QueryBase {
  sObject?: string;
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
  literalType?: 'SUBQUERY';
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

export interface GroupByFieldClause {
  field: string;
}

export interface GroupByFnClause {
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
