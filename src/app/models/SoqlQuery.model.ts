export type LogicalOperator = 'AND' | 'OR';
export type Operator = '=' | '<=' | '>=' | '>' | '<' | 'LIKE' | 'IN' | 'NOT IN' | 'INCLUDES' | 'EXCLUDES';

export class SoqlQuery implements Query {
  fields: Field[];
  subqueries: Query[];
  sObject: string;
  sObjectAlias?: string;
  whereClauseGroups: WhereClauseGroup[];
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
    if (!this.whereClauseGroups[groupIdx]) {
      this.whereClauseGroups[groupIdx] = { conditions: [] };
    }
    this.whereClauseGroups[groupIdx].conditions.push(condition);
  }
  addLogicalOperatorToWhereClause(condition: LogicalOperator, setForGroup: boolean) {
    const whereClauseGroups: WhereClauseGroup = this.whereClauseGroups[this.whereClauseGroups.length - 1];
    if (setForGroup) {
      whereClauseGroups.trailingLogicalCondition = condition;
    } else {
      whereClauseGroups.conditions[whereClauseGroups.conditions.length - 1].trailingLogicalCondition = condition;
    }
  }
}

export interface Query {
  fields: Field[];
  subqueries: Query[];
  sObject: string;
  sObjectAlias?: string;
  whereClauseGroups: WhereClauseGroup[];
  limit?: number;
  offset?: number;
  groupBy?: GroupByClause;
  having?: any;
  orderBy?: OrderByClause | OrderByClause[];
  addWhereCondition?: (condition: WhereClause, groupIdx: number) => void;
  addLogicalOperatorToWhereClause?: (condition: LogicalOperator, inWhereClauseGroup: boolean) => void;
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

export interface WhereClauseGroup {
  conditions: WhereClause[];
  trailingLogicalCondition?: LogicalOperator;
}
export interface WhereClause {
  field: string;
  operator: Operator;
  value: string | string[];
  trailingLogicalCondition?: LogicalOperator;
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
