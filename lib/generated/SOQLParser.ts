// Generated from SOQL.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { SOQLListener } from './SOQLListener';
import { SOQLVisitor } from './SOQLVisitor';


export class Keywords_alias_allowedContext extends ParserRuleContext {
	public ABOVE(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.ABOVE, 0); }
	public ABOVE_OR_BELOW(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.ABOVE_OR_BELOW, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.AT, 0); }
	public BELOW(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.BELOW, 0); }
	public CATEGORY(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.CATEGORY, 0); }
	public DATA(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.DATA, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.END, 0); }
	public OFFSET(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.OFFSET, 0); }
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.ORDER, 0); }
	public REFERENCE(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.REFERENCE, 0); }
	public SCOPE(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.SCOPE, 0); }
	public TRACKING(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.TRACKING, 0); }
	public THEN(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.THEN, 0); }
	public TYPEOF(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.TYPEOF, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.VIEW, 0); }
	public VIEWSTAT(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.VIEWSTAT, 0); }
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.WHEN, 0); }
	public SECURITY_ENFORCED(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.SECURITY_ENFORCED, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_keywords_alias_allowed; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterKeywords_alias_allowed) listener.enterKeywords_alias_allowed(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitKeywords_alias_allowed) listener.exitKeywords_alias_allowed(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitKeywords_alias_allowed) return visitor.visitKeywords_alias_allowed(this);
		else return visitor.visitChildren(this);
	}
}


export class Keywords_name_allowedContext extends ParserRuleContext {
	public keywords_alias_allowed(): Keywords_alias_allowedContext | undefined {
		return this.tryGetRuleContext(0, Keywords_alias_allowedContext);
	}
	public GROUP(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.GROUP, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_keywords_name_allowed; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterKeywords_name_allowed) listener.enterKeywords_name_allowed(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitKeywords_name_allowed) listener.exitKeywords_name_allowed(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitKeywords_name_allowed) return visitor.visitKeywords_name_allowed(this);
		else return visitor.visitChildren(this);
	}
}


export class NameContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.ID, 0); }
	public keywords_name_allowed(): Keywords_name_allowedContext | undefined {
		return this.tryGetRuleContext(0, Keywords_name_allowedContext);
	}
	public date_formula_literal(): Date_formula_literalContext | undefined {
		return this.tryGetRuleContext(0, Date_formula_literalContext);
	}
	public date_formula_n_literal_name(): Date_formula_n_literal_nameContext | undefined {
		return this.tryGetRuleContext(0, Date_formula_n_literal_nameContext);
	}
	public function_name(): Function_nameContext | undefined {
		return this.tryGetRuleContext(0, Function_nameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_name; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterName) listener.enterName(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitName) listener.exitName(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitName) return visitor.visitName(this);
		else return visitor.visitChildren(this);
	}
}


export class Object_nameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_object_name; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterObject_name) listener.enterObject_name(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitObject_name) listener.exitObject_name(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitObject_name) return visitor.visitObject_name(this);
		else return visitor.visitChildren(this);
	}
}


export class Field_nameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_field_name; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterField_name) listener.enterField_name(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitField_name) listener.exitField_name(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitField_name) return visitor.visitField_name(this);
		else return visitor.visitChildren(this);
	}
}


export class Filter_scope_nameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_filter_scope_name; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterFilter_scope_name) listener.enterFilter_scope_name(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitFilter_scope_name) listener.exitFilter_scope_name(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitFilter_scope_name) return visitor.visitFilter_scope_name(this);
		else return visitor.visitChildren(this);
	}
}


export class Data_category_group_nameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_data_category_group_name; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterData_category_group_name) listener.enterData_category_group_name(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitData_category_group_name) listener.exitData_category_group_name(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitData_category_group_name) return visitor.visitData_category_group_name(this);
		else return visitor.visitChildren(this);
	}
}


export class Data_category_nameContext extends ParserRuleContext {
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_data_category_name; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterData_category_name) listener.enterData_category_name(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitData_category_name) listener.exitData_category_name(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitData_category_name) return visitor.visitData_category_name(this);
		else return visitor.visitChildren(this);
	}
}


export class Alias_nameContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.ID, 0); }
	public keywords_alias_allowed(): Keywords_alias_allowedContext | undefined {
		return this.tryGetRuleContext(0, Keywords_alias_allowedContext);
	}
	public date_formula_literal(): Date_formula_literalContext | undefined {
		return this.tryGetRuleContext(0, Date_formula_literalContext);
	}
	public date_formula_n_literal_name(): Date_formula_n_literal_nameContext | undefined {
		return this.tryGetRuleContext(0, Date_formula_n_literal_nameContext);
	}
	public function_name(): Function_nameContext | undefined {
		return this.tryGetRuleContext(0, Function_nameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_alias_name; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterAlias_name) listener.enterAlias_name(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitAlias_name) listener.exitAlias_name(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitAlias_name) return visitor.visitAlias_name(this);
		else return visitor.visitChildren(this);
	}
}


export class AliasContext extends ParserRuleContext {
	public alias_name(): Alias_nameContext {
		return this.getRuleContext(0, Alias_nameContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.AS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_alias; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterAlias) listener.enterAlias(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitAlias) listener.exitAlias(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitAlias) return visitor.visitAlias(this);
		else return visitor.visitChildren(this);
	}
}


export class LiteralContext extends ParserRuleContext {
	public date_formula_literal(): Date_formula_literalContext | undefined {
		return this.tryGetRuleContext(0, Date_formula_literalContext);
	}
	public date_formula_n_literal(): Date_formula_n_literalContext | undefined {
		return this.tryGetRuleContext(0, Date_formula_n_literalContext);
	}
	public datetime_literal(): Datetime_literalContext | undefined {
		return this.tryGetRuleContext(0, Datetime_literalContext);
	}
	public date_literal(): Date_literalContext | undefined {
		return this.tryGetRuleContext(0, Date_literalContext);
	}
	public integer_literal(): Integer_literalContext | undefined {
		return this.tryGetRuleContext(0, Integer_literalContext);
	}
	public real_literal(): Real_literalContext | undefined {
		return this.tryGetRuleContext(0, Real_literalContext);
	}
	public string_literal(): String_literalContext | undefined {
		return this.tryGetRuleContext(0, String_literalContext);
	}
	public boolean_literal(): Boolean_literalContext | undefined {
		return this.tryGetRuleContext(0, Boolean_literalContext);
	}
	public null_literal(): Null_literalContext | undefined {
		return this.tryGetRuleContext(0, Null_literalContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_literal; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterLiteral) listener.enterLiteral(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitLiteral) listener.exitLiteral(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitLiteral) return visitor.visitLiteral(this);
		else return visitor.visitChildren(this);
	}
}


export class Date_formula_literalContext extends ParserRuleContext {
	public YESTERDAY(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.YESTERDAY, 0); }
	public TODAY(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.TODAY, 0); }
	public TOMORROW(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.TOMORROW, 0); }
	public LAST_WEEK(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LAST_WEEK, 0); }
	public THIS_WEEK(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.THIS_WEEK, 0); }
	public NEXT_WEEK(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.NEXT_WEEK, 0); }
	public LAST_MONTH(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LAST_MONTH, 0); }
	public THIS_MONTH(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.THIS_MONTH, 0); }
	public NEXT_MONTH(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.NEXT_MONTH, 0); }
	public LAST_90_DAYS(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LAST_90_DAYS, 0); }
	public NEXT_90_DAYS(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.NEXT_90_DAYS, 0); }
	public THIS_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.THIS_QUARTER, 0); }
	public LAST_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LAST_QUARTER, 0); }
	public NEXT_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.NEXT_QUARTER, 0); }
	public THIS_YEAR(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.THIS_YEAR, 0); }
	public LAST_YEAR(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LAST_YEAR, 0); }
	public NEXT_YEAR(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.NEXT_YEAR, 0); }
	public THIS_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.THIS_FISCAL_QUARTER, 0); }
	public LAST_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LAST_FISCAL_QUARTER, 0); }
	public NEXT_FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.NEXT_FISCAL_QUARTER, 0); }
	public THIS_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.THIS_FISCAL_YEAR, 0); }
	public LAST_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LAST_FISCAL_YEAR, 0); }
	public NEXT_FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.NEXT_FISCAL_YEAR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_date_formula_literal; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterDate_formula_literal) listener.enterDate_formula_literal(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitDate_formula_literal) listener.exitDate_formula_literal(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitDate_formula_literal) return visitor.visitDate_formula_literal(this);
		else return visitor.visitChildren(this);
	}
}


export class Date_formula_n_literal_nameContext extends ParserRuleContext {
	public NEXT_N_DAYS(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.NEXT_N_DAYS, 0); }
	public LAST_N_DAYS(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LAST_N_DAYS, 0); }
	public N_DAYS_AGO(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.N_DAYS_AGO, 0); }
	public NEXT_N_WEEKS(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.NEXT_N_WEEKS, 0); }
	public LAST_N_WEEKS(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LAST_N_WEEKS, 0); }
	public N_WEEKS_AGO(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.N_WEEKS_AGO, 0); }
	public NEXT_N_MONTHS(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.NEXT_N_MONTHS, 0); }
	public LAST_N_MONTHS(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LAST_N_MONTHS, 0); }
	public N_MONTHS_AGO(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.N_MONTHS_AGO, 0); }
	public NEXT_N_QUARTERS(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.NEXT_N_QUARTERS, 0); }
	public LAST_N_QUARTERS(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LAST_N_QUARTERS, 0); }
	public N_QUARTERS_AGO(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.N_QUARTERS_AGO, 0); }
	public NEXT_N_YEARS(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.NEXT_N_YEARS, 0); }
	public LAST_N_YEARS(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LAST_N_YEARS, 0); }
	public N_YEARS_AGO(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.N_YEARS_AGO, 0); }
	public NEXT_N_FISCAL_QUARTERS(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.NEXT_N_FISCAL_QUARTERS, 0); }
	public LAST_N_FISCAL_QUARTERS(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LAST_N_FISCAL_QUARTERS, 0); }
	public N_FISCAL_QUARTERS_AGO(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.N_FISCAL_QUARTERS_AGO, 0); }
	public NEXT_N_FISCAL_YEARS(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.NEXT_N_FISCAL_YEARS, 0); }
	public LAST_N_FISCAL_YEARS(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LAST_N_FISCAL_YEARS, 0); }
	public N_FISCAL_YEARS_AGO(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.N_FISCAL_YEARS_AGO, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_date_formula_n_literal_name; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterDate_formula_n_literal_name) listener.enterDate_formula_n_literal_name(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitDate_formula_n_literal_name) listener.exitDate_formula_n_literal_name(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitDate_formula_n_literal_name) return visitor.visitDate_formula_n_literal_name(this);
		else return visitor.visitChildren(this);
	}
}


export class Date_formula_n_literalContext extends ParserRuleContext {
	public date_formula_n_literal_name(): Date_formula_n_literal_nameContext {
		return this.getRuleContext(0, Date_formula_n_literal_nameContext);
	}
	public COLON(): TerminalNode { return this.getToken(SOQLParser.COLON, 0); }
	public UNSIGNED_INTEGER(): TerminalNode { return this.getToken(SOQLParser.UNSIGNED_INTEGER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_date_formula_n_literal; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterDate_formula_n_literal) listener.enterDate_formula_n_literal(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitDate_formula_n_literal) listener.exitDate_formula_n_literal(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitDate_formula_n_literal) return visitor.visitDate_formula_n_literal(this);
		else return visitor.visitChildren(this);
	}
}


export class Datetime_literalContext extends ParserRuleContext {
	public DATETIME(): TerminalNode { return this.getToken(SOQLParser.DATETIME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_datetime_literal; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterDatetime_literal) listener.enterDatetime_literal(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitDatetime_literal) listener.exitDatetime_literal(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitDatetime_literal) return visitor.visitDatetime_literal(this);
		else return visitor.visitChildren(this);
	}
}


export class Date_literalContext extends ParserRuleContext {
	public DATE(): TerminalNode { return this.getToken(SOQLParser.DATE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_date_literal; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterDate_literal) listener.enterDate_literal(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitDate_literal) listener.exitDate_literal(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitDate_literal) return visitor.visitDate_literal(this);
		else return visitor.visitChildren(this);
	}
}


export class Integer_literalContext extends ParserRuleContext {
	public SIGNED_INTEGER(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.SIGNED_INTEGER, 0); }
	public UNSIGNED_INTEGER(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.UNSIGNED_INTEGER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_integer_literal; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterInteger_literal) listener.enterInteger_literal(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitInteger_literal) listener.exitInteger_literal(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitInteger_literal) return visitor.visitInteger_literal(this);
		else return visitor.visitChildren(this);
	}
}


export class Real_literalContext extends ParserRuleContext {
	public REAL_NUMBER(): TerminalNode { return this.getToken(SOQLParser.REAL_NUMBER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_real_literal; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterReal_literal) listener.enterReal_literal(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitReal_literal) listener.exitReal_literal(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitReal_literal) return visitor.visitReal_literal(this);
		else return visitor.visitChildren(this);
	}
}


export class String_literalContext extends ParserRuleContext {
	public STRING_VALUE(): TerminalNode { return this.getToken(SOQLParser.STRING_VALUE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_string_literal; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterString_literal) listener.enterString_literal(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitString_literal) listener.exitString_literal(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitString_literal) return visitor.visitString_literal(this);
		else return visitor.visitChildren(this);
	}
}


export class Boolean_literalContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.FALSE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_boolean_literal; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterBoolean_literal) listener.enterBoolean_literal(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitBoolean_literal) listener.exitBoolean_literal(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitBoolean_literal) return visitor.visitBoolean_literal(this);
		else return visitor.visitChildren(this);
	}
}


export class Null_literalContext extends ParserRuleContext {
	public NULL(): TerminalNode { return this.getToken(SOQLParser.NULL, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_null_literal; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterNull_literal) listener.enterNull_literal(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitNull_literal) listener.exitNull_literal(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitNull_literal) return visitor.visitNull_literal(this);
		else return visitor.visitChildren(this);
	}
}


export class Function_nameContext extends ParserRuleContext {
	public function_date(): Function_dateContext | undefined {
		return this.tryGetRuleContext(0, Function_dateContext);
	}
	public function_aggregate(): Function_aggregateContext | undefined {
		return this.tryGetRuleContext(0, Function_aggregateContext);
	}
	public function_location(): Function_locationContext | undefined {
		return this.tryGetRuleContext(0, Function_locationContext);
	}
	public function_other(): Function_otherContext | undefined {
		return this.tryGetRuleContext(0, Function_otherContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_function_name; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterFunction_name) listener.enterFunction_name(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitFunction_name) listener.exitFunction_name(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitFunction_name) return visitor.visitFunction_name(this);
		else return visitor.visitChildren(this);
	}
}


export class Function_dateContext extends ParserRuleContext {
	public CALENDAR_MONTH(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.CALENDAR_MONTH, 0); }
	public CALENDAR_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.CALENDAR_QUARTER, 0); }
	public CALENDAR_YEAR(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.CALENDAR_YEAR, 0); }
	public DAY_IN_MONTH(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.DAY_IN_MONTH, 0); }
	public DAY_IN_WEEK(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.DAY_IN_WEEK, 0); }
	public DAY_IN_YEAR(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.DAY_IN_YEAR, 0); }
	public DAY_ONLY(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.DAY_ONLY, 0); }
	public FISCAL_MONTH(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.FISCAL_MONTH, 0); }
	public FISCAL_QUARTER(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.FISCAL_QUARTER, 0); }
	public FISCAL_YEAR(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.FISCAL_YEAR, 0); }
	public HOUR_IN_DAY(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.HOUR_IN_DAY, 0); }
	public WEEK_IN_MONTH(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.WEEK_IN_MONTH, 0); }
	public WEEK_IN_YEAR(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.WEEK_IN_YEAR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_function_date; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterFunction_date) listener.enterFunction_date(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitFunction_date) listener.exitFunction_date(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitFunction_date) return visitor.visitFunction_date(this);
		else return visitor.visitChildren(this);
	}
}


export class Function_aggregateContext extends ParserRuleContext {
	public AVG(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.AVG, 0); }
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.COUNT, 0); }
	public COUNT_DISTINCT(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.COUNT_DISTINCT, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.MAX, 0); }
	public SUM(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.SUM, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_function_aggregate; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterFunction_aggregate) listener.enterFunction_aggregate(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitFunction_aggregate) listener.exitFunction_aggregate(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitFunction_aggregate) return visitor.visitFunction_aggregate(this);
		else return visitor.visitChildren(this);
	}
}


export class Function_locationContext extends ParserRuleContext {
	public DISTANCE(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.DISTANCE, 0); }
	public GEOLOCATION(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.GEOLOCATION, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_function_location; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterFunction_location) listener.enterFunction_location(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitFunction_location) listener.exitFunction_location(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitFunction_location) return visitor.visitFunction_location(this);
		else return visitor.visitChildren(this);
	}
}


export class Function_otherContext extends ParserRuleContext {
	public FORMAT(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.FORMAT, 0); }
	public TOLABEL(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.TOLABEL, 0); }
	public CONVERT_TIME_ZONE(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.CONVERT_TIME_ZONE, 0); }
	public CONVERT_CURRENCY(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.CONVERT_CURRENCY, 0); }
	public GROUPING(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.GROUPING, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_function_other; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterFunction_other) listener.enterFunction_other(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitFunction_other) listener.exitFunction_other(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitFunction_other) return visitor.visitFunction_other(this);
		else return visitor.visitChildren(this);
	}
}


export class Soql_queryContext extends ParserRuleContext {
	public select_clause(): Select_clauseContext {
		return this.getRuleContext(0, Select_clauseContext);
	}
	public from_clause(): From_clauseContext {
		return this.getRuleContext(0, From_clauseContext);
	}
	public EOF(): TerminalNode { return this.getToken(SOQLParser.EOF, 0); }
	public using_clause(): Using_clauseContext | undefined {
		return this.tryGetRuleContext(0, Using_clauseContext);
	}
	public where_clause(): Where_clauseContext | undefined {
		return this.tryGetRuleContext(0, Where_clauseContext);
	}
	public with_clause(): With_clauseContext | undefined {
		return this.tryGetRuleContext(0, With_clauseContext);
	}
	public with_security_enforced_clause(): With_security_enforced_clauseContext | undefined {
		return this.tryGetRuleContext(0, With_security_enforced_clauseContext);
	}
	public groupby_clause(): Groupby_clauseContext | undefined {
		return this.tryGetRuleContext(0, Groupby_clauseContext);
	}
	public orderby_clause(): Orderby_clauseContext | undefined {
		return this.tryGetRuleContext(0, Orderby_clauseContext);
	}
	public limit_clause(): Limit_clauseContext | undefined {
		return this.tryGetRuleContext(0, Limit_clauseContext);
	}
	public offset_clause(): Offset_clauseContext | undefined {
		return this.tryGetRuleContext(0, Offset_clauseContext);
	}
	public for_clause(): For_clauseContext | undefined {
		return this.tryGetRuleContext(0, For_clauseContext);
	}
	public update_clause(): Update_clauseContext | undefined {
		return this.tryGetRuleContext(0, Update_clauseContext);
	}
	public having_clause(): Having_clauseContext | undefined {
		return this.tryGetRuleContext(0, Having_clauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_soql_query; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterSoql_query) listener.enterSoql_query(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitSoql_query) listener.exitSoql_query(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitSoql_query) return visitor.visitSoql_query(this);
		else return visitor.visitChildren(this);
	}
}


export class Select_clauseContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(SOQLParser.SELECT, 0); }
	public select_spec(): Select_specContext[];
	public select_spec(i: number): Select_specContext;
	public select_spec(i?: number): Select_specContext | Select_specContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Select_specContext);
		} else {
			return this.getRuleContext(i, Select_specContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SOQLParser.COMMA);
		} else {
			return this.getToken(SOQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_select_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterSelect_clause) listener.enterSelect_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitSelect_clause) listener.exitSelect_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitSelect_clause) return visitor.visitSelect_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class From_clauseContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(SOQLParser.FROM, 0); }
	public object_spec(): Object_specContext[];
	public object_spec(i: number): Object_specContext;
	public object_spec(i?: number): Object_specContext | Object_specContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Object_specContext);
		} else {
			return this.getRuleContext(i, Object_specContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SOQLParser.COMMA);
		} else {
			return this.getToken(SOQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_from_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterFrom_clause) listener.enterFrom_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitFrom_clause) listener.exitFrom_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitFrom_clause) return visitor.visitFrom_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Using_clauseContext extends ParserRuleContext {
	public USING(): TerminalNode { return this.getToken(SOQLParser.USING, 0); }
	public SCOPE(): TerminalNode { return this.getToken(SOQLParser.SCOPE, 0); }
	public filter_scope_name(): Filter_scope_nameContext {
		return this.getRuleContext(0, Filter_scope_nameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_using_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterUsing_clause) listener.enterUsing_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitUsing_clause) listener.exitUsing_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitUsing_clause) return visitor.visitUsing_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Where_clauseContext extends ParserRuleContext {
	public WHERE(): TerminalNode { return this.getToken(SOQLParser.WHERE, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_where_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterWhere_clause) listener.enterWhere_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitWhere_clause) listener.exitWhere_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitWhere_clause) return visitor.visitWhere_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Groupby_clauseContext extends ParserRuleContext {
	public GROUP(): TerminalNode { return this.getToken(SOQLParser.GROUP, 0); }
	public BY(): TerminalNode { return this.getToken(SOQLParser.BY, 0); }
	public group_by_rollup_clause(): Group_by_rollup_clauseContext | undefined {
		return this.tryGetRuleContext(0, Group_by_rollup_clauseContext);
	}
	public group_by_cube_clause(): Group_by_cube_clauseContext | undefined {
		return this.tryGetRuleContext(0, Group_by_cube_clauseContext);
	}
	public group_by_plain_clause(): Group_by_plain_clauseContext | undefined {
		return this.tryGetRuleContext(0, Group_by_plain_clauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_groupby_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterGroupby_clause) listener.enterGroupby_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitGroupby_clause) listener.exitGroupby_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitGroupby_clause) return visitor.visitGroupby_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Having_clauseContext extends ParserRuleContext {
	public HAVING(): TerminalNode { return this.getToken(SOQLParser.HAVING, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_having_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterHaving_clause) listener.enterHaving_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitHaving_clause) listener.exitHaving_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitHaving_clause) return visitor.visitHaving_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Orderby_clauseContext extends ParserRuleContext {
	public ORDER(): TerminalNode { return this.getToken(SOQLParser.ORDER, 0); }
	public BY(): TerminalNode { return this.getToken(SOQLParser.BY, 0); }
	public order_by_list(): Order_by_listContext {
		return this.getRuleContext(0, Order_by_listContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_orderby_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterOrderby_clause) listener.enterOrderby_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitOrderby_clause) listener.exitOrderby_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitOrderby_clause) return visitor.visitOrderby_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Limit_clauseContext extends ParserRuleContext {
	public LIMIT(): TerminalNode { return this.getToken(SOQLParser.LIMIT, 0); }
	public UNSIGNED_INTEGER(): TerminalNode { return this.getToken(SOQLParser.UNSIGNED_INTEGER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_limit_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterLimit_clause) listener.enterLimit_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitLimit_clause) listener.exitLimit_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitLimit_clause) return visitor.visitLimit_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Offset_clauseContext extends ParserRuleContext {
	public OFFSET(): TerminalNode { return this.getToken(SOQLParser.OFFSET, 0); }
	public UNSIGNED_INTEGER(): TerminalNode { return this.getToken(SOQLParser.UNSIGNED_INTEGER, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_offset_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterOffset_clause) listener.enterOffset_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitOffset_clause) listener.exitOffset_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitOffset_clause) return visitor.visitOffset_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class For_clauseContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(SOQLParser.FOR, 0); }
	public for_value(): For_valueContext[];
	public for_value(i: number): For_valueContext;
	public for_value(i?: number): For_valueContext | For_valueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(For_valueContext);
		} else {
			return this.getRuleContext(i, For_valueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SOQLParser.COMMA);
		} else {
			return this.getToken(SOQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_for_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterFor_clause) listener.enterFor_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitFor_clause) listener.exitFor_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitFor_clause) return visitor.visitFor_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Update_clauseContext extends ParserRuleContext {
	public UPDATE(): TerminalNode { return this.getToken(SOQLParser.UPDATE, 0); }
	public update_value(): Update_valueContext[];
	public update_value(i: number): Update_valueContext;
	public update_value(i?: number): Update_valueContext | Update_valueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Update_valueContext);
		} else {
			return this.getRuleContext(i, Update_valueContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.COMMA, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_update_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterUpdate_clause) listener.enterUpdate_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitUpdate_clause) listener.exitUpdate_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitUpdate_clause) return visitor.visitUpdate_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Soql_subqueryContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(SOQLParser.LPAREN, 0); }
	public subquery_select_clause(): Subquery_select_clauseContext {
		return this.getRuleContext(0, Subquery_select_clauseContext);
	}
	public from_clause(): From_clauseContext {
		return this.getRuleContext(0, From_clauseContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SOQLParser.RPAREN, 0); }
	public using_clause(): Using_clauseContext | undefined {
		return this.tryGetRuleContext(0, Using_clauseContext);
	}
	public where_clause(): Where_clauseContext | undefined {
		return this.tryGetRuleContext(0, Where_clauseContext);
	}
	public with_clause(): With_clauseContext | undefined {
		return this.tryGetRuleContext(0, With_clauseContext);
	}
	public orderby_clause(): Orderby_clauseContext | undefined {
		return this.tryGetRuleContext(0, Orderby_clauseContext);
	}
	public limit_clause(): Limit_clauseContext | undefined {
		return this.tryGetRuleContext(0, Limit_clauseContext);
	}
	public offset_clause(): Offset_clauseContext | undefined {
		return this.tryGetRuleContext(0, Offset_clauseContext);
	}
	public for_clause(): For_clauseContext | undefined {
		return this.tryGetRuleContext(0, For_clauseContext);
	}
	public update_clause(): Update_clauseContext | undefined {
		return this.tryGetRuleContext(0, Update_clauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_soql_subquery; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterSoql_subquery) listener.enterSoql_subquery(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitSoql_subquery) listener.exitSoql_subquery(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitSoql_subquery) return visitor.visitSoql_subquery(this);
		else return visitor.visitChildren(this);
	}
}


