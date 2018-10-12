import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SOQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface SOQLVisitor<Result> extends ParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SOQLParser.keywords_alias_allowed`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeywords_alias_allowed?: (ctx: Keywords_alias_allowedContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.keywords_name_allowed`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeywords_name_allowed?: (ctx: Keywords_name_allowedContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitName?: (ctx: NameContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.object_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_name?: (ctx: Object_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.field_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitField_name?: (ctx: Field_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.filter_scope_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFilter_scope_name?: (ctx: Filter_scope_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.data_category_group_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitData_category_group_name?: (ctx: Data_category_group_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.data_category_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitData_category_name?: (ctx: Data_category_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.alias_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlias_name?: (ctx: Alias_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.alias`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAlias?: (ctx: AliasContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.date_formula_literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDate_formula_literal?: (ctx: Date_formula_literalContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.date_formula_n_literal_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDate_formula_n_literal_name?: (ctx: Date_formula_n_literal_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.date_formula_n_literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDate_formula_n_literal?: (ctx: Date_formula_n_literalContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.datetime_literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDatetime_literal?: (ctx: Datetime_literalContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.date_literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDate_literal?: (ctx: Date_literalContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.integer_literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInteger_literal?: (ctx: Integer_literalContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.real_literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReal_literal?: (ctx: Real_literalContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.string_literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitString_literal?: (ctx: String_literalContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.boolean_literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBoolean_literal?: (ctx: Boolean_literalContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.null_literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNull_literal?: (ctx: Null_literalContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.function_name`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_name?: (ctx: Function_nameContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.function_date`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_date?: (ctx: Function_dateContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.function_aggregate`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_aggregate?: (ctx: Function_aggregateContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.function_location`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_location?: (ctx: Function_locationContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.function_other`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_other?: (ctx: Function_otherContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.soql_query`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSoql_query?: (ctx: Soql_queryContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.select_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_clause?: (ctx: Select_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.from_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFrom_clause?: (ctx: From_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.using_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUsing_clause?: (ctx: Using_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.where_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhere_clause?: (ctx: Where_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.groupby_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupby_clause?: (ctx: Groupby_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.having_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitHaving_clause?: (ctx: Having_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.orderby_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrderby_clause?: (ctx: Orderby_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.limit_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLimit_clause?: (ctx: Limit_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.offset_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOffset_clause?: (ctx: Offset_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.for_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_clause?: (ctx: For_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.update_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdate_clause?: (ctx: Update_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.soql_subquery`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSoql_subquery?: (ctx: Soql_subqueryContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.subquery_select_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubquery_select_clause?: (ctx: Subquery_select_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.select_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSelect_spec?: (ctx: Select_specContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.subquery_select_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSubquery_select_spec?: (ctx: Subquery_select_specContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.field_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitField_spec?: (ctx: Field_specContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.function_call_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_call_spec?: (ctx: Function_call_specContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.field`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitField?: (ctx: FieldContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.function_call`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_call?: (ctx: Function_callContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.function_parameter_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_parameter_list?: (ctx: Function_parameter_listContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.function_parameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction_parameter?: (ctx: Function_parameterContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.typeof_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeof_spec?: (ctx: Typeof_specContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.typeof_when_then_clause_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeof_when_then_clause_list?: (ctx: Typeof_when_then_clause_listContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.typeof_when_then_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeof_when_then_clause?: (ctx: Typeof_when_then_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.typeof_then_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeof_then_clause?: (ctx: Typeof_then_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.typeof_else_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTypeof_else_clause?: (ctx: Typeof_else_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.field_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitField_list?: (ctx: Field_listContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.object_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_spec?: (ctx: Object_specContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.object_prefix`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitObject_prefix?: (ctx: Object_prefixContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.comparison_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitComparison_operator?: (ctx: Comparison_operatorContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.set_operator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_operator?: (ctx: Set_operatorContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.condition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCondition?: (ctx: ConditionContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.condition1`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCondition1?: (ctx: Condition1Context) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.parenthesis`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParenthesis?: (ctx: ParenthesisContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.simple_condition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSimple_condition?: (ctx: Simple_conditionContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.field_based_condition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitField_based_condition?: (ctx: Field_based_conditionContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.set_based_condition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_based_condition?: (ctx: Set_based_conditionContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.like_based_condition`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLike_based_condition?: (ctx: Like_based_conditionContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.condition_field`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCondition_field?: (ctx: Condition_fieldContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.set_values`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_values?: (ctx: Set_valuesContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.set_value_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSet_value_list?: (ctx: Set_value_listContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.with_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWith_clause?: (ctx: With_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.with_plain_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWith_plain_clause?: (ctx: With_plain_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.with_data_category_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWith_data_category_clause?: (ctx: With_data_category_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.data_category_spec_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitData_category_spec_list?: (ctx: Data_category_spec_listContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.data_category_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitData_category_spec?: (ctx: Data_category_specContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.data_category_parameter_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitData_category_parameter_list?: (ctx: Data_category_parameter_listContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.data_category_selector`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitData_category_selector?: (ctx: Data_category_selectorContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.group_by_plain_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_by_plain_clause?: (ctx: Group_by_plain_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.group_by_rollup_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_by_rollup_clause?: (ctx: Group_by_rollup_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.group_by_cube_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_by_cube_clause?: (ctx: Group_by_cube_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.group_by_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_by_list?: (ctx: Group_by_listContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.group_by_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroup_by_spec?: (ctx: Group_by_specContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.order_by_list`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrder_by_list?: (ctx: Order_by_listContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.order_by_spec`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrder_by_spec?: (ctx: Order_by_specContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.order_by_direction_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrder_by_direction_clause?: (ctx: Order_by_direction_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.order_by_nulls_clause`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrder_by_nulls_clause?: (ctx: Order_by_nulls_clauseContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.order_by_field`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOrder_by_field?: (ctx: Order_by_fieldContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.for_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFor_value?: (ctx: For_valueContext) => Result;
    /**
     * Visit a parse tree produced by `SOQLParser.update_value`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUpdate_value?: (ctx: Update_valueContext) => Result;
}
