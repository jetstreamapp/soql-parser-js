// Generated from src/main/g4/SOQL.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { Keywords_alias_allowedContext } from './SOQLParser';
import { Keywords_name_allowedContext } from './SOQLParser';
import { NameContext } from './SOQLParser';
import { Object_nameContext } from './SOQLParser';
import { Field_nameContext } from './SOQLParser';
import { Filter_scope_nameContext } from './SOQLParser';
import { Data_category_group_nameContext } from './SOQLParser';
import { Data_category_nameContext } from './SOQLParser';
import { Alias_nameContext } from './SOQLParser';
import { AliasContext } from './SOQLParser';
import { LiteralContext } from './SOQLParser';
import { Date_formula_literalContext } from './SOQLParser';
import { Date_formula_n_literal_nameContext } from './SOQLParser';
import { Date_formula_n_literalContext } from './SOQLParser';
import { Datetime_literalContext } from './SOQLParser';
import { Date_literalContext } from './SOQLParser';
import { Integer_literalContext } from './SOQLParser';
import { Real_literalContext } from './SOQLParser';
import { String_literalContext } from './SOQLParser';
import { Boolean_literalContext } from './SOQLParser';
import { Null_literalContext } from './SOQLParser';
import { Function_nameContext } from './SOQLParser';
import { Function_dateContext } from './SOQLParser';
import { Function_aggregateContext } from './SOQLParser';
import { Function_locationContext } from './SOQLParser';
import { Function_otherContext } from './SOQLParser';
import { Soql_queryContext } from './SOQLParser';
import { Select_clauseContext } from './SOQLParser';
import { From_clauseContext } from './SOQLParser';
import { Using_clauseContext } from './SOQLParser';
import { Where_clauseContext } from './SOQLParser';
import { Groupby_clauseContext } from './SOQLParser';
import { Having_clauseContext } from './SOQLParser';
import { Orderby_clauseContext } from './SOQLParser';
import { Limit_clauseContext } from './SOQLParser';
import { Offset_clauseContext } from './SOQLParser';
import { For_clauseContext } from './SOQLParser';
import { Update_clauseContext } from './SOQLParser';
import { Soql_subqueryContext } from './SOQLParser';
import { Subquery_select_clauseContext } from './SOQLParser';
import { Select_specContext } from './SOQLParser';
import { Subquery_select_specContext } from './SOQLParser';
import { Field_specContext } from './SOQLParser';
import { Function_call_specContext } from './SOQLParser';
import { FieldContext } from './SOQLParser';
import { Function_callContext } from './SOQLParser';
import { Function_parameter_listContext } from './SOQLParser';
import { Function_parameterContext } from './SOQLParser';
import { Typeof_specContext } from './SOQLParser';
import { Typeof_when_then_clause_listContext } from './SOQLParser';
import { Typeof_when_then_clauseContext } from './SOQLParser';
import { Typeof_then_clauseContext } from './SOQLParser';
import { Typeof_else_clauseContext } from './SOQLParser';
import { Field_listContext } from './SOQLParser';
import { Object_specContext } from './SOQLParser';
import { Object_prefixContext } from './SOQLParser';
import { Comparison_operatorContext } from './SOQLParser';
import { Set_operatorContext } from './SOQLParser';
import { ConditionContext } from './SOQLParser';
import { Condition1Context } from './SOQLParser';
import { ParenthesisContext } from './SOQLParser';
import { Simple_conditionContext } from './SOQLParser';
import { Field_based_conditionContext } from './SOQLParser';
import { Set_based_conditionContext } from './SOQLParser';
import { Like_based_conditionContext } from './SOQLParser';
import { Condition_fieldContext } from './SOQLParser';
import { Set_valuesContext } from './SOQLParser';
import { Set_value_listContext } from './SOQLParser';
import { With_clauseContext } from './SOQLParser';
import { With_plain_clauseContext } from './SOQLParser';
import { With_data_category_clauseContext } from './SOQLParser';
import { Data_category_spec_listContext } from './SOQLParser';
import { Data_category_specContext } from './SOQLParser';
import { Data_category_parameter_listContext } from './SOQLParser';
import { Data_category_selectorContext } from './SOQLParser';
import { Group_by_plain_clauseContext } from './SOQLParser';
import { Group_by_rollup_clauseContext } from './SOQLParser';
import { Group_by_cube_clauseContext } from './SOQLParser';
import { Group_by_listContext } from './SOQLParser';
import { Group_by_specContext } from './SOQLParser';
import { Order_by_listContext } from './SOQLParser';
import { Order_by_specContext } from './SOQLParser';
import { Order_by_direction_clauseContext } from './SOQLParser';
import { Order_by_nulls_clauseContext } from './SOQLParser';
import { Order_by_fieldContext } from './SOQLParser';
import { For_valueContext } from './SOQLParser';
import { Update_valueContext } from './SOQLParser';