export class Subquery_select_clauseContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(SOQLParser.SELECT, 0); }
	public subquery_select_spec(): Subquery_select_specContext[];
	public subquery_select_spec(i: number): Subquery_select_specContext;
	public subquery_select_spec(i?: number): Subquery_select_specContext | Subquery_select_specContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Subquery_select_specContext);
		} else {
			return this.getRuleContext(i, Subquery_select_specContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SOQLParser.COMMA);
		} else {
			return this.getToken(SOQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_subquery_select_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterSubquery_select_clause) listener.enterSubquery_select_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitSubquery_select_clause) listener.exitSubquery_select_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitSubquery_select_clause) return visitor.visitSubquery_select_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Select_specContext extends ParserRuleContext {
	public field_spec(): Field_specContext | undefined {
		return this.tryGetRuleContext(0, Field_specContext);
	}
	public function_call_spec(): Function_call_specContext | undefined {
		return this.tryGetRuleContext(0, Function_call_specContext);
	}
	public soql_subquery(): Soql_subqueryContext | undefined {
		return this.tryGetRuleContext(0, Soql_subqueryContext);
	}
	public typeof_spec(): Typeof_specContext | undefined {
		return this.tryGetRuleContext(0, Typeof_specContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_select_spec; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterSelect_spec) listener.enterSelect_spec(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitSelect_spec) listener.exitSelect_spec(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitSelect_spec) return visitor.visitSelect_spec(this);
		else return visitor.visitChildren(this);
	}
}


export class Subquery_select_specContext extends ParserRuleContext {
	public field_spec(): Field_specContext | undefined {
		return this.tryGetRuleContext(0, Field_specContext);
	}
	public function_call_spec(): Function_call_specContext | undefined {
		return this.tryGetRuleContext(0, Function_call_specContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_subquery_select_spec; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterSubquery_select_spec) listener.enterSubquery_select_spec(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitSubquery_select_spec) listener.exitSubquery_select_spec(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitSubquery_select_spec) return visitor.visitSubquery_select_spec(this);
		else return visitor.visitChildren(this);
	}
}


export class Field_specContext extends ParserRuleContext {
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public alias(): AliasContext | undefined {
		return this.tryGetRuleContext(0, AliasContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_field_spec; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterField_spec) listener.enterField_spec(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitField_spec) listener.exitField_spec(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitField_spec) return visitor.visitField_spec(this);
		else return visitor.visitChildren(this);
	}
}


export class Function_call_specContext extends ParserRuleContext {
	public function_call(): Function_callContext {
		return this.getRuleContext(0, Function_callContext);
	}
	public alias(): AliasContext | undefined {
		return this.tryGetRuleContext(0, AliasContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_function_call_spec; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterFunction_call_spec) listener.enterFunction_call_spec(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitFunction_call_spec) listener.exitFunction_call_spec(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitFunction_call_spec) return visitor.visitFunction_call_spec(this);
		else return visitor.visitChildren(this);
	}
}


export class FieldContext extends ParserRuleContext {
	public field_name(): Field_nameContext {
		return this.getRuleContext(0, Field_nameContext);
	}
	public object_prefix(): Object_prefixContext | undefined {
		return this.tryGetRuleContext(0, Object_prefixContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_field; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterField) listener.enterField(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitField) listener.exitField(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitField) return visitor.visitField(this);
		else return visitor.visitChildren(this);
	}
}


export class Function_callContext extends ParserRuleContext {
	public function_name(): Function_nameContext {
		return this.getRuleContext(0, Function_nameContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(SOQLParser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(SOQLParser.RPAREN, 0); }
	public function_parameter_list(): Function_parameter_listContext | undefined {
		return this.tryGetRuleContext(0, Function_parameter_listContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_function_call; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterFunction_call) listener.enterFunction_call(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitFunction_call) listener.exitFunction_call(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitFunction_call) return visitor.visitFunction_call(this);
		else return visitor.visitChildren(this);
	}
}


export class Function_parameter_listContext extends ParserRuleContext {
	public function_parameter(): Function_parameterContext[];
	public function_parameter(i: number): Function_parameterContext;
	public function_parameter(i?: number): Function_parameterContext | Function_parameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Function_parameterContext);
		} else {
			return this.getRuleContext(i, Function_parameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SOQLParser.COMMA);
		} else {
			return this.getToken(SOQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_function_parameter_list; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterFunction_parameter_list) listener.enterFunction_parameter_list(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitFunction_parameter_list) listener.exitFunction_parameter_list(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitFunction_parameter_list) return visitor.visitFunction_parameter_list(this);
		else return visitor.visitChildren(this);
	}
}


export class Function_parameterContext extends ParserRuleContext {
	public field(): FieldContext | undefined {
		return this.tryGetRuleContext(0, FieldContext);
	}
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public function_call(): Function_callContext | undefined {
		return this.tryGetRuleContext(0, Function_callContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_function_parameter; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterFunction_parameter) listener.enterFunction_parameter(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitFunction_parameter) listener.exitFunction_parameter(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitFunction_parameter) return visitor.visitFunction_parameter(this);
		else return visitor.visitChildren(this);
	}
}


export class Typeof_specContext extends ParserRuleContext {
	public TYPEOF(): TerminalNode { return this.getToken(SOQLParser.TYPEOF, 0); }
	public field(): FieldContext {
		return this.getRuleContext(0, FieldContext);
	}
	public typeof_when_then_clause_list(): Typeof_when_then_clause_listContext {
		return this.getRuleContext(0, Typeof_when_then_clause_listContext);
	}
	public END(): TerminalNode { return this.getToken(SOQLParser.END, 0); }
	public typeof_else_clause(): Typeof_else_clauseContext | undefined {
		return this.tryGetRuleContext(0, Typeof_else_clauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_typeof_spec; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterTypeof_spec) listener.enterTypeof_spec(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitTypeof_spec) listener.exitTypeof_spec(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitTypeof_spec) return visitor.visitTypeof_spec(this);
		else return visitor.visitChildren(this);
	}
}


export class Typeof_when_then_clause_listContext extends ParserRuleContext {
	public typeof_when_then_clause(): Typeof_when_then_clauseContext[];
	public typeof_when_then_clause(i: number): Typeof_when_then_clauseContext;
	public typeof_when_then_clause(i?: number): Typeof_when_then_clauseContext | Typeof_when_then_clauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Typeof_when_then_clauseContext);
		} else {
			return this.getRuleContext(i, Typeof_when_then_clauseContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_typeof_when_then_clause_list; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterTypeof_when_then_clause_list) listener.enterTypeof_when_then_clause_list(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitTypeof_when_then_clause_list) listener.exitTypeof_when_then_clause_list(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitTypeof_when_then_clause_list) return visitor.visitTypeof_when_then_clause_list(this);
		else return visitor.visitChildren(this);
	}
}


export class Typeof_when_then_clauseContext extends ParserRuleContext {
	public WHEN(): TerminalNode { return this.getToken(SOQLParser.WHEN, 0); }
	public object_name(): Object_nameContext {
		return this.getRuleContext(0, Object_nameContext);
	}
	public typeof_then_clause(): Typeof_then_clauseContext {
		return this.getRuleContext(0, Typeof_then_clauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_typeof_when_then_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterTypeof_when_then_clause) listener.enterTypeof_when_then_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitTypeof_when_then_clause) listener.exitTypeof_when_then_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitTypeof_when_then_clause) return visitor.visitTypeof_when_then_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Typeof_then_clauseContext extends ParserRuleContext {
	public THEN(): TerminalNode { return this.getToken(SOQLParser.THEN, 0); }
	public field_list(): Field_listContext {
		return this.getRuleContext(0, Field_listContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_typeof_then_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterTypeof_then_clause) listener.enterTypeof_then_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitTypeof_then_clause) listener.exitTypeof_then_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitTypeof_then_clause) return visitor.visitTypeof_then_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Typeof_else_clauseContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(SOQLParser.ELSE, 0); }
	public field_list(): Field_listContext {
		return this.getRuleContext(0, Field_listContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_typeof_else_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterTypeof_else_clause) listener.enterTypeof_else_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitTypeof_else_clause) listener.exitTypeof_else_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitTypeof_else_clause) return visitor.visitTypeof_else_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Field_listContext extends ParserRuleContext {
	public field(): FieldContext[];
	public field(i: number): FieldContext;
	public field(i?: number): FieldContext | FieldContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldContext);
		} else {
			return this.getRuleContext(i, FieldContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SOQLParser.COMMA);
		} else {
			return this.getToken(SOQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_field_list; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterField_list) listener.enterField_list(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitField_list) listener.exitField_list(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitField_list) return visitor.visitField_list(this);
		else return visitor.visitChildren(this);
	}
}


export class Object_specContext extends ParserRuleContext {
	public object_name(): Object_nameContext {
		return this.getRuleContext(0, Object_nameContext);
	}
	public object_prefix(): Object_prefixContext | undefined {
		return this.tryGetRuleContext(0, Object_prefixContext);
	}
	public alias(): AliasContext | undefined {
		return this.tryGetRuleContext(0, AliasContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_object_spec; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterObject_spec) listener.enterObject_spec(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitObject_spec) listener.exitObject_spec(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitObject_spec) return visitor.visitObject_spec(this);
		else return visitor.visitChildren(this);
	}
}


export class Object_prefixContext extends ParserRuleContext {
	public object_name(): Object_nameContext[];
	public object_name(i: number): Object_nameContext;
	public object_name(i?: number): Object_nameContext | Object_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Object_nameContext);
		} else {
			return this.getRuleContext(i, Object_nameContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SOQLParser.DOT);
		} else {
			return this.getToken(SOQLParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_object_prefix; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterObject_prefix) listener.enterObject_prefix(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitObject_prefix) listener.exitObject_prefix(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitObject_prefix) return visitor.visitObject_prefix(this);
		else return visitor.visitChildren(this);
	}
}


export class Comparison_operatorContext extends ParserRuleContext {
	public EQ(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.EQ, 0); }
	public NOT_EQ(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.NOT_EQ, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LET, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.GET, 0); }
	public GTH(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.GTH, 0); }
	public LTH(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LTH, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_comparison_operator; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterComparison_operator) listener.enterComparison_operator(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitComparison_operator) listener.exitComparison_operator(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitComparison_operator) return visitor.visitComparison_operator(this);
		else return visitor.visitChildren(this);
	}
}


export class Set_operatorContext extends ParserRuleContext {
	public IN(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.IN, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.NOT, 0); }
	public INCLUDES(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.INCLUDES, 0); }
	public EXCLUDES(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.EXCLUDES, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_set_operator; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterSet_operator) listener.enterSet_operator(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitSet_operator) listener.exitSet_operator(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitSet_operator) return visitor.visitSet_operator(this);
		else return visitor.visitChildren(this);
	}
}


export class ConditionContext extends ParserRuleContext {
	public condition1(): Condition1Context[];
	public condition1(i: number): Condition1Context;
	public condition1(i?: number): Condition1Context | Condition1Context[] {
		if (i === undefined) {
			return this.getRuleContexts(Condition1Context);
		} else {
			return this.getRuleContext(i, Condition1Context);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SOQLParser.OR);
		} else {
			return this.getToken(SOQLParser.OR, i);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SOQLParser.AND);
		} else {
			return this.getToken(SOQLParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_condition; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterCondition) listener.enterCondition(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitCondition) listener.exitCondition(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitCondition) return visitor.visitCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class Condition1Context extends ParserRuleContext {
	public simple_condition(): Simple_conditionContext | undefined {
		return this.tryGetRuleContext(0, Simple_conditionContext);
	}
	public parenthesis(): ParenthesisContext | undefined {
		return this.tryGetRuleContext(0, ParenthesisContext);
	}
	public NOT(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.NOT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_condition1; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterCondition1) listener.enterCondition1(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitCondition1) listener.exitCondition1(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitCondition1) return visitor.visitCondition1(this);
		else return visitor.visitChildren(this);
	}
}


export class ParenthesisContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(SOQLParser.LPAREN, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SOQLParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_parenthesis; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterParenthesis) listener.enterParenthesis(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitParenthesis) listener.exitParenthesis(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitParenthesis) return visitor.visitParenthesis(this);
		else return visitor.visitChildren(this);
	}
}


export class Simple_conditionContext extends ParserRuleContext {
	public field_based_condition(): Field_based_conditionContext | undefined {
		return this.tryGetRuleContext(0, Field_based_conditionContext);
	}
	public set_based_condition(): Set_based_conditionContext | undefined {
		return this.tryGetRuleContext(0, Set_based_conditionContext);
	}
	public like_based_condition(): Like_based_conditionContext | undefined {
		return this.tryGetRuleContext(0, Like_based_conditionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_simple_condition; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterSimple_condition) listener.enterSimple_condition(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitSimple_condition) listener.exitSimple_condition(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitSimple_condition) return visitor.visitSimple_condition(this);
		else return visitor.visitChildren(this);
	}
}


export class Field_based_conditionContext extends ParserRuleContext {
	public condition_field(): Condition_fieldContext {
		return this.getRuleContext(0, Condition_fieldContext);
	}
	public comparison_operator(): Comparison_operatorContext {
		return this.getRuleContext(0, Comparison_operatorContext);
	}
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_field_based_condition; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterField_based_condition) listener.enterField_based_condition(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitField_based_condition) listener.exitField_based_condition(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitField_based_condition) return visitor.visitField_based_condition(this);
		else return visitor.visitChildren(this);
	}
}


export class Set_based_conditionContext extends ParserRuleContext {
	public condition_field(): Condition_fieldContext {
		return this.getRuleContext(0, Condition_fieldContext);
	}
	public set_operator(): Set_operatorContext {
		return this.getRuleContext(0, Set_operatorContext);
	}
	public soql_subquery(): Soql_subqueryContext | undefined {
		return this.tryGetRuleContext(0, Soql_subqueryContext);
	}
	public set_values(): Set_valuesContext | undefined {
		return this.tryGetRuleContext(0, Set_valuesContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_set_based_condition; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterSet_based_condition) listener.enterSet_based_condition(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitSet_based_condition) listener.exitSet_based_condition(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitSet_based_condition) return visitor.visitSet_based_condition(this);
		else return visitor.visitChildren(this);
	}
}


export class Like_based_conditionContext extends ParserRuleContext {
	public condition_field(): Condition_fieldContext {
		return this.getRuleContext(0, Condition_fieldContext);
	}
	public LIKE(): TerminalNode { return this.getToken(SOQLParser.LIKE, 0); }
	public STRING_VALUE(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.STRING_VALUE, 0); }
	public LIKE_STRING_VALUE(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LIKE_STRING_VALUE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_like_based_condition; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterLike_based_condition) listener.enterLike_based_condition(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitLike_based_condition) listener.exitLike_based_condition(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitLike_based_condition) return visitor.visitLike_based_condition(this);
		else return visitor.visitChildren(this);
	}
}


export class Condition_fieldContext extends ParserRuleContext {
	public field(): FieldContext | undefined {
		return this.tryGetRuleContext(0, FieldContext);
	}
	public function_call(): Function_callContext | undefined {
		return this.tryGetRuleContext(0, Function_callContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_condition_field; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterCondition_field) listener.enterCondition_field(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitCondition_field) listener.exitCondition_field(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitCondition_field) return visitor.visitCondition_field(this);
		else return visitor.visitChildren(this);
	}
}


export class Set_valuesContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(SOQLParser.LPAREN, 0); }
	public set_value_list(): Set_value_listContext {
		return this.getRuleContext(0, Set_value_listContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SOQLParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_set_values; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterSet_values) listener.enterSet_values(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitSet_values) listener.exitSet_values(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitSet_values) return visitor.visitSet_values(this);
		else return visitor.visitChildren(this);
	}
}


export class Set_value_listContext extends ParserRuleContext {
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SOQLParser.COMMA);
		} else {
			return this.getToken(SOQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_set_value_list; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterSet_value_list) listener.enterSet_value_list(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitSet_value_list) listener.exitSet_value_list(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitSet_value_list) return visitor.visitSet_value_list(this);
		else return visitor.visitChildren(this);
	}
}


export class With_clauseContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(SOQLParser.WITH, 0); }
	public with_plain_clause(): With_plain_clauseContext | undefined {
		return this.tryGetRuleContext(0, With_plain_clauseContext);
	}
	public with_data_category_clause(): With_data_category_clauseContext | undefined {
		return this.tryGetRuleContext(0, With_data_category_clauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_with_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterWith_clause) listener.enterWith_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitWith_clause) listener.exitWith_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitWith_clause) return visitor.visitWith_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class With_plain_clauseContext extends ParserRuleContext {
	public field_based_condition(): Field_based_conditionContext {
		return this.getRuleContext(0, Field_based_conditionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_with_plain_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterWith_plain_clause) listener.enterWith_plain_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitWith_plain_clause) listener.exitWith_plain_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitWith_plain_clause) return visitor.visitWith_plain_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class With_data_category_clauseContext extends ParserRuleContext {
	public DATA(): TerminalNode { return this.getToken(SOQLParser.DATA, 0); }
	public CATEGORY(): TerminalNode { return this.getToken(SOQLParser.CATEGORY, 0); }
	public data_category_spec_list(): Data_category_spec_listContext {
		return this.getRuleContext(0, Data_category_spec_listContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_with_data_category_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterWith_data_category_clause) listener.enterWith_data_category_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitWith_data_category_clause) listener.exitWith_data_category_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitWith_data_category_clause) return visitor.visitWith_data_category_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Data_category_spec_listContext extends ParserRuleContext {
	public data_category_spec(): Data_category_specContext[];
	public data_category_spec(i: number): Data_category_specContext;
	public data_category_spec(i?: number): Data_category_specContext | Data_category_specContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Data_category_specContext);
		} else {
			return this.getRuleContext(i, Data_category_specContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SOQLParser.AND);
		} else {
			return this.getToken(SOQLParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_data_category_spec_list; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterData_category_spec_list) listener.enterData_category_spec_list(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitData_category_spec_list) listener.exitData_category_spec_list(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitData_category_spec_list) return visitor.visitData_category_spec_list(this);
		else return visitor.visitChildren(this);
	}
}


export class Data_category_specContext extends ParserRuleContext {
	public data_category_group_name(): Data_category_group_nameContext {
		return this.getRuleContext(0, Data_category_group_nameContext);
	}
	public data_category_selector(): Data_category_selectorContext {
		return this.getRuleContext(0, Data_category_selectorContext);
	}
	public data_category_parameter_list(): Data_category_parameter_listContext {
		return this.getRuleContext(0, Data_category_parameter_listContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_data_category_spec; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterData_category_spec) listener.enterData_category_spec(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitData_category_spec) listener.exitData_category_spec(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitData_category_spec) return visitor.visitData_category_spec(this);
		else return visitor.visitChildren(this);
	}
}


export class Data_category_parameter_listContext extends ParserRuleContext {
	public data_category_name(): Data_category_nameContext[];
	public data_category_name(i: number): Data_category_nameContext;
	public data_category_name(i?: number): Data_category_nameContext | Data_category_nameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Data_category_nameContext);
		} else {
			return this.getRuleContext(i, Data_category_nameContext);
		}
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.RPAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SOQLParser.COMMA);
		} else {
			return this.getToken(SOQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_data_category_parameter_list; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterData_category_parameter_list) listener.enterData_category_parameter_list(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitData_category_parameter_list) listener.exitData_category_parameter_list(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitData_category_parameter_list) return visitor.visitData_category_parameter_list(this);
		else return visitor.visitChildren(this);
	}
}


export class Data_category_selectorContext extends ParserRuleContext {
	public AT(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.AT, 0); }
	public ABOVE(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.ABOVE, 0); }
	public ABOVE_OR_BELOW(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.ABOVE_OR_BELOW, 0); }
	public BELOW(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.BELOW, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_data_category_selector; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterData_category_selector) listener.enterData_category_selector(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitData_category_selector) listener.exitData_category_selector(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitData_category_selector) return visitor.visitData_category_selector(this);
		else return visitor.visitChildren(this);
	}
}


