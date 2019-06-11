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
  | 'DATE_N_LITERAL';
export type FieldType = Field | FieldFunctionExpression | FieldRelationship | FieldSubquery | FieldTypeOf;
export type OrderByCriterion = 'ASC' | 'DESC';
export type NullsOrder = 'FIRST' | 'LAST';
export type GroupByType = 'CUBE' | 'ROLLUP';

export interface Field {
  type: 'Field';
  field: string;
  objectPrefix?: string; // required if object is aliased
}

export interface FieldFunctionExpression {
  type: 'FieldFunctionExpression';
  fn: string;
  parameters?: string[] | FieldFunctionExpression[];
  alias?: string;
  isAggregateFn?: boolean; // not required for compose, will be populated if SOQL is parsed
  rawValue?: string; // not required for compose, will be populated if SOQL is parsed with the raw value of the entire field
}

export interface FieldRelationship {
  type: 'FieldRelationship';
  field: string;
  relationships: string[];
  objectPrefix?: string; // required if object is aliased
  rawValue?: string; // not required for compose, will be populated if SOQL is parsed with the raw value of the entire field
}

export interface FieldSubquery {
  type: 'FieldSubquery';
  subquery: Subquery;
  from?: string; // not required for compose, will be populated if SOQL is parsed
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
  having?: HavingClause;
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
  literalType?: LiteralType; // If populated with STRING on compose, the value(s) will be wrapped in "'" if they are not already. - All other values ignored
  dateLiteralVariable?: number; // not required for compose, will be populated if SOQL is parsed
}

export interface OrderByClause {
  field?: string;
  fn?: FunctionExp;
  order?: OrderByCriterion;
  nulls?: NullsOrder;
}

export interface GroupByClause {
  field: string | string[];
  type?: GroupByType;
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
}

export interface FunctionExp {
  text?: string; // Should be formatted like this: Count(Id)
  name?: string; // not used for compose, will be populated if SOQL is parsed
  alias?: string;
  parameter?: string | string[]; // not used for compose, will be populated if SOQL is parsed
  isAggregateFn?: boolean; // not used for compose, will be populated if SOQL is parsed
  fn?: FunctionExp; // used for nested functions FORMAT(MIN(CloseDate))
}

export interface WithDataCategoryClause {
  conditions: WithDataCategoryCondition[];
}

export interface WithDataCategoryCondition {
  groupName: string;
  selector: GroupSelector;
  parameters: string[];
}
