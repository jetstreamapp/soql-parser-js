export type LogicalOperator = 'AND' | 'OR';
export type Operator = '=' | '<=' | '>=' | '>' | '<' | 'LIKE' | 'IN' | 'NOT IN' | 'INCLUDES' | 'EXCLUDES';
export type TypeOfFieldConditionType = 'WHEN' | 'ELSE';
export type GroupSelector = 'ABOVE' | 'AT' | 'BELOW' | 'ABOVE_OR_BELOW';
export type LogicalPrefix = 'NOT';
export type ForClause = 'VIEW' | 'UPDATE' | 'REFERENCE';
export type UpdateClause = 'TRACKING' | 'VIEWSTAT';

export interface Query {
  fields: Field[];
  subqueries: Query[];
  sObject: string;
  sObjectAlias?: string;
  sObjectPrefix?: string;
  where?: WhereClause;
  limit?: number;
  offset?: number;
  groupBy?: GroupByClause;
  having?: HavingClause;
  orderBy?: OrderByClause | OrderByClause[];
  withDataCategory?: WithDataCategoryClause;
  for?: ForClause;
  update?: UpdateClause;
}

export interface SelectStatement {
  fields: Field[];
}

export interface Field {
  text?: string;
  alias?: string;
  relationshipFields?: string[];
  fn?: FunctionExp;
  subqueryObjName?: string; // populated if subquery
  typeOf?: TypeOfField;
}

export interface TypeOfField {
  field: string;
  conditions: TypeOfFieldCondition[];
}

export interface TypeOfFieldCondition {
  type: TypeOfFieldConditionType;
  objectType?: string; // not present when ELSE
  fieldList: string[];
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
}

export interface OrderByClause {
  field?: string;
  fn?: FunctionExp;
  order?: 'ASC' | 'DESC';
  nulls?: 'FIRST' | 'LAST';
}

export interface GroupByClause {
  field: string | string[];
  type?: 'CUBE' | 'ROLLUP';
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
  text?: string; // Count(Id)
  name?: string; // Count
  alias?: string;
  parameter?: string | string[];
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