/**
 * This interface defines a complete listener for a parse tree produced by
 * `SOQLParser`.
 */
export interface SOQLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `SOQLParser.keywords_alias_allowed`.
	 * @param ctx the parse tree
	 */
	enterKeywords_alias_allowed?: (ctx: Keywords_alias_allowedContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.keywords_alias_allowed`.
	 * @param ctx the parse tree
	 */
	exitKeywords_alias_allowed?: (ctx: Keywords_alias_allowedContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.keywords_name_allowed`.
	 * @param ctx the parse tree
	 */
	enterKeywords_name_allowed?: (ctx: Keywords_name_allowedContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.keywords_name_allowed`.
	 * @param ctx the parse tree
	 */
	exitKeywords_name_allowed?: (ctx: Keywords_name_allowedContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.name`.
	 * @param ctx the parse tree
	 */
	enterName?: (ctx: NameContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.name`.
	 * @param ctx the parse tree
	 */
	exitName?: (ctx: NameContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.object_name`.
	 * @param ctx the parse tree
	 */
	enterObject_name?: (ctx: Object_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.object_name`.
	 * @param ctx the parse tree
	 */
	exitObject_name?: (ctx: Object_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.field_name`.
	 * @param ctx the parse tree
	 */
	enterField_name?: (ctx: Field_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.field_name`.
	 * @param ctx the parse tree
	 */
	exitField_name?: (ctx: Field_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.filter_scope_name`.
	 * @param ctx the parse tree
	 */
	enterFilter_scope_name?: (ctx: Filter_scope_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.filter_scope_name`.
	 * @param ctx the parse tree
	 */
	exitFilter_scope_name?: (ctx: Filter_scope_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.data_category_group_name`.
	 * @param ctx the parse tree
	 */
	enterData_category_group_name?: (ctx: Data_category_group_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.data_category_group_name`.
	 * @param ctx the parse tree
	 */
	exitData_category_group_name?: (ctx: Data_category_group_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.data_category_name`.
	 * @param ctx the parse tree
	 */
	enterData_category_name?: (ctx: Data_category_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.data_category_name`.
	 * @param ctx the parse tree
	 */
	exitData_category_name?: (ctx: Data_category_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.alias_name`.
	 * @param ctx the parse tree
	 */
	enterAlias_name?: (ctx: Alias_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.alias_name`.
	 * @param ctx the parse tree
	 */
	exitAlias_name?: (ctx: Alias_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.alias`.
	 * @param ctx the parse tree
	 */
	enterAlias?: (ctx: AliasContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.alias`.
	 * @param ctx the parse tree
	 */
	exitAlias?: (ctx: AliasContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.date_formula_literal`.
	 * @param ctx the parse tree
	 */
	enterDate_formula_literal?: (ctx: Date_formula_literalContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.date_formula_literal`.
	 * @param ctx the parse tree
	 */
	exitDate_formula_literal?: (ctx: Date_formula_literalContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.date_formula_n_literal_name`.
	 * @param ctx the parse tree
	 */
	enterDate_formula_n_literal_name?: (ctx: Date_formula_n_literal_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.date_formula_n_literal_name`.
	 * @param ctx the parse tree
	 */
	exitDate_formula_n_literal_name?: (ctx: Date_formula_n_literal_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.date_formula_n_literal`.
	 * @param ctx the parse tree
	 */
	enterDate_formula_n_literal?: (ctx: Date_formula_n_literalContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.date_formula_n_literal`.
	 * @param ctx the parse tree
	 */
	exitDate_formula_n_literal?: (ctx: Date_formula_n_literalContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.datetime_literal`.
	 * @param ctx the parse tree
	 */
	enterDatetime_literal?: (ctx: Datetime_literalContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.datetime_literal`.
	 * @param ctx the parse tree
	 */
	exitDatetime_literal?: (ctx: Datetime_literalContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.date_literal`.
	 * @param ctx the parse tree
	 */
	enterDate_literal?: (ctx: Date_literalContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.date_literal`.
	 * @param ctx the parse tree
	 */
	exitDate_literal?: (ctx: Date_literalContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.integer_literal`.
	 * @param ctx the parse tree
	 */
	enterInteger_literal?: (ctx: Integer_literalContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.integer_literal`.
	 * @param ctx the parse tree
	 */
	exitInteger_literal?: (ctx: Integer_literalContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.real_literal`.
	 * @param ctx the parse tree
	 */
	enterReal_literal?: (ctx: Real_literalContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.real_literal`.
	 * @param ctx the parse tree
	 */
	exitReal_literal?: (ctx: Real_literalContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.string_literal`.
	 * @param ctx the parse tree
	 */
	enterString_literal?: (ctx: String_literalContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.string_literal`.
	 * @param ctx the parse tree
	 */
	exitString_literal?: (ctx: String_literalContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.boolean_literal`.
	 * @param ctx the parse tree
	 */
	enterBoolean_literal?: (ctx: Boolean_literalContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.boolean_literal`.
	 * @param ctx the parse tree
	 */
	exitBoolean_literal?: (ctx: Boolean_literalContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.null_literal`.
	 * @param ctx the parse tree
	 */
	enterNull_literal?: (ctx: Null_literalContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.null_literal`.
	 * @param ctx the parse tree
	 */
	exitNull_literal?: (ctx: Null_literalContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.function_name`.
	 * @param ctx the parse tree
	 */
	enterFunction_name?: (ctx: Function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.function_name`.
	 * @param ctx the parse tree
	 */
	exitFunction_name?: (ctx: Function_nameContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.function_date`.
	 * @param ctx the parse tree
	 */
	enterFunction_date?: (ctx: Function_dateContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.function_date`.
	 * @param ctx the parse tree
	 */
	exitFunction_date?: (ctx: Function_dateContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.function_aggregate`.
	 * @param ctx the parse tree
	 */
	enterFunction_aggregate?: (ctx: Function_aggregateContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.function_aggregate`.
	 * @param ctx the parse tree
	 */
	exitFunction_aggregate?: (ctx: Function_aggregateContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.function_location`.
	 * @param ctx the parse tree
	 */
	enterFunction_location?: (ctx: Function_locationContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.function_location`.
	 * @param ctx the parse tree
	 */
	exitFunction_location?: (ctx: Function_locationContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.function_other`.
	 * @param ctx the parse tree
	 */
	enterFunction_other?: (ctx: Function_otherContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.function_other`.
	 * @param ctx the parse tree
	 */
	exitFunction_other?: (ctx: Function_otherContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.soql_query`.
	 * @param ctx the parse tree
	 */
	enterSoql_query?: (ctx: Soql_queryContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.soql_query`.
	 * @param ctx the parse tree
	 */
	exitSoql_query?: (ctx: Soql_queryContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.select_clause`.
	 * @param ctx the parse tree
	 */
	enterSelect_clause?: (ctx: Select_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.select_clause`.
	 * @param ctx the parse tree
	 */
	exitSelect_clause?: (ctx: Select_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.from_clause`.
	 * @param ctx the parse tree
	 */
	enterFrom_clause?: (ctx: From_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.from_clause`.
	 * @param ctx the parse tree
	 */
	exitFrom_clause?: (ctx: From_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.using_clause`.
	 * @param ctx the parse tree
	 */
	enterUsing_clause?: (ctx: Using_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.using_clause`.
	 * @param ctx the parse tree
	 */
	exitUsing_clause?: (ctx: Using_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.where_clause`.
	 * @param ctx the parse tree
	 */
	enterWhere_clause?: (ctx: Where_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.where_clause`.
	 * @param ctx the parse tree
	 */
	exitWhere_clause?: (ctx: Where_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.groupby_clause`.
	 * @param ctx the parse tree
	 */
	enterGroupby_clause?: (ctx: Groupby_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.groupby_clause`.
	 * @param ctx the parse tree
	 */
	exitGroupby_clause?: (ctx: Groupby_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.having_clause`.
	 * @param ctx the parse tree
	 */
	enterHaving_clause?: (ctx: Having_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.having_clause`.
	 * @param ctx the parse tree
	 */
	exitHaving_clause?: (ctx: Having_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.orderby_clause`.
	 * @param ctx the parse tree
	 */
	enterOrderby_clause?: (ctx: Orderby_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.orderby_clause`.
	 * @param ctx the parse tree
	 */
	exitOrderby_clause?: (ctx: Orderby_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.limit_clause`.
	 * @param ctx the parse tree
	 */
	enterLimit_clause?: (ctx: Limit_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.limit_clause`.
	 * @param ctx the parse tree
	 */
	exitLimit_clause?: (ctx: Limit_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.offset_clause`.
	 * @param ctx the parse tree
	 */
	enterOffset_clause?: (ctx: Offset_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.offset_clause`.
	 * @param ctx the parse tree
	 */
	exitOffset_clause?: (ctx: Offset_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.for_clause`.
	 * @param ctx the parse tree
	 */
	enterFor_clause?: (ctx: For_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.for_clause`.
	 * @param ctx the parse tree
	 */
	exitFor_clause?: (ctx: For_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.update_clause`.
	 * @param ctx the parse tree
	 */
	enterUpdate_clause?: (ctx: Update_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.update_clause`.
	 * @param ctx the parse tree
	 */
	exitUpdate_clause?: (ctx: Update_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.soql_subquery`.
	 * @param ctx the parse tree
	 */
	enterSoql_subquery?: (ctx: Soql_subqueryContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.soql_subquery`.
	 * @param ctx the parse tree
	 */
	exitSoql_subquery?: (ctx: Soql_subqueryContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.subquery_select_clause`.
	 * @param ctx the parse tree
	 */
	enterSubquery_select_clause?: (ctx: Subquery_select_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.subquery_select_clause`.
	 * @param ctx the parse tree
	 */
	exitSubquery_select_clause?: (ctx: Subquery_select_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.select_spec`.
	 * @param ctx the parse tree
	 */
	enterSelect_spec?: (ctx: Select_specContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.select_spec`.
	 * @param ctx the parse tree
	 */
	exitSelect_spec?: (ctx: Select_specContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.subquery_select_spec`.
	 * @param ctx the parse tree
	 */
	enterSubquery_select_spec?: (ctx: Subquery_select_specContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.subquery_select_spec`.
	 * @param ctx the parse tree
	 */
	exitSubquery_select_spec?: (ctx: Subquery_select_specContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.field_spec`.
	 * @param ctx the parse tree
	 */
	enterField_spec?: (ctx: Field_specContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.field_spec`.
	 * @param ctx the parse tree
	 */
	exitField_spec?: (ctx: Field_specContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.function_call_spec`.
	 * @param ctx the parse tree
	 */
	enterFunction_call_spec?: (ctx: Function_call_specContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.function_call_spec`.
	 * @param ctx the parse tree
	 */
	exitFunction_call_spec?: (ctx: Function_call_specContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.field`.
	 * @param ctx the parse tree
	 */
	enterField?: (ctx: FieldContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.field`.
	 * @param ctx the parse tree
	 */
	exitField?: (ctx: FieldContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.function_parameter_list`.
	 * @param ctx the parse tree
	 */
	enterFunction_parameter_list?: (ctx: Function_parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.function_parameter_list`.
	 * @param ctx the parse tree
	 */
	exitFunction_parameter_list?: (ctx: Function_parameter_listContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.function_parameter`.
	 * @param ctx the parse tree
	 */
	enterFunction_parameter?: (ctx: Function_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.function_parameter`.
	 * @param ctx the parse tree
	 */
	exitFunction_parameter?: (ctx: Function_parameterContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.typeof_spec`.
	 * @param ctx the parse tree
	 */
	enterTypeof_spec?: (ctx: Typeof_specContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.typeof_spec`.
	 * @param ctx the parse tree
	 */
	exitTypeof_spec?: (ctx: Typeof_specContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.typeof_when_then_clause_list`.
	 * @param ctx the parse tree
	 */
	enterTypeof_when_then_clause_list?: (ctx: Typeof_when_then_clause_listContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.typeof_when_then_clause_list`.
	 * @param ctx the parse tree
	 */
	exitTypeof_when_then_clause_list?: (ctx: Typeof_when_then_clause_listContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.typeof_when_then_clause`.
	 * @param ctx the parse tree
	 */
	enterTypeof_when_then_clause?: (ctx: Typeof_when_then_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.typeof_when_then_clause`.
	 * @param ctx the parse tree
	 */
	exitTypeof_when_then_clause?: (ctx: Typeof_when_then_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.typeof_then_clause`.
	 * @param ctx the parse tree
	 */
	enterTypeof_then_clause?: (ctx: Typeof_then_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.typeof_then_clause`.
	 * @param ctx the parse tree
	 */
	exitTypeof_then_clause?: (ctx: Typeof_then_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.typeof_else_clause`.
	 * @param ctx the parse tree
	 */
	enterTypeof_else_clause?: (ctx: Typeof_else_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.typeof_else_clause`.
	 * @param ctx the parse tree
	 */
	exitTypeof_else_clause?: (ctx: Typeof_else_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.field_list`.
	 * @param ctx the parse tree
	 */
	enterField_list?: (ctx: Field_listContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.field_list`.
	 * @param ctx the parse tree
	 */
	exitField_list?: (ctx: Field_listContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.object_spec`.
	 * @param ctx the parse tree
	 */
	enterObject_spec?: (ctx: Object_specContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.object_spec`.
	 * @param ctx the parse tree
	 */
	exitObject_spec?: (ctx: Object_specContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.object_prefix`.
	 * @param ctx the parse tree
	 */
	enterObject_prefix?: (ctx: Object_prefixContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.object_prefix`.
	 * @param ctx the parse tree
	 */
	exitObject_prefix?: (ctx: Object_prefixContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.comparison_operator`.
	 * @param ctx the parse tree
	 */
	enterComparison_operator?: (ctx: Comparison_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.comparison_operator`.
	 * @param ctx the parse tree
	 */
	exitComparison_operator?: (ctx: Comparison_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.set_operator`.
	 * @param ctx the parse tree
	 */
	enterSet_operator?: (ctx: Set_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.set_operator`.
	 * @param ctx the parse tree
	 */
	exitSet_operator?: (ctx: Set_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.condition1`.
	 * @param ctx the parse tree
	 */
	enterCondition1?: (ctx: Condition1Context) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.condition1`.
	 * @param ctx the parse tree
	 */
	exitCondition1?: (ctx: Condition1Context) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.parenthesis`.
	 * @param ctx the parse tree
	 */
	enterParenthesis?: (ctx: ParenthesisContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.parenthesis`.
	 * @param ctx the parse tree
	 */
	exitParenthesis?: (ctx: ParenthesisContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.simple_condition`.
	 * @param ctx the parse tree
	 */
	enterSimple_condition?: (ctx: Simple_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.simple_condition`.
	 * @param ctx the parse tree
	 */
	exitSimple_condition?: (ctx: Simple_conditionContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.field_based_condition`.
	 * @param ctx the parse tree
	 */
	enterField_based_condition?: (ctx: Field_based_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.field_based_condition`.
	 * @param ctx the parse tree
	 */
	exitField_based_condition?: (ctx: Field_based_conditionContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.set_based_condition`.
	 * @param ctx the parse tree
	 */
	enterSet_based_condition?: (ctx: Set_based_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.set_based_condition`.
	 * @param ctx the parse tree
	 */
	exitSet_based_condition?: (ctx: Set_based_conditionContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.like_based_condition`.
	 * @param ctx the parse tree
	 */
	enterLike_based_condition?: (ctx: Like_based_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.like_based_condition`.
	 * @param ctx the parse tree
	 */
	exitLike_based_condition?: (ctx: Like_based_conditionContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.condition_field`.
	 * @param ctx the parse tree
	 */
	enterCondition_field?: (ctx: Condition_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.condition_field`.
	 * @param ctx the parse tree
	 */
	exitCondition_field?: (ctx: Condition_fieldContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.set_values`.
	 * @param ctx the parse tree
	 */
	enterSet_values?: (ctx: Set_valuesContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.set_values`.
	 * @param ctx the parse tree
	 */
	exitSet_values?: (ctx: Set_valuesContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.set_value_list`.
	 * @param ctx the parse tree
	 */
	enterSet_value_list?: (ctx: Set_value_listContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.set_value_list`.
	 * @param ctx the parse tree
	 */
	exitSet_value_list?: (ctx: Set_value_listContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.with_clause`.
	 * @param ctx the parse tree
	 */
	enterWith_clause?: (ctx: With_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.with_clause`.
	 * @param ctx the parse tree
	 */
	exitWith_clause?: (ctx: With_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.with_plain_clause`.
	 * @param ctx the parse tree
	 */
	enterWith_plain_clause?: (ctx: With_plain_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.with_plain_clause`.
	 * @param ctx the parse tree
	 */
	exitWith_plain_clause?: (ctx: With_plain_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.with_data_category_clause`.
	 * @param ctx the parse tree
	 */
	enterWith_data_category_clause?: (ctx: With_data_category_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.with_data_category_clause`.
	 * @param ctx the parse tree
	 */
	exitWith_data_category_clause?: (ctx: With_data_category_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.data_category_spec_list`.
	 * @param ctx the parse tree
	 */
	enterData_category_spec_list?: (ctx: Data_category_spec_listContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.data_category_spec_list`.
	 * @param ctx the parse tree
	 */
	exitData_category_spec_list?: (ctx: Data_category_spec_listContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.data_category_spec`.
	 * @param ctx the parse tree
	 */
	enterData_category_spec?: (ctx: Data_category_specContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.data_category_spec`.
	 * @param ctx the parse tree
	 */
	exitData_category_spec?: (ctx: Data_category_specContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.data_category_parameter_list`.
	 * @param ctx the parse tree
	 */
	enterData_category_parameter_list?: (ctx: Data_category_parameter_listContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.data_category_parameter_list`.
	 * @param ctx the parse tree
	 */
	exitData_category_parameter_list?: (ctx: Data_category_parameter_listContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.data_category_selector`.
	 * @param ctx the parse tree
	 */
	enterData_category_selector?: (ctx: Data_category_selectorContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.data_category_selector`.
	 * @param ctx the parse tree
	 */
	exitData_category_selector?: (ctx: Data_category_selectorContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.group_by_plain_clause`.
	 * @param ctx the parse tree
	 */
	enterGroup_by_plain_clause?: (ctx: Group_by_plain_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.group_by_plain_clause`.
	 * @param ctx the parse tree
	 */
	exitGroup_by_plain_clause?: (ctx: Group_by_plain_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.group_by_rollup_clause`.
	 * @param ctx the parse tree
	 */
	enterGroup_by_rollup_clause?: (ctx: Group_by_rollup_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.group_by_rollup_clause`.
	 * @param ctx the parse tree
	 */
	exitGroup_by_rollup_clause?: (ctx: Group_by_rollup_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.group_by_cube_clause`.
	 * @param ctx the parse tree
	 */
	enterGroup_by_cube_clause?: (ctx: Group_by_cube_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.group_by_cube_clause`.
	 * @param ctx the parse tree
	 */
	exitGroup_by_cube_clause?: (ctx: Group_by_cube_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.group_by_list`.
	 * @param ctx the parse tree
	 */
	enterGroup_by_list?: (ctx: Group_by_listContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.group_by_list`.
	 * @param ctx the parse tree
	 */
	exitGroup_by_list?: (ctx: Group_by_listContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.group_by_spec`.
	 * @param ctx the parse tree
	 */
	enterGroup_by_spec?: (ctx: Group_by_specContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.group_by_spec`.
	 * @param ctx the parse tree
	 */
	exitGroup_by_spec?: (ctx: Group_by_specContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.order_by_list`.
	 * @param ctx the parse tree
	 */
	enterOrder_by_list?: (ctx: Order_by_listContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.order_by_list`.
	 * @param ctx the parse tree
	 */
	exitOrder_by_list?: (ctx: Order_by_listContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.order_by_spec`.
	 * @param ctx the parse tree
	 */
	enterOrder_by_spec?: (ctx: Order_by_specContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.order_by_spec`.
	 * @param ctx the parse tree
	 */
	exitOrder_by_spec?: (ctx: Order_by_specContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.order_by_direction_clause`.
	 * @param ctx the parse tree
	 */
	enterOrder_by_direction_clause?: (ctx: Order_by_direction_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.order_by_direction_clause`.
	 * @param ctx the parse tree
	 */
	exitOrder_by_direction_clause?: (ctx: Order_by_direction_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.order_by_nulls_clause`.
	 * @param ctx the parse tree
	 */
	enterOrder_by_nulls_clause?: (ctx: Order_by_nulls_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.order_by_nulls_clause`.
	 * @param ctx the parse tree
	 */
	exitOrder_by_nulls_clause?: (ctx: Order_by_nulls_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.order_by_field`.
	 * @param ctx the parse tree
	 */
	enterOrder_by_field?: (ctx: Order_by_fieldContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.order_by_field`.
	 * @param ctx the parse tree
	 */
	exitOrder_by_field?: (ctx: Order_by_fieldContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.for_value`.
	 * @param ctx the parse tree
	 */
	enterFor_value?: (ctx: For_valueContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.for_value`.
	 * @param ctx the parse tree
	 */
	exitFor_value?: (ctx: For_valueContext) => void;

	/**
	 * Enter a parse tree produced by `SOQLParser.update_value`.
	 * @param ctx the parse tree
	 */
	enterUpdate_value?: (ctx: Update_valueContext) => void;
	/**
	 * Exit a parse tree produced by `SOQLParser.update_value`.
	 * @param ctx the parse tree
	 */
	exitUpdate_value?: (ctx: Update_valueContext) => void;
}

