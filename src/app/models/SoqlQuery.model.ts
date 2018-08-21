export class SoqlQuery implements Query {
  fields: Field[];
  subqueries: Query[];
  name: string;
  whereClauseGroups: WhereClause[][];
  limit?: number;
  offset?: number;
  groupBy?: GroupByClause;
  having?: any;
  orderBy?: OrderByClause | OrderByClause[];

  constructor() {
    this.fields = [];
    this.subqueries = [];
    this.whereClauseGroups = [];
  }

  addWhereCondition(condition: WhereClause, groupIdx: number) {
    if (!Array.isArray(this.whereClauseGroups[groupIdx])) {
      this.whereClauseGroups[groupIdx] = [];
    }
    this.whereClauseGroups[groupIdx].push(condition);
  }
}

export interface Query {
  fields: Field[];
  subqueries: Query[];
  name: string;
  whereClauseGroups: WhereClause[][];
  limit?: number;
  offset?: number;
  groupBy?: GroupByClause;
  having?: any;
  orderBy?: OrderByClause | OrderByClause[];
  addWhereCondition?: (condition: WhereClause, groupIdx: number) => void;
}

export interface SelectStatement {
  fields: Field[];
}

export interface Field {
  text?: string;
  relationshipFields?: string[];
  fn?: FunctionExp;
  subqueryObjName?: string; // populated if subquery
}

export interface WhereClause {
  field: string;
  operator: string;
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
  fn: FunctionExp;
  operator: string;
  value: string | number;
}

export interface FunctionExp {
  text: string; // Count(Id)
  name: string; // Count
  alias?: string;
  parameter?: string | string[];
}
