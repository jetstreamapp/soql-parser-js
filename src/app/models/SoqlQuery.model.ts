export class SoqlQuery {
  fields: Field[];
  subqueries: SoqlQuery[];
  name: string;
  whereClauseGroups: WhereClause[][];
  limit?: number;
  offset?: number;
  groupBy: string;
  having: any;
  orderBy: OrderByClause;

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

export interface SelectStatement {
  fields: Field[];
}

export interface Field {
  text?: string;
  relationshipFields?: string[];
  fn?: {
    fnType: string;
    name: string;
    alias?: string;
    value: string;
    dataType: string;
  };
  subqueryObjName?: string; // populated if subquery
}

export interface WhereClause {
  field: string;
  operator: string;
  value: string | string[];
}

export interface OrderByClause {
  field: string;
  order: 'ASC' | 'DESC';
  nulls?: 'FIRST' | 'LAST';
}

export interface HavingClause {
  fn: string;
  operator: string;
  value: string | number;
}
