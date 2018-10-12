import { ATN } from 'antlr4ts/atn/ATN';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { SOQLListener } from './SOQLListener';
import { SOQLVisitor } from './SOQLVisitor';
export declare class Keywords_alias_allowedContext extends ParserRuleContext {
    ABOVE(): TerminalNode | undefined;
    ABOVE_OR_BELOW(): TerminalNode | undefined;
    AT(): TerminalNode | undefined;
    BELOW(): TerminalNode | undefined;
    CATEGORY(): TerminalNode | undefined;
    DATA(): TerminalNode | undefined;
    END(): TerminalNode | undefined;
    OFFSET(): TerminalNode | undefined;
    ORDER(): TerminalNode | undefined;
    REFERENCE(): TerminalNode | undefined;
    SCOPE(): TerminalNode | undefined;
    TRACKING(): TerminalNode | undefined;
    THEN(): TerminalNode | undefined;
    TYPEOF(): TerminalNode | undefined;
    VIEW(): TerminalNode | undefined;
    VIEWSTAT(): TerminalNode | undefined;
    WHEN(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Keywords_name_allowedContext extends ParserRuleContext {
    keywords_alias_allowed(): Keywords_alias_allowedContext | undefined;
    GROUP(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class NameContext extends ParserRuleContext {
    ID(): TerminalNode | undefined;
    keywords_name_allowed(): Keywords_name_allowedContext | undefined;
    date_formula_literal(): Date_formula_literalContext | undefined;
    date_formula_n_literal_name(): Date_formula_n_literal_nameContext | undefined;
    function_name(): Function_nameContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Object_nameContext extends ParserRuleContext {
    name(): NameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Field_nameContext extends ParserRuleContext {
    name(): NameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Filter_scope_nameContext extends ParserRuleContext {
    name(): NameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Data_category_group_nameContext extends ParserRuleContext {
    name(): NameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Data_category_nameContext extends ParserRuleContext {
    name(): NameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Alias_nameContext extends ParserRuleContext {
    ID(): TerminalNode | undefined;
    keywords_alias_allowed(): Keywords_alias_allowedContext | undefined;
    date_formula_literal(): Date_formula_literalContext | undefined;
    date_formula_n_literal_name(): Date_formula_n_literal_nameContext | undefined;
    function_name(): Function_nameContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class AliasContext extends ParserRuleContext {
    alias_name(): Alias_nameContext;
    AS(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class LiteralContext extends ParserRuleContext {
    date_formula_literal(): Date_formula_literalContext | undefined;
    date_formula_n_literal(): Date_formula_n_literalContext | undefined;
    datetime_literal(): Datetime_literalContext | undefined;
    date_literal(): Date_literalContext | undefined;
    integer_literal(): Integer_literalContext | undefined;
    real_literal(): Real_literalContext | undefined;
    string_literal(): String_literalContext | undefined;
    boolean_literal(): Boolean_literalContext | undefined;
    null_literal(): Null_literalContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Date_formula_literalContext extends ParserRuleContext {
    YESTERDAY(): TerminalNode | undefined;
    TODAY(): TerminalNode | undefined;
    TOMORROW(): TerminalNode | undefined;
    LAST_WEEK(): TerminalNode | undefined;
    THIS_WEEK(): TerminalNode | undefined;
    NEXT_WEEK(): TerminalNode | undefined;
    LAST_MONTH(): TerminalNode | undefined;
    THIS_MONTH(): TerminalNode | undefined;
    NEXT_MONTH(): TerminalNode | undefined;
    LAST_90_DAYS(): TerminalNode | undefined;
    NEXT_90_DAYS(): TerminalNode | undefined;
    THIS_QUARTER(): TerminalNode | undefined;
    LAST_QUARTER(): TerminalNode | undefined;
    NEXT_QUARTER(): TerminalNode | undefined;
    THIS_YEAR(): TerminalNode | undefined;
    LAST_YEAR(): TerminalNode | undefined;
    NEXT_YEAR(): TerminalNode | undefined;
    THIS_FISCAL_QUARTER(): TerminalNode | undefined;
    LAST_FISCAL_QUARTER(): TerminalNode | undefined;
    NEXT_FISCAL_QUARTER(): TerminalNode | undefined;
    THIS_FISCAL_YEAR(): TerminalNode | undefined;
    LAST_FISCAL_YEAR(): TerminalNode | undefined;
    NEXT_FISCAL_YEAR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Date_formula_n_literal_nameContext extends ParserRuleContext {
    NEXT_N_DAYS(): TerminalNode | undefined;
    LAST_N_DAYS(): TerminalNode | undefined;
    N_DAYS_AGO(): TerminalNode | undefined;
    NEXT_N_WEEKS(): TerminalNode | undefined;
    LAST_N_WEEKS(): TerminalNode | undefined;
    N_WEEKS_AGO(): TerminalNode | undefined;
    NEXT_N_MONTHS(): TerminalNode | undefined;
    LAST_N_MONTHS(): TerminalNode | undefined;
    N_MONTHS_AGO(): TerminalNode | undefined;
    NEXT_N_QUARTERS(): TerminalNode | undefined;
    LAST_N_QUARTERS(): TerminalNode | undefined;
    N_QUARTERS_AGO(): TerminalNode | undefined;
    NEXT_N_YEARS(): TerminalNode | undefined;
    LAST_N_YEARS(): TerminalNode | undefined;
    N_YEARS_AGO(): TerminalNode | undefined;
    NEXT_N_FISCAL_QUARTERS(): TerminalNode | undefined;
    LAST_N_FISCAL_QUARTERS(): TerminalNode | undefined;
    N_FISCAL_QUARTERS_AGO(): TerminalNode | undefined;
    NEXT_N_FISCAL_YEARS(): TerminalNode | undefined;
    LAST_N_FISCAL_YEARS(): TerminalNode | undefined;
    N_FISCAL_YEARS_AGO(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Date_formula_n_literalContext extends ParserRuleContext {
    date_formula_n_literal_name(): Date_formula_n_literal_nameContext;
    COLON(): TerminalNode;
    UNSIGNED_INTEGER(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Datetime_literalContext extends ParserRuleContext {
    DATETIME(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Date_literalContext extends ParserRuleContext {
    DATE(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Integer_literalContext extends ParserRuleContext {
    SIGNED_INTEGER(): TerminalNode | undefined;
    UNSIGNED_INTEGER(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Real_literalContext extends ParserRuleContext {
    REAL_NUMBER(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class String_literalContext extends ParserRuleContext {
    STRING_VALUE(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Boolean_literalContext extends ParserRuleContext {
    TRUE(): TerminalNode | undefined;
    FALSE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Null_literalContext extends ParserRuleContext {
    NULL(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Function_nameContext extends ParserRuleContext {
    function_date(): Function_dateContext | undefined;
    function_aggregate(): Function_aggregateContext | undefined;
    function_location(): Function_locationContext | undefined;
    function_other(): Function_otherContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Function_dateContext extends ParserRuleContext {
    CALENDAR_MONTH(): TerminalNode | undefined;
    CALENDAR_QUARTER(): TerminalNode | undefined;
    CALENDAR_YEAR(): TerminalNode | undefined;
    DAY_IN_MONTH(): TerminalNode | undefined;
    DAY_IN_WEEK(): TerminalNode | undefined;
    DAY_IN_YEAR(): TerminalNode | undefined;
    DAY_ONLY(): TerminalNode | undefined;
    FISCAL_MONTH(): TerminalNode | undefined;
    FISCAL_QUARTER(): TerminalNode | undefined;
    FISCAL_YEAR(): TerminalNode | undefined;
    HOUR_IN_DAY(): TerminalNode | undefined;
    WEEK_IN_MONTH(): TerminalNode | undefined;
    WEEK_IN_YEAR(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Function_aggregateContext extends ParserRuleContext {
    AVG(): TerminalNode | undefined;
    COUNT(): TerminalNode | undefined;
    COUNT_DISTINCT(): TerminalNode | undefined;
    MIN(): TerminalNode | undefined;
    MAX(): TerminalNode | undefined;
    SUM(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Function_locationContext extends ParserRuleContext {
    DISTANCE(): TerminalNode | undefined;
    GEOLOCATION(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Function_otherContext extends ParserRuleContext {
    FORMAT(): TerminalNode | undefined;
    TOLABEL(): TerminalNode | undefined;
    CONVERT_TIME_ZONE(): TerminalNode | undefined;
    CONVERT_CURRENCY(): TerminalNode | undefined;
    GROUPING(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Soql_queryContext extends ParserRuleContext {
    select_clause(): Select_clauseContext;
    from_clause(): From_clauseContext;
    EOF(): TerminalNode;
    using_clause(): Using_clauseContext | undefined;
    where_clause(): Where_clauseContext | undefined;
    with_clause(): With_clauseContext | undefined;
    groupby_clause(): Groupby_clauseContext | undefined;
    orderby_clause(): Orderby_clauseContext | undefined;
    limit_clause(): Limit_clauseContext | undefined;
    offset_clause(): Offset_clauseContext | undefined;
    for_clause(): For_clauseContext | undefined;
    update_clause(): Update_clauseContext | undefined;
    having_clause(): Having_clauseContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Select_clauseContext extends ParserRuleContext {
    SELECT(): TerminalNode;
    select_spec(): Select_specContext[];
    select_spec(i: number): Select_specContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class From_clauseContext extends ParserRuleContext {
    FROM(): TerminalNode;
    object_spec(): Object_specContext[];
    object_spec(i: number): Object_specContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Using_clauseContext extends ParserRuleContext {
    USING(): TerminalNode;
    SCOPE(): TerminalNode;
    filter_scope_name(): Filter_scope_nameContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Where_clauseContext extends ParserRuleContext {
    WHERE(): TerminalNode;
    condition(): ConditionContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Groupby_clauseContext extends ParserRuleContext {
    GROUP(): TerminalNode;
    BY(): TerminalNode;
    group_by_rollup_clause(): Group_by_rollup_clauseContext | undefined;
    group_by_cube_clause(): Group_by_cube_clauseContext | undefined;
    group_by_plain_clause(): Group_by_plain_clauseContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Having_clauseContext extends ParserRuleContext {
    HAVING(): TerminalNode;
    condition(): ConditionContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Orderby_clauseContext extends ParserRuleContext {
    ORDER(): TerminalNode;
    BY(): TerminalNode;
    order_by_list(): Order_by_listContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Limit_clauseContext extends ParserRuleContext {
    LIMIT(): TerminalNode;
    UNSIGNED_INTEGER(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Offset_clauseContext extends ParserRuleContext {
    OFFSET(): TerminalNode;
    UNSIGNED_INTEGER(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class For_clauseContext extends ParserRuleContext {
    FOR(): TerminalNode;
    for_value(): For_valueContext[];
    for_value(i: number): For_valueContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Update_clauseContext extends ParserRuleContext {
    UPDATE(): TerminalNode;
    update_value(): Update_valueContext[];
    update_value(i: number): Update_valueContext;
    COMMA(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Soql_subqueryContext extends ParserRuleContext {
    LPAREN(): TerminalNode;
    subquery_select_clause(): Subquery_select_clauseContext;
    from_clause(): From_clauseContext;
    RPAREN(): TerminalNode;
    using_clause(): Using_clauseContext | undefined;
    where_clause(): Where_clauseContext | undefined;
    with_clause(): With_clauseContext | undefined;
    orderby_clause(): Orderby_clauseContext | undefined;
    limit_clause(): Limit_clauseContext | undefined;
    offset_clause(): Offset_clauseContext | undefined;
    for_clause(): For_clauseContext | undefined;
    update_clause(): Update_clauseContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Subquery_select_clauseContext extends ParserRuleContext {
    SELECT(): TerminalNode;
    subquery_select_spec(): Subquery_select_specContext[];
    subquery_select_spec(i: number): Subquery_select_specContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Select_specContext extends ParserRuleContext {
    field_spec(): Field_specContext | undefined;
    function_call_spec(): Function_call_specContext | undefined;
    soql_subquery(): Soql_subqueryContext | undefined;
    typeof_spec(): Typeof_specContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Subquery_select_specContext extends ParserRuleContext {
    field_spec(): Field_specContext | undefined;
    function_call_spec(): Function_call_specContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Field_specContext extends ParserRuleContext {
    field(): FieldContext;
    alias(): AliasContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Function_call_specContext extends ParserRuleContext {
    function_call(): Function_callContext;
    alias(): AliasContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class FieldContext extends ParserRuleContext {
    field_name(): Field_nameContext;
    object_prefix(): Object_prefixContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Function_callContext extends ParserRuleContext {
    function_name(): Function_nameContext;
    LPAREN(): TerminalNode;
    RPAREN(): TerminalNode;
    function_parameter_list(): Function_parameter_listContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Function_parameter_listContext extends ParserRuleContext {
    function_parameter(): Function_parameterContext[];
    function_parameter(i: number): Function_parameterContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Function_parameterContext extends ParserRuleContext {
    field(): FieldContext | undefined;
    literal(): LiteralContext | undefined;
    function_call(): Function_callContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Typeof_specContext extends ParserRuleContext {
    TYPEOF(): TerminalNode;
    field(): FieldContext;
    typeof_when_then_clause_list(): Typeof_when_then_clause_listContext;
    END(): TerminalNode;
    typeof_else_clause(): Typeof_else_clauseContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Typeof_when_then_clause_listContext extends ParserRuleContext {
    typeof_when_then_clause(): Typeof_when_then_clauseContext[];
    typeof_when_then_clause(i: number): Typeof_when_then_clauseContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Typeof_when_then_clauseContext extends ParserRuleContext {
    WHEN(): TerminalNode;
    object_name(): Object_nameContext;
    typeof_then_clause(): Typeof_then_clauseContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Typeof_then_clauseContext extends ParserRuleContext {
    THEN(): TerminalNode;
    field_list(): Field_listContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Typeof_else_clauseContext extends ParserRuleContext {
    ELSE(): TerminalNode;
    field_list(): Field_listContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Field_listContext extends ParserRuleContext {
    field(): FieldContext[];
    field(i: number): FieldContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Object_specContext extends ParserRuleContext {
    object_name(): Object_nameContext;
    object_prefix(): Object_prefixContext | undefined;
    alias(): AliasContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Object_prefixContext extends ParserRuleContext {
    object_name(): Object_nameContext[];
    object_name(i: number): Object_nameContext;
    DOT(): TerminalNode[];
    DOT(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Comparison_operatorContext extends ParserRuleContext {
    EQ(): TerminalNode | undefined;
    NOT_EQ(): TerminalNode | undefined;
    LET(): TerminalNode | undefined;
    GET(): TerminalNode | undefined;
    GTH(): TerminalNode | undefined;
    LTH(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Set_operatorContext extends ParserRuleContext {
    IN(): TerminalNode | undefined;
    NOT(): TerminalNode | undefined;
    INCLUDES(): TerminalNode | undefined;
    EXCLUDES(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class ConditionContext extends ParserRuleContext {
    condition1(): Condition1Context[];
    condition1(i: number): Condition1Context;
    OR(): TerminalNode[];
    OR(i: number): TerminalNode;
    AND(): TerminalNode[];
    AND(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Condition1Context extends ParserRuleContext {
    simple_condition(): Simple_conditionContext | undefined;
    parenthesis(): ParenthesisContext | undefined;
    NOT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class ParenthesisContext extends ParserRuleContext {
    LPAREN(): TerminalNode;
    condition(): ConditionContext;
    RPAREN(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Simple_conditionContext extends ParserRuleContext {
    field_based_condition(): Field_based_conditionContext | undefined;
    set_based_condition(): Set_based_conditionContext | undefined;
    like_based_condition(): Like_based_conditionContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Field_based_conditionContext extends ParserRuleContext {
    condition_field(): Condition_fieldContext;
    comparison_operator(): Comparison_operatorContext;
    literal(): LiteralContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Set_based_conditionContext extends ParserRuleContext {
    condition_field(): Condition_fieldContext;
    set_operator(): Set_operatorContext;
    soql_subquery(): Soql_subqueryContext | undefined;
    set_values(): Set_valuesContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Like_based_conditionContext extends ParserRuleContext {
    condition_field(): Condition_fieldContext;
    LIKE(): TerminalNode;
    STRING_VALUE(): TerminalNode | undefined;
    LIKE_STRING_VALUE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Condition_fieldContext extends ParserRuleContext {
    field(): FieldContext | undefined;
    function_call(): Function_callContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Set_valuesContext extends ParserRuleContext {
    LPAREN(): TerminalNode;
    set_value_list(): Set_value_listContext;
    RPAREN(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Set_value_listContext extends ParserRuleContext {
    literal(): LiteralContext[];
    literal(i: number): LiteralContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class With_clauseContext extends ParserRuleContext {
    WITH(): TerminalNode;
    with_plain_clause(): With_plain_clauseContext | undefined;
    with_data_category_clause(): With_data_category_clauseContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class With_plain_clauseContext extends ParserRuleContext {
    field_based_condition(): Field_based_conditionContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class With_data_category_clauseContext extends ParserRuleContext {
    DATA(): TerminalNode;
    CATEGORY(): TerminalNode;
    data_category_spec_list(): Data_category_spec_listContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Data_category_spec_listContext extends ParserRuleContext {
    data_category_spec(): Data_category_specContext[];
    data_category_spec(i: number): Data_category_specContext;
    AND(): TerminalNode[];
    AND(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Data_category_specContext extends ParserRuleContext {
    data_category_group_name(): Data_category_group_nameContext;
    data_category_selector(): Data_category_selectorContext;
    data_category_parameter_list(): Data_category_parameter_listContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Data_category_parameter_listContext extends ParserRuleContext {
    data_category_name(): Data_category_nameContext[];
    data_category_name(i: number): Data_category_nameContext;
    LPAREN(): TerminalNode | undefined;
    RPAREN(): TerminalNode | undefined;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Data_category_selectorContext extends ParserRuleContext {
    AT(): TerminalNode | undefined;
    ABOVE(): TerminalNode | undefined;
    ABOVE_OR_BELOW(): TerminalNode | undefined;
    BELOW(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Group_by_plain_clauseContext extends ParserRuleContext {
    group_by_list(): Group_by_listContext;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Group_by_rollup_clauseContext extends ParserRuleContext {
    ROLLUP(): TerminalNode;
    LPAREN(): TerminalNode;
    group_by_list(): Group_by_listContext;
    RPAREN(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Group_by_cube_clauseContext extends ParserRuleContext {
    CUBE(): TerminalNode;
    LPAREN(): TerminalNode;
    group_by_list(): Group_by_listContext;
    RPAREN(): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Group_by_listContext extends ParserRuleContext {
    group_by_spec(): Group_by_specContext[];
    group_by_spec(i: number): Group_by_specContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Group_by_specContext extends ParserRuleContext {
    field(): FieldContext | undefined;
    function_call(): Function_callContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Order_by_listContext extends ParserRuleContext {
    order_by_spec(): Order_by_specContext[];
    order_by_spec(i: number): Order_by_specContext;
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Order_by_specContext extends ParserRuleContext {
    order_by_field(): Order_by_fieldContext;
    order_by_direction_clause(): Order_by_direction_clauseContext | undefined;
    order_by_nulls_clause(): Order_by_nulls_clauseContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Order_by_direction_clauseContext extends ParserRuleContext {
    ASC(): TerminalNode | undefined;
    DESC(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Order_by_nulls_clauseContext extends ParserRuleContext {
    NULLS(): TerminalNode;
    FIRST(): TerminalNode | undefined;
    LAST(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Order_by_fieldContext extends ParserRuleContext {
    field(): FieldContext | undefined;
    function_call(): Function_callContext | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class For_valueContext extends ParserRuleContext {
    REFERENCE(): TerminalNode | undefined;
    VIEW(): TerminalNode | undefined;
    UPDATE(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class Update_valueContext extends ParserRuleContext {
    TRACKING(): TerminalNode | undefined;
    VIEWSTAT(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext, invokingState: number);
    readonly ruleIndex: number;
    enterRule(listener: SOQLListener): void;
    exitRule(listener: SOQLListener): void;
    accept<Result>(visitor: SOQLVisitor<Result>): Result;
}
export declare class SOQLParser extends Parser {
    static readonly WHITE_SPACE: number;
    static readonly STRING_VALUE: number;
    static readonly LIKE_STRING_VALUE: number;
    static readonly AND: number;
    static readonly AS: number;
    static readonly ASC: number;
    static readonly BY: number;
    static readonly CUBE: number;
    static readonly DESC: number;
    static readonly ELSE: number;
    static readonly EXCLUDES: number;
    static readonly FALSE: number;
    static readonly FIRST: number;
    static readonly FROM: number;
    static readonly GROUP: number;
    static readonly HAVING: number;
    static readonly IN: number;
    static readonly INCLUDES: number;
    static readonly LAST: number;
    static readonly LIKE: number;
    static readonly LIMIT: number;
    static readonly NOT: number;
    static readonly NULL: number;
    static readonly NULLS: number;
    static readonly OR: number;
    static readonly ROLLUP: number;
    static readonly SELECT: number;
    static readonly TRUE: number;
    static readonly USING: number;
    static readonly WHERE: number;
    static readonly WITH: number;
    static readonly FOR: number;
    static readonly UPDATE: number;
    static readonly ABOVE: number;
    static readonly ABOVE_OR_BELOW: number;
    static readonly AT: number;
    static readonly BELOW: number;
    static readonly CATEGORY: number;
    static readonly DATA: number;
    static readonly END: number;
    static readonly OFFSET: number;
    static readonly ORDER: number;
    static readonly REFERENCE: number;
    static readonly SCOPE: number;
    static readonly TRACKING: number;
    static readonly THEN: number;
    static readonly TYPEOF: number;
    static readonly VIEW: number;
    static readonly VIEWSTAT: number;
    static readonly WHEN: number;
    static readonly CALENDAR_MONTH: number;
    static readonly CALENDAR_QUARTER: number;
    static readonly CALENDAR_YEAR: number;
    static readonly DAY_IN_MONTH: number;
    static readonly DAY_IN_WEEK: number;
    static readonly DAY_IN_YEAR: number;
    static readonly DAY_ONLY: number;
    static readonly FISCAL_MONTH: number;
    static readonly FISCAL_QUARTER: number;
    static readonly FISCAL_YEAR: number;
    static readonly HOUR_IN_DAY: number;
    static readonly WEEK_IN_MONTH: number;
    static readonly WEEK_IN_YEAR: number;
    static readonly AVG: number;
    static readonly COUNT: number;
    static readonly COUNT_DISTINCT: number;
    static readonly MIN: number;
    static readonly MAX: number;
    static readonly SUM: number;
    static readonly DISTANCE: number;
    static readonly GEOLOCATION: number;
    static readonly FORMAT: number;
    static readonly TOLABEL: number;
    static readonly CONVERT_TIME_ZONE: number;
    static readonly CONVERT_CURRENCY: number;
    static readonly GROUPING: number;
    static readonly YESTERDAY: number;
    static readonly TODAY: number;
    static readonly TOMORROW: number;
    static readonly LAST_WEEK: number;
    static readonly THIS_WEEK: number;
    static readonly NEXT_WEEK: number;
    static readonly LAST_MONTH: number;
    static readonly THIS_MONTH: number;
    static readonly NEXT_MONTH: number;
    static readonly LAST_90_DAYS: number;
    static readonly NEXT_90_DAYS: number;
    static readonly THIS_QUARTER: number;
    static readonly LAST_QUARTER: number;
    static readonly NEXT_QUARTER: number;
    static readonly THIS_YEAR: number;
    static readonly LAST_YEAR: number;
    static readonly NEXT_YEAR: number;
    static readonly THIS_FISCAL_QUARTER: number;
    static readonly LAST_FISCAL_QUARTER: number;
    static readonly NEXT_FISCAL_QUARTER: number;
    static readonly THIS_FISCAL_YEAR: number;
    static readonly LAST_FISCAL_YEAR: number;
    static readonly NEXT_FISCAL_YEAR: number;
    static readonly NEXT_N_DAYS: number;
    static readonly LAST_N_DAYS: number;
    static readonly N_DAYS_AGO: number;
    static readonly NEXT_N_WEEKS: number;
    static readonly LAST_N_WEEKS: number;
    static readonly N_WEEKS_AGO: number;
    static readonly NEXT_N_MONTHS: number;
    static readonly LAST_N_MONTHS: number;
    static readonly N_MONTHS_AGO: number;
    static readonly NEXT_N_QUARTERS: number;
    static readonly LAST_N_QUARTERS: number;
    static readonly N_QUARTERS_AGO: number;
    static readonly NEXT_N_YEARS: number;
    static readonly LAST_N_YEARS: number;
    static readonly N_YEARS_AGO: number;
    static readonly NEXT_N_FISCAL_QUARTERS: number;
    static readonly LAST_N_FISCAL_QUARTERS: number;
    static readonly N_FISCAL_QUARTERS_AGO: number;
    static readonly NEXT_N_FISCAL_YEARS: number;
    static readonly LAST_N_FISCAL_YEARS: number;
    static readonly N_FISCAL_YEARS_AGO: number;
    static readonly EQ: number;
    static readonly NOT_EQ: number;
    static readonly LET: number;
    static readonly GET: number;
    static readonly GTH: number;
    static readonly LTH: number;
    static readonly DOT: number;
    static readonly COLON: number;
    static readonly SEMICOLON: number;
    static readonly COMMA: number;
    static readonly ASTERISK: number;
    static readonly RPAREN: number;
    static readonly LPAREN: number;
    static readonly PLUS: number;
    static readonly MINUS: number;
    static readonly ID: number;
    static readonly DATE: number;
    static readonly DATETIME: number;
    static readonly UNSIGNED_INTEGER: number;
    static readonly REAL_NUMBER: number;
    static readonly SIGNED_INTEGER: number;
    static readonly RULE_keywords_alias_allowed: number;
    static readonly RULE_keywords_name_allowed: number;
    static readonly RULE_name: number;
    static readonly RULE_object_name: number;
    static readonly RULE_field_name: number;
    static readonly RULE_filter_scope_name: number;
    static readonly RULE_data_category_group_name: number;
    static readonly RULE_data_category_name: number;
    static readonly RULE_alias_name: number;
    static readonly RULE_alias: number;
    static readonly RULE_literal: number;
    static readonly RULE_date_formula_literal: number;
    static readonly RULE_date_formula_n_literal_name: number;
    static readonly RULE_date_formula_n_literal: number;
    static readonly RULE_datetime_literal: number;
    static readonly RULE_date_literal: number;
    static readonly RULE_integer_literal: number;
    static readonly RULE_real_literal: number;
    static readonly RULE_string_literal: number;
    static readonly RULE_boolean_literal: number;
    static readonly RULE_null_literal: number;
    static readonly RULE_function_name: number;
    static readonly RULE_function_date: number;
    static readonly RULE_function_aggregate: number;
    static readonly RULE_function_location: number;
    static readonly RULE_function_other: number;
    static readonly RULE_soql_query: number;
    static readonly RULE_select_clause: number;
    static readonly RULE_from_clause: number;
    static readonly RULE_using_clause: number;
    static readonly RULE_where_clause: number;
    static readonly RULE_groupby_clause: number;
    static readonly RULE_having_clause: number;
    static readonly RULE_orderby_clause: number;
    static readonly RULE_limit_clause: number;
    static readonly RULE_offset_clause: number;
    static readonly RULE_for_clause: number;
    static readonly RULE_update_clause: number;
    static readonly RULE_soql_subquery: number;
    static readonly RULE_subquery_select_clause: number;
    static readonly RULE_select_spec: number;
    static readonly RULE_subquery_select_spec: number;
    static readonly RULE_field_spec: number;
    static readonly RULE_function_call_spec: number;
    static readonly RULE_field: number;
    static readonly RULE_function_call: number;
    static readonly RULE_function_parameter_list: number;
    static readonly RULE_function_parameter: number;
    static readonly RULE_typeof_spec: number;
    static readonly RULE_typeof_when_then_clause_list: number;
    static readonly RULE_typeof_when_then_clause: number;
    static readonly RULE_typeof_then_clause: number;
    static readonly RULE_typeof_else_clause: number;
    static readonly RULE_field_list: number;
    static readonly RULE_object_spec: number;
    static readonly RULE_object_prefix: number;
    static readonly RULE_comparison_operator: number;
    static readonly RULE_set_operator: number;
    static readonly RULE_condition: number;
    static readonly RULE_condition1: number;
    static readonly RULE_parenthesis: number;
    static readonly RULE_simple_condition: number;
    static readonly RULE_field_based_condition: number;
    static readonly RULE_set_based_condition: number;
    static readonly RULE_like_based_condition: number;
    static readonly RULE_condition_field: number;
    static readonly RULE_set_values: number;
    static readonly RULE_set_value_list: number;
    static readonly RULE_with_clause: number;
    static readonly RULE_with_plain_clause: number;
    static readonly RULE_with_data_category_clause: number;
    static readonly RULE_data_category_spec_list: number;
    static readonly RULE_data_category_spec: number;
    static readonly RULE_data_category_parameter_list: number;
    static readonly RULE_data_category_selector: number;
    static readonly RULE_group_by_plain_clause: number;
    static readonly RULE_group_by_rollup_clause: number;
    static readonly RULE_group_by_cube_clause: number;
    static readonly RULE_group_by_list: number;
    static readonly RULE_group_by_spec: number;
    static readonly RULE_order_by_list: number;
    static readonly RULE_order_by_spec: number;
    static readonly RULE_order_by_direction_clause: number;
    static readonly RULE_order_by_nulls_clause: number;
    static readonly RULE_order_by_field: number;
    static readonly RULE_for_value: number;
    static readonly RULE_update_value: number;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    constructor(input: TokenStream);
    keywords_alias_allowed(): Keywords_alias_allowedContext;
    keywords_name_allowed(): Keywords_name_allowedContext;
    name(): NameContext;
    object_name(): Object_nameContext;
    field_name(): Field_nameContext;
    filter_scope_name(): Filter_scope_nameContext;
    data_category_group_name(): Data_category_group_nameContext;
    data_category_name(): Data_category_nameContext;
    alias_name(): Alias_nameContext;
    alias(): AliasContext;
    literal(): LiteralContext;
    date_formula_literal(): Date_formula_literalContext;
    date_formula_n_literal_name(): Date_formula_n_literal_nameContext;
    date_formula_n_literal(): Date_formula_n_literalContext;
    datetime_literal(): Datetime_literalContext;
    date_literal(): Date_literalContext;
    integer_literal(): Integer_literalContext;
    real_literal(): Real_literalContext;
    string_literal(): String_literalContext;
    boolean_literal(): Boolean_literalContext;
    null_literal(): Null_literalContext;
    function_name(): Function_nameContext;
    function_date(): Function_dateContext;
    function_aggregate(): Function_aggregateContext;
    function_location(): Function_locationContext;
    function_other(): Function_otherContext;
    soql_query(): Soql_queryContext;
    select_clause(): Select_clauseContext;
    from_clause(): From_clauseContext;
    using_clause(): Using_clauseContext;
    where_clause(): Where_clauseContext;
    groupby_clause(): Groupby_clauseContext;
    having_clause(): Having_clauseContext;
    orderby_clause(): Orderby_clauseContext;
    limit_clause(): Limit_clauseContext;
    offset_clause(): Offset_clauseContext;
    for_clause(): For_clauseContext;
    update_clause(): Update_clauseContext;
    soql_subquery(): Soql_subqueryContext;
    subquery_select_clause(): Subquery_select_clauseContext;
    select_spec(): Select_specContext;
    subquery_select_spec(): Subquery_select_specContext;
    field_spec(): Field_specContext;
    function_call_spec(): Function_call_specContext;
    field(): FieldContext;
    function_call(): Function_callContext;
    function_parameter_list(): Function_parameter_listContext;
    function_parameter(): Function_parameterContext;
    typeof_spec(): Typeof_specContext;
    typeof_when_then_clause_list(): Typeof_when_then_clause_listContext;
    typeof_when_then_clause(): Typeof_when_then_clauseContext;
    typeof_then_clause(): Typeof_then_clauseContext;
    typeof_else_clause(): Typeof_else_clauseContext;
    field_list(): Field_listContext;
    object_spec(): Object_specContext;
    object_prefix(): Object_prefixContext;
    comparison_operator(): Comparison_operatorContext;
    set_operator(): Set_operatorContext;
    condition(): ConditionContext;
    condition1(): Condition1Context;
    parenthesis(): ParenthesisContext;
    simple_condition(): Simple_conditionContext;
    field_based_condition(): Field_based_conditionContext;
    set_based_condition(): Set_based_conditionContext;
    like_based_condition(): Like_based_conditionContext;
    condition_field(): Condition_fieldContext;
    set_values(): Set_valuesContext;
    set_value_list(): Set_value_listContext;
    with_clause(): With_clauseContext;
    with_plain_clause(): With_plain_clauseContext;
    with_data_category_clause(): With_data_category_clauseContext;
    data_category_spec_list(): Data_category_spec_listContext;
    data_category_spec(): Data_category_specContext;
    data_category_parameter_list(): Data_category_parameter_listContext;
    data_category_selector(): Data_category_selectorContext;
    group_by_plain_clause(): Group_by_plain_clauseContext;
    group_by_rollup_clause(): Group_by_rollup_clauseContext;
    group_by_cube_clause(): Group_by_cube_clauseContext;
    group_by_list(): Group_by_listContext;
    group_by_spec(): Group_by_specContext;
    order_by_list(): Order_by_listContext;
    order_by_spec(): Order_by_specContext;
    order_by_direction_clause(): Order_by_direction_clauseContext;
    order_by_nulls_clause(): Order_by_nulls_clauseContext;
    order_by_field(): Order_by_fieldContext;
    for_value(): For_valueContext;
    update_value(): Update_valueContext;
    private static readonly _serializedATNSegments;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
