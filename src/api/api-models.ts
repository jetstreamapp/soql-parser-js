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
  | 'DATE_N_LITERAL'
  | 'APEX_BIND_VARIABLE';
export type FieldType = Field | FieldFunctionExpression | FieldRelationship | FieldSubquery | FieldTypeOf;
export type OrderByCriterion = 'ASC' | 'DESC';
export type NullsOrder = 'FIRST' | 'LAST';
export type GroupByType = 'CUBE' | 'ROLLUP';
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
  objectPrefix?: string; // required if object is aliased
  rawValue?: string; // only included if objectPrefix is defined
  alias?: string;
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
  objectPrefix?: string; // required if object is aliased
  rawValue?: string; // not required for compose, will be populated if SOQL is parsed with the raw value of the entire field
  alias?: string;
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
  fields: FieldType[];
  sObjectAlias?: string;
  where?: WhereClause;
  limit?: number;
  offset?: number;
  groupBy?: GroupByClause;
  orderBy?: OrderByClause | OrderByClause[];
  withDataCategory?: WithDataCategoryClause;
  withSecurityEnforced?: boolean;
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
  literalType?: LiteralType | LiteralType[]; // If populated with STRING on compose, the value(s) will be wrapped in "'" if they are not already. - All other values ignored
  dateLiteralVariable?: number; // not required for compose, will be populated if SOQL is parsed
}

export interface OrderByClause {
  field?: string;
  fn?: FunctionExp;
  order?: OrderByCriterion;
  nulls?: NullsOrder;
}

export interface GroupByClause {
  field?: string | string[];
  fn?: FunctionExp;
  having?: HavingClause;
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
  literalType?: String;
}

export interface FunctionExp {
  rawValue?: string; // only used for compose fields if useRawValueForFn=true. Should be formatted like this: Count(Id)
  functionName?: string; // only used for compose fields if useRawValueForFn=false, not used for compose, will be populated if SOQL is parsed
  alias?: string;
  parameters?: (string | FunctionExp)[]; // only used for compose fields if useRawValueForFn=false, not used for compose, will be populated if SOQL is parsed
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
