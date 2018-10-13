/*
 * Copyright (c) Austin Turner
 * The software in this package is published under the terms of MIT
 * license, a copy of which has been included with this distribution in the
 * LICENSE.txt file.
 */
export type LogicalOperator = 'AND' | 'OR';
export type Operator = '=' | '<=' | '>=' | '>' | '<' | 'LIKE' | 'IN' | 'NOT IN' | 'INCLUDES' | 'EXCLUDES';

export class SoqlQuery implements Query {
  fields: Field[];
  subqueries: Query[];
  sObject: string;
  sObjectAlias?: string;
  whereClause?: WhereClause;
  limit?: number;
  offset?: number;
  groupBy?: GroupByClause;
  having?: HavingClause;
  orderBy?: OrderByClause | OrderByClause[];

  constructor() {
    this.fields = [];
    this.subqueries = [];
  }
}

export interface Query {
  fields: Field[];
  subqueries: Query[];
  sObject: string;
  sObjectAlias?: string;
  whereClause?: WhereClause;
  limit?: number;
  offset?: number;
  groupBy?: GroupByClause;
  having?: HavingClause;
  orderBy?: OrderByClause | OrderByClause[];
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
}

export interface WhereClause {
  left: Condition | WhereClause;
  right?: Condition | WhereClause;
  operator?: LogicalOperator;
}

export interface Condition {
  openParen?: boolean;
  closeParen?: boolean;
  logicalPrefix?: 'NOT';
  field: string;
  operator: Operator;
  value: string | string[];
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
  left: HavingCondition | HavingClause;
  right?: HavingCondition | HavingClause;
  operator?: LogicalOperator;
}

export interface HavingCondition {
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
}
