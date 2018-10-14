import { TerminalNode } from 'antlr4ts/tree';
import { SOQLListener } from './generated/SOQLListener';
import * as utils from './utils';
import * as Parser from './generated/SOQLParser';
import {
  Field,
  FunctionExp,
  GroupByClause,
  HavingClause,
  OrderByClause,
  Query,
  WhereClause,
  WithDataCategoryCondition,
  GroupSelector,
  ForClause,
  TypeOfFieldCondition,
  UpdateClause,
} from './models/SoqlQuery.model';
import { SoqlQueryConfig } from './SoqlParser';

export type currItem = 'field' | 'typeof' | 'from' | 'where' | 'groupby' | 'orderby' | 'having' | 'withDataCategory';

export interface Context {
  isSubQuery: boolean;
  currSubqueryIdx: number;
  currWhereConditionGroupIdx: number;
  currentItem: currItem;
  inWhereClauseGroup: boolean;
  tempData: any;
}

export class SoqlQuery implements Query {
  fields: Field[];
  subqueries: Query[];
  sObject: string;
  sObjectAlias?: string;
  where?: WhereClause;
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

export class Listener implements SOQLListener {
  context: Context = {
    isSubQuery: false,
    currSubqueryIdx: -1,
    currWhereConditionGroupIdx: 0,
    currentItem: null,
    inWhereClauseGroup: false,
    tempData: null,
  };

  soqlQuery: SoqlQuery;

  constructor(private config: Partial<SoqlQueryConfig> = {}) {
    config.logging = utils.isBoolean(config.logging) ? config.logging : false;
    config.includeSubqueryAsField = utils.isBoolean(config.includeSubqueryAsField)
      ? config.includeSubqueryAsField
      : true;
    this.soqlQuery = new SoqlQuery();
  }

  visitTerminal(ctx: TerminalNode) {
    if (this.config.logging) {
      console.log('visitTerminal:', ctx.text);
    }
    if (this.context.currentItem === 'where') {
      if (['NOT'].includes(ctx.text.toUpperCase())) {
        this.context.tempData.nextHasLogicalPrefix = ctx.text;
      } else if (['AND', 'OR'].includes(ctx.text.toUpperCase())) {
        this.context.tempData.currConditionOperation.operator = ctx.text.toUpperCase();
        // Because there is an operator, we know the right side will have at least one more condition
        // reset current condition
        this.context.tempData.currConditionOperation.right = {
          left: null,
        };
        this.context.tempData.currConditionOperation = this.context.tempData.currConditionOperation.right;
        this.context.tempData.stack.push(this.context.tempData.currConditionOperation);
      }
    } else if (this.context.currentItem === 'having') {
      if (['NOT'].includes(ctx.text.toUpperCase())) {
        this.context.tempData.nextHasLogicalPrefix = ctx.text;
      } else if (['AND', 'OR'].includes(ctx.text.toUpperCase())) {
        this.context.tempData.currConditionOperation.operator = ctx.text.toUpperCase();
        // Because there is an operator, we know the right side will have at least one more condition
        // reset current condition
        this.context.tempData.currConditionOperation.right = {
          left: null,
        };
        this.context.tempData.currConditionOperation = this.context.tempData.currConditionOperation.right;
        this.context.tempData.stack.push(this.context.tempData.currConditionOperation);
      }
    }
  }

  getSoqlQuery(): Query {
    return this.context.isSubQuery ? this.soqlQuery.subqueries[this.context.currSubqueryIdx] : this.soqlQuery;
  }

  enterKeywords_alias_allowed(ctx: Parser.Keywords_alias_allowedContext) {
    if (this.config.logging) {
      console.log('enterKeywords_alias_allowed:', ctx.text);
    }
  }
  exitKeywords_alias_allowed(ctx: Parser.Keywords_alias_allowedContext) {
    if (this.config.logging) {
      console.log('exitKeywords_alias_allowed:', ctx.text);
    }
  }
  enterKeywords_name_allowed(ctx: Parser.Keywords_name_allowedContext) {
    if (this.config.logging) {
      console.log('enterKeywords_name_allowed:', ctx.text);
    }
  }
  exitKeywords_name_allowed(ctx: Parser.Keywords_name_allowedContext) {
    if (this.config.logging) {
      console.log('exitKeywords_name_allowed:', ctx.text);
    }
  }
  enterName(ctx: Parser.NameContext) {
    if (this.config.logging) {
      console.log('enterName:', ctx.text);
    }
  }
  exitName(ctx: Parser.NameContext) {
    if (this.config.logging) {
      console.log('exitName:', ctx.text);
    }
  }
  enterObject_name(ctx: Parser.Object_nameContext) {
    if (this.config.logging) {
      console.log('enterObject_name:', ctx.text);
    }
  }
  exitObject_name(ctx: Parser.Object_nameContext) {
    if (this.config.logging) {
      console.log('exitObject_name:', ctx.text);
    }
  }
  enterField_name(ctx: Parser.Field_nameContext) {
    if (this.config.logging) {
      console.log('enterField_name:', ctx.text);
    }
    if (this.context.currentItem === 'having' && !this.context.tempData.currConditionOperation.left.fn) {
      this.context.tempData.currConditionOperation.left.field = ctx.text;
    }
  }
  exitField_name(ctx: Parser.Field_nameContext) {
    if (this.config.logging) {
      console.log('exitField_name:', ctx.text);
    }
  }
  enterFilter_scope_name(ctx: Parser.Filter_scope_nameContext) {
    if (this.config.logging) {
      console.log('enterFilter_scope_name:', ctx.text);
    }
  }
  exitFilter_scope_name(ctx: Parser.Filter_scope_nameContext) {
    if (this.config.logging) {
      console.log('exitFilter_scope_name:', ctx.text);
    }
  }
  enterData_category_group_name(ctx: Parser.Data_category_group_nameContext) {
    if (this.config.logging) {
      console.log('enterData_category_group_name:', ctx.text);
    }
    this.context.tempData.conditions.push({
      groupName: ctx.text,
    });
  }
  exitData_category_group_name(ctx: Parser.Data_category_group_nameContext) {
    if (this.config.logging) {
      console.log('exitData_category_group_name:', ctx.text);
    }
  }
  enterData_category_name(ctx: Parser.Data_category_nameContext) {
    if (this.config.logging) {
      console.log('enterData_category_name:', ctx.text);
    }
    const condition = utils.getLastItem<WithDataCategoryCondition>(this.context.tempData.conditions);
    condition.parameters.push(ctx.text);
  }
  exitData_category_name(ctx: Parser.Data_category_nameContext) {
    if (this.config.logging) {
      console.log('exitData_category_name:', ctx.text);
    }
  }
  enterAlias_name(ctx: Parser.Alias_nameContext) {
    if (this.config.logging) {
      console.log('enterAlias_name:', ctx.text);
    }
    if (this.context.currentItem === 'from') {
      this.getSoqlQuery().sObjectAlias = ctx.text;
      // All fields need to update to remove the alias from relationships
      this.getSoqlQuery().fields.forEach(field => {
        if (field.text && field.text.startsWith(`${ctx.text}.`)) {
          field.alias = ctx.text;
          field.text = field.text.replace(`${ctx.text}.`, '');
          if (field.relationshipFields.length > 2) {
            field.relationshipFields = field.relationshipFields.splice(1);
          } else {
            field.relationshipFields = undefined;
          }
        }
      });
    }
    if (this.context.currentItem === 'field') {
      this.context.tempData.alias = ctx.text;
    }
    if (this.context.currentItem === 'having') {
      this.context.tempData.currConditionOperation.left.fn.alias = ctx.text;
    }
    if (this.context.currentItem === 'orderby') {
      this.context.tempData.fn.alias = ctx.text;
    }
  }
  exitAlias_name(ctx: Parser.Alias_nameContext) {
    if (this.config.logging) {
      console.log('exitAlias_name:', ctx.text);
    }
  }
  enterAlias(ctx: Parser.AliasContext) {
    if (this.config.logging) {
      console.log('enterAlias:', ctx.text);
    }
  }
  exitAlias(ctx: Parser.AliasContext) {
    if (this.config.logging) {
      console.log('exitAlias:', ctx.text);
    }
  }
  enterLiteral(ctx: Parser.LiteralContext) {
    if (this.config.logging) {
      console.log('enterLiteral:', ctx.text);
    }
  }
  exitLiteral(ctx: Parser.LiteralContext) {
    if (this.config.logging) {
      console.log('exitLiteral:', ctx.text);
    }
  }
  enterDate_formula_literal(ctx: Parser.Date_formula_literalContext) {
    if (this.config.logging) {
      console.log('enterDate_formula_literal:', ctx.text);
    }
  }
  exitDate_formula_literal(ctx: Parser.Date_formula_literalContext) {
    if (this.config.logging) {
      console.log('exitDate_formula_literal:', ctx.text);
    }
  }
  enterDate_formula_n_literal_name(ctx: Parser.Date_formula_n_literal_nameContext) {
    if (this.config.logging) {
      console.log('enterDate_formula_n_literal_name:', ctx.text);
    }
  }
  exitDate_formula_n_literal_name(ctx: Parser.Date_formula_n_literal_nameContext) {
    if (this.config.logging) {
      console.log('exitDate_formula_n_literal_name:', ctx.text);
    }
  }
  enterDate_formula_n_literal(ctx: Parser.Date_formula_n_literalContext) {
    if (this.config.logging) {
      console.log('enterDate_formula_n_literal:', ctx.text);
    }
  }
  exitDate_formula_n_literal(ctx: Parser.Date_formula_n_literalContext) {
    if (this.config.logging) {
      console.log('exitDate_formula_n_literal:', ctx.text);
    }
  }
  enterDatetime_literal(ctx: Parser.Datetime_literalContext) {
    if (this.config.logging) {
      console.log('enterDatetime_literal:', ctx.text);
    }
    if (this.context.currentItem === 'field') {
      this.context.tempData.type = 'datetime';
    }
  }
  exitDatetime_literal(ctx: Parser.Datetime_literalContext) {
    if (this.config.logging) {
      console.log('exitDatetime_literal:', ctx.text);
    }
  }
  enterDate_literal(ctx: Parser.Date_literalContext) {
    if (this.config.logging) {
      console.log('enterDate_literal:', ctx.text);
    }
    if (this.context.currentItem === 'field') {
      this.context.tempData.type = 'date';
    }
  }
  exitDate_literal(ctx: Parser.Date_literalContext) {
    if (this.config.logging) {
      console.log('exitDate_literal:', ctx.text);
    }
  }
  enterInteger_literal(ctx: Parser.Integer_literalContext) {
    if (this.config.logging) {
      console.log('enterInteger_literal:', ctx.text);
    }
    if (this.context.currentItem === 'field') {
      this.context.tempData.type = 'integer';
    }
  }
  exitInteger_literal(ctx: Parser.Integer_literalContext) {
    if (this.config.logging) {
      console.log('exitInteger_literal:', ctx.text);
    }
  }
  enterReal_literal(ctx: Parser.Real_literalContext) {
    if (this.config.logging) {
      console.log('enterReal_literal:', ctx.text);
    }
  }
  exitReal_literal(ctx: Parser.Real_literalContext) {
    if (this.config.logging) {
      console.log('exitReal_literal:', ctx.text);
    }
  }
  enterString_literal(ctx: Parser.String_literalContext) {
    if (this.config.logging) {
      console.log('enterString_literal:', ctx.text);
    }
  }
  exitString_literal(ctx: Parser.String_literalContext) {
    if (this.config.logging) {
      console.log('exitString_literal:', ctx.text);
    }
  }
  enterBoolean_literal(ctx: Parser.Boolean_literalContext) {
    if (this.config.logging) {
      console.log('enterBoolean_literal:', ctx.text);
    }
  }
  exitBoolean_literal(ctx: Parser.Boolean_literalContext) {
    if (this.config.logging) {
      console.log('exitBoolean_literal:', ctx.text);
    }
  }
  enterNull_literal(ctx: Parser.Null_literalContext) {
    if (this.config.logging) {
      console.log('enterNull_literal:', ctx.text);
    }
  }
  exitNull_literal(ctx: Parser.Null_literalContext) {
    if (this.config.logging) {
      console.log('exitNull_literal:', ctx.text);
    }
  }
  enterFunction_name(ctx: Parser.Function_nameContext) {
    if (this.config.logging) {
      console.log('enterFunction_name:', ctx.text);
    }
    if (this.context.currentItem === 'field') {
      const currFn: FunctionExp = this.context.tempData.fn || this.context.tempData;
      currFn.name = ctx.text;
    }
    if (this.context.currentItem === 'having') {
      this.context.tempData.currConditionOperation.left.fn.name = ctx.text;
      // this.context.tempData.fn.name = ctx.text;
    }
    if (this.context.currentItem === 'orderby') {
      this.context.tempData.fn.name = ctx.text;
    }
  }
  exitFunction_name(ctx: Parser.Function_nameContext) {
    if (this.config.logging) {
      console.log('exitFunction_name:', ctx.text);
    }
  }
  enterFunction_date(ctx: Parser.Function_dateContext) {
    if (this.config.logging) {
      console.log('enterFunction_date:', ctx.text);
    }
  }
  exitFunction_date(ctx: Parser.Function_dateContext) {
    if (this.config.logging) {
      console.log('exitFunction_date:', ctx.text);
    }
  }
  enterFunction_aggregate(ctx: Parser.Function_aggregateContext) {
    if (this.config.logging) {
      console.log('enterFunction_aggregate:', ctx.text);
    }
  }
  exitFunction_aggregate(ctx: Parser.Function_aggregateContext) {
    if (this.config.logging) {
      console.log('exitFunction_aggregate:', ctx.text);
    }
  }
  enterFunction_location(ctx: Parser.Function_locationContext) {
    if (this.config.logging) {
      console.log('enterFunction_location:', ctx.text);
    }
  }
  exitFunction_location(ctx: Parser.Function_locationContext) {
    if (this.config.logging) {
      console.log('exitFunction_location:', ctx.text);
    }
  }
  enterFunction_other(ctx: Parser.Function_otherContext) {
    if (this.config.logging) {
      console.log('enterFunction_other:', ctx.text);
    }
  }
  exitFunction_other(ctx: Parser.Function_otherContext) {
    if (this.config.logging) {
      console.log('exitFunction_other:', ctx.text);
    }
  }
  enterSoql_query(ctx: Parser.Soql_queryContext) {
    if (this.config.logging) {
      console.log('enterSoql_query:', ctx.text);
    }
  }
  exitSoql_query(ctx: Parser.Soql_queryContext) {
    if (this.config.logging) {
      console.log('exitSoql_query:', ctx.text);
    }
  }
  enterSelect_clause(ctx: Parser.Select_clauseContext) {
    if (this.config.logging) {
      console.log('enterSelect_clause:', ctx.text);
    }
  }
  exitSelect_clause(ctx: Parser.Select_clauseContext) {
    if (this.config.logging) {
      console.log('exitSelect_clause:', ctx.text);
    }
  }
  enterFrom_clause(ctx: Parser.From_clauseContext) {
    if (this.config.logging) {
      console.log('enterFrom_clause:', ctx.text);
    }
    this.context.currentItem = 'from';
  }
  exitFrom_clause(ctx: Parser.From_clauseContext) {
    if (this.config.logging) {
      console.log('exitFrom_clause:', ctx.text);
    }
  }
  enterUsing_clause(ctx: Parser.Using_clauseContext) {
    if (this.config.logging) {
      console.log('enterUsing_clause:', ctx.text);
    }
  }
  exitUsing_clause(ctx: Parser.Using_clauseContext) {
    if (this.config.logging) {
      console.log('exitUsing_clause:', ctx.text);
    }
  }
  enterWhere_clause(ctx: Parser.Where_clauseContext) {
    if (this.config.logging) {
      console.log('enterWhere_clause:', ctx.text);
    }
    this.context.currentItem = 'where';
    const currConditionOperation: HavingClause = {
      left: null,
      // right: null,
      // operator: null,
    };
    this.context.tempData = {
      stack: [currConditionOperation],
      currConditionOperation,
      data: currConditionOperation,
    };
  }
  exitWhere_clause(ctx: Parser.Where_clauseContext) {
    if (this.config.logging) {
      console.log('exitWhere_clause:', ctx.text);
    }

    this.getSoqlQuery().where = this.context.tempData.data;
    this.context.tempData = null;
  }
  enterGroupby_clause(ctx: Parser.Groupby_clauseContext) {
    if (this.config.logging) {
      console.log('enterGroupby_clause:', ctx.text);
    }
    this.context.currentItem = 'groupby';
    this.context.tempData = { field: null };
  }
  exitGroupby_clause(ctx: Parser.Groupby_clauseContext) {
    if (this.config.logging) {
      console.log('exitGroupby_clause:', ctx.text);
    }
    this.getSoqlQuery().groupBy = this.context.tempData;
  }
  enterHaving_clause(ctx: Parser.Having_clauseContext) {
    if (this.config.logging) {
      console.log('enterHaving_clause:', ctx.text);
    }
    this.context.currentItem = 'having';
    const currConditionOperation: HavingClause = {
      left: null,
    };
    this.context.tempData = {
      stack: [currConditionOperation],
      currConditionOperation,
      data: currConditionOperation,
    };
  }
  exitHaving_clause(ctx: Parser.Having_clauseContext) {
    if (this.config.logging) {
      console.log('exitHaving_clause:', ctx.text);
    }
    this.getSoqlQuery().having = this.context.tempData.data;
  }
  enterOrderby_clause(ctx: Parser.Orderby_clauseContext) {
    if (this.config.logging) {
      console.log('enterOrderby_clause:', ctx.text);
    }
    this.context.currentItem = 'orderby';
    this.context.tempData = {};
  }
  exitOrderby_clause(ctx: Parser.Orderby_clauseContext) {
    if (this.config.logging) {
      console.log('exitOrderby_clause:', ctx.text);
    }
  }
  enterLimit_clause(ctx: Parser.Limit_clauseContext) {
    if (this.config.logging) {
      console.log('enterLimit_clause:', ctx.text);
    }
    this.getSoqlQuery().limit = Number(ctx.getChild(1).text);
  }
  exitLimit_clause(ctx: Parser.Limit_clauseContext) {
    if (this.config.logging) {
      console.log('exitLimit_clause:', ctx.text);
    }
  }
  enterOffset_clause(ctx: Parser.Offset_clauseContext) {
    if (this.config.logging) {
      console.log('enterOffset_clause:', ctx.text);
    }
    this.getSoqlQuery().offset = Number(ctx.getChild(1).text);
  }
  exitOffset_clause(ctx: Parser.Offset_clauseContext) {
    if (this.config.logging) {
      console.log('exitOffset_clause:', ctx.text);
    }
  }
  enterFor_clause(ctx: Parser.For_clauseContext) {
    if (this.config.logging) {
      console.log('enterFor_clause:', ctx.text);
    }
  }
  exitFor_clause(ctx: Parser.For_clauseContext) {
    if (this.config.logging) {
      console.log('exitFor_clause:', ctx.text);
    }
  }
  enterUpdate_clause(ctx: Parser.Update_clauseContext) {
    if (this.config.logging) {
      console.log('enterUpdate_clause:', ctx.text);
    }
  }
  exitUpdate_clause(ctx: Parser.Update_clauseContext) {
    if (this.config.logging) {
      console.log('exitUpdate_clause:', ctx.text);
    }
  }
  enterSoql_subquery(ctx: Parser.Soql_subqueryContext) {
    if (this.config.logging) {
      console.log('enterSoql_subquery:', ctx.text);
    }
    this.context.isSubQuery = true;
    this.soqlQuery.subqueries.push(new SoqlQuery());
    this.context.currSubqueryIdx = this.soqlQuery.subqueries.length - 1;
  }
  exitSoql_subquery(ctx: Parser.Soql_subqueryContext) {
    if (this.config.logging) {
      console.log('exitSoql_subquery:', ctx.text);
    }
    this.context.isSubQuery = false;
    this.context.currWhereConditionGroupIdx = 0; // ensure reset for base query or next subquery
  }
  enterSubquery_select_clause(ctx: Parser.Subquery_select_clauseContext) {
    if (this.config.logging) {
      console.log('enterSubquery_select_clause:', ctx.text);
    }
  }
  exitSubquery_select_clause(ctx: Parser.Subquery_select_clauseContext) {
    if (this.config.logging) {
      console.log('exitSubquery_select_clause:', ctx.text);
    }
  }
  enterSelect_spec(ctx: Parser.Select_specContext) {
    if (this.config.logging) {
      console.log('enterSelect_spec:', ctx.text);
    }
    this.context.currentItem = 'field';
  }
  exitSelect_spec(ctx: Parser.Select_specContext) {
    if (this.config.logging) {
      console.log('exitSelect_spec:', ctx.text);
    }
  }
  enterSubquery_select_spec(ctx: Parser.Subquery_select_specContext) {
    if (this.config.logging) {
      console.log('enterSubquery_select_spec:', ctx.text);
    }
    this.context.currentItem = 'field';
  }
  exitSubquery_select_spec(ctx: Parser.Subquery_select_specContext) {
    if (this.config.logging) {
      console.log('exitSubquery_select_spec:', ctx.text);
    }
  }
  enterField_spec(ctx: Parser.Field_specContext) {
    if (this.config.logging) {
      console.log('enterField_spec:', ctx.text);
    }
    this.context.currentItem = 'field';
    if (ctx.text.includes('.')) {
      this.getSoqlQuery().fields.push({ text: ctx.text, relationshipFields: ctx.text.split('.') });
    } else {
      this.getSoqlQuery().fields.push({ text: ctx.text });
    }
  }
  // exitField_spec(ctx: Parser.Field_specContext) {
  //   if(this.config.logging) { console.log('exitField_spec:', ctx.text); }
  // };
  enterFunction_call_spec(ctx: Parser.Function_call_specContext) {
    if (this.config.logging) {
      console.log('enterFunction_call_spec:', ctx.text);
    }
    if (this.context.currentItem === 'field') {
      // If nested function, init nested fn operator
      this.context.tempData = {};
    }
    if (this.context.currentItem === 'having') {
      this.context.tempData.currConditionOperation.left.fn = {};
      // this.context.tempData = {};
    }
  }
  exitFunction_call_spec(ctx: Parser.Function_call_specContext) {
    if (this.config.logging) {
      console.log('exitFunction_call_spec:', ctx.text);
    }
    if (this.context.currentItem === 'field') {
      this.getSoqlQuery().fields.push({ fn: this.context.tempData });
      this.context.tempData = null;
    }
  }
  enterField(ctx: Parser.FieldContext) {
    if (this.config.logging) {
      console.log('enterField:', ctx.text);
    }
  }
  exitField(ctx: Parser.FieldContext) {
    if (this.config.logging) {
      console.log('exitField:', ctx.text);
    }
  }
  enterFunction_call(ctx: Parser.Function_callContext) {
    if (this.config.logging) {
      console.log('enterFunction_call:', ctx.text);
    }
    // COUNT(ID) or Count()
    if (this.context.currentItem === 'field') {
      if (this.context.tempData.text) {
        this.context.tempData.fn = {};
      }
      const currFn: FunctionExp = this.context.tempData.fn || this.context.tempData;
      currFn.text = ctx.text;
    }
    if (this.context.currentItem === 'having') {
      this.context.tempData.currConditionOperation.left.fn = {
        text: ctx.text,
      };
      // this.context.tempData.fn.;
    }
    if (this.context.currentItem === 'orderby') {
      this.context.tempData.fn.text = ctx.text;
    }
  }
  exitFunction_call(ctx: Parser.Function_callContext) {
    if (this.config.logging) {
      console.log('exitFunction_call:', ctx.text);
    }
  }
  enterFunction_parameter_list(ctx: Parser.Function_parameter_listContext) {
    if (this.config.logging) {
      console.log('enterFunction_parameter_list:', ctx.text);
    }
  }
  exitFunction_parameter_list(ctx: Parser.Function_parameter_listContext) {
    if (this.config.logging) {
      console.log('exitFunction_parameter_list:', ctx.text);
    }
  }
  enterFunction_parameter(ctx: Parser.Function_parameterContext) {
    if (this.config.logging) {
      console.log('enterFunction_parameter:', ctx.text);
    }
    // Get correct fn object based on what is set in tempData (set differently for field vs having)
    if (
      this.context.currentItem === 'field' ||
      this.context.currentItem === 'having' ||
      this.context.currentItem === 'orderby'
    ) {
      let tempdataFnObj: FunctionExp;
      if (this.context.tempData.currConditionOperation && this.context.tempData.currConditionOperation.left) {
        tempdataFnObj = this.context.tempData.currConditionOperation.left.fn;
      } else {
        tempdataFnObj = utils.isObject(this.context.tempData.fn) ? this.context.tempData.fn : this.context.tempData;
      }
      if (utils.isString(tempdataFnObj.parameter)) {
        tempdataFnObj.parameter = [tempdataFnObj.parameter, ctx.text] as string[];
      } else if (Array.isArray(tempdataFnObj.parameter)) {
        tempdataFnObj.parameter.push(ctx.text);
      } else {
        tempdataFnObj.parameter = ctx.text;
      }
    }
  }
  exitFunction_parameter(ctx: Parser.Function_parameterContext) {
    if (this.config.logging) {
      console.log('exitFunction_parameter:', ctx.text);
    }
  }
  enterTypeof_spec(ctx: Parser.Typeof_specContext) {
    if (this.config.logging) {
      console.log('enterTypeof_spec:', ctx.text);
    }
    this.context.currentItem = 'typeof';
    this.context.tempData = {
      typeOf: {
        field: ctx.getChild(1).text,
        conditions: [],
      },
    };
  }
  exitTypeof_spec(ctx: Parser.Typeof_specContext) {
    if (this.config.logging) {
      console.log('exitTypeof_spec:', ctx.text);
    }
    this.getSoqlQuery().fields.push(this.context.tempData);
    this.context.tempData = null;
    this.context.currentItem = 'field';
  }
  enterTypeof_when_then_clause_list(ctx: Parser.Typeof_when_then_clause_listContext) {
    if (this.config.logging) {
      console.log('enterTypeof_when_then_clause_list:', ctx.text);
    }
  }
  exitTypeof_when_then_clause_list(ctx: Parser.Typeof_when_then_clause_listContext) {
    if (this.config.logging) {
      console.log('exitTypeof_when_then_clause_list:', ctx.text);
    }
  }
  enterTypeof_when_then_clause(ctx: Parser.Typeof_when_then_clauseContext) {
    if (this.config.logging) {
      console.log('enterTypeof_when_then_clause:', ctx.text);
    }
    this.context.tempData.typeOf.conditions.push({
      type: 'WHEN',
      objectType: ctx.getChild(1).text,
    });
  }
  exitTypeof_when_then_clause(ctx: Parser.Typeof_when_then_clauseContext) {
    if (this.config.logging) {
      console.log('exitTypeof_when_then_clause:', ctx.text);
    }
  }
  enterTypeof_then_clause(ctx: Parser.Typeof_then_clauseContext) {
    if (this.config.logging) {
      console.log('enterTypeof_then_clause:', ctx.text);
    }
    const whenThenClause = utils.getLastItem<TypeOfFieldCondition>(this.context.tempData.typeOf.conditions);
    whenThenClause.fieldList = ctx.getChild(1).text.split(',');
  }
  exitTypeof_then_clause(ctx: Parser.Typeof_then_clauseContext) {
    if (this.config.logging) {
      console.log('exitTypeof_then_clause:', ctx.text);
    }
  }
  enterTypeof_else_clause(ctx: Parser.Typeof_else_clauseContext) {
    if (this.config.logging) {
      console.log('enterTypeof_else_clause:', ctx.text);
    }
    this.context.tempData.typeOf.conditions.push({
      type: 'ELSE',
      fieldList: ctx.getChild(1).text.split(','),
    });
  }
  exitTypeof_else_clause(ctx: Parser.Typeof_else_clauseContext) {
    if (this.config.logging) {
      console.log('exitTypeof_else_clause:', ctx.text);
    }
  }
  enterField_list(ctx: Parser.Field_listContext) {
    if (this.config.logging) {
      console.log('enterField_list:', ctx.text);
    }
  }
  exitField_list(ctx: Parser.Field_listContext) {
    if (this.config.logging) {
      console.log('exitField_list:', ctx.text);
    }
  }
  enterObject_spec(ctx: Parser.Object_specContext) {
    if (this.config.logging) {
      console.log('enterObject_spec:', ctx.text);
    }
    this.getSoqlQuery().sObject = ctx.getChild(0).text;
    if (this.config.includeSubqueryAsField && this.context.isSubQuery) {
      if (ctx.getChild(0).text.includes('.')) {
        this.getSoqlQuery().sObject = ctx.getChild(1).text;
        this.getSoqlQuery().sObjectPrefix = ctx.getChild(0).text.replace('.', '');
        this.soqlQuery.fields.push({
          subqueryObjName: ctx.getChild(1).text,
        });
      } else {
        this.soqlQuery.fields.push({
          subqueryObjName: ctx.getChild(0).text,
        });
      }
    }
  }
  exitObject_spec(ctx: Parser.Object_specContext) {
    if (this.config.logging) {
      console.log('exitObject_spec:', ctx.text);
    }
  }
  enterObject_prefix(ctx: Parser.Object_prefixContext) {
    if (this.config.logging) {
      console.log('enterObject_prefix:', ctx.text);
    }
  }
  exitObject_prefix(ctx: Parser.Object_prefixContext) {
    if (this.config.logging) {
      console.log('exitObject_prefix:', ctx.text);
    }
  }
  enterComparison_operator(ctx: Parser.Comparison_operatorContext) {
    if (this.config.logging) {
      console.log('enterComparison_operator:', ctx.text);
    }
  }
  exitComparison_operator(ctx: Parser.Comparison_operatorContext) {
    if (this.config.logging) {
      console.log('exitComparison_operator:', ctx.text);
    }
  }
  enterSet_operator(ctx: Parser.Set_operatorContext) {
    if (this.config.logging) {
      console.log('enterSet_operator:', ctx.text);
    }
  }
  exitSet_operator(ctx: Parser.Set_operatorContext) {
    if (this.config.logging) {
      console.log('exitSet_operator:', ctx.text);
    }
  }
  enterCondition(ctx: Parser.ConditionContext) {
    if (this.config.logging) {
      console.log('enterCondition:', ctx.text);
    }
  }
  exitCondition(ctx: Parser.ConditionContext) {
    if (this.config.logging) {
      console.log('exitCondition:', ctx.text);
    }
  }
  enterCondition1(ctx: Parser.Condition1Context) {
    if (this.config.logging) {
      console.log('enterCondition1:', ctx.text);
    }
  }
  exitCondition1(ctx: Parser.Condition1Context) {
    if (this.config.logging) {
      console.log('exitCondition1:', ctx.text);
    }
  }
  enterParenthesis(ctx: Parser.ParenthesisContext) {
    if (this.config.logging) {
      console.log('enterParenthesis:', ctx.text);
    }
    if (this.context.currentItem === 'where' || this.context.currentItem === 'having') {
      this.context.tempData.nextHasOpenParen = true;
    }
  }
  exitParenthesis(ctx: Parser.ParenthesisContext) {
    if (this.config.logging) {
      console.log('exitParenthesis:', ctx.text);
    }
    if (this.context.currentItem === 'where' || this.context.currentItem === 'having') {
      const currConditionOperation = this.context.tempData.currConditionOperation.left;
      currConditionOperation.closeParen = currConditionOperation.closeParen || 0;
      currConditionOperation.closeParen += 1;
    }
  }
  enterSimple_condition(ctx: Parser.Simple_conditionContext) {
    if (this.config.logging) {
      console.log('enterSimple_condition:', ctx.text);
    }
  }
  exitSimple_condition(ctx: Parser.Simple_conditionContext) {
    if (this.config.logging) {
      console.log('exitSimple_condition:', ctx.text);
    }
  }
  enterField_based_condition(ctx: Parser.Field_based_conditionContext) {
    if (this.config.logging) {
      console.log('enterField_based_condition:', ctx.text);
    }
    if (this.config.logging) {
      console.log('enterLike_based_condition:', ctx.text);
    }
    if (this.context.currentItem === 'where') {
      const currItem: any = {};
      if (!this.context.tempData.currConditionOperation.left) {
        this.context.tempData.currConditionOperation.left = currItem;
        if (this.context.tempData.nextHasOpenParen) {
          currItem.openParen = currItem.openParen || 0;
          currItem.openParen += 1;
          this.context.tempData.nextHasOpenParen = false;
        }
        if (this.context.tempData.nextHasLogicalPrefix) {
          currItem.logicalPrefix = this.context.tempData.nextHasLogicalPrefix;
          this.context.tempData.nextHasLogicalPrefix = null;
        }
      } else {
        this.context.tempData.currConditionOperation.right = currItem;
      }

      currItem.field = ctx.getChild(0).text;
      currItem.operator = ctx.getChild(1).text;
      currItem.value = ctx.getChild(2).text;
    } else if (this.context.currentItem === 'having') {
      const currItem: any = {};
      if (!this.context.tempData.currConditionOperation.left) {
        this.context.tempData.currConditionOperation.left = currItem;
        if (this.context.tempData.nextHasOpenParen) {
          currItem.openParen = currItem.openParen || 0;
          currItem.openParen += 1;
          this.context.tempData.nextHasOpenParen = false;
        }
        if (this.context.tempData.nextHasLogicalPrefix) {
          currItem.logicalPrefix = this.context.tempData.nextHasLogicalPrefix;
          this.context.tempData.nextHasLogicalPrefix = null;
        }
      } else {
        this.context.tempData.currConditionOperation.right = currItem;
      }

      currItem.operator = ctx.getChild(1).text;
      currItem.value = ctx.getChild(2).text;

      // this.context.tempData = {
      //   fn: {},
      //   operator: ctx.getChild(1).text,
      //   value: ctx.getChild(2).text,
      // };
    }
  }
  exitField_based_condition(ctx: Parser.Field_based_conditionContext) {
    if (this.config.logging) {
      console.log('exitField_based_condition:', ctx.text);
    }
  }
  enterSet_based_condition(ctx: Parser.Set_based_conditionContext) {
    if (this.config.logging) {
      console.log('enterSet_based_condition:', ctx.text);
    }
    if (this.context.currentItem === 'where') {
      const currItem: any = {};
      if (!this.context.tempData.currConditionOperation.left) {
        this.context.tempData.currConditionOperation.left = currItem;
        if (this.context.tempData.nextHasOpenParen) {
          currItem.openParen = currItem.openParen || 0;
          currItem.openParen += 1;
          this.context.tempData.nextHasOpenParen = false;
        }
        if (this.context.tempData.nextHasLogicalPrefix) {
          currItem.logicalPrefix = this.context.tempData.nextHasLogicalPrefix;
          this.context.tempData.nextHasLogicalPrefix = null;
        }
      } else {
        this.context.tempData.currConditionOperation.right = currItem;
      }

      currItem.field = ctx.getChild(0).text;
      currItem.operator = (ctx.getChild(1) as Parser.Set_operatorContext).children.map(child => child.text).join(' ');
      currItem.value = (ctx.getChild(2).getChild(1) as Parser.Set_value_listContext).children
        .filter(child => !(child instanceof TerminalNode))
        .map(child => child.text);
    }
  }
  exitSet_based_condition(ctx: Parser.Set_based_conditionContext) {
    if (this.config.logging) {
      console.log('exitSet_based_condition:', ctx.text);
    }
  }
  enterLike_based_condition(ctx: Parser.Like_based_conditionContext) {
    if (this.config.logging) {
      console.log('enterLike_based_condition:', ctx.text);
    }
    if (this.context.currentItem === 'where') {
      // Set current condition in temp data
      const currItem: any = {};
      if (!this.context.tempData.currConditionOperation.left) {
        this.context.tempData.currConditionOperation.left = currItem;
        if (this.context.tempData.nextHasOpenParen) {
          currItem.openParen = currItem.openParen || 0;
          currItem.openParen += 1;
          this.context.tempData.nextHasOpenParen = false;
        }
        if (this.context.tempData.nextHasLogicalPrefix) {
          currItem.logicalPrefix = this.context.tempData.nextHasLogicalPrefix;
          this.context.tempData.nextHasLogicalPrefix = null;
        }
      } else {
        this.context.tempData.currConditionOperation.right = currItem;
      }

      currItem.field = ctx.getChild(0).text;
      currItem.operator = 'LIKE';
      currItem.value = ctx.getChild(ctx.children.length - 1).text;
    }
  }
  exitLike_based_condition(ctx: Parser.Like_based_conditionContext) {
    if (this.config.logging) {
      console.log('exitLike_based_condition:', ctx.text);
    }
  }
  enterCondition_field(ctx: Parser.Condition_fieldContext) {
    if (this.config.logging) {
      console.log('enterCondition_field:', ctx.text);
    }
  }
  exitCondition_field(ctx: Parser.Condition_fieldContext) {
    if (this.config.logging) {
      console.log('exitCondition_field:', ctx.text);
    }
  }
  enterSet_values(ctx: Parser.Set_valuesContext) {
    if (this.config.logging) {
      console.log('enterSet_values:', ctx.text);
    }
  }
  exitSet_values(ctx: Parser.Set_valuesContext) {
    if (this.config.logging) {
      console.log('exitSet_values:', ctx.text);
    }
  }
  enterSet_value_list(ctx: Parser.Set_value_listContext) {
    if (this.config.logging) {
      console.log('enterSet_value_list:', ctx.text);
    }
  }
  exitSet_value_list(ctx: Parser.Set_value_listContext) {
    if (this.config.logging) {
      console.log('exitSet_value_list:', ctx.text);
    }
  }
  enterWith_clause(ctx: Parser.With_clauseContext) {
    if (this.config.logging) {
      console.log('enterWith_clause:', ctx.text);
    }
  }
  exitWith_clause(ctx: Parser.With_clauseContext) {
    if (this.config.logging) {
      console.log('exitWith_clause:', ctx.text);
    }
  }
  enterWith_plain_clause(ctx: Parser.With_plain_clauseContext) {
    if (this.config.logging) {
      console.log('enterWith_plain_clause:', ctx.text);
    }
  }
  exitWith_plain_clause(ctx: Parser.With_plain_clauseContext) {
    if (this.config.logging) {
      console.log('exitWith_plain_clause:', ctx.text);
    }
  }
  enterWith_data_category_clause(ctx: Parser.With_data_category_clauseContext) {
    if (this.config.logging) {
      console.log('enterWith_data_category_clause:', ctx.text);
    }
    this.context.currentItem = 'withDataCategory';
    this.context.tempData = {
      conditions: [],
    };
  }
  exitWith_data_category_clause(ctx: Parser.With_data_category_clauseContext) {
    if (this.config.logging) {
      console.log('exitWith_data_category_clause:', ctx.text);
    }
    this.getSoqlQuery().withDataCategory = this.context.tempData;
    this.context.tempData = null;
  }
  enterData_category_spec_list(ctx: Parser.Data_category_spec_listContext) {
    if (this.config.logging) {
      console.log('enterData_category_spec_list:', ctx.text);
    }
  }
  exitData_category_spec_list(ctx: Parser.Data_category_spec_listContext) {
    if (this.config.logging) {
      console.log('exitData_category_spec_list:', ctx.text);
    }
  }
  enterData_category_spec(ctx: Parser.Data_category_specContext) {
    if (this.config.logging) {
      console.log('enterData_category_spec:', ctx.text);
    }
  }
  exitData_category_spec(ctx: Parser.Data_category_specContext) {
    if (this.config.logging) {
      console.log('exitData_category_spec:', ctx.text);
    }
  }
  enterData_category_parameter_list(ctx: Parser.Data_category_parameter_listContext) {
    if (this.config.logging) {
      console.log('enterData_category_parameter_list:', ctx.text);
    }
    const condition = utils.getLastItem<WithDataCategoryCondition>(this.context.tempData.conditions);
    condition.parameters = [];
  }
  exitData_category_parameter_list(ctx: Parser.Data_category_parameter_listContext) {
    if (this.config.logging) {
      console.log('exitData_category_parameter_list:', ctx.text);
    }
  }
  enterData_category_selector(ctx: Parser.Data_category_selectorContext) {
    if (this.config.logging) {
      console.log('enterData_category_selector:', ctx.text);
    }
    const condition = utils.getLastItem<WithDataCategoryCondition>(this.context.tempData.conditions);
    condition.selector = ctx.text.toUpperCase() as GroupSelector;
  }
  exitData_category_selector(ctx: Parser.Data_category_selectorContext) {
    if (this.config.logging) {
      console.log('exitData_category_selector:', ctx.text);
    }
  }
  enterGroup_by_plain_clause(ctx: Parser.Group_by_plain_clauseContext) {
    if (this.config.logging) {
      console.log('enterGroup_by_plain_clause:', ctx.text);
    }
  }
  exitGroup_by_plain_clause(ctx: Parser.Group_by_plain_clauseContext) {
    if (this.config.logging) {
      console.log('exitGroup_by_plain_clause:', ctx.text);
    }
  }
  enterGroup_by_rollup_clause(ctx: Parser.Group_by_rollup_clauseContext) {
    if (this.config.logging) {
      console.log('enterGroup_by_rollup_clause:', ctx.text);
    }
    this.context.tempData.type = 'ROLLUP';
  }
  exitGroup_by_rollup_clause(ctx: Parser.Group_by_rollup_clauseContext) {
    if (this.config.logging) {
      console.log('exitGroup_by_rollup_clause:', ctx.text);
    }
  }
  enterGroup_by_cube_clause(ctx: Parser.Group_by_cube_clauseContext) {
    if (this.config.logging) {
      console.log('enterGroup_by_cube_clause:', ctx.text);
    }
    this.context.tempData.type = 'CUBE';
  }
  exitGroup_by_cube_clause(ctx: Parser.Group_by_cube_clauseContext) {
    if (this.config.logging) {
      console.log('exitGroup_by_cube_clause:', ctx.text);
    }
  }
  enterGroup_by_list(ctx: Parser.Group_by_listContext) {
    if (this.config.logging) {
      console.log('enterGroup_by_list:', ctx.text);
    }
  }
  exitGroup_by_list(ctx: Parser.Group_by_listContext) {
    if (this.config.logging) {
      console.log('exitGroup_by_list:', ctx.text);
    }
  }
  enterGroup_by_spec(ctx: Parser.Group_by_specContext) {
    if (this.config.logging) {
      console.log('enterGroup_by_spec:', ctx.text);
    }
    if (Array.isArray(this.context.tempData.field)) {
      this.context.tempData.field.push(ctx.text);
    } else if (utils.isString(this.context.tempData.field)) {
      this.context.tempData.field = [this.context.tempData.field, ctx.text];
    } else {
      this.context.tempData.field = ctx.text;
    }
  }
  exitGroup_by_spec(ctx: Parser.Group_by_specContext) {
    if (this.config.logging) {
      console.log('exitGroup_by_spec:', ctx.text);
    }
  }
  enterOrder_by_list(ctx: Parser.Order_by_listContext) {
    if (this.config.logging) {
      console.log('enterOrder_by_list:', ctx.text);
    }
  }
  exitOrder_by_list(ctx: Parser.Order_by_listContext) {
    if (this.config.logging) {
      console.log('exitOrder_by_list:', ctx.text);
    }
  }
  enterOrder_by_spec(ctx: Parser.Order_by_specContext) {
    if (this.config.logging) {
      console.log('enterOrder_by_spec:', ctx.text);
    }
    this.context.tempData = {};
  }
  exitOrder_by_spec(ctx: Parser.Order_by_specContext) {
    if (this.config.logging) {
      console.log('exitOrder_by_spec:', ctx.text);
    }
    const soqlQuery = this.getSoqlQuery();
    if (utils.isNil(soqlQuery.orderBy)) {
      soqlQuery.orderBy = this.context.tempData;
    } else if (Array.isArray(soqlQuery.orderBy)) {
      (soqlQuery.orderBy as Array<OrderByClause>).push(this.context.tempData);
    } else {
      soqlQuery.orderBy = [soqlQuery.orderBy, this.context.tempData];
    }
  }
  enterOrder_by_direction_clause(ctx: Parser.Order_by_direction_clauseContext) {
    if (this.config.logging) {
      console.log('enterOrder_by_direction_clause:', ctx.text);
    }
    ctx.text;
    this.context.tempData.order = ctx.text.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';
  }
  exitOrder_by_direction_clause(ctx: Parser.Order_by_direction_clauseContext) {
    if (this.config.logging) {
      console.log('exitOrder_by_direction_clause:', ctx.text);
    }
  }
  enterOrder_by_nulls_clause(ctx: Parser.Order_by_nulls_clauseContext) {
    if (this.config.logging) {
      console.log('enterOrder_by_nulls_clause:', ctx.text);
    }
    this.context.tempData.nulls = ctx.getChild(1).text.toUpperCase() === 'FIRST' ? 'FIRST' : 'LAST';
  }
  exitOrder_by_nulls_clause(ctx: Parser.Order_by_nulls_clauseContext) {
    if (this.config.logging) {
      console.log('exitOrder_by_nulls_clause:', ctx.text);
    }
  }
  enterOrder_by_field(ctx: Parser.Order_by_fieldContext) {
    if (this.config.logging) {
      console.log('enterOrder_by_field:', ctx.text);
    }
    // If order by is not a function, set field
    if (ctx.getChild(0) instanceof Parser.Function_callContext) {
      this.context.tempData.fn = { text: ctx.text };
    } else {
      this.context.tempData.field = ctx.text;
    }
  }
  exitOrder_by_field(ctx: Parser.Order_by_fieldContext) {
    if (this.config.logging) {
      console.log('exitOrder_by_field:', ctx.text);
    }
  }
  enterFor_value(ctx: Parser.For_valueContext) {
    if (this.config.logging) {
      console.log('enterFor_value:', ctx.text);
    }
    this.getSoqlQuery().for = ctx.text.toUpperCase() as ForClause;
  }
  exitFor_value(ctx: Parser.For_valueContext) {
    if (this.config.logging) {
      console.log('exitFor_value:', ctx.text);
    }
  }
  enterUpdate_value(ctx: Parser.Update_valueContext) {
    if (this.config.logging) {
      console.log('enterUpdate_value:', ctx.text);
    }
  }
  exitUpdate_value(ctx: Parser.Update_valueContext) {
    if (this.config.logging) {
      console.log('exitUpdate_value:', ctx.text);
    }
    this.getSoqlQuery().update = ctx.text as UpdateClause;
  }
}
