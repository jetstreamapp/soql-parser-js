"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = require("antlr4ts/tree");
const _ = require("lodash");
const Parser = require("./generated/SOQLParser");
class SoqlQuery {
    constructor() {
        this.fields = [];
        this.subqueries = [];
    }
}
exports.SoqlQuery = SoqlQuery;
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
        this.soqlQuery = new SoqlQuery();
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
        else if (this.context.currentItem === 'having') {
            if (['NOT'].includes(ctx.text.toUpperCase())) {
                this.context.tempData.nextHasLogicalPrefix = ctx.text;
            }
            else if (['AND', 'OR'].includes(ctx.text.toUpperCase())) {
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
            this.getSoqlQuery().sObjectAlias = ctx.text;
            // All fields need to update to remove the alias from relationships
            this.getSoqlQuery().fields.forEach(field => {
                if (field.text && field.text.startsWith(`${ctx.text}.`)) {
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
            this.context.tempData.currConditionOperation.left.fn.name = ctx.text;
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
        this.soqlQuery.subqueries.push(new SoqlQuery());
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
            this.context.tempData.currConditionOperation.left.fn = {
                text: ctx.text,
            };
            // this.context.tempData.fn.;
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
            if (ctx.getChild(0).text.includes('.')) {
                this.soqlQuery.fields.push({
                    subqueryObjName: ctx.text,
                });
            }
            else {
                this.soqlQuery.fields.push({
                    subqueryObjName: ctx.getChild(0).text,
                });
            }
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
