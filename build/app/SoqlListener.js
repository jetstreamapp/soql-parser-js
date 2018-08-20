"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SoqlQuery_model_1 = require("./models/SoqlQuery.model");
const tree_1 = require("antlr4ts/tree");
const _ = require("lodash");
class Listener {
    constructor(config = {}) {
        this.config = config;
        this.context = {
            isSubQuery: false,
            currSubqueryIdx: -1,
            currWhereConditionGroupIdx: 0,
            currentItem: null,
            tempData: null,
        };
        config.logging = _.isBoolean(config.logging) ? config.logging : false;
        config.includeSubqueryAsField = _.isBoolean(config.includeSubqueryAsField) ? config.includeSubqueryAsField : true;
        this.soqlQuery = new SoqlQuery_model_1.SoqlQuery();
    }
    getSoqlQuery() {
        return this.context.isSubQuery ? this.soqlQuery.subqueries[this.context.currSubqueryIdx] : this.soqlQuery;
    }
    enterKeywords_alias_allowed(ctx) {
        if (this.config.logging) {
            console.log('enterKeywords_alias_allowed', ctx);
        }
    }
    exitKeywords_alias_allowed(ctx) {
        if (this.config.logging) {
            console.log('exitKeywords_alias_allowed', ctx);
        }
    }
    enterKeywords_name_allowed(ctx) {
        if (this.config.logging) {
            console.log('enterKeywords_name_allowed', ctx);
        }
    }
    exitKeywords_name_allowed(ctx) {
        if (this.config.logging) {
            console.log('exitKeywords_name_allowed', ctx);
        }
    }
    enterName(ctx) {
        if (this.config.logging) {
            console.log('enterName', ctx);
        }
    }
    exitName(ctx) {
        if (this.config.logging) {
            console.log('exitName', ctx);
        }
    }
    enterObject_name(ctx) {
        if (this.config.logging) {
            console.log('enterObject_name', ctx);
        }
    }
    exitObject_name(ctx) {
        if (this.config.logging) {
            console.log('exitObject_name', ctx);
        }
    }
    enterField_name(ctx) {
        if (this.config.logging) {
            console.log('enterField_name', ctx);
        }
    }
    exitField_name(ctx) {
        if (this.config.logging) {
            console.log('exitField_name', ctx);
        }
    }
    enterFilter_scope_name(ctx) {
        if (this.config.logging) {
            console.log('enterFilter_scope_name', ctx);
        }
    }
    exitFilter_scope_name(ctx) {
        if (this.config.logging) {
            console.log('exitFilter_scope_name', ctx);
        }
    }
    enterData_category_group_name(ctx) {
        if (this.config.logging) {
            console.log('enterData_category_group_name', ctx);
        }
    }
    exitData_category_group_name(ctx) {
        if (this.config.logging) {
            console.log('exitData_category_group_name', ctx);
        }
    }
    enterData_category_name(ctx) {
        if (this.config.logging) {
            console.log('enterData_category_name', ctx);
        }
    }
    exitData_category_name(ctx) {
        if (this.config.logging) {
            console.log('exitData_category_name', ctx);
        }
    }
    enterAlias_name(ctx) {
        if (this.config.logging) {
            console.log('enterAlias_name', ctx);
        }
        this.context.tempData.alias = ctx.text;
    }
    exitAlias_name(ctx) {
        if (this.config.logging) {
            console.log('exitAlias_name', ctx);
        }
    }
    enterAlias(ctx) {
        if (this.config.logging) {
            console.log('enterAlias', ctx);
        }
    }
    exitAlias(ctx) {
        if (this.config.logging) {
            console.log('exitAlias', ctx);
        }
    }
    enterLiteral(ctx) {
        if (this.config.logging) {
            console.log('enterLiteral', ctx);
        }
    }
    exitLiteral(ctx) {
        if (this.config.logging) {
            console.log('exitLiteral', ctx);
        }
    }
    enterDate_formula_literal(ctx) {
        if (this.config.logging) {
            console.log('enterDate_formula_literal', ctx);
        }
    }
    exitDate_formula_literal(ctx) {
        if (this.config.logging) {
            console.log('exitDate_formula_literal', ctx);
        }
    }
    enterDate_formula_n_literal_name(ctx) {
        if (this.config.logging) {
            console.log('enterDate_formula_n_literal_name', ctx);
        }
    }
    exitDate_formula_n_literal_name(ctx) {
        if (this.config.logging) {
            console.log('exitDate_formula_n_literal_name', ctx);
        }
    }
    enterDate_formula_n_literal(ctx) {
        if (this.config.logging) {
            console.log('enterDate_formula_n_literal', ctx);
        }
    }
    exitDate_formula_n_literal(ctx) {
        if (this.config.logging) {
            console.log('exitDate_formula_n_literal', ctx);
        }
    }
    enterDatetime_literal(ctx) {
        if (this.config.logging) {
            console.log('enterDatetime_literal', ctx);
        }
        if (this.context.currentItem === 'field') {
            this.context.tempData.type = 'datetime';
        }
    }
    exitDatetime_literal(ctx) {
        if (this.config.logging) {
            console.log('exitDatetime_literal', ctx);
        }
    }
    enterDate_literal(ctx) {
        if (this.config.logging) {
            console.log('enterDate_literal', ctx);
        }
        if (this.context.currentItem === 'field') {
            this.context.tempData.type = 'date';
        }
    }
    exitDate_literal(ctx) {
        if (this.config.logging) {
            console.log('exitDate_literal', ctx);
        }
    }
    enterInteger_literal(ctx) {
        if (this.config.logging) {
            console.log('enterInteger_literal', ctx);
        }
        if (this.context.currentItem === 'field') {
            this.context.tempData.type = 'integer';
        }
    }
    exitInteger_literal(ctx) {
        if (this.config.logging) {
            console.log('exitInteger_literal', ctx);
        }
    }
    enterReal_literal(ctx) {
        if (this.config.logging) {
            console.log('enterReal_literal', ctx);
        }
    }
    exitReal_literal(ctx) {
        if (this.config.logging) {
            console.log('exitReal_literal', ctx);
        }
    }
    enterString_literal(ctx) {
        if (this.config.logging) {
            console.log('enterString_literal', ctx);
        }
    }
    exitString_literal(ctx) {
        if (this.config.logging) {
            console.log('exitString_literal', ctx);
        }
    }
    enterBoolean_literal(ctx) {
        if (this.config.logging) {
            console.log('enterBoolean_literal', ctx);
        }
    }
    exitBoolean_literal(ctx) {
        if (this.config.logging) {
            console.log('exitBoolean_literal', ctx);
        }
    }
    enterNull_literal(ctx) {
        if (this.config.logging) {
            console.log('enterNull_literal', ctx);
        }
    }
    exitNull_literal(ctx) {
        if (this.config.logging) {
            console.log('exitNull_literal', ctx);
        }
    }
    enterFunction_name(ctx) {
        if (this.config.logging) {
            console.log('enterFunction_name', ctx);
        }
    }
    exitFunction_name(ctx) {
        if (this.config.logging) {
            console.log('exitFunction_name', ctx);
        }
    }
    enterFunction_date(ctx) {
        if (this.config.logging) {
            console.log('enterFunction_date', ctx);
        }
    }
    exitFunction_date(ctx) {
        if (this.config.logging) {
            console.log('exitFunction_date', ctx);
        }
    }
    enterFunction_aggregate(ctx) {
        if (this.config.logging) {
            console.log('enterFunction_aggregate', ctx);
        }
        this.context.tempData = {
            fnType: 'aggregate',
            name: ctx.text,
        };
    }
    exitFunction_aggregate(ctx) {
        if (this.config.logging) {
            console.log('exitFunction_aggregate', ctx);
        }
    }
    enterFunction_location(ctx) {
        if (this.config.logging) {
            console.log('enterFunction_location', ctx);
        }
    }
    exitFunction_location(ctx) {
        if (this.config.logging) {
            console.log('exitFunction_location', ctx);
        }
    }
    enterFunction_other(ctx) {
        if (this.config.logging) {
            console.log('enterFunction_other', ctx);
        }
    }
    exitFunction_other(ctx) {
        if (this.config.logging) {
            console.log('exitFunction_other', ctx);
        }
    }
    enterSoql_query(ctx) {
        if (this.config.logging) {
            console.log('enterSoql_query', ctx);
        }
    }
    exitSoql_query(ctx) {
        if (this.config.logging) {
            console.log('exitSoql_query', ctx);
        }
    }
    enterSelect_clause(ctx) {
        if (this.config.logging) {
            console.log('enterSelect_clause', ctx);
        }
    }
    exitSelect_clause(ctx) {
        if (this.config.logging) {
            console.log('exitSelect_clause', ctx);
        }
    }
    enterFrom_clause(ctx) {
        if (this.config.logging) {
            console.log('enterFrom_clause', ctx);
        }
        this.context.currentItem = 'from';
    }
    exitFrom_clause(ctx) {
        if (this.config.logging) {
            console.log('exitFrom_clause', ctx);
        }
    }
    enterUsing_clause(ctx) {
        if (this.config.logging) {
            console.log('enterUsing_clause', ctx);
        }
    }
    exitUsing_clause(ctx) {
        if (this.config.logging) {
            console.log('exitUsing_clause', ctx);
        }
    }
    enterWhere_clause(ctx) {
        if (this.config.logging) {
            console.log('enterWhere_clause', ctx);
        }
        this.context.currentItem = 'where';
    }
    exitWhere_clause(ctx) {
        if (this.config.logging) {
            console.log('exitWhere_clause', ctx);
        }
    }
    enterGroupby_clause(ctx) {
        if (this.config.logging) {
            console.log('enterGroupby_clause', ctx);
        }
    }
    exitGroupby_clause(ctx) {
        if (this.config.logging) {
            console.log('exitGroupby_clause', ctx);
        }
    }
    enterHaving_clause(ctx) {
        if (this.config.logging) {
            console.log('enterHaving_clause', ctx);
        }
        this.context.currentItem = 'having';
    }
    exitHaving_clause(ctx) {
        if (this.config.logging) {
            console.log('exitHaving_clause', ctx);
        }
        this.getSoqlQuery().having = this.context.tempData;
    }
    enterOrderby_clause(ctx) {
        if (this.config.logging) {
            console.log('enterOrderby_clause', ctx);
        }
        this.context.tempData = {};
    }
    exitOrderby_clause(ctx) {
        if (this.config.logging) {
            console.log('exitOrderby_clause', ctx);
        }
        this.getSoqlQuery().orderBy = this.context.tempData;
    }
    enterLimit_clause(ctx) {
        if (this.config.logging) {
            console.log('enterLimit_clause', ctx);
        }
        this.getSoqlQuery().limit = Number(ctx.getChild(1).text);
    }
    exitLimit_clause(ctx) {
        if (this.config.logging) {
            console.log('exitLimit_clause', ctx);
        }
    }
    enterOffset_clause(ctx) {
        if (this.config.logging) {
            console.log('enterOffset_clause', ctx);
        }
        this.getSoqlQuery().offset = Number(ctx.getChild(1).text);
    }
    exitOffset_clause(ctx) {
        if (this.config.logging) {
            console.log('exitOffset_clause', ctx);
        }
    }
    enterFor_clause(ctx) {
        if (this.config.logging) {
            console.log('enterFor_clause', ctx);
        }
    }
    exitFor_clause(ctx) {
        if (this.config.logging) {
            console.log('exitFor_clause', ctx);
        }
    }
    enterUpdate_clause(ctx) {
        if (this.config.logging) {
            console.log('enterUpdate_clause', ctx);
        }
    }
    exitUpdate_clause(ctx) {
        if (this.config.logging) {
            console.log('exitUpdate_clause', ctx);
        }
    }
    enterSoql_subquery(ctx) {
        if (this.config.logging) {
            console.log('enterSoql_subquery', ctx);
        }
        this.context.isSubQuery = true;
        this.soqlQuery.subqueries.push(new SoqlQuery_model_1.SoqlQuery());
        this.context.currSubqueryIdx = this.soqlQuery.subqueries.length - 1;
    }
    exitSoql_subquery(ctx) {
        if (this.config.logging) {
            console.log('exitSoql_subquery', ctx);
        }
        this.context.isSubQuery = false;
        this.context.currWhereConditionGroupIdx = 0; // ensure reset for base query or next subquery
    }
    enterSubquery_select_clause(ctx) {
        if (this.config.logging) {
            console.log('enterSubquery_select_clause', ctx);
        }
    }
    exitSubquery_select_clause(ctx) {
        if (this.config.logging) {
            console.log('exitSubquery_select_clause', ctx);
        }
    }
    enterSelect_spec(ctx) {
        if (this.config.logging) {
            console.log('enterSelect_spec', ctx);
        }
        this.context.currentItem = 'field';
    }
    exitSelect_spec(ctx) {
        if (this.config.logging) {
            console.log('exitSelect_spec', ctx);
        }
    }
    enterSubquery_select_spec(ctx) {
        if (this.config.logging) {
            console.log('enterSubquery_select_spec', ctx);
        }
        this.context.currentItem = 'field';
    }
    exitSubquery_select_spec(ctx) {
        if (this.config.logging) {
            console.log('exitSubquery_select_spec', ctx);
        }
    }
    enterField_spec(ctx) {
        if (this.config.logging) {
            console.log('enterField_spec', ctx);
        }
        this.context.currentItem = 'field';
        let relatedFields;
        if (ctx.text.includes('.')) {
            this.getSoqlQuery().fields.push({ text: ctx.text, relationshipFields: ctx.text.split('.') });
        }
        else {
            this.getSoqlQuery().fields.push({ text: ctx.text });
        }
    }
    // exitField_spec(ctx: Parser.Field_specContext) {
    //   if(this.config.logging) { console.log('exitField_spec', ctx); }
    // };
    enterFunction_call_spec(ctx) {
        if (this.config.logging) {
            console.log('enterFunction_call_spec', ctx);
        }
    }
    exitFunction_call_spec(ctx) {
        if (this.config.logging) {
            console.log('exitFunction_call_spec', ctx);
        }
        if (this.context.currentItem === 'field') {
            this.getSoqlQuery().fields.push({ fn: this.context.tempData });
            this.context.tempData = null;
        }
    }
    enterField(ctx) {
        if (this.config.logging) {
            console.log('enterField', ctx);
        }
    }
    exitField(ctx) {
        if (this.config.logging) {
            console.log('exitField', ctx);
        }
    }
    enterFunction_call(ctx) {
        if (this.config.logging) {
            console.log('enterFunction_call', ctx);
        }
    }
    exitFunction_call(ctx) {
        if (this.config.logging) {
            console.log('exitFunction_call', ctx);
        }
    }
    enterFunction_parameter_list(ctx) {
        if (this.config.logging) {
            console.log('enterFunction_parameter_list', ctx);
        }
    }
    exitFunction_parameter_list(ctx) {
        if (this.config.logging) {
            console.log('exitFunction_parameter_list', ctx);
        }
    }
    enterFunction_parameter(ctx) {
        if (this.config.logging) {
            console.log('enterFunction_parameter', ctx);
        }
        this.context.tempData.value = ctx.text;
    }
    exitFunction_parameter(ctx) {
        if (this.config.logging) {
            console.log('exitFunction_parameter', ctx);
        }
    }
    enterTypeof_spec(ctx) {
        if (this.config.logging) {
            console.log('enterTypeof_spec', ctx);
        }
    }
    exitTypeof_spec(ctx) {
        if (this.config.logging) {
            console.log('exitTypeof_spec', ctx);
        }
    }
    enterTypeof_when_then_clause_list(ctx) {
        if (this.config.logging) {
            console.log('enterTypeof_when_then_clause_list', ctx);
        }
    }
    exitTypeof_when_then_clause_list(ctx) {
        if (this.config.logging) {
            console.log('exitTypeof_when_then_clause_list', ctx);
        }
    }
    enterTypeof_when_then_clause(ctx) {
        if (this.config.logging) {
            console.log('enterTypeof_when_then_clause', ctx);
        }
    }
    exitTypeof_when_then_clause(ctx) {
        if (this.config.logging) {
            console.log('exitTypeof_when_then_clause', ctx);
        }
    }
    enterTypeof_then_clause(ctx) {
        if (this.config.logging) {
            console.log('enterTypeof_then_clause', ctx);
        }
    }
    exitTypeof_then_clause(ctx) {
        if (this.config.logging) {
            console.log('exitTypeof_then_clause', ctx);
        }
    }
    enterTypeof_else_clause(ctx) {
        if (this.config.logging) {
            console.log('enterTypeof_else_clause', ctx);
        }
    }
    exitTypeof_else_clause(ctx) {
        if (this.config.logging) {
            console.log('exitTypeof_else_clause', ctx);
        }
    }
    enterField_list(ctx) {
        if (this.config.logging) {
            console.log('enterField_list', ctx);
        }
    }
    exitField_list(ctx) {
        if (this.config.logging) {
            console.log('exitField_list', ctx);
        }
    }
    enterObject_spec(ctx) {
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
    exitObject_spec(ctx) {
        if (this.config.logging) {
            console.log('exitObject_spec', ctx);
        }
    }
    enterObject_prefix(ctx) {
        if (this.config.logging) {
            console.log('enterObject_prefix', ctx);
        }
    }
    exitObject_prefix(ctx) {
        if (this.config.logging) {
            console.log('exitObject_prefix', ctx);
        }
    }
    enterComparison_operator(ctx) {
        if (this.config.logging) {
            console.log('enterComparison_operator', ctx);
        }
    }
    exitComparison_operator(ctx) {
        if (this.config.logging) {
            console.log('exitComparison_operator', ctx);
        }
    }
    enterSet_operator(ctx) {
        if (this.config.logging) {
            console.log('enterSet_operator', ctx);
        }
    }
    exitSet_operator(ctx) {
        if (this.config.logging) {
            console.log('exitSet_operator', ctx);
        }
    }
    enterCondition(ctx) {
        if (this.config.logging) {
            console.log('enterCondition', ctx);
        }
    }
    exitCondition(ctx) {
        if (this.config.logging) {
            console.log('exitCondition', ctx);
        }
    }
    enterCondition1(ctx) {
        if (this.config.logging) {
            console.log('enterCondition1', ctx);
        }
    }
    exitCondition1(ctx) {
        if (this.config.logging) {
            console.log('exitCondition1', ctx);
        }
        if (this.context.currentItem === 'where' && this.context.tempData) {
            this.getSoqlQuery().addWhereCondition(this.context.tempData, this.context.currWhereConditionGroupIdx);
            this.context.tempData = null;
        }
    }
    enterParenthesis(ctx) {
        if (this.config.logging) {
            console.log('enterParenthesis', ctx);
        }
    }
    exitParenthesis(ctx) {
        if (this.config.logging) {
            console.log('exitParenthesis', ctx);
        }
        this.context.currWhereConditionGroupIdx++;
    }
    enterSimple_condition(ctx) {
        if (this.config.logging) {
            console.log('enterSimple_condition', ctx);
        }
    }
    exitSimple_condition(ctx) {
        if (this.config.logging) {
            console.log('exitSimple_condition', ctx);
        }
    }
    enterField_based_condition(ctx) {
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
    exitField_based_condition(ctx) {
        if (this.config.logging) {
            console.log('exitField_based_condition', ctx);
        }
    }
    enterSet_based_condition(ctx) {
        if (this.config.logging) {
            console.log('enterSet_based_condition', ctx);
        }
        this.context.tempData = {
            field: ctx.getChild(0).text,
            operator: ctx.getChild(1).children.map(child => child.text).join(' '),
            value: ctx.getChild(2).getChild(1).children
                .filter(child => !(child instanceof tree_1.TerminalNode))
                .map(child => child.text),
        };
    }
    exitSet_based_condition(ctx) {
        if (this.config.logging) {
            console.log('exitSet_based_condition', ctx);
        }
    }
    enterLike_based_condition(ctx) {
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
    exitLike_based_condition(ctx) {
        if (this.config.logging) {
            console.log('exitLike_based_condition', ctx);
        }
    }
    enterCondition_field(ctx) {
        if (this.config.logging) {
            console.log('enterCondition_field', ctx);
        }
    }
    exitCondition_field(ctx) {
        if (this.config.logging) {
            console.log('exitCondition_field', ctx);
        }
    }
    enterSet_values(ctx) {
        if (this.config.logging) {
            console.log('enterSet_values', ctx);
        }
    }
    exitSet_values(ctx) {
        if (this.config.logging) {
            console.log('exitSet_values', ctx);
        }
    }
    enterSet_value_list(ctx) {
        if (this.config.logging) {
            console.log('enterSet_value_list', ctx);
        }
    }
    exitSet_value_list(ctx) {
        if (this.config.logging) {
            console.log('exitSet_value_list', ctx);
        }
    }
    enterWith_clause(ctx) {
        if (this.config.logging) {
            console.log('enterWith_clause', ctx);
        }
    }
    exitWith_clause(ctx) {
        if (this.config.logging) {
            console.log('exitWith_clause', ctx);
        }
    }
    enterWith_plain_clause(ctx) {
        if (this.config.logging) {
            console.log('enterWith_plain_clause', ctx);
        }
    }
    exitWith_plain_clause(ctx) {
        if (this.config.logging) {
            console.log('exitWith_plain_clause', ctx);
        }
    }
    enterWith_data_category_clause(ctx) {
        if (this.config.logging) {
            console.log('enterWith_data_category_clause', ctx);
        }
    }
    exitWith_data_category_clause(ctx) {
        if (this.config.logging) {
            console.log('exitWith_data_category_clause', ctx);
        }
    }
    enterData_category_spec_list(ctx) {
        if (this.config.logging) {
            console.log('enterData_category_spec_list', ctx);
        }
    }
    exitData_category_spec_list(ctx) {
        if (this.config.logging) {
            console.log('exitData_category_spec_list', ctx);
        }
    }
    enterData_category_spec(ctx) {
        if (this.config.logging) {
            console.log('enterData_category_spec', ctx);
        }
    }
    exitData_category_spec(ctx) {
        if (this.config.logging) {
            console.log('exitData_category_spec', ctx);
        }
    }
    enterData_category_parameter_list(ctx) {
        if (this.config.logging) {
            console.log('enterData_category_parameter_list', ctx);
        }
    }
    exitData_category_parameter_list(ctx) {
        if (this.config.logging) {
            console.log('exitData_category_parameter_list', ctx);
        }
    }
    enterData_category_selector(ctx) {
        if (this.config.logging) {
            console.log('enterData_category_selector', ctx);
        }
    }
    exitData_category_selector(ctx) {
        if (this.config.logging) {
            console.log('exitData_category_selector', ctx);
        }
    }
    enterGroup_by_plain_clause(ctx) {
        if (this.config.logging) {
            console.log('enterGroup_by_plain_clause', ctx);
        }
    }
    exitGroup_by_plain_clause(ctx) {
        if (this.config.logging) {
            console.log('exitGroup_by_plain_clause', ctx);
        }
    }
    enterGroup_by_rollup_clause(ctx) {
        if (this.config.logging) {
            console.log('enterGroup_by_rollup_clause', ctx);
        }
    }
    exitGroup_by_rollup_clause(ctx) {
        if (this.config.logging) {
            console.log('exitGroup_by_rollup_clause', ctx);
        }
    }
    enterGroup_by_cube_clause(ctx) {
        if (this.config.logging) {
            console.log('enterGroup_by_cube_clause', ctx);
        }
    }
    exitGroup_by_cube_clause(ctx) {
        if (this.config.logging) {
            console.log('exitGroup_by_cube_clause', ctx);
        }
    }
    enterGroup_by_list(ctx) {
        if (this.config.logging) {
            console.log('enterGroup_by_list', ctx);
        }
    }
    exitGroup_by_list(ctx) {
        if (this.config.logging) {
            console.log('exitGroup_by_list', ctx);
        }
    }
    enterGroup_by_spec(ctx) {
        if (this.config.logging) {
            console.log('enterGroup_by_spec', ctx);
        }
        this.getSoqlQuery().groupBy = ctx.text;
    }
    exitGroup_by_spec(ctx) {
        if (this.config.logging) {
            console.log('exitGroup_by_spec', ctx);
        }
    }
    enterOrder_by_list(ctx) {
        if (this.config.logging) {
            console.log('enterOrder_by_list', ctx);
        }
    }
    exitOrder_by_list(ctx) {
        if (this.config.logging) {
            console.log('exitOrder_by_list', ctx);
        }
    }
    enterOrder_by_spec(ctx) {
        if (this.config.logging) {
            console.log('enterOrder_by_spec', ctx);
        }
    }
    exitOrder_by_spec(ctx) {
        if (this.config.logging) {
            console.log('exitOrder_by_spec', ctx);
        }
    }
    enterOrder_by_direction_clause(ctx) {
        if (this.config.logging) {
            console.log('enterOrder_by_direction_clause', ctx);
        }
        ctx.text;
        this.context.tempData.order = ctx.text.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';
    }
    exitOrder_by_direction_clause(ctx) {
        if (this.config.logging) {
            console.log('exitOrder_by_direction_clause', ctx);
        }
    }
    enterOrder_by_nulls_clause(ctx) {
        if (this.config.logging) {
            console.log('enterOrder_by_nulls_clause', ctx);
        }
        this.context.tempData.nulls = ctx.text.toUpperCase() === 'FIRST' ? 'FIRST' : 'LAST';
    }
    exitOrder_by_nulls_clause(ctx) {
        if (this.config.logging) {
            console.log('exitOrder_by_nulls_clause', ctx);
        }
    }
    enterOrder_by_field(ctx) {
        if (this.config.logging) {
            console.log('enterOrder_by_field', ctx);
        }
        this.context.tempData = {
            field: ctx.text,
        };
    }
    exitOrder_by_field(ctx) {
        if (this.config.logging) {
            console.log('exitOrder_by_field', ctx);
        }
    }
    enterFor_value(ctx) {
        if (this.config.logging) {
            console.log('enterFor_value', ctx);
        }
    }
    exitFor_value(ctx) {
        if (this.config.logging) {
            console.log('exitFor_value', ctx);
        }
    }
    enterUpdate_value(ctx) {
        if (this.config.logging) {
            console.log('enterUpdate_value', ctx);
        }
    }
    exitUpdate_value(ctx) {
        if (this.config.logging) {
            console.log('exitUpdate_value', ctx);
        }
    }
}
exports.Listener = Listener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29xbExpc3RlbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC9Tb3FsTGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQSw4REFBcUQ7QUFDckQsd0NBQTZDO0FBQzdDLDRCQUE0QjtBQWE1QjtJQVdFLFlBQW9CLFNBQW1DLEVBQUU7UUFBckMsV0FBTSxHQUFOLE1BQU0sQ0FBK0I7UUFWekQsWUFBTyxHQUFZO1lBQ2pCLFVBQVUsRUFBRSxLQUFLO1lBQ2pCLGVBQWUsRUFBRSxDQUFDLENBQUM7WUFDbkIsMEJBQTBCLEVBQUUsQ0FBQztZQUM3QixXQUFXLEVBQUUsSUFBSTtZQUNqQixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUM7UUFLQSxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3RFLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDbEgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLDJCQUFTLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsWUFBWTtRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDNUcsQ0FBQztJQUVELDJCQUEyQixDQUFDLEdBQXlDO1FBQ25FLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLEdBQUcsQ0FB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