export class With_security_enforced_clauseContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(SOQLParser.WITH, 0); }
	public SECURITY_ENFORCED(): TerminalNode { return this.getToken(SOQLParser.SECURITY_ENFORCED, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_with_security_enforced_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterWith_security_enforced_clause) listener.enterWith_security_enforced_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitWith_security_enforced_clause) listener.exitWith_security_enforced_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitWith_security_enforced_clause) return visitor.visitWith_security_enforced_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Group_by_plain_clauseContext extends ParserRuleContext {
	public group_by_list(): Group_by_listContext {
		return this.getRuleContext(0, Group_by_listContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_group_by_plain_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterGroup_by_plain_clause) listener.enterGroup_by_plain_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitGroup_by_plain_clause) listener.exitGroup_by_plain_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitGroup_by_plain_clause) return visitor.visitGroup_by_plain_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Group_by_rollup_clauseContext extends ParserRuleContext {
	public ROLLUP(): TerminalNode { return this.getToken(SOQLParser.ROLLUP, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SOQLParser.LPAREN, 0); }
	public group_by_list(): Group_by_listContext {
		return this.getRuleContext(0, Group_by_listContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SOQLParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_group_by_rollup_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterGroup_by_rollup_clause) listener.enterGroup_by_rollup_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitGroup_by_rollup_clause) listener.exitGroup_by_rollup_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitGroup_by_rollup_clause) return visitor.visitGroup_by_rollup_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Group_by_cube_clauseContext extends ParserRuleContext {
	public CUBE(): TerminalNode { return this.getToken(SOQLParser.CUBE, 0); }
	public LPAREN(): TerminalNode { return this.getToken(SOQLParser.LPAREN, 0); }
	public group_by_list(): Group_by_listContext {
		return this.getRuleContext(0, Group_by_listContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(SOQLParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_group_by_cube_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterGroup_by_cube_clause) listener.enterGroup_by_cube_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitGroup_by_cube_clause) listener.exitGroup_by_cube_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitGroup_by_cube_clause) return visitor.visitGroup_by_cube_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Group_by_listContext extends ParserRuleContext {
	public group_by_spec(): Group_by_specContext[];
	public group_by_spec(i: number): Group_by_specContext;
	public group_by_spec(i?: number): Group_by_specContext | Group_by_specContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Group_by_specContext);
		} else {
			return this.getRuleContext(i, Group_by_specContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SOQLParser.COMMA);
		} else {
			return this.getToken(SOQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_group_by_list; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterGroup_by_list) listener.enterGroup_by_list(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitGroup_by_list) listener.exitGroup_by_list(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitGroup_by_list) return visitor.visitGroup_by_list(this);
		else return visitor.visitChildren(this);
	}
}


export class Group_by_specContext extends ParserRuleContext {
	public field(): FieldContext | undefined {
		return this.tryGetRuleContext(0, FieldContext);
	}
	public function_call(): Function_callContext | undefined {
		return this.tryGetRuleContext(0, Function_callContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_group_by_spec; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterGroup_by_spec) listener.enterGroup_by_spec(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitGroup_by_spec) listener.exitGroup_by_spec(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitGroup_by_spec) return visitor.visitGroup_by_spec(this);
		else return visitor.visitChildren(this);
	}
}


export class Order_by_listContext extends ParserRuleContext {
	public order_by_spec(): Order_by_specContext[];
	public order_by_spec(i: number): Order_by_specContext;
	public order_by_spec(i?: number): Order_by_specContext | Order_by_specContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Order_by_specContext);
		} else {
			return this.getRuleContext(i, Order_by_specContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(SOQLParser.COMMA);
		} else {
			return this.getToken(SOQLParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_order_by_list; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterOrder_by_list) listener.enterOrder_by_list(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitOrder_by_list) listener.exitOrder_by_list(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitOrder_by_list) return visitor.visitOrder_by_list(this);
		else return visitor.visitChildren(this);
	}
}


export class Order_by_specContext extends ParserRuleContext {
	public order_by_field(): Order_by_fieldContext {
		return this.getRuleContext(0, Order_by_fieldContext);
	}
	public order_by_direction_clause(): Order_by_direction_clauseContext | undefined {
		return this.tryGetRuleContext(0, Order_by_direction_clauseContext);
	}
	public order_by_nulls_clause(): Order_by_nulls_clauseContext | undefined {
		return this.tryGetRuleContext(0, Order_by_nulls_clauseContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_order_by_spec; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterOrder_by_spec) listener.enterOrder_by_spec(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitOrder_by_spec) listener.exitOrder_by_spec(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitOrder_by_spec) return visitor.visitOrder_by_spec(this);
		else return visitor.visitChildren(this);
	}
}


export class Order_by_direction_clauseContext extends ParserRuleContext {
	public ASC(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.DESC, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_order_by_direction_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterOrder_by_direction_clause) listener.enterOrder_by_direction_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitOrder_by_direction_clause) listener.exitOrder_by_direction_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitOrder_by_direction_clause) return visitor.visitOrder_by_direction_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Order_by_nulls_clauseContext extends ParserRuleContext {
	public NULLS(): TerminalNode { return this.getToken(SOQLParser.NULLS, 0); }
	public FIRST(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.FIRST, 0); }
	public LAST(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.LAST, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_order_by_nulls_clause; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterOrder_by_nulls_clause) listener.enterOrder_by_nulls_clause(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitOrder_by_nulls_clause) listener.exitOrder_by_nulls_clause(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitOrder_by_nulls_clause) return visitor.visitOrder_by_nulls_clause(this);
		else return visitor.visitChildren(this);
	}
}


export class Order_by_fieldContext extends ParserRuleContext {
	public field(): FieldContext | undefined {
		return this.tryGetRuleContext(0, FieldContext);
	}
	public function_call(): Function_callContext | undefined {
		return this.tryGetRuleContext(0, Function_callContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_order_by_field; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterOrder_by_field) listener.enterOrder_by_field(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitOrder_by_field) listener.exitOrder_by_field(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitOrder_by_field) return visitor.visitOrder_by_field(this);
		else return visitor.visitChildren(this);
	}
}


export class For_valueContext extends ParserRuleContext {
	public REFERENCE(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.REFERENCE, 0); }
	public VIEW(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.VIEW, 0); }
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.UPDATE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_for_value; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterFor_value) listener.enterFor_value(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitFor_value) listener.exitFor_value(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitFor_value) return visitor.visitFor_value(this);
		else return visitor.visitChildren(this);
	}
}


export class Update_valueContext extends ParserRuleContext {
	public TRACKING(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.TRACKING, 0); }
	public VIEWSTAT(): TerminalNode | undefined { return this.tryGetToken(SOQLParser.VIEWSTAT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return SOQLParser.RULE_update_value; }
	@Override
	public enterRule(listener: SOQLListener): void {
		if (listener.enterUpdate_value) listener.enterUpdate_value(this);
	}
	@Override
	public exitRule(listener: SOQLListener): void {
		if (listener.exitUpdate_value) listener.exitUpdate_value(this);
	}
	@Override
	public accept<Result>(visitor: SOQLVisitor<Result>): Result {
		if (visitor.visitUpdate_value) return visitor.visitUpdate_value(this);
		else return visitor.visitChildren(this);
	}
}

