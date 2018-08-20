/*
 * Copyright (c) Austin Turner
 * The software in this package is published under the terms of the CPAL v1.0
 * license, a copy of which has been included with this distribution in the
 * LICENSE.txt file.
 */
import { SOQLListener } from '../generated//SOQLListener';
import * as Parser from '../generated/SOQLParser';
import { SoqlQuery } from './models/SoqlQuery.model';
import { TerminalNode } from 'antlr4ts/tree';
import * as _ from 'lodash';
import { SoqlQueryConfig } from './SoqlParser';

type currItem = 'field' | 'from' | 'where' | 'having';

interface Context {
  isSubQuery: boolean;
  currSubqueryIdx: number;
  currWhereConditionGroupIdx: number;
  currentItem: currItem;
  tempData: any;
}

export class Listener implements SOQLListener {
  context: Context = {
    isSubQuery: false,
    currSubqueryIdx: -1,
    currWhereConditionGroupIdx: 0,
    currentItem: null,
    tempData: null,
  };

  soqlQuery: SoqlQuery;

  constructor(private config: Partial<SoqlQueryConfig> = {}) {
    config.logging = _.isBoolean(config.logging) ? config.logging : false;
    config.includeSubqueryAsField = _.isBoolean(config.includeSubqueryAsField) ? config.includeSubqueryAsField : true;
    this.soqlQuery = new SoqlQuery();
  }

  getSoqlQuery(): SoqlQuery {
    return this.context.isSubQuery ? this.soqlQuery.subqueries[this.context.currSubqueryIdx] : this.soqlQuery;
  }

