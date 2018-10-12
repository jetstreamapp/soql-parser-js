"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Parser = require("../generated/SOQLParser");
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
            inWhereClauseGroup: false,
            tempData: null,
        };
        config.logging = _.isBoolean(config.logging) ? config.logging : false;
        config.includeSubqueryAsField = _.isBoolean(config.includeSubqueryAsField) ? config.includeSubqueryAsField : true;
        this.soqlQuery = new SoqlQuery_model_1.SoqlQuery();
    }
    visitTerminal(ctx) {
        if (this.config.logging) {
            console.log('visitTerminal:', ctx.text);
        }
        if (this.context.currentItem === 'where') {
            if (['NOT'].includes(ctx.text.toUpperCase())) {
                this.context.tempData.nextHasLogicalPrefix = ctx.text;
            }
            else if (['AND', 'OR'].includes(ctx.text.toUpperCase())) {
                this.context.tempData.currConditionOperation.operator = ctx.text;
                // Because there is an operator, we know the right side will have at least one more condition
                // reset current condition
                this.context.tempData.currConditionOperation.right = {
                    left: null,
                };
                this.context.tempData.currConditionOperation = this.context.tempData.currConditionOperation.right;
                this.context.tempData.stack.push(this.context.tempData.currConditionOperation);
            }
        }
        else if (this.context.currentItem === 'having') {
            if (['NOT'].includes(ctx.text.toUpperCase())) {
                this.context.tempData.nextHasLogicalPrefix = ctx.text;
            }
            else if (['AND', 'OR'].includes(ctx.text.toUpperCase())) {
                this.context.tempData.currConditionOperation.operator = ctx.text;
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
    getSoqlQuery() {
        return this.context.isSubQuery ? this.soqlQuery.subqueries[this.context.currSubqueryIdx] : this.soqlQuery;
    }
    enterKeywords_alias_allowed(ctx) {
        if (this.config.logging) {
            console.log('enterKeywords_alias_allowed:', ctx.text);
        }
    }
    exitKeywords_alias_allowed(ctx) {
        if (this.config.logging) {
            console.log('exitKeywords_alias_allowed:', ctx.text);
        }
    }
    enterKeywords_name_allowed(ctx) {
        if (this.config.logging) {
            console.log('enterKeywords_name_allowed:', ctx.text);
        }
    }
    exitKeywords_name_allowed(ctx) {
        if (this.config.logging) {
            console.log('exitKeywords_name_allowed:', ctx.text);
        }
    }
    enterName(ctx) {
        if (this.config.logging) {
            console.log('enterName:', ctx.text);
        }
    }
    exitName(ctx) {
        if (this.config.logging) {
            console.log('exitName:', ctx.text);
        }
    }
    enterObject_name(ctx) {
        if (this.config.logging) {
            console.log('enterObject_name:', ctx.text);
        }
    }
    exitObject_name(ctx) {
        if (this.config.logging) {
            console.log('exitObject_name:', ctx.text);
        }
    }
    enterField_name(ctx) {
        if (this.config.logging) {
            console.log('enterField_name:', ctx.text);
        }
        if (this.context.currentItem === 'having' && !this.context.tempData.currConditionOperation.left.fn) {
            this.context.tempData.currConditionOperation.left.field = ctx.text;
        }
    }
    exitField_name(ctx) {
        if (this.config.logging) {
            console.log('exitField_name:', ctx.text);
        }
    }
    enterFilter_scope_name(ctx) {
        if (this.config.logging) {
            console.log('enterFilter_scope_name:', ctx.text);
        }
    }
    exitFilter_scope_name(ctx) {
        if (this.config.logging) {
            console.log('exitFilter_scope_name:', ctx.text);
        }
    }
    enterData_category_group_name(ctx) {
        if (this.config.logging) {
            console.log('enterData_category_group_name:', ctx.text);
        }
    }
    exitData_category_group_name(ctx) {
        if (this.config.logging) {
            console.log('exitData_category_group_name:', ctx.text);
        }
    }
    enterData_category_name(ctx) {
        if (this.config.logging) {
            console.log('enterData_category_name:', ctx.text);
        }
    }
    exitData_category_name(ctx) {
        if (this.config.logging) {
            console.log('exitData_category_name:', ctx.text);
        }
    }
    enterAlias_name(ctx) {
        if (this.config.logging) {
            console.log('enterAlias_name:', ctx.text);
        }
        if (this.context.currentItem === 'from') {
            this.soqlQuery.sObjectAlias = ctx.text;
            // All fields need to update to remove the alias from relationships
            this.soqlQuery.fields.forEach(field => {
                if (field.text.startsWith(`${ctx.text}.`)) {
                    field.alias = ctx.text;
                    field.text = field.text.replace(`${ctx.text}.`, '');
                    if (field.relationshipFields.length > 2) {
                        field.relationshipFields = field.relationshipFields.splice(1);
                    }
                    else {
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
    exitAlias_name(ctx) {
        if (this.config.logging) {
            console.log('exitAlias_name:', ctx.text);
        }
    }
    enterAlias(ctx) {
        if (this.config.logging) {
            console.log('enterAlias:', ctx.text);
        }
    }
    exitAlias(ctx) {
        if (this.config.logging) {
            console.log('exitAlias:', ctx.text);
        }
    }
    enterLiteral(ctx) {
        if (this.config.logging) {
            console.log('enterLiteral:', ctx.text);
        }
    }
    exitLiteral(ctx) {
        if (this.config.logging) {
            console.log('exitLiteral:', ctx.text);
        }
    }
    enterDate_formula_literal(ctx) {
        if (this.config.logging) {
            console.log('enterDate_formula_literal:', ctx.text);
        }
    }
    exitDate_formula_literal(ctx) {
        if (this.config.logging) {
            console.log('exitDate_formula_literal:', ctx.text);
        }
    }
    enterDate_formula_n_literal_name(ctx) {
        if (this.config.logging) {
            console.log('enterDate_formula_n_literal_name:', ctx.text);
        }
    }
    exitDate_formula_n_literal_name(ctx) {
        if (this.config.logging) {
            console.log('exitDate_formula_n_literal_name:', ctx.text);
        }
    }
    enterDate_formula_n_literal(ctx) {
        if (this.config.logging) {
            console.log('enterDate_formula_n_literal:', ctx.text);
        }
    }
    exitDate_formula_n_literal(ctx) {
        if (this.config.logging) {
            console.log('exitDate_formula_n_literal:', ctx.text);
        }
    }
    enterDatetime_literal(ctx) {
        if (this.config.logging) {
            console.log('enterDatetime_literal:', ctx.text);
        }
        if (this.context.currentItem === 'field') {
            this.context.tempData.type = 'datetime';
        }
    }
    exitDatetime_literal(ctx) {
        if (this.config.logging) {
            console.log('exitDatetime_literal:', ctx.text);
        }
    }
    enterDate_literal(ctx) {
        if (this.config.logging) {
            console.log('enterDate_literal:', ctx.text);
        }
        if (this.context.currentItem === 'field') {
            this.context.tempData.type = 'date';
        }
    }
    exitDate_literal(ctx) {
        if (this.config.logging) {
            console.log('exitDate_literal:', ctx.text);
        }
    }
    enterInteger_literal(ctx) {
        if (this.config.logging) {
            console.log('enterInteger_literal:', ctx.text);
        }
        if (this.context.currentItem === 'field') {
            this.context.tempData.type = 'integer';
        }
    }
    exitInteger_literal(ctx) {
        if (this.config.logging) {
            console.log('exitInteger_literal:', ctx.text);
        }
    }
    enterReal_literal(ctx) {
        if (this.config.logging) {
            console.log('enterReal_literal:', ctx.text);
        }
    }
    exitReal_literal(ctx) {
        if (this.config.logging) {
            console.log('exitReal_literal:', ctx.text);
        }
    }
    enterString_literal(ctx) {
        if (this.config.logging) {
            console.log('enterString_literal:', ctx.text);
        }
    }
    exitString_literal(ctx) {
        if (this.config.logging) {
            console.log('exitString_literal:', ctx.text);
        }
    }
    enterBoolean_literal(ctx) {
        if (this.config.logging) {
            console.log('enterBoolean_literal:', ctx.text);
        }
    }
    exitBoolean_literal(ctx) {
        if (this.config.logging) {
            console.log('exitBoolean_literal:', ctx.text);
        }
    }
    enterNull_literal(ctx) {
        if (this.config.logging) {
            console.log('enterNull_literal:', ctx.text);
        }
    }
    exitNull_literal(ctx) {
        if (this.config.logging) {
            console.log('exitNull_literal:', ctx.text);
        }
    }
    enterFunction_name(ctx) {
        if (this.config.logging) {
            console.log('enterFunction_name:', ctx.text);
        }
        if (this.context.currentItem === 'field') {
            this.context.tempData.name = ctx.text;
        }
        if (this.context.currentItem === 'having') {
            this.context.tempData.currConditionOperation.left.fn.alias = ctx.text;
            // this.context.tempData.fn.name = ctx.text;
        }
        if (this.context.currentItem === 'orderby') {
            this.context.tempData.fn.name = ctx.text;
        }
    }
    exitFunction_name(ctx) {
        if (this.config.logging) {
            console.log('exitFunction_name:', ctx.text);
        }
    }
    enterFunction_date(ctx) {
        if (this.config.logging) {
            console.log('enterFunction_date:', ctx.text);
        }
    }
    exitFunction_date(ctx) {
        if (this.config.logging) {
            console.log('exitFunction_date:', ctx.text);
        }
    }
    enterFunction_aggregate(ctx) {
        if (this.config.logging) {
            console.log('enterFunction_aggregate:', ctx.text);
        }
    }
    exitFunction_aggregate(ctx) {
        if (this.config.logging) {
            console.log('exitFunction_aggregate:', ctx.text);
        }
    }
    enterFunction_location(ctx) {
        if (this.config.logging) {
            console.log('enterFunction_location:', ctx.text);
        }
    }
    exitFunction_location(ctx) {
        if (this.config.logging) {
            console.log('exitFunction_location:', ctx.text);
        }
    }
    enterFunction_other(ctx) {
        if (this.config.logging) {
            console.log('enterFunction_other:', ctx.text);
        }
    }
    exitFunction_other(ctx) {
        if (this.config.logging) {
            console.log('exitFunction_other:', ctx.text);
        }
    }
    enterSoql_query(ctx) {
        if (this.config.logging) {
            console.log('enterSoql_query:', ctx.text);
        }
    }
    exitSoql_query(ctx) {
        if (this.config.logging) {
            console.log('exitSoql_query:', ctx.text);
        }
    }
    enterSelect_clause(ctx) {
        if (this.config.logging) {
            console.log('enterSelect_clause:', ctx.text);
        }
    }
    exitSelect_clause(ctx) {
        if (this.config.logging) {
            console.log('exitSelect_clause:', ctx.text);
        }
    }
    enterFrom_clause(ctx) {
        if (this.config.logging) {
            console.log('enterFrom_clause:', ctx.text);
        }
        this.context.currentItem = 'from';
    }
    exitFrom_clause(ctx) {
        if (this.config.logging) {
            console.log('exitFrom_clause:', ctx.text);
        }
    }
    enterUsing_clause(ctx) {
        if (this.config.logging) {
            console.log('enterUsing_clause:', ctx.text);
        }
    }
    exitUsing_clause(ctx) {
        if (this.config.logging) {
            console.log('exitUsing_clause:', ctx.text);
        }
    }
    enterWhere_clause(ctx) {
        if (this.config.logging) {
            console.log('enterWhere_clause:', ctx.text);
        }
        this.context.currentItem = 'where';
        const currConditionOperation = {
            left: null,
        };
        this.context.tempData = {
            stack: [currConditionOperation],
            currConditionOperation,
            data: currConditionOperation,
        };
    }
    exitWhere_clause(ctx) {
        if (this.config.logging) {
            console.log('exitWhere_clause:', ctx.text);
        }
        this.getSoqlQuery().whereClause = this.context.tempData.data;
        this.context.tempData = null;
    }
    enterGroupby_clause(ctx) {
        if (this.config.logging) {
            console.log('enterGroupby_clause:', ctx.text);
        }
        this.context.currentItem = 'groupby';
        this.context.tempData = { field: null };
    }
    exitGroupby_clause(ctx) {
        if (this.config.logging) {
            console.log('exitGroupby_clause:', ctx.text);
        }
        this.getSoqlQuery().groupBy = this.context.tempData;
    }
    enterHaving_clause(ctx) {
        if (this.config.logging) {
            console.log('enterHaving_clause:', ctx.text);
        }
        this.context.currentItem = 'having';
        const currConditionOperation = {
            left: null,
        };
        this.context.tempData = {
            stack: [currConditionOperation],
            currConditionOperation,
            data: currConditionOperation,
        };
    }
    exitHaving_clause(ctx) {
        if (this.config.logging) {
            console.log('exitHaving_clause:', ctx.text);
        }
        this.getSoqlQuery().having = this.context.tempData.data;
    }
    enterOrderby_clause(ctx) {
        if (this.config.logging) {
            console.log('enterOrderby_clause:', ctx.text);
        }
        this.context.currentItem = 'orderby';
        this.context.tempData = {};
    }
    exitOrderby_clause(ctx) {
        if (this.config.logging) {
            console.log('exitOrderby_clause:', ctx.text);
        }
    }
    enterLimit_clause(ctx) {
        if (this.config.logging) {
            console.log('enterLimit_clause:', ctx.text);
        }
        this.getSoqlQuery().limit = Number(ctx.getChild(1).text);
    }
    exitLimit_clause(ctx) {
        if (this.config.logging) {
            console.log('exitLimit_clause:', ctx.text);
        }
    }
    enterOffset_clause(ctx) {
        if (this.config.logging) {
            console.log('enterOffset_clause:', ctx.text);
        }
        this.getSoqlQuery().offset = Number(ctx.getChild(1).text);
    }
    exitOffset_clause(ctx) {
        if (this.config.logging) {
            console.log('exitOffset_clause:', ctx.text);
        }
    }
    enterFor_clause(ctx) {
        if (this.config.logging) {
            console.log('enterFor_clause:', ctx.text);
        }
    }
    exitFor_clause(ctx) {
        if (this.config.logging) {
            console.log('exitFor_clause:', ctx.text);
        }
    }
    enterUpdate_clause(ctx) {
        if (this.config.logging) {
            console.log('enterUpdate_clause:', ctx.text);
        }
    }
    exitUpdate_clause(ctx) {
        if (this.config.logging) {
            console.log('exitUpdate_clause:', ctx.text);
        }
    }
    enterSoql_subquery(ctx) {
        if (this.config.logging) {
            console.log('enterSoql_subquery:', ctx.text);
        }
        this.context.isSubQuery = true;
        this.soqlQuery.subqueries.push(new SoqlQuery_model_1.SoqlQuery());
        this.context.currSubqueryIdx = this.soqlQuery.subqueries.length - 1;
    }
    exitSoql_subquery(ctx) {
        if (this.config.logging) {
            console.log('exitSoql_subquery:', ctx.text);
        }
        this.context.isSubQuery = false;
        this.context.currWhereConditionGroupIdx = 0; // ensure reset for base query or next subquery
    }
    enterSubquery_select_clause(ctx) {
        if (this.config.logging) {
            console.log('enterSubquery_select_clause:', ctx.text);
        }
    }
    exitSubquery_select_clause(ctx) {
        if (this.config.logging) {
            console.log('exitSubquery_select_clause:', ctx.text);
        }
    }
    enterSelect_spec(ctx) {
        if (this.config.logging) {
            console.log('enterSelect_spec:', ctx.text);
        }
        this.context.currentItem = 'field';
    }
    exitSelect_spec(ctx) {
        if (this.config.logging) {
            console.log('exitSelect_spec:', ctx.text);
        }
    }
    enterSubquery_select_spec(ctx) {
        if (this.config.logging) {
            console.log('enterSubquery_select_spec:', ctx.text);
        }
        this.context.currentItem = 'field';
    }
    exitSubquery_select_spec(ctx) {
        if (this.config.logging) {
            console.log('exitSubquery_select_spec:', ctx.text);
        }
    }
    enterField_spec(ctx) {
        if (this.config.logging) {
            console.log('enterField_spec:', ctx.text);
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
    //   if(this.config.logging) { console.log('exitField_spec:', ctx.text); }
    // };
    enterFunction_call_spec(ctx) {
        if (this.config.logging) {
            console.log('enterFunction_call_spec:', ctx.text);
        }
        if (this.context.currentItem === 'field') {
            this.context.tempData = {};
        }
        if (this.context.currentItem === 'having') {
            this.context.tempData.currConditionOperation.left.fn = {};
            // this.context.tempData = {};
        }
    }
    exitFunction_call_spec(ctx) {
        if (this.config.logging) {
            console.log('exitFunction_call_spec:', ctx.text);
        }
        if (this.context.currentItem === 'field') {
            this.getSoqlQuery().fields.push({ fn: this.context.tempData });
            this.context.tempData = null;
        }
    }
    enterField(ctx) {
        if (this.config.logging) {
            console.log('enterField:', ctx.text);
        }
    }
    exitField(ctx) {
        if (this.config.logging) {
            console.log('exitField:', ctx.text);
        }
    }
    enterFunction_call(ctx) {
        if (this.config.logging) {
            console.log('enterFunction_call:', ctx.text);
        }
        // COUNT(ID) or Count()
        if (this.context.currentItem === 'field') {
            this.context.tempData.text = ctx.text;
        }
        if (this.context.currentItem === 'having') {
            this.context.tempData.currConditionOperation.left.fn = {};
            // this.context.tempData.fn.text = ctx.text;
        }
        if (this.context.currentItem === 'orderby') {
            this.context.tempData.fn.text = ctx.text;
        }
    }
    exitFunction_call(ctx) {
        if (this.config.logging) {
            console.log('exitFunction_call:', ctx.text);
        }
    }
    enterFunction_parameter_list(ctx) {
        if (this.config.logging) {
            console.log('enterFunction_parameter_list:', ctx.text);
        }
    }
    exitFunction_parameter_list(ctx) {
        if (this.config.logging) {
            console.log('exitFunction_parameter_list:', ctx.text);
        }
    }
    enterFunction_parameter(ctx) {
        if (this.config.logging) {
            console.log('enterFunction_parameter:', ctx.text);
        }
        // Get correct fn object based on what is set in tempData (set differently for field vs having)
        if (this.context.currentItem === 'field' ||
            this.context.currentItem === 'having' ||
            this.context.currentItem === 'orderby') {
            let tempdataFnObj;
            if (this.context.tempData.currConditionOperation && this.context.tempData.currConditionOperation.left) {
                tempdataFnObj = this.context.tempData.currConditionOperation.left.fn;
            }
            else {
                tempdataFnObj = _.isObject(this.context.tempData.fn) ? this.context.tempData.fn : this.context.tempData;
            }
            if (_.isString(tempdataFnObj.parameter)) {
                tempdataFnObj.parameter = [tempdataFnObj.parameter, ctx.text];
            }
            else if (_.isArray(tempdataFnObj.parameter)) {
                tempdataFnObj.parameter.push(ctx.text);
            }
            else {
                tempdataFnObj.parameter = ctx.text;
            }
        }
    }
    exitFunction_parameter(ctx) {
        if (this.config.logging) {
            console.log('exitFunction_parameter:', ctx.text);
        }
    }
    enterTypeof_spec(ctx) {
        if (this.config.logging) {
            console.log('enterTypeof_spec:', ctx.text);
        }
    }
    exitTypeof_spec(ctx) {
        if (this.config.logging) {
            console.log('exitTypeof_spec:', ctx.text);
        }
    }
    enterTypeof_when_then_clause_list(ctx) {
        if (this.config.logging) {
            console.log('enterTypeof_when_then_clause_list:', ctx.text);
        }
    }
    exitTypeof_when_then_clause_list(ctx) {
        if (this.config.logging) {
            console.log('exitTypeof_when_then_clause_list:', ctx.text);
        }
    }
    enterTypeof_when_then_clause(ctx) {
        if (this.config.logging) {
            console.log('enterTypeof_when_then_clause:', ctx.text);
        }
    }
    exitTypeof_when_then_clause(ctx) {
        if (this.config.logging) {
            console.log('exitTypeof_when_then_clause:', ctx.text);
        }
    }
    enterTypeof_then_clause(ctx) {
        if (this.config.logging) {
            console.log('enterTypeof_then_clause:', ctx.text);
        }
    }
    exitTypeof_then_clause(ctx) {
        if (this.config.logging) {
            console.log('exitTypeof_then_clause:', ctx.text);
        }
    }
    enterTypeof_else_clause(ctx) {
        if (this.config.logging) {
            console.log('enterTypeof_else_clause:', ctx.text);
        }
    }
    exitTypeof_else_clause(ctx) {
        if (this.config.logging) {
            console.log('exitTypeof_else_clause:', ctx.text);
        }
    }
    enterField_list(ctx) {
        if (this.config.logging) {
            console.log('enterField_list:', ctx.text);
        }
    }
    exitField_list(ctx) {
        if (this.config.logging) {
            console.log('exitField_list:', ctx.text);
        }
    }
    enterObject_spec(ctx) {
        if (this.config.logging) {
            console.log('enterObject_spec:', ctx.text);
        }
        this.getSoqlQuery().sObject = ctx.getChild(0).text;
        if (this.config.includeSubqueryAsField && this.context.isSubQuery) {
            this.soqlQuery.fields.push({
                subqueryObjName: ctx.text,
            });
        }
    }
    exitObject_spec(ctx) {
        if (this.config.logging) {
            console.log('exitObject_spec:', ctx.text);
        }
    }
    enterObject_prefix(ctx) {
        if (this.config.logging) {
            console.log('enterObject_prefix:', ctx.text);
        }
    }
    exitObject_prefix(ctx) {
        if (this.config.logging) {
            console.log('exitObject_prefix:', ctx.text);
        }
    }
    enterComparison_operator(ctx) {
        if (this.config.logging) {
            console.log('enterComparison_operator:', ctx.text);
        }
    }
    exitComparison_operator(ctx) {
        if (this.config.logging) {
            console.log('exitComparison_operator:', ctx.text);
        }
    }
    enterSet_operator(ctx) {
        if (this.config.logging) {
            console.log('enterSet_operator:', ctx.text);
        }
    }
    exitSet_operator(ctx) {
        if (this.config.logging) {
            console.log('exitSet_operator:', ctx.text);
        }
    }
    enterCondition(ctx) {
        if (this.config.logging) {
            console.log('enterCondition:', ctx.text);
        }
    }
    exitCondition(ctx) {
        if (this.config.logging) {
            console.log('exitCondition:', ctx.text);
        }
    }
    enterCondition1(ctx) {
        if (this.config.logging) {
            console.log('enterCondition1:', ctx.text);
        }
    }
    exitCondition1(ctx) {
        if (this.config.logging) {
            console.log('exitCondition1:', ctx.text);
        }
    }
    enterParenthesis(ctx) {
        if (this.config.logging) {
            console.log('enterParenthesis:', ctx.text);
        }
        if (this.context.currentItem === 'where' || this.context.currentItem === 'having') {
            this.context.tempData.nextHasCloseParen = false;
            this.context.tempData.nextHasOpenParen = true;
        }
    }
    exitParenthesis(ctx) {
        if (this.config.logging) {
            console.log('exitParenthesis:', ctx.text);
        }
        if (this.context.currentItem === 'where' || this.context.currentItem === 'having') {
            if (this.context.tempData.nextHasCloseParen) {
                this.context.tempData.stack.pop();
            }
            this.context.tempData.stack[this.context.tempData.stack.length - 1].left.closeParen = true;
            this.context.tempData.nextHasCloseParen = true;
        }
    }
    enterSimple_condition(ctx) {
        if (this.config.logging) {
            console.log('enterSimple_condition:', ctx.text);
        }
    }
    exitSimple_condition(ctx) {
        if (this.config.logging) {
            console.log('exitSimple_condition:', ctx.text);
        }
    }
    enterField_based_condition(ctx) {
        if (this.config.logging) {
            console.log('enterField_based_condition:', ctx.text);
        }
        if (this.config.logging) {
            console.log('enterLike_based_condition:', ctx.text);
        }
        if (this.context.currentItem === 'where') {
            const currItem = {};
            if (!this.context.tempData.currConditionOperation.left) {
                this.context.tempData.currConditionOperation.left = currItem;
                if (this.context.tempData.nextHasOpenParen) {
                    currItem.openParen = true;
                    this.context.tempData.nextHasOpenParen = false;
                }
                if (this.context.tempData.nextHasLogicalPrefix) {
                    currItem.logicalPrefix = this.context.tempData.nextHasLogicalPrefix;
                    this.context.tempData.nextHasLogicalPrefix = null;
                }
            }
            else {
                this.context.tempData.currConditionOperation.right = currItem;
            }
            currItem.field = ctx.getChild(0).text;
            currItem.operator = ctx.getChild(1).text;
            currItem.value = ctx.getChild(2).text;
        }
        else if (this.context.currentItem === 'having') {
            const currItem = {};
            if (!this.context.tempData.currConditionOperation.left) {
                this.context.tempData.currConditionOperation.left = currItem;
                if (this.context.tempData.nextHasOpenParen) {
                    currItem.openParen = true;
                    this.context.tempData.nextHasOpenParen = false;
                }
                if (this.context.tempData.nextHasLogicalPrefix) {
                    currItem.logicalPrefix = this.context.tempData.nextHasLogicalPrefix;
                    this.context.tempData.nextHasLogicalPrefix = null;
                }
            }
            else {
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
    exitField_based_condition(ctx) {
        if (this.config.logging) {
            console.log('exitField_based_condition:', ctx.text);
        }
    }
    enterSet_based_condition(ctx) {
        if (this.config.logging) {
            console.log('enterSet_based_condition:', ctx.text);
        }
        if (this.context.currentItem === 'where') {
            const currItem = {};
            if (!this.context.tempData.currConditionOperation.left) {
                this.context.tempData.currConditionOperation.left = currItem;
                if (this.context.tempData.nextHasOpenParen) {
                    currItem.openParen = true;
                    this.context.tempData.nextHasOpenParen = false;
                }
                if (this.context.tempData.nextHasLogicalPrefix) {
                    currItem.logicalPrefix = this.context.tempData.nextHasLogicalPrefix;
                    this.context.tempData.nextHasLogicalPrefix = null;
                }
            }
            else {
                this.context.tempData.currConditionOperation.right = currItem;
            }
            currItem.field = ctx.getChild(0).text;
            currItem.operator = ctx.getChild(1).children.map(child => child.text).join(' ');
            currItem.value = ctx.getChild(2).getChild(1).children
                .filter(child => !(child instanceof tree_1.TerminalNode))
                .map(child => child.text);
        }
    }
    exitSet_based_condition(ctx) {
        if (this.config.logging) {
            console.log('exitSet_based_condition:', ctx.text);
        }
    }
    enterLike_based_condition(ctx) {
        if (this.config.logging) {
            console.log('enterLike_based_condition:', ctx.text);
        }
        if (this.context.currentItem === 'where') {
            // Set current condition in temp data
            const currItem = {};
            if (!this.context.tempData.currConditionOperation.left) {
                this.context.tempData.currConditionOperation.left = currItem;
                if (this.context.tempData.nextHasOpenParen) {
                    currItem.openParen = true;
                    this.context.tempData.nextHasOpenParen = false;
                }
                if (this.context.tempData.nextHasLogicalPrefix) {
                    currItem.logicalPrefix = this.context.tempData.nextHasLogicalPrefix;
                    this.context.tempData.nextHasLogicalPrefix = null;
                }
            }
            else {
                this.context.tempData.currConditionOperation.right = currItem;
            }
            currItem.field = ctx.getChild(0).text;
            currItem.operator = 'LIKE';
            currItem.value = ctx.getChild(ctx.children.length - 1).text;
        }
    }
    exitLike_based_condition(ctx) {
        if (this.config.logging) {
            console.log('exitLike_based_condition:', ctx.text);
        }
    }
    enterCondition_field(ctx) {
        if (this.config.logging) {
            console.log('enterCondition_field:', ctx.text);
        }
    }
    exitCondition_field(ctx) {
        if (this.config.logging) {
            console.log('exitCondition_field:', ctx.text);
        }
    }
    enterSet_values(ctx) {
        if (this.config.logging) {
            console.log('enterSet_values:', ctx.text);
        }
    }
    exitSet_values(ctx) {
        if (this.config.logging) {
            console.log('exitSet_values:', ctx.text);
        }
    }
    enterSet_value_list(ctx) {
        if (this.config.logging) {
            console.log('enterSet_value_list:', ctx.text);
        }
    }
    exitSet_value_list(ctx) {
        if (this.config.logging) {
            console.log('exitSet_value_list:', ctx.text);
        }
    }
    enterWith_clause(ctx) {
        if (this.config.logging) {
            console.log('enterWith_clause:', ctx.text);
        }
    }
    exitWith_clause(ctx) {
        if (this.config.logging) {
            console.log('exitWith_clause:', ctx.text);
        }
    }
    enterWith_plain_clause(ctx) {
        if (this.config.logging) {
            console.log('enterWith_plain_clause:', ctx.text);
        }
    }
    exitWith_plain_clause(ctx) {
        if (this.config.logging) {
            console.log('exitWith_plain_clause:', ctx.text);
        }
    }
    enterWith_data_category_clause(ctx) {
        if (this.config.logging) {
            console.log('enterWith_data_category_clause:', ctx.text);
        }
    }
    exitWith_data_category_clause(ctx) {
        if (this.config.logging) {
            console.log('exitWith_data_category_clause:', ctx.text);
        }
    }
    enterData_category_spec_list(ctx) {
        if (this.config.logging) {
            console.log('enterData_category_spec_list:', ctx.text);
        }
    }
    exitData_category_spec_list(ctx) {
        if (this.config.logging) {
            console.log('exitData_category_spec_list:', ctx.text);
        }
    }
    enterData_category_spec(ctx) {
        if (this.config.logging) {
            console.log('enterData_category_spec:', ctx.text);
        }
    }
    exitData_category_spec(ctx) {
        if (this.config.logging) {
            console.log('exitData_category_spec:', ctx.text);
        }
    }
    enterData_category_parameter_list(ctx) {
        if (this.config.logging) {
            console.log('enterData_category_parameter_list:', ctx.text);
        }
    }
    exitData_category_parameter_list(ctx) {
        if (this.config.logging) {
            console.log('exitData_category_parameter_list:', ctx.text);
        }
    }
    enterData_category_selector(ctx) {
        if (this.config.logging) {
            console.log('enterData_category_selector:', ctx.text);
        }
    }
    exitData_category_selector(ctx) {
        if (this.config.logging) {
            console.log('exitData_category_selector:', ctx.text);
        }
    }
    enterGroup_by_plain_clause(ctx) {
        if (this.config.logging) {
            console.log('enterGroup_by_plain_clause:', ctx.text);
        }
    }
    exitGroup_by_plain_clause(ctx) {
        if (this.config.logging) {
            console.log('exitGroup_by_plain_clause:', ctx.text);
        }
    }
    enterGroup_by_rollup_clause(ctx) {
        if (this.config.logging) {
            console.log('enterGroup_by_rollup_clause:', ctx.text);
        }
        this.context.tempData.type = 'ROLLUP';
    }
    exitGroup_by_rollup_clause(ctx) {
        if (this.config.logging) {
            console.log('exitGroup_by_rollup_clause:', ctx.text);
        }
    }
    enterGroup_by_cube_clause(ctx) {
        if (this.config.logging) {
            console.log('enterGroup_by_cube_clause:', ctx.text);
        }
        this.context.tempData.type = 'CUBE';
    }
    exitGroup_by_cube_clause(ctx) {
        if (this.config.logging) {
            console.log('exitGroup_by_cube_clause:', ctx.text);
        }
    }
    enterGroup_by_list(ctx) {
        if (this.config.logging) {
            console.log('enterGroup_by_list:', ctx.text);
        }
    }
    exitGroup_by_list(ctx) {
        if (this.config.logging) {
            console.log('exitGroup_by_list:', ctx.text);
        }
    }
    enterGroup_by_spec(ctx) {
        if (this.config.logging) {
            console.log('enterGroup_by_spec:', ctx.text);
        }
        if (_.isArray(this.context.tempData.field)) {
            this.context.tempData.field.push(ctx.text);
        }
        else if (_.isString(this.context.tempData.field)) {
            this.context.tempData.field = [this.context.tempData.field, ctx.text];
        }
        else {
            this.context.tempData.field = ctx.text;
        }
    }
    exitGroup_by_spec(ctx) {
        if (this.config.logging) {
            console.log('exitGroup_by_spec:', ctx.text);
        }
    }
    enterOrder_by_list(ctx) {
        if (this.config.logging) {
            console.log('enterOrder_by_list:', ctx.text);
        }
    }
    exitOrder_by_list(ctx) {
        if (this.config.logging) {
            console.log('exitOrder_by_list:', ctx.text);
        }
    }
    enterOrder_by_spec(ctx) {
        if (this.config.logging) {
            console.log('enterOrder_by_spec:', ctx.text);
        }
        this.context.tempData = {};
    }
    exitOrder_by_spec(ctx) {
        if (this.config.logging) {
            console.log('exitOrder_by_spec:', ctx.text);
        }
        const soqlQuery = this.getSoqlQuery();
        if (_.isNil(soqlQuery.orderBy)) {
            soqlQuery.orderBy = this.context.tempData;
        }
        else if (_.isArray(soqlQuery.orderBy)) {
            soqlQuery.orderBy.push(this.context.tempData);
        }
        else {
            soqlQuery.orderBy = [soqlQuery.orderBy, this.context.tempData];
        }
    }
    enterOrder_by_direction_clause(ctx) {
        if (this.config.logging) {
            console.log('enterOrder_by_direction_clause:', ctx.text);
        }
        ctx.text;
        this.context.tempData.order = ctx.text.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';
    }
    exitOrder_by_direction_clause(ctx) {
        if (this.config.logging) {
            console.log('exitOrder_by_direction_clause:', ctx.text);
        }
    }
    enterOrder_by_nulls_clause(ctx) {
        if (this.config.logging) {
            console.log('enterOrder_by_nulls_clause:', ctx.text);
        }
        this.context.tempData.nulls = ctx.getChild(1).text.toUpperCase() === 'FIRST' ? 'FIRST' : 'LAST';
    }
    exitOrder_by_nulls_clause(ctx) {
        if (this.config.logging) {
            console.log('exitOrder_by_nulls_clause:', ctx.text);
        }
    }
    enterOrder_by_field(ctx) {
        if (this.config.logging) {
            console.log('enterOrder_by_field:', ctx.text);
        }
        // If order by is not a function, set field
        if (ctx.getChild(0) instanceof Parser.Function_callContext) {
            this.context.tempData.fn = { text: ctx.text };
        }
        else {
            this.context.tempData.field = ctx.text;
        }
    }
    exitOrder_by_field(ctx) {
        if (this.config.logging) {
            console.log('exitOrder_by_field:', ctx.text);
        }
    }
    enterFor_value(ctx) {
        if (this.config.logging) {
            console.log('enterFor_value:', ctx.text);
        }
    }
    exitFor_value(ctx) {
        if (this.config.logging) {
            console.log('exitFor_value:', ctx.text);
        }
    }
    enterUpdate_value(ctx) {
        if (this.config.logging) {
            console.log('enterUpdate_value:', ctx.text);
        }
    }
    exitUpdate_value(ctx) {
        if (this.config.logging) {
            console.log('exitUpdate_value:', ctx.text);
        }
    }
}
exports.Listener = Listener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29xbExpc3RlbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwcC9Tb3FsTGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFPQSxrREFBa0Q7QUFDbEQsOERBQXlHO0FBQ3pHLHdDQUE2QztBQUM3Qyw0QkFBNEI7QUFlNUI7SUFZRSxZQUFvQixTQUFtQyxFQUFFO1FBQXJDLFdBQU0sR0FBTixNQUFNLENBQStCO1FBWHpELFlBQU8sR0FBWTtZQUNqQixVQUFVLEVBQUUsS0FBSztZQUNqQixlQUFlLEVBQUUsQ0FBQyxDQUFDO1lBQ25CLDBCQUEwQixFQUFFLENBQUM7WUFDN0IsV0FBVyxFQUFFLElBQUk7WUFDakIsa0JBQWtCLEVBQUUsS0FBSztZQUN6QixRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUM7UUFLQSxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3RFLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFDbEgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLDJCQUFTLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsYUFBYSxDQUFDLEdBQWlCO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN6QyxFQUFFLENBQUMsQ0FB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