export class SOQLParser extends Parser {
	public static readonly WHITE_SPACE=1;
	public static readonly STRING_VALUE=2;
	public static readonly LIKE_STRING_VALUE=3;
	public static readonly AND=4;
	public static readonly AS=5;
	public static readonly ASC=6;
	public static readonly BY=7;
	public static readonly CUBE=8;
	public static readonly DESC=9;
	public static readonly ELSE=10;
	public static readonly EXCLUDES=11;
	public static readonly FALSE=12;
	public static readonly FIRST=13;
	public static readonly FROM=14;
	public static readonly GROUP=15;
	public static readonly HAVING=16;
	public static readonly IN=17;
	public static readonly INCLUDES=18;
	public static readonly LAST=19;
	public static readonly LIKE=20;
	public static readonly LIMIT=21;
	public static readonly NOT=22;
	public static readonly NULL=23;
	public static readonly NULLS=24;
	public static readonly OR=25;
	public static readonly ROLLUP=26;
	public static readonly SELECT=27;
	public static readonly TRUE=28;
	public static readonly USING=29;
	public static readonly WHERE=30;
	public static readonly WITH=31;
	public static readonly FOR=32;
	public static readonly UPDATE=33;
	public static readonly ABOVE=34;
	public static readonly ABOVE_OR_BELOW=35;
	public static readonly AT=36;
	public static readonly BELOW=37;
	public static readonly CATEGORY=38;
	public static readonly DATA=39;
	public static readonly END=40;
	public static readonly OFFSET=41;
	public static readonly ORDER=42;
	public static readonly REFERENCE=43;
	public static readonly SCOPE=44;
	public static readonly TRACKING=45;
	public static readonly THEN=46;
	public static readonly TYPEOF=47;
	public static readonly VIEW=48;
	public static readonly VIEWSTAT=49;
	public static readonly WHEN=50;
	public static readonly SECURITY_ENFORCED=51;
	public static readonly CALENDAR_MONTH=52;
	public static readonly CALENDAR_QUARTER=53;
	public static readonly CALENDAR_YEAR=54;
	public static readonly DAY_IN_MONTH=55;
	public static readonly DAY_IN_WEEK=56;
	public static readonly DAY_IN_YEAR=57;
	public static readonly DAY_ONLY=58;
	public static readonly FISCAL_MONTH=59;
	public static readonly FISCAL_QUARTER=60;
	public static readonly FISCAL_YEAR=61;
	public static readonly HOUR_IN_DAY=62;
	public static readonly WEEK_IN_MONTH=63;
	public static readonly WEEK_IN_YEAR=64;
	public static readonly AVG=65;
	public static readonly COUNT=66;
	public static readonly COUNT_DISTINCT=67;
	public static readonly MIN=68;
	public static readonly MAX=69;
	public static readonly SUM=70;
	public static readonly DISTANCE=71;
	public static readonly GEOLOCATION=72;
	public static readonly FORMAT=73;
	public static readonly TOLABEL=74;
	public static readonly CONVERT_TIME_ZONE=75;
	public static readonly CONVERT_CURRENCY=76;
	public static readonly GROUPING=77;
	public static readonly YESTERDAY=78;
	public static readonly TODAY=79;
	public static readonly TOMORROW=80;
	public static readonly LAST_WEEK=81;
	public static readonly THIS_WEEK=82;
	public static readonly NEXT_WEEK=83;
	public static readonly LAST_MONTH=84;
	public static readonly THIS_MONTH=85;
	public static readonly NEXT_MONTH=86;
	public static readonly LAST_90_DAYS=87;
	public static readonly NEXT_90_DAYS=88;
	public static readonly THIS_QUARTER=89;
	public static readonly LAST_QUARTER=90;
	public static readonly NEXT_QUARTER=91;
	public static readonly THIS_YEAR=92;
	public static readonly LAST_YEAR=93;
	public static readonly NEXT_YEAR=94;
	public static readonly THIS_FISCAL_QUARTER=95;
	public static readonly LAST_FISCAL_QUARTER=96;
	public static readonly NEXT_FISCAL_QUARTER=97;
	public static readonly THIS_FISCAL_YEAR=98;
	public static readonly LAST_FISCAL_YEAR=99;
	public static readonly NEXT_FISCAL_YEAR=100;
	public static readonly NEXT_N_DAYS=101;
	public static readonly LAST_N_DAYS=102;
	public static readonly N_DAYS_AGO=103;
	public static readonly NEXT_N_WEEKS=104;
	public static readonly LAST_N_WEEKS=105;
	public static readonly N_WEEKS_AGO=106;
	public static readonly NEXT_N_MONTHS=107;
	public static readonly LAST_N_MONTHS=108;
	public static readonly N_MONTHS_AGO=109;
	public static readonly NEXT_N_QUARTERS=110;
	public static readonly LAST_N_QUARTERS=111;
	public static readonly N_QUARTERS_AGO=112;
	public static readonly NEXT_N_YEARS=113;
	public static readonly LAST_N_YEARS=114;
	public static readonly N_YEARS_AGO=115;
	public static readonly NEXT_N_FISCAL_QUARTERS=116;
	public static readonly LAST_N_FISCAL_QUARTERS=117;
	public static readonly N_FISCAL_QUARTERS_AGO=118;
	public static readonly NEXT_N_FISCAL_YEARS=119;
	public static readonly LAST_N_FISCAL_YEARS=120;
	public static readonly N_FISCAL_YEARS_AGO=121;
	public static readonly EQ=122;
	public static readonly NOT_EQ=123;
	public static readonly LET=124;
	public static readonly GET=125;
	public static readonly GTH=126;
	public static readonly LTH=127;
	public static readonly DOT=128;
	public static readonly COLON=129;
	public static readonly SEMICOLON=130;
	public static readonly COMMA=131;
	public static readonly ASTERISK=132;
	public static readonly RPAREN=133;
	public static readonly LPAREN=134;
	public static readonly PLUS=135;
	public static readonly MINUS=136;
	public static readonly ID=137;
	public static readonly DATE=138;
	public static readonly DATETIME=139;
	public static readonly UNSIGNED_INTEGER=140;
	public static readonly REAL_NUMBER=141;
	public static readonly SIGNED_INTEGER=142;
	public static readonly RULE_keywords_alias_allowed = 0;
	public static readonly RULE_keywords_name_allowed = 1;
	public static readonly RULE_name = 2;
	public static readonly RULE_object_name = 3;
	public static readonly RULE_field_name = 4;
	public static readonly RULE_filter_scope_name = 5;
	public static readonly RULE_data_category_group_name = 6;
	public static readonly RULE_data_category_name = 7;
	public static readonly RULE_alias_name = 8;
	public static readonly RULE_alias = 9;
	public static readonly RULE_literal = 10;
	public static readonly RULE_date_formula_literal = 11;
	public static readonly RULE_date_formula_n_literal_name = 12;
	public static readonly RULE_date_formula_n_literal = 13;
	public static readonly RULE_datetime_literal = 14;
	public static readonly RULE_date_literal = 15;
	public static readonly RULE_integer_literal = 16;
	public static readonly RULE_real_literal = 17;
	public static readonly RULE_string_literal = 18;
	public static readonly RULE_boolean_literal = 19;
	public static readonly RULE_null_literal = 20;
	public static readonly RULE_function_name = 21;
	public static readonly RULE_function_date = 22;
	public static readonly RULE_function_aggregate = 23;
	public static readonly RULE_function_location = 24;
	public static readonly RULE_function_other = 25;
	public static readonly RULE_soql_query = 26;
	public static readonly RULE_select_clause = 27;
	public static readonly RULE_from_clause = 28;
	public static readonly RULE_using_clause = 29;
	public static readonly RULE_where_clause = 30;
	public static readonly RULE_groupby_clause = 31;
	public static readonly RULE_having_clause = 32;
	public static readonly RULE_orderby_clause = 33;
	public static readonly RULE_limit_clause = 34;
	public static readonly RULE_offset_clause = 35;
	public static readonly RULE_for_clause = 36;
	public static readonly RULE_update_clause = 37;
	public static readonly RULE_soql_subquery = 38;
	public static readonly RULE_subquery_select_clause = 39;
	public static readonly RULE_select_spec = 40;
	public static readonly RULE_subquery_select_spec = 41;
	public static readonly RULE_field_spec = 42;
	public static readonly RULE_function_call_spec = 43;
	public static readonly RULE_field = 44;
	public static readonly RULE_function_call = 45;
	public static readonly RULE_function_parameter_list = 46;
	public static readonly RULE_function_parameter = 47;
	public static readonly RULE_typeof_spec = 48;
	public static readonly RULE_typeof_when_then_clause_list = 49;
	public static readonly RULE_typeof_when_then_clause = 50;
	public static readonly RULE_typeof_then_clause = 51;
	public static readonly RULE_typeof_else_clause = 52;
	public static readonly RULE_field_list = 53;
	public static readonly RULE_object_spec = 54;
	public static readonly RULE_object_prefix = 55;
	public static readonly RULE_comparison_operator = 56;
	public static readonly RULE_set_operator = 57;
	public static readonly RULE_condition = 58;
	public static readonly RULE_condition1 = 59;
	public static readonly RULE_parenthesis = 60;
	public static readonly RULE_simple_condition = 61;
	public static readonly RULE_field_based_condition = 62;
	public static readonly RULE_set_based_condition = 63;
	public static readonly RULE_like_based_condition = 64;
	public static readonly RULE_condition_field = 65;
	public static readonly RULE_set_values = 66;
	public static readonly RULE_set_value_list = 67;
	public static readonly RULE_with_clause = 68;
	public static readonly RULE_with_plain_clause = 69;
	public static readonly RULE_with_data_category_clause = 70;
	public static readonly RULE_data_category_spec_list = 71;
	public static readonly RULE_data_category_spec = 72;
	public static readonly RULE_data_category_parameter_list = 73;
	public static readonly RULE_data_category_selector = 74;
	public static readonly RULE_with_security_enforced_clause = 75;
	public static readonly RULE_group_by_plain_clause = 76;
	public static readonly RULE_group_by_rollup_clause = 77;
	public static readonly RULE_group_by_cube_clause = 78;
	public static readonly RULE_group_by_list = 79;
	public static readonly RULE_group_by_spec = 80;
	public static readonly RULE_order_by_list = 81;
	public static readonly RULE_order_by_spec = 82;
	public static readonly RULE_order_by_direction_clause = 83;
	public static readonly RULE_order_by_nulls_clause = 84;
	public static readonly RULE_order_by_field = 85;
	public static readonly RULE_for_value = 86;
	public static readonly RULE_update_value = 87;
	public static readonly ruleNames: string[] = [
		"keywords_alias_allowed", "keywords_name_allowed", "name", "object_name", 
		"field_name", "filter_scope_name", "data_category_group_name", "data_category_name", 
		"alias_name", "alias", "literal", "date_formula_literal", "date_formula_n_literal_name", 
		"date_formula_n_literal", "datetime_literal", "date_literal", "integer_literal", 
		"real_literal", "string_literal", "boolean_literal", "null_literal", "function_name", 
		"function_date", "function_aggregate", "function_location", "function_other", 
		"soql_query", "select_clause", "from_clause", "using_clause", "where_clause", 
		"groupby_clause", "having_clause", "orderby_clause", "limit_clause", "offset_clause", 
		"for_clause", "update_clause", "soql_subquery", "subquery_select_clause", 
		"select_spec", "subquery_select_spec", "field_spec", "function_call_spec", 
		"field", "function_call", "function_parameter_list", "function_parameter", 
		"typeof_spec", "typeof_when_then_clause_list", "typeof_when_then_clause", 
		"typeof_then_clause", "typeof_else_clause", "field_list", "object_spec", 
		"object_prefix", "comparison_operator", "set_operator", "condition", "condition1", 
		"parenthesis", "simple_condition", "field_based_condition", "set_based_condition", 
		"like_based_condition", "condition_field", "set_values", "set_value_list", 
		"with_clause", "with_plain_clause", "with_data_category_clause", "data_category_spec_list", 
		"data_category_spec", "data_category_parameter_list", "data_category_selector", 
		"with_security_enforced_clause", "group_by_plain_clause", "group_by_rollup_clause", 
		"group_by_cube_clause", "group_by_list", "group_by_spec", "order_by_list", 
		"order_by_spec", "order_by_direction_clause", "order_by_nulls_clause", 
		"order_by_field", "for_value", "update_value"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'='", undefined, "'<='", "'>='", "'>'", 
		"'<'", "'.'", "':'", "';'", "','", "'*'", "')'", "'('", "'+'", "'-'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "WHITE_SPACE", "STRING_VALUE", "LIKE_STRING_VALUE", "AND", 
		"AS", "ASC", "BY", "CUBE", "DESC", "ELSE", "EXCLUDES", "FALSE", "FIRST", 
		"FROM", "GROUP", "HAVING", "IN", "INCLUDES", "LAST", "LIKE", "LIMIT", 
		"NOT", "NULL", "NULLS", "OR", "ROLLUP", "SELECT", "TRUE", "USING", "WHERE", 
		"WITH", "FOR", "UPDATE", "ABOVE", "ABOVE_OR_BELOW", "AT", "BELOW", "CATEGORY", 
		"DATA", "END", "OFFSET", "ORDER", "REFERENCE", "SCOPE", "TRACKING", "THEN", 
		"TYPEOF", "VIEW", "VIEWSTAT", "WHEN", "SECURITY_ENFORCED", "CALENDAR_MONTH", 
		"CALENDAR_QUARTER", "CALENDAR_YEAR", "DAY_IN_MONTH", "DAY_IN_WEEK", "DAY_IN_YEAR", 
		"DAY_ONLY", "FISCAL_MONTH", "FISCAL_QUARTER", "FISCAL_YEAR", "HOUR_IN_DAY", 
		"WEEK_IN_MONTH", "WEEK_IN_YEAR", "AVG", "COUNT", "COUNT_DISTINCT", "MIN", 
		"MAX", "SUM", "DISTANCE", "GEOLOCATION", "FORMAT", "TOLABEL", "CONVERT_TIME_ZONE", 
		"CONVERT_CURRENCY", "GROUPING", "YESTERDAY", "TODAY", "TOMORROW", "LAST_WEEK", 
		"THIS_WEEK", "NEXT_WEEK", "LAST_MONTH", "THIS_MONTH", "NEXT_MONTH", "LAST_90_DAYS", 
		"NEXT_90_DAYS", "THIS_QUARTER", "LAST_QUARTER", "NEXT_QUARTER", "THIS_YEAR", 
		"LAST_YEAR", "NEXT_YEAR", "THIS_FISCAL_QUARTER", "LAST_FISCAL_QUARTER", 
		"NEXT_FISCAL_QUARTER", "THIS_FISCAL_YEAR", "LAST_FISCAL_YEAR", "NEXT_FISCAL_YEAR", 
		"NEXT_N_DAYS", "LAST_N_DAYS", "N_DAYS_AGO", "NEXT_N_WEEKS", "LAST_N_WEEKS", 
		"N_WEEKS_AGO", "NEXT_N_MONTHS", "LAST_N_MONTHS", "N_MONTHS_AGO", "NEXT_N_QUARTERS", 
		"LAST_N_QUARTERS", "N_QUARTERS_AGO", "NEXT_N_YEARS", "LAST_N_YEARS", "N_YEARS_AGO", 
		"NEXT_N_FISCAL_QUARTERS", "LAST_N_FISCAL_QUARTERS", "N_FISCAL_QUARTERS_AGO", 
		"NEXT_N_FISCAL_YEARS", "LAST_N_FISCAL_YEARS", "N_FISCAL_YEARS_AGO", "EQ", 
		"NOT_EQ", "LET", "GET", "GTH", "LTH", "DOT", "COLON", "SEMICOLON", "COMMA", 
		"ASTERISK", "RPAREN", "LPAREN", "PLUS", "MINUS", "ID", "DATE", "DATETIME", 
		"UNSIGNED_INTEGER", "REAL_NUMBER", "SIGNED_INTEGER"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(SOQLParser._LITERAL_NAMES, SOQLParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return SOQLParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "SOQL.g4"; }

	@Override
	public get ruleNames(): string[] { return SOQLParser.ruleNames; }

	@Override
	public get serializedATN(): string { return SOQLParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(SOQLParser._ATN, this);
	}
	@RuleVersion(0)
	public keywords_alias_allowed(): Keywords_alias_allowedContext {
		let _localctx: Keywords_alias_allowedContext = new Keywords_alias_allowedContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, SOQLParser.RULE_keywords_alias_allowed);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			_la = this._input.LA(1);
			if ( !(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SOQLParser.ABOVE - 34)) | (1 << (SOQLParser.ABOVE_OR_BELOW - 34)) | (1 << (SOQLParser.AT - 34)) | (1 << (SOQLParser.BELOW - 34)) | (1 << (SOQLParser.CATEGORY - 34)) | (1 << (SOQLParser.DATA - 34)) | (1 << (SOQLParser.END - 34)) | (1 << (SOQLParser.OFFSET - 34)) | (1 << (SOQLParser.ORDER - 34)) | (1 << (SOQLParser.REFERENCE - 34)) | (1 << (SOQLParser.SCOPE - 34)) | (1 << (SOQLParser.TRACKING - 34)) | (1 << (SOQLParser.THEN - 34)) | (1 << (SOQLParser.TYPEOF - 34)) | (1 << (SOQLParser.VIEW - 34)) | (1 << (SOQLParser.VIEWSTAT - 34)) | (1 << (SOQLParser.WHEN - 34)) | (1 << (SOQLParser.SECURITY_ENFORCED - 34)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public keywords_name_allowed(): Keywords_name_allowedContext {
		let _localctx: Keywords_name_allowedContext = new Keywords_name_allowedContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, SOQLParser.RULE_keywords_name_allowed);
		try {
			this.state = 180;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SOQLParser.ABOVE:
			case SOQLParser.ABOVE_OR_BELOW:
			case SOQLParser.AT:
			case SOQLParser.BELOW:
			case SOQLParser.CATEGORY:
			case SOQLParser.DATA:
			case SOQLParser.END:
			case SOQLParser.OFFSET:
			case SOQLParser.ORDER:
			case SOQLParser.REFERENCE:
			case SOQLParser.SCOPE:
			case SOQLParser.TRACKING:
			case SOQLParser.THEN:
			case SOQLParser.TYPEOF:
			case SOQLParser.VIEW:
			case SOQLParser.VIEWSTAT:
			case SOQLParser.WHEN:
			case SOQLParser.SECURITY_ENFORCED:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 178;
				this.keywords_alias_allowed();
				}
				break;
			case SOQLParser.GROUP:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 179;
				this.match(SOQLParser.GROUP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, SOQLParser.RULE_name);
		try {
			this.state = 187;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SOQLParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 182;
				this.match(SOQLParser.ID);
				}
				break;
			case SOQLParser.GROUP:
			case SOQLParser.ABOVE:
			case SOQLParser.ABOVE_OR_BELOW:
			case SOQLParser.AT:
			case SOQLParser.BELOW:
			case SOQLParser.CATEGORY:
			case SOQLParser.DATA:
			case SOQLParser.END:
			case SOQLParser.OFFSET:
			case SOQLParser.ORDER:
			case SOQLParser.REFERENCE:
			case SOQLParser.SCOPE:
			case SOQLParser.TRACKING:
			case SOQLParser.THEN:
			case SOQLParser.TYPEOF:
			case SOQLParser.VIEW:
			case SOQLParser.VIEWSTAT:
			case SOQLParser.WHEN:
			case SOQLParser.SECURITY_ENFORCED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 183;
				this.keywords_name_allowed();
				}
				break;
			case SOQLParser.YESTERDAY:
			case SOQLParser.TODAY:
			case SOQLParser.TOMORROW:
			case SOQLParser.LAST_WEEK:
			case SOQLParser.THIS_WEEK:
			case SOQLParser.NEXT_WEEK:
			case SOQLParser.LAST_MONTH:
			case SOQLParser.THIS_MONTH:
			case SOQLParser.NEXT_MONTH:
			case SOQLParser.LAST_90_DAYS:
			case SOQLParser.NEXT_90_DAYS:
			case SOQLParser.THIS_QUARTER:
			case SOQLParser.LAST_QUARTER:
			case SOQLParser.NEXT_QUARTER:
			case SOQLParser.THIS_YEAR:
			case SOQLParser.LAST_YEAR:
			case SOQLParser.NEXT_YEAR:
			case SOQLParser.THIS_FISCAL_QUARTER:
			case SOQLParser.LAST_FISCAL_QUARTER:
			case SOQLParser.NEXT_FISCAL_QUARTER:
			case SOQLParser.THIS_FISCAL_YEAR:
			case SOQLParser.LAST_FISCAL_YEAR:
			case SOQLParser.NEXT_FISCAL_YEAR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 184;
				this.date_formula_literal();
				}
				break;
			case SOQLParser.NEXT_N_DAYS:
			case SOQLParser.LAST_N_DAYS:
			case SOQLParser.N_DAYS_AGO:
			case SOQLParser.NEXT_N_WEEKS:
			case SOQLParser.LAST_N_WEEKS:
			case SOQLParser.N_WEEKS_AGO:
			case SOQLParser.NEXT_N_MONTHS:
			case SOQLParser.LAST_N_MONTHS:
			case SOQLParser.N_MONTHS_AGO:
			case SOQLParser.NEXT_N_QUARTERS:
			case SOQLParser.LAST_N_QUARTERS:
			case SOQLParser.N_QUARTERS_AGO:
			case SOQLParser.NEXT_N_YEARS:
			case SOQLParser.LAST_N_YEARS:
			case SOQLParser.N_YEARS_AGO:
			case SOQLParser.NEXT_N_FISCAL_QUARTERS:
			case SOQLParser.LAST_N_FISCAL_QUARTERS:
			case SOQLParser.N_FISCAL_QUARTERS_AGO:
			case SOQLParser.NEXT_N_FISCAL_YEARS:
			case SOQLParser.LAST_N_FISCAL_YEARS:
			case SOQLParser.N_FISCAL_YEARS_AGO:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 185;
				this.date_formula_n_literal_name();
				}
				break;
			case SOQLParser.CALENDAR_MONTH:
			case SOQLParser.CALENDAR_QUARTER:
			case SOQLParser.CALENDAR_YEAR:
			case SOQLParser.DAY_IN_MONTH:
			case SOQLParser.DAY_IN_WEEK:
			case SOQLParser.DAY_IN_YEAR:
			case SOQLParser.DAY_ONLY:
			case SOQLParser.FISCAL_MONTH:
			case SOQLParser.FISCAL_QUARTER:
			case SOQLParser.FISCAL_YEAR:
			case SOQLParser.HOUR_IN_DAY:
			case SOQLParser.WEEK_IN_MONTH:
			case SOQLParser.WEEK_IN_YEAR:
			case SOQLParser.AVG:
			case SOQLParser.COUNT:
			case SOQLParser.COUNT_DISTINCT:
			case SOQLParser.MIN:
			case SOQLParser.MAX:
			case SOQLParser.SUM:
			case SOQLParser.DISTANCE:
			case SOQLParser.GEOLOCATION:
			case SOQLParser.FORMAT:
			case SOQLParser.TOLABEL:
			case SOQLParser.CONVERT_TIME_ZONE:
			case SOQLParser.CONVERT_CURRENCY:
			case SOQLParser.GROUPING:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 186;
				this.function_name();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public object_name(): Object_nameContext {
		let _localctx: Object_nameContext = new Object_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, SOQLParser.RULE_object_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public field_name(): Field_nameContext {
		let _localctx: Field_nameContext = new Field_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, SOQLParser.RULE_field_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public filter_scope_name(): Filter_scope_nameContext {
		let _localctx: Filter_scope_nameContext = new Filter_scope_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, SOQLParser.RULE_filter_scope_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 193;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public data_category_group_name(): Data_category_group_nameContext {
		let _localctx: Data_category_group_nameContext = new Data_category_group_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, SOQLParser.RULE_data_category_group_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public data_category_name(): Data_category_nameContext {
		let _localctx: Data_category_nameContext = new Data_category_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, SOQLParser.RULE_data_category_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 197;
			this.name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alias_name(): Alias_nameContext {
		let _localctx: Alias_nameContext = new Alias_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, SOQLParser.RULE_alias_name);
		try {
			this.state = 204;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SOQLParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 199;
				this.match(SOQLParser.ID);
				}
				break;
			case SOQLParser.ABOVE:
			case SOQLParser.ABOVE_OR_BELOW:
			case SOQLParser.AT:
			case SOQLParser.BELOW:
			case SOQLParser.CATEGORY:
			case SOQLParser.DATA:
			case SOQLParser.END:
			case SOQLParser.OFFSET:
			case SOQLParser.ORDER:
			case SOQLParser.REFERENCE:
			case SOQLParser.SCOPE:
			case SOQLParser.TRACKING:
			case SOQLParser.THEN:
			case SOQLParser.TYPEOF:
			case SOQLParser.VIEW:
			case SOQLParser.VIEWSTAT:
			case SOQLParser.WHEN:
			case SOQLParser.SECURITY_ENFORCED:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 200;
				this.keywords_alias_allowed();
				}
				break;
			case SOQLParser.YESTERDAY:
			case SOQLParser.TODAY:
			case SOQLParser.TOMORROW:
			case SOQLParser.LAST_WEEK:
			case SOQLParser.THIS_WEEK:
			case SOQLParser.NEXT_WEEK:
			case SOQLParser.LAST_MONTH:
			case SOQLParser.THIS_MONTH:
			case SOQLParser.NEXT_MONTH:
			case SOQLParser.LAST_90_DAYS:
			case SOQLParser.NEXT_90_DAYS:
			case SOQLParser.THIS_QUARTER:
			case SOQLParser.LAST_QUARTER:
			case SOQLParser.NEXT_QUARTER:
			case SOQLParser.THIS_YEAR:
			case SOQLParser.LAST_YEAR:
			case SOQLParser.NEXT_YEAR:
			case SOQLParser.THIS_FISCAL_QUARTER:
			case SOQLParser.LAST_FISCAL_QUARTER:
			case SOQLParser.NEXT_FISCAL_QUARTER:
			case SOQLParser.THIS_FISCAL_YEAR:
			case SOQLParser.LAST_FISCAL_YEAR:
			case SOQLParser.NEXT_FISCAL_YEAR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 201;
				this.date_formula_literal();
				}
				break;
			case SOQLParser.NEXT_N_DAYS:
			case SOQLParser.LAST_N_DAYS:
			case SOQLParser.N_DAYS_AGO:
			case SOQLParser.NEXT_N_WEEKS:
			case SOQLParser.LAST_N_WEEKS:
			case SOQLParser.N_WEEKS_AGO:
			case SOQLParser.NEXT_N_MONTHS:
			case SOQLParser.LAST_N_MONTHS:
			case SOQLParser.N_MONTHS_AGO:
			case SOQLParser.NEXT_N_QUARTERS:
			case SOQLParser.LAST_N_QUARTERS:
			case SOQLParser.N_QUARTERS_AGO:
			case SOQLParser.NEXT_N_YEARS:
			case SOQLParser.LAST_N_YEARS:
			case SOQLParser.N_YEARS_AGO:
			case SOQLParser.NEXT_N_FISCAL_QUARTERS:
			case SOQLParser.LAST_N_FISCAL_QUARTERS:
			case SOQLParser.N_FISCAL_QUARTERS_AGO:
			case SOQLParser.NEXT_N_FISCAL_YEARS:
			case SOQLParser.LAST_N_FISCAL_YEARS:
			case SOQLParser.N_FISCAL_YEARS_AGO:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 202;
				this.date_formula_n_literal_name();
				}
				break;
			case SOQLParser.CALENDAR_MONTH:
			case SOQLParser.CALENDAR_QUARTER:
			case SOQLParser.CALENDAR_YEAR:
			case SOQLParser.DAY_IN_MONTH:
			case SOQLParser.DAY_IN_WEEK:
			case SOQLParser.DAY_IN_YEAR:
			case SOQLParser.DAY_ONLY:
			case SOQLParser.FISCAL_MONTH:
			case SOQLParser.FISCAL_QUARTER:
			case SOQLParser.FISCAL_YEAR:
			case SOQLParser.HOUR_IN_DAY:
			case SOQLParser.WEEK_IN_MONTH:
			case SOQLParser.WEEK_IN_YEAR:
			case SOQLParser.AVG:
			case SOQLParser.COUNT:
			case SOQLParser.COUNT_DISTINCT:
			case SOQLParser.MIN:
			case SOQLParser.MAX:
			case SOQLParser.SUM:
			case SOQLParser.DISTANCE:
			case SOQLParser.GEOLOCATION:
			case SOQLParser.FORMAT:
			case SOQLParser.TOLABEL:
			case SOQLParser.CONVERT_TIME_ZONE:
			case SOQLParser.CONVERT_CURRENCY:
			case SOQLParser.GROUPING:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 203;
				this.function_name();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public alias(): AliasContext {
		let _localctx: AliasContext = new AliasContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, SOQLParser.RULE_alias);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 207;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.AS) {
				{
				this.state = 206;
				this.match(SOQLParser.AS);
				}
			}

			this.state = 209;
			this.alias_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, SOQLParser.RULE_literal);
		try {
			this.state = 220;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SOQLParser.YESTERDAY:
			case SOQLParser.TODAY:
			case SOQLParser.TOMORROW:
			case SOQLParser.LAST_WEEK:
			case SOQLParser.THIS_WEEK:
			case SOQLParser.NEXT_WEEK:
			case SOQLParser.LAST_MONTH:
			case SOQLParser.THIS_MONTH:
			case SOQLParser.NEXT_MONTH:
			case SOQLParser.LAST_90_DAYS:
			case SOQLParser.NEXT_90_DAYS:
			case SOQLParser.THIS_QUARTER:
			case SOQLParser.LAST_QUARTER:
			case SOQLParser.NEXT_QUARTER:
			case SOQLParser.THIS_YEAR:
			case SOQLParser.LAST_YEAR:
			case SOQLParser.NEXT_YEAR:
			case SOQLParser.THIS_FISCAL_QUARTER:
			case SOQLParser.LAST_FISCAL_QUARTER:
			case SOQLParser.NEXT_FISCAL_QUARTER:
			case SOQLParser.THIS_FISCAL_YEAR:
			case SOQLParser.LAST_FISCAL_YEAR:
			case SOQLParser.NEXT_FISCAL_YEAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 211;
				this.date_formula_literal();
				}
				break;
			case SOQLParser.NEXT_N_DAYS:
			case SOQLParser.LAST_N_DAYS:
			case SOQLParser.N_DAYS_AGO:
			case SOQLParser.NEXT_N_WEEKS:
			case SOQLParser.LAST_N_WEEKS:
			case SOQLParser.N_WEEKS_AGO:
			case SOQLParser.NEXT_N_MONTHS:
			case SOQLParser.LAST_N_MONTHS:
			case SOQLParser.N_MONTHS_AGO:
			case SOQLParser.NEXT_N_QUARTERS:
			case SOQLParser.LAST_N_QUARTERS:
			case SOQLParser.N_QUARTERS_AGO:
			case SOQLParser.NEXT_N_YEARS:
			case SOQLParser.LAST_N_YEARS:
			case SOQLParser.N_YEARS_AGO:
			case SOQLParser.NEXT_N_FISCAL_QUARTERS:
			case SOQLParser.LAST_N_FISCAL_QUARTERS:
			case SOQLParser.N_FISCAL_QUARTERS_AGO:
			case SOQLParser.NEXT_N_FISCAL_YEARS:
			case SOQLParser.LAST_N_FISCAL_YEARS:
			case SOQLParser.N_FISCAL_YEARS_AGO:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 212;
				this.date_formula_n_literal();
				}
				break;
			case SOQLParser.DATETIME:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 213;
				this.datetime_literal();
				}
				break;
			case SOQLParser.DATE:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 214;
				this.date_literal();
				}
				break;
			case SOQLParser.UNSIGNED_INTEGER:
			case SOQLParser.SIGNED_INTEGER:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 215;
				this.integer_literal();
				}
				break;
			case SOQLParser.REAL_NUMBER:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 216;
				this.real_literal();
				}
				break;
			case SOQLParser.STRING_VALUE:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 217;
				this.string_literal();
				}
				break;
			case SOQLParser.FALSE:
			case SOQLParser.TRUE:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 218;
				this.boolean_literal();
				}
				break;
			case SOQLParser.NULL:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 219;
				this.null_literal();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public date_formula_literal(): Date_formula_literalContext {
		let _localctx: Date_formula_literalContext = new Date_formula_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, SOQLParser.RULE_date_formula_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			_la = this._input.LA(1);
			if ( !(((((_la - 78)) & ~0x1F) === 0 && ((1 << (_la - 78)) & ((1 << (SOQLParser.YESTERDAY - 78)) | (1 << (SOQLParser.TODAY - 78)) | (1 << (SOQLParser.TOMORROW - 78)) | (1 << (SOQLParser.LAST_WEEK - 78)) | (1 << (SOQLParser.THIS_WEEK - 78)) | (1 << (SOQLParser.NEXT_WEEK - 78)) | (1 << (SOQLParser.LAST_MONTH - 78)) | (1 << (SOQLParser.THIS_MONTH - 78)) | (1 << (SOQLParser.NEXT_MONTH - 78)) | (1 << (SOQLParser.LAST_90_DAYS - 78)) | (1 << (SOQLParser.NEXT_90_DAYS - 78)) | (1 << (SOQLParser.THIS_QUARTER - 78)) | (1 << (SOQLParser.LAST_QUARTER - 78)) | (1 << (SOQLParser.NEXT_QUARTER - 78)) | (1 << (SOQLParser.THIS_YEAR - 78)) | (1 << (SOQLParser.LAST_YEAR - 78)) | (1 << (SOQLParser.NEXT_YEAR - 78)) | (1 << (SOQLParser.THIS_FISCAL_QUARTER - 78)) | (1 << (SOQLParser.LAST_FISCAL_QUARTER - 78)) | (1 << (SOQLParser.NEXT_FISCAL_QUARTER - 78)) | (1 << (SOQLParser.THIS_FISCAL_YEAR - 78)) | (1 << (SOQLParser.LAST_FISCAL_YEAR - 78)) | (1 << (SOQLParser.NEXT_FISCAL_YEAR - 78)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public date_formula_n_literal_name(): Date_formula_n_literal_nameContext {
		let _localctx: Date_formula_n_literal_nameContext = new Date_formula_n_literal_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, SOQLParser.RULE_date_formula_n_literal_name);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 224;
			_la = this._input.LA(1);
			if ( !(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (SOQLParser.NEXT_N_DAYS - 101)) | (1 << (SOQLParser.LAST_N_DAYS - 101)) | (1 << (SOQLParser.N_DAYS_AGO - 101)) | (1 << (SOQLParser.NEXT_N_WEEKS - 101)) | (1 << (SOQLParser.LAST_N_WEEKS - 101)) | (1 << (SOQLParser.N_WEEKS_AGO - 101)) | (1 << (SOQLParser.NEXT_N_MONTHS - 101)) | (1 << (SOQLParser.LAST_N_MONTHS - 101)) | (1 << (SOQLParser.N_MONTHS_AGO - 101)) | (1 << (SOQLParser.NEXT_N_QUARTERS - 101)) | (1 << (SOQLParser.LAST_N_QUARTERS - 101)) | (1 << (SOQLParser.N_QUARTERS_AGO - 101)) | (1 << (SOQLParser.NEXT_N_YEARS - 101)) | (1 << (SOQLParser.LAST_N_YEARS - 101)) | (1 << (SOQLParser.N_YEARS_AGO - 101)) | (1 << (SOQLParser.NEXT_N_FISCAL_QUARTERS - 101)) | (1 << (SOQLParser.LAST_N_FISCAL_QUARTERS - 101)) | (1 << (SOQLParser.N_FISCAL_QUARTERS_AGO - 101)) | (1 << (SOQLParser.NEXT_N_FISCAL_YEARS - 101)) | (1 << (SOQLParser.LAST_N_FISCAL_YEARS - 101)) | (1 << (SOQLParser.N_FISCAL_YEARS_AGO - 101)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public date_formula_n_literal(): Date_formula_n_literalContext {
		let _localctx: Date_formula_n_literalContext = new Date_formula_n_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, SOQLParser.RULE_date_formula_n_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.date_formula_n_literal_name();
			this.state = 227;
			this.match(SOQLParser.COLON);
			this.state = 228;
			this.match(SOQLParser.UNSIGNED_INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public datetime_literal(): Datetime_literalContext {
		let _localctx: Datetime_literalContext = new Datetime_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, SOQLParser.RULE_datetime_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.match(SOQLParser.DATETIME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public date_literal(): Date_literalContext {
		let _localctx: Date_literalContext = new Date_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, SOQLParser.RULE_date_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.match(SOQLParser.DATE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public integer_literal(): Integer_literalContext {
		let _localctx: Integer_literalContext = new Integer_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, SOQLParser.RULE_integer_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 234;
			_la = this._input.LA(1);
			if ( !(_la===SOQLParser.UNSIGNED_INTEGER || _la===SOQLParser.SIGNED_INTEGER) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public real_literal(): Real_literalContext {
		let _localctx: Real_literalContext = new Real_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, SOQLParser.RULE_real_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 236;
			this.match(SOQLParser.REAL_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public string_literal(): String_literalContext {
		let _localctx: String_literalContext = new String_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, SOQLParser.RULE_string_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.match(SOQLParser.STRING_VALUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public boolean_literal(): Boolean_literalContext {
		let _localctx: Boolean_literalContext = new Boolean_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, SOQLParser.RULE_boolean_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 240;
			_la = this._input.LA(1);
			if ( !(_la===SOQLParser.FALSE || _la===SOQLParser.TRUE) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public null_literal(): Null_literalContext {
		let _localctx: Null_literalContext = new Null_literalContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, SOQLParser.RULE_null_literal);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this.match(SOQLParser.NULL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public function_name(): Function_nameContext {
		let _localctx: Function_nameContext = new Function_nameContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, SOQLParser.RULE_function_name);
		try {
			this.state = 248;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SOQLParser.CALENDAR_MONTH:
			case SOQLParser.CALENDAR_QUARTER:
			case SOQLParser.CALENDAR_YEAR:
			case SOQLParser.DAY_IN_MONTH:
			case SOQLParser.DAY_IN_WEEK:
			case SOQLParser.DAY_IN_YEAR:
			case SOQLParser.DAY_ONLY:
			case SOQLParser.FISCAL_MONTH:
			case SOQLParser.FISCAL_QUARTER:
			case SOQLParser.FISCAL_YEAR:
			case SOQLParser.HOUR_IN_DAY:
			case SOQLParser.WEEK_IN_MONTH:
			case SOQLParser.WEEK_IN_YEAR:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 244;
				this.function_date();
				}
				break;
			case SOQLParser.AVG:
			case SOQLParser.COUNT:
			case SOQLParser.COUNT_DISTINCT:
			case SOQLParser.MIN:
			case SOQLParser.MAX:
			case SOQLParser.SUM:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 245;
				this.function_aggregate();
				}
				break;
			case SOQLParser.DISTANCE:
			case SOQLParser.GEOLOCATION:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 246;
				this.function_location();
				}
				break;
			case SOQLParser.FORMAT:
			case SOQLParser.TOLABEL:
			case SOQLParser.CONVERT_TIME_ZONE:
			case SOQLParser.CONVERT_CURRENCY:
			case SOQLParser.GROUPING:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 247;
				this.function_other();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public function_date(): Function_dateContext {
		let _localctx: Function_dateContext = new Function_dateContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, SOQLParser.RULE_function_date);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 250;
			_la = this._input.LA(1);
			if ( !(((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (SOQLParser.CALENDAR_MONTH - 52)) | (1 << (SOQLParser.CALENDAR_QUARTER - 52)) | (1 << (SOQLParser.CALENDAR_YEAR - 52)) | (1 << (SOQLParser.DAY_IN_MONTH - 52)) | (1 << (SOQLParser.DAY_IN_WEEK - 52)) | (1 << (SOQLParser.DAY_IN_YEAR - 52)) | (1 << (SOQLParser.DAY_ONLY - 52)) | (1 << (SOQLParser.FISCAL_MONTH - 52)) | (1 << (SOQLParser.FISCAL_QUARTER - 52)) | (1 << (SOQLParser.FISCAL_YEAR - 52)) | (1 << (SOQLParser.HOUR_IN_DAY - 52)) | (1 << (SOQLParser.WEEK_IN_MONTH - 52)) | (1 << (SOQLParser.WEEK_IN_YEAR - 52)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public function_aggregate(): Function_aggregateContext {
		let _localctx: Function_aggregateContext = new Function_aggregateContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, SOQLParser.RULE_function_aggregate);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 252;
			_la = this._input.LA(1);
			if ( !(((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (SOQLParser.AVG - 65)) | (1 << (SOQLParser.COUNT - 65)) | (1 << (SOQLParser.COUNT_DISTINCT - 65)) | (1 << (SOQLParser.MIN - 65)) | (1 << (SOQLParser.MAX - 65)) | (1 << (SOQLParser.SUM - 65)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public function_location(): Function_locationContext {
		let _localctx: Function_locationContext = new Function_locationContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, SOQLParser.RULE_function_location);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			_la = this._input.LA(1);
			if ( !(_la===SOQLParser.DISTANCE || _la===SOQLParser.GEOLOCATION) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public function_other(): Function_otherContext {
		let _localctx: Function_otherContext = new Function_otherContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, SOQLParser.RULE_function_other);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 256;
			_la = this._input.LA(1);
			if ( !(((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (SOQLParser.FORMAT - 73)) | (1 << (SOQLParser.TOLABEL - 73)) | (1 << (SOQLParser.CONVERT_TIME_ZONE - 73)) | (1 << (SOQLParser.CONVERT_CURRENCY - 73)) | (1 << (SOQLParser.GROUPING - 73)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public soql_query(): Soql_queryContext {
		let _localctx: Soql_queryContext = new Soql_queryContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, SOQLParser.RULE_soql_query);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			this.select_clause();
			this.state = 259;
			this.from_clause();
			this.state = 261;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.USING) {
				{
				this.state = 260;
				this.using_clause();
				}
			}

			this.state = 264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.WHERE) {
				{
				this.state = 263;
				this.where_clause();
				}
			}

			this.state = 267;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,8,this._ctx) ) {
			case 1:
				{
				this.state = 266;
				this.with_clause();
				}
				break;
			}
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.WITH) {
				{
				this.state = 269;
				this.with_security_enforced_clause();
				}
			}

			this.state = 276;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.GROUP) {
				{
				this.state = 272;
				this.groupby_clause();
				this.state = 274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===SOQLParser.HAVING) {
					{
					this.state = 273;
					this.having_clause();
					}
				}

				}
			}

			this.state = 279;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.ORDER) {
				{
				this.state = 278;
				this.orderby_clause();
				}
			}

			this.state = 282;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.LIMIT) {
				{
				this.state = 281;
				this.limit_clause();
				}
			}

			this.state = 285;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.OFFSET) {
				{
				this.state = 284;
				this.offset_clause();
				}
			}

			this.state = 288;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.FOR) {
				{
				this.state = 287;
				this.for_clause();
				}
			}

			this.state = 291;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.UPDATE) {
				{
				this.state = 290;
				this.update_clause();
				}
			}

			this.state = 293;
			this.match(SOQLParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public select_clause(): Select_clauseContext {
		let _localctx: Select_clauseContext = new Select_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, SOQLParser.RULE_select_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.match(SOQLParser.SELECT);
			this.state = 296;
			this.select_spec();
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SOQLParser.COMMA) {
				{
				{
				this.state = 297;
				this.match(SOQLParser.COMMA);
				this.state = 298;
				this.select_spec();
				}
				}
				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public from_clause(): From_clauseContext {
		let _localctx: From_clauseContext = new From_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, SOQLParser.RULE_from_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 304;
			this.match(SOQLParser.FROM);
			this.state = 305;
			this.object_spec();
			this.state = 310;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SOQLParser.COMMA) {
				{
				{
				this.state = 306;
				this.match(SOQLParser.COMMA);
				this.state = 307;
				this.object_spec();
				}
				}
				this.state = 312;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public using_clause(): Using_clauseContext {
		let _localctx: Using_clauseContext = new Using_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, SOQLParser.RULE_using_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 313;
			this.match(SOQLParser.USING);
			this.state = 314;
			this.match(SOQLParser.SCOPE);
			this.state = 315;
			this.filter_scope_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public where_clause(): Where_clauseContext {
		let _localctx: Where_clauseContext = new Where_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, SOQLParser.RULE_where_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 317;
			this.match(SOQLParser.WHERE);
			this.state = 318;
			this.condition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public groupby_clause(): Groupby_clauseContext {
		let _localctx: Groupby_clauseContext = new Groupby_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, SOQLParser.RULE_groupby_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this.match(SOQLParser.GROUP);
			this.state = 321;
			this.match(SOQLParser.BY);
			this.state = 325;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SOQLParser.ROLLUP:
				{
				this.state = 322;
				this.group_by_rollup_clause();
				}
				break;
			case SOQLParser.CUBE:
				{
				this.state = 323;
				this.group_by_cube_clause();
				}
				break;
			case SOQLParser.GROUP:
			case SOQLParser.ABOVE:
			case SOQLParser.ABOVE_OR_BELOW:
			case SOQLParser.AT:
			case SOQLParser.BELOW:
			case SOQLParser.CATEGORY:
			case SOQLParser.DATA:
			case SOQLParser.END:
			case SOQLParser.OFFSET:
			case SOQLParser.ORDER:
			case SOQLParser.REFERENCE:
			case SOQLParser.SCOPE:
			case SOQLParser.TRACKING:
			case SOQLParser.THEN:
			case SOQLParser.TYPEOF:
			case SOQLParser.VIEW:
			case SOQLParser.VIEWSTAT:
			case SOQLParser.WHEN:
			case SOQLParser.SECURITY_ENFORCED:
			case SOQLParser.CALENDAR_MONTH:
			case SOQLParser.CALENDAR_QUARTER:
			case SOQLParser.CALENDAR_YEAR:
			case SOQLParser.DAY_IN_MONTH:
			case SOQLParser.DAY_IN_WEEK:
			case SOQLParser.DAY_IN_YEAR:
			case SOQLParser.DAY_ONLY:
			case SOQLParser.FISCAL_MONTH:
			case SOQLParser.FISCAL_QUARTER:
			case SOQLParser.FISCAL_YEAR:
			case SOQLParser.HOUR_IN_DAY:
			case SOQLParser.WEEK_IN_MONTH:
			case SOQLParser.WEEK_IN_YEAR:
			case SOQLParser.AVG:
			case SOQLParser.COUNT:
			case SOQLParser.COUNT_DISTINCT:
			case SOQLParser.MIN:
			case SOQLParser.MAX:
			case SOQLParser.SUM:
			case SOQLParser.DISTANCE:
			case SOQLParser.GEOLOCATION:
			case SOQLParser.FORMAT:
			case SOQLParser.TOLABEL:
			case SOQLParser.CONVERT_TIME_ZONE:
			case SOQLParser.CONVERT_CURRENCY:
			case SOQLParser.GROUPING:
			case SOQLParser.YESTERDAY:
			case SOQLParser.TODAY:
			case SOQLParser.TOMORROW:
			case SOQLParser.LAST_WEEK:
			case SOQLParser.THIS_WEEK:
			case SOQLParser.NEXT_WEEK:
			case SOQLParser.LAST_MONTH:
			case SOQLParser.THIS_MONTH:
			case SOQLParser.NEXT_MONTH:
			case SOQLParser.LAST_90_DAYS:
			case SOQLParser.NEXT_90_DAYS:
			case SOQLParser.THIS_QUARTER:
			case SOQLParser.LAST_QUARTER:
			case SOQLParser.NEXT_QUARTER:
			case SOQLParser.THIS_YEAR:
			case SOQLParser.LAST_YEAR:
			case SOQLParser.NEXT_YEAR:
			case SOQLParser.THIS_FISCAL_QUARTER:
			case SOQLParser.LAST_FISCAL_QUARTER:
			case SOQLParser.NEXT_FISCAL_QUARTER:
			case SOQLParser.THIS_FISCAL_YEAR:
			case SOQLParser.LAST_FISCAL_YEAR:
			case SOQLParser.NEXT_FISCAL_YEAR:
			case SOQLParser.NEXT_N_DAYS:
			case SOQLParser.LAST_N_DAYS:
			case SOQLParser.N_DAYS_AGO:
			case SOQLParser.NEXT_N_WEEKS:
			case SOQLParser.LAST_N_WEEKS:
			case SOQLParser.N_WEEKS_AGO:
			case SOQLParser.NEXT_N_MONTHS:
			case SOQLParser.LAST_N_MONTHS:
			case SOQLParser.N_MONTHS_AGO:
			case SOQLParser.NEXT_N_QUARTERS:
			case SOQLParser.LAST_N_QUARTERS:
			case SOQLParser.N_QUARTERS_AGO:
			case SOQLParser.NEXT_N_YEARS:
			case SOQLParser.LAST_N_YEARS:
			case SOQLParser.N_YEARS_AGO:
			case SOQLParser.NEXT_N_FISCAL_QUARTERS:
			case SOQLParser.LAST_N_FISCAL_QUARTERS:
			case SOQLParser.N_FISCAL_QUARTERS_AGO:
			case SOQLParser.NEXT_N_FISCAL_YEARS:
			case SOQLParser.LAST_N_FISCAL_YEARS:
			case SOQLParser.N_FISCAL_YEARS_AGO:
			case SOQLParser.ID:
				{
				this.state = 324;
				this.group_by_plain_clause();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public having_clause(): Having_clauseContext {
		let _localctx: Having_clauseContext = new Having_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, SOQLParser.RULE_having_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 327;
			this.match(SOQLParser.HAVING);
			this.state = 328;
			this.condition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public orderby_clause(): Orderby_clauseContext {
		let _localctx: Orderby_clauseContext = new Orderby_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, SOQLParser.RULE_orderby_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this.match(SOQLParser.ORDER);
			this.state = 331;
			this.match(SOQLParser.BY);
			this.state = 332;
			this.order_by_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public limit_clause(): Limit_clauseContext {
		let _localctx: Limit_clauseContext = new Limit_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, SOQLParser.RULE_limit_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 334;
			this.match(SOQLParser.LIMIT);
			this.state = 335;
			this.match(SOQLParser.UNSIGNED_INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public offset_clause(): Offset_clauseContext {
		let _localctx: Offset_clauseContext = new Offset_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, SOQLParser.RULE_offset_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 337;
			this.match(SOQLParser.OFFSET);
			this.state = 338;
			this.match(SOQLParser.UNSIGNED_INTEGER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public for_clause(): For_clauseContext {
		let _localctx: For_clauseContext = new For_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, SOQLParser.RULE_for_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 340;
			this.match(SOQLParser.FOR);
			this.state = 341;
			this.for_value();
			this.state = 344;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,20,this._ctx) ) {
			case 1:
				{
				this.state = 342;
				this.match(SOQLParser.COMMA);
				this.state = 343;
				this.for_value();
				}
				break;
			}
			this.state = 348;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.COMMA) {
				{
				this.state = 346;
				this.match(SOQLParser.COMMA);
				this.state = 347;
				this.for_value();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public update_clause(): Update_clauseContext {
		let _localctx: Update_clauseContext = new Update_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, SOQLParser.RULE_update_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 350;
			this.match(SOQLParser.UPDATE);
			this.state = 351;
			this.update_value();
			this.state = 354;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.COMMA) {
				{
				this.state = 352;
				this.match(SOQLParser.COMMA);
				this.state = 353;
				this.update_value();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public soql_subquery(): Soql_subqueryContext {
		let _localctx: Soql_subqueryContext = new Soql_subqueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, SOQLParser.RULE_soql_subquery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 356;
			this.match(SOQLParser.LPAREN);
			this.state = 357;
			this.subquery_select_clause();
			this.state = 358;
			this.from_clause();
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.USING) {
				{
				this.state = 359;
				this.using_clause();
				}
			}

			this.state = 363;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.WHERE) {
				{
				this.state = 362;
				this.where_clause();
				}
			}

			this.state = 366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.WITH) {
				{
				this.state = 365;
				this.with_clause();
				}
			}

			this.state = 369;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.ORDER) {
				{
				this.state = 368;
				this.orderby_clause();
				}
			}

			this.state = 372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.LIMIT) {
				{
				this.state = 371;
				this.limit_clause();
				}
			}

			this.state = 375;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.OFFSET) {
				{
				this.state = 374;
				this.offset_clause();
				}
			}

			this.state = 378;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.FOR) {
				{
				this.state = 377;
				this.for_clause();
				}
			}

			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.UPDATE) {
				{
				this.state = 380;
				this.update_clause();
				}
			}

			this.state = 383;
			this.match(SOQLParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public subquery_select_clause(): Subquery_select_clauseContext {
		let _localctx: Subquery_select_clauseContext = new Subquery_select_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, SOQLParser.RULE_subquery_select_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 385;
			this.match(SOQLParser.SELECT);
			this.state = 386;
			this.subquery_select_spec();
			this.state = 391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SOQLParser.COMMA) {
				{
				{
				this.state = 387;
				this.match(SOQLParser.COMMA);
				this.state = 388;
				this.subquery_select_spec();
				}
				}
				this.state = 393;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public select_spec(): Select_specContext {
		let _localctx: Select_specContext = new Select_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, SOQLParser.RULE_select_spec);
		try {
			this.state = 398;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,32,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 394;
				this.field_spec();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 395;
				this.function_call_spec();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 396;
				this.soql_subquery();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 397;
				this.typeof_spec();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public subquery_select_spec(): Subquery_select_specContext {
		let _localctx: Subquery_select_specContext = new Subquery_select_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, SOQLParser.RULE_subquery_select_spec);
		try {
			this.state = 402;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,33,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 400;
				this.field_spec();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 401;
				this.function_call_spec();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public field_spec(): Field_specContext {
		let _localctx: Field_specContext = new Field_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, SOQLParser.RULE_field_spec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 404;
			this.field();
			this.state = 406;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.AS || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SOQLParser.ABOVE - 34)) | (1 << (SOQLParser.ABOVE_OR_BELOW - 34)) | (1 << (SOQLParser.AT - 34)) | (1 << (SOQLParser.BELOW - 34)) | (1 << (SOQLParser.CATEGORY - 34)) | (1 << (SOQLParser.DATA - 34)) | (1 << (SOQLParser.END - 34)) | (1 << (SOQLParser.OFFSET - 34)) | (1 << (SOQLParser.ORDER - 34)) | (1 << (SOQLParser.REFERENCE - 34)) | (1 << (SOQLParser.SCOPE - 34)) | (1 << (SOQLParser.TRACKING - 34)) | (1 << (SOQLParser.THEN - 34)) | (1 << (SOQLParser.TYPEOF - 34)) | (1 << (SOQLParser.VIEW - 34)) | (1 << (SOQLParser.VIEWSTAT - 34)) | (1 << (SOQLParser.WHEN - 34)) | (1 << (SOQLParser.SECURITY_ENFORCED - 34)) | (1 << (SOQLParser.CALENDAR_MONTH - 34)) | (1 << (SOQLParser.CALENDAR_QUARTER - 34)) | (1 << (SOQLParser.CALENDAR_YEAR - 34)) | (1 << (SOQLParser.DAY_IN_MONTH - 34)) | (1 << (SOQLParser.DAY_IN_WEEK - 34)) | (1 << (SOQLParser.DAY_IN_YEAR - 34)) | (1 << (SOQLParser.DAY_ONLY - 34)) | (1 << (SOQLParser.FISCAL_MONTH - 34)) | (1 << (SOQLParser.FISCAL_QUARTER - 34)) | (1 << (SOQLParser.FISCAL_YEAR - 34)) | (1 << (SOQLParser.HOUR_IN_DAY - 34)) | (1 << (SOQLParser.WEEK_IN_MONTH - 34)) | (1 << (SOQLParser.WEEK_IN_YEAR - 34)) | (1 << (SOQLParser.AVG - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SOQLParser.COUNT - 66)) | (1 << (SOQLParser.COUNT_DISTINCT - 66)) | (1 << (SOQLParser.MIN - 66)) | (1 << (SOQLParser.MAX - 66)) | (1 << (SOQLParser.SUM - 66)) | (1 << (SOQLParser.DISTANCE - 66)) | (1 << (SOQLParser.GEOLOCATION - 66)) | (1 << (SOQLParser.FORMAT - 66)) | (1 << (SOQLParser.TOLABEL - 66)) | (1 << (SOQLParser.CONVERT_TIME_ZONE - 66)) | (1 << (SOQLParser.CONVERT_CURRENCY - 66)) | (1 << (SOQLParser.GROUPING - 66)) | (1 << (SOQLParser.YESTERDAY - 66)) | (1 << (SOQLParser.TODAY - 66)) | (1 << (SOQLParser.TOMORROW - 66)) | (1 << (SOQLParser.LAST_WEEK - 66)) | (1 << (SOQLParser.THIS_WEEK - 66)) | (1 << (SOQLParser.NEXT_WEEK - 66)) | (1 << (SOQLParser.LAST_MONTH - 66)) | (1 << (SOQLParser.THIS_MONTH - 66)) | (1 << (SOQLParser.NEXT_MONTH - 66)) | (1 << (SOQLParser.LAST_90_DAYS - 66)) | (1 << (SOQLParser.NEXT_90_DAYS - 66)) | (1 << (SOQLParser.THIS_QUARTER - 66)) | (1 << (SOQLParser.LAST_QUARTER - 66)) | (1 << (SOQLParser.NEXT_QUARTER - 66)) | (1 << (SOQLParser.THIS_YEAR - 66)) | (1 << (SOQLParser.LAST_YEAR - 66)) | (1 << (SOQLParser.NEXT_YEAR - 66)) | (1 << (SOQLParser.THIS_FISCAL_QUARTER - 66)) | (1 << (SOQLParser.LAST_FISCAL_QUARTER - 66)) | (1 << (SOQLParser.NEXT_FISCAL_QUARTER - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (SOQLParser.THIS_FISCAL_YEAR - 98)) | (1 << (SOQLParser.LAST_FISCAL_YEAR - 98)) | (1 << (SOQLParser.NEXT_FISCAL_YEAR - 98)) | (1 << (SOQLParser.NEXT_N_DAYS - 98)) | (1 << (SOQLParser.LAST_N_DAYS - 98)) | (1 << (SOQLParser.N_DAYS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_WEEKS - 98)) | (1 << (SOQLParser.LAST_N_WEEKS - 98)) | (1 << (SOQLParser.N_WEEKS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_MONTHS - 98)) | (1 << (SOQLParser.LAST_N_MONTHS - 98)) | (1 << (SOQLParser.N_MONTHS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_QUARTERS - 98)) | (1 << (SOQLParser.LAST_N_QUARTERS - 98)) | (1 << (SOQLParser.N_QUARTERS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_YEARS - 98)) | (1 << (SOQLParser.LAST_N_YEARS - 98)) | (1 << (SOQLParser.N_YEARS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_FISCAL_QUARTERS - 98)) | (1 << (SOQLParser.LAST_N_FISCAL_QUARTERS - 98)) | (1 << (SOQLParser.N_FISCAL_QUARTERS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_FISCAL_YEARS - 98)) | (1 << (SOQLParser.LAST_N_FISCAL_YEARS - 98)) | (1 << (SOQLParser.N_FISCAL_YEARS_AGO - 98)))) !== 0) || _la===SOQLParser.ID) {
				{
				this.state = 405;
				this.alias();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public function_call_spec(): Function_call_specContext {
		let _localctx: Function_call_specContext = new Function_call_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, SOQLParser.RULE_function_call_spec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 408;
			this.function_call();
			this.state = 410;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.AS || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SOQLParser.ABOVE - 34)) | (1 << (SOQLParser.ABOVE_OR_BELOW - 34)) | (1 << (SOQLParser.AT - 34)) | (1 << (SOQLParser.BELOW - 34)) | (1 << (SOQLParser.CATEGORY - 34)) | (1 << (SOQLParser.DATA - 34)) | (1 << (SOQLParser.END - 34)) | (1 << (SOQLParser.OFFSET - 34)) | (1 << (SOQLParser.ORDER - 34)) | (1 << (SOQLParser.REFERENCE - 34)) | (1 << (SOQLParser.SCOPE - 34)) | (1 << (SOQLParser.TRACKING - 34)) | (1 << (SOQLParser.THEN - 34)) | (1 << (SOQLParser.TYPEOF - 34)) | (1 << (SOQLParser.VIEW - 34)) | (1 << (SOQLParser.VIEWSTAT - 34)) | (1 << (SOQLParser.WHEN - 34)) | (1 << (SOQLParser.SECURITY_ENFORCED - 34)) | (1 << (SOQLParser.CALENDAR_MONTH - 34)) | (1 << (SOQLParser.CALENDAR_QUARTER - 34)) | (1 << (SOQLParser.CALENDAR_YEAR - 34)) | (1 << (SOQLParser.DAY_IN_MONTH - 34)) | (1 << (SOQLParser.DAY_IN_WEEK - 34)) | (1 << (SOQLParser.DAY_IN_YEAR - 34)) | (1 << (SOQLParser.DAY_ONLY - 34)) | (1 << (SOQLParser.FISCAL_MONTH - 34)) | (1 << (SOQLParser.FISCAL_QUARTER - 34)) | (1 << (SOQLParser.FISCAL_YEAR - 34)) | (1 << (SOQLParser.HOUR_IN_DAY - 34)) | (1 << (SOQLParser.WEEK_IN_MONTH - 34)) | (1 << (SOQLParser.WEEK_IN_YEAR - 34)) | (1 << (SOQLParser.AVG - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SOQLParser.COUNT - 66)) | (1 << (SOQLParser.COUNT_DISTINCT - 66)) | (1 << (SOQLParser.MIN - 66)) | (1 << (SOQLParser.MAX - 66)) | (1 << (SOQLParser.SUM - 66)) | (1 << (SOQLParser.DISTANCE - 66)) | (1 << (SOQLParser.GEOLOCATION - 66)) | (1 << (SOQLParser.FORMAT - 66)) | (1 << (SOQLParser.TOLABEL - 66)) | (1 << (SOQLParser.CONVERT_TIME_ZONE - 66)) | (1 << (SOQLParser.CONVERT_CURRENCY - 66)) | (1 << (SOQLParser.GROUPING - 66)) | (1 << (SOQLParser.YESTERDAY - 66)) | (1 << (SOQLParser.TODAY - 66)) | (1 << (SOQLParser.TOMORROW - 66)) | (1 << (SOQLParser.LAST_WEEK - 66)) | (1 << (SOQLParser.THIS_WEEK - 66)) | (1 << (SOQLParser.NEXT_WEEK - 66)) | (1 << (SOQLParser.LAST_MONTH - 66)) | (1 << (SOQLParser.THIS_MONTH - 66)) | (1 << (SOQLParser.NEXT_MONTH - 66)) | (1 << (SOQLParser.LAST_90_DAYS - 66)) | (1 << (SOQLParser.NEXT_90_DAYS - 66)) | (1 << (SOQLParser.THIS_QUARTER - 66)) | (1 << (SOQLParser.LAST_QUARTER - 66)) | (1 << (SOQLParser.NEXT_QUARTER - 66)) | (1 << (SOQLParser.THIS_YEAR - 66)) | (1 << (SOQLParser.LAST_YEAR - 66)) | (1 << (SOQLParser.NEXT_YEAR - 66)) | (1 << (SOQLParser.THIS_FISCAL_QUARTER - 66)) | (1 << (SOQLParser.LAST_FISCAL_QUARTER - 66)) | (1 << (SOQLParser.NEXT_FISCAL_QUARTER - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (SOQLParser.THIS_FISCAL_YEAR - 98)) | (1 << (SOQLParser.LAST_FISCAL_YEAR - 98)) | (1 << (SOQLParser.NEXT_FISCAL_YEAR - 98)) | (1 << (SOQLParser.NEXT_N_DAYS - 98)) | (1 << (SOQLParser.LAST_N_DAYS - 98)) | (1 << (SOQLParser.N_DAYS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_WEEKS - 98)) | (1 << (SOQLParser.LAST_N_WEEKS - 98)) | (1 << (SOQLParser.N_WEEKS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_MONTHS - 98)) | (1 << (SOQLParser.LAST_N_MONTHS - 98)) | (1 << (SOQLParser.N_MONTHS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_QUARTERS - 98)) | (1 << (SOQLParser.LAST_N_QUARTERS - 98)) | (1 << (SOQLParser.N_QUARTERS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_YEARS - 98)) | (1 << (SOQLParser.LAST_N_YEARS - 98)) | (1 << (SOQLParser.N_YEARS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_FISCAL_QUARTERS - 98)) | (1 << (SOQLParser.LAST_N_FISCAL_QUARTERS - 98)) | (1 << (SOQLParser.N_FISCAL_QUARTERS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_FISCAL_YEARS - 98)) | (1 << (SOQLParser.LAST_N_FISCAL_YEARS - 98)) | (1 << (SOQLParser.N_FISCAL_YEARS_AGO - 98)))) !== 0) || _la===SOQLParser.ID) {
				{
				this.state = 409;
				this.alias();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public field(): FieldContext {
		let _localctx: FieldContext = new FieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, SOQLParser.RULE_field);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,36,this._ctx) ) {
			case 1:
				{
				this.state = 412;
				this.object_prefix();
				}
				break;
			}
			this.state = 415;
			this.field_name();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public function_call(): Function_callContext {
		let _localctx: Function_callContext = new Function_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, SOQLParser.RULE_function_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.function_name();
			this.state = 418;
			this.match(SOQLParser.LPAREN);
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SOQLParser.STRING_VALUE) | (1 << SOQLParser.FALSE) | (1 << SOQLParser.GROUP) | (1 << SOQLParser.NULL) | (1 << SOQLParser.TRUE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SOQLParser.ABOVE - 34)) | (1 << (SOQLParser.ABOVE_OR_BELOW - 34)) | (1 << (SOQLParser.AT - 34)) | (1 << (SOQLParser.BELOW - 34)) | (1 << (SOQLParser.CATEGORY - 34)) | (1 << (SOQLParser.DATA - 34)) | (1 << (SOQLParser.END - 34)) | (1 << (SOQLParser.OFFSET - 34)) | (1 << (SOQLParser.ORDER - 34)) | (1 << (SOQLParser.REFERENCE - 34)) | (1 << (SOQLParser.SCOPE - 34)) | (1 << (SOQLParser.TRACKING - 34)) | (1 << (SOQLParser.THEN - 34)) | (1 << (SOQLParser.TYPEOF - 34)) | (1 << (SOQLParser.VIEW - 34)) | (1 << (SOQLParser.VIEWSTAT - 34)) | (1 << (SOQLParser.WHEN - 34)) | (1 << (SOQLParser.SECURITY_ENFORCED - 34)) | (1 << (SOQLParser.CALENDAR_MONTH - 34)) | (1 << (SOQLParser.CALENDAR_QUARTER - 34)) | (1 << (SOQLParser.CALENDAR_YEAR - 34)) | (1 << (SOQLParser.DAY_IN_MONTH - 34)) | (1 << (SOQLParser.DAY_IN_WEEK - 34)) | (1 << (SOQLParser.DAY_IN_YEAR - 34)) | (1 << (SOQLParser.DAY_ONLY - 34)) | (1 << (SOQLParser.FISCAL_MONTH - 34)) | (1 << (SOQLParser.FISCAL_QUARTER - 34)) | (1 << (SOQLParser.FISCAL_YEAR - 34)) | (1 << (SOQLParser.HOUR_IN_DAY - 34)) | (1 << (SOQLParser.WEEK_IN_MONTH - 34)) | (1 << (SOQLParser.WEEK_IN_YEAR - 34)) | (1 << (SOQLParser.AVG - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SOQLParser.COUNT - 66)) | (1 << (SOQLParser.COUNT_DISTINCT - 66)) | (1 << (SOQLParser.MIN - 66)) | (1 << (SOQLParser.MAX - 66)) | (1 << (SOQLParser.SUM - 66)) | (1 << (SOQLParser.DISTANCE - 66)) | (1 << (SOQLParser.GEOLOCATION - 66)) | (1 << (SOQLParser.FORMAT - 66)) | (1 << (SOQLParser.TOLABEL - 66)) | (1 << (SOQLParser.CONVERT_TIME_ZONE - 66)) | (1 << (SOQLParser.CONVERT_CURRENCY - 66)) | (1 << (SOQLParser.GROUPING - 66)) | (1 << (SOQLParser.YESTERDAY - 66)) | (1 << (SOQLParser.TODAY - 66)) | (1 << (SOQLParser.TOMORROW - 66)) | (1 << (SOQLParser.LAST_WEEK - 66)) | (1 << (SOQLParser.THIS_WEEK - 66)) | (1 << (SOQLParser.NEXT_WEEK - 66)) | (1 << (SOQLParser.LAST_MONTH - 66)) | (1 << (SOQLParser.THIS_MONTH - 66)) | (1 << (SOQLParser.NEXT_MONTH - 66)) | (1 << (SOQLParser.LAST_90_DAYS - 66)) | (1 << (SOQLParser.NEXT_90_DAYS - 66)) | (1 << (SOQLParser.THIS_QUARTER - 66)) | (1 << (SOQLParser.LAST_QUARTER - 66)) | (1 << (SOQLParser.NEXT_QUARTER - 66)) | (1 << (SOQLParser.THIS_YEAR - 66)) | (1 << (SOQLParser.LAST_YEAR - 66)) | (1 << (SOQLParser.NEXT_YEAR - 66)) | (1 << (SOQLParser.THIS_FISCAL_QUARTER - 66)) | (1 << (SOQLParser.LAST_FISCAL_QUARTER - 66)) | (1 << (SOQLParser.NEXT_FISCAL_QUARTER - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (SOQLParser.THIS_FISCAL_YEAR - 98)) | (1 << (SOQLParser.LAST_FISCAL_YEAR - 98)) | (1 << (SOQLParser.NEXT_FISCAL_YEAR - 98)) | (1 << (SOQLParser.NEXT_N_DAYS - 98)) | (1 << (SOQLParser.LAST_N_DAYS - 98)) | (1 << (SOQLParser.N_DAYS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_WEEKS - 98)) | (1 << (SOQLParser.LAST_N_WEEKS - 98)) | (1 << (SOQLParser.N_WEEKS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_MONTHS - 98)) | (1 << (SOQLParser.LAST_N_MONTHS - 98)) | (1 << (SOQLParser.N_MONTHS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_QUARTERS - 98)) | (1 << (SOQLParser.LAST_N_QUARTERS - 98)) | (1 << (SOQLParser.N_QUARTERS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_YEARS - 98)) | (1 << (SOQLParser.LAST_N_YEARS - 98)) | (1 << (SOQLParser.N_YEARS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_FISCAL_QUARTERS - 98)) | (1 << (SOQLParser.LAST_N_FISCAL_QUARTERS - 98)) | (1 << (SOQLParser.N_FISCAL_QUARTERS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_FISCAL_YEARS - 98)) | (1 << (SOQLParser.LAST_N_FISCAL_YEARS - 98)) | (1 << (SOQLParser.N_FISCAL_YEARS_AGO - 98)))) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & ((1 << (SOQLParser.ID - 137)) | (1 << (SOQLParser.DATE - 137)) | (1 << (SOQLParser.DATETIME - 137)) | (1 << (SOQLParser.UNSIGNED_INTEGER - 137)) | (1 << (SOQLParser.REAL_NUMBER - 137)) | (1 << (SOQLParser.SIGNED_INTEGER - 137)))) !== 0)) {
				{
				this.state = 419;
				this.function_parameter_list();
				}
			}

			this.state = 422;
			this.match(SOQLParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public function_parameter_list(): Function_parameter_listContext {
		let _localctx: Function_parameter_listContext = new Function_parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, SOQLParser.RULE_function_parameter_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 424;
			this.function_parameter();
			this.state = 429;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SOQLParser.COMMA) {
				{
				{
				this.state = 425;
				this.match(SOQLParser.COMMA);
				this.state = 426;
				this.function_parameter();
				}
				}
				this.state = 431;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public function_parameter(): Function_parameterContext {
		let _localctx: Function_parameterContext = new Function_parameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, SOQLParser.RULE_function_parameter);
		try {
			this.state = 435;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,39,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 432;
				this.field();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 433;
				this.literal();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 434;
				this.function_call();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeof_spec(): Typeof_specContext {
		let _localctx: Typeof_specContext = new Typeof_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, SOQLParser.RULE_typeof_spec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			this.match(SOQLParser.TYPEOF);
			this.state = 438;
			this.field();
			this.state = 439;
			this.typeof_when_then_clause_list();
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.ELSE) {
				{
				this.state = 440;
				this.typeof_else_clause();
				}
			}

			this.state = 443;
			this.match(SOQLParser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeof_when_then_clause_list(): Typeof_when_then_clause_listContext {
		let _localctx: Typeof_when_then_clause_listContext = new Typeof_when_then_clause_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, SOQLParser.RULE_typeof_when_then_clause_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 445;
				this.typeof_when_then_clause();
				}
				}
				this.state = 448; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( _la===SOQLParser.WHEN );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeof_when_then_clause(): Typeof_when_then_clauseContext {
		let _localctx: Typeof_when_then_clauseContext = new Typeof_when_then_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, SOQLParser.RULE_typeof_when_then_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this.match(SOQLParser.WHEN);
			this.state = 451;
			this.object_name();
			this.state = 452;
			this.typeof_then_clause();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeof_then_clause(): Typeof_then_clauseContext {
		let _localctx: Typeof_then_clauseContext = new Typeof_then_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, SOQLParser.RULE_typeof_then_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this.match(SOQLParser.THEN);
			this.state = 455;
			this.field_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public typeof_else_clause(): Typeof_else_clauseContext {
		let _localctx: Typeof_else_clauseContext = new Typeof_else_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, SOQLParser.RULE_typeof_else_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this.match(SOQLParser.ELSE);
			this.state = 458;
			this.field_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public field_list(): Field_listContext {
		let _localctx: Field_listContext = new Field_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, SOQLParser.RULE_field_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.field();
			this.state = 465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SOQLParser.COMMA) {
				{
				{
				this.state = 461;
				this.match(SOQLParser.COMMA);
				this.state = 462;
				this.field();
				}
				}
				this.state = 467;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public object_spec(): Object_specContext {
		let _localctx: Object_specContext = new Object_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, SOQLParser.RULE_object_spec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,43,this._ctx) ) {
			case 1:
				{
				this.state = 468;
				this.object_prefix();
				}
				break;
			}
			this.state = 471;
			this.object_name();
			this.state = 473;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,44,this._ctx) ) {
			case 1:
				{
				this.state = 472;
				this.alias();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public object_prefix(): Object_prefixContext {
		let _localctx: Object_prefixContext = new Object_prefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, SOQLParser.RULE_object_prefix);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 478; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 475;
					this.object_name();
					this.state = 476;
					this.match(SOQLParser.DOT);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 480; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,45,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public comparison_operator(): Comparison_operatorContext {
		let _localctx: Comparison_operatorContext = new Comparison_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, SOQLParser.RULE_comparison_operator);
		try {
			this.state = 492;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,46,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 482;
				this.match(SOQLParser.EQ);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 483;
				this.match(SOQLParser.NOT_EQ);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 484;
				this.match(SOQLParser.LET);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 485;
				this.match(SOQLParser.GET);
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 486;
				this.match(SOQLParser.GTH);
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 487;
				this.match(SOQLParser.LTH);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 488;
				this.match(SOQLParser.GTH);
				this.state = 489;
				this.match(SOQLParser.EQ);
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 490;
				this.match(SOQLParser.LTH);
				this.state = 491;
				this.match(SOQLParser.EQ);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public set_operator(): Set_operatorContext {
		let _localctx: Set_operatorContext = new Set_operatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, SOQLParser.RULE_set_operator);
		try {
			this.state = 499;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SOQLParser.IN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 494;
				this.match(SOQLParser.IN);
				}
				break;
			case SOQLParser.NOT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 495;
				this.match(SOQLParser.NOT);
				this.state = 496;
				this.match(SOQLParser.IN);
				}
				break;
			case SOQLParser.INCLUDES:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 497;
				this.match(SOQLParser.INCLUDES);
				}
				break;
			case SOQLParser.EXCLUDES:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 498;
				this.match(SOQLParser.EXCLUDES);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, SOQLParser.RULE_condition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 501;
			this.condition1();
			this.state = 506;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SOQLParser.AND || _la===SOQLParser.OR) {
				{
				{
				this.state = 502;
				_la = this._input.LA(1);
				if ( !(_la===SOQLParser.AND || _la===SOQLParser.OR) ) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 503;
				this.condition1();
				}
				}
				this.state = 508;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public condition1(): Condition1Context {
		let _localctx: Condition1Context = new Condition1Context(this._ctx, this.state);
		this.enterRule(_localctx, 118, SOQLParser.RULE_condition1);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.NOT) {
				{
				this.state = 509;
				this.match(SOQLParser.NOT);
				}
			}

			this.state = 514;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SOQLParser.GROUP:
			case SOQLParser.ABOVE:
			case SOQLParser.ABOVE_OR_BELOW:
			case SOQLParser.AT:
			case SOQLParser.BELOW:
			case SOQLParser.CATEGORY:
			case SOQLParser.DATA:
			case SOQLParser.END:
			case SOQLParser.OFFSET:
			case SOQLParser.ORDER:
			case SOQLParser.REFERENCE:
			case SOQLParser.SCOPE:
			case SOQLParser.TRACKING:
			case SOQLParser.THEN:
			case SOQLParser.TYPEOF:
			case SOQLParser.VIEW:
			case SOQLParser.VIEWSTAT:
			case SOQLParser.WHEN:
			case SOQLParser.SECURITY_ENFORCED:
			case SOQLParser.CALENDAR_MONTH:
			case SOQLParser.CALENDAR_QUARTER:
			case SOQLParser.CALENDAR_YEAR:
			case SOQLParser.DAY_IN_MONTH:
			case SOQLParser.DAY_IN_WEEK:
			case SOQLParser.DAY_IN_YEAR:
			case SOQLParser.DAY_ONLY:
			case SOQLParser.FISCAL_MONTH:
			case SOQLParser.FISCAL_QUARTER:
			case SOQLParser.FISCAL_YEAR:
			case SOQLParser.HOUR_IN_DAY:
			case SOQLParser.WEEK_IN_MONTH:
			case SOQLParser.WEEK_IN_YEAR:
			case SOQLParser.AVG:
			case SOQLParser.COUNT:
			case SOQLParser.COUNT_DISTINCT:
			case SOQLParser.MIN:
			case SOQLParser.MAX:
			case SOQLParser.SUM:
			case SOQLParser.DISTANCE:
			case SOQLParser.GEOLOCATION:
			case SOQLParser.FORMAT:
			case SOQLParser.TOLABEL:
			case SOQLParser.CONVERT_TIME_ZONE:
			case SOQLParser.CONVERT_CURRENCY:
			case SOQLParser.GROUPING:
			case SOQLParser.YESTERDAY:
			case SOQLParser.TODAY:
			case SOQLParser.TOMORROW:
			case SOQLParser.LAST_WEEK:
			case SOQLParser.THIS_WEEK:
			case SOQLParser.NEXT_WEEK:
			case SOQLParser.LAST_MONTH:
			case SOQLParser.THIS_MONTH:
			case SOQLParser.NEXT_MONTH:
			case SOQLParser.LAST_90_DAYS:
			case SOQLParser.NEXT_90_DAYS:
			case SOQLParser.THIS_QUARTER:
			case SOQLParser.LAST_QUARTER:
			case SOQLParser.NEXT_QUARTER:
			case SOQLParser.THIS_YEAR:
			case SOQLParser.LAST_YEAR:
			case SOQLParser.NEXT_YEAR:
			case SOQLParser.THIS_FISCAL_QUARTER:
			case SOQLParser.LAST_FISCAL_QUARTER:
			case SOQLParser.NEXT_FISCAL_QUARTER:
			case SOQLParser.THIS_FISCAL_YEAR:
			case SOQLParser.LAST_FISCAL_YEAR:
			case SOQLParser.NEXT_FISCAL_YEAR:
			case SOQLParser.NEXT_N_DAYS:
			case SOQLParser.LAST_N_DAYS:
			case SOQLParser.N_DAYS_AGO:
			case SOQLParser.NEXT_N_WEEKS:
			case SOQLParser.LAST_N_WEEKS:
			case SOQLParser.N_WEEKS_AGO:
			case SOQLParser.NEXT_N_MONTHS:
			case SOQLParser.LAST_N_MONTHS:
			case SOQLParser.N_MONTHS_AGO:
			case SOQLParser.NEXT_N_QUARTERS:
			case SOQLParser.LAST_N_QUARTERS:
			case SOQLParser.N_QUARTERS_AGO:
			case SOQLParser.NEXT_N_YEARS:
			case SOQLParser.LAST_N_YEARS:
			case SOQLParser.N_YEARS_AGO:
			case SOQLParser.NEXT_N_FISCAL_QUARTERS:
			case SOQLParser.LAST_N_FISCAL_QUARTERS:
			case SOQLParser.N_FISCAL_QUARTERS_AGO:
			case SOQLParser.NEXT_N_FISCAL_YEARS:
			case SOQLParser.LAST_N_FISCAL_YEARS:
			case SOQLParser.N_FISCAL_YEARS_AGO:
			case SOQLParser.ID:
				{
				this.state = 512;
				this.simple_condition();
				}
				break;
			case SOQLParser.LPAREN:
				{
				this.state = 513;
				this.parenthesis();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public parenthesis(): ParenthesisContext {
		let _localctx: ParenthesisContext = new ParenthesisContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, SOQLParser.RULE_parenthesis);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			this.match(SOQLParser.LPAREN);
			this.state = 517;
			this.condition();
			this.state = 518;
			this.match(SOQLParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public simple_condition(): Simple_conditionContext {
		let _localctx: Simple_conditionContext = new Simple_conditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, SOQLParser.RULE_simple_condition);
		try {
			this.state = 523;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,51,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 520;
				this.field_based_condition();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 521;
				this.set_based_condition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 522;
				this.like_based_condition();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public field_based_condition(): Field_based_conditionContext {
		let _localctx: Field_based_conditionContext = new Field_based_conditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, SOQLParser.RULE_field_based_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 525;
			this.condition_field();
			this.state = 526;
			this.comparison_operator();
			this.state = 527;
			this.literal();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public set_based_condition(): Set_based_conditionContext {
		let _localctx: Set_based_conditionContext = new Set_based_conditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, SOQLParser.RULE_set_based_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 529;
			this.condition_field();
			this.state = 530;
			this.set_operator();
			this.state = 533;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,52,this._ctx) ) {
			case 1:
				{
				this.state = 531;
				this.soql_subquery();
				}
				break;

			case 2:
				{
				this.state = 532;
				this.set_values();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public like_based_condition(): Like_based_conditionContext {
		let _localctx: Like_based_conditionContext = new Like_based_conditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, SOQLParser.RULE_like_based_condition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 535;
			this.condition_field();
			this.state = 536;
			this.match(SOQLParser.LIKE);
			this.state = 537;
			_la = this._input.LA(1);
			if ( !(_la===SOQLParser.STRING_VALUE || _la===SOQLParser.LIKE_STRING_VALUE) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public condition_field(): Condition_fieldContext {
		let _localctx: Condition_fieldContext = new Condition_fieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, SOQLParser.RULE_condition_field);
		try {
			this.state = 541;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,53,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 539;
				this.field();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 540;
				this.function_call();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public set_values(): Set_valuesContext {
		let _localctx: Set_valuesContext = new Set_valuesContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, SOQLParser.RULE_set_values);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			this.match(SOQLParser.LPAREN);
			this.state = 544;
			this.set_value_list();
			this.state = 545;
			this.match(SOQLParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public set_value_list(): Set_value_listContext {
		let _localctx: Set_value_listContext = new Set_value_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, SOQLParser.RULE_set_value_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 547;
			this.literal();
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SOQLParser.COMMA) {
				{
				{
				this.state = 548;
				this.match(SOQLParser.COMMA);
				this.state = 549;
				this.literal();
				}
				}
				this.state = 554;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public with_clause(): With_clauseContext {
		let _localctx: With_clauseContext = new With_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, SOQLParser.RULE_with_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 555;
			this.match(SOQLParser.WITH);
			this.state = 558;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,55,this._ctx) ) {
			case 1:
				{
				this.state = 556;
				this.with_plain_clause();
				}
				break;

			case 2:
				{
				this.state = 557;
				this.with_data_category_clause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public with_plain_clause(): With_plain_clauseContext {
		let _localctx: With_plain_clauseContext = new With_plain_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, SOQLParser.RULE_with_plain_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 560;
			this.field_based_condition();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public with_data_category_clause(): With_data_category_clauseContext {
		let _localctx: With_data_category_clauseContext = new With_data_category_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, SOQLParser.RULE_with_data_category_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 562;
			this.match(SOQLParser.DATA);
			this.state = 563;
			this.match(SOQLParser.CATEGORY);
			this.state = 564;
			this.data_category_spec_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public data_category_spec_list(): Data_category_spec_listContext {
		let _localctx: Data_category_spec_listContext = new Data_category_spec_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, SOQLParser.RULE_data_category_spec_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 566;
			this.data_category_spec();
			this.state = 571;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SOQLParser.AND) {
				{
				{
				this.state = 567;
				this.match(SOQLParser.AND);
				this.state = 568;
				this.data_category_spec();
				}
				}
				this.state = 573;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public data_category_spec(): Data_category_specContext {
		let _localctx: Data_category_specContext = new Data_category_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, SOQLParser.RULE_data_category_spec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 574;
			this.data_category_group_name();
			this.state = 575;
			this.data_category_selector();
			this.state = 576;
			this.data_category_parameter_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public data_category_parameter_list(): Data_category_parameter_listContext {
		let _localctx: Data_category_parameter_listContext = new Data_category_parameter_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, SOQLParser.RULE_data_category_parameter_list);
		let _la: number;
		try {
			this.state = 590;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case SOQLParser.GROUP:
			case SOQLParser.ABOVE:
			case SOQLParser.ABOVE_OR_BELOW:
			case SOQLParser.AT:
			case SOQLParser.BELOW:
			case SOQLParser.CATEGORY:
			case SOQLParser.DATA:
			case SOQLParser.END:
			case SOQLParser.OFFSET:
			case SOQLParser.ORDER:
			case SOQLParser.REFERENCE:
			case SOQLParser.SCOPE:
			case SOQLParser.TRACKING:
			case SOQLParser.THEN:
			case SOQLParser.TYPEOF:
			case SOQLParser.VIEW:
			case SOQLParser.VIEWSTAT:
			case SOQLParser.WHEN:
			case SOQLParser.SECURITY_ENFORCED:
			case SOQLParser.CALENDAR_MONTH:
			case SOQLParser.CALENDAR_QUARTER:
			case SOQLParser.CALENDAR_YEAR:
			case SOQLParser.DAY_IN_MONTH:
			case SOQLParser.DAY_IN_WEEK:
			case SOQLParser.DAY_IN_YEAR:
			case SOQLParser.DAY_ONLY:
			case SOQLParser.FISCAL_MONTH:
			case SOQLParser.FISCAL_QUARTER:
			case SOQLParser.FISCAL_YEAR:
			case SOQLParser.HOUR_IN_DAY:
			case SOQLParser.WEEK_IN_MONTH:
			case SOQLParser.WEEK_IN_YEAR:
			case SOQLParser.AVG:
			case SOQLParser.COUNT:
			case SOQLParser.COUNT_DISTINCT:
			case SOQLParser.MIN:
			case SOQLParser.MAX:
			case SOQLParser.SUM:
			case SOQLParser.DISTANCE:
			case SOQLParser.GEOLOCATION:
			case SOQLParser.FORMAT:
			case SOQLParser.TOLABEL:
			case SOQLParser.CONVERT_TIME_ZONE:
			case SOQLParser.CONVERT_CURRENCY:
			case SOQLParser.GROUPING:
			case SOQLParser.YESTERDAY:
			case SOQLParser.TODAY:
			case SOQLParser.TOMORROW:
			case SOQLParser.LAST_WEEK:
			case SOQLParser.THIS_WEEK:
			case SOQLParser.NEXT_WEEK:
			case SOQLParser.LAST_MONTH:
			case SOQLParser.THIS_MONTH:
			case SOQLParser.NEXT_MONTH:
			case SOQLParser.LAST_90_DAYS:
			case SOQLParser.NEXT_90_DAYS:
			case SOQLParser.THIS_QUARTER:
			case SOQLParser.LAST_QUARTER:
			case SOQLParser.NEXT_QUARTER:
			case SOQLParser.THIS_YEAR:
			case SOQLParser.LAST_YEAR:
			case SOQLParser.NEXT_YEAR:
			case SOQLParser.THIS_FISCAL_QUARTER:
			case SOQLParser.LAST_FISCAL_QUARTER:
			case SOQLParser.NEXT_FISCAL_QUARTER:
			case SOQLParser.THIS_FISCAL_YEAR:
			case SOQLParser.LAST_FISCAL_YEAR:
			case SOQLParser.NEXT_FISCAL_YEAR:
			case SOQLParser.NEXT_N_DAYS:
			case SOQLParser.LAST_N_DAYS:
			case SOQLParser.N_DAYS_AGO:
			case SOQLParser.NEXT_N_WEEKS:
			case SOQLParser.LAST_N_WEEKS:
			case SOQLParser.N_WEEKS_AGO:
			case SOQLParser.NEXT_N_MONTHS:
			case SOQLParser.LAST_N_MONTHS:
			case SOQLParser.N_MONTHS_AGO:
			case SOQLParser.NEXT_N_QUARTERS:
			case SOQLParser.LAST_N_QUARTERS:
			case SOQLParser.N_QUARTERS_AGO:
			case SOQLParser.NEXT_N_YEARS:
			case SOQLParser.LAST_N_YEARS:
			case SOQLParser.N_YEARS_AGO:
			case SOQLParser.NEXT_N_FISCAL_QUARTERS:
			case SOQLParser.LAST_N_FISCAL_QUARTERS:
			case SOQLParser.N_FISCAL_QUARTERS_AGO:
			case SOQLParser.NEXT_N_FISCAL_YEARS:
			case SOQLParser.LAST_N_FISCAL_YEARS:
			case SOQLParser.N_FISCAL_YEARS_AGO:
			case SOQLParser.ID:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 578;
				this.data_category_name();
				}
				break;
			case SOQLParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 579;
				this.match(SOQLParser.LPAREN);
				this.state = 580;
				this.data_category_name();
				this.state = 585;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===SOQLParser.COMMA) {
					{
					{
					this.state = 581;
					this.match(SOQLParser.COMMA);
					this.state = 582;
					this.data_category_name();
					}
					}
					this.state = 587;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 588;
				this.match(SOQLParser.RPAREN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public data_category_selector(): Data_category_selectorContext {
		let _localctx: Data_category_selectorContext = new Data_category_selectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, SOQLParser.RULE_data_category_selector);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 592;
			_la = this._input.LA(1);
			if ( !(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SOQLParser.ABOVE - 34)) | (1 << (SOQLParser.ABOVE_OR_BELOW - 34)) | (1 << (SOQLParser.AT - 34)) | (1 << (SOQLParser.BELOW - 34)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public with_security_enforced_clause(): With_security_enforced_clauseContext {
		let _localctx: With_security_enforced_clauseContext = new With_security_enforced_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, SOQLParser.RULE_with_security_enforced_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 594;
			this.match(SOQLParser.WITH);
			this.state = 595;
			this.match(SOQLParser.SECURITY_ENFORCED);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public group_by_plain_clause(): Group_by_plain_clauseContext {
		let _localctx: Group_by_plain_clauseContext = new Group_by_plain_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, SOQLParser.RULE_group_by_plain_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 597;
			this.group_by_list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public group_by_rollup_clause(): Group_by_rollup_clauseContext {
		let _localctx: Group_by_rollup_clauseContext = new Group_by_rollup_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, SOQLParser.RULE_group_by_rollup_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 599;
			this.match(SOQLParser.ROLLUP);
			this.state = 600;
			this.match(SOQLParser.LPAREN);
			this.state = 601;
			this.group_by_list();
			this.state = 602;
			this.match(SOQLParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public group_by_cube_clause(): Group_by_cube_clauseContext {
		let _localctx: Group_by_cube_clauseContext = new Group_by_cube_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, SOQLParser.RULE_group_by_cube_clause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 604;
			this.match(SOQLParser.CUBE);
			this.state = 605;
			this.match(SOQLParser.LPAREN);
			this.state = 606;
			this.group_by_list();
			this.state = 607;
			this.match(SOQLParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public group_by_list(): Group_by_listContext {
		let _localctx: Group_by_listContext = new Group_by_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, SOQLParser.RULE_group_by_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 609;
			this.group_by_spec();
			this.state = 614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SOQLParser.COMMA) {
				{
				{
				this.state = 610;
				this.match(SOQLParser.COMMA);
				this.state = 611;
				this.group_by_spec();
				}
				}
				this.state = 616;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public group_by_spec(): Group_by_specContext {
		let _localctx: Group_by_specContext = new Group_by_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, SOQLParser.RULE_group_by_spec);
		try {
			this.state = 619;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,60,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 617;
				this.field();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 618;
				this.function_call();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public order_by_list(): Order_by_listContext {
		let _localctx: Order_by_listContext = new Order_by_listContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, SOQLParser.RULE_order_by_list);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 621;
			this.order_by_spec();
			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===SOQLParser.COMMA) {
				{
				{
				this.state = 622;
				this.match(SOQLParser.COMMA);
				this.state = 623;
				this.order_by_spec();
				}
				}
				this.state = 628;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public order_by_spec(): Order_by_specContext {
		let _localctx: Order_by_specContext = new Order_by_specContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, SOQLParser.RULE_order_by_spec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 629;
			this.order_by_field();
			this.state = 631;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.ASC || _la===SOQLParser.DESC) {
				{
				this.state = 630;
				this.order_by_direction_clause();
				}
			}

			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===SOQLParser.NULLS) {
				{
				this.state = 633;
				this.order_by_nulls_clause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public order_by_direction_clause(): Order_by_direction_clauseContext {
		let _localctx: Order_by_direction_clauseContext = new Order_by_direction_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, SOQLParser.RULE_order_by_direction_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			_la = this._input.LA(1);
			if ( !(_la===SOQLParser.ASC || _la===SOQLParser.DESC) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public order_by_nulls_clause(): Order_by_nulls_clauseContext {
		let _localctx: Order_by_nulls_clauseContext = new Order_by_nulls_clauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, SOQLParser.RULE_order_by_nulls_clause);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 638;
			this.match(SOQLParser.NULLS);
			this.state = 639;
			_la = this._input.LA(1);
			if ( !(_la===SOQLParser.FIRST || _la===SOQLParser.LAST) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public order_by_field(): Order_by_fieldContext {
		let _localctx: Order_by_fieldContext = new Order_by_fieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, SOQLParser.RULE_order_by_field);
		try {
			this.state = 643;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,64,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 641;
				this.field();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 642;
				this.function_call();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public for_value(): For_valueContext {
		let _localctx: For_valueContext = new For_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, SOQLParser.RULE_for_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
			_la = this._input.LA(1);
			if ( !(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SOQLParser.UPDATE - 33)) | (1 << (SOQLParser.REFERENCE - 33)) | (1 << (SOQLParser.VIEW - 33)))) !== 0)) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public update_value(): Update_valueContext {
		let _localctx: Update_valueContext = new Update_valueContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, SOQLParser.RULE_update_value);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 647;
			_la = this._input.LA(1);
			if ( !(_la===SOQLParser.TRACKING || _la===SOQLParser.VIEWSTAT) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x90\u028C\x04"+
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04"+
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r"+
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12"+
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17"+
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C"+
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04"+
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t"+
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04"+
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04"+
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04"+
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04"+
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04"+
		"X\tX\x04Y\tY\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\xB7\n\x03\x03\x04"+
		"\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xBE\n\x04\x03\x05\x03\x05\x03"+
		"\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n"+
		"\x03\n\x03\n\x05\n\xCF\n\n\x03\v\x05\v\xD2\n\v\x03\v\x03\v\x03\f\x03\f"+
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xDF\n\f\x03\r\x03\r\x03"+
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03"+
		"\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03"+
		"\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\xFB\n\x17\x03\x18"+
		"\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C"+
		"\x03\x1C\x05\x1C\u0108\n\x1C\x03\x1C\x05\x1C\u010B\n\x1C\x03\x1C\x05\x1C"+
		"\u010E\n\x1C\x03\x1C\x05\x1C\u0111\n\x1C\x03\x1C\x03\x1C\x05\x1C\u0115"+
		"\n\x1C\x05\x1C\u0117\n\x1C\x03\x1C\x05\x1C\u011A\n\x1C\x03\x1C\x05\x1C"+
		"\u011D\n\x1C\x03\x1C\x05\x1C\u0120\n\x1C\x03\x1C\x05\x1C\u0123\n\x1C\x03"+
		"\x1C\x05\x1C\u0126\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D"+
		"\x07\x1D\u012E\n\x1D\f\x1D\x0E\x1D\u0131\v\x1D\x03\x1E\x03\x1E\x03\x1E"+
		"\x03\x1E\x07\x1E\u0137\n\x1E\f\x1E\x0E\x1E\u013A\v\x1E\x03\x1F\x03\x1F"+
		"\x03\x1F\x03\x1F\x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x05!\u0148\n"+
		"!\x03\"\x03\"\x03\"\x03#\x03#\x03#\x03#\x03$\x03$\x03$\x03%\x03%\x03%"+
		"\x03&\x03&\x03&\x03&\x05&\u015B\n&\x03&\x03&\x05&\u015F\n&\x03\'\x03\'"+
		"\x03\'\x03\'\x05\'\u0165\n\'\x03(\x03(\x03(\x03(\x05(\u016B\n(\x03(\x05"+
		"(\u016E\n(\x03(\x05(\u0171\n(\x03(\x05(\u0174\n(\x03(\x05(\u0177\n(\x03"+
		"(\x05(\u017A\n(\x03(\x05(\u017D\n(\x03(\x05(\u0180\n(\x03(\x03(\x03)\x03"+
		")\x03)\x03)\x07)\u0188\n)\f)\x0E)\u018B\v)\x03*\x03*\x03*\x03*\x05*\u0191"+
		"\n*\x03+\x03+\x05+\u0195\n+\x03,\x03,\x05,\u0199\n,\x03-\x03-\x05-\u019D"+
		"\n-\x03.\x05.\u01A0\n.\x03.\x03.\x03/\x03/\x03/\x05/\u01A7\n/\x03/\x03"+
		"/\x030\x030\x030\x070\u01AE\n0\f0\x0E0\u01B1\v0\x031\x031\x031\x051\u01B6"+
		"\n1\x032\x032\x032\x032\x052\u01BC\n2\x032\x032\x033\x063\u01C1\n3\r3"+
		"\x0E3\u01C2\x034\x034\x034\x034\x035\x035\x035\x036\x036\x036\x037\x03"+
		"7\x037\x077\u01D2\n7\f7\x0E7\u01D5\v7\x038\x058\u01D8\n8\x038\x038\x05"+
		"8\u01DC\n8\x039\x039\x039\x069\u01E1\n9\r9\x0E9\u01E2\x03:\x03:\x03:\x03"+
		":\x03:\x03:\x03:\x03:\x03:\x03:\x05:\u01EF\n:\x03;\x03;\x03;\x03;\x03"+
		";\x05;\u01F6\n;\x03<\x03<\x03<\x07<\u01FB\n<\f<\x0E<\u01FE\v<\x03=\x05"+
		"=\u0201\n=\x03=\x03=\x05=\u0205\n=\x03>\x03>\x03>\x03>\x03?\x03?\x03?"+
		"\x05?\u020E\n?\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x05A\u0218\nA\x03"+
		"B\x03B\x03B\x03B\x03C\x03C\x05C\u0220\nC\x03D\x03D\x03D\x03D\x03E\x03"+
		"E\x03E\x07E\u0229\nE\fE\x0EE\u022C\vE\x03F\x03F\x03F\x05F\u0231\nF\x03"+
		"G\x03G\x03H\x03H\x03H\x03H\x03I\x03I\x03I\x07I\u023C\nI\fI\x0EI\u023F"+
		"\vI\x03J\x03J\x03J\x03J\x03K\x03K\x03K\x03K\x03K\x07K\u024A\nK\fK\x0E"+
		"K\u024D\vK\x03K\x03K\x05K\u0251\nK\x03L\x03L\x03M\x03M\x03M\x03N\x03N"+
		"\x03O\x03O\x03O\x03O\x03O\x03P\x03P\x03P\x03P\x03P\x03Q\x03Q\x03Q\x07"+
		"Q\u0267\nQ\fQ\x0EQ\u026A\vQ\x03R\x03R\x05R\u026E\nR\x03S\x03S\x03S\x07"+
		"S\u0273\nS\fS\x0ES\u0276\vS\x03T\x03T\x05T\u027A\nT\x03T\x05T\u027D\n"+
		"T\x03U\x03U\x03V\x03V\x03V\x03W\x03W\x05W\u0286\nW\x03X\x03X\x03Y\x03"+
		"Y\x03Y\x02\x02\x02Z\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02"+
		"\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02"+
		"\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02"+
		">\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02"+
		"Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02"+
		"v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A"+
		"\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C"+
		"\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE"+
		"\x02\xB0\x02\x02\x12\x03\x02$5\x03\x02Pf\x03\x02g{\x04\x02\x8E\x8E\x90"+
		"\x90\x04\x02\x0E\x0E\x1E\x1E\x03\x026B\x03\x02CH\x03\x02IJ\x03\x02KO\x04"+
		"\x02\x06\x06\x1B\x1B\x03\x02\x04\x05\x03\x02$\'\x04\x02\b\b\v\v\x04\x02"+
		"\x0F\x0F\x15\x15\x05\x02##--22\x04\x02//33\u0290\x02\xB2\x03\x02\x02\x02"+
		"\x04\xB6\x03\x02\x02\x02\x06\xBD\x03\x02\x02\x02\b\xBF\x03\x02\x02\x02"+
		"\n\xC1\x03\x02\x02\x02\f\xC3\x03\x02\x02\x02\x0E\xC5\x03\x02\x02\x02\x10"+
		"\xC7\x03\x02\x02\x02\x12\xCE\x03\x02\x02\x02\x14\xD1\x03\x02\x02\x02\x16"+
		"\xDE\x03\x02\x02\x02\x18\xE0\x03\x02\x02\x02\x1A\xE2\x03\x02\x02\x02\x1C"+
		"\xE4\x03\x02\x02\x02\x1E\xE8\x03\x02\x02\x02 \xEA\x03\x02\x02\x02\"\xEC"+
		"\x03\x02\x02\x02$\xEE\x03\x02\x02\x02&\xF0\x03\x02\x02\x02(\xF2\x03\x02"+
		"\x02\x02*\xF4\x03\x02\x02\x02,\xFA\x03\x02\x02\x02.\xFC\x03\x02\x02\x02"+
		"0\xFE\x03\x02\x02\x022\u0100\x03\x02\x02\x024\u0102\x03\x02\x02\x026\u0104"+
		"\x03\x02\x02\x028\u0129\x03\x02\x02\x02:\u0132\x03\x02\x02\x02<\u013B"+
		"\x03\x02\x02\x02>\u013F\x03\x02\x02\x02@\u0142\x03\x02\x02\x02B\u0149"+
		"\x03\x02\x02\x02D\u014C\x03\x02\x02\x02F\u0150\x03\x02\x02\x02H\u0153"+
		"\x03\x02\x02\x02J\u0156\x03\x02\x02\x02L\u0160\x03\x02\x02\x02N\u0166"+
		"\x03\x02\x02\x02P\u0183\x03\x02\x02\x02R\u0190\x03\x02\x02\x02T\u0194"+
		"\x03\x02\x02\x02V\u0196\x03\x02\x02\x02X\u019A\x03\x02\x02\x02Z\u019F"+
		"\x03\x02\x02\x02\\\u01A3\x03\x02\x02\x02^\u01AA\x03\x02\x02\x02`\u01B5"+
		"\x03\x02\x02\x02b\u01B7\x03\x02\x02\x02d\u01C0\x03\x02\x02\x02f\u01C4"+
		"\x03\x02\x02\x02h\u01C8\x03\x02\x02\x02j\u01CB\x03\x02\x02\x02l\u01CE"+
		"\x03\x02\x02\x02n\u01D7\x03\x02\x02\x02p\u01E0\x03\x02\x02\x02r\u01EE"+
		"\x03\x02\x02\x02t\u01F5\x03\x02\x02\x02v\u01F7\x03\x02\x02\x02x\u0200"+
		"\x03\x02\x02\x02z\u0206\x03\x02\x02\x02|\u020D\x03\x02\x02\x02~\u020F"+
		"\x03\x02\x02\x02\x80\u0213\x03\x02\x02\x02\x82\u0219\x03\x02\x02\x02\x84"+
		"\u021F\x03\x02\x02\x02\x86\u0221\x03\x02\x02\x02\x88\u0225\x03\x02\x02"+
		"\x02\x8A\u022D\x03\x02\x02\x02\x8C\u0232\x03\x02\x02\x02\x8E\u0234\x03"+
		"\x02\x02\x02\x90\u0238\x03\x02\x02\x02\x92\u0240\x03\x02\x02\x02\x94\u0250"+
		"\x03\x02\x02\x02\x96\u0252\x03\x02\x02\x02\x98\u0254\x03\x02\x02\x02\x9A"+
		"\u0257\x03\x02\x02\x02\x9C\u0259\x03\x02\x02\x02\x9E\u025E\x03\x02\x02"+
		"\x02\xA0\u0263\x03\x02\x02\x02\xA2\u026D\x03\x02\x02\x02\xA4\u026F\x03"+
		"\x02\x02\x02\xA6\u0277\x03\x02\x02\x02\xA8\u027E\x03\x02\x02\x02\xAA\u0280"+
		"\x03\x02\x02\x02\xAC\u0285\x03\x02\x02\x02\xAE\u0287\x03\x02\x02\x02\xB0"+
		"\u0289\x03\x02\x02\x02\xB2\xB3\t\x02\x02\x02\xB3\x03\x03\x02\x02\x02\xB4"+
		"\xB7\x05\x02\x02\x02\xB5\xB7\x07\x11\x02\x02\xB6\xB4\x03\x02\x02\x02\xB6"+
		"\xB5\x03\x02\x02\x02\xB7\x05\x03\x02\x02\x02\xB8\xBE\x07\x8B\x02\x02\xB9"+
		"\xBE\x05\x04\x03\x02\xBA\xBE\x05\x18\r\x02\xBB\xBE\x05\x1A\x0E\x02\xBC"+
		"\xBE\x05,\x17\x02\xBD\xB8\x03\x02\x02\x02\xBD\xB9\x03\x02\x02\x02\xBD"+
		"\xBA\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBC\x03\x02\x02\x02\xBE"+
		"\x07\x03\x02\x02\x02\xBF\xC0\x05\x06\x04\x02\xC0\t\x03\x02\x02\x02\xC1"+
		"\xC2\x05\x06\x04\x02\xC2\v\x03\x02\x02\x02\xC3\xC4\x05\x06\x04\x02\xC4"+
		"\r\x03\x02\x02\x02\xC5\xC6\x05\x06\x04\x02\xC6\x0F\x03\x02\x02\x02\xC7"+
		"\xC8\x05\x06\x04\x02\xC8\x11\x03\x02\x02\x02\xC9\xCF\x07\x8B\x02\x02\xCA"+
		"\xCF\x05\x02\x02\x02\xCB\xCF\x05\x18\r\x02\xCC\xCF\x05\x1A\x0E\x02\xCD"+
		"\xCF\x05,\x17\x02\xCE\xC9\x03\x02\x02\x02\xCE\xCA\x03\x02\x02\x02\xCE"+
		"\xCB\x03\x02\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCD\x03\x02\x02\x02\xCF"+
		"\x13\x03\x02\x02\x02\xD0\xD2\x07\x07\x02\x02\xD1\xD0\x03\x02\x02\x02\xD1"+
		"\xD2\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD4\x05\x12\n\x02\xD4"+
		"\x15\x03\x02\x02\x02\xD5\xDF\x05\x18\r\x02\xD6\xDF\x05\x1C\x0F\x02\xD7"+
		"\xDF\x05\x1E\x10\x02\xD8\xDF\x05 \x11\x02\xD9\xDF\x05\"\x12\x02\xDA\xDF"+
		"\x05$\x13\x02\xDB\xDF\x05&\x14\x02\xDC\xDF\x05(\x15\x02\xDD\xDF\x05*\x16"+
		"\x02\xDE\xD5\x03\x02\x02\x02\xDE\xD6\x03\x02\x02\x02\xDE\xD7\x03\x02\x02"+
		"\x02\xDE\xD8\x03\x02\x02\x02\xDE\xD9\x03\x02\x02\x02\xDE\xDA\x03\x02\x02"+
		"\x02\xDE\xDB\x03\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDE\xDD\x03\x02\x02"+
		"\x02\xDF\x17\x03\x02\x02\x02\xE0\xE1\t\x03\x02\x02\xE1\x19\x03\x02\x02"+
		"\x02\xE2\xE3\t\x04\x02\x02\xE3\x1B\x03\x02\x02\x02\xE4\xE5\x05\x1A\x0E"+
		"\x02\xE5\xE6\x07\x83\x02\x02\xE6\xE7\x07\x8E\x02\x02\xE7\x1D\x03\x02\x02"+
		"\x02\xE8\xE9\x07\x8D\x02\x02\xE9\x1F\x03\x02\x02\x02\xEA\xEB\x07\x8C\x02"+
		"\x02\xEB!\x03\x02\x02\x02\xEC\xED\t\x05\x02\x02\xED#\x03\x02\x02\x02\xEE"+
		"\xEF\x07\x8F\x02\x02\xEF%\x03\x02\x02\x02\xF0\xF1\x07\x04\x02\x02\xF1"+
		"\'\x03\x02\x02\x02\xF2\xF3\t\x06\x02\x02\xF3)\x03\x02\x02\x02\xF4\xF5"+
		"\x07\x19\x02\x02\xF5+\x03\x02\x02\x02\xF6\xFB\x05.\x18\x02\xF7\xFB\x05"+
		"0\x19\x02\xF8\xFB\x052\x1A\x02\xF9\xFB\x054\x1B\x02\xFA\xF6\x03\x02\x02"+
		"\x02\xFA\xF7\x03\x02\x02\x02\xFA\xF8\x03\x02\x02\x02\xFA\xF9\x03\x02\x02"+
		"\x02\xFB-\x03\x02\x02\x02\xFC\xFD\t\x07\x02\x02\xFD/\x03\x02\x02\x02\xFE"+
		"\xFF\t\b\x02\x02\xFF1\x03\x02\x02\x02\u0100\u0101\t\t\x02\x02\u01013\x03"+
		"\x02\x02\x02\u0102\u0103\t\n\x02\x02\u01035\x03\x02\x02\x02\u0104\u0105"+
		"\x058\x1D\x02\u0105\u0107\x05:\x1E\x02\u0106\u0108\x05<\x1F\x02\u0107"+
		"\u0106\x03\x02\x02\x02\u0107\u0108\x03\x02\x02\x02\u0108\u010A\x03\x02"+
		"\x02\x02\u0109\u010B\x05> \x02\u010A\u0109\x03\x02\x02\x02\u010A\u010B"+
		"\x03\x02\x02\x02\u010B\u010D\x03\x02\x02\x02\u010C\u010E\x05\x8AF\x02"+
		"\u010D\u010C\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E\u0110\x03"+
		"\x02\x02\x02\u010F\u0111\x05\x98M\x02\u0110\u010F\x03\x02\x02\x02\u0110"+
		"\u0111\x03\x02\x02\x02\u0111\u0116\x03\x02\x02\x02\u0112\u0114\x05@!\x02"+
		"\u0113\u0115\x05B\"\x02\u0114\u0113\x03\x02\x02\x02\u0114\u0115\x03\x02"+
		"\x02\x02\u0115\u0117\x03\x02\x02\x02\u0116\u0112\x03\x02\x02\x02\u0116"+
		"\u0117\x03\x02\x02\x02\u0117\u0119\x03\x02\x02\x02\u0118\u011A\x05D#\x02"+
		"\u0119\u0118\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A\u011C\x03"+
		"\x02\x02\x02\u011B\u011D\x05F$\x02\u011C\u011B\x03\x02\x02\x02\u011C\u011D"+
		"\x03\x02\x02\x02\u011D\u011F\x03\x02\x02\x02\u011E\u0120\x05H%\x02\u011F"+
		"\u011E\x03\x02\x02\x02\u011F\u0120\x03\x02\x02\x02\u0120\u0122\x03\x02"+
		"\x02\x02\u0121\u0123\x05J&\x02\u0122\u0121\x03\x02\x02\x02\u0122\u0123"+
		"\x03\x02\x02\x02\u0123\u0125\x03\x02\x02\x02\u0124\u0126\x05L\'\x02\u0125"+
		"\u0124\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126\u0127\x03\x02"+
		"\x02\x02\u0127\u0128\x07\x02\x02\x03\u01287\x03\x02\x02\x02\u0129\u012A"+
		"\x07\x1D\x02\x02\u012A\u012F\x05R*\x02\u012B\u012C\x07\x85\x02\x02\u012C"+
		"\u012E\x05R*\x02\u012D\u012B\x03\x02\x02\x02\u012E\u0131\x03\x02\x02\x02"+
		"\u012F\u012D\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u01309\x03\x02"+
		"\x02\x02\u0131\u012F\x03\x02\x02\x02\u0132\u0133\x07\x10\x02\x02\u0133"+
		"\u0138\x05n8\x02\u0134\u0135\x07\x85\x02\x02\u0135\u0137\x05n8\x02\u0136"+
		"\u0134\x03\x02\x02\x02\u0137\u013A\x03\x02\x02\x02\u0138\u0136\x03\x02"+
		"\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139;\x03\x02\x02\x02\u013A\u0138"+
		"\x03\x02\x02\x02\u013B\u013C\x07\x1F\x02\x02\u013C\u013D\x07.\x02\x02"+
		"\u013D\u013E\x05\f\x07\x02\u013E=\x03\x02\x02\x02\u013F\u0140\x07 \x02"+
		"\x02\u0140\u0141\x05v<\x02\u0141?\x03\x02\x02\x02\u0142\u0143\x07\x11"+
		"\x02\x02\u0143\u0147\x07\t\x02\x02\u0144\u0148\x05\x9CO\x02\u0145\u0148"+
		"\x05\x9EP\x02\u0146\u0148\x05\x9AN\x02\u0147\u0144\x03\x02\x02\x02\u0147"+
		"\u0145\x03\x02\x02\x02\u0147\u0146\x03\x02\x02\x02\u0148A\x03\x02\x02"+
		"\x02\u0149\u014A\x07\x12\x02\x02\u014A\u014B\x05v<\x02\u014BC\x03\x02"+
		"\x02\x02\u014C\u014D\x07,\x02\x02\u014D\u014E\x07\t\x02\x02\u014E\u014F"+
		"\x05\xA4S\x02\u014FE\x03\x02\x02\x02\u0150\u0151\x07\x17\x02\x02\u0151"+
		"\u0152\x07\x8E\x02\x02\u0152G\x03\x02\x02\x02\u0153\u0154\x07+\x02\x02"+
		"\u0154\u0155\x07\x8E\x02\x02\u0155I\x03\x02\x02\x02\u0156\u0157\x07\""+
		"\x02\x02\u0157\u015A\x05\xAEX\x02\u0158\u0159\x07\x85\x02\x02\u0159\u015B"+
		"\x05\xAEX\x02\u015A\u0158\x03\x02\x02\x02\u015A\u015B\x03\x02\x02\x02"+
		"\u015B\u015E\x03\x02\x02\x02\u015C\u015D\x07\x85\x02\x02\u015D\u015F\x05"+
		"\xAEX\x02\u015E\u015C\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F"+
		"K\x03\x02\x02\x02\u0160\u0161\x07#\x02\x02\u0161\u0164\x05\xB0Y\x02\u0162"+
		"\u0163\x07\x85\x02\x02\u0163\u0165\x05\xB0Y\x02\u0164\u0162\x03\x02\x02"+
		"\x02\u0164\u0165\x03\x02\x02\x02\u0165M\x03\x02\x02\x02\u0166\u0167\x07"+
		"\x88\x02\x02\u0167\u0168\x05P)\x02\u0168\u016A\x05:\x1E\x02\u0169\u016B"+
		"\x05<\x1F\x02\u016A\u0169\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02"+
		"\u016B\u016D\x03\x02\x02\x02\u016C\u016E\x05> \x02\u016D\u016C\x03\x02"+
		"\x02\x02\u016D\u016E\x03\x02\x02\x02\u016E\u0170\x03\x02\x02\x02\u016F"+
		"\u0171\x05\x8AF\x02\u0170\u016F\x03\x02\x02\x02\u0170\u0171\x03\x02\x02"+
		"\x02\u0171\u0173\x03\x02\x02\x02\u0172\u0174\x05D#\x02\u0173\u0172\x03"+
		"\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174\u0176\x03\x02\x02\x02\u0175"+
		"\u0177\x05F$\x02\u0176\u0175\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02"+
		"\u0177\u0179\x03\x02\x02\x02\u0178\u017A\x05H%\x02\u0179\u0178\x03\x02"+
		"\x02\x02\u0179\u017A\x03\x02\x02\x02\u017A\u017C\x03\x02\x02\x02\u017B"+
		"\u017D\x05J&\x02\u017C\u017B\x03\x02\x02\x02\u017C\u017D\x03\x02\x02\x02"+
		"\u017D\u017F\x03\x02\x02\x02\u017E\u0180\x05L\'\x02\u017F\u017E\x03\x02"+
		"\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0181\x03\x02\x02\x02\u0181"+
		"\u0182\x07\x87\x02\x02\u0182O\x03\x02\x02\x02\u0183\u0184\x07\x1D\x02"+
		"\x02\u0184\u0189\x05T+\x02\u0185\u0186\x07\x85\x02\x02\u0186\u0188\x05"+
		"T+\x02\u0187\u0185\x03\x02\x02\x02\u0188\u018B\x03\x02\x02\x02\u0189\u0187"+
		"\x03\x02\x02\x02\u0189\u018A\x03\x02\x02\x02\u018AQ\x03\x02\x02\x02\u018B"+
		"\u0189\x03\x02\x02\x02\u018C\u0191\x05V,\x02\u018D\u0191\x05X-\x02\u018E"+
		"\u0191\x05N(\x02\u018F\u0191\x05b2\x02\u0190\u018C\x03\x02\x02\x02\u0190"+
		"\u018D\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02\u0190\u018F\x03\x02"+
		"\x02\x02\u0191S\x03\x02\x02\x02\u0192\u0195\x05V,\x02\u0193\u0195\x05"+
		"X-\x02\u0194\u0192\x03\x02\x02\x02\u0194\u0193\x03\x02\x02\x02\u0195U"+
		"\x03\x02\x02\x02\u0196\u0198\x05Z.\x02\u0197\u0199\x05\x14\v\x02\u0198"+
		"\u0197\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199W\x03\x02\x02"+
		"\x02\u019A\u019C\x05\\/\x02\u019B\u019D\x05\x14\v\x02\u019C\u019B\x03"+
		"\x02\x02\x02\u019C\u019D\x03\x02\x02\x02\u019DY\x03\x02\x02\x02\u019E"+
		"\u01A0\x05p9\x02\u019F\u019E\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02"+
		"\u01A0\u01A1\x03\x02\x02\x02\u01A1\u01A2\x05\n\x06\x02\u01A2[\x03\x02"+
		"\x02\x02\u01A3\u01A4\x05,\x17\x02\u01A4\u01A6\x07\x88\x02\x02\u01A5\u01A7"+
		"\x05^0\x02\u01A6\u01A5\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02\u01A7"+
		"\u01A8\x03\x02\x02\x02\u01A8\u01A9\x07\x87\x02\x02\u01A9]\x03\x02\x02"+
		"\x02\u01AA\u01AF\x05`1\x02\u01AB\u01AC\x07\x85\x02\x02\u01AC\u01AE\x05"+
		"`1\x02\u01AD\u01AB\x03\x02\x02\x02\u01AE\u01B1\x03\x02\x02\x02\u01AF\u01AD"+
		"\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0_\x03\x02\x02\x02\u01B1"+
		"\u01AF\x03\x02\x02\x02\u01B2\u01B6\x05Z.\x02\u01B3\u01B6\x05\x16\f\x02"+
		"\u01B4\u01B6\x05\\/\x02\u01B5\u01B2\x03\x02\x02\x02\u01B5\u01B3\x03\x02"+
		"\x02\x02\u01B5\u01B4\x03\x02\x02\x02\u01B6a\x03\x02\x02\x02\u01B7\u01B8"+
		"\x071\x02\x02\u01B8\u01B9\x05Z.\x02\u01B9\u01BB\x05d3\x02\u01BA\u01BC"+
		"\x05j6\x02\u01BB\u01BA\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02\x02\u01BC"+
		"\u01BD\x03\x02\x02\x02\u01BD\u01BE\x07*\x02\x02\u01BEc\x03\x02\x02\x02"+
		"\u01BF\u01C1\x05f4\x02\u01C0\u01BF\x03\x02\x02\x02\u01C1\u01C2\x03\x02"+
		"\x02\x02\u01C2\u01C0\x03\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3"+
		"e\x03\x02\x02\x02\u01C4\u01C5\x074\x02\x02\u01C5\u01C6\x05\b\x05\x02\u01C6"+
		"\u01C7\x05h5\x02\u01C7g\x03\x02\x02\x02\u01C8\u01C9\x070\x02\x02\u01C9"+
		"\u01CA\x05l7\x02\u01CAi\x03\x02\x02\x02\u01CB\u01CC\x07\f\x02\x02\u01CC"+
		"\u01CD\x05l7\x02\u01CDk\x03\x02\x02\x02\u01CE\u01D3\x05Z.\x02\u01CF\u01D0"+
		"\x07\x85\x02\x02\u01D0\u01D2\x05Z.\x02\u01D1\u01CF\x03\x02\x02\x02\u01D2"+
		"\u01D5\x03\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02"+
		"\x02\x02\u01D4m\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D6\u01D8"+
		"\x05p9\x02\u01D7\u01D6\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02\u01D8"+
		"\u01D9\x03\x02\x02\x02\u01D9\u01DB\x05\b\x05\x02\u01DA\u01DC\x05\x14\v"+
		"\x02\u01DB\u01DA\x03\x02\x02\x02\u01DB\u01DC\x03\x02\x02\x02\u01DCo\x03"+
		"\x02\x02\x02\u01DD\u01DE\x05\b\x05\x02\u01DE\u01DF\x07\x82\x02\x02\u01DF"+
		"\u01E1\x03\x02\x02\x02\u01E0\u01DD\x03\x02\x02\x02\u01E1\u01E2\x03\x02"+
		"\x02\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02\x02\u01E3"+
		"q\x03\x02\x02\x02\u01E4\u01EF\x07|\x02\x02\u01E5\u01EF\x07}\x02\x02\u01E6"+
		"\u01EF\x07~\x02\x02\u01E7\u01EF\x07\x7F\x02\x02\u01E8\u01EF\x07\x80\x02"+
		"\x02\u01E9\u01EF\x07\x81\x02\x02\u01EA\u01EB\x07\x80\x02\x02\u01EB\u01EF"+
		"\x07|\x02\x02\u01EC\u01ED\x07\x81\x02\x02\u01ED\u01EF\x07|\x02\x02\u01EE"+
		"\u01E4\x03\x02\x02\x02\u01EE\u01E5\x03\x02\x02\x02\u01EE\u01E6\x03\x02"+
		"\x02\x02\u01EE\u01E7\x03\x02\x02\x02\u01EE\u01E8\x03\x02\x02\x02\u01EE"+
		"\u01E9\x03\x02\x02\x02\u01EE\u01EA\x03\x02\x02\x02\u01EE\u01EC\x03\x02"+
		"\x02\x02\u01EFs\x03\x02\x02\x02\u01F0\u01F6\x07\x13\x02\x02\u01F1\u01F2"+
		"\x07\x18\x02\x02\u01F2\u01F6\x07\x13\x02\x02\u01F3\u01F6\x07\x14\x02\x02"+
		"\u01F4\u01F6\x07\r\x02\x02\u01F5\u01F0\x03\x02\x02\x02\u01F5\u01F1\x03"+
		"\x02\x02\x02\u01F5\u01F3\x03\x02\x02\x02\u01F5\u01F4\x03\x02\x02\x02\u01F6"+
		"u\x03\x02\x02\x02\u01F7\u01FC\x05x=\x02\u01F8\u01F9\t\v\x02\x02\u01F9"+
		"\u01FB\x05x=\x02\u01FA\u01F8\x03\x02\x02\x02\u01FB\u01FE\x03\x02\x02\x02"+
		"\u01FC\u01FA\x03\x02\x02\x02\u01FC\u01FD\x03\x02\x02\x02\u01FDw\x03\x02"+
		"\x02\x02\u01FE\u01FC\x03\x02\x02\x02\u01FF\u0201\x07\x18\x02\x02\u0200"+
		"\u01FF\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0204\x03\x02"+
		"\x02\x02\u0202\u0205\x05|?\x02\u0203\u0205\x05z>\x02\u0204\u0202\x03\x02"+
		"\x02\x02\u0204\u0203\x03\x02\x02\x02\u0205y\x03\x02\x02\x02\u0206\u0207"+
		"\x07\x88\x02\x02\u0207\u0208\x05v<\x02\u0208\u0209\x07\x87\x02\x02\u0209"+
		"{\x03\x02\x02\x02\u020A\u020E\x05~@\x02\u020B\u020E\x05\x80A\x02\u020C"+
		"\u020E\x05\x82B\x02\u020D\u020A\x03\x02\x02\x02\u020D\u020B\x03\x02\x02"+
		"\x02\u020D\u020C\x03\x02\x02\x02\u020E}\x03\x02\x02\x02\u020F\u0210\x05"+
		"\x84C\x02\u0210\u0211\x05r:\x02\u0211\u0212\x05\x16\f\x02\u0212\x7F\x03"+
		"\x02\x02\x02\u0213\u0214\x05\x84C\x02\u0214\u0217\x05t;\x02\u0215\u0218"+
		"\x05N(\x02\u0216\u0218\x05\x86D\x02\u0217\u0215\x03\x02\x02\x02\u0217"+
		"\u0216\x03\x02\x02\x02\u0218\x81\x03\x02\x02\x02\u0219\u021A\x05\x84C"+
		"\x02\u021A\u021B\x07\x16\x02\x02\u021B\u021C\t\f\x02\x02\u021C\x83\x03"+
		"\x02\x02\x02\u021D\u0220\x05Z.\x02\u021E\u0220\x05\\/\x02\u021F\u021D"+
		"\x03\x02\x02\x02\u021F\u021E\x03\x02\x02\x02\u0220\x85\x03\x02\x02\x02"+
		"\u0221\u0222\x07\x88\x02\x02\u0222\u0223\x05\x88E\x02\u0223\u0224\x07"+
		"\x87\x02\x02\u0224\x87\x03\x02\x02\x02\u0225\u022A\x05\x16\f\x02\u0226"+
		"\u0227\x07\x85\x02\x02\u0227\u0229\x05\x16\f\x02\u0228\u0226\x03\x02\x02"+
		"\x02\u0229\u022C\x03\x02\x02\x02\u022A\u0228\x03\x02\x02\x02\u022A\u022B"+
		"\x03\x02\x02\x02\u022B\x89\x03\x02\x02\x02\u022C\u022A\x03\x02\x02\x02"+
		"\u022D\u0230\x07!\x02\x02\u022E\u0231\x05\x8CG\x02\u022F\u0231\x05\x8E"+
		"H\x02\u0230\u022E\x03\x02\x02\x02\u0230\u022F\x03\x02\x02\x02\u0231\x8B"+
		"\x03\x02\x02\x02\u0232\u0233\x05~@\x02\u0233\x8D\x03\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u0234\u0235\x07)\x02\x02\u0235\u0236\x07(\x02\x02\u0236\u0237\x05"+
		"\x90I\x02\u0237\x8F\x03\x02\x02\x02\u0238\u023D\x05\x92J\x02\u0239\u023A"+
		"\x07\x06\x02\x02\u023A\u023C\x05\x92J\x02\u023B\u0239\x03\x02\x02\x02"+
		"\u023C\u023F\x03\x02\x02\x02\u023D\u023B\x03\x02\x02\x02\u023D\u023E\x03"+
		"\x02\x02\x02\u023E\x91\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u0240"+
		"\u0241\x05\x0E\b\x02\u0241\u0242\x05\x96L\x02\u0242\u0243\x05\x94K\x02"+
		"\u0243\x93\x03\x02\x02\x02\u0244\u0251\x05\x10\t\x02\u0245\u0246\x07\x88"+
		"\x02\x02\u0246\u024B\x05\x10\t\x02\u0247\u0248\x07\x85\x02\x02\u0248\u024A"+
		"\x05\x10\t\x02\u0249\u0247\x03\x02\x02\x02\u024A\u024D\x03\x02\x02\x02"+
		"\u024B\u0249\x03\x02\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024E\x03"+
		"\x02\x02\x02\u024D\u024B\x03\x02\x02\x02\u024E\u024F\x07\x87\x02\x02\u024F"+
		"\u0251\x03\x02\x02\x02\u0250\u0244\x03\x02\x02\x02\u0250\u0245\x03\x02"+
		"\x02\x02\u0251\x95\x03\x02\x02\x02\u0252\u0253\t\r\x02\x02\u0253\x97\x03"+
		"\x02\x02\x02\u0254\u0255\x07!\x02\x02\u0255\u0256\x075\x02\x02\u0256\x99"+
		"\x03\x02\x02\x02\u0257\u0258\x05\xA0Q\x02\u0258\x9B\x03\x02\x02\x02\u0259"+
		"\u025A\x07\x1C\x02\x02\u025A\u025B\x07\x88\x02\x02\u025B\u025C\x05\xA0"+
		"Q\x02\u025C\u025D\x07\x87\x02\x02\u025D\x9D\x03\x02\x02\x02\u025E\u025F"+
		"\x07\n\x02\x02\u025F\u0260\x07\x88\x02\x02\u0260\u0261\x05\xA0Q\x02\u0261"+
		"\u0262\x07\x87\x02\x02\u0262\x9F\x03\x02\x02\x02\u0263\u0268\x05\xA2R"+
		"\x02\u0264\u0265\x07\x85\x02\x02\u0265\u0267\x05\xA2R\x02\u0266\u0264"+
		"\x03\x02\x02\x02\u0267\u026A\x03\x02\x02\x02\u0268\u0266\x03\x02\x02\x02"+
		"\u0268\u0269\x03\x02\x02\x02\u0269\xA1\x03\x02\x02\x02\u026A\u0268\x03"+
		"\x02\x02\x02\u026B\u026E\x05Z.\x02\u026C\u026E\x05\\/\x02\u026D\u026B"+
		"\x03\x02\x02\x02\u026D\u026C\x03\x02\x02\x02\u026E\xA3\x03\x02\x02\x02"+
		"\u026F\u0274\x05\xA6T\x02\u0270\u0271\x07\x85\x02\x02\u0271\u0273\x05"+
		"\xA6T\x02\u0272\u0270\x03\x02\x02\x02\u0273\u0276\x03\x02\x02\x02\u0274"+
		"\u0272\x03\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\xA5\x03\x02\x02"+
		"\x02\u0276\u0274\x03\x02\x02\x02\u0277\u0279\x05\xACW\x02\u0278\u027A"+
		"\x05\xA8U\x02\u0279\u0278\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02"+
		"\u027A\u027C\x03\x02\x02\x02\u027B\u027D\x05\xAAV\x02\u027C\u027B\x03"+
		"\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D\xA7\x03\x02\x02\x02\u027E"+
		"\u027F\t\x0E\x02\x02\u027F\xA9\x03\x02\x02\x02\u0280\u0281\x07\x1A\x02"+
		"\x02\u0281\u0282\t\x0F\x02\x02\u0282\xAB\x03\x02\x02\x02\u0283\u0286\x05"+
		"Z.\x02\u0284\u0286\x05\\/\x02\u0285\u0283\x03\x02\x02\x02\u0285\u0284"+
		"\x03\x02\x02\x02\u0286\xAD\x03\x02\x02\x02\u0287\u0288\t\x10\x02\x02\u0288"+
		"\xAF\x03\x02\x02\x02\u0289\u028A\t\x11\x02\x02\u028A\xB1\x03\x02\x02\x02"+
		"C\xB6\xBD\xCE\xD1\xDE\xFA\u0107\u010A\u010D\u0110\u0114\u0116\u0119\u011C"+
		"\u011F\u0122\u0125\u012F\u0138\u0147\u015A\u015E\u0164\u016A\u016D\u0170"+
		"\u0173\u0176\u0179\u017C\u017F\u0189\u0190\u0194\u0198\u019C\u019F\u01A6"+
		"\u01AF\u01B5\u01BB\u01C2\u01D3\u01D7\u01DB\u01E2\u01EE\u01F5\u01FC\u0200"+
		"\u0204\u020D\u0217\u021F\u022A\u0230\u023D\u024B\u0250\u0268\u026D\u0274"+
		"\u0279\u027C\u0285";
	public static readonly _serializedATN: string = Utils.join(
		[
			SOQLParser._serializedATNSegment0,
			SOQLParser._serializedATNSegment1
		],
		""
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!SOQLParser.__ATN) {
			SOQLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(SOQLParser._serializedATN));
		}

		return SOQLParser.__ATN;
	}

}