  enterKeywords_alias_allowed(ctx: Parser.Keywords_alias_allowedContext) {
    if (this.config.logging) {
      console.log('enterKeywords_alias_allowed', ctx);
    }
  }
  exitKeywords_alias_allowed(ctx: Parser.Keywords_alias_allowedContext) {
    if (this.config.logging) {
      console.log('exitKeywords_alias_allowed', ctx);
    }
  }
  enterKeywords_name_allowed(ctx: Parser.Keywords_name_allowedContext) {
    if (this.config.logging) {
      console.log('enterKeywords_name_allowed', ctx);
    }
  }
  exitKeywords_name_allowed(ctx: Parser.Keywords_name_allowedContext) {
    if (this.config.logging) {
      console.log('exitKeywords_name_allowed', ctx);
    }
  }
  enterName(ctx: Parser.NameContext) {
    if (this.config.logging) {
      console.log('enterName', ctx);
    }
  }
  exitName(ctx: Parser.NameContext) {
    if (this.config.logging) {
      console.log('exitName', ctx);
    }
  }
  enterObject_name(ctx: Parser.Object_nameContext) {
    if (this.config.logging) {
      console.log('enterObject_name', ctx);
    }
  }
  exitObject_name(ctx: Parser.Object_nameContext) {
    if (this.config.logging) {
      console.log('exitObject_name', ctx);
    }
  }
  enterField_name(ctx: Parser.Field_nameContext) {
    if (this.config.logging) {
      console.log('enterField_name', ctx);
    }
  }
  exitField_name(ctx: Parser.Field_nameContext) {
    if (this.config.logging) {
      console.log('exitField_name', ctx);
    }
  }
  enterFilter_scope_name(ctx: Parser.Filter_scope_nameContext) {
    if (this.config.logging) {
      console.log('enterFilter_scope_name', ctx);
    }
  }
  exitFilter_scope_name(ctx: Parser.Filter_scope_nameContext) {
    if (this.config.logging) {
      console.log('exitFilter_scope_name', ctx);
    }
  }
  enterData_category_group_name(ctx: Parser.Data_category_group_nameContext) {
    if (this.config.logging) {
      console.log('enterData_category_group_name', ctx);
    }
  }
  exitData_category_group_name(ctx: Parser.Data_category_group_nameContext) {
    if (this.config.logging) {
      console.log('exitData_category_group_name', ctx);
    }
  }
  enterData_category_name(ctx: Parser.Data_category_nameContext) {
    if (this.config.logging) {
      console.log('enterData_category_name', ctx);
    }
  }
  exitData_category_name(ctx: Parser.Data_category_nameContext) {
    if (this.config.logging) {
      console.log('exitData_category_name', ctx);
    }
  }
  enterAlias_name(ctx: Parser.Alias_nameContext) {
    if (this.config.logging) {
      console.log('enterAlias_name', ctx);
    }
    this.context.tempData.alias = ctx.text;
  }
  exitAlias_name(ctx: Parser.Alias_nameContext) {
    if (this.config.logging) {
      console.log('exitAlias_name', ctx);
    }
  }
  enterAlias(ctx: Parser.AliasContext) {
    if (this.config.logging) {
      console.log('enterAlias', ctx);
    }
  }
  exitAlias(ctx: Parser.AliasContext) {
    if (this.config.logging) {
      console.log('exitAlias', ctx);
    }
  }
  enterLiteral(ctx: Parser.LiteralContext) {
    if (this.config.logging) {
      console.log('enterLiteral', ctx);
    }
  }
  exitLiteral(ctx: Parser.LiteralContext) {
    if (this.config.logging) {
      console.log('exitLiteral', ctx);
    }
  }
  enterDate_formula_literal(ctx: Parser.Date_formula_literalContext) {
    if (this.config.logging) {
      console.log('enterDate_formula_literal', ctx);
    }
  }
  exitDate_formula_literal(ctx: Parser.Date_formula_literalContext) {
    if (this.config.logging) {
      console.log('exitDate_formula_literal', ctx);
    }
  }
  enterDate_formula_n_literal_name(ctx: Parser.Date_formula_n_literal_nameContext) {
    if (this.config.logging) {
      console.log('enterDate_formula_n_literal_name', ctx);
    }
  }
  exitDate_formula_n_literal_name(ctx: Parser.Date_formula_n_literal_nameContext) {
    if (this.config.logging) {
      console.log('exitDate_formula_n_literal_name', ctx);
    }
  }
  enterDate_formula_n_literal(ctx: Parser.Date_formula_n_literalContext) {
    if (this.config.logging) {
      console.log('enterDate_formula_n_literal', ctx);
    }
  }
  exitDate_formula_n_literal(ctx: Parser.Date_formula_n_literalContext) {
    if (this.config.logging) {
      console.log('exitDate_formula_n_literal', ctx);
    }
  }
  enterDatetime_literal(ctx: Parser.Datetime_literalContext) {
    if (this.config.logging) {
      console.log('enterDatetime_literal', ctx);
    }
    if (this.context.currentItem === 'field') {
      this.context.tempData.type = 'datetime';
    }
  }
  exitDatetime_literal(ctx: Parser.Datetime_literalContext) {
    if (this.config.logging) {
      console.log('exitDatetime_literal', ctx);
    }
  }
  enterDate_literal(ctx: Parser.Date_literalContext) {
    if (this.config.logging) {
      console.log('enterDate_literal', ctx);
    }
    if (this.context.currentItem === 'field') {
      this.context.tempData.type = 'date';
    }
  }
  exitDate_literal(ctx: Parser.Date_literalContext) {
    if (this.config.logging) {
      console.log('exitDate_literal', ctx);
    }
  }
  enterInteger_literal(ctx: Parser.Integer_literalContext) {
    if (this.config.logging) {
      console.log('enterInteger_literal', ctx);
    }
    if (this.context.currentItem === 'field') {
      this.context.tempData.type = 'integer';
    }
  }
  exitInteger_literal(ctx: Parser.Integer_literalContext) {
    if (this.config.logging) {
      console.log('exitInteger_literal', ctx);
    }
  }
  enterReal_literal(ctx: Parser.Real_literalContext) {
    if (this.config.logging) {
      console.log('enterReal_literal', ctx);
    }
  }
  exitReal_literal(ctx: Parser.Real_literalContext) {
    if (this.config.logging) {
      console.log('exitReal_literal', ctx);
    }
  }
  enterString_literal(ctx: Parser.String_literalContext) {
    if (this.config.logging) {
      console.log('enterString_literal', ctx);
    }
  }
  exitString_literal(ctx: Parser.String_literalContext) {
    if (this.config.logging) {
      console.log('exitString_literal', ctx);
    }
  }
  enterBoolean_literal(ctx: Parser.Boolean_literalContext) {
    if (this.config.logging) {
      console.log('enterBoolean_literal', ctx);
    }
  }
  exitBoolean_literal(ctx: Parser.Boolean_literalContext) {
    if (this.config.logging) {
      console.log('exitBoolean_literal', ctx);
    }
  }
  enterNull_literal(ctx: Parser.Null_literalContext) {
    if (this.config.logging) {
      console.log('enterNull_literal', ctx);
    }
  }
  exitNull_literal(ctx: Parser.Null_literalContext) {
    if (this.config.logging) {
      console.log('exitNull_literal', ctx);
    }
  }
  enterFunction_name(ctx: Parser.Function_nameContext) {
    if (this.config.logging) {
      console.log('enterFunction_name', ctx);
    }
  }
  exitFunction_name(ctx: Parser.Function_nameContext) {
    if (this.config.logging) {
      console.log('exitFunction_name', ctx);
    }
  }
  enterFunction_date(ctx: Parser.Function_dateContext) {
    if (this.config.logging) {
      console.log('enterFunction_date', ctx);
    }
  }
  exitFunction_date(ctx: Parser.Function_dateContext) {
    if (this.config.logging) {
      console.log('exitFunction_date', ctx);
    }
  }
  enterFunction_aggregate(ctx: Parser.Function_aggregateContext) {
    if (this.config.logging) {
      console.log('enterFunction_aggregate', ctx);
    }
    this.context.tempData = {
      fnType: 'aggregate',
      name: ctx.text,
    };
  }
  exitFunction_aggregate(ctx: Parser.Function_aggregateContext) {
    if (this.config.logging) {
      console.log('exitFunction_aggregate', ctx);
    }
  }
  enterFunction_location(ctx: Parser.Function_locationContext) {
    if (this.config.logging) {
      console.log('enterFunction_location', ctx);
    }
  }
  exitFunction_location(ctx: Parser.Function_locationContext) {
    if (this.config.logging) {
      console.log('exitFunction_location', ctx);
    }
  }
  enterFunction_other(ctx: Parser.Function_otherContext) {
    if (this.config.logging) {
      console.log('enterFunction_other', ctx);
    }
  }
  exitFunction_other(ctx: Parser.Function_otherContext) {
    if (this.config.logging) {
      console.log('exitFunction_other', ctx);
    }
  }
  enterSoql_query(ctx: Parser.Soql_queryContext) {
    if (this.config.logging) {
      console.log('enterSoql_query', ctx);
    }
  }
  exitSoql_query(ctx: Parser.Soql_queryContext) {
    if (this.config.logging) {
      console.log('exitSoql_query', ctx);
    }
  }
  enterSelect_clause(ctx: Parser.Select_clauseContext) {
    if (this.config.logging) {
      console.log('enterSelect_clause', ctx);
    }
  }
  exitSelect_clause(ctx: Parser.Select_clauseContext) {
    if (this.config.logging) {
      console.log('exitSelect_clause', ctx);
    }
  }
  enterFrom_clause(ctx: Parser.From_clauseContext) {
    if (this.config.logging) {
      console.log('enterFrom_clause', ctx);
    }
    this.context.currentItem = 'from';
  }
  exitFrom_clause(ctx: Parser.From_clauseContext) {
    if (this.config.logging) {
      console.log('exitFrom_clause', ctx);
    }
  }
  enterUsing_clause(ctx: Parser.Using_clauseContext) {
    if (this.config.logging) {
      console.log('enterUsing_clause', ctx);
    }
  }
  exitUsing_clause(ctx: Parser.Using_clauseContext) {
    if (this.config.logging) {
      console.log('exitUsing_clause', ctx);
    }
  }
  enterWhere_clause(ctx: Parser.Where_clauseContext) {
    if (this.config.logging) {
      console.log('enterWhere_clause', ctx);
    }
    this.context.currentItem = 'where';
  }
  exitWhere_clause(ctx: Parser.Where_clauseContext) {
    if (this.config.logging) {
      console.log('exitWhere_clause', ctx);
    }
  }
  enterGroupby_clause(ctx: Parser.Groupby_clauseContext) {
    if (this.config.logging) {
      console.log('enterGroupby_clause', ctx);
    }
  }
  exitGroupby_clause(ctx: Parser.Groupby_clauseContext) {
    if (this.config.logging) {
      console.log('exitGroupby_clause', ctx);
    }
  }
  enterHaving_clause(ctx: Parser.Having_clauseContext) {
    if (this.config.logging) {
      console.log('enterHaving_clause', ctx);
    }
    this.context.currentItem = 'having';
  }
  exitHaving_clause(ctx: Parser.Having_clauseContext) {
    if (this.config.logging) {
      console.log('exitHaving_clause', ctx);
    }
    this.getSoqlQuery().having = this.context.tempData;
  }
  enterOrderby_clause(ctx: Parser.Orderby_clauseContext) {
    if (this.config.logging) {
      console.log('enterOrderby_clause', ctx);
    }
    this.context.tempData = {};
  }
  exitOrderby_clause(ctx: Parser.Orderby_clauseContext) {
    if (this.config.logging) {
      console.log('exitOrderby_clause', ctx);
    }
    this.getSoqlQuery().orderBy = this.context.tempData;
  }
  enterLimit_clause(ctx: Parser.Limit_clauseContext) {
    if (this.config.logging) {
      console.log('enterLimit_clause', ctx);
    }
    this.getSoqlQuery().limit = Number(ctx.getChild(1).text);
  }
  exitLimit_clause(ctx: Parser.Limit_clauseContext) {
    if (this.config.logging) {
      console.log('exitLimit_clause', ctx);
    }
  }
  enterOffset_clause(ctx: Parser.Offset_clauseContext) {
    if (this.config.logging) {
      console.log('enterOffset_clause', ctx);
    }
    this.getSoqlQuery().offset = Number(ctx.getChild(1).text);
  }
  exitOffset_clause(ctx: Parser.Offset_clauseContext) {
    if (this.config.logging) {
      console.log('exitOffset_clause', ctx);
    }
  }
  enterFor_clause(ctx: Parser.For_clauseContext) {
    if (this.config.logging) {
      console.log('enterFor_clause', ctx);
    }
  }
  exitFor_clause(ctx: Parser.For_clauseContext) {
    if (this.config.logging) {
      console.log('exitFor_clause', ctx);
    }
  }
  enterUpdate_clause(ctx: Parser.Update_clauseContext) {
    if (this.config.logging) {
      console.log('enterUpdate_clause', ctx);
    }
  }
  exitUpdate_clause(ctx: Parser.Update_clauseContext) {
    if (this.config.logging) {
      console.log('exitUpdate_clause', ctx);
    }
  }
  enterSoql_subquery(ctx: Parser.Soql_subqueryContext) {
    if (this.config.logging) {
      console.log('enterSoql_subquery', ctx);
    }
    this.context.isSubQuery = true;
    this.soqlQuery.subqueries.push(new SoqlQuery());
    this.context.currSubqueryIdx = this.soqlQuery.subqueries.length - 1;
  }
  exitSoql_subquery(ctx: Parser.Soql_subqueryContext) {
    if (this.config.logging) {
      console.log('exitSoql_subquery', ctx);
    }
    this.context.isSubQuery = false;
    this.context.currWhereConditionGroupIdx = 0; // ensure reset for base query or next subquery
  }
  enterSubquery_select_clause(ctx: Parser.Subquery_select_clauseContext) {
    if (this.config.logging) {
      console.log('enterSubquery_select_clause', ctx);
    }
  }
  exitSubquery_select_clause(ctx: Parser.Subquery_select_clauseContext) {
    if (this.config.logging) {
      console.log('exitSubquery_select_clause', ctx);
    }
  }
  enterSelect_spec(ctx: Parser.Select_specContext) {
    if (this.config.logging) {
      console.log('enterSelect_spec', ctx);
    }
    this.context.currentItem = 'field';
  }
  exitSelect_spec(ctx: Parser.Select_specContext) {
    if (this.config.logging) {
      console.log('exitSelect_spec', ctx);
    }
  }
  enterSubquery_select_spec(ctx: Parser.Subquery_select_specContext) {
    if (this.config.logging) {
      console.log('enterSubquery_select_spec', ctx);
    }
    this.context.currentItem = 'field';
  }
  exitSubquery_select_spec(ctx: Parser.Subquery_select_specContext) {
    if (this.config.logging) {
      console.log('exitSubquery_select_spec', ctx);
    }
  }
  enterField_spec(ctx: Parser.Field_specContext) {
    if (this.config.logging) {
      console.log('enterField_spec', ctx);
    }
    this.context.currentItem = 'field';
    let relatedFields: string[];
    if (ctx.text.includes('.')) {
      this.getSoqlQuery().fields.push({ text: ctx.text, relationshipFields: ctx.text.split('.') });
    } else {
      this.getSoqlQuery().fields.push({ text: ctx.text });
    }
  }
  // exitField_spec(ctx: Parser.Field_specContext) {
  //   if(this.config.logging) { console.log('exitField_spec', ctx); }
  // };
  enterFunction_call_spec(ctx: Parser.Function_call_specContext) {
    if (this.config.logging) {
      console.log('enterFunction_call_spec', ctx);
    }
  }
  exitFunction_call_spec(ctx: Parser.Function_call_specContext) {
    if (this.config.logging) {
      console.log('exitFunction_call_spec', ctx);
    }
    if (this.context.currentItem === 'field') {
      this.getSoqlQuery().fields.push({ fn: this.context.tempData });
      this.context.tempData = null;
    }
  }
  enterField(ctx: Parser.FieldContext) {
    if (this.config.logging) {
      console.log('enterField', ctx);
    }
  }
  exitField(ctx: Parser.FieldContext) {
    if (this.config.logging) {
      console.log('exitField', ctx);
    }
  }
  enterFunction_call(ctx: Parser.Function_callContext) {
    if (this.config.logging) {
      console.log('enterFunction_call', ctx);
    }
  }
  exitFunction_call(ctx: Parser.Function_callContext) {
    if (this.config.logging) {
      console.log('exitFunction_call', ctx);
    }
  }
  enterFunction_parameter_list(ctx: Parser.Function_parameter_listContext) {
    if (this.config.logging) {
      console.log('enterFunction_parameter_list', ctx);
    }
  }
  exitFunction_parameter_list(ctx: Parser.Function_parameter_listContext) {
    if (this.config.logging) {
      console.log('exitFunction_parameter_list', ctx);
    }
  }
  enterFunction_parameter(ctx: Parser.Function_parameterContext) {
    if (this.config.logging) {
      console.log('enterFunction_parameter', ctx);
    }
    this.context.tempData.value = ctx.text;
  }
  exitFunction_parameter(ctx: Parser.Function_parameterContext) {
    if (this.config.logging) {
      console.log('exitFunction_parameter', ctx);
    }
  }
  enterTypeof_spec(ctx: Parser.Typeof_specContext) {
    if (this.config.logging) {
      console.log('enterTypeof_spec', ctx);
    }
  }
  exitTypeof_spec(ctx: Parser.Typeof_specContext) {
    if (this.config.logging) {
      console.log('exitTypeof_spec', ctx);
    }
  }
  enterTypeof_when_then_clause_list(ctx: Parser.Typeof_when_then_clause_listContext) {
    if (this.config.logging) {
      console.log('enterTypeof_when_then_clause_list', ctx);
    }
  }
  exitTypeof_when_then_clause_list(ctx: Parser.Typeof_when_then_clause_listContext) {
    if (this.config.logging) {
      console.log('exitTypeof_when_then_clause_list', ctx);
    }
  }
  enterTypeof_when_then_clause(ctx: Parser.Typeof_when_then_clauseContext) {
    if (this.config.logging) {
      console.log('enterTypeof_when_then_clause', ctx);
    }
  }
  exitTypeof_when_then_clause(ctx: Parser.Typeof_when_then_clauseContext) {
    if (this.config.logging) {
      console.log('exitTypeof_when_then_clause', ctx);
    }
  }
  enterTypeof_then_clause(ctx: Parser.Typeof_then_clauseContext) {
    if (this.config.logging) {
      console.log('enterTypeof_then_clause', ctx);
    }
  }
  exitTypeof_then_clause(ctx: Parser.Typeof_then_clauseContext) {
    if (this.config.logging) {
      console.log('exitTypeof_then_clause', ctx);
    }
  }
  enterTypeof_else_clause(ctx: Parser.Typeof_else_clauseContext) {
    if (this.config.logging) {
      console.log('enterTypeof_else_clause', ctx);
    }
  }
  exitTypeof_else_clause(ctx: Parser.Typeof_else_clauseContext) {
    if (this.config.logging) {
      console.log('exitTypeof_else_clause', ctx);
    }
  }
  enterField_list(ctx: Parser.Field_listContext) {
    if (this.config.logging) {
      console.log('enterField_list', ctx);
    }
  }
  exitField_list(ctx: Parser.Field_listContext) {
    if (this.config.logging) {
      console.log('exitField_list', ctx);
    }
  }
  enterObject_spec(ctx: Parser.Object_specContext) {
    if (this.config.logging) {
      console.log('enterObject_spec', ctx);
    }
    this.getSoqlQuery().name = ctx.getChild(0).text;
    if (this.config.includeSubqueryAsField && this.context.isSubQuery) {
      this.soqlQuery.fields.push({
        subqueryObjName: ctx.text,
      });
    }
  }
  exitObject_spec(ctx: Parser.Object_specContext) {
    if (this.config.logging) {
      console.log('exitObject_spec', ctx);
    }
  }
  enterObject_prefix(ctx: Parser.Object_prefixContext) {
    if (this.config.logging) {
      console.log('enterObject_prefix', ctx);
    }
  }
  exitObject_prefix(ctx: Parser.Object_prefixContext) {
    if (this.config.logging) {
      console.log('exitObject_prefix', ctx);
    }
  }
  enterComparison_operator(ctx: Parser.Comparison_operatorContext) {
    if (this.config.logging) {
      console.log('enterComparison_operator', ctx);
    }
  }
  exitComparison_operator(ctx: Parser.Comparison_operatorContext) {
    if (this.config.logging) {
      console.log('exitComparison_operator', ctx);
    }
  }
  enterSet_operator(ctx: Parser.Set_operatorContext) {
    if (this.config.logging) {
      console.log('enterSet_operator', ctx);
    }
  }
  exitSet_operator(ctx: Parser.Set_operatorContext) {
    if (this.config.logging) {
      console.log('exitSet_operator', ctx);
    }
  }
  enterCondition(ctx: Parser.ConditionContext) {
    if (this.config.logging) {
      console.log('enterCondition', ctx);
    }
  }
  exitCondition(ctx: Parser.ConditionContext) {
    if (this.config.logging) {
      console.log('exitCondition', ctx);
    }
  }
  enterCondition1(ctx: Parser.Condition1Context) {
    if (this.config.logging) {
      console.log('enterCondition1', ctx);
    }
  }
  exitCondition1(ctx: Parser.Condition1Context) {
    if (this.config.logging) {
      console.log('exitCondition1', ctx);
    }
    if (this.context.currentItem === 'where' && this.context.tempData) {
      this.getSoqlQuery().addWhereCondition(this.context.tempData, this.context.currWhereConditionGroupIdx);
      this.context.tempData = null;
    }
  }
  enterParenthesis(ctx: Parser.ParenthesisContext) {
    if (this.config.logging) {
      console.log('enterParenthesis', ctx);
    }
  }
  exitParenthesis(ctx: Parser.ParenthesisContext) {
    if (this.config.logging) {
      console.log('exitParenthesis', ctx);
    }
    this.context.currWhereConditionGroupIdx++;
  }
  enterSimple_condition(ctx: Parser.Simple_conditionContext) {
    if (this.config.logging) {
      console.log('enterSimple_condition', ctx);
    }
  }
  exitSimple_condition(ctx: Parser.Simple_conditionContext) {
    if (this.config.logging) {
      console.log('exitSimple_condition', ctx);
    }
  }
  enterField_based_condition(ctx: Parser.Field_based_conditionContext) {
    if (this.config.logging) {
      console.log('enterField_based_condition', ctx);
    }
    if (this.config.logging) {
      console.log('enterLike_based_condition', ctx);
    }
    if (this.context.currentItem === 'where') {
      this.context.tempData = {
        field: ctx.getChild(0).text,
        operator: ctx.getChild(1).text,
        value: ctx.getChild(2).text,
      };
    }
    if (this.context.currentItem === 'having') {
      // FIXME: add type information for value
      // TODO: we could also add the field if we wanted to instead of just the function
      this.context.tempData = {
        fn: ctx.getChild(0).text,
        operator: ctx.getChild(1).text,
        value: ctx.getChild(2).text,
      };
    }
  }
  exitField_based_condition(ctx: Parser.Field_based_conditionContext) {
    if (this.config.logging) {
      console.log('exitField_based_condition', ctx);
    }
  }
  enterSet_based_condition(ctx: Parser.Set_based_conditionContext) {
    if (this.config.logging) {
      console.log('enterSet_based_condition', ctx);
    }
    this.context.tempData = {
      field: ctx.getChild(0).text,
      operator: (ctx.getChild(1) as Parser.Set_operatorContext).children.map(child => child.text).join(' '),
      value: (ctx.getChild(2).getChild(1) as Parser.Set_value_listContext).children
        .filter(child => !(child instanceof TerminalNode))
        .map(child => child.text),
    };
  }
  exitSet_based_condition(ctx: Parser.Set_based_conditionContext) {
    if (this.config.logging) {
      console.log('exitSet_based_condition', ctx);
    }
  }
  enterLike_based_condition(ctx: Parser.Like_based_conditionContext) {
    if (this.config.logging) {
      console.log('enterLike_based_condition', ctx);
    }
    if (this.context.currentItem === 'where') {
      this.context.tempData = {
        field: ctx.getChild(0).text,
        operator: 'LIKE',
        value: ctx.getChild(ctx.children.length - 1).text,
      };
    }
  }
  exitLike_based_condition(ctx: Parser.Like_based_conditionContext) {
    if (this.config.logging) {
      console.log('exitLike_based_condition', ctx);
    }
  }
  enterCondition_field(ctx: Parser.Condition_fieldContext) {
    if (this.config.logging) {
      console.log('enterCondition_field', ctx);
    }
  }
  exitCondition_field(ctx: Parser.Condition_fieldContext) {
    if (this.config.logging) {
      console.log('exitCondition_field', ctx);
    }
  }
  enterSet_values(ctx: Parser.Set_valuesContext) {
    if (this.config.logging) {
      console.log('enterSet_values', ctx);
    }
  }
  exitSet_values(ctx: Parser.Set_valuesContext) {
    if (this.config.logging) {
      console.log('exitSet_values', ctx);
    }
  }
  enterSet_value_list(ctx: Parser.Set_value_listContext) {
    if (this.config.logging) {
      console.log('enterSet_value_list', ctx);
    }
  }
  exitSet_value_list(ctx: Parser.Set_value_listContext) {
    if (this.config.logging) {
      console.log('exitSet_value_list', ctx);
    }
  }
  enterWith_clause(ctx: Parser.With_clauseContext) {
    if (this.config.logging) {
      console.log('enterWith_clause', ctx);
    }
  }
  exitWith_clause(ctx: Parser.With_clauseContext) {
    if (this.config.logging) {
      console.log('exitWith_clause', ctx);
    }
  }
  enterWith_plain_clause(ctx: Parser.With_plain_clauseContext) {
    if (this.config.logging) {
      console.log('enterWith_plain_clause', ctx);
    }
  }
  exitWith_plain_clause(ctx: Parser.With_plain_clauseContext) {
    if (this.config.logging) {
      console.log('exitWith_plain_clause', ctx);
    }
  }
  enterWith_data_category_clause(ctx: Parser.With_data_category_clauseContext) {
    if (this.config.logging) {
      console.log('enterWith_data_category_clause', ctx);
    }
  }
  exitWith_data_category_clause(ctx: Parser.With_data_category_clauseContext) {
    if (this.config.logging) {
      console.log('exitWith_data_category_clause', ctx);
    }
  }
  enterData_category_spec_list(ctx: Parser.Data_category_spec_listContext) {
    if (this.config.logging) {
      console.log('enterData_category_spec_list', ctx);
    }
  }
  exitData_category_spec_list(ctx: Parser.Data_category_spec_listContext) {
    if (this.config.logging) {
      console.log('exitData_category_spec_list', ctx);
    }
  }
  enterData_category_spec(ctx: Parser.Data_category_specContext) {
    if (this.config.logging) {
      console.log('enterData_category_spec', ctx);
    }
  }
  exitData_category_spec(ctx: Parser.Data_category_specContext) {
    if (this.config.logging) {
      console.log('exitData_category_spec', ctx);
    }
  }
  enterData_category_parameter_list(ctx: Parser.Data_category_parameter_listContext) {
    if (this.config.logging) {
      console.log('enterData_category_parameter_list', ctx);
    }
  }
  exitData_category_parameter_list(ctx: Parser.Data_category_parameter_listContext) {
    if (this.config.logging) {
      console.log('exitData_category_parameter_list', ctx);
    }
  }
  enterData_category_selector(ctx: Parser.Data_category_selectorContext) {
    if (this.config.logging) {
      console.log('enterData_category_selector', ctx);
    }
  }
  exitData_category_selector(ctx: Parser.Data_category_selectorContext) {
    if (this.config.logging) {
      console.log('exitData_category_selector', ctx);
    }
  }
  enterGroup_by_plain_clause(ctx: Parser.Group_by_plain_clauseContext) {
    if (this.config.logging) {
      console.log('enterGroup_by_plain_clause', ctx);
    }
  }
  exitGroup_by_plain_clause(ctx: Parser.Group_by_plain_clauseContext) {
    if (this.config.logging) {
      console.log('exitGroup_by_plain_clause', ctx);
    }
  }
  enterGroup_by_rollup_clause(ctx: Parser.Group_by_rollup_clauseContext) {
    if (this.config.logging) {
      console.log('enterGroup_by_rollup_clause', ctx);
    }
  }
  exitGroup_by_rollup_clause(ctx: Parser.Group_by_rollup_clauseContext) {
    if (this.config.logging) {
      console.log('exitGroup_by_rollup_clause', ctx);
    }
  }
  enterGroup_by_cube_clause(ctx: Parser.Group_by_cube_clauseContext) {
    if (this.config.logging) {
      console.log('enterGroup_by_cube_clause', ctx);
    }
  }
  exitGroup_by_cube_clause(ctx: Parser.Group_by_cube_clauseContext) {
    if (this.config.logging) {
      console.log('exitGroup_by_cube_clause', ctx);
    }
  }
  enterGroup_by_list(ctx: Parser.Group_by_listContext) {
    if (this.config.logging) {
      console.log('enterGroup_by_list', ctx);
    }
  }
  exitGroup_by_list(ctx: Parser.Group_by_listContext) {
    if (this.config.logging) {
      console.log('exitGroup_by_list', ctx);
    }
  }
  enterGroup_by_spec(ctx: Parser.Group_by_specContext) {
    if (this.config.logging) {
      console.log('enterGroup_by_spec', ctx);
    }
    this.getSoqlQuery().groupBy = ctx.text;
  }
  exitGroup_by_spec(ctx: Parser.Group_by_specContext) {
    if (this.config.logging) {
      console.log('exitGroup_by_spec', ctx);
    }
  }
  enterOrder_by_list(ctx: Parser.Order_by_listContext) {
    if (this.config.logging) {
      console.log('enterOrder_by_list', ctx);
    }
  }
  exitOrder_by_list(ctx: Parser.Order_by_listContext) {
    if (this.config.logging) {
      console.log('exitOrder_by_list', ctx);
    }
  }
  enterOrder_by_spec(ctx: Parser.Order_by_specContext) {
    if (this.config.logging) {
      console.log('enterOrder_by_spec', ctx);
    }
  }
  exitOrder_by_spec(ctx: Parser.Order_by_specContext) {
    if (this.config.logging) {
      console.log('exitOrder_by_spec', ctx);
    }
  }
  enterOrder_by_direction_clause(ctx: Parser.Order_by_direction_clauseContext) {
    if (this.config.logging) {
      console.log('enterOrder_by_direction_clause', ctx);
    }
    ctx.text;
    this.context.tempData.order = ctx.text.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';
  }
  exitOrder_by_direction_clause(ctx: Parser.Order_by_direction_clauseContext) {
    if (this.config.logging) {
      console.log('exitOrder_by_direction_clause', ctx);
    }
  }
  enterOrder_by_nulls_clause(ctx: Parser.Order_by_nulls_clauseContext) {
    if (this.config.logging) {
      console.log('enterOrder_by_nulls_clause', ctx);
    }
    this.context.tempData.nulls = ctx.text.toUpperCase() === 'FIRST' ? 'FIRST' : 'LAST';
  }
  exitOrder_by_nulls_clause(ctx: Parser.Order_by_nulls_clauseContext) {
    if (this.config.logging) {
      console.log('exitOrder_by_nulls_clause', ctx);
    }
  }
  enterOrder_by_field(ctx: Parser.Order_by_fieldContext) {
    if (this.config.logging) {
      console.log('enterOrder_by_field', ctx);
    }
    this.context.tempData = {
      field: ctx.text,
    };
  }
  exitOrder_by_field(ctx: Parser.Order_by_fieldContext) {
    if (this.config.logging) {
      console.log('exitOrder_by_field', ctx);
    }
  }
  enterFor_value(ctx: Parser.For_valueContext) {
    if (this.config.logging) {
      console.log('enterFor_value', ctx);
    }
  }
  exitFor_value(ctx: Parser.For_valueContext) {
    if (this.config.logging) {
      console.log('exitFor_value', ctx);
    }
  }
  enterUpdate_value(ctx: Parser.Update_valueContext) {
    if (this.config.logging) {
      console.log('enterUpdate_value', ctx);
    }
  }
  exitUpdate_value(ctx: Parser.Update_valueContext) {
    if (this.config.logging) {
      console.log('exitUpdate_value', ctx);
    }
  }
}
