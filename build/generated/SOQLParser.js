"use strict";
// Generated from src/main/g4/SOQL.g4 by ANTLR 4.6-SNAPSHOT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Decorators_1 = require("antlr4ts/Decorators");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Decorators_2 = require("antlr4ts/Decorators");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const RuleVersion_1 = require("antlr4ts/RuleVersion");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class Keywords_alias_allowedContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ABOVE() { return this.tryGetToken(SOQLParser.ABOVE, 0); }
    ABOVE_OR_BELOW() { return this.tryGetToken(SOQLParser.ABOVE_OR_BELOW, 0); }
    AT() { return this.tryGetToken(SOQLParser.AT, 0); }
    BELOW() { return this.tryGetToken(SOQLParser.BELOW, 0); }
    CATEGORY() { return this.tryGetToken(SOQLParser.CATEGORY, 0); }
    DATA() { return this.tryGetToken(SOQLParser.DATA, 0); }
    END() { return this.tryGetToken(SOQLParser.END, 0); }
    OFFSET() { return this.tryGetToken(SOQLParser.OFFSET, 0); }
    ORDER() { return this.tryGetToken(SOQLParser.ORDER, 0); }
    REFERENCE() { return this.tryGetToken(SOQLParser.REFERENCE, 0); }
    SCOPE() { return this.tryGetToken(SOQLParser.SCOPE, 0); }
    TRACKING() { return this.tryGetToken(SOQLParser.TRACKING, 0); }
    THEN() { return this.tryGetToken(SOQLParser.THEN, 0); }
    TYPEOF() { return this.tryGetToken(SOQLParser.TYPEOF, 0); }
    VIEW() { return this.tryGetToken(SOQLParser.VIEW, 0); }
    VIEWSTAT() { return this.tryGetToken(SOQLParser.VIEWSTAT, 0); }
    WHEN() { return this.tryGetToken(SOQLParser.WHEN, 0); }
    get ruleIndex() { return SOQLParser.RULE_keywords_alias_allowed; }
    enterRule(listener) {
        if (listener.enterKeywords_alias_allowed)
            listener.enterKeywords_alias_allowed(this);
    }
    exitRule(listener) {
        if (listener.exitKeywords_alias_allowed)
            listener.exitKeywords_alias_allowed(this);
    }
    accept(visitor) {
        if (visitor.visitKeywords_alias_allowed)
            return visitor.visitKeywords_alias_allowed(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Keywords_alias_allowedContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Keywords_alias_allowedContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Keywords_alias_allowedContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Keywords_alias_allowedContext.prototype, "accept", null);
exports.Keywords_alias_allowedContext = Keywords_alias_allowedContext;
class Keywords_name_allowedContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    keywords_alias_allowed() {
        return this.tryGetRuleContext(0, Keywords_alias_allowedContext);
    }
    GROUP() { return this.tryGetToken(SOQLParser.GROUP, 0); }
    get ruleIndex() { return SOQLParser.RULE_keywords_name_allowed; }
    enterRule(listener) {
        if (listener.enterKeywords_name_allowed)
            listener.enterKeywords_name_allowed(this);
    }
    exitRule(listener) {
        if (listener.exitKeywords_name_allowed)
            listener.exitKeywords_name_allowed(this);
    }
    accept(visitor) {
        if (visitor.visitKeywords_name_allowed)
            return visitor.visitKeywords_name_allowed(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Keywords_name_allowedContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Keywords_name_allowedContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Keywords_name_allowedContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Keywords_name_allowedContext.prototype, "accept", null);
exports.Keywords_name_allowedContext = Keywords_name_allowedContext;
class NameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ID() { return this.tryGetToken(SOQLParser.ID, 0); }
    keywords_name_allowed() {
        return this.tryGetRuleContext(0, Keywords_name_allowedContext);
    }
    date_formula_literal() {
        return this.tryGetRuleContext(0, Date_formula_literalContext);
    }
    date_formula_n_literal_name() {
        return this.tryGetRuleContext(0, Date_formula_n_literal_nameContext);
    }
    function_name() {
        return this.tryGetRuleContext(0, Function_nameContext);
    }
    get ruleIndex() { return SOQLParser.RULE_name; }
    enterRule(listener) {
        if (listener.enterName)
            listener.enterName(this);
    }
    exitRule(listener) {
        if (listener.exitName)
            listener.exitName(this);
    }
    accept(visitor) {
        if (visitor.visitName)
            return visitor.visitName(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], NameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], NameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], NameContext.prototype, "accept", null);
exports.NameContext = NameContext;
class Object_nameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    name() {
        return this.getRuleContext(0, NameContext);
    }
    get ruleIndex() { return SOQLParser.RULE_object_name; }
    enterRule(listener) {
        if (listener.enterObject_name)
            listener.enterObject_name(this);
    }
    exitRule(listener) {
        if (listener.exitObject_name)
            listener.exitObject_name(this);
    }
    accept(visitor) {
        if (visitor.visitObject_name)
            return visitor.visitObject_name(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Object_nameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Object_nameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Object_nameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Object_nameContext.prototype, "accept", null);
exports.Object_nameContext = Object_nameContext;
class Field_nameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    name() {
        return this.getRuleContext(0, NameContext);
    }
    get ruleIndex() { return SOQLParser.RULE_field_name; }
    enterRule(listener) {
        if (listener.enterField_name)
            listener.enterField_name(this);
    }
    exitRule(listener) {
        if (listener.exitField_name)
            listener.exitField_name(this);
    }
    accept(visitor) {
        if (visitor.visitField_name)
            return visitor.visitField_name(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Field_nameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Field_nameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Field_nameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Field_nameContext.prototype, "accept", null);
exports.Field_nameContext = Field_nameContext;
class Filter_scope_nameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    name() {
        return this.getRuleContext(0, NameContext);
    }
    get ruleIndex() { return SOQLParser.RULE_filter_scope_name; }
    enterRule(listener) {
        if (listener.enterFilter_scope_name)
            listener.enterFilter_scope_name(this);
    }
    exitRule(listener) {
        if (listener.exitFilter_scope_name)
            listener.exitFilter_scope_name(this);
    }
    accept(visitor) {
        if (visitor.visitFilter_scope_name)
            return visitor.visitFilter_scope_name(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Filter_scope_nameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Filter_scope_nameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Filter_scope_nameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Filter_scope_nameContext.prototype, "accept", null);
exports.Filter_scope_nameContext = Filter_scope_nameContext;
class Data_category_group_nameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    name() {
        return this.getRuleContext(0, NameContext);
    }
    get ruleIndex() { return SOQLParser.RULE_data_category_group_name; }
    enterRule(listener) {
        if (listener.enterData_category_group_name)
            listener.enterData_category_group_name(this);
    }
    exitRule(listener) {
        if (listener.exitData_category_group_name)
            listener.exitData_category_group_name(this);
    }
    accept(visitor) {
        if (visitor.visitData_category_group_name)
            return visitor.visitData_category_group_name(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Data_category_group_nameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Data_category_group_nameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Data_category_group_nameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Data_category_group_nameContext.prototype, "accept", null);
exports.Data_category_group_nameContext = Data_category_group_nameContext;
class Data_category_nameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    name() {
        return this.getRuleContext(0, NameContext);
    }
    get ruleIndex() { return SOQLParser.RULE_data_category_name; }
    enterRule(listener) {
        if (listener.enterData_category_name)
            listener.enterData_category_name(this);
    }
    exitRule(listener) {
        if (listener.exitData_category_name)
            listener.exitData_category_name(this);
    }
    accept(visitor) {
        if (visitor.visitData_category_name)
            return visitor.visitData_category_name(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Data_category_nameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Data_category_nameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Data_category_nameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Data_category_nameContext.prototype, "accept", null);
exports.Data_category_nameContext = Data_category_nameContext;
class Alias_nameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ID() { return this.tryGetToken(SOQLParser.ID, 0); }
    keywords_alias_allowed() {
        return this.tryGetRuleContext(0, Keywords_alias_allowedContext);
    }
    date_formula_literal() {
        return this.tryGetRuleContext(0, Date_formula_literalContext);
    }
    date_formula_n_literal_name() {
        return this.tryGetRuleContext(0, Date_formula_n_literal_nameContext);
    }
    function_name() {
        return this.tryGetRuleContext(0, Function_nameContext);
    }
    get ruleIndex() { return SOQLParser.RULE_alias_name; }
    enterRule(listener) {
        if (listener.enterAlias_name)
            listener.enterAlias_name(this);
    }
    exitRule(listener) {
        if (listener.exitAlias_name)
            listener.exitAlias_name(this);
    }
    accept(visitor) {
        if (visitor.visitAlias_name)
            return visitor.visitAlias_name(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Alias_nameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Alias_nameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Alias_nameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Alias_nameContext.prototype, "accept", null);
exports.Alias_nameContext = Alias_nameContext;
class AliasContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    alias_name() {
        return this.getRuleContext(0, Alias_nameContext);
    }
    AS() { return this.tryGetToken(SOQLParser.AS, 0); }
    get ruleIndex() { return SOQLParser.RULE_alias; }
    enterRule(listener) {
        if (listener.enterAlias)
            listener.enterAlias(this);
    }
    exitRule(listener) {
        if (listener.exitAlias)
            listener.exitAlias(this);
    }
    accept(visitor) {
        if (visitor.visitAlias)
            return visitor.visitAlias(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], AliasContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AliasContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AliasContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], AliasContext.prototype, "accept", null);
exports.AliasContext = AliasContext;
class LiteralContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    date_formula_literal() {
        return this.tryGetRuleContext(0, Date_formula_literalContext);
    }
    date_formula_n_literal() {
        return this.tryGetRuleContext(0, Date_formula_n_literalContext);
    }
    datetime_literal() {
        return this.tryGetRuleContext(0, Datetime_literalContext);
    }
    date_literal() {
        return this.tryGetRuleContext(0, Date_literalContext);
    }
    integer_literal() {
        return this.tryGetRuleContext(0, Integer_literalContext);
    }
    real_literal() {
        return this.tryGetRuleContext(0, Real_literalContext);
    }
    string_literal() {
        return this.tryGetRuleContext(0, String_literalContext);
    }
    boolean_literal() {
        return this.tryGetRuleContext(0, Boolean_literalContext);
    }
    null_literal() {
        return this.tryGetRuleContext(0, Null_literalContext);
    }
    get ruleIndex() { return SOQLParser.RULE_literal; }
    enterRule(listener) {
        if (listener.enterLiteral)
            listener.enterLiteral(this);
    }
    exitRule(listener) {
        if (listener.exitLiteral)
            listener.exitLiteral(this);
    }
    accept(visitor) {
        if (visitor.visitLiteral)
            return visitor.visitLiteral(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], LiteralContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LiteralContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LiteralContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], LiteralContext.prototype, "accept", null);
exports.LiteralContext = LiteralContext;
class Date_formula_literalContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    YESTERDAY() { return this.tryGetToken(SOQLParser.YESTERDAY, 0); }
    TODAY() { return this.tryGetToken(SOQLParser.TODAY, 0); }
    TOMORROW() { return this.tryGetToken(SOQLParser.TOMORROW, 0); }
    LAST_WEEK() { return this.tryGetToken(SOQLParser.LAST_WEEK, 0); }
    THIS_WEEK() { return this.tryGetToken(SOQLParser.THIS_WEEK, 0); }
    NEXT_WEEK() { return this.tryGetToken(SOQLParser.NEXT_WEEK, 0); }
    LAST_MONTH() { return this.tryGetToken(SOQLParser.LAST_MONTH, 0); }
    THIS_MONTH() { return this.tryGetToken(SOQLParser.THIS_MONTH, 0); }
    NEXT_MONTH() { return this.tryGetToken(SOQLParser.NEXT_MONTH, 0); }
    LAST_90_DAYS() { return this.tryGetToken(SOQLParser.LAST_90_DAYS, 0); }
    NEXT_90_DAYS() { return this.tryGetToken(SOQLParser.NEXT_90_DAYS, 0); }
    THIS_QUARTER() { return this.tryGetToken(SOQLParser.THIS_QUARTER, 0); }
    LAST_QUARTER() { return this.tryGetToken(SOQLParser.LAST_QUARTER, 0); }
    NEXT_QUARTER() { return this.tryGetToken(SOQLParser.NEXT_QUARTER, 0); }
    THIS_YEAR() { return this.tryGetToken(SOQLParser.THIS_YEAR, 0); }
    LAST_YEAR() { return this.tryGetToken(SOQLParser.LAST_YEAR, 0); }
    NEXT_YEAR() { return this.tryGetToken(SOQLParser.NEXT_YEAR, 0); }
    THIS_FISCAL_QUARTER() { return this.tryGetToken(SOQLParser.THIS_FISCAL_QUARTER, 0); }
    LAST_FISCAL_QUARTER() { return this.tryGetToken(SOQLParser.LAST_FISCAL_QUARTER, 0); }
    NEXT_FISCAL_QUARTER() { return this.tryGetToken(SOQLParser.NEXT_FISCAL_QUARTER, 0); }
    THIS_FISCAL_YEAR() { return this.tryGetToken(SOQLParser.THIS_FISCAL_YEAR, 0); }
    LAST_FISCAL_YEAR() { return this.tryGetToken(SOQLParser.LAST_FISCAL_YEAR, 0); }
    NEXT_FISCAL_YEAR() { return this.tryGetToken(SOQLParser.NEXT_FISCAL_YEAR, 0); }
    get ruleIndex() { return SOQLParser.RULE_date_formula_literal; }
    enterRule(listener) {
        if (listener.enterDate_formula_literal)
            listener.enterDate_formula_literal(this);
    }
    exitRule(listener) {
        if (listener.exitDate_formula_literal)
            listener.exitDate_formula_literal(this);
    }
    accept(visitor) {
        if (visitor.visitDate_formula_literal)
            return visitor.visitDate_formula_literal(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Date_formula_literalContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Date_formula_literalContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Date_formula_literalContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Date_formula_literalContext.prototype, "accept", null);
exports.Date_formula_literalContext = Date_formula_literalContext;
class Date_formula_n_literal_nameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NEXT_N_DAYS() { return this.tryGetToken(SOQLParser.NEXT_N_DAYS, 0); }
    LAST_N_DAYS() { return this.tryGetToken(SOQLParser.LAST_N_DAYS, 0); }
    N_DAYS_AGO() { return this.tryGetToken(SOQLParser.N_DAYS_AGO, 0); }
    NEXT_N_WEEKS() { return this.tryGetToken(SOQLParser.NEXT_N_WEEKS, 0); }
    LAST_N_WEEKS() { return this.tryGetToken(SOQLParser.LAST_N_WEEKS, 0); }
    N_WEEKS_AGO() { return this.tryGetToken(SOQLParser.N_WEEKS_AGO, 0); }
    NEXT_N_MONTHS() { return this.tryGetToken(SOQLParser.NEXT_N_MONTHS, 0); }
    LAST_N_MONTHS() { return this.tryGetToken(SOQLParser.LAST_N_MONTHS, 0); }
    N_MONTHS_AGO() { return this.tryGetToken(SOQLParser.N_MONTHS_AGO, 0); }
    NEXT_N_QUARTERS() { return this.tryGetToken(SOQLParser.NEXT_N_QUARTERS, 0); }
    LAST_N_QUARTERS() { return this.tryGetToken(SOQLParser.LAST_N_QUARTERS, 0); }
    N_QUARTERS_AGO() { return this.tryGetToken(SOQLParser.N_QUARTERS_AGO, 0); }
    NEXT_N_YEARS() { return this.tryGetToken(SOQLParser.NEXT_N_YEARS, 0); }
    LAST_N_YEARS() { return this.tryGetToken(SOQLParser.LAST_N_YEARS, 0); }
    N_YEARS_AGO() { return this.tryGetToken(SOQLParser.N_YEARS_AGO, 0); }
    NEXT_N_FISCAL_QUARTERS() { return this.tryGetToken(SOQLParser.NEXT_N_FISCAL_QUARTERS, 0); }
    LAST_N_FISCAL_QUARTERS() { return this.tryGetToken(SOQLParser.LAST_N_FISCAL_QUARTERS, 0); }
    N_FISCAL_QUARTERS_AGO() { return this.tryGetToken(SOQLParser.N_FISCAL_QUARTERS_AGO, 0); }
    NEXT_N_FISCAL_YEARS() { return this.tryGetToken(SOQLParser.NEXT_N_FISCAL_YEARS, 0); }
    LAST_N_FISCAL_YEARS() { return this.tryGetToken(SOQLParser.LAST_N_FISCAL_YEARS, 0); }
    N_FISCAL_YEARS_AGO() { return this.tryGetToken(SOQLParser.N_FISCAL_YEARS_AGO, 0); }
    get ruleIndex() { return SOQLParser.RULE_date_formula_n_literal_name; }
    enterRule(listener) {
        if (listener.enterDate_formula_n_literal_name)
            listener.enterDate_formula_n_literal_name(this);
    }
    exitRule(listener) {
        if (listener.exitDate_formula_n_literal_name)
            listener.exitDate_formula_n_literal_name(this);
    }
    accept(visitor) {
        if (visitor.visitDate_formula_n_literal_name)
            return visitor.visitDate_formula_n_literal_name(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Date_formula_n_literal_nameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Date_formula_n_literal_nameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Date_formula_n_literal_nameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Date_formula_n_literal_nameContext.prototype, "accept", null);
exports.Date_formula_n_literal_nameContext = Date_formula_n_literal_nameContext;
class Date_formula_n_literalContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    date_formula_n_literal_name() {
        return this.getRuleContext(0, Date_formula_n_literal_nameContext);
    }
    COLON() { return this.getToken(SOQLParser.COLON, 0); }
    UNSIGNED_INTEGER() { return this.getToken(SOQLParser.UNSIGNED_INTEGER, 0); }
    get ruleIndex() { return SOQLParser.RULE_date_formula_n_literal; }
    enterRule(listener) {
        if (listener.enterDate_formula_n_literal)
            listener.enterDate_formula_n_literal(this);
    }
    exitRule(listener) {
        if (listener.exitDate_formula_n_literal)
            listener.exitDate_formula_n_literal(this);
    }
    accept(visitor) {
        if (visitor.visitDate_formula_n_literal)
            return visitor.visitDate_formula_n_literal(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Date_formula_n_literalContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Date_formula_n_literalContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Date_formula_n_literalContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Date_formula_n_literalContext.prototype, "accept", null);
exports.Date_formula_n_literalContext = Date_formula_n_literalContext;
class Datetime_literalContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DATETIME() { return this.getToken(SOQLParser.DATETIME, 0); }
    get ruleIndex() { return SOQLParser.RULE_datetime_literal; }
    enterRule(listener) {
        if (listener.enterDatetime_literal)
            listener.enterDatetime_literal(this);
    }
    exitRule(listener) {
        if (listener.exitDatetime_literal)
            listener.exitDatetime_literal(this);
    }
    accept(visitor) {
        if (visitor.visitDatetime_literal)
            return visitor.visitDatetime_literal(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Datetime_literalContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Datetime_literalContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Datetime_literalContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Datetime_literalContext.prototype, "accept", null);
exports.Datetime_literalContext = Datetime_literalContext;
class Date_literalContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DATE() { return this.getToken(SOQLParser.DATE, 0); }
    get ruleIndex() { return SOQLParser.RULE_date_literal; }
    enterRule(listener) {
        if (listener.enterDate_literal)
            listener.enterDate_literal(this);
    }
    exitRule(listener) {
        if (listener.exitDate_literal)
            listener.exitDate_literal(this);
    }
    accept(visitor) {
        if (visitor.visitDate_literal)
            return visitor.visitDate_literal(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Date_literalContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Date_literalContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Date_literalContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Date_literalContext.prototype, "accept", null);
exports.Date_literalContext = Date_literalContext;
class Integer_literalContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SIGNED_INTEGER() { return this.tryGetToken(SOQLParser.SIGNED_INTEGER, 0); }
    UNSIGNED_INTEGER() { return this.tryGetToken(SOQLParser.UNSIGNED_INTEGER, 0); }
    get ruleIndex() { return SOQLParser.RULE_integer_literal; }
    enterRule(listener) {
        if (listener.enterInteger_literal)
            listener.enterInteger_literal(this);
    }
    exitRule(listener) {
        if (listener.exitInteger_literal)
            listener.exitInteger_literal(this);
    }
    accept(visitor) {
        if (visitor.visitInteger_literal)
            return visitor.visitInteger_literal(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Integer_literalContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Integer_literalContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Integer_literalContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Integer_literalContext.prototype, "accept", null);
exports.Integer_literalContext = Integer_literalContext;
class Real_literalContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    REAL_NUMBER() { return this.getToken(SOQLParser.REAL_NUMBER, 0); }
    get ruleIndex() { return SOQLParser.RULE_real_literal; }
    enterRule(listener) {
        if (listener.enterReal_literal)
            listener.enterReal_literal(this);
    }
    exitRule(listener) {
        if (listener.exitReal_literal)
            listener.exitReal_literal(this);
    }
    accept(visitor) {
        if (visitor.visitReal_literal)
            return visitor.visitReal_literal(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Real_literalContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Real_literalContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Real_literalContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Real_literalContext.prototype, "accept", null);
exports.Real_literalContext = Real_literalContext;
class String_literalContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    STRING_VALUE() { return this.getToken(SOQLParser.STRING_VALUE, 0); }
    get ruleIndex() { return SOQLParser.RULE_string_literal; }
    enterRule(listener) {
        if (listener.enterString_literal)
            listener.enterString_literal(this);
    }
    exitRule(listener) {
        if (listener.exitString_literal)
            listener.exitString_literal(this);
    }
    accept(visitor) {
        if (visitor.visitString_literal)
            return visitor.visitString_literal(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], String_literalContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], String_literalContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], String_literalContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], String_literalContext.prototype, "accept", null);
exports.String_literalContext = String_literalContext;
class Boolean_literalContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    TRUE() { return this.tryGetToken(SOQLParser.TRUE, 0); }
    FALSE() { return this.tryGetToken(SOQLParser.FALSE, 0); }
    get ruleIndex() { return SOQLParser.RULE_boolean_literal; }
    enterRule(listener) {
        if (listener.enterBoolean_literal)
            listener.enterBoolean_literal(this);
    }
    exitRule(listener) {
        if (listener.exitBoolean_literal)
            listener.exitBoolean_literal(this);
    }
    accept(visitor) {
        if (visitor.visitBoolean_literal)
            return visitor.visitBoolean_literal(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Boolean_literalContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Boolean_literalContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Boolean_literalContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Boolean_literalContext.prototype, "accept", null);
exports.Boolean_literalContext = Boolean_literalContext;
class Null_literalContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NULL() { return this.getToken(SOQLParser.NULL, 0); }
    get ruleIndex() { return SOQLParser.RULE_null_literal; }
    enterRule(listener) {
        if (listener.enterNull_literal)
            listener.enterNull_literal(this);
    }
    exitRule(listener) {
        if (listener.exitNull_literal)
            listener.exitNull_literal(this);
    }
    accept(visitor) {
        if (visitor.visitNull_literal)
            return visitor.visitNull_literal(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Null_literalContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Null_literalContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Null_literalContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Null_literalContext.prototype, "accept", null);
exports.Null_literalContext = Null_literalContext;
class Function_nameContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    function_date() {
        return this.tryGetRuleContext(0, Function_dateContext);
    }
    function_aggregate() {
        return this.tryGetRuleContext(0, Function_aggregateContext);
    }
    function_location() {
        return this.tryGetRuleContext(0, Function_locationContext);
    }
    function_other() {
        return this.tryGetRuleContext(0, Function_otherContext);
    }
    get ruleIndex() { return SOQLParser.RULE_function_name; }
    enterRule(listener) {
        if (listener.enterFunction_name)
            listener.enterFunction_name(this);
    }
    exitRule(listener) {
        if (listener.exitFunction_name)
            listener.exitFunction_name(this);
    }
    accept(visitor) {
        if (visitor.visitFunction_name)
            return visitor.visitFunction_name(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Function_nameContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Function_nameContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Function_nameContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Function_nameContext.prototype, "accept", null);
exports.Function_nameContext = Function_nameContext;
class Function_dateContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CALENDAR_MONTH() { return this.tryGetToken(SOQLParser.CALENDAR_MONTH, 0); }
    CALENDAR_QUARTER() { return this.tryGetToken(SOQLParser.CALENDAR_QUARTER, 0); }
    CALENDAR_YEAR() { return this.tryGetToken(SOQLParser.CALENDAR_YEAR, 0); }
    DAY_IN_MONTH() { return this.tryGetToken(SOQLParser.DAY_IN_MONTH, 0); }
    DAY_IN_WEEK() { return this.tryGetToken(SOQLParser.DAY_IN_WEEK, 0); }
    DAY_IN_YEAR() { return this.tryGetToken(SOQLParser.DAY_IN_YEAR, 0); }
    DAY_ONLY() { return this.tryGetToken(SOQLParser.DAY_ONLY, 0); }
    FISCAL_MONTH() { return this.tryGetToken(SOQLParser.FISCAL_MONTH, 0); }
    FISCAL_QUARTER() { return this.tryGetToken(SOQLParser.FISCAL_QUARTER, 0); }
    FISCAL_YEAR() { return this.tryGetToken(SOQLParser.FISCAL_YEAR, 0); }
    HOUR_IN_DAY() { return this.tryGetToken(SOQLParser.HOUR_IN_DAY, 0); }
    WEEK_IN_MONTH() { return this.tryGetToken(SOQLParser.WEEK_IN_MONTH, 0); }
    WEEK_IN_YEAR() { return this.tryGetToken(SOQLParser.WEEK_IN_YEAR, 0); }
    get ruleIndex() { return SOQLParser.RULE_function_date; }
    enterRule(listener) {
        if (listener.enterFunction_date)
            listener.enterFunction_date(this);
    }
    exitRule(listener) {
        if (listener.exitFunction_date)
            listener.exitFunction_date(this);
    }
    accept(visitor) {
        if (visitor.visitFunction_date)
            return visitor.visitFunction_date(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Function_dateContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Function_dateContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Function_dateContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Function_dateContext.prototype, "accept", null);
exports.Function_dateContext = Function_dateContext;
class Function_aggregateContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    AVG() { return this.tryGetToken(SOQLParser.AVG, 0); }
    COUNT() { return this.tryGetToken(SOQLParser.COUNT, 0); }
    COUNT_DISTINCT() { return this.tryGetToken(SOQLParser.COUNT_DISTINCT, 0); }
    MIN() { return this.tryGetToken(SOQLParser.MIN, 0); }
    MAX() { return this.tryGetToken(SOQLParser.MAX, 0); }
    SUM() { return this.tryGetToken(SOQLParser.SUM, 0); }
    get ruleIndex() { return SOQLParser.RULE_function_aggregate; }
    enterRule(listener) {
        if (listener.enterFunction_aggregate)
            listener.enterFunction_aggregate(this);
    }
    exitRule(listener) {
        if (listener.exitFunction_aggregate)
            listener.exitFunction_aggregate(this);
    }
    accept(visitor) {
        if (visitor.visitFunction_aggregate)
            return visitor.visitFunction_aggregate(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Function_aggregateContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Function_aggregateContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Function_aggregateContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Function_aggregateContext.prototype, "accept", null);
exports.Function_aggregateContext = Function_aggregateContext;
class Function_locationContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DISTANCE() { return this.tryGetToken(SOQLParser.DISTANCE, 0); }
    GEOLOCATION() { return this.tryGetToken(SOQLParser.GEOLOCATION, 0); }
    get ruleIndex() { return SOQLParser.RULE_function_location; }
    enterRule(listener) {
        if (listener.enterFunction_location)
            listener.enterFunction_location(this);
    }
    exitRule(listener) {
        if (listener.exitFunction_location)
            listener.exitFunction_location(this);
    }
    accept(visitor) {
        if (visitor.visitFunction_location)
            return visitor.visitFunction_location(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Function_locationContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Function_locationContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Function_locationContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Function_locationContext.prototype, "accept", null);
exports.Function_locationContext = Function_locationContext;
class Function_otherContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FORMAT() { return this.tryGetToken(SOQLParser.FORMAT, 0); }
    TOLABEL() { return this.tryGetToken(SOQLParser.TOLABEL, 0); }
    CONVERT_TIME_ZONE() { return this.tryGetToken(SOQLParser.CONVERT_TIME_ZONE, 0); }
    CONVERT_CURRENCY() { return this.tryGetToken(SOQLParser.CONVERT_CURRENCY, 0); }
    GROUPING() { return this.tryGetToken(SOQLParser.GROUPING, 0); }
    get ruleIndex() { return SOQLParser.RULE_function_other; }
    enterRule(listener) {
        if (listener.enterFunction_other)
            listener.enterFunction_other(this);
    }
    exitRule(listener) {
        if (listener.exitFunction_other)
            listener.exitFunction_other(this);
    }
    accept(visitor) {
        if (visitor.visitFunction_other)
            return visitor.visitFunction_other(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Function_otherContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Function_otherContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Function_otherContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Function_otherContext.prototype, "accept", null);
exports.Function_otherContext = Function_otherContext;
class Soql_queryContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    select_clause() {
        return this.getRuleContext(0, Select_clauseContext);
    }
    from_clause() {
        return this.getRuleContext(0, From_clauseContext);
    }
    EOF() { return this.getToken(SOQLParser.EOF, 0); }
    using_clause() {
        return this.tryGetRuleContext(0, Using_clauseContext);
    }
    where_clause() {
        return this.tryGetRuleContext(0, Where_clauseContext);
    }
    with_clause() {
        return this.tryGetRuleContext(0, With_clauseContext);
    }
    groupby_clause() {
        return this.tryGetRuleContext(0, Groupby_clauseContext);
    }
    orderby_clause() {
        return this.tryGetRuleContext(0, Orderby_clauseContext);
    }
    limit_clause() {
        return this.tryGetRuleContext(0, Limit_clauseContext);
    }
    offset_clause() {
        return this.tryGetRuleContext(0, Offset_clauseContext);
    }
    for_clause() {
        return this.tryGetRuleContext(0, For_clauseContext);
    }
    update_clause() {
        return this.tryGetRuleContext(0, Update_clauseContext);
    }
    having_clause() {
        return this.tryGetRuleContext(0, Having_clauseContext);
    }
    get ruleIndex() { return SOQLParser.RULE_soql_query; }
    enterRule(listener) {
        if (listener.enterSoql_query)
            listener.enterSoql_query(this);
    }
    exitRule(listener) {
        if (listener.exitSoql_query)
            listener.exitSoql_query(this);
    }
    accept(visitor) {
        if (visitor.visitSoql_query)
            return visitor.visitSoql_query(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Soql_queryContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Soql_queryContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Soql_queryContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Soql_queryContext.prototype, "accept", null);
exports.Soql_queryContext = Soql_queryContext;
class Select_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SELECT() { return this.getToken(SOQLParser.SELECT, 0); }
    select_spec(i) {
        if (i === undefined) {
            return this.getRuleContexts(Select_specContext);
        }
        else {
            return this.getRuleContext(i, Select_specContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SOQLParser.COMMA);
        }
        else {
            return this.getToken(SOQLParser.COMMA, i);
        }
    }
    get ruleIndex() { return SOQLParser.RULE_select_clause; }
    enterRule(listener) {
        if (listener.enterSelect_clause)
            listener.enterSelect_clause(this);
    }
    exitRule(listener) {
        if (listener.exitSelect_clause)
            listener.exitSelect_clause(this);
    }
    accept(visitor) {
        if (visitor.visitSelect_clause)
            return visitor.visitSelect_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Select_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Select_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Select_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Select_clauseContext.prototype, "accept", null);
exports.Select_clauseContext = Select_clauseContext;
class From_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FROM() { return this.getToken(SOQLParser.FROM, 0); }
    object_spec(i) {
        if (i === undefined) {
            return this.getRuleContexts(Object_specContext);
        }
        else {
            return this.getRuleContext(i, Object_specContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SOQLParser.COMMA);
        }
        else {
            return this.getToken(SOQLParser.COMMA, i);
        }
    }
    get ruleIndex() { return SOQLParser.RULE_from_clause; }
    enterRule(listener) {
        if (listener.enterFrom_clause)
            listener.enterFrom_clause(this);
    }
    exitRule(listener) {
        if (listener.exitFrom_clause)
            listener.exitFrom_clause(this);
    }
    accept(visitor) {
        if (visitor.visitFrom_clause)
            return visitor.visitFrom_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], From_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], From_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], From_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], From_clauseContext.prototype, "accept", null);
exports.From_clauseContext = From_clauseContext;
class Using_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    USING() { return this.getToken(SOQLParser.USING, 0); }
    SCOPE() { return this.getToken(SOQLParser.SCOPE, 0); }
    filter_scope_name() {
        return this.getRuleContext(0, Filter_scope_nameContext);
    }
    get ruleIndex() { return SOQLParser.RULE_using_clause; }
    enterRule(listener) {
        if (listener.enterUsing_clause)
            listener.enterUsing_clause(this);
    }
    exitRule(listener) {
        if (listener.exitUsing_clause)
            listener.exitUsing_clause(this);
    }
    accept(visitor) {
        if (visitor.visitUsing_clause)
            return visitor.visitUsing_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Using_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Using_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Using_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Using_clauseContext.prototype, "accept", null);
exports.Using_clauseContext = Using_clauseContext;
class Where_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    WHERE() { return this.getToken(SOQLParser.WHERE, 0); }
    condition() {
        return this.getRuleContext(0, ConditionContext);
    }
    get ruleIndex() { return SOQLParser.RULE_where_clause; }
    enterRule(listener) {
        if (listener.enterWhere_clause)
            listener.enterWhere_clause(this);
    }
    exitRule(listener) {
        if (listener.exitWhere_clause)
            listener.exitWhere_clause(this);
    }
    accept(visitor) {
        if (visitor.visitWhere_clause)
            return visitor.visitWhere_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Where_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Where_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Where_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Where_clauseContext.prototype, "accept", null);
exports.Where_clauseContext = Where_clauseContext;
class Groupby_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    GROUP() { return this.getToken(SOQLParser.GROUP, 0); }
    BY() { return this.getToken(SOQLParser.BY, 0); }
    group_by_rollup_clause() {
        return this.tryGetRuleContext(0, Group_by_rollup_clauseContext);
    }
    group_by_cube_clause() {
        return this.tryGetRuleContext(0, Group_by_cube_clauseContext);
    }
    group_by_plain_clause() {
        return this.tryGetRuleContext(0, Group_by_plain_clauseContext);
    }
    get ruleIndex() { return SOQLParser.RULE_groupby_clause; }
    enterRule(listener) {
        if (listener.enterGroupby_clause)
            listener.enterGroupby_clause(this);
    }
    exitRule(listener) {
        if (listener.exitGroupby_clause)
            listener.exitGroupby_clause(this);
    }
    accept(visitor) {
        if (visitor.visitGroupby_clause)
            return visitor.visitGroupby_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Groupby_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Groupby_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Groupby_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Groupby_clauseContext.prototype, "accept", null);
exports.Groupby_clauseContext = Groupby_clauseContext;
class Having_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    HAVING() { return this.getToken(SOQLParser.HAVING, 0); }
    condition() {
        return this.getRuleContext(0, ConditionContext);
    }
    get ruleIndex() { return SOQLParser.RULE_having_clause; }
    enterRule(listener) {
        if (listener.enterHaving_clause)
            listener.enterHaving_clause(this);
    }
    exitRule(listener) {
        if (listener.exitHaving_clause)
            listener.exitHaving_clause(this);
    }
    accept(visitor) {
        if (visitor.visitHaving_clause)
            return visitor.visitHaving_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Having_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Having_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Having_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Having_clauseContext.prototype, "accept", null);
exports.Having_clauseContext = Having_clauseContext;
class Orderby_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ORDER() { return this.getToken(SOQLParser.ORDER, 0); }
    BY() { return this.getToken(SOQLParser.BY, 0); }
    order_by_list() {
        return this.getRuleContext(0, Order_by_listContext);
    }
    get ruleIndex() { return SOQLParser.RULE_orderby_clause; }
    enterRule(listener) {
        if (listener.enterOrderby_clause)
            listener.enterOrderby_clause(this);
    }
    exitRule(listener) {
        if (listener.exitOrderby_clause)
            listener.exitOrderby_clause(this);
    }
    accept(visitor) {
        if (visitor.visitOrderby_clause)
            return visitor.visitOrderby_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Orderby_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Orderby_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Orderby_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Orderby_clauseContext.prototype, "accept", null);
exports.Orderby_clauseContext = Orderby_clauseContext;
class Limit_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LIMIT() { return this.getToken(SOQLParser.LIMIT, 0); }
    UNSIGNED_INTEGER() { return this.getToken(SOQLParser.UNSIGNED_INTEGER, 0); }
    get ruleIndex() { return SOQLParser.RULE_limit_clause; }
    enterRule(listener) {
        if (listener.enterLimit_clause)
            listener.enterLimit_clause(this);
    }
    exitRule(listener) {
        if (listener.exitLimit_clause)
            listener.exitLimit_clause(this);
    }
    accept(visitor) {
        if (visitor.visitLimit_clause)
            return visitor.visitLimit_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Limit_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Limit_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Limit_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Limit_clauseContext.prototype, "accept", null);
exports.Limit_clauseContext = Limit_clauseContext;
class Offset_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    OFFSET() { return this.getToken(SOQLParser.OFFSET, 0); }
    UNSIGNED_INTEGER() { return this.getToken(SOQLParser.UNSIGNED_INTEGER, 0); }
    get ruleIndex() { return SOQLParser.RULE_offset_clause; }
    enterRule(listener) {
        if (listener.enterOffset_clause)
            listener.enterOffset_clause(this);
    }
    exitRule(listener) {
        if (listener.exitOffset_clause)
            listener.exitOffset_clause(this);
    }
    accept(visitor) {
        if (visitor.visitOffset_clause)
            return visitor.visitOffset_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Offset_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Offset_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Offset_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Offset_clauseContext.prototype, "accept", null);
exports.Offset_clauseContext = Offset_clauseContext;
class For_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    FOR() { return this.getToken(SOQLParser.FOR, 0); }
    for_value(i) {
        if (i === undefined) {
            return this.getRuleContexts(For_valueContext);
        }
        else {
            return this.getRuleContext(i, For_valueContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SOQLParser.COMMA);
        }
        else {
            return this.getToken(SOQLParser.COMMA, i);
        }
    }
    get ruleIndex() { return SOQLParser.RULE_for_clause; }
    enterRule(listener) {
        if (listener.enterFor_clause)
            listener.enterFor_clause(this);
    }
    exitRule(listener) {
        if (listener.exitFor_clause)
            listener.exitFor_clause(this);
    }
    accept(visitor) {
        if (visitor.visitFor_clause)
            return visitor.visitFor_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], For_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], For_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], For_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], For_clauseContext.prototype, "accept", null);
exports.For_clauseContext = For_clauseContext;
class Update_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    UPDATE() { return this.getToken(SOQLParser.UPDATE, 0); }
    update_value(i) {
        if (i === undefined) {
            return this.getRuleContexts(Update_valueContext);
        }
        else {
            return this.getRuleContext(i, Update_valueContext);
        }
    }
    COMMA() { return this.tryGetToken(SOQLParser.COMMA, 0); }
    get ruleIndex() { return SOQLParser.RULE_update_clause; }
    enterRule(listener) {
        if (listener.enterUpdate_clause)
            listener.enterUpdate_clause(this);
    }
    exitRule(listener) {
        if (listener.exitUpdate_clause)
            listener.exitUpdate_clause(this);
    }
    accept(visitor) {
        if (visitor.visitUpdate_clause)
            return visitor.visitUpdate_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Update_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Update_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Update_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Update_clauseContext.prototype, "accept", null);
exports.Update_clauseContext = Update_clauseContext;
class Soql_subqueryContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LPAREN() { return this.getToken(SOQLParser.LPAREN, 0); }
    subquery_select_clause() {
        return this.getRuleContext(0, Subquery_select_clauseContext);
    }
    from_clause() {
        return this.getRuleContext(0, From_clauseContext);
    }
    RPAREN() { return this.getToken(SOQLParser.RPAREN, 0); }
    using_clause() {
        return this.tryGetRuleContext(0, Using_clauseContext);
    }
    where_clause() {
        return this.tryGetRuleContext(0, Where_clauseContext);
    }
    with_clause() {
        return this.tryGetRuleContext(0, With_clauseContext);
    }
    orderby_clause() {
        return this.tryGetRuleContext(0, Orderby_clauseContext);
    }
    limit_clause() {
        return this.tryGetRuleContext(0, Limit_clauseContext);
    }
    offset_clause() {
        return this.tryGetRuleContext(0, Offset_clauseContext);
    }
    for_clause() {
        return this.tryGetRuleContext(0, For_clauseContext);
    }
    update_clause() {
        return this.tryGetRuleContext(0, Update_clauseContext);
    }
    get ruleIndex() { return SOQLParser.RULE_soql_subquery; }
    enterRule(listener) {
        if (listener.enterSoql_subquery)
            listener.enterSoql_subquery(this);
    }
    exitRule(listener) {
        if (listener.exitSoql_subquery)
            listener.exitSoql_subquery(this);
    }
    accept(visitor) {
        if (visitor.visitSoql_subquery)
            return visitor.visitSoql_subquery(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Soql_subqueryContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Soql_subqueryContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Soql_subqueryContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Soql_subqueryContext.prototype, "accept", null);
exports.Soql_subqueryContext = Soql_subqueryContext;
class Subquery_select_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    SELECT() { return this.getToken(SOQLParser.SELECT, 0); }
    subquery_select_spec(i) {
        if (i === undefined) {
            return this.getRuleContexts(Subquery_select_specContext);
        }
        else {
            return this.getRuleContext(i, Subquery_select_specContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SOQLParser.COMMA);
        }
        else {
            return this.getToken(SOQLParser.COMMA, i);
        }
    }
    get ruleIndex() { return SOQLParser.RULE_subquery_select_clause; }
    enterRule(listener) {
        if (listener.enterSubquery_select_clause)
            listener.enterSubquery_select_clause(this);
    }
    exitRule(listener) {
        if (listener.exitSubquery_select_clause)
            listener.exitSubquery_select_clause(this);
    }
    accept(visitor) {
        if (visitor.visitSubquery_select_clause)
            return visitor.visitSubquery_select_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Subquery_select_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Subquery_select_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Subquery_select_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Subquery_select_clauseContext.prototype, "accept", null);
exports.Subquery_select_clauseContext = Subquery_select_clauseContext;
class Select_specContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    field_spec() {
        return this.tryGetRuleContext(0, Field_specContext);
    }
    function_call_spec() {
        return this.tryGetRuleContext(0, Function_call_specContext);
    }
    soql_subquery() {
        return this.tryGetRuleContext(0, Soql_subqueryContext);
    }
    typeof_spec() {
        return this.tryGetRuleContext(0, Typeof_specContext);
    }
    get ruleIndex() { return SOQLParser.RULE_select_spec; }
    enterRule(listener) {
        if (listener.enterSelect_spec)
            listener.enterSelect_spec(this);
    }
    exitRule(listener) {
        if (listener.exitSelect_spec)
            listener.exitSelect_spec(this);
    }
    accept(visitor) {
        if (visitor.visitSelect_spec)
            return visitor.visitSelect_spec(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Select_specContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Select_specContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Select_specContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Select_specContext.prototype, "accept", null);
exports.Select_specContext = Select_specContext;
class Subquery_select_specContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    field_spec() {
        return this.tryGetRuleContext(0, Field_specContext);
    }
    function_call_spec() {
        return this.tryGetRuleContext(0, Function_call_specContext);
    }
    get ruleIndex() { return SOQLParser.RULE_subquery_select_spec; }
    enterRule(listener) {
        if (listener.enterSubquery_select_spec)
            listener.enterSubquery_select_spec(this);
    }
    exitRule(listener) {
        if (listener.exitSubquery_select_spec)
            listener.exitSubquery_select_spec(this);
    }
    accept(visitor) {
        if (visitor.visitSubquery_select_spec)
            return visitor.visitSubquery_select_spec(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Subquery_select_specContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Subquery_select_specContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Subquery_select_specContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Subquery_select_specContext.prototype, "accept", null);
exports.Subquery_select_specContext = Subquery_select_specContext;
class Field_specContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    field() {
        return this.getRuleContext(0, FieldContext);
    }
    alias() {
        return this.tryGetRuleContext(0, AliasContext);
    }
    get ruleIndex() { return SOQLParser.RULE_field_spec; }
    enterRule(listener) {
        if (listener.enterField_spec)
            listener.enterField_spec(this);
    }
    exitRule(listener) {
        if (listener.exitField_spec)
            listener.exitField_spec(this);
    }
    accept(visitor) {
        if (visitor.visitField_spec)
            return visitor.visitField_spec(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Field_specContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Field_specContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Field_specContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Field_specContext.prototype, "accept", null);
exports.Field_specContext = Field_specContext;
class Function_call_specContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    function_call() {
        return this.getRuleContext(0, Function_callContext);
    }
    alias() {
        return this.tryGetRuleContext(0, AliasContext);
    }
    get ruleIndex() { return SOQLParser.RULE_function_call_spec; }
    enterRule(listener) {
        if (listener.enterFunction_call_spec)
            listener.enterFunction_call_spec(this);
    }
    exitRule(listener) {
        if (listener.exitFunction_call_spec)
            listener.exitFunction_call_spec(this);
    }
    accept(visitor) {
        if (visitor.visitFunction_call_spec)
            return visitor.visitFunction_call_spec(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Function_call_specContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Function_call_specContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Function_call_specContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Function_call_specContext.prototype, "accept", null);
exports.Function_call_specContext = Function_call_specContext;
class FieldContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    field_name() {
        return this.getRuleContext(0, Field_nameContext);
    }
    object_prefix() {
        return this.tryGetRuleContext(0, Object_prefixContext);
    }
    get ruleIndex() { return SOQLParser.RULE_field; }
    enterRule(listener) {
        if (listener.enterField)
            listener.enterField(this);
    }
    exitRule(listener) {
        if (listener.exitField)
            listener.exitField(this);
    }
    accept(visitor) {
        if (visitor.visitField)
            return visitor.visitField(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], FieldContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FieldContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FieldContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FieldContext.prototype, "accept", null);
exports.FieldContext = FieldContext;
class Function_callContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    function_name() {
        return this.getRuleContext(0, Function_nameContext);
    }
    LPAREN() { return this.getToken(SOQLParser.LPAREN, 0); }
    RPAREN() { return this.getToken(SOQLParser.RPAREN, 0); }
    function_parameter_list() {
        return this.tryGetRuleContext(0, Function_parameter_listContext);
    }
    get ruleIndex() { return SOQLParser.RULE_function_call; }
    enterRule(listener) {
        if (listener.enterFunction_call)
            listener.enterFunction_call(this);
    }
    exitRule(listener) {
        if (listener.exitFunction_call)
            listener.exitFunction_call(this);
    }
    accept(visitor) {
        if (visitor.visitFunction_call)
            return visitor.visitFunction_call(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Function_callContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Function_callContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Function_callContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Function_callContext.prototype, "accept", null);
exports.Function_callContext = Function_callContext;
class Function_parameter_listContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    function_parameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(Function_parameterContext);
        }
        else {
            return this.getRuleContext(i, Function_parameterContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SOQLParser.COMMA);
        }
        else {
            return this.getToken(SOQLParser.COMMA, i);
        }
    }
    get ruleIndex() { return SOQLParser.RULE_function_parameter_list; }
    enterRule(listener) {
        if (listener.enterFunction_parameter_list)
            listener.enterFunction_parameter_list(this);
    }
    exitRule(listener) {
        if (listener.exitFunction_parameter_list)
            listener.exitFunction_parameter_list(this);
    }
    accept(visitor) {
        if (visitor.visitFunction_parameter_list)
            return visitor.visitFunction_parameter_list(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Function_parameter_listContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Function_parameter_listContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Function_parameter_listContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Function_parameter_listContext.prototype, "accept", null);
exports.Function_parameter_listContext = Function_parameter_listContext;
class Function_parameterContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    field() {
        return this.tryGetRuleContext(0, FieldContext);
    }
    literal() {
        return this.tryGetRuleContext(0, LiteralContext);
    }
    function_call() {
        return this.tryGetRuleContext(0, Function_callContext);
    }
    get ruleIndex() { return SOQLParser.RULE_function_parameter; }
    enterRule(listener) {
        if (listener.enterFunction_parameter)
            listener.enterFunction_parameter(this);
    }
    exitRule(listener) {
        if (listener.exitFunction_parameter)
            listener.exitFunction_parameter(this);
    }
    accept(visitor) {
        if (visitor.visitFunction_parameter)
            return visitor.visitFunction_parameter(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Function_parameterContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Function_parameterContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Function_parameterContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Function_parameterContext.prototype, "accept", null);
exports.Function_parameterContext = Function_parameterContext;
class Typeof_specContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    TYPEOF() { return this.getToken(SOQLParser.TYPEOF, 0); }
    field() {
        return this.getRuleContext(0, FieldContext);
    }
    typeof_when_then_clause_list() {
        return this.getRuleContext(0, Typeof_when_then_clause_listContext);
    }
    END() { return this.getToken(SOQLParser.END, 0); }
    typeof_else_clause() {
        return this.tryGetRuleContext(0, Typeof_else_clauseContext);
    }
    get ruleIndex() { return SOQLParser.RULE_typeof_spec; }
    enterRule(listener) {
        if (listener.enterTypeof_spec)
            listener.enterTypeof_spec(this);
    }
    exitRule(listener) {
        if (listener.exitTypeof_spec)
            listener.exitTypeof_spec(this);
    }
    accept(visitor) {
        if (visitor.visitTypeof_spec)
            return visitor.visitTypeof_spec(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Typeof_specContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Typeof_specContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Typeof_specContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Typeof_specContext.prototype, "accept", null);
exports.Typeof_specContext = Typeof_specContext;
class Typeof_when_then_clause_listContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    typeof_when_then_clause(i) {
        if (i === undefined) {
            return this.getRuleContexts(Typeof_when_then_clauseContext);
        }
        else {
            return this.getRuleContext(i, Typeof_when_then_clauseContext);
        }
    }
    get ruleIndex() { return SOQLParser.RULE_typeof_when_then_clause_list; }
    enterRule(listener) {
        if (listener.enterTypeof_when_then_clause_list)
            listener.enterTypeof_when_then_clause_list(this);
    }
    exitRule(listener) {
        if (listener.exitTypeof_when_then_clause_list)
            listener.exitTypeof_when_then_clause_list(this);
    }
    accept(visitor) {
        if (visitor.visitTypeof_when_then_clause_list)
            return visitor.visitTypeof_when_then_clause_list(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Typeof_when_then_clause_listContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Typeof_when_then_clause_listContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Typeof_when_then_clause_listContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Typeof_when_then_clause_listContext.prototype, "accept", null);
exports.Typeof_when_then_clause_listContext = Typeof_when_then_clause_listContext;
class Typeof_when_then_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    WHEN() { return this.getToken(SOQLParser.WHEN, 0); }
    object_name() {
        return this.getRuleContext(0, Object_nameContext);
    }
    typeof_then_clause() {
        return this.getRuleContext(0, Typeof_then_clauseContext);
    }
    get ruleIndex() { return SOQLParser.RULE_typeof_when_then_clause; }
    enterRule(listener) {
        if (listener.enterTypeof_when_then_clause)
            listener.enterTypeof_when_then_clause(this);
    }
    exitRule(listener) {
        if (listener.exitTypeof_when_then_clause)
            listener.exitTypeof_when_then_clause(this);
    }
    accept(visitor) {
        if (visitor.visitTypeof_when_then_clause)
            return visitor.visitTypeof_when_then_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Typeof_when_then_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Typeof_when_then_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Typeof_when_then_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Typeof_when_then_clauseContext.prototype, "accept", null);
exports.Typeof_when_then_clauseContext = Typeof_when_then_clauseContext;
class Typeof_then_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    THEN() { return this.getToken(SOQLParser.THEN, 0); }
    field_list() {
        return this.getRuleContext(0, Field_listContext);
    }
    get ruleIndex() { return SOQLParser.RULE_typeof_then_clause; }
    enterRule(listener) {
        if (listener.enterTypeof_then_clause)
            listener.enterTypeof_then_clause(this);
    }
    exitRule(listener) {
        if (listener.exitTypeof_then_clause)
            listener.exitTypeof_then_clause(this);
    }
    accept(visitor) {
        if (visitor.visitTypeof_then_clause)
            return visitor.visitTypeof_then_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Typeof_then_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Typeof_then_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Typeof_then_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Typeof_then_clauseContext.prototype, "accept", null);
exports.Typeof_then_clauseContext = Typeof_then_clauseContext;
class Typeof_else_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ELSE() { return this.getToken(SOQLParser.ELSE, 0); }
    field_list() {
        return this.getRuleContext(0, Field_listContext);
    }
    get ruleIndex() { return SOQLParser.RULE_typeof_else_clause; }
    enterRule(listener) {
        if (listener.enterTypeof_else_clause)
            listener.enterTypeof_else_clause(this);
    }
    exitRule(listener) {
        if (listener.exitTypeof_else_clause)
            listener.exitTypeof_else_clause(this);
    }
    accept(visitor) {
        if (visitor.visitTypeof_else_clause)
            return visitor.visitTypeof_else_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Typeof_else_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Typeof_else_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Typeof_else_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Typeof_else_clauseContext.prototype, "accept", null);
exports.Typeof_else_clauseContext = Typeof_else_clauseContext;
class Field_listContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    field(i) {
        if (i === undefined) {
            return this.getRuleContexts(FieldContext);
        }
        else {
            return this.getRuleContext(i, FieldContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SOQLParser.COMMA);
        }
        else {
            return this.getToken(SOQLParser.COMMA, i);
        }
    }
    get ruleIndex() { return SOQLParser.RULE_field_list; }
    enterRule(listener) {
        if (listener.enterField_list)
            listener.enterField_list(this);
    }
    exitRule(listener) {
        if (listener.exitField_list)
            listener.exitField_list(this);
    }
    accept(visitor) {
        if (visitor.visitField_list)
            return visitor.visitField_list(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Field_listContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Field_listContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Field_listContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Field_listContext.prototype, "accept", null);
exports.Field_listContext = Field_listContext;
class Object_specContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    object_name() {
        return this.getRuleContext(0, Object_nameContext);
    }
    object_prefix() {
        return this.tryGetRuleContext(0, Object_prefixContext);
    }
    alias() {
        return this.tryGetRuleContext(0, AliasContext);
    }
    get ruleIndex() { return SOQLParser.RULE_object_spec; }
    enterRule(listener) {
        if (listener.enterObject_spec)
            listener.enterObject_spec(this);
    }
    exitRule(listener) {
        if (listener.exitObject_spec)
            listener.exitObject_spec(this);
    }
    accept(visitor) {
        if (visitor.visitObject_spec)
            return visitor.visitObject_spec(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Object_specContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Object_specContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Object_specContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Object_specContext.prototype, "accept", null);
exports.Object_specContext = Object_specContext;
class Object_prefixContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    object_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Object_nameContext);
        }
        else {
            return this.getRuleContext(i, Object_nameContext);
        }
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(SOQLParser.DOT);
        }
        else {
            return this.getToken(SOQLParser.DOT, i);
        }
    }
    get ruleIndex() { return SOQLParser.RULE_object_prefix; }
    enterRule(listener) {
        if (listener.enterObject_prefix)
            listener.enterObject_prefix(this);
    }
    exitRule(listener) {
        if (listener.exitObject_prefix)
            listener.exitObject_prefix(this);
    }
    accept(visitor) {
        if (visitor.visitObject_prefix)
            return visitor.visitObject_prefix(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Object_prefixContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Object_prefixContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Object_prefixContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Object_prefixContext.prototype, "accept", null);
exports.Object_prefixContext = Object_prefixContext;
class Comparison_operatorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    EQ() { return this.tryGetToken(SOQLParser.EQ, 0); }
    NOT_EQ() { return this.tryGetToken(SOQLParser.NOT_EQ, 0); }
    LET() { return this.tryGetToken(SOQLParser.LET, 0); }
    GET() { return this.tryGetToken(SOQLParser.GET, 0); }
    GTH() { return this.tryGetToken(SOQLParser.GTH, 0); }
    LTH() { return this.tryGetToken(SOQLParser.LTH, 0); }
    get ruleIndex() { return SOQLParser.RULE_comparison_operator; }
    enterRule(listener) {
        if (listener.enterComparison_operator)
            listener.enterComparison_operator(this);
    }
    exitRule(listener) {
        if (listener.exitComparison_operator)
            listener.exitComparison_operator(this);
    }
    accept(visitor) {
        if (visitor.visitComparison_operator)
            return visitor.visitComparison_operator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Comparison_operatorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Comparison_operatorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Comparison_operatorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Comparison_operatorContext.prototype, "accept", null);
exports.Comparison_operatorContext = Comparison_operatorContext;
class Set_operatorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    IN() { return this.tryGetToken(SOQLParser.IN, 0); }
    NOT() { return this.tryGetToken(SOQLParser.NOT, 0); }
    INCLUDES() { return this.tryGetToken(SOQLParser.INCLUDES, 0); }
    EXCLUDES() { return this.tryGetToken(SOQLParser.EXCLUDES, 0); }
    get ruleIndex() { return SOQLParser.RULE_set_operator; }
    enterRule(listener) {
        if (listener.enterSet_operator)
            listener.enterSet_operator(this);
    }
    exitRule(listener) {
        if (listener.exitSet_operator)
            listener.exitSet_operator(this);
    }
    accept(visitor) {
        if (visitor.visitSet_operator)
            return visitor.visitSet_operator(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Set_operatorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Set_operatorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Set_operatorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Set_operatorContext.prototype, "accept", null);
exports.Set_operatorContext = Set_operatorContext;
class ConditionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    condition1(i) {
        if (i === undefined) {
            return this.getRuleContexts(Condition1Context);
        }
        else {
            return this.getRuleContext(i, Condition1Context);
        }
    }
    OR(i) {
        if (i === undefined) {
            return this.getTokens(SOQLParser.OR);
        }
        else {
            return this.getToken(SOQLParser.OR, i);
        }
    }
    AND(i) {
        if (i === undefined) {
            return this.getTokens(SOQLParser.AND);
        }
        else {
            return this.getToken(SOQLParser.AND, i);
        }
    }
    get ruleIndex() { return SOQLParser.RULE_condition; }
    enterRule(listener) {
        if (listener.enterCondition)
            listener.enterCondition(this);
    }
    exitRule(listener) {
        if (listener.exitCondition)
            listener.exitCondition(this);
    }
    accept(visitor) {
        if (visitor.visitCondition)
            return visitor.visitCondition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], ConditionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConditionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ConditionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ConditionContext.prototype, "accept", null);
exports.ConditionContext = ConditionContext;
class Condition1Context extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    simple_condition() {
        return this.tryGetRuleContext(0, Simple_conditionContext);
    }
    parenthesis() {
        return this.tryGetRuleContext(0, ParenthesisContext);
    }
    NOT() { return this.tryGetToken(SOQLParser.NOT, 0); }
    get ruleIndex() { return SOQLParser.RULE_condition1; }
    enterRule(listener) {
        if (listener.enterCondition1)
            listener.enterCondition1(this);
    }
    exitRule(listener) {
        if (listener.exitCondition1)
            listener.exitCondition1(this);
    }
    accept(visitor) {
        if (visitor.visitCondition1)
            return visitor.visitCondition1(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Condition1Context.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Condition1Context.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Condition1Context.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Condition1Context.prototype, "accept", null);
exports.Condition1Context = Condition1Context;
class ParenthesisContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LPAREN() { return this.getToken(SOQLParser.LPAREN, 0); }
    condition() {
        return this.getRuleContext(0, ConditionContext);
    }
    RPAREN() { return this.getToken(SOQLParser.RPAREN, 0); }
    get ruleIndex() { return SOQLParser.RULE_parenthesis; }
    enterRule(listener) {
        if (listener.enterParenthesis)
            listener.enterParenthesis(this);
    }
    exitRule(listener) {
        if (listener.exitParenthesis)
            listener.exitParenthesis(this);
    }
    accept(visitor) {
        if (visitor.visitParenthesis)
            return visitor.visitParenthesis(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], ParenthesisContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ParenthesisContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ParenthesisContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ParenthesisContext.prototype, "accept", null);
exports.ParenthesisContext = ParenthesisContext;
class Simple_conditionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    field_based_condition() {
        return this.tryGetRuleContext(0, Field_based_conditionContext);
    }
    set_based_condition() {
        return this.tryGetRuleContext(0, Set_based_conditionContext);
    }
    like_based_condition() {
        return this.tryGetRuleContext(0, Like_based_conditionContext);
    }
    get ruleIndex() { return SOQLParser.RULE_simple_condition; }
    enterRule(listener) {
        if (listener.enterSimple_condition)
            listener.enterSimple_condition(this);
    }
    exitRule(listener) {
        if (listener.exitSimple_condition)
            listener.exitSimple_condition(this);
    }
    accept(visitor) {
        if (visitor.visitSimple_condition)
            return visitor.visitSimple_condition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Simple_conditionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Simple_conditionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Simple_conditionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Simple_conditionContext.prototype, "accept", null);
exports.Simple_conditionContext = Simple_conditionContext;
class Field_based_conditionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    condition_field() {
        return this.getRuleContext(0, Condition_fieldContext);
    }
    comparison_operator() {
        return this.getRuleContext(0, Comparison_operatorContext);
    }
    literal() {
        return this.getRuleContext(0, LiteralContext);
    }
    get ruleIndex() { return SOQLParser.RULE_field_based_condition; }
    enterRule(listener) {
        if (listener.enterField_based_condition)
            listener.enterField_based_condition(this);
    }
    exitRule(listener) {
        if (listener.exitField_based_condition)
            listener.exitField_based_condition(this);
    }
    accept(visitor) {
        if (visitor.visitField_based_condition)
            return visitor.visitField_based_condition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Field_based_conditionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Field_based_conditionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Field_based_conditionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Field_based_conditionContext.prototype, "accept", null);
exports.Field_based_conditionContext = Field_based_conditionContext;
class Set_based_conditionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    condition_field() {
        return this.getRuleContext(0, Condition_fieldContext);
    }
    set_operator() {
        return this.getRuleContext(0, Set_operatorContext);
    }
    soql_subquery() {
        return this.tryGetRuleContext(0, Soql_subqueryContext);
    }
    set_values() {
        return this.tryGetRuleContext(0, Set_valuesContext);
    }
    get ruleIndex() { return SOQLParser.RULE_set_based_condition; }
    enterRule(listener) {
        if (listener.enterSet_based_condition)
            listener.enterSet_based_condition(this);
    }
    exitRule(listener) {
        if (listener.exitSet_based_condition)
            listener.exitSet_based_condition(this);
    }
    accept(visitor) {
        if (visitor.visitSet_based_condition)
            return visitor.visitSet_based_condition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Set_based_conditionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Set_based_conditionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Set_based_conditionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Set_based_conditionContext.prototype, "accept", null);
exports.Set_based_conditionContext = Set_based_conditionContext;
class Like_based_conditionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    condition_field() {
        return this.getRuleContext(0, Condition_fieldContext);
    }
    LIKE() { return this.getToken(SOQLParser.LIKE, 0); }
    STRING_VALUE() { return this.tryGetToken(SOQLParser.STRING_VALUE, 0); }
    LIKE_STRING_VALUE() { return this.tryGetToken(SOQLParser.LIKE_STRING_VALUE, 0); }
    get ruleIndex() { return SOQLParser.RULE_like_based_condition; }
    enterRule(listener) {
        if (listener.enterLike_based_condition)
            listener.enterLike_based_condition(this);
    }
    exitRule(listener) {
        if (listener.exitLike_based_condition)
            listener.exitLike_based_condition(this);
    }
    accept(visitor) {
        if (visitor.visitLike_based_condition)
            return visitor.visitLike_based_condition(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Like_based_conditionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Like_based_conditionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Like_based_conditionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Like_based_conditionContext.prototype, "accept", null);
exports.Like_based_conditionContext = Like_based_conditionContext;
class Condition_fieldContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    field() {
        return this.tryGetRuleContext(0, FieldContext);
    }
    function_call() {
        return this.tryGetRuleContext(0, Function_callContext);
    }
    get ruleIndex() { return SOQLParser.RULE_condition_field; }
    enterRule(listener) {
        if (listener.enterCondition_field)
            listener.enterCondition_field(this);
    }
    exitRule(listener) {
        if (listener.exitCondition_field)
            listener.exitCondition_field(this);
    }
    accept(visitor) {
        if (visitor.visitCondition_field)
            return visitor.visitCondition_field(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Condition_fieldContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Condition_fieldContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Condition_fieldContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Condition_fieldContext.prototype, "accept", null);
exports.Condition_fieldContext = Condition_fieldContext;
class Set_valuesContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LPAREN() { return this.getToken(SOQLParser.LPAREN, 0); }
    set_value_list() {
        return this.getRuleContext(0, Set_value_listContext);
    }
    RPAREN() { return this.getToken(SOQLParser.RPAREN, 0); }
    get ruleIndex() { return SOQLParser.RULE_set_values; }
    enterRule(listener) {
        if (listener.enterSet_values)
            listener.enterSet_values(this);
    }
    exitRule(listener) {
        if (listener.exitSet_values)
            listener.exitSet_values(this);
    }
    accept(visitor) {
        if (visitor.visitSet_values)
            return visitor.visitSet_values(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Set_valuesContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Set_valuesContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Set_valuesContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Set_valuesContext.prototype, "accept", null);
exports.Set_valuesContext = Set_valuesContext;
class Set_value_listContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    literal(i) {
        if (i === undefined) {
            return this.getRuleContexts(LiteralContext);
        }
        else {
            return this.getRuleContext(i, LiteralContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SOQLParser.COMMA);
        }
        else {
            return this.getToken(SOQLParser.COMMA, i);
        }
    }
    get ruleIndex() { return SOQLParser.RULE_set_value_list; }
    enterRule(listener) {
        if (listener.enterSet_value_list)
            listener.enterSet_value_list(this);
    }
    exitRule(listener) {
        if (listener.exitSet_value_list)
            listener.exitSet_value_list(this);
    }
    accept(visitor) {
        if (visitor.visitSet_value_list)
            return visitor.visitSet_value_list(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Set_value_listContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Set_value_listContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Set_value_listContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Set_value_listContext.prototype, "accept", null);
exports.Set_value_listContext = Set_value_listContext;
class With_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    WITH() { return this.getToken(SOQLParser.WITH, 0); }
    with_plain_clause() {
        return this.tryGetRuleContext(0, With_plain_clauseContext);
    }
    with_data_category_clause() {
        return this.tryGetRuleContext(0, With_data_category_clauseContext);
    }
    get ruleIndex() { return SOQLParser.RULE_with_clause; }
    enterRule(listener) {
        if (listener.enterWith_clause)
            listener.enterWith_clause(this);
    }
    exitRule(listener) {
        if (listener.exitWith_clause)
            listener.exitWith_clause(this);
    }
    accept(visitor) {
        if (visitor.visitWith_clause)
            return visitor.visitWith_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], With_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], With_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], With_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], With_clauseContext.prototype, "accept", null);
exports.With_clauseContext = With_clauseContext;
class With_plain_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    field_based_condition() {
        return this.getRuleContext(0, Field_based_conditionContext);
    }
    get ruleIndex() { return SOQLParser.RULE_with_plain_clause; }
    enterRule(listener) {
        if (listener.enterWith_plain_clause)
            listener.enterWith_plain_clause(this);
    }
    exitRule(listener) {
        if (listener.exitWith_plain_clause)
            listener.exitWith_plain_clause(this);
    }
    accept(visitor) {
        if (visitor.visitWith_plain_clause)
            return visitor.visitWith_plain_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], With_plain_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], With_plain_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], With_plain_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], With_plain_clauseContext.prototype, "accept", null);
exports.With_plain_clauseContext = With_plain_clauseContext;
class With_data_category_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    DATA() { return this.getToken(SOQLParser.DATA, 0); }
    CATEGORY() { return this.getToken(SOQLParser.CATEGORY, 0); }
    data_category_spec_list() {
        return this.getRuleContext(0, Data_category_spec_listContext);
    }
    get ruleIndex() { return SOQLParser.RULE_with_data_category_clause; }
    enterRule(listener) {
        if (listener.enterWith_data_category_clause)
            listener.enterWith_data_category_clause(this);
    }
    exitRule(listener) {
        if (listener.exitWith_data_category_clause)
            listener.exitWith_data_category_clause(this);
    }
    accept(visitor) {
        if (visitor.visitWith_data_category_clause)
            return visitor.visitWith_data_category_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], With_data_category_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], With_data_category_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], With_data_category_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], With_data_category_clauseContext.prototype, "accept", null);
exports.With_data_category_clauseContext = With_data_category_clauseContext;
class Data_category_spec_listContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    data_category_spec(i) {
        if (i === undefined) {
            return this.getRuleContexts(Data_category_specContext);
        }
        else {
            return this.getRuleContext(i, Data_category_specContext);
        }
    }
    AND(i) {
        if (i === undefined) {
            return this.getTokens(SOQLParser.AND);
        }
        else {
            return this.getToken(SOQLParser.AND, i);
        }
    }
    get ruleIndex() { return SOQLParser.RULE_data_category_spec_list; }
    enterRule(listener) {
        if (listener.enterData_category_spec_list)
            listener.enterData_category_spec_list(this);
    }
    exitRule(listener) {
        if (listener.exitData_category_spec_list)
            listener.exitData_category_spec_list(this);
    }
    accept(visitor) {
        if (visitor.visitData_category_spec_list)
            return visitor.visitData_category_spec_list(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Data_category_spec_listContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Data_category_spec_listContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Data_category_spec_listContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Data_category_spec_listContext.prototype, "accept", null);
exports.Data_category_spec_listContext = Data_category_spec_listContext;
class Data_category_specContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    data_category_group_name() {
        return this.getRuleContext(0, Data_category_group_nameContext);
    }
    data_category_selector() {
        return this.getRuleContext(0, Data_category_selectorContext);
    }
    data_category_parameter_list() {
        return this.getRuleContext(0, Data_category_parameter_listContext);
    }
    get ruleIndex() { return SOQLParser.RULE_data_category_spec; }
    enterRule(listener) {
        if (listener.enterData_category_spec)
            listener.enterData_category_spec(this);
    }
    exitRule(listener) {
        if (listener.exitData_category_spec)
            listener.exitData_category_spec(this);
    }
    accept(visitor) {
        if (visitor.visitData_category_spec)
            return visitor.visitData_category_spec(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Data_category_specContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Data_category_specContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Data_category_specContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Data_category_specContext.prototype, "accept", null);
exports.Data_category_specContext = Data_category_specContext;
class Data_category_parameter_listContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    data_category_name(i) {
        if (i === undefined) {
            return this.getRuleContexts(Data_category_nameContext);
        }
        else {
            return this.getRuleContext(i, Data_category_nameContext);
        }
    }
    LPAREN() { return this.tryGetToken(SOQLParser.LPAREN, 0); }
    RPAREN() { return this.tryGetToken(SOQLParser.RPAREN, 0); }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SOQLParser.COMMA);
        }
        else {
            return this.getToken(SOQLParser.COMMA, i);
        }
    }
    get ruleIndex() { return SOQLParser.RULE_data_category_parameter_list; }
    enterRule(listener) {
        if (listener.enterData_category_parameter_list)
            listener.enterData_category_parameter_list(this);
    }
    exitRule(listener) {
        if (listener.exitData_category_parameter_list)
            listener.exitData_category_parameter_list(this);
    }
    accept(visitor) {
        if (visitor.visitData_category_parameter_list)
            return visitor.visitData_category_parameter_list(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Data_category_parameter_listContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Data_category_parameter_listContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Data_category_parameter_listContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Data_category_parameter_listContext.prototype, "accept", null);
exports.Data_category_parameter_listContext = Data_category_parameter_listContext;
class Data_category_selectorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    AT() { return this.tryGetToken(SOQLParser.AT, 0); }
    ABOVE() { return this.tryGetToken(SOQLParser.ABOVE, 0); }
    ABOVE_OR_BELOW() { return this.tryGetToken(SOQLParser.ABOVE_OR_BELOW, 0); }
    BELOW() { return this.tryGetToken(SOQLParser.BELOW, 0); }
    get ruleIndex() { return SOQLParser.RULE_data_category_selector; }
    enterRule(listener) {
        if (listener.enterData_category_selector)
            listener.enterData_category_selector(this);
    }
    exitRule(listener) {
        if (listener.exitData_category_selector)
            listener.exitData_category_selector(this);
    }
    accept(visitor) {
        if (visitor.visitData_category_selector)
            return visitor.visitData_category_selector(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Data_category_selectorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Data_category_selectorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Data_category_selectorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Data_category_selectorContext.prototype, "accept", null);
exports.Data_category_selectorContext = Data_category_selectorContext;
class Group_by_plain_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    group_by_list() {
        return this.getRuleContext(0, Group_by_listContext);
    }
    get ruleIndex() { return SOQLParser.RULE_group_by_plain_clause; }
    enterRule(listener) {
        if (listener.enterGroup_by_plain_clause)
            listener.enterGroup_by_plain_clause(this);
    }
    exitRule(listener) {
        if (listener.exitGroup_by_plain_clause)
            listener.exitGroup_by_plain_clause(this);
    }
    accept(visitor) {
        if (visitor.visitGroup_by_plain_clause)
            return visitor.visitGroup_by_plain_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Group_by_plain_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Group_by_plain_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Group_by_plain_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Group_by_plain_clauseContext.prototype, "accept", null);
exports.Group_by_plain_clauseContext = Group_by_plain_clauseContext;
class Group_by_rollup_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ROLLUP() { return this.getToken(SOQLParser.ROLLUP, 0); }
    LPAREN() { return this.getToken(SOQLParser.LPAREN, 0); }
    group_by_list() {
        return this.getRuleContext(0, Group_by_listContext);
    }
    RPAREN() { return this.getToken(SOQLParser.RPAREN, 0); }
    get ruleIndex() { return SOQLParser.RULE_group_by_rollup_clause; }
    enterRule(listener) {
        if (listener.enterGroup_by_rollup_clause)
            listener.enterGroup_by_rollup_clause(this);
    }
    exitRule(listener) {
        if (listener.exitGroup_by_rollup_clause)
            listener.exitGroup_by_rollup_clause(this);
    }
    accept(visitor) {
        if (visitor.visitGroup_by_rollup_clause)
            return visitor.visitGroup_by_rollup_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Group_by_rollup_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Group_by_rollup_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Group_by_rollup_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Group_by_rollup_clauseContext.prototype, "accept", null);
exports.Group_by_rollup_clauseContext = Group_by_rollup_clauseContext;
class Group_by_cube_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CUBE() { return this.getToken(SOQLParser.CUBE, 0); }
    LPAREN() { return this.getToken(SOQLParser.LPAREN, 0); }
    group_by_list() {
        return this.getRuleContext(0, Group_by_listContext);
    }
    RPAREN() { return this.getToken(SOQLParser.RPAREN, 0); }
    get ruleIndex() { return SOQLParser.RULE_group_by_cube_clause; }
    enterRule(listener) {
        if (listener.enterGroup_by_cube_clause)
            listener.enterGroup_by_cube_clause(this);
    }
    exitRule(listener) {
        if (listener.exitGroup_by_cube_clause)
            listener.exitGroup_by_cube_clause(this);
    }
    accept(visitor) {
        if (visitor.visitGroup_by_cube_clause)
            return visitor.visitGroup_by_cube_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Group_by_cube_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Group_by_cube_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Group_by_cube_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Group_by_cube_clauseContext.prototype, "accept", null);
exports.Group_by_cube_clauseContext = Group_by_cube_clauseContext;
class Group_by_listContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    group_by_spec(i) {
        if (i === undefined) {
            return this.getRuleContexts(Group_by_specContext);
        }
        else {
            return this.getRuleContext(i, Group_by_specContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SOQLParser.COMMA);
        }
        else {
            return this.getToken(SOQLParser.COMMA, i);
        }
    }
    get ruleIndex() { return SOQLParser.RULE_group_by_list; }
    enterRule(listener) {
        if (listener.enterGroup_by_list)
            listener.enterGroup_by_list(this);
    }
    exitRule(listener) {
        if (listener.exitGroup_by_list)
            listener.exitGroup_by_list(this);
    }
    accept(visitor) {
        if (visitor.visitGroup_by_list)
            return visitor.visitGroup_by_list(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Group_by_listContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Group_by_listContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Group_by_listContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Group_by_listContext.prototype, "accept", null);
exports.Group_by_listContext = Group_by_listContext;
class Group_by_specContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    field() {
        return this.tryGetRuleContext(0, FieldContext);
    }
    function_call() {
        return this.tryGetRuleContext(0, Function_callContext);
    }
    get ruleIndex() { return SOQLParser.RULE_group_by_spec; }
    enterRule(listener) {
        if (listener.enterGroup_by_spec)
            listener.enterGroup_by_spec(this);
    }
    exitRule(listener) {
        if (listener.exitGroup_by_spec)
            listener.exitGroup_by_spec(this);
    }
    accept(visitor) {
        if (visitor.visitGroup_by_spec)
            return visitor.visitGroup_by_spec(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Group_by_specContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Group_by_specContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Group_by_specContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Group_by_specContext.prototype, "accept", null);
exports.Group_by_specContext = Group_by_specContext;
class Order_by_listContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    order_by_spec(i) {
        if (i === undefined) {
            return this.getRuleContexts(Order_by_specContext);
        }
        else {
            return this.getRuleContext(i, Order_by_specContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(SOQLParser.COMMA);
        }
        else {
            return this.getToken(SOQLParser.COMMA, i);
        }
    }
    get ruleIndex() { return SOQLParser.RULE_order_by_list; }
    enterRule(listener) {
        if (listener.enterOrder_by_list)
            listener.enterOrder_by_list(this);
    }
    exitRule(listener) {
        if (listener.exitOrder_by_list)
            listener.exitOrder_by_list(this);
    }
    accept(visitor) {
        if (visitor.visitOrder_by_list)
            return visitor.visitOrder_by_list(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Order_by_listContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Order_by_listContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Order_by_listContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Order_by_listContext.prototype, "accept", null);
exports.Order_by_listContext = Order_by_listContext;
class Order_by_specContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    order_by_field() {
        return this.getRuleContext(0, Order_by_fieldContext);
    }
    order_by_direction_clause() {
        return this.tryGetRuleContext(0, Order_by_direction_clauseContext);
    }
    order_by_nulls_clause() {
        return this.tryGetRuleContext(0, Order_by_nulls_clauseContext);
    }
    get ruleIndex() { return SOQLParser.RULE_order_by_spec; }
    enterRule(listener) {
        if (listener.enterOrder_by_spec)
            listener.enterOrder_by_spec(this);
    }
    exitRule(listener) {
        if (listener.exitOrder_by_spec)
            listener.exitOrder_by_spec(this);
    }
    accept(visitor) {
        if (visitor.visitOrder_by_spec)
            return visitor.visitOrder_by_spec(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Order_by_specContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Order_by_specContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Order_by_specContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Order_by_specContext.prototype, "accept", null);
exports.Order_by_specContext = Order_by_specContext;
class Order_by_direction_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    ASC() { return this.tryGetToken(SOQLParser.ASC, 0); }
    DESC() { return this.tryGetToken(SOQLParser.DESC, 0); }
    get ruleIndex() { return SOQLParser.RULE_order_by_direction_clause; }
    enterRule(listener) {
        if (listener.enterOrder_by_direction_clause)
            listener.enterOrder_by_direction_clause(this);
    }
    exitRule(listener) {
        if (listener.exitOrder_by_direction_clause)
            listener.exitOrder_by_direction_clause(this);
    }
    accept(visitor) {
        if (visitor.visitOrder_by_direction_clause)
            return visitor.visitOrder_by_direction_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Order_by_direction_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Order_by_direction_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Order_by_direction_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Order_by_direction_clauseContext.prototype, "accept", null);
exports.Order_by_direction_clauseContext = Order_by_direction_clauseContext;
class Order_by_nulls_clauseContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    NULLS() { return this.getToken(SOQLParser.NULLS, 0); }
    FIRST() { return this.tryGetToken(SOQLParser.FIRST, 0); }
    LAST() { return this.tryGetToken(SOQLParser.LAST, 0); }
    get ruleIndex() { return SOQLParser.RULE_order_by_nulls_clause; }
    enterRule(listener) {
        if (listener.enterOrder_by_nulls_clause)
            listener.enterOrder_by_nulls_clause(this);
    }
    exitRule(listener) {
        if (listener.exitOrder_by_nulls_clause)
            listener.exitOrder_by_nulls_clause(this);
    }
    accept(visitor) {
        if (visitor.visitOrder_by_nulls_clause)
            return visitor.visitOrder_by_nulls_clause(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Order_by_nulls_clauseContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Order_by_nulls_clauseContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Order_by_nulls_clauseContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Order_by_nulls_clauseContext.prototype, "accept", null);
exports.Order_by_nulls_clauseContext = Order_by_nulls_clauseContext;
class Order_by_fieldContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    field() {
        return this.tryGetRuleContext(0, FieldContext);
    }
    function_call() {
        return this.tryGetRuleContext(0, Function_callContext);
    }
    get ruleIndex() { return SOQLParser.RULE_order_by_field; }
    enterRule(listener) {
        if (listener.enterOrder_by_field)
            listener.enterOrder_by_field(this);
    }
    exitRule(listener) {
        if (listener.exitOrder_by_field)
            listener.exitOrder_by_field(this);
    }
    accept(visitor) {
        if (visitor.visitOrder_by_field)
            return visitor.visitOrder_by_field(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Order_by_fieldContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Order_by_fieldContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Order_by_fieldContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Order_by_fieldContext.prototype, "accept", null);
exports.Order_by_fieldContext = Order_by_fieldContext;
class For_valueContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    REFERENCE() { return this.tryGetToken(SOQLParser.REFERENCE, 0); }
    VIEW() { return this.tryGetToken(SOQLParser.VIEW, 0); }
    UPDATE() { return this.tryGetToken(SOQLParser.UPDATE, 0); }
    get ruleIndex() { return SOQLParser.RULE_for_value; }
    enterRule(listener) {
        if (listener.enterFor_value)
            listener.enterFor_value(this);
    }
    exitRule(listener) {
        if (listener.exitFor_value)
            listener.exitFor_value(this);
    }
    accept(visitor) {
        if (visitor.visitFor_value)
            return visitor.visitFor_value(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], For_valueContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], For_valueContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], For_valueContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], For_valueContext.prototype, "accept", null);
exports.For_valueContext = For_valueContext;
class Update_valueContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    TRACKING() { return this.tryGetToken(SOQLParser.TRACKING, 0); }
    VIEWSTAT() { return this.tryGetToken(SOQLParser.VIEWSTAT, 0); }
    get ruleIndex() { return SOQLParser.RULE_update_value; }
    enterRule(listener) {
        if (listener.enterUpdate_value)
            listener.enterUpdate_value(this);
    }
    exitRule(listener) {
        if (listener.exitUpdate_value)
            listener.exitUpdate_value(this);
    }
    accept(visitor) {
        if (visitor.visitUpdate_value)
            return visitor.visitUpdate_value(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Update_valueContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Update_valueContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Update_valueContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], Update_valueContext.prototype, "accept", null);
exports.Update_valueContext = Update_valueContext;
class SOQLParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(SOQLParser._ATN, this);
    }
    get vocabulary() {
        return SOQLParser.VOCABULARY;
    }
    get grammarFileName() { return "SOQL.g4"; }
    get ruleNames() { return SOQLParser.ruleNames; }
    get serializedATN() { return SOQLParser._serializedATN; }
    keywords_alias_allowed() {
        let _localctx = new Keywords_alias_allowedContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, SOQLParser.RULE_keywords_alias_allowed);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 174;
                _la = this._input.LA(1);
                if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SOQLParser.ABOVE - 34)) | (1 << (SOQLParser.ABOVE_OR_BELOW - 34)) | (1 << (SOQLParser.AT - 34)) | (1 << (SOQLParser.BELOW - 34)) | (1 << (SOQLParser.CATEGORY - 34)) | (1 << (SOQLParser.DATA - 34)) | (1 << (SOQLParser.END - 34)) | (1 << (SOQLParser.OFFSET - 34)) | (1 << (SOQLParser.ORDER - 34)) | (1 << (SOQLParser.REFERENCE - 34)) | (1 << (SOQLParser.SCOPE - 34)) | (1 << (SOQLParser.TRACKING - 34)) | (1 << (SOQLParser.THEN - 34)) | (1 << (SOQLParser.TYPEOF - 34)) | (1 << (SOQLParser.VIEW - 34)) | (1 << (SOQLParser.VIEWSTAT - 34)) | (1 << (SOQLParser.WHEN - 34)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    keywords_name_allowed() {
        let _localctx = new Keywords_name_allowedContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, SOQLParser.RULE_keywords_name_allowed);
        try {
            this.state = 178;
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
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 176;
                        this.keywords_alias_allowed();
                    }
                    break;
                case SOQLParser.GROUP:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 177;
                        this.match(SOQLParser.GROUP);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    name() {
        let _localctx = new NameContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, SOQLParser.RULE_name);
        try {
            this.state = 185;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SOQLParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 180;
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
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 181;
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
                        this.state = 182;
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
                        this.state = 183;
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
                        this.state = 184;
                        this.function_name();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    object_name() {
        let _localctx = new Object_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, SOQLParser.RULE_object_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 187;
                this.name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    field_name() {
        let _localctx = new Field_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, SOQLParser.RULE_field_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 189;
                this.name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    filter_scope_name() {
        let _localctx = new Filter_scope_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, SOQLParser.RULE_filter_scope_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 191;
                this.name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    data_category_group_name() {
        let _localctx = new Data_category_group_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, SOQLParser.RULE_data_category_group_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 193;
                this.name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    data_category_name() {
        let _localctx = new Data_category_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, SOQLParser.RULE_data_category_name);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 195;
                this.name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    alias_name() {
        let _localctx = new Alias_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, SOQLParser.RULE_alias_name);
        try {
            this.state = 202;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SOQLParser.ID:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 197;
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
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 198;
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
                        this.state = 199;
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
                        this.state = 200;
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
                        this.state = 201;
                        this.function_name();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    alias() {
        let _localctx = new AliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, SOQLParser.RULE_alias);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 205;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.AS) {
                    {
                        this.state = 204;
                        this.match(SOQLParser.AS);
                    }
                }
                this.state = 207;
                this.alias_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    literal() {
        let _localctx = new LiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, SOQLParser.RULE_literal);
        try {
            this.state = 218;
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
                        this.state = 209;
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
                        this.state = 210;
                        this.date_formula_n_literal();
                    }
                    break;
                case SOQLParser.DATETIME:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 211;
                        this.datetime_literal();
                    }
                    break;
                case SOQLParser.DATE:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 212;
                        this.date_literal();
                    }
                    break;
                case SOQLParser.UNSIGNED_INTEGER:
                case SOQLParser.SIGNED_INTEGER:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 213;
                        this.integer_literal();
                    }
                    break;
                case SOQLParser.REAL_NUMBER:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 214;
                        this.real_literal();
                    }
                    break;
                case SOQLParser.STRING_VALUE:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 215;
                        this.string_literal();
                    }
                    break;
                case SOQLParser.FALSE:
                case SOQLParser.TRUE:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 216;
                        this.boolean_literal();
                    }
                    break;
                case SOQLParser.NULL:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 217;
                        this.null_literal();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    date_formula_literal() {
        let _localctx = new Date_formula_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, SOQLParser.RULE_date_formula_literal);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 220;
                _la = this._input.LA(1);
                if (!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & ((1 << (SOQLParser.YESTERDAY - 77)) | (1 << (SOQLParser.TODAY - 77)) | (1 << (SOQLParser.TOMORROW - 77)) | (1 << (SOQLParser.LAST_WEEK - 77)) | (1 << (SOQLParser.THIS_WEEK - 77)) | (1 << (SOQLParser.NEXT_WEEK - 77)) | (1 << (SOQLParser.LAST_MONTH - 77)) | (1 << (SOQLParser.THIS_MONTH - 77)) | (1 << (SOQLParser.NEXT_MONTH - 77)) | (1 << (SOQLParser.LAST_90_DAYS - 77)) | (1 << (SOQLParser.NEXT_90_DAYS - 77)) | (1 << (SOQLParser.THIS_QUARTER - 77)) | (1 << (SOQLParser.LAST_QUARTER - 77)) | (1 << (SOQLParser.NEXT_QUARTER - 77)) | (1 << (SOQLParser.THIS_YEAR - 77)) | (1 << (SOQLParser.LAST_YEAR - 77)) | (1 << (SOQLParser.NEXT_YEAR - 77)) | (1 << (SOQLParser.THIS_FISCAL_QUARTER - 77)) | (1 << (SOQLParser.LAST_FISCAL_QUARTER - 77)) | (1 << (SOQLParser.NEXT_FISCAL_QUARTER - 77)) | (1 << (SOQLParser.THIS_FISCAL_YEAR - 77)) | (1 << (SOQLParser.LAST_FISCAL_YEAR - 77)) | (1 << (SOQLParser.NEXT_FISCAL_YEAR - 77)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    date_formula_n_literal_name() {
        let _localctx = new Date_formula_n_literal_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, SOQLParser.RULE_date_formula_n_literal_name);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 222;
                _la = this._input.LA(1);
                if (!(((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (SOQLParser.NEXT_N_DAYS - 100)) | (1 << (SOQLParser.LAST_N_DAYS - 100)) | (1 << (SOQLParser.N_DAYS_AGO - 100)) | (1 << (SOQLParser.NEXT_N_WEEKS - 100)) | (1 << (SOQLParser.LAST_N_WEEKS - 100)) | (1 << (SOQLParser.N_WEEKS_AGO - 100)) | (1 << (SOQLParser.NEXT_N_MONTHS - 100)) | (1 << (SOQLParser.LAST_N_MONTHS - 100)) | (1 << (SOQLParser.N_MONTHS_AGO - 100)) | (1 << (SOQLParser.NEXT_N_QUARTERS - 100)) | (1 << (SOQLParser.LAST_N_QUARTERS - 100)) | (1 << (SOQLParser.N_QUARTERS_AGO - 100)) | (1 << (SOQLParser.NEXT_N_YEARS - 100)) | (1 << (SOQLParser.LAST_N_YEARS - 100)) | (1 << (SOQLParser.N_YEARS_AGO - 100)) | (1 << (SOQLParser.NEXT_N_FISCAL_QUARTERS - 100)) | (1 << (SOQLParser.LAST_N_FISCAL_QUARTERS - 100)) | (1 << (SOQLParser.N_FISCAL_QUARTERS_AGO - 100)) | (1 << (SOQLParser.NEXT_N_FISCAL_YEARS - 100)) | (1 << (SOQLParser.LAST_N_FISCAL_YEARS - 100)) | (1 << (SOQLParser.N_FISCAL_YEARS_AGO - 100)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    date_formula_n_literal() {
        let _localctx = new Date_formula_n_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, SOQLParser.RULE_date_formula_n_literal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 224;
                this.date_formula_n_literal_name();
                this.state = 225;
                this.match(SOQLParser.COLON);
                this.state = 226;
                this.match(SOQLParser.UNSIGNED_INTEGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    datetime_literal() {
        let _localctx = new Datetime_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, SOQLParser.RULE_datetime_literal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 228;
                this.match(SOQLParser.DATETIME);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    date_literal() {
        let _localctx = new Date_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, SOQLParser.RULE_date_literal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 230;
                this.match(SOQLParser.DATE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    integer_literal() {
        let _localctx = new Integer_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, SOQLParser.RULE_integer_literal);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 232;
                _la = this._input.LA(1);
                if (!(_la === SOQLParser.UNSIGNED_INTEGER || _la === SOQLParser.SIGNED_INTEGER)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    real_literal() {
        let _localctx = new Real_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, SOQLParser.RULE_real_literal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 234;
                this.match(SOQLParser.REAL_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    string_literal() {
        let _localctx = new String_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, SOQLParser.RULE_string_literal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 236;
                this.match(SOQLParser.STRING_VALUE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    boolean_literal() {
        let _localctx = new Boolean_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, SOQLParser.RULE_boolean_literal);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 238;
                _la = this._input.LA(1);
                if (!(_la === SOQLParser.FALSE || _la === SOQLParser.TRUE)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    null_literal() {
        let _localctx = new Null_literalContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, SOQLParser.RULE_null_literal);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 240;
                this.match(SOQLParser.NULL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    function_name() {
        let _localctx = new Function_nameContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, SOQLParser.RULE_function_name);
        try {
            this.state = 246;
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
                        this.state = 242;
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
                        this.state = 243;
                        this.function_aggregate();
                    }
                    break;
                case SOQLParser.DISTANCE:
                case SOQLParser.GEOLOCATION:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 244;
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
                        this.state = 245;
                        this.function_other();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    function_date() {
        let _localctx = new Function_dateContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, SOQLParser.RULE_function_date);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 248;
                _la = this._input.LA(1);
                if (!(((((_la - 51)) & ~0x1F) === 0 && ((1 << (_la - 51)) & ((1 << (SOQLParser.CALENDAR_MONTH - 51)) | (1 << (SOQLParser.CALENDAR_QUARTER - 51)) | (1 << (SOQLParser.CALENDAR_YEAR - 51)) | (1 << (SOQLParser.DAY_IN_MONTH - 51)) | (1 << (SOQLParser.DAY_IN_WEEK - 51)) | (1 << (SOQLParser.DAY_IN_YEAR - 51)) | (1 << (SOQLParser.DAY_ONLY - 51)) | (1 << (SOQLParser.FISCAL_MONTH - 51)) | (1 << (SOQLParser.FISCAL_QUARTER - 51)) | (1 << (SOQLParser.FISCAL_YEAR - 51)) | (1 << (SOQLParser.HOUR_IN_DAY - 51)) | (1 << (SOQLParser.WEEK_IN_MONTH - 51)) | (1 << (SOQLParser.WEEK_IN_YEAR - 51)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    function_aggregate() {
        let _localctx = new Function_aggregateContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, SOQLParser.RULE_function_aggregate);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 250;
                _la = this._input.LA(1);
                if (!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (SOQLParser.AVG - 64)) | (1 << (SOQLParser.COUNT - 64)) | (1 << (SOQLParser.COUNT_DISTINCT - 64)) | (1 << (SOQLParser.MIN - 64)) | (1 << (SOQLParser.MAX - 64)) | (1 << (SOQLParser.SUM - 64)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    function_location() {
        let _localctx = new Function_locationContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, SOQLParser.RULE_function_location);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 252;
                _la = this._input.LA(1);
                if (!(_la === SOQLParser.DISTANCE || _la === SOQLParser.GEOLOCATION)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    function_other() {
        let _localctx = new Function_otherContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, SOQLParser.RULE_function_other);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 254;
                _la = this._input.LA(1);
                if (!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & ((1 << (SOQLParser.FORMAT - 72)) | (1 << (SOQLParser.TOLABEL - 72)) | (1 << (SOQLParser.CONVERT_TIME_ZONE - 72)) | (1 << (SOQLParser.CONVERT_CURRENCY - 72)) | (1 << (SOQLParser.GROUPING - 72)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    soql_query() {
        let _localctx = new Soql_queryContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, SOQLParser.RULE_soql_query);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 256;
                this.select_clause();
                this.state = 257;
                this.from_clause();
                this.state = 259;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.USING) {
                    {
                        this.state = 258;
                        this.using_clause();
                    }
                }
                this.state = 262;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.WHERE) {
                    {
                        this.state = 261;
                        this.where_clause();
                    }
                }
                this.state = 265;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.WITH) {
                    {
                        this.state = 264;
                        this.with_clause();
                    }
                }
                this.state = 271;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.GROUP) {
                    {
                        this.state = 267;
                        this.groupby_clause();
                        this.state = 269;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === SOQLParser.HAVING) {
                            {
                                this.state = 268;
                                this.having_clause();
                            }
                        }
                    }
                }
                this.state = 274;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.ORDER) {
                    {
                        this.state = 273;
                        this.orderby_clause();
                    }
                }
                this.state = 277;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.LIMIT) {
                    {
                        this.state = 276;
                        this.limit_clause();
                    }
                }
                this.state = 280;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.OFFSET) {
                    {
                        this.state = 279;
                        this.offset_clause();
                    }
                }
                this.state = 283;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.FOR) {
                    {
                        this.state = 282;
                        this.for_clause();
                    }
                }
                this.state = 286;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.UPDATE) {
                    {
                        this.state = 285;
                        this.update_clause();
                    }
                }
                this.state = 288;
                this.match(SOQLParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    select_clause() {
        let _localctx = new Select_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, SOQLParser.RULE_select_clause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 290;
                this.match(SOQLParser.SELECT);
                this.state = 291;
                this.select_spec();
                this.state = 296;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SOQLParser.COMMA) {
                    {
                        {
                            this.state = 292;
                            this.match(SOQLParser.COMMA);
                            this.state = 293;
                            this.select_spec();
                        }
                    }
                    this.state = 298;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    from_clause() {
        let _localctx = new From_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, SOQLParser.RULE_from_clause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 299;
                this.match(SOQLParser.FROM);
                this.state = 300;
                this.object_spec();
                this.state = 305;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SOQLParser.COMMA) {
                    {
                        {
                            this.state = 301;
                            this.match(SOQLParser.COMMA);
                            this.state = 302;
                            this.object_spec();
                        }
                    }
                    this.state = 307;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    using_clause() {
        let _localctx = new Using_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, SOQLParser.RULE_using_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 308;
                this.match(SOQLParser.USING);
                this.state = 309;
                this.match(SOQLParser.SCOPE);
                this.state = 310;
                this.filter_scope_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    where_clause() {
        let _localctx = new Where_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, SOQLParser.RULE_where_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 312;
                this.match(SOQLParser.WHERE);
                this.state = 313;
                this.condition();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    groupby_clause() {
        let _localctx = new Groupby_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, SOQLParser.RULE_groupby_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 315;
                this.match(SOQLParser.GROUP);
                this.state = 316;
                this.match(SOQLParser.BY);
                this.state = 320;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case SOQLParser.ROLLUP:
                        {
                            this.state = 317;
                            this.group_by_rollup_clause();
                        }
                        break;
                    case SOQLParser.CUBE:
                        {
                            this.state = 318;
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
                            this.state = 319;
                            this.group_by_plain_clause();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    having_clause() {
        let _localctx = new Having_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, SOQLParser.RULE_having_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 322;
                this.match(SOQLParser.HAVING);
                this.state = 323;
                this.condition();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    orderby_clause() {
        let _localctx = new Orderby_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, SOQLParser.RULE_orderby_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 325;
                this.match(SOQLParser.ORDER);
                this.state = 326;
                this.match(SOQLParser.BY);
                this.state = 327;
                this.order_by_list();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    limit_clause() {
        let _localctx = new Limit_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, SOQLParser.RULE_limit_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 329;
                this.match(SOQLParser.LIMIT);
                this.state = 330;
                this.match(SOQLParser.UNSIGNED_INTEGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    offset_clause() {
        let _localctx = new Offset_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, SOQLParser.RULE_offset_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 332;
                this.match(SOQLParser.OFFSET);
                this.state = 333;
                this.match(SOQLParser.UNSIGNED_INTEGER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    for_clause() {
        let _localctx = new For_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, SOQLParser.RULE_for_clause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 335;
                this.match(SOQLParser.FOR);
                this.state = 336;
                this.for_value();
                this.state = 339;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
                    case 1:
                        {
                            this.state = 337;
                            this.match(SOQLParser.COMMA);
                            this.state = 338;
                            this.for_value();
                        }
                        break;
                }
                this.state = 343;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.COMMA) {
                    {
                        this.state = 341;
                        this.match(SOQLParser.COMMA);
                        this.state = 342;
                        this.for_value();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    update_clause() {
        let _localctx = new Update_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, SOQLParser.RULE_update_clause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 345;
                this.match(SOQLParser.UPDATE);
                this.state = 346;
                this.update_value();
                this.state = 349;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.COMMA) {
                    {
                        this.state = 347;
                        this.match(SOQLParser.COMMA);
                        this.state = 348;
                        this.update_value();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    soql_subquery() {
        let _localctx = new Soql_subqueryContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, SOQLParser.RULE_soql_subquery);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 351;
                this.match(SOQLParser.LPAREN);
                this.state = 352;
                this.subquery_select_clause();
                this.state = 353;
                this.from_clause();
                this.state = 355;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.USING) {
                    {
                        this.state = 354;
                        this.using_clause();
                    }
                }
                this.state = 358;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.WHERE) {
                    {
                        this.state = 357;
                        this.where_clause();
                    }
                }
                this.state = 361;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.WITH) {
                    {
                        this.state = 360;
                        this.with_clause();
                    }
                }
                this.state = 364;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.ORDER) {
                    {
                        this.state = 363;
                        this.orderby_clause();
                    }
                }
                this.state = 367;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.LIMIT) {
                    {
                        this.state = 366;
                        this.limit_clause();
                    }
                }
                this.state = 370;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.OFFSET) {
                    {
                        this.state = 369;
                        this.offset_clause();
                    }
                }
                this.state = 373;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.FOR) {
                    {
                        this.state = 372;
                        this.for_clause();
                    }
                }
                this.state = 376;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.UPDATE) {
                    {
                        this.state = 375;
                        this.update_clause();
                    }
                }
                this.state = 378;
                this.match(SOQLParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    subquery_select_clause() {
        let _localctx = new Subquery_select_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, SOQLParser.RULE_subquery_select_clause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 380;
                this.match(SOQLParser.SELECT);
                this.state = 381;
                this.subquery_select_spec();
                this.state = 386;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SOQLParser.COMMA) {
                    {
                        {
                            this.state = 382;
                            this.match(SOQLParser.COMMA);
                            this.state = 383;
                            this.subquery_select_spec();
                        }
                    }
                    this.state = 388;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    select_spec() {
        let _localctx = new Select_specContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, SOQLParser.RULE_select_spec);
        try {
            this.state = 393;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 31, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 389;
                        this.field_spec();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 390;
                        this.function_call_spec();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 391;
                        this.soql_subquery();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 392;
                        this.typeof_spec();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    subquery_select_spec() {
        let _localctx = new Subquery_select_specContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, SOQLParser.RULE_subquery_select_spec);
        try {
            this.state = 397;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 395;
                        this.field_spec();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 396;
                        this.function_call_spec();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    field_spec() {
        let _localctx = new Field_specContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, SOQLParser.RULE_field_spec);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 399;
                this.field();
                this.state = 401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.AS || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SOQLParser.ABOVE - 34)) | (1 << (SOQLParser.ABOVE_OR_BELOW - 34)) | (1 << (SOQLParser.AT - 34)) | (1 << (SOQLParser.BELOW - 34)) | (1 << (SOQLParser.CATEGORY - 34)) | (1 << (SOQLParser.DATA - 34)) | (1 << (SOQLParser.END - 34)) | (1 << (SOQLParser.OFFSET - 34)) | (1 << (SOQLParser.ORDER - 34)) | (1 << (SOQLParser.REFERENCE - 34)) | (1 << (SOQLParser.SCOPE - 34)) | (1 << (SOQLParser.TRACKING - 34)) | (1 << (SOQLParser.THEN - 34)) | (1 << (SOQLParser.TYPEOF - 34)) | (1 << (SOQLParser.VIEW - 34)) | (1 << (SOQLParser.VIEWSTAT - 34)) | (1 << (SOQLParser.WHEN - 34)) | (1 << (SOQLParser.CALENDAR_MONTH - 34)) | (1 << (SOQLParser.CALENDAR_QUARTER - 34)) | (1 << (SOQLParser.CALENDAR_YEAR - 34)) | (1 << (SOQLParser.DAY_IN_MONTH - 34)) | (1 << (SOQLParser.DAY_IN_WEEK - 34)) | (1 << (SOQLParser.DAY_IN_YEAR - 34)) | (1 << (SOQLParser.DAY_ONLY - 34)) | (1 << (SOQLParser.FISCAL_MONTH - 34)) | (1 << (SOQLParser.FISCAL_QUARTER - 34)) | (1 << (SOQLParser.FISCAL_YEAR - 34)) | (1 << (SOQLParser.HOUR_IN_DAY - 34)) | (1 << (SOQLParser.WEEK_IN_MONTH - 34)) | (1 << (SOQLParser.WEEK_IN_YEAR - 34)) | (1 << (SOQLParser.AVG - 34)) | (1 << (SOQLParser.COUNT - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SOQLParser.COUNT_DISTINCT - 66)) | (1 << (SOQLParser.MIN - 66)) | (1 << (SOQLParser.MAX - 66)) | (1 << (SOQLParser.SUM - 66)) | (1 << (SOQLParser.DISTANCE - 66)) | (1 << (SOQLParser.GEOLOCATION - 66)) | (1 << (SOQLParser.FORMAT - 66)) | (1 << (SOQLParser.TOLABEL - 66)) | (1 << (SOQLParser.CONVERT_TIME_ZONE - 66)) | (1 << (SOQLParser.CONVERT_CURRENCY - 66)) | (1 << (SOQLParser.GROUPING - 66)) | (1 << (SOQLParser.YESTERDAY - 66)) | (1 << (SOQLParser.TODAY - 66)) | (1 << (SOQLParser.TOMORROW - 66)) | (1 << (SOQLParser.LAST_WEEK - 66)) | (1 << (SOQLParser.THIS_WEEK - 66)) | (1 << (SOQLParser.NEXT_WEEK - 66)) | (1 << (SOQLParser.LAST_MONTH - 66)) | (1 << (SOQLParser.THIS_MONTH - 66)) | (1 << (SOQLParser.NEXT_MONTH - 66)) | (1 << (SOQLParser.LAST_90_DAYS - 66)) | (1 << (SOQLParser.NEXT_90_DAYS - 66)) | (1 << (SOQLParser.THIS_QUARTER - 66)) | (1 << (SOQLParser.LAST_QUARTER - 66)) | (1 << (SOQLParser.NEXT_QUARTER - 66)) | (1 << (SOQLParser.THIS_YEAR - 66)) | (1 << (SOQLParser.LAST_YEAR - 66)) | (1 << (SOQLParser.NEXT_YEAR - 66)) | (1 << (SOQLParser.THIS_FISCAL_QUARTER - 66)) | (1 << (SOQLParser.LAST_FISCAL_QUARTER - 66)) | (1 << (SOQLParser.NEXT_FISCAL_QUARTER - 66)) | (1 << (SOQLParser.THIS_FISCAL_YEAR - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (SOQLParser.LAST_FISCAL_YEAR - 98)) | (1 << (SOQLParser.NEXT_FISCAL_YEAR - 98)) | (1 << (SOQLParser.NEXT_N_DAYS - 98)) | (1 << (SOQLParser.LAST_N_DAYS - 98)) | (1 << (SOQLParser.N_DAYS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_WEEKS - 98)) | (1 << (SOQLParser.LAST_N_WEEKS - 98)) | (1 << (SOQLParser.N_WEEKS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_MONTHS - 98)) | (1 << (SOQLParser.LAST_N_MONTHS - 98)) | (1 << (SOQLParser.N_MONTHS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_QUARTERS - 98)) | (1 << (SOQLParser.LAST_N_QUARTERS - 98)) | (1 << (SOQLParser.N_QUARTERS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_YEARS - 98)) | (1 << (SOQLParser.LAST_N_YEARS - 98)) | (1 << (SOQLParser.N_YEARS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_FISCAL_QUARTERS - 98)) | (1 << (SOQLParser.LAST_N_FISCAL_QUARTERS - 98)) | (1 << (SOQLParser.N_FISCAL_QUARTERS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_FISCAL_YEARS - 98)) | (1 << (SOQLParser.LAST_N_FISCAL_YEARS - 98)) | (1 << (SOQLParser.N_FISCAL_YEARS_AGO - 98)))) !== 0) || _la === SOQLParser.ID) {
                    {
                        this.state = 400;
                        this.alias();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    function_call_spec() {
        let _localctx = new Function_call_specContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, SOQLParser.RULE_function_call_spec);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 403;
                this.function_call();
                this.state = 405;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.AS || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SOQLParser.ABOVE - 34)) | (1 << (SOQLParser.ABOVE_OR_BELOW - 34)) | (1 << (SOQLParser.AT - 34)) | (1 << (SOQLParser.BELOW - 34)) | (1 << (SOQLParser.CATEGORY - 34)) | (1 << (SOQLParser.DATA - 34)) | (1 << (SOQLParser.END - 34)) | (1 << (SOQLParser.OFFSET - 34)) | (1 << (SOQLParser.ORDER - 34)) | (1 << (SOQLParser.REFERENCE - 34)) | (1 << (SOQLParser.SCOPE - 34)) | (1 << (SOQLParser.TRACKING - 34)) | (1 << (SOQLParser.THEN - 34)) | (1 << (SOQLParser.TYPEOF - 34)) | (1 << (SOQLParser.VIEW - 34)) | (1 << (SOQLParser.VIEWSTAT - 34)) | (1 << (SOQLParser.WHEN - 34)) | (1 << (SOQLParser.CALENDAR_MONTH - 34)) | (1 << (SOQLParser.CALENDAR_QUARTER - 34)) | (1 << (SOQLParser.CALENDAR_YEAR - 34)) | (1 << (SOQLParser.DAY_IN_MONTH - 34)) | (1 << (SOQLParser.DAY_IN_WEEK - 34)) | (1 << (SOQLParser.DAY_IN_YEAR - 34)) | (1 << (SOQLParser.DAY_ONLY - 34)) | (1 << (SOQLParser.FISCAL_MONTH - 34)) | (1 << (SOQLParser.FISCAL_QUARTER - 34)) | (1 << (SOQLParser.FISCAL_YEAR - 34)) | (1 << (SOQLParser.HOUR_IN_DAY - 34)) | (1 << (SOQLParser.WEEK_IN_MONTH - 34)) | (1 << (SOQLParser.WEEK_IN_YEAR - 34)) | (1 << (SOQLParser.AVG - 34)) | (1 << (SOQLParser.COUNT - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SOQLParser.COUNT_DISTINCT - 66)) | (1 << (SOQLParser.MIN - 66)) | (1 << (SOQLParser.MAX - 66)) | (1 << (SOQLParser.SUM - 66)) | (1 << (SOQLParser.DISTANCE - 66)) | (1 << (SOQLParser.GEOLOCATION - 66)) | (1 << (SOQLParser.FORMAT - 66)) | (1 << (SOQLParser.TOLABEL - 66)) | (1 << (SOQLParser.CONVERT_TIME_ZONE - 66)) | (1 << (SOQLParser.CONVERT_CURRENCY - 66)) | (1 << (SOQLParser.GROUPING - 66)) | (1 << (SOQLParser.YESTERDAY - 66)) | (1 << (SOQLParser.TODAY - 66)) | (1 << (SOQLParser.TOMORROW - 66)) | (1 << (SOQLParser.LAST_WEEK - 66)) | (1 << (SOQLParser.THIS_WEEK - 66)) | (1 << (SOQLParser.NEXT_WEEK - 66)) | (1 << (SOQLParser.LAST_MONTH - 66)) | (1 << (SOQLParser.THIS_MONTH - 66)) | (1 << (SOQLParser.NEXT_MONTH - 66)) | (1 << (SOQLParser.LAST_90_DAYS - 66)) | (1 << (SOQLParser.NEXT_90_DAYS - 66)) | (1 << (SOQLParser.THIS_QUARTER - 66)) | (1 << (SOQLParser.LAST_QUARTER - 66)) | (1 << (SOQLParser.NEXT_QUARTER - 66)) | (1 << (SOQLParser.THIS_YEAR - 66)) | (1 << (SOQLParser.LAST_YEAR - 66)) | (1 << (SOQLParser.NEXT_YEAR - 66)) | (1 << (SOQLParser.THIS_FISCAL_QUARTER - 66)) | (1 << (SOQLParser.LAST_FISCAL_QUARTER - 66)) | (1 << (SOQLParser.NEXT_FISCAL_QUARTER - 66)) | (1 << (SOQLParser.THIS_FISCAL_YEAR - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (SOQLParser.LAST_FISCAL_YEAR - 98)) | (1 << (SOQLParser.NEXT_FISCAL_YEAR - 98)) | (1 << (SOQLParser.NEXT_N_DAYS - 98)) | (1 << (SOQLParser.LAST_N_DAYS - 98)) | (1 << (SOQLParser.N_DAYS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_WEEKS - 98)) | (1 << (SOQLParser.LAST_N_WEEKS - 98)) | (1 << (SOQLParser.N_WEEKS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_MONTHS - 98)) | (1 << (SOQLParser.LAST_N_MONTHS - 98)) | (1 << (SOQLParser.N_MONTHS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_QUARTERS - 98)) | (1 << (SOQLParser.LAST_N_QUARTERS - 98)) | (1 << (SOQLParser.N_QUARTERS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_YEARS - 98)) | (1 << (SOQLParser.LAST_N_YEARS - 98)) | (1 << (SOQLParser.N_YEARS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_FISCAL_QUARTERS - 98)) | (1 << (SOQLParser.LAST_N_FISCAL_QUARTERS - 98)) | (1 << (SOQLParser.N_FISCAL_QUARTERS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_FISCAL_YEARS - 98)) | (1 << (SOQLParser.LAST_N_FISCAL_YEARS - 98)) | (1 << (SOQLParser.N_FISCAL_YEARS_AGO - 98)))) !== 0) || _la === SOQLParser.ID) {
                    {
                        this.state = 404;
                        this.alias();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    field() {
        let _localctx = new FieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, SOQLParser.RULE_field);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 408;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 35, this._ctx)) {
                    case 1:
                        {
                            this.state = 407;
                            this.object_prefix();
                        }
                        break;
                }
                this.state = 410;
                this.field_name();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    function_call() {
        let _localctx = new Function_callContext(this._ctx, this.state);
        this.enterRule(_localctx, 90, SOQLParser.RULE_function_call);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 412;
                this.function_name();
                this.state = 413;
                this.match(SOQLParser.LPAREN);
                this.state = 415;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << SOQLParser.STRING_VALUE) | (1 << SOQLParser.FALSE) | (1 << SOQLParser.GROUP) | (1 << SOQLParser.NULL) | (1 << SOQLParser.TRUE))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SOQLParser.ABOVE - 34)) | (1 << (SOQLParser.ABOVE_OR_BELOW - 34)) | (1 << (SOQLParser.AT - 34)) | (1 << (SOQLParser.BELOW - 34)) | (1 << (SOQLParser.CATEGORY - 34)) | (1 << (SOQLParser.DATA - 34)) | (1 << (SOQLParser.END - 34)) | (1 << (SOQLParser.OFFSET - 34)) | (1 << (SOQLParser.ORDER - 34)) | (1 << (SOQLParser.REFERENCE - 34)) | (1 << (SOQLParser.SCOPE - 34)) | (1 << (SOQLParser.TRACKING - 34)) | (1 << (SOQLParser.THEN - 34)) | (1 << (SOQLParser.TYPEOF - 34)) | (1 << (SOQLParser.VIEW - 34)) | (1 << (SOQLParser.VIEWSTAT - 34)) | (1 << (SOQLParser.WHEN - 34)) | (1 << (SOQLParser.CALENDAR_MONTH - 34)) | (1 << (SOQLParser.CALENDAR_QUARTER - 34)) | (1 << (SOQLParser.CALENDAR_YEAR - 34)) | (1 << (SOQLParser.DAY_IN_MONTH - 34)) | (1 << (SOQLParser.DAY_IN_WEEK - 34)) | (1 << (SOQLParser.DAY_IN_YEAR - 34)) | (1 << (SOQLParser.DAY_ONLY - 34)) | (1 << (SOQLParser.FISCAL_MONTH - 34)) | (1 << (SOQLParser.FISCAL_QUARTER - 34)) | (1 << (SOQLParser.FISCAL_YEAR - 34)) | (1 << (SOQLParser.HOUR_IN_DAY - 34)) | (1 << (SOQLParser.WEEK_IN_MONTH - 34)) | (1 << (SOQLParser.WEEK_IN_YEAR - 34)) | (1 << (SOQLParser.AVG - 34)) | (1 << (SOQLParser.COUNT - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (SOQLParser.COUNT_DISTINCT - 66)) | (1 << (SOQLParser.MIN - 66)) | (1 << (SOQLParser.MAX - 66)) | (1 << (SOQLParser.SUM - 66)) | (1 << (SOQLParser.DISTANCE - 66)) | (1 << (SOQLParser.GEOLOCATION - 66)) | (1 << (SOQLParser.FORMAT - 66)) | (1 << (SOQLParser.TOLABEL - 66)) | (1 << (SOQLParser.CONVERT_TIME_ZONE - 66)) | (1 << (SOQLParser.CONVERT_CURRENCY - 66)) | (1 << (SOQLParser.GROUPING - 66)) | (1 << (SOQLParser.YESTERDAY - 66)) | (1 << (SOQLParser.TODAY - 66)) | (1 << (SOQLParser.TOMORROW - 66)) | (1 << (SOQLParser.LAST_WEEK - 66)) | (1 << (SOQLParser.THIS_WEEK - 66)) | (1 << (SOQLParser.NEXT_WEEK - 66)) | (1 << (SOQLParser.LAST_MONTH - 66)) | (1 << (SOQLParser.THIS_MONTH - 66)) | (1 << (SOQLParser.NEXT_MONTH - 66)) | (1 << (SOQLParser.LAST_90_DAYS - 66)) | (1 << (SOQLParser.NEXT_90_DAYS - 66)) | (1 << (SOQLParser.THIS_QUARTER - 66)) | (1 << (SOQLParser.LAST_QUARTER - 66)) | (1 << (SOQLParser.NEXT_QUARTER - 66)) | (1 << (SOQLParser.THIS_YEAR - 66)) | (1 << (SOQLParser.LAST_YEAR - 66)) | (1 << (SOQLParser.NEXT_YEAR - 66)) | (1 << (SOQLParser.THIS_FISCAL_QUARTER - 66)) | (1 << (SOQLParser.LAST_FISCAL_QUARTER - 66)) | (1 << (SOQLParser.NEXT_FISCAL_QUARTER - 66)) | (1 << (SOQLParser.THIS_FISCAL_YEAR - 66)))) !== 0) || ((((_la - 98)) & ~0x1F) === 0 && ((1 << (_la - 98)) & ((1 << (SOQLParser.LAST_FISCAL_YEAR - 98)) | (1 << (SOQLParser.NEXT_FISCAL_YEAR - 98)) | (1 << (SOQLParser.NEXT_N_DAYS - 98)) | (1 << (SOQLParser.LAST_N_DAYS - 98)) | (1 << (SOQLParser.N_DAYS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_WEEKS - 98)) | (1 << (SOQLParser.LAST_N_WEEKS - 98)) | (1 << (SOQLParser.N_WEEKS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_MONTHS - 98)) | (1 << (SOQLParser.LAST_N_MONTHS - 98)) | (1 << (SOQLParser.N_MONTHS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_QUARTERS - 98)) | (1 << (SOQLParser.LAST_N_QUARTERS - 98)) | (1 << (SOQLParser.N_QUARTERS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_YEARS - 98)) | (1 << (SOQLParser.LAST_N_YEARS - 98)) | (1 << (SOQLParser.N_YEARS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_FISCAL_QUARTERS - 98)) | (1 << (SOQLParser.LAST_N_FISCAL_QUARTERS - 98)) | (1 << (SOQLParser.N_FISCAL_QUARTERS_AGO - 98)) | (1 << (SOQLParser.NEXT_N_FISCAL_YEARS - 98)) | (1 << (SOQLParser.LAST_N_FISCAL_YEARS - 98)) | (1 << (SOQLParser.N_FISCAL_YEARS_AGO - 98)))) !== 0) || ((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (SOQLParser.ID - 136)) | (1 << (SOQLParser.DATE - 136)) | (1 << (SOQLParser.DATETIME - 136)) | (1 << (SOQLParser.UNSIGNED_INTEGER - 136)) | (1 << (SOQLParser.REAL_NUMBER - 136)) | (1 << (SOQLParser.SIGNED_INTEGER - 136)))) !== 0)) {
                    {
                        this.state = 414;
                        this.function_parameter_list();
                    }
                }
                this.state = 417;
                this.match(SOQLParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    function_parameter_list() {
        let _localctx = new Function_parameter_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, SOQLParser.RULE_function_parameter_list);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 419;
                this.function_parameter();
                this.state = 424;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SOQLParser.COMMA) {
                    {
                        {
                            this.state = 420;
                            this.match(SOQLParser.COMMA);
                            this.state = 421;
                            this.function_parameter();
                        }
                    }
                    this.state = 426;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    function_parameter() {
        let _localctx = new Function_parameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, SOQLParser.RULE_function_parameter);
        try {
            this.state = 430;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 38, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 427;
                        this.field();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 428;
                        this.literal();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 429;
                        this.function_call();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    typeof_spec() {
        let _localctx = new Typeof_specContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, SOQLParser.RULE_typeof_spec);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 432;
                this.match(SOQLParser.TYPEOF);
                this.state = 433;
                this.field();
                this.state = 434;
                this.typeof_when_then_clause_list();
                this.state = 436;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.ELSE) {
                    {
                        this.state = 435;
                        this.typeof_else_clause();
                    }
                }
                this.state = 438;
                this.match(SOQLParser.END);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    typeof_when_then_clause_list() {
        let _localctx = new Typeof_when_then_clause_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, SOQLParser.RULE_typeof_when_then_clause_list);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 441;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                do {
                    {
                        {
                            this.state = 440;
                            this.typeof_when_then_clause();
                        }
                    }
                    this.state = 443;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                } while (_la === SOQLParser.WHEN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    typeof_when_then_clause() {
        let _localctx = new Typeof_when_then_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, SOQLParser.RULE_typeof_when_then_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 445;
                this.match(SOQLParser.WHEN);
                this.state = 446;
                this.object_name();
                this.state = 447;
                this.typeof_then_clause();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    typeof_then_clause() {
        let _localctx = new Typeof_then_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, SOQLParser.RULE_typeof_then_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 449;
                this.match(SOQLParser.THEN);
                this.state = 450;
                this.field_list();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    typeof_else_clause() {
        let _localctx = new Typeof_else_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, SOQLParser.RULE_typeof_else_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 452;
                this.match(SOQLParser.ELSE);
                this.state = 453;
                this.field_list();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    field_list() {
        let _localctx = new Field_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, SOQLParser.RULE_field_list);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 455;
                this.field();
                this.state = 460;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SOQLParser.COMMA) {
                    {
                        {
                            this.state = 456;
                            this.match(SOQLParser.COMMA);
                            this.state = 457;
                            this.field();
                        }
                    }
                    this.state = 462;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    object_spec() {
        let _localctx = new Object_specContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, SOQLParser.RULE_object_spec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 464;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 42, this._ctx)) {
                    case 1:
                        {
                            this.state = 463;
                            this.object_prefix();
                        }
                        break;
                }
                this.state = 466;
                this.object_name();
                this.state = 468;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                    case 1:
                        {
                            this.state = 467;
                            this.alias();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    object_prefix() {
        let _localctx = new Object_prefixContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, SOQLParser.RULE_object_prefix);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 473;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 470;
                                    this.object_name();
                                    this.state = 471;
                                    this.match(SOQLParser.DOT);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 475;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    comparison_operator() {
        let _localctx = new Comparison_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, SOQLParser.RULE_comparison_operator);
        try {
            this.state = 487;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 45, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 477;
                        this.match(SOQLParser.EQ);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 478;
                        this.match(SOQLParser.NOT_EQ);
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 479;
                        this.match(SOQLParser.LET);
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 480;
                        this.match(SOQLParser.GET);
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 481;
                        this.match(SOQLParser.GTH);
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 482;
                        this.match(SOQLParser.LTH);
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 483;
                        this.match(SOQLParser.GTH);
                        this.state = 484;
                        this.match(SOQLParser.EQ);
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 485;
                        this.match(SOQLParser.LTH);
                        this.state = 486;
                        this.match(SOQLParser.EQ);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    set_operator() {
        let _localctx = new Set_operatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, SOQLParser.RULE_set_operator);
        try {
            this.state = 494;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case SOQLParser.IN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 489;
                        this.match(SOQLParser.IN);
                    }
                    break;
                case SOQLParser.NOT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 490;
                        this.match(SOQLParser.NOT);
                        this.state = 491;
                        this.match(SOQLParser.IN);
                    }
                    break;
                case SOQLParser.INCLUDES:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 492;
                        this.match(SOQLParser.INCLUDES);
                    }
                    break;
                case SOQLParser.EXCLUDES:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 493;
                        this.match(SOQLParser.EXCLUDES);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    condition() {
        let _localctx = new ConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, SOQLParser.RULE_condition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 496;
                this.condition1();
                this.state = 501;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SOQLParser.AND || _la === SOQLParser.OR) {
                    {
                        {
                            this.state = 497;
                            _la = this._input.LA(1);
                            if (!(_la === SOQLParser.AND || _la === SOQLParser.OR)) {
                                this._errHandler.recoverInline(this);
                            }
                            else {
                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                    this.matchedEOF = true;
                                }
                                this._errHandler.reportMatch(this);
                                this.consume();
                            }
                            this.state = 498;
                            this.condition1();
                        }
                    }
                    this.state = 503;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    condition1() {
        let _localctx = new Condition1Context(this._ctx, this.state);
        this.enterRule(_localctx, 118, SOQLParser.RULE_condition1);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 505;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.NOT) {
                    {
                        this.state = 504;
                        this.match(SOQLParser.NOT);
                    }
                }
                this.state = 509;
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
                            this.state = 507;
                            this.simple_condition();
                        }
                        break;
                    case SOQLParser.LPAREN:
                        {
                            this.state = 508;
                            this.parenthesis();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    parenthesis() {
        let _localctx = new ParenthesisContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, SOQLParser.RULE_parenthesis);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 511;
                this.match(SOQLParser.LPAREN);
                this.state = 512;
                this.condition();
                this.state = 513;
                this.match(SOQLParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    simple_condition() {
        let _localctx = new Simple_conditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, SOQLParser.RULE_simple_condition);
        try {
            this.state = 518;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 50, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 515;
                        this.field_based_condition();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 516;
                        this.set_based_condition();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 517;
                        this.like_based_condition();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    field_based_condition() {
        let _localctx = new Field_based_conditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, SOQLParser.RULE_field_based_condition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 520;
                this.condition_field();
                this.state = 521;
                this.comparison_operator();
                this.state = 522;
                this.literal();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    set_based_condition() {
        let _localctx = new Set_based_conditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, SOQLParser.RULE_set_based_condition);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 524;
                this.condition_field();
                this.state = 525;
                this.set_operator();
                this.state = 528;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 51, this._ctx)) {
                    case 1:
                        {
                            this.state = 526;
                            this.soql_subquery();
                        }
                        break;
                    case 2:
                        {
                            this.state = 527;
                            this.set_values();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    like_based_condition() {
        let _localctx = new Like_based_conditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, SOQLParser.RULE_like_based_condition);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 530;
                this.condition_field();
                this.state = 531;
                this.match(SOQLParser.LIKE);
                this.state = 532;
                _la = this._input.LA(1);
                if (!(_la === SOQLParser.STRING_VALUE || _la === SOQLParser.LIKE_STRING_VALUE)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    condition_field() {
        let _localctx = new Condition_fieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, SOQLParser.RULE_condition_field);
        try {
            this.state = 536;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 52, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 534;
                        this.field();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 535;
                        this.function_call();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    set_values() {
        let _localctx = new Set_valuesContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, SOQLParser.RULE_set_values);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 538;
                this.match(SOQLParser.LPAREN);
                this.state = 539;
                this.set_value_list();
                this.state = 540;
                this.match(SOQLParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    set_value_list() {
        let _localctx = new Set_value_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, SOQLParser.RULE_set_value_list);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 542;
                this.literal();
                this.state = 547;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SOQLParser.COMMA) {
                    {
                        {
                            this.state = 543;
                            this.match(SOQLParser.COMMA);
                            this.state = 544;
                            this.literal();
                        }
                    }
                    this.state = 549;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    with_clause() {
        let _localctx = new With_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, SOQLParser.RULE_with_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 550;
                this.match(SOQLParser.WITH);
                this.state = 553;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 54, this._ctx)) {
                    case 1:
                        {
                            this.state = 551;
                            this.with_plain_clause();
                        }
                        break;
                    case 2:
                        {
                            this.state = 552;
                            this.with_data_category_clause();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    with_plain_clause() {
        let _localctx = new With_plain_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, SOQLParser.RULE_with_plain_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 555;
                this.field_based_condition();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    with_data_category_clause() {
        let _localctx = new With_data_category_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, SOQLParser.RULE_with_data_category_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 557;
                this.match(SOQLParser.DATA);
                this.state = 558;
                this.match(SOQLParser.CATEGORY);
                this.state = 559;
                this.data_category_spec_list();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    data_category_spec_list() {
        let _localctx = new Data_category_spec_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, SOQLParser.RULE_data_category_spec_list);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 561;
                this.data_category_spec();
                this.state = 566;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SOQLParser.AND) {
                    {
                        {
                            this.state = 562;
                            this.match(SOQLParser.AND);
                            this.state = 563;
                            this.data_category_spec();
                        }
                    }
                    this.state = 568;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    data_category_spec() {
        let _localctx = new Data_category_specContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, SOQLParser.RULE_data_category_spec);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 569;
                this.data_category_group_name();
                this.state = 570;
                this.data_category_selector();
                this.state = 571;
                this.data_category_parameter_list();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    data_category_parameter_list() {
        let _localctx = new Data_category_parameter_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, SOQLParser.RULE_data_category_parameter_list);
        let _la;
        try {
            this.state = 585;
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
                        this.state = 573;
                        this.data_category_name();
                    }
                    break;
                case SOQLParser.LPAREN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 574;
                        this.match(SOQLParser.LPAREN);
                        this.state = 575;
                        this.data_category_name();
                        this.state = 580;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === SOQLParser.COMMA) {
                            {
                                {
                                    this.state = 576;
                                    this.match(SOQLParser.COMMA);
                                    this.state = 577;
                                    this.data_category_name();
                                }
                            }
                            this.state = 582;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 583;
                        this.match(SOQLParser.RPAREN);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    data_category_selector() {
        let _localctx = new Data_category_selectorContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, SOQLParser.RULE_data_category_selector);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 587;
                _la = this._input.LA(1);
                if (!(((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (SOQLParser.ABOVE - 34)) | (1 << (SOQLParser.ABOVE_OR_BELOW - 34)) | (1 << (SOQLParser.AT - 34)) | (1 << (SOQLParser.BELOW - 34)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    group_by_plain_clause() {
        let _localctx = new Group_by_plain_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, SOQLParser.RULE_group_by_plain_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 589;
                this.group_by_list();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    group_by_rollup_clause() {
        let _localctx = new Group_by_rollup_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, SOQLParser.RULE_group_by_rollup_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 591;
                this.match(SOQLParser.ROLLUP);
                this.state = 592;
                this.match(SOQLParser.LPAREN);
                this.state = 593;
                this.group_by_list();
                this.state = 594;
                this.match(SOQLParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    group_by_cube_clause() {
        let _localctx = new Group_by_cube_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, SOQLParser.RULE_group_by_cube_clause);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 596;
                this.match(SOQLParser.CUBE);
                this.state = 597;
                this.match(SOQLParser.LPAREN);
                this.state = 598;
                this.group_by_list();
                this.state = 599;
                this.match(SOQLParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    group_by_list() {
        let _localctx = new Group_by_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, SOQLParser.RULE_group_by_list);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 601;
                this.group_by_spec();
                this.state = 606;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SOQLParser.COMMA) {
                    {
                        {
                            this.state = 602;
                            this.match(SOQLParser.COMMA);
                            this.state = 603;
                            this.group_by_spec();
                        }
                    }
                    this.state = 608;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    group_by_spec() {
        let _localctx = new Group_by_specContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, SOQLParser.RULE_group_by_spec);
        try {
            this.state = 611;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 609;
                        this.field();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 610;
                        this.function_call();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    order_by_list() {
        let _localctx = new Order_by_listContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, SOQLParser.RULE_order_by_list);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 613;
                this.order_by_spec();
                this.state = 618;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === SOQLParser.COMMA) {
                    {
                        {
                            this.state = 614;
                            this.match(SOQLParser.COMMA);
                            this.state = 615;
                            this.order_by_spec();
                        }
                    }
                    this.state = 620;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    order_by_spec() {
        let _localctx = new Order_by_specContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, SOQLParser.RULE_order_by_spec);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 621;
                this.order_by_field();
                this.state = 623;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.ASC || _la === SOQLParser.DESC) {
                    {
                        this.state = 622;
                        this.order_by_direction_clause();
                    }
                }
                this.state = 626;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === SOQLParser.NULLS) {
                    {
                        this.state = 625;
                        this.order_by_nulls_clause();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    order_by_direction_clause() {
        let _localctx = new Order_by_direction_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, SOQLParser.RULE_order_by_direction_clause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 628;
                _la = this._input.LA(1);
                if (!(_la === SOQLParser.ASC || _la === SOQLParser.DESC)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    order_by_nulls_clause() {
        let _localctx = new Order_by_nulls_clauseContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, SOQLParser.RULE_order_by_nulls_clause);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 630;
                this.match(SOQLParser.NULLS);
                this.state = 631;
                _la = this._input.LA(1);
                if (!(_la === SOQLParser.FIRST || _la === SOQLParser.LAST)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    order_by_field() {
        let _localctx = new Order_by_fieldContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, SOQLParser.RULE_order_by_field);
        try {
            this.state = 635;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 633;
                        this.field();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 634;
                        this.function_call();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    for_value() {
        let _localctx = new For_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, SOQLParser.RULE_for_value);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 637;
                _la = this._input.LA(1);
                if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (SOQLParser.UPDATE - 33)) | (1 << (SOQLParser.REFERENCE - 33)) | (1 << (SOQLParser.VIEW - 33)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    update_value() {
        let _localctx = new Update_valueContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, SOQLParser.RULE_update_value);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 639;
                _la = this._input.LA(1);
                if (!(_la === SOQLParser.TRACKING || _la === SOQLParser.VIEWSTAT)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!SOQLParser.__ATN) {
            SOQLParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(SOQLParser._serializedATN));
        }
        return SOQLParser.__ATN;
    }
}
SOQLParser.WHITE_SPACE = 1;
SOQLParser.STRING_VALUE = 2;
SOQLParser.LIKE_STRING_VALUE = 3;
SOQLParser.AND = 4;
SOQLParser.AS = 5;
SOQLParser.ASC = 6;
SOQLParser.BY = 7;
SOQLParser.CUBE = 8;
SOQLParser.DESC = 9;
SOQLParser.ELSE = 10;
SOQLParser.EXCLUDES = 11;
SOQLParser.FALSE = 12;
SOQLParser.FIRST = 13;
SOQLParser.FROM = 14;
SOQLParser.GROUP = 15;
SOQLParser.HAVING = 16;
SOQLParser.IN = 17;
SOQLParser.INCLUDES = 18;
SOQLParser.LAST = 19;
SOQLParser.LIKE = 20;
SOQLParser.LIMIT = 21;
SOQLParser.NOT = 22;
SOQLParser.NULL = 23;
SOQLParser.NULLS = 24;
SOQLParser.OR = 25;
SOQLParser.ROLLUP = 26;
SOQLParser.SELECT = 27;
SOQLParser.TRUE = 28;
SOQLParser.USING = 29;
SOQLParser.WHERE = 30;
SOQLParser.WITH = 31;
SOQLParser.FOR = 32;
SOQLParser.UPDATE = 33;
SOQLParser.ABOVE = 34;
SOQLParser.ABOVE_OR_BELOW = 35;
SOQLParser.AT = 36;
SOQLParser.BELOW = 37;
SOQLParser.CATEGORY = 38;
SOQLParser.DATA = 39;
SOQLParser.END = 40;
SOQLParser.OFFSET = 41;
SOQLParser.ORDER = 42;
SOQLParser.REFERENCE = 43;
SOQLParser.SCOPE = 44;
SOQLParser.TRACKING = 45;
SOQLParser.THEN = 46;
SOQLParser.TYPEOF = 47;
SOQLParser.VIEW = 48;
SOQLParser.VIEWSTAT = 49;
SOQLParser.WHEN = 50;
SOQLParser.CALENDAR_MONTH = 51;
SOQLParser.CALENDAR_QUARTER = 52;
SOQLParser.CALENDAR_YEAR = 53;
SOQLParser.DAY_IN_MONTH = 54;
SOQLParser.DAY_IN_WEEK = 55;
SOQLParser.DAY_IN_YEAR = 56;
SOQLParser.DAY_ONLY = 57;
SOQLParser.FISCAL_MONTH = 58;
SOQLParser.FISCAL_QUARTER = 59;
SOQLParser.FISCAL_YEAR = 60;
SOQLParser.HOUR_IN_DAY = 61;
SOQLParser.WEEK_IN_MONTH = 62;
SOQLParser.WEEK_IN_YEAR = 63;
SOQLParser.AVG = 64;
SOQLParser.COUNT = 65;
SOQLParser.COUNT_DISTINCT = 66;
SOQLParser.MIN = 67;
SOQLParser.MAX = 68;
SOQLParser.SUM = 69;
SOQLParser.DISTANCE = 70;
SOQLParser.GEOLOCATION = 71;
SOQLParser.FORMAT = 72;
SOQLParser.TOLABEL = 73;
SOQLParser.CONVERT_TIME_ZONE = 74;
SOQLParser.CONVERT_CURRENCY = 75;
SOQLParser.GROUPING = 76;
SOQLParser.YESTERDAY = 77;
SOQLParser.TODAY = 78;
SOQLParser.TOMORROW = 79;
SOQLParser.LAST_WEEK = 80;
SOQLParser.THIS_WEEK = 81;
SOQLParser.NEXT_WEEK = 82;
SOQLParser.LAST_MONTH = 83;
SOQLParser.THIS_MONTH = 84;
SOQLParser.NEXT_MONTH = 85;
SOQLParser.LAST_90_DAYS = 86;
SOQLParser.NEXT_90_DAYS = 87;
SOQLParser.THIS_QUARTER = 88;
SOQLParser.LAST_QUARTER = 89;
SOQLParser.NEXT_QUARTER = 90;
SOQLParser.THIS_YEAR = 91;
SOQLParser.LAST_YEAR = 92;
SOQLParser.NEXT_YEAR = 93;
SOQLParser.THIS_FISCAL_QUARTER = 94;
SOQLParser.LAST_FISCAL_QUARTER = 95;
SOQLParser.NEXT_FISCAL_QUARTER = 96;
SOQLParser.THIS_FISCAL_YEAR = 97;
SOQLParser.LAST_FISCAL_YEAR = 98;
SOQLParser.NEXT_FISCAL_YEAR = 99;
SOQLParser.NEXT_N_DAYS = 100;
SOQLParser.LAST_N_DAYS = 101;
SOQLParser.N_DAYS_AGO = 102;
SOQLParser.NEXT_N_WEEKS = 103;
SOQLParser.LAST_N_WEEKS = 104;
SOQLParser.N_WEEKS_AGO = 105;
SOQLParser.NEXT_N_MONTHS = 106;
SOQLParser.LAST_N_MONTHS = 107;
SOQLParser.N_MONTHS_AGO = 108;
SOQLParser.NEXT_N_QUARTERS = 109;
SOQLParser.LAST_N_QUARTERS = 110;
SOQLParser.N_QUARTERS_AGO = 111;
SOQLParser.NEXT_N_YEARS = 112;
SOQLParser.LAST_N_YEARS = 113;
SOQLParser.N_YEARS_AGO = 114;
SOQLParser.NEXT_N_FISCAL_QUARTERS = 115;
SOQLParser.LAST_N_FISCAL_QUARTERS = 116;
SOQLParser.N_FISCAL_QUARTERS_AGO = 117;
SOQLParser.NEXT_N_FISCAL_YEARS = 118;
SOQLParser.LAST_N_FISCAL_YEARS = 119;
SOQLParser.N_FISCAL_YEARS_AGO = 120;
SOQLParser.EQ = 121;
SOQLParser.NOT_EQ = 122;
SOQLParser.LET = 123;
SOQLParser.GET = 124;
SOQLParser.GTH = 125;
SOQLParser.LTH = 126;
SOQLParser.DOT = 127;
SOQLParser.COLON = 128;
SOQLParser.SEMICOLON = 129;
SOQLParser.COMMA = 130;
SOQLParser.ASTERISK = 131;
SOQLParser.RPAREN = 132;
SOQLParser.LPAREN = 133;
SOQLParser.PLUS = 134;
SOQLParser.MINUS = 135;
SOQLParser.ID = 136;
SOQLParser.DATE = 137;
SOQLParser.DATETIME = 138;
SOQLParser.UNSIGNED_INTEGER = 139;
SOQLParser.REAL_NUMBER = 140;
SOQLParser.SIGNED_INTEGER = 141;
SOQLParser.RULE_keywords_alias_allowed = 0;
SOQLParser.RULE_keywords_name_allowed = 1;
SOQLParser.RULE_name = 2;
SOQLParser.RULE_object_name = 3;
SOQLParser.RULE_field_name = 4;
SOQLParser.RULE_filter_scope_name = 5;
SOQLParser.RULE_data_category_group_name = 6;
SOQLParser.RULE_data_category_name = 7;
SOQLParser.RULE_alias_name = 8;
SOQLParser.RULE_alias = 9;
SOQLParser.RULE_literal = 10;
SOQLParser.RULE_date_formula_literal = 11;
SOQLParser.RULE_date_formula_n_literal_name = 12;
SOQLParser.RULE_date_formula_n_literal = 13;
SOQLParser.RULE_datetime_literal = 14;
SOQLParser.RULE_date_literal = 15;
SOQLParser.RULE_integer_literal = 16;
SOQLParser.RULE_real_literal = 17;
SOQLParser.RULE_string_literal = 18;
SOQLParser.RULE_boolean_literal = 19;
SOQLParser.RULE_null_literal = 20;
SOQLParser.RULE_function_name = 21;
SOQLParser.RULE_function_date = 22;
SOQLParser.RULE_function_aggregate = 23;
SOQLParser.RULE_function_location = 24;
SOQLParser.RULE_function_other = 25;
SOQLParser.RULE_soql_query = 26;
SOQLParser.RULE_select_clause = 27;
SOQLParser.RULE_from_clause = 28;
SOQLParser.RULE_using_clause = 29;
SOQLParser.RULE_where_clause = 30;
SOQLParser.RULE_groupby_clause = 31;
SOQLParser.RULE_having_clause = 32;
SOQLParser.RULE_orderby_clause = 33;
SOQLParser.RULE_limit_clause = 34;
SOQLParser.RULE_offset_clause = 35;
SOQLParser.RULE_for_clause = 36;
SOQLParser.RULE_update_clause = 37;
SOQLParser.RULE_soql_subquery = 38;
SOQLParser.RULE_subquery_select_clause = 39;
SOQLParser.RULE_select_spec = 40;
SOQLParser.RULE_subquery_select_spec = 41;
SOQLParser.RULE_field_spec = 42;
SOQLParser.RULE_function_call_spec = 43;
SOQLParser.RULE_field = 44;
SOQLParser.RULE_function_call = 45;
SOQLParser.RULE_function_parameter_list = 46;
SOQLParser.RULE_function_parameter = 47;
SOQLParser.RULE_typeof_spec = 48;
SOQLParser.RULE_typeof_when_then_clause_list = 49;
SOQLParser.RULE_typeof_when_then_clause = 50;
SOQLParser.RULE_typeof_then_clause = 51;
SOQLParser.RULE_typeof_else_clause = 52;
SOQLParser.RULE_field_list = 53;
SOQLParser.RULE_object_spec = 54;
SOQLParser.RULE_object_prefix = 55;
SOQLParser.RULE_comparison_operator = 56;
SOQLParser.RULE_set_operator = 57;
SOQLParser.RULE_condition = 58;
SOQLParser.RULE_condition1 = 59;
SOQLParser.RULE_parenthesis = 60;
SOQLParser.RULE_simple_condition = 61;
SOQLParser.RULE_field_based_condition = 62;
SOQLParser.RULE_set_based_condition = 63;
SOQLParser.RULE_like_based_condition = 64;
SOQLParser.RULE_condition_field = 65;
SOQLParser.RULE_set_values = 66;
SOQLParser.RULE_set_value_list = 67;
SOQLParser.RULE_with_clause = 68;
SOQLParser.RULE_with_plain_clause = 69;
SOQLParser.RULE_with_data_category_clause = 70;
SOQLParser.RULE_data_category_spec_list = 71;
SOQLParser.RULE_data_category_spec = 72;
SOQLParser.RULE_data_category_parameter_list = 73;
SOQLParser.RULE_data_category_selector = 74;
SOQLParser.RULE_group_by_plain_clause = 75;
SOQLParser.RULE_group_by_rollup_clause = 76;
SOQLParser.RULE_group_by_cube_clause = 77;
SOQLParser.RULE_group_by_list = 78;
SOQLParser.RULE_group_by_spec = 79;
SOQLParser.RULE_order_by_list = 80;
SOQLParser.RULE_order_by_spec = 81;
SOQLParser.RULE_order_by_direction_clause = 82;
SOQLParser.RULE_order_by_nulls_clause = 83;
SOQLParser.RULE_order_by_field = 84;
SOQLParser.RULE_for_value = 85;
SOQLParser.RULE_update_value = 86;
SOQLParser.ruleNames = [
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
    "group_by_plain_clause", "group_by_rollup_clause", "group_by_cube_clause",
    "group_by_list", "group_by_spec", "order_by_list", "order_by_spec", "order_by_direction_clause",
    "order_by_nulls_clause", "order_by_field", "for_value", "update_value"
];
SOQLParser._LITERAL_NAMES = [
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
    undefined, undefined, "'='", undefined, "'<='", "'>='", "'>'", "'<'",
    "'.'", "':'", "';'", "','", "'*'", "')'", "'('", "'+'", "'-'"
];
SOQLParser._SYMBOLIC_NAMES = [
    undefined, "WHITE_SPACE", "STRING_VALUE", "LIKE_STRING_VALUE", "AND",
    "AS", "ASC", "BY", "CUBE", "DESC", "ELSE", "EXCLUDES", "FALSE", "FIRST",
    "FROM", "GROUP", "HAVING", "IN", "INCLUDES", "LAST", "LIKE", "LIMIT",
    "NOT", "NULL", "NULLS", "OR", "ROLLUP", "SELECT", "TRUE", "USING", "WHERE",
    "WITH", "FOR", "UPDATE", "ABOVE", "ABOVE_OR_BELOW", "AT", "BELOW", "CATEGORY",
    "DATA", "END", "OFFSET", "ORDER", "REFERENCE", "SCOPE", "TRACKING", "THEN",
    "TYPEOF", "VIEW", "VIEWSTAT", "WHEN", "CALENDAR_MONTH", "CALENDAR_QUARTER",
    "CALENDAR_YEAR", "DAY_IN_MONTH", "DAY_IN_WEEK", "DAY_IN_YEAR", "DAY_ONLY",
    "FISCAL_MONTH", "FISCAL_QUARTER", "FISCAL_YEAR", "HOUR_IN_DAY", "WEEK_IN_MONTH",
    "WEEK_IN_YEAR", "AVG", "COUNT", "COUNT_DISTINCT", "MIN", "MAX", "SUM",
    "DISTANCE", "GEOLOCATION", "FORMAT", "TOLABEL", "CONVERT_TIME_ZONE", "CONVERT_CURRENCY",
    "GROUPING", "YESTERDAY", "TODAY", "TOMORROW", "LAST_WEEK", "THIS_WEEK",
    "NEXT_WEEK", "LAST_MONTH", "THIS_MONTH", "NEXT_MONTH", "LAST_90_DAYS",
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
SOQLParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(SOQLParser._LITERAL_NAMES, SOQLParser._SYMBOLIC_NAMES, []);
SOQLParser._serializedATNSegments = 2;
SOQLParser._serializedATNSegment0 = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x8F\u0284\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
    "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
    "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
    "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
    "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
    "#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
    "+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
    "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
    "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
    "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
    "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
    "X\tX\x03\x02\x03\x02\x03\x03\x03\x03\x05\x03\xB5\n\x03\x03\x04\x03\x04" +
    "\x03\x04\x03\x04\x03\x04\x05\x04\xBC\n\x04\x03\x05\x03\x05\x03\x06\x03" +
    "\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03" +
    "\n\x05\n\xCD\n\n\x03\v\x05\v\xD0\n\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
    "\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xDD\n\f\x03\r\x03\r\x03\x0E\x03" +
    "\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
    "\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03" +
    "\x16\x03\x17\x03\x17\x03\x17\x03\x17\x05\x17\xF9\n\x17\x03\x18\x03\x18" +
    "\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C" +
    "\x05\x1C\u0106\n\x1C\x03\x1C\x05\x1C\u0109\n\x1C\x03\x1C\x05\x1C\u010C" +
    "\n\x1C\x03\x1C\x03\x1C\x05\x1C\u0110\n\x1C\x05\x1C\u0112\n\x1C\x03\x1C" +
    "\x05\x1C\u0115\n\x1C\x03\x1C\x05\x1C\u0118\n\x1C\x03\x1C\x05\x1C\u011B" +
    "\n\x1C\x03\x1C\x05\x1C\u011E\n\x1C\x03\x1C\x05\x1C\u0121\n\x1C\x03\x1C" +
    "\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x07\x1D\u0129\n\x1D\f\x1D\x0E" +
    "\x1D\u012C\v\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u0132\n\x1E\f" +
    "\x1E\x0E\x1E\u0135\v\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03" +
    " \x03!\x03!\x03!\x03!\x03!\x05!\u0143\n!\x03\"\x03\"\x03\"\x03#\x03#\x03" +
    "#\x03#\x03$\x03$\x03$\x03%\x03%\x03%\x03&\x03&\x03&\x03&\x05&\u0156\n" +
    "&\x03&\x03&\x05&\u015A\n&\x03\'\x03\'\x03\'\x03\'\x05\'\u0160\n\'\x03" +
    "(\x03(\x03(\x03(\x05(\u0166\n(\x03(\x05(\u0169\n(\x03(\x05(\u016C\n(\x03" +
    "(\x05(\u016F\n(\x03(\x05(\u0172\n(\x03(\x05(\u0175\n(\x03(\x05(\u0178" +
    "\n(\x03(\x05(\u017B\n(\x03(\x03(\x03)\x03)\x03)\x03)\x07)\u0183\n)\f)" +
    "\x0E)\u0186\v)\x03*\x03*\x03*\x03*\x05*\u018C\n*\x03+\x03+\x05+\u0190" +
    "\n+\x03,\x03,\x05,\u0194\n,\x03-\x03-\x05-\u0198\n-\x03.\x05.\u019B\n" +
    ".\x03.\x03.\x03/\x03/\x03/\x05/\u01A2\n/\x03/\x03/\x030\x030\x030\x07" +
    "0\u01A9\n0\f0\x0E0\u01AC\v0\x031\x031\x031\x051\u01B1\n1\x032\x032\x03" +
    "2\x032\x052\u01B7\n2\x032\x032\x033\x063\u01BC\n3\r3\x0E3\u01BD\x034\x03" +
    "4\x034\x034\x035\x035\x035\x036\x036\x036\x037\x037\x037\x077\u01CD\n" +
    "7\f7\x0E7\u01D0\v7\x038\x058\u01D3\n8\x038\x038\x058\u01D7\n8\x039\x03" +
    "9\x039\x069\u01DC\n9\r9\x0E9\u01DD\x03:\x03:\x03:\x03:\x03:\x03:\x03:" +
    "\x03:\x03:\x03:\x05:\u01EA\n:\x03;\x03;\x03;\x03;\x03;\x05;\u01F1\n;\x03" +
    "<\x03<\x03<\x07<\u01F6\n<\f<\x0E<\u01F9\v<\x03=\x05=\u01FC\n=\x03=\x03" +
    "=\x05=\u0200\n=\x03>\x03>\x03>\x03>\x03?\x03?\x03?\x05?\u0209\n?\x03@" +
    "\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x05A\u0213\nA\x03B\x03B\x03B\x03B" +
    "\x03C\x03C\x05C\u021B\nC\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x07E\u0224" +
    "\nE\fE\x0EE\u0227\vE\x03F\x03F\x03F\x05F\u022C\nF\x03G\x03G\x03H\x03H" +
    "\x03H\x03H\x03I\x03I\x03I\x07I\u0237\nI\fI\x0EI\u023A\vI\x03J\x03J\x03" +
    "J\x03J\x03K\x03K\x03K\x03K\x03K\x07K\u0245\nK\fK\x0EK\u0248\vK\x03K\x03" +
    "K\x05K\u024C\nK\x03L\x03L\x03M\x03M\x03N\x03N\x03N\x03N\x03N\x03O\x03" +
    "O\x03O\x03O\x03O\x03P\x03P\x03P\x07P\u025F\nP\fP\x0EP\u0262\vP\x03Q\x03" +
    "Q\x05Q\u0266\nQ\x03R\x03R\x03R\x07R\u026B\nR\fR\x0ER\u026E\vR\x03S\x03" +
    "S\x05S\u0272\nS\x03S\x05S\u0275\nS\x03T\x03T\x03U\x03U\x03U\x03V\x03V" +
    "\x05V\u027E\nV\x03W\x03W\x03X\x03X\x03X\x02\x02\x02Y\x02\x02\x04\x02\x06" +
    "\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02" +
    "\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x02" +
    "2\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02" +
    "N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02" +
    "j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02" +
    "\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02" +
    "\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02" +
    "\xA8\x02\xAA\x02\xAC\x02\xAE\x02\x02\x12\x03\x02$4\x03\x02Oe\x03\x02f" +
    "z\x04\x02\x8D\x8D\x8F\x8F\x04\x02\x0E\x0E\x1E\x1E\x03\x025A\x03\x02BG" +
    "\x03\x02HI\x03\x02JN\x04\x02\x06\x06\x1B\x1B\x03\x02\x04\x05\x03\x02$" +
    "\'\x04\x02\b\b\v\v\x04\x02\x0F\x0F\x15\x15\x05\x02##--22\x04\x02//33\u0288" +
    "\x02\xB0\x03\x02\x02\x02\x04\xB4\x03\x02\x02\x02\x06\xBB\x03\x02\x02\x02" +
    "\b\xBD\x03\x02\x02\x02\n\xBF\x03\x02\x02\x02\f\xC1\x03\x02\x02\x02\x0E" +
    "\xC3\x03\x02\x02\x02\x10\xC5\x03\x02\x02\x02\x12\xCC\x03\x02\x02\x02\x14" +
    "\xCF\x03\x02\x02\x02\x16\xDC\x03\x02\x02\x02\x18\xDE\x03\x02\x02\x02\x1A" +
    "\xE0\x03\x02\x02\x02\x1C\xE2\x03\x02\x02\x02\x1E\xE6\x03\x02\x02\x02 " +
    "\xE8\x03\x02\x02\x02\"\xEA\x03\x02\x02\x02$\xEC\x03\x02\x02\x02&\xEE\x03" +
    "\x02\x02\x02(\xF0\x03\x02\x02\x02*\xF2\x03\x02\x02\x02,\xF8\x03\x02\x02" +
    "\x02.\xFA\x03\x02\x02\x020\xFC\x03\x02\x02\x022\xFE\x03\x02\x02\x024\u0100" +
    "\x03\x02\x02\x026\u0102\x03\x02\x02\x028\u0124\x03\x02\x02\x02:\u012D" +
    "\x03\x02\x02\x02<\u0136\x03\x02\x02\x02>\u013A\x03\x02\x02\x02@\u013D" +
    "\x03\x02\x02\x02B\u0144\x03\x02\x02\x02D\u0147\x03\x02\x02\x02F\u014B" +
    "\x03\x02\x02\x02H\u014E\x03\x02\x02\x02J\u0151\x03\x02\x02\x02L\u015B" +
    "\x03\x02\x02\x02N\u0161\x03\x02\x02\x02P\u017E\x03\x02\x02\x02R\u018B" +
    "\x03\x02\x02\x02T\u018F\x03\x02\x02\x02V\u0191\x03\x02\x02\x02X\u0195" +
    "\x03\x02\x02\x02Z\u019A\x03\x02\x02\x02\\\u019E\x03\x02\x02\x02^\u01A5" +
    "\x03\x02\x02\x02`\u01B0\x03\x02\x02\x02b\u01B2\x03\x02\x02\x02d\u01BB" +
    "\x03\x02\x02\x02f\u01BF\x03\x02\x02\x02h\u01C3\x03\x02\x02\x02j\u01C6" +
    "\x03\x02\x02\x02l\u01C9\x03\x02\x02\x02n\u01D2\x03\x02\x02\x02p\u01DB" +
    "\x03\x02\x02\x02r\u01E9\x03\x02\x02\x02t\u01F0\x03\x02\x02\x02v\u01F2" +
    "\x03\x02\x02\x02x\u01FB\x03\x02\x02\x02z\u0201\x03\x02\x02\x02|\u0208" +
    "\x03\x02\x02\x02~\u020A\x03\x02\x02\x02\x80\u020E\x03\x02\x02\x02\x82" +
    "\u0214\x03\x02\x02\x02\x84\u021A\x03\x02\x02\x02\x86\u021C\x03\x02\x02" +
    "\x02\x88\u0220\x03\x02\x02\x02\x8A\u0228\x03\x02\x02\x02\x8C\u022D\x03" +
    "\x02\x02\x02\x8E\u022F\x03\x02\x02\x02\x90\u0233\x03\x02\x02\x02\x92\u023B" +
    "\x03\x02\x02\x02\x94\u024B\x03\x02\x02\x02\x96\u024D\x03\x02\x02\x02\x98" +
    "\u024F\x03\x02\x02\x02\x9A\u0251\x03\x02\x02\x02\x9C\u0256\x03\x02\x02" +
    "\x02\x9E\u025B\x03\x02\x02\x02\xA0\u0265\x03\x02\x02\x02\xA2\u0267\x03" +
    "\x02\x02\x02\xA4\u026F\x03\x02\x02\x02\xA6\u0276\x03\x02\x02\x02\xA8\u0278" +
    "\x03\x02\x02\x02\xAA\u027D\x03\x02\x02\x02\xAC\u027F\x03\x02\x02\x02\xAE" +
    "\u0281\x03\x02\x02\x02\xB0\xB1\t\x02\x02\x02\xB1\x03\x03\x02\x02\x02\xB2" +
    "\xB5\x05\x02\x02\x02\xB3\xB5\x07\x11\x02\x02\xB4\xB2\x03\x02\x02\x02\xB4" +
    "\xB3\x03\x02\x02\x02\xB5\x05\x03\x02\x02\x02\xB6\xBC\x07\x8A\x02\x02\xB7" +
    "\xBC\x05\x04\x03\x02\xB8\xBC\x05\x18\r\x02\xB9\xBC\x05\x1A\x0E\x02\xBA" +
    "\xBC\x05,\x17\x02\xBB\xB6\x03\x02\x02\x02\xBB\xB7\x03\x02\x02\x02\xBB" +
    "\xB8\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBA\x03\x02\x02\x02\xBC" +
    "\x07\x03\x02\x02\x02\xBD\xBE\x05\x06\x04\x02\xBE\t\x03\x02\x02\x02\xBF" +
    "\xC0\x05\x06\x04\x02\xC0\v\x03\x02\x02\x02\xC1\xC2\x05\x06\x04\x02\xC2" +
    "\r\x03\x02\x02\x02\xC3\xC4\x05\x06\x04\x02\xC4\x0F\x03\x02\x02\x02\xC5" +
    "\xC6\x05\x06\x04\x02\xC6\x11\x03\x02\x02\x02\xC7\xCD\x07\x8A\x02\x02\xC8" +
    "\xCD\x05\x02\x02\x02\xC9\xCD\x05\x18\r\x02\xCA\xCD\x05\x1A\x0E\x02\xCB" +
    "\xCD\x05,\x17\x02\xCC\xC7\x03\x02\x02\x02\xCC\xC8\x03\x02\x02\x02\xCC" +
    "\xC9\x03\x02\x02\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCB\x03\x02\x02\x02\xCD" +
    "\x13\x03\x02\x02\x02\xCE\xD0\x07\x07\x02\x02\xCF\xCE\x03\x02\x02\x02\xCF" +
    "\xD0\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD2\x05\x12\n\x02\xD2" +
    "\x15\x03\x02\x02\x02\xD3\xDD\x05\x18\r\x02\xD4\xDD\x05\x1C\x0F\x02\xD5" +
    "\xDD\x05\x1E\x10\x02\xD6\xDD\x05 \x11\x02\xD7\xDD\x05\"\x12\x02\xD8\xDD" +
    "\x05$\x13\x02\xD9\xDD\x05&\x14\x02\xDA\xDD\x05(\x15\x02\xDB\xDD\x05*\x16" +
    "\x02\xDC\xD3\x03\x02\x02\x02\xDC\xD4\x03\x02\x02\x02\xDC\xD5\x03\x02\x02" +
    "\x02\xDC\xD6\x03\x02\x02\x02\xDC\xD7\x03\x02\x02\x02\xDC\xD8\x03\x02\x02" +
    "\x02\xDC\xD9\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDB\x03\x02\x02" +
    "\x02\xDD\x17\x03\x02\x02\x02\xDE\xDF\t\x03\x02\x02\xDF\x19\x03\x02\x02" +
    "\x02\xE0\xE1\t\x04\x02\x02\xE1\x1B\x03\x02\x02\x02\xE2\xE3\x05\x1A\x0E" +
    "\x02\xE3\xE4\x07\x82\x02\x02\xE4\xE5\x07\x8D\x02\x02\xE5\x1D\x03\x02\x02" +
    "\x02\xE6\xE7\x07\x8C\x02\x02\xE7\x1F\x03\x02\x02\x02\xE8\xE9\x07\x8B\x02" +
    "\x02\xE9!\x03\x02\x02\x02\xEA\xEB\t\x05\x02\x02\xEB#\x03\x02\x02\x02\xEC" +
    "\xED\x07\x8E\x02\x02\xED%\x03\x02\x02\x02\xEE\xEF\x07\x04\x02\x02\xEF" +
    "\'\x03\x02\x02\x02\xF0\xF1\t\x06\x02\x02\xF1)\x03\x02\x02\x02\xF2\xF3" +
    "\x07\x19\x02\x02\xF3+\x03\x02\x02\x02\xF4\xF9\x05.\x18\x02\xF5\xF9\x05" +
    "0\x19\x02\xF6\xF9\x052\x1A\x02\xF7\xF9\x054\x1B\x02\xF8\xF4\x03\x02\x02" +
    "\x02\xF8\xF5\x03\x02\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF7\x03\x02\x02" +
    "\x02\xF9-\x03\x02\x02\x02\xFA\xFB\t\x07\x02\x02\xFB/\x03\x02\x02\x02\xFC" +
    "\xFD\t\b\x02\x02\xFD1\x03\x02\x02\x02\xFE\xFF\t\t\x02\x02\xFF3\x03\x02" +
    "\x02\x02\u0100\u0101\t\n\x02\x02\u01015\x03\x02\x02\x02\u0102\u0103\x05" +
    "8\x1D\x02\u0103\u0105\x05:\x1E\x02\u0104\u0106\x05<\x1F\x02\u0105\u0104" +
    "\x03\x02\x02\x02\u0105\u0106\x03\x02\x02\x02\u0106\u0108\x03\x02\x02\x02" +
    "\u0107\u0109\x05> \x02\u0108\u0107\x03\x02\x02\x02\u0108\u0109\x03\x02" +
    "\x02\x02\u0109\u010B\x03\x02\x02\x02\u010A\u010C\x05\x8AF\x02\u010B\u010A" +
    "\x03\x02\x02\x02\u010B\u010C\x03\x02\x02\x02\u010C\u0111\x03\x02\x02\x02" +
    "\u010D\u010F\x05@!\x02\u010E\u0110\x05B\"\x02\u010F\u010E\x03\x02\x02" +
    "\x02\u010F\u0110\x03\x02\x02\x02\u0110\u0112\x03\x02\x02\x02\u0111\u010D" +
    "\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112\u0114\x03\x02\x02\x02" +
    "\u0113\u0115\x05D#\x02\u0114\u0113\x03\x02\x02\x02\u0114\u0115\x03\x02" +
    "\x02\x02\u0115\u0117\x03\x02\x02\x02\u0116\u0118\x05F$\x02\u0117\u0116" +
    "\x03\x02\x02\x02\u0117\u0118\x03\x02\x02\x02\u0118\u011A\x03\x02\x02\x02" +
    "\u0119\u011B\x05H%\x02\u011A\u0119\x03\x02\x02\x02\u011A\u011B\x03\x02" +
    "\x02\x02\u011B\u011D\x03\x02\x02\x02\u011C\u011E\x05J&\x02\u011D\u011C" +
    "\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02\u011E\u0120\x03\x02\x02\x02" +
    "\u011F\u0121\x05L\'\x02\u0120\u011F\x03\x02\x02\x02\u0120\u0121\x03\x02" +
    "\x02\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0123\x07\x02\x02\x03\u0123" +
    "7\x03\x02\x02\x02\u0124\u0125\x07\x1D\x02\x02\u0125\u012A\x05R*\x02\u0126" +
    "\u0127\x07\x84\x02\x02\u0127\u0129\x05R*\x02\u0128\u0126\x03\x02\x02\x02" +
    "\u0129\u012C\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02\u012A\u012B\x03" +
    "\x02\x02\x02\u012B9\x03\x02\x02\x02\u012C\u012A\x03\x02\x02\x02\u012D" +
    "\u012E\x07\x10\x02\x02\u012E\u0133\x05n8\x02\u012F\u0130\x07\x84\x02\x02" +
    "\u0130\u0132\x05n8\x02\u0131\u012F\x03\x02\x02\x02\u0132\u0135\x03\x02" +
    "\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134" +
    ";\x03\x02\x02\x02\u0135\u0133\x03\x02\x02\x02\u0136\u0137\x07\x1F\x02" +
    "\x02\u0137\u0138\x07.\x02\x02\u0138\u0139\x05\f\x07\x02\u0139=\x03\x02" +
    "\x02\x02\u013A\u013B\x07 \x02\x02\u013B\u013C\x05v<\x02\u013C?\x03\x02" +
    "\x02\x02\u013D\u013E\x07\x11\x02\x02\u013E\u0142\x07\t\x02\x02\u013F\u0143" +
    "\x05\x9AN\x02\u0140\u0143\x05\x9CO\x02\u0141\u0143\x05\x98M\x02\u0142" +
    "\u013F\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0142\u0141\x03\x02" +
    "\x02\x02\u0143A\x03\x02\x02\x02\u0144\u0145\x07\x12\x02\x02\u0145\u0146" +
    "\x05v<\x02\u0146C\x03\x02\x02\x02\u0147\u0148\x07,\x02\x02\u0148\u0149" +
    "\x07\t\x02\x02\u0149\u014A\x05\xA2R\x02\u014AE\x03\x02\x02\x02\u014B\u014C" +
    "\x07\x17\x02\x02\u014C\u014D\x07\x8D\x02\x02\u014DG\x03\x02\x02\x02\u014E" +
    "\u014F\x07+\x02\x02\u014F\u0150\x07\x8D\x02\x02\u0150I\x03\x02\x02\x02" +
    "\u0151\u0152\x07\"\x02\x02\u0152\u0155\x05\xACW\x02\u0153\u0154\x07\x84" +
    "\x02\x02\u0154\u0156\x05\xACW\x02\u0155\u0153\x03\x02\x02\x02\u0155\u0156" +
    "\x03\x02\x02\x02\u0156\u0159\x03\x02\x02\x02\u0157\u0158\x07\x84\x02\x02" +
    "\u0158\u015A\x05\xACW\x02\u0159\u0157\x03\x02\x02\x02\u0159\u015A\x03" +
    "\x02\x02\x02\u015AK\x03\x02\x02\x02\u015B\u015C\x07#\x02\x02\u015C\u015F" +
    "\x05\xAEX\x02\u015D\u015E\x07\x84\x02\x02\u015E\u0160\x05\xAEX\x02\u015F" +
    "\u015D\x03\x02\x02\x02\u015F\u0160\x03\x02\x02\x02\u0160M\x03\x02\x02" +
    "\x02\u0161\u0162\x07\x87\x02\x02\u0162\u0163\x05P)\x02\u0163\u0165\x05" +
    ":\x1E\x02\u0164\u0166\x05<\x1F\x02\u0165\u0164\x03\x02\x02\x02\u0165\u0166" +
    "\x03\x02\x02\x02\u0166\u0168\x03\x02\x02\x02\u0167\u0169\x05> \x02\u0168" +
    "\u0167\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016B\x03\x02" +
    "\x02\x02\u016A\u016C\x05\x8AF\x02\u016B\u016A\x03\x02\x02\x02\u016B\u016C" +
    "\x03\x02\x02\x02\u016C\u016E\x03\x02\x02\x02\u016D\u016F\x05D#\x02\u016E" +
    "\u016D\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0171\x03\x02" +
    "\x02\x02\u0170\u0172\x05F$\x02\u0171\u0170\x03\x02\x02\x02\u0171\u0172" +
    "\x03\x02\x02\x02\u0172\u0174\x03\x02\x02\x02\u0173\u0175\x05H%\x02\u0174" +
    "\u0173\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0177\x03\x02" +
    "\x02\x02\u0176\u0178\x05J&\x02\u0177\u0176\x03\x02\x02\x02\u0177\u0178" +
    "\x03\x02\x02\x02\u0178\u017A\x03\x02\x02\x02\u0179\u017B\x05L\'\x02\u017A" +
    "\u0179\x03\x02\x02\x02\u017A\u017B\x03\x02\x02\x02\u017B\u017C\x03\x02" +
    "\x02\x02\u017C\u017D\x07\x86\x02\x02\u017DO\x03\x02\x02\x02\u017E\u017F" +
    "\x07\x1D\x02\x02\u017F\u0184\x05T+\x02\u0180\u0181\x07\x84\x02\x02\u0181" +
    "\u0183\x05T+\x02\u0182\u0180\x03\x02\x02\x02\u0183\u0186\x03\x02\x02\x02" +
    "\u0184\u0182\x03\x02\x02\x02\u0184\u0185\x03\x02\x02\x02\u0185Q\x03\x02" +
    "\x02\x02\u0186\u0184\x03\x02\x02\x02\u0187\u018C\x05V,\x02\u0188\u018C" +
    "\x05X-\x02\u0189\u018C\x05N(\x02\u018A\u018C\x05b2\x02\u018B\u0187\x03" +
    "\x02\x02\x02\u018B\u0188\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018B" +
    "\u018A\x03\x02\x02\x02\u018CS\x03\x02\x02\x02\u018D\u0190\x05V,\x02\u018E" +
    "\u0190\x05X-\x02\u018F\u018D\x03\x02\x02\x02\u018F\u018E\x03\x02\x02\x02" +
    "\u0190U\x03\x02\x02\x02\u0191\u0193\x05Z.\x02\u0192\u0194\x05\x14\v\x02" +
    "\u0193\u0192\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194W\x03\x02" +
    "\x02\x02\u0195\u0197\x05\\/\x02\u0196\u0198\x05\x14\v\x02\u0197\u0196" +
    "\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198Y\x03\x02\x02\x02\u0199" +
    "\u019B\x05p9\x02\u019A\u0199\x03\x02\x02\x02\u019A\u019B\x03\x02\x02\x02" +
    "\u019B\u019C\x03\x02\x02\x02\u019C\u019D\x05\n\x06\x02\u019D[\x03\x02" +
    "\x02\x02\u019E\u019F\x05,\x17\x02\u019F\u01A1\x07\x87\x02\x02\u01A0\u01A2" +
    "\x05^0\x02\u01A1\u01A0\x03\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A2" +
    "\u01A3\x03\x02\x02\x02\u01A3\u01A4\x07\x86\x02\x02\u01A4]\x03\x02\x02" +
    "\x02\u01A5\u01AA\x05`1\x02\u01A6\u01A7\x07\x84\x02\x02\u01A7\u01A9\x05" +
    "`1\x02\u01A8\u01A6\x03\x02\x02\x02\u01A9\u01AC\x03\x02\x02\x02\u01AA\u01A8" +
    "\x03\x02\x02\x02\u01AA\u01AB\x03\x02\x02\x02\u01AB_\x03\x02\x02\x02\u01AC" +
    "\u01AA\x03\x02\x02\x02\u01AD\u01B1\x05Z.\x02\u01AE\u01B1\x05\x16\f\x02" +
    "\u01AF\u01B1\x05\\/\x02\u01B0\u01AD\x03\x02\x02\x02\u01B0\u01AE\x03\x02" +
    "\x02\x02\u01B0\u01AF\x03\x02\x02\x02\u01B1a\x03\x02\x02\x02\u01B2\u01B3" +
    "\x071\x02\x02\u01B3\u01B4\x05Z.\x02\u01B4\u01B6\x05d3\x02\u01B5\u01B7" +
    "\x05j6\x02\u01B6\u01B5\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7" +
    "\u01B8\x03\x02\x02\x02\u01B8\u01B9\x07*\x02\x02\u01B9c\x03\x02\x02\x02" +
    "\u01BA\u01BC\x05f4\x02\u01BB\u01BA\x03\x02\x02\x02\u01BC\u01BD\x03\x02" +
    "\x02\x02\u01BD\u01BB\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE" +
    "e\x03\x02\x02\x02\u01BF\u01C0\x074\x02\x02\u01C0\u01C1\x05\b\x05\x02\u01C1" +
    "\u01C2\x05h5\x02\u01C2g\x03\x02\x02\x02\u01C3\u01C4\x070\x02\x02\u01C4" +
    "\u01C5\x05l7\x02\u01C5i\x03\x02\x02\x02\u01C6\u01C7\x07\f\x02\x02\u01C7" +
    "\u01C8\x05l7\x02\u01C8k\x03\x02\x02\x02\u01C9\u01CE\x05Z.\x02\u01CA\u01CB" +
    "\x07\x84\x02\x02\u01CB\u01CD\x05Z.\x02\u01CC\u01CA\x03\x02\x02\x02\u01CD" +
    "\u01D0\x03\x02\x02\x02\u01CE\u01CC\x03\x02\x02\x02\u01CE\u01CF\x03\x02" +
    "\x02\x02\u01CFm\x03\x02\x02\x02\u01D0\u01CE\x03\x02\x02\x02\u01D1\u01D3" +
    "\x05p9\x02\u01D2\u01D1\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3" +
    "\u01D4\x03\x02\x02\x02\u01D4\u01D6\x05\b\x05\x02\u01D5\u01D7\x05\x14\v" +
    "\x02\u01D6\u01D5\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7o\x03" +
    "\x02\x02\x02\u01D8\u01D9\x05\b\x05\x02\u01D9\u01DA\x07\x81\x02\x02\u01DA" +
    "\u01DC\x03\x02\x02\x02\u01DB\u01D8\x03\x02\x02\x02\u01DC\u01DD\x03\x02" +
    "\x02\x02\u01DD\u01DB\x03\x02\x02\x02\u01DD\u01DE\x03\x02\x02\x02\u01DE" +
    "q\x03\x02\x02\x02\u01DF\u01EA\x07{\x02\x02\u01E0\u01EA\x07|\x02\x02\u01E1" +
    "\u01EA\x07}\x02\x02\u01E2\u01EA\x07~\x02\x02\u01E3\u01EA\x07\x7F\x02\x02" +
    "\u01E4\u01EA\x07\x80\x02\x02\u01E5\u01E6\x07\x7F\x02\x02\u01E6\u01EA\x07" +
    "{\x02\x02\u01E7\u01E8\x07\x80\x02\x02\u01E8\u01EA\x07{\x02\x02\u01E9\u01DF" +
    "\x03\x02\x02\x02\u01E9\u01E0\x03\x02\x02\x02\u01E9\u01E1\x03\x02\x02\x02" +
    "\u01E9\u01E2\x03\x02\x02\x02\u01E9\u01E3\x03\x02\x02\x02\u01E9\u01E4\x03" +
    "\x02\x02\x02\u01E9\u01E5\x03\x02\x02\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA" +
    "s\x03\x02\x02\x02\u01EB\u01F1\x07\x13\x02\x02\u01EC\u01ED\x07\x18\x02" +
    "\x02\u01ED\u01F1\x07\x13\x02\x02\u01EE\u01F1\x07\x14\x02\x02\u01EF\u01F1" +
    "\x07\r\x02\x02\u01F0\u01EB\x03\x02\x02\x02\u01F0\u01EC\x03\x02\x02\x02" +
    "\u01F0\u01EE\x03\x02\x02\x02\u01F0\u01EF\x03\x02\x02\x02\u01F1u\x03\x02" +
    "\x02\x02\u01F2\u01F7\x05x=\x02\u01F3\u01F4\t\v\x02\x02\u01F4\u01F6\x05" +
    "x=\x02\u01F5\u01F3\x03\x02\x02\x02\u01F6\u01F9\x03\x02\x02\x02\u01F7\u01F5" +
    "\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8w\x03\x02\x02\x02\u01F9" +
    "\u01F7\x03\x02\x02\x02\u01FA\u01FC\x07\x18\x02\x02\u01FB\u01FA\x03\x02" +
    "\x02\x02\u01FB\u01FC\x03\x02\x02\x02\u01FC\u01FF\x03\x02\x02\x02\u01FD" +
    "\u0200\x05|?\x02\u01FE\u0200\x05z>\x02\u01FF\u01FD\x03\x02\x02\x02\u01FF" +
    "\u01FE\x03\x02\x02\x02\u0200y\x03\x02\x02\x02\u0201\u0202\x07\x87\x02" +
    "\x02\u0202\u0203\x05v<\x02\u0203\u0204\x07\x86\x02\x02\u0204{\x03\x02" +
    "\x02\x02\u0205\u0209\x05~@\x02\u0206\u0209\x05\x80A\x02\u0207\u0209\x05" +
    "\x82B\x02\u0208\u0205\x03\x02\x02\x02\u0208\u0206\x03\x02\x02\x02\u0208" +
    "\u0207\x03\x02\x02\x02\u0209}\x03\x02\x02\x02\u020A\u020B\x05\x84C\x02" +
    "\u020B\u020C\x05r:\x02\u020C\u020D\x05\x16\f\x02\u020D\x7F\x03\x02\x02" +
    "\x02\u020E\u020F\x05\x84C\x02\u020F\u0212\x05t;\x02\u0210\u0213\x05N(" +
    "\x02\u0211\u0213\x05\x86D\x02\u0212\u0210\x03\x02\x02\x02\u0212\u0211" +
    "\x03\x02\x02\x02\u0213\x81\x03\x02\x02\x02\u0214\u0215\x05\x84C\x02\u0215" +
    "\u0216\x07\x16\x02\x02\u0216\u0217\t\f\x02\x02\u0217\x83\x03\x02\x02\x02" +
    "\u0218\u021B\x05Z.\x02\u0219\u021B\x05\\/\x02\u021A\u0218\x03\x02\x02" +
    "\x02\u021A\u0219\x03\x02\x02\x02\u021B\x85\x03\x02\x02\x02\u021C\u021D" +
    "\x07\x87\x02\x02\u021D\u021E\x05\x88E\x02\u021E\u021F\x07\x86\x02\x02" +
    "\u021F\x87\x03\x02\x02\x02\u0220\u0225\x05\x16\f\x02\u0221\u0222\x07\x84" +
    "\x02\x02\u0222\u0224\x05\x16\f\x02\u0223\u0221\x03\x02\x02\x02\u0224\u0227" +
    "\x03\x02\x02\x02\u0225\u0223\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02" +
    "\u0226\x89\x03\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0228\u022B\x07" +
    "!\x02\x02\u0229\u022C\x05\x8CG\x02\u022A\u022C\x05\x8EH\x02\u022B\u0229" +
    "\x03\x02\x02\x02\u022B\u022A\x03\x02\x02\x02\u022C\x8B\x03\x02\x02\x02" +
    "\u022D\u022E\x05~@\x02\u022E\x8D\x03\x02\x02\x02\u022F\u0230\x07)\x02" +
    "\x02\u0230\u0231\x07(\x02\x02\u0231\u0232\x05\x90I\x02\u0232\x8F\x03\x02" +
    "\x02\x02\u0233\u0238\x05\x92J\x02\u0234\u0235\x07\x06\x02\x02\u0235\u0237" +
    "\x05\x92J\x02\u0236\u0234\x03\x02\x02\x02";
SOQLParser._serializedATNSegment1 = "\u0237\u023A\x03\x02\x02\x02\u0238\u0236\x03\x02\x02\x02\u0238\u0239\x03" +
    "\x02\x02\x02\u0239\x91\x03\x02\x02\x02\u023A\u0238\x03\x02\x02\x02\u023B" +
    "\u023C\x05\x0E\b\x02\u023C\u023D\x05\x96L\x02\u023D\u023E\x05\x94K\x02" +
    "\u023E\x93\x03\x02\x02\x02\u023F\u024C\x05\x10\t\x02\u0240\u0241\x07\x87" +
    "\x02\x02\u0241\u0246\x05\x10\t\x02\u0242\u0243\x07\x84\x02\x02\u0243\u0245" +
    "\x05\x10\t\x02\u0244\u0242\x03\x02\x02\x02\u0245\u0248\x03\x02\x02\x02" +
    "\u0246\u0244\x03\x02\x02\x02\u0246\u0247\x03\x02\x02\x02\u0247\u0249\x03" +
    "\x02\x02\x02\u0248\u0246\x03\x02\x02\x02\u0249\u024A\x07\x86\x02\x02\u024A" +
    "\u024C\x03\x02\x02\x02\u024B\u023F\x03\x02\x02\x02\u024B\u0240\x03\x02" +
    "\x02\x02\u024C\x95\x03\x02\x02\x02\u024D\u024E\t\r\x02\x02\u024E\x97\x03" +
    "\x02\x02\x02\u024F\u0250\x05\x9EP\x02\u0250\x99\x03\x02\x02\x02\u0251" +
    "\u0252\x07\x1C\x02\x02\u0252\u0253\x07\x87\x02\x02\u0253\u0254\x05\x9E" +
    "P\x02\u0254\u0255\x07\x86\x02\x02\u0255\x9B\x03\x02\x02\x02\u0256\u0257" +
    "\x07\n\x02\x02\u0257\u0258\x07\x87\x02\x02\u0258\u0259\x05\x9EP\x02\u0259" +
    "\u025A\x07\x86\x02\x02\u025A\x9D\x03\x02\x02\x02\u025B\u0260\x05\xA0Q" +
    "\x02\u025C\u025D\x07\x84\x02\x02\u025D\u025F\x05\xA0Q\x02\u025E\u025C" +
    "\x03\x02\x02\x02\u025F\u0262\x03\x02\x02\x02\u0260\u025E\x03\x02\x02\x02" +
    "\u0260\u0261\x03\x02\x02\x02\u0261\x9F\x03\x02\x02\x02\u0262\u0260\x03" +
    "\x02\x02\x02\u0263\u0266\x05Z.\x02\u0264\u0266\x05\\/\x02\u0265\u0263" +
    "\x03\x02\x02\x02\u0265\u0264\x03\x02\x02\x02\u0266\xA1\x03\x02\x02\x02" +
    "\u0267\u026C\x05\xA4S\x02\u0268\u0269\x07\x84\x02\x02\u0269\u026B\x05" +
    "\xA4S\x02\u026A\u0268\x03\x02\x02\x02\u026B\u026E\x03\x02\x02\x02\u026C" +
    "\u026A\x03\x02\x02\x02\u026C\u026D\x03\x02\x02\x02\u026D\xA3\x03\x02\x02" +
    "\x02\u026E\u026C\x03\x02\x02\x02\u026F\u0271\x05\xAAV\x02\u0270\u0272" +
    "\x05\xA6T\x02\u0271\u0270\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02" +
    "\u0272\u0274\x03\x02\x02\x02\u0273\u0275\x05\xA8U\x02\u0274\u0273\x03" +
    "\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\xA5\x03\x02\x02\x02\u0276" +
    "\u0277\t\x0E\x02\x02\u0277\xA7\x03\x02\x02\x02\u0278\u0279\x07\x1A\x02" +
    "\x02\u0279\u027A\t\x0F\x02\x02\u027A\xA9\x03\x02\x02\x02\u027B\u027E\x05" +
    "Z.\x02\u027C\u027E\x05\\/\x02\u027D\u027B\x03\x02\x02\x02\u027D\u027C" +
    "\x03\x02\x02\x02\u027E\xAB\x03\x02\x02\x02\u027F\u0280\t\x10\x02\x02\u0280" +
    "\xAD\x03\x02\x02\x02\u0281\u0282\t\x11\x02\x02\u0282\xAF\x03\x02\x02\x02" +
    "B\xB4\xBB\xCC\xCF\xDC\xF8\u0105\u0108\u010B\u010F\u0111\u0114\u0117\u011A" +
    "\u011D\u0120\u012A\u0133\u0142\u0155\u0159\u015F\u0165\u0168\u016B\u016E" +
    "\u0171\u0174\u0177\u017A\u0184\u018B\u018F\u0193\u0197\u019A\u01A1\u01AA" +
    "\u01B0\u01B6\u01BD\u01CE\u01D2\u01D6\u01DD\u01E9\u01F0\u01F7\u01FB\u01FF" +
    "\u0208\u0212\u021A\u0225\u022B\u0238\u0246\u024B\u0260\u0265\u026C\u0271" +
    "\u0274\u027D";
SOQLParser._serializedATN = Utils.join([
    SOQLParser._serializedATNSegment0,
    SOQLParser._serializedATNSegment1
], "");
__decorate([
    Decorators_2.Override,
    Decorators_1.NotNull,
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], SOQLParser.prototype, "vocabulary", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], SOQLParser.prototype, "grammarFileName", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [])
], SOQLParser.prototype, "ruleNames", null);
__decorate([
    Decorators_2.Override,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], SOQLParser.prototype, "serializedATN", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Keywords_alias_allowedContext)
], SOQLParser.prototype, "keywords_alias_allowed", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Keywords_name_allowedContext)
], SOQLParser.prototype, "keywords_name_allowed", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NameContext)
], SOQLParser.prototype, "name", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object_nameContext)
], SOQLParser.prototype, "object_name", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Field_nameContext)
], SOQLParser.prototype, "field_name", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Filter_scope_nameContext)
], SOQLParser.prototype, "filter_scope_name", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Data_category_group_nameContext)
], SOQLParser.prototype, "data_category_group_name", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Data_category_nameContext)
], SOQLParser.prototype, "data_category_name", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Alias_nameContext)
], SOQLParser.prototype, "alias_name", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", AliasContext)
], SOQLParser.prototype, "alias", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", LiteralContext)
], SOQLParser.prototype, "literal", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Date_formula_literalContext)
], SOQLParser.prototype, "date_formula_literal", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Date_formula_n_literal_nameContext)
], SOQLParser.prototype, "date_formula_n_literal_name", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Date_formula_n_literalContext)
], SOQLParser.prototype, "date_formula_n_literal", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Datetime_literalContext)
], SOQLParser.prototype, "datetime_literal", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Date_literalContext)
], SOQLParser.prototype, "date_literal", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Integer_literalContext)
], SOQLParser.prototype, "integer_literal", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Real_literalContext)
], SOQLParser.prototype, "real_literal", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String_literalContext)
], SOQLParser.prototype, "string_literal", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean_literalContext)
], SOQLParser.prototype, "boolean_literal", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Null_literalContext)
], SOQLParser.prototype, "null_literal", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Function_nameContext)
], SOQLParser.prototype, "function_name", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Function_dateContext)
], SOQLParser.prototype, "function_date", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Function_aggregateContext)
], SOQLParser.prototype, "function_aggregate", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Function_locationContext)
], SOQLParser.prototype, "function_location", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Function_otherContext)
], SOQLParser.prototype, "function_other", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Soql_queryContext)
], SOQLParser.prototype, "soql_query", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Select_clauseContext)
], SOQLParser.prototype, "select_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", From_clauseContext)
], SOQLParser.prototype, "from_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Using_clauseContext)
], SOQLParser.prototype, "using_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Where_clauseContext)
], SOQLParser.prototype, "where_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Groupby_clauseContext)
], SOQLParser.prototype, "groupby_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Having_clauseContext)
], SOQLParser.prototype, "having_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Orderby_clauseContext)
], SOQLParser.prototype, "orderby_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Limit_clauseContext)
], SOQLParser.prototype, "limit_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Offset_clauseContext)
], SOQLParser.prototype, "offset_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", For_clauseContext)
], SOQLParser.prototype, "for_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Update_clauseContext)
], SOQLParser.prototype, "update_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Soql_subqueryContext)
], SOQLParser.prototype, "soql_subquery", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Subquery_select_clauseContext)
], SOQLParser.prototype, "subquery_select_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Select_specContext)
], SOQLParser.prototype, "select_spec", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Subquery_select_specContext)
], SOQLParser.prototype, "subquery_select_spec", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Field_specContext)
], SOQLParser.prototype, "field_spec", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Function_call_specContext)
], SOQLParser.prototype, "function_call_spec", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", FieldContext)
], SOQLParser.prototype, "field", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Function_callContext)
], SOQLParser.prototype, "function_call", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Function_parameter_listContext)
], SOQLParser.prototype, "function_parameter_list", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Function_parameterContext)
], SOQLParser.prototype, "function_parameter", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Typeof_specContext)
], SOQLParser.prototype, "typeof_spec", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Typeof_when_then_clause_listContext)
], SOQLParser.prototype, "typeof_when_then_clause_list", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Typeof_when_then_clauseContext)
], SOQLParser.prototype, "typeof_when_then_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Typeof_then_clauseContext)
], SOQLParser.prototype, "typeof_then_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Typeof_else_clauseContext)
], SOQLParser.prototype, "typeof_else_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Field_listContext)
], SOQLParser.prototype, "field_list", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object_specContext)
], SOQLParser.prototype, "object_spec", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object_prefixContext)
], SOQLParser.prototype, "object_prefix", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Comparison_operatorContext)
], SOQLParser.prototype, "comparison_operator", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Set_operatorContext)
], SOQLParser.prototype, "set_operator", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ConditionContext)
], SOQLParser.prototype, "condition", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Condition1Context)
], SOQLParser.prototype, "condition1", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ParenthesisContext)
], SOQLParser.prototype, "parenthesis", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Simple_conditionContext)
], SOQLParser.prototype, "simple_condition", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Field_based_conditionContext)
], SOQLParser.prototype, "field_based_condition", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Set_based_conditionContext)
], SOQLParser.prototype, "set_based_condition", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Like_based_conditionContext)
], SOQLParser.prototype, "like_based_condition", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Condition_fieldContext)
], SOQLParser.prototype, "condition_field", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Set_valuesContext)
], SOQLParser.prototype, "set_values", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Set_value_listContext)
], SOQLParser.prototype, "set_value_list", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", With_clauseContext)
], SOQLParser.prototype, "with_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", With_plain_clauseContext)
], SOQLParser.prototype, "with_plain_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", With_data_category_clauseContext)
], SOQLParser.prototype, "with_data_category_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Data_category_spec_listContext)
], SOQLParser.prototype, "data_category_spec_list", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Data_category_specContext)
], SOQLParser.prototype, "data_category_spec", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Data_category_parameter_listContext)
], SOQLParser.prototype, "data_category_parameter_list", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Data_category_selectorContext)
], SOQLParser.prototype, "data_category_selector", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Group_by_plain_clauseContext)
], SOQLParser.prototype, "group_by_plain_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Group_by_rollup_clauseContext)
], SOQLParser.prototype, "group_by_rollup_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Group_by_cube_clauseContext)
], SOQLParser.prototype, "group_by_cube_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Group_by_listContext)
], SOQLParser.prototype, "group_by_list", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Group_by_specContext)
], SOQLParser.prototype, "group_by_spec", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Order_by_listContext)
], SOQLParser.prototype, "order_by_list", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Order_by_specContext)
], SOQLParser.prototype, "order_by_spec", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Order_by_direction_clauseContext)
], SOQLParser.prototype, "order_by_direction_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Order_by_nulls_clauseContext)
], SOQLParser.prototype, "order_by_nulls_clause", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Order_by_fieldContext)
], SOQLParser.prototype, "order_by_field", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", For_valueContext)
], SOQLParser.prototype, "for_value", null);
__decorate([
    RuleVersion_1.RuleVersion(0),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Update_valueContext)
], SOQLParser.prototype, "update_value", null);
exports.SOQLParser = SOQLParser;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU09RTFBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nZW5lcmF0ZWQvU09RTFBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMkRBQTJEOzs7Ozs7Ozs7OztBQUczRCwwQ0FBdUM7QUFDdkMsa0VBQStEO0FBRS9ELG9EQUE4QztBQUM5Qyx3RUFBcUU7QUFDckUsb0RBQStDO0FBQy9DLDRDQUF5QztBQUN6QyxrRUFBK0Q7QUFDL0Qsd0VBQXFFO0FBR3JFLHdFQUFxRTtBQUVyRSxzREFBbUQ7QUFFbkQsMENBQXVDO0FBR3ZDLDREQUF5RDtBQUV6RCw2Q0FBNkM7QUFPN0MsbUNBQTJDLFNBQVEscUNBQWlCO0lBbUJuRSxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBckJNLEtBQUssS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsY0FBYyxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRyxFQUFFLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdFLEtBQUssS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsUUFBUSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RixJQUFJLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLEdBQUcsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0UsTUFBTSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRixLQUFLLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLFNBQVMsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0YsS0FBSyxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixRQUFRLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLElBQUksS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakYsTUFBTSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRixJQUFJLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLFFBQVEsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekYsSUFBSSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQU05RSxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztJQUVwRixTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDO1lBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDO1lBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLDJCQUEyQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRixJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OzhEQUFrRjtBQUUzRjtJQURDLHFCQUFROzs7OzhEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozs2REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7MkRBSVI7QUFwQ0Ysc0VBcUNDO0FBR0Qsa0NBQTBDLFNBQVEscUNBQWlCO0lBTWxFLFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFSTSxzQkFBc0I7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ00sS0FBSyxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQU1oRixJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztJQUVuRixTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDO1lBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDO1lBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RixJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OzZEQUFpRjtBQUUxRjtJQURDLHFCQUFROzs7OzZEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozs0REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7MERBSVI7QUF2QkYsb0VBd0JDO0FBR0QsaUJBQXlCLFNBQVEscUNBQWlCO0lBZWpELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFqQk0sRUFBRSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RSxxQkFBcUI7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ00sb0JBQW9CO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLDJCQUEyQixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNNLDJCQUEyQjtRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDTSxhQUFhO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQU1TLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUVsRSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztZQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OzRDQUFnRTtBQUV6RTtJQURDLHFCQUFROzs7OzRDQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OzsyQ0FHUjtBQUVEO0lBREMscUJBQVE7Ozs7eUNBSVI7QUFoQ0Ysa0NBaUNDO0FBR0Qsd0JBQWdDLFNBQVEscUNBQWlCO0lBS3hELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFQTSxJQUFJO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUV6RSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1lBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7bURBQXVFO0FBRWhGO0lBREMscUJBQVE7Ozs7bURBR1I7QUFFRDtJQURDLHFCQUFROzs7O2tEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztnREFJUjtBQXRCRixnREF1QkM7QUFHRCx1QkFBK0IsU0FBUSxxQ0FBaUI7SUFLdkQsWUFBWSxNQUF5QixFQUFFLGFBQXFCO1FBQzNELEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQVBNLElBQUk7UUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQU1TLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUV4RSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O2tEQUFzRTtBQUUvRTtJQURDLHFCQUFROzs7O2tEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztpREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7K0NBSVI7QUF0QkYsOENBdUJDO0FBR0QsOEJBQXNDLFNBQVEscUNBQWlCO0lBSzlELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFQTSxJQUFJO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUUvRSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDO1lBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDO1lBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRixJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O3lEQUE2RTtBQUV0RjtJQURDLHFCQUFROzs7O3lEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozt3REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7c0RBSVI7QUF0QkYsNERBdUJDO0FBR0QscUNBQTZDLFNBQVEscUNBQWlCO0lBS3JFLFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFQTSxJQUFJO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztJQUV0RixTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLDZCQUE2QixDQUFDO1lBQUMsUUFBUSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDO1lBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLDZCQUE2QixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RixJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O2dFQUFvRjtBQUU3RjtJQURDLHFCQUFROzs7O2dFQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OzsrREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7NkRBSVI7QUF0QkYsMEVBdUJDO0FBR0QsK0JBQXVDLFNBQVEscUNBQWlCO0lBSy9ELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFQTSxJQUFJO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUVoRixTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDO1lBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDO1lBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRixJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OzBEQUE4RTtBQUV2RjtJQURDLHFCQUFROzs7OzBEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozt5REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7dURBSVI7QUF0QkYsOERBdUJDO0FBR0QsdUJBQStCLFNBQVEscUNBQWlCO0lBZXZELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFqQk0sRUFBRSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RSxzQkFBc0I7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ00sb0JBQW9CO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLDJCQUEyQixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUNNLDJCQUEyQjtRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFDTSxhQUFhO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQU1TLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUV4RSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztZQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O2tEQUFzRTtBQUUvRTtJQURDLHFCQUFROzs7O2tEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztpREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7K0NBSVI7QUFoQ0YsOENBaUNDO0FBR0Qsa0JBQTBCLFNBQVEscUNBQWlCO0lBTWxELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFSTSxVQUFVO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDTSxFQUFFLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBTTFFLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUVuRSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OzZDQUFpRTtBQUUxRTtJQURDLHFCQUFROzs7OzZDQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozs0Q0FHUjtBQUVEO0lBREMscUJBQVE7Ozs7MENBSVI7QUF2QkYsb0NBd0JDO0FBR0Qsb0JBQTRCLFNBQVEscUNBQWlCO0lBNkJwRCxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBL0JNLG9CQUFvQjtRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDTSxzQkFBc0I7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ00sZ0JBQWdCO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNNLFlBQVk7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ00sZUFBZTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDTSxZQUFZO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNNLGNBQWM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ00sZUFBZTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFDTSxZQUFZO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQU1TLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUVyRSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztZQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO1lBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OytDQUFtRTtBQUU1RTtJQURDLHFCQUFROzs7OytDQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozs4Q0FHUjtBQUVEO0lBREMscUJBQVE7Ozs7NENBSVI7QUE5Q0Ysd0NBK0NDO0FBR0QsaUNBQXlDLFNBQVEscUNBQWlCO0lBeUJqRSxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBM0JNLFNBQVMsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0YsS0FBSyxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixRQUFRLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLFNBQVMsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0YsU0FBUyxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRixTQUFTLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNGLFVBQVUsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0YsVUFBVSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RixVQUFVLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdGLFlBQVksS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakcsWUFBWSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRyxZQUFZLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLFlBQVksS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakcsWUFBWSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRyxTQUFTLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNGLFNBQVMsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0YsU0FBUyxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRixtQkFBbUIsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRyxtQkFBbUIsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRyxtQkFBbUIsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRyxnQkFBZ0IsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RyxnQkFBZ0IsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RyxnQkFBZ0IsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQU10RyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztJQUVsRixTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDO1lBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDO1lBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RixJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OzREQUFnRjtBQUV6RjtJQURDLHFCQUFROzs7OzREQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OzsyREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7eURBSVI7QUExQ0Ysa0VBMkNDO0FBR0Qsd0NBQWdELFNBQVEscUNBQWlCO0lBdUJ4RSxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBekJNLFdBQVcsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0YsV0FBVyxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRixVQUFVLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdGLFlBQVksS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakcsWUFBWSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRyxXQUFXLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9GLGFBQWEsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkcsYUFBYSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRyxZQUFZLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLGVBQWUsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkcsZUFBZSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RyxjQUFjLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLFlBQVksS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakcsWUFBWSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRyxXQUFXLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9GLHNCQUFzQixLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JILHNCQUFzQixLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JILHFCQUFxQixLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25ILG1CQUFtQixLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9HLG1CQUFtQixLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9HLGtCQUFrQixLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBTTFHLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO0lBRXpGLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQUM7WUFBQyxRQUFRLENBQUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsK0JBQStCLENBQUM7WUFBQyxRQUFRLENBQUMsK0JBQStCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0NBQWdDLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BHLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7bUVBQXVGO0FBRWhHO0lBREMscUJBQVE7Ozs7bUVBR1I7QUFFRDtJQURDLHFCQUFROzs7O2tFQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztnRUFJUjtBQXhDRixnRkF5Q0M7QUFHRCxtQ0FBMkMsU0FBUSxxQ0FBaUI7SUFPbkUsWUFBWSxNQUF5QixFQUFFLGFBQXFCO1FBQzNELEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQVRNLDJCQUEyQjtRQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsa0NBQWtDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBQ00sS0FBSyxLQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxnQkFBZ0IsS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQU12RixJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztJQUVwRixTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDO1lBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDO1lBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLDJCQUEyQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRixJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OzhEQUFrRjtBQUUzRjtJQURDLHFCQUFROzs7OzhEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozs2REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7MkRBSVI7QUF4QkYsc0VBeUJDO0FBR0QsNkJBQXFDLFNBQVEscUNBQWlCO0lBRzdELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFMTSxRQUFRLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBTXZFLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBRTlFLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUM7WUFBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUM7WUFBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlFLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7d0RBQTRFO0FBRXJGO0lBREMscUJBQVE7Ozs7d0RBR1I7QUFFRDtJQURDLHFCQUFROzs7O3VEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztxREFJUjtBQXBCRiwwREFxQkM7QUFHRCx5QkFBaUMsU0FBUSxxQ0FBaUI7SUFHekQsWUFBWSxNQUF5QixFQUFFLGFBQXFCO1FBQzNELEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQUxNLElBQUksS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFNL0QsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFFMUUsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztZQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7OztvREFBd0U7QUFFakY7SUFEQyxxQkFBUTs7OztvREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7bURBR1I7QUFFRDtJQURDLHFCQUFROzs7O2lEQUlSO0FBcEJGLGtEQXFCQztBQUdELDRCQUFvQyxTQUFRLHFDQUFpQjtJQUk1RCxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBTk0sY0FBYyxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRyxnQkFBZ0IsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQU10RyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztJQUU3RSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDO1lBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDO1lBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O3VEQUEyRTtBQUVwRjtJQURDLHFCQUFROzs7O3VEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztzREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7b0RBSVI7QUFyQkYsd0RBc0JDO0FBR0QseUJBQWlDLFNBQVEscUNBQWlCO0lBR3pELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFMTSxXQUFXLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBTTdFLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBRTFFLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7WUFBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7WUFBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7b0RBQXdFO0FBRWpGO0lBREMscUJBQVE7Ozs7b0RBR1I7QUFFRDtJQURDLHFCQUFROzs7O21EQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztpREFJUjtBQXBCRixrREFxQkM7QUFHRCwyQkFBbUMsU0FBUSxxQ0FBaUI7SUFHM0QsWUFBWSxNQUF5QixFQUFFLGFBQXFCO1FBQzNELEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQUxNLFlBQVksS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFNL0UsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFFNUUsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztZQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztZQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7OztzREFBMEU7QUFFbkY7SUFEQyxxQkFBUTs7OztzREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7cURBR1I7QUFFRDtJQURDLHFCQUFROzs7O21EQUlSO0FBcEJGLHNEQXFCQztBQUdELDRCQUFvQyxTQUFRLHFDQUFpQjtJQUk1RCxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBTk0sSUFBSSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRixLQUFLLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBTWhGLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBRTdFLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUM7WUFBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUM7WUFBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVFLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7dURBQTJFO0FBRXBGO0lBREMscUJBQVE7Ozs7dURBR1I7QUFFRDtJQURDLHFCQUFROzs7O3NEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztvREFJUjtBQXJCRix3REFzQkM7QUFHRCx5QkFBaUMsU0FBUSxxQ0FBaUI7SUFHekQsWUFBWSxNQUF5QixFQUFFLGFBQXFCO1FBQzNELEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQUxNLElBQUksS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFNL0QsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFFMUUsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztZQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7OztvREFBd0U7QUFFakY7SUFEQyxxQkFBUTs7OztvREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7bURBR1I7QUFFRDtJQURDLHFCQUFROzs7O2lEQUlSO0FBcEJGLGtEQXFCQztBQUdELDBCQUFrQyxTQUFRLHFDQUFpQjtJQWMxRCxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBaEJNLGFBQWE7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ00sa0JBQWtCO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLHlCQUF5QixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUNNLGlCQUFpQjtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDTSxjQUFjO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQU1TLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBRTNFLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUM7WUFBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7WUFBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7cURBQXlFO0FBRWxGO0lBREMscUJBQVE7Ozs7cURBR1I7QUFFRDtJQURDLHFCQUFROzs7O29EQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztrREFJUjtBQS9CRixvREFnQ0M7QUFHRCwwQkFBa0MsU0FBUSxxQ0FBaUI7SUFlMUQsWUFBWSxNQUF5QixFQUFFLGFBQXFCO1FBQzNELEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQWpCTSxjQUFjLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLGdCQUFnQixLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLGFBQWEsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkcsWUFBWSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRyxXQUFXLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9GLFdBQVcsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0YsUUFBUSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RixZQUFZLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLGNBQWMsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckcsV0FBVyxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRixXQUFXLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9GLGFBQWEsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkcsWUFBWSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQU05RixJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUUzRSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO1lBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O3FEQUF5RTtBQUVsRjtJQURDLHFCQUFROzs7O3FEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztvREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7a0RBSVI7QUFoQ0Ysb0RBaUNDO0FBR0QsK0JBQXVDLFNBQVEscUNBQWlCO0lBUS9ELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFWTSxHQUFHLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9FLEtBQUssS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsY0FBYyxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRyxHQUFHLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9FLEdBQUcsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0UsR0FBRyxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQU01RSxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUVoRixTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDO1lBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDO1lBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRixJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OzBEQUE4RTtBQUV2RjtJQURDLHFCQUFROzs7OzBEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozt5REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7dURBSVI7QUF6QkYsOERBMEJDO0FBR0QsOEJBQXNDLFNBQVEscUNBQWlCO0lBSTlELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFOTSxRQUFRLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLFdBQVcsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFNNUYsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFFL0UsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQztZQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQztZQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEYsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7Ozt5REFBNkU7QUFFdEY7SUFEQyxxQkFBUTs7Ozt5REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7d0RBR1I7QUFFRDtJQURDLHFCQUFROzs7O3NEQUlSO0FBckJGLDREQXNCQztBQUdELDJCQUFtQyxTQUFRLHFDQUFpQjtJQU8zRCxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBVE0sTUFBTSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRixPQUFPLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLGlCQUFpQixLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNHLGdCQUFnQixLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLFFBQVEsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFNdEYsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFFNUUsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztZQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztZQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7OztzREFBMEU7QUFFbkY7SUFEQyxxQkFBUTs7OztzREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7cURBR1I7QUFFRDtJQURDLHFCQUFROzs7O21EQUlSO0FBeEJGLHNEQXlCQztBQUdELHVCQUErQixTQUFRLHFDQUFpQjtJQXVDdkQsWUFBWSxNQUF5QixFQUFFLGFBQXFCO1FBQzNELEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQXpDTSxhQUFhO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDTSxXQUFXO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDTSxHQUFHLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLFlBQVk7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ00sWUFBWTtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDTSxXQUFXO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNNLGNBQWM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ00sY0FBYztRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFDTSxZQUFZO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNNLGFBQWE7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBQ00sVUFBVTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDTSxhQUFhO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNNLGFBQWE7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBTVMsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBRXhFLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO1lBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7a0RBQXNFO0FBRS9FO0lBREMscUJBQVE7Ozs7a0RBR1I7QUFFRDtJQURDLHFCQUFROzs7O2lEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OzsrQ0FJUjtBQXhERiw4Q0F5REM7QUFHRCwwQkFBa0MsU0FBUSxxQ0FBaUI7SUFxQjFELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUF2Qk0sTUFBTSxLQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUd0RSxXQUFXLENBQUMsQ0FBVTtRQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELENBQUM7SUFDRixDQUFDO0lBR00sS0FBSyxDQUFDLENBQVU7UUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNGLENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUUzRSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO1lBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O3FEQUF5RTtBQUVsRjtJQURDLHFCQUFROzs7O3FEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztvREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7a0RBSVI7QUF0Q0Ysb0RBdUNDO0FBR0Qsd0JBQWdDLFNBQVEscUNBQWlCO0lBcUJ4RCxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBdkJNLElBQUksS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFHbEUsV0FBVyxDQUFDLENBQVU7UUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxDQUFDO0lBQ0YsQ0FBQztJQUdNLEtBQUssQ0FBQyxDQUFVO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNDLENBQUM7SUFDRixDQUFDO0lBTVMsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFFekUsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O21EQUF1RTtBQUVoRjtJQURDLHFCQUFROzs7O21EQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztrREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7Z0RBSVI7QUF0Q0YsZ0RBdUNDO0FBR0QseUJBQWlDLFNBQVEscUNBQWlCO0lBT3pELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFUTSxLQUFLLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLEtBQUssS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDcEUsaUJBQWlCO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUUxRSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1lBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O29EQUF3RTtBQUVqRjtJQURDLHFCQUFROzs7O29EQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OzttREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7aURBSVI7QUF4QkYsa0RBeUJDO0FBR0QseUJBQWlDLFNBQVEscUNBQWlCO0lBTXpELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFSTSxLQUFLLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLFNBQVM7UUFDZixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBTVMsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFFMUUsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztZQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEUsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7OztvREFBd0U7QUFFakY7SUFEQyxxQkFBUTs7OztvREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7bURBR1I7QUFFRDtJQURDLHFCQUFROzs7O2lEQUlSO0FBdkJGLGtEQXdCQztBQUdELDJCQUFtQyxTQUFRLHFDQUFpQjtJQWEzRCxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBZk0sS0FBSyxLQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxFQUFFLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlELHNCQUFzQjtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFDTSxvQkFBb0I7UUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBQ00scUJBQXFCO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLDRCQUE0QixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQU1TLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBRTVFLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUM7WUFBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUM7WUFBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFFLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7c0RBQTBFO0FBRW5GO0lBREMscUJBQVE7Ozs7c0RBR1I7QUFFRDtJQURDLHFCQUFROzs7O3FEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OzttREFJUjtBQTlCRixzREErQkM7QUFHRCwwQkFBa0MsU0FBUSxxQ0FBaUI7SUFNMUQsWUFBWSxNQUF5QixFQUFFLGFBQXFCO1FBQzNELEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQVJNLE1BQU0sS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsU0FBUztRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUUzRSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO1lBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O3FEQUF5RTtBQUVsRjtJQURDLHFCQUFROzs7O3FEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztvREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7a0RBSVI7QUF2QkYsb0RBd0JDO0FBR0QsMkJBQW1DLFNBQVEscUNBQWlCO0lBTzNELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFUTSxLQUFLLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLEVBQUUsS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUQsYUFBYTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBTVMsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFFNUUsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztZQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztZQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7OztzREFBMEU7QUFFbkY7SUFEQyxxQkFBUTs7OztzREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7cURBR1I7QUFFRDtJQURDLHFCQUFROzs7O21EQUlSO0FBeEJGLHNEQXlCQztBQUdELHlCQUFpQyxTQUFRLHFDQUFpQjtJQUl6RCxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBTk0sS0FBSyxLQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRSxnQkFBZ0IsS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQU12RixJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUUxRSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1lBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O29EQUF3RTtBQUVqRjtJQURDLHFCQUFROzs7O29EQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OzttREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7aURBSVI7QUFyQkYsa0RBc0JDO0FBR0QsMEJBQWtDLFNBQVEscUNBQWlCO0lBSTFELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFOTSxNQUFNLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLGdCQUFnQixLQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBTXZGLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBRTNFLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUM7WUFBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7WUFBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7cURBQXlFO0FBRWxGO0lBREMscUJBQVE7Ozs7cURBR1I7QUFFRDtJQURDLHFCQUFROzs7O29EQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztrREFJUjtBQXJCRixvREFzQkM7QUFHRCx1QkFBK0IsU0FBUSxxQ0FBaUI7SUFxQnZELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUF2Qk0sR0FBRyxLQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUdoRSxTQUFTLENBQUMsQ0FBVTtRQUMxQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFDRixDQUFDO0lBR00sS0FBSyxDQUFDLENBQVU7UUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNGLENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFFeEUsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEUsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7OztrREFBc0U7QUFFL0U7SUFEQyxxQkFBUTs7OztrREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7aURBR1I7QUFFRDtJQURDLHFCQUFROzs7OytDQUlSO0FBdENGLDhDQXVDQztBQUdELDBCQUFrQyxTQUFRLHFDQUFpQjtJQWExRCxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBZk0sTUFBTSxLQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUd0RSxZQUFZLENBQUMsQ0FBVTtRQUM3QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3BELENBQUM7SUFDRixDQUFDO0lBQ00sS0FBSyxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQU1oRixJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUUzRSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO1lBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O3FEQUF5RTtBQUVsRjtJQURDLHFCQUFROzs7O3FEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztvREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7a0RBSVI7QUE5QkYsb0RBK0JDO0FBR0QsMEJBQWtDLFNBQVEscUNBQWlCO0lBa0MxRCxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBcENNLE1BQU0sS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsc0JBQXNCO1FBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFDTSxXQUFXO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDTSxNQUFNLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLFlBQVk7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ00sWUFBWTtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDTSxXQUFXO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNNLGNBQWM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBQ00sWUFBWTtRQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDTSxhQUFhO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNNLFVBQVU7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ00sYUFBYTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUUzRSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO1lBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O3FEQUF5RTtBQUVsRjtJQURDLHFCQUFROzs7O3FEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztvREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7a0RBSVI7QUFuREYsb0RBb0RDO0FBR0QsbUNBQTJDLFNBQVEscUNBQWlCO0lBcUJuRSxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBdkJNLE1BQU0sS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFHdEUsb0JBQW9CLENBQUMsQ0FBVTtRQUNyQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1FBQzVELENBQUM7SUFDRixDQUFDO0lBR00sS0FBSyxDQUFDLENBQVU7UUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNGLENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztJQUVwRixTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDO1lBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDO1lBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLDJCQUEyQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRixJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OzhEQUFrRjtBQUUzRjtJQURDLHFCQUFROzs7OzhEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozs2REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7MkRBSVI7QUF0Q0Ysc0VBdUNDO0FBR0Qsd0JBQWdDLFNBQVEscUNBQWlCO0lBY3hELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFoQk0sVUFBVTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDTSxrQkFBa0I7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUseUJBQXlCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ00sYUFBYTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDTSxXQUFXO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQU1TLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBRXpFLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7WUFBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO1lBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7OzttREFBdUU7QUFFaEY7SUFEQyxxQkFBUTs7OzttREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7a0RBR1I7QUFFRDtJQURDLHFCQUFROzs7O2dEQUlSO0FBL0JGLGdEQWdDQztBQUdELGlDQUF5QyxTQUFRLHFDQUFpQjtJQVFqRSxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBVk0sVUFBVTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDTSxrQkFBa0I7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUseUJBQXlCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBTVMsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7SUFFbEYsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQztZQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQztZQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEYsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7Ozs0REFBZ0Y7QUFFekY7SUFEQyxxQkFBUTs7Ozs0REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7MkRBR1I7QUFFRDtJQURDLHFCQUFROzs7O3lEQUlSO0FBekJGLGtFQTBCQztBQUdELHVCQUErQixTQUFRLHFDQUFpQjtJQVF2RCxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBVk0sS0FBSztRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ00sS0FBSztRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFFeEUsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEUsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7OztrREFBc0U7QUFFL0U7SUFEQyxxQkFBUTs7OztrREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7aURBR1I7QUFFRDtJQURDLHFCQUFROzs7OytDQUlSO0FBekJGLDhDQTBCQztBQUdELCtCQUF1QyxTQUFRLHFDQUFpQjtJQVEvRCxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBVk0sYUFBYTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ00sS0FBSztRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUVoRixTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDO1lBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDO1lBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRixJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OzBEQUE4RTtBQUV2RjtJQURDLHFCQUFROzs7OzBEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozt5REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7dURBSVI7QUF6QkYsOERBMEJDO0FBR0Qsa0JBQTBCLFNBQVEscUNBQWlCO0lBUWxELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFWTSxVQUFVO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDTSxhQUFhO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQU1TLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUVuRSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO1lBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OzZDQUFpRTtBQUUxRTtJQURDLHFCQUFROzs7OzZDQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozs0Q0FHUjtBQUVEO0lBREMscUJBQVE7Ozs7MENBSVI7QUF6QkYsb0NBMEJDO0FBR0QsMEJBQWtDLFNBQVEscUNBQWlCO0lBVTFELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFaTSxhQUFhO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDTSxNQUFNLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLE1BQU0sS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEUsdUJBQXVCO1FBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLDhCQUE4QixDQUFDLENBQUM7SUFDbEUsQ0FBQztJQU1TLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBRTNFLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUM7WUFBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7WUFBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7cURBQXlFO0FBRWxGO0lBREMscUJBQVE7Ozs7cURBR1I7QUFFRDtJQURDLHFCQUFROzs7O29EQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztrREFJUjtBQTNCRixvREE0QkM7QUFHRCxvQ0FBNEMsU0FBUSxxQ0FBaUI7SUFvQnBFLFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFwQk0sa0JBQWtCLENBQUMsQ0FBVTtRQUNuQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQzFELENBQUM7SUFDRixDQUFDO0lBR00sS0FBSyxDQUFDLENBQVU7UUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNGLENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztJQUVyRixTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDO1lBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDO1lBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RixJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OytEQUFtRjtBQUU1RjtJQURDLHFCQUFROzs7OytEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozs4REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7NERBSVI7QUFyQ0Ysd0VBc0NDO0FBR0QsK0JBQXVDLFNBQVEscUNBQWlCO0lBVy9ELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFiTSxLQUFLO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNNLE9BQU87UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ00sYUFBYTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUVoRixTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDO1lBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDO1lBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRixJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OzBEQUE4RTtBQUV2RjtJQURDLHFCQUFROzs7OzBEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozt5REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7dURBSVI7QUE1QkYsOERBNkJDO0FBR0Qsd0JBQWdDLFNBQVEscUNBQWlCO0lBYXhELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFmTSxNQUFNLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLEtBQUs7UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNNLDRCQUE0QjtRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ00sR0FBRyxLQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRSxrQkFBa0I7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUseUJBQXlCLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBTVMsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFFekUsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O21EQUF1RTtBQUVoRjtJQURDLHFCQUFROzs7O21EQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztrREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7Z0RBSVI7QUE5QkYsZ0RBK0JDO0FBR0QseUNBQWlELFNBQVEscUNBQWlCO0lBV3pFLFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFYTSx1QkFBdUIsQ0FBQyxDQUFVO1FBQ3hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDN0QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLDhCQUE4QixDQUFDLENBQUM7UUFDL0QsQ0FBQztJQUNGLENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztJQUUxRixTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGlDQUFpQyxDQUFDO1lBQUMsUUFBUSxDQUFDLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xHLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxDQUFDO1lBQUMsUUFBUSxDQUFDLGdDQUFnQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RyxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O29FQUF3RjtBQUVqRztJQURDLHFCQUFROzs7O29FQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OzttRUFHUjtBQUVEO0lBREMscUJBQVE7Ozs7aUVBSVI7QUE1QkYsa0ZBNkJDO0FBR0Qsb0NBQTRDLFNBQVEscUNBQWlCO0lBU3BFLFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFYTSxJQUFJLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLFdBQVc7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNNLGtCQUFrQjtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUseUJBQXlCLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBTVMsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7SUFFckYsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQztZQUFDLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQztZQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUYsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7OzsrREFBbUY7QUFFNUY7SUFEQyxxQkFBUTs7OzsrREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7OERBR1I7QUFFRDtJQURDLHFCQUFROzs7OzREQUlSO0FBMUJGLHdFQTJCQztBQUdELCtCQUF1QyxTQUFRLHFDQUFpQjtJQU0vRCxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBUk0sSUFBSSxLQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRSxVQUFVO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUVoRixTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDO1lBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDO1lBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRixJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OzBEQUE4RTtBQUV2RjtJQURDLHFCQUFROzs7OzBEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozt5REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7dURBSVI7QUF2QkYsOERBd0JDO0FBR0QsK0JBQXVDLFNBQVEscUNBQWlCO0lBTS9ELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFSTSxJQUFJLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLFVBQVU7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQU1TLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO0lBRWhGLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUM7WUFBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUM7WUFBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xGLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7MERBQThFO0FBRXZGO0lBREMscUJBQVE7Ozs7MERBR1I7QUFFRDtJQURDLHFCQUFROzs7O3lEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozt1REFJUjtBQXZCRiw4REF3QkM7QUFHRCx1QkFBK0IsU0FBUSxxQ0FBaUI7SUFvQnZELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFwQk0sS0FBSyxDQUFDLENBQVU7UUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0MsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzdDLENBQUM7SUFDRixDQUFDO0lBR00sS0FBSyxDQUFDLENBQVU7UUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNGLENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFFeEUsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEUsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7OztrREFBc0U7QUFFL0U7SUFEQyxxQkFBUTs7OztrREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7aURBR1I7QUFFRDtJQURDLHFCQUFROzs7OytDQUlSO0FBckNGLDhDQXNDQztBQUdELHdCQUFnQyxTQUFRLHFDQUFpQjtJQVd4RCxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBYk0sV0FBVztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ00sYUFBYTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFDTSxLQUFLO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQU1TLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBRXpFLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7WUFBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO1lBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7OzttREFBdUU7QUFFaEY7SUFEQyxxQkFBUTs7OzttREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7a0RBR1I7QUFFRDtJQURDLHFCQUFROzs7O2dEQUlSO0FBNUJGLGdEQTZCQztBQUdELDBCQUFrQyxTQUFRLHFDQUFpQjtJQW9CMUQsWUFBWSxNQUF5QixFQUFFLGFBQXFCO1FBQzNELEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQXBCTSxXQUFXLENBQUMsQ0FBVTtRQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELENBQUM7SUFDRixDQUFDO0lBR00sR0FBRyxDQUFDLENBQVU7UUFDcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztJQUNGLENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUUzRSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO1lBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O3FEQUF5RTtBQUVsRjtJQURDLHFCQUFROzs7O3FEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztvREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7a0RBSVI7QUFyQ0Ysb0RBc0NDO0FBR0QsZ0NBQXdDLFNBQVEscUNBQWlCO0lBUWhFLFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFWTSxFQUFFLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdFLE1BQU0sS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckYsR0FBRyxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRSxHQUFHLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9FLEdBQUcsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0UsR0FBRyxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQU01RSxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUVqRixTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDO1lBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDO1lBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRixJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OzJEQUErRTtBQUV4RjtJQURDLHFCQUFROzs7OzJEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OzswREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7d0RBSVI7QUF6QkYsZ0VBMEJDO0FBR0QseUJBQWlDLFNBQVEscUNBQWlCO0lBTXpELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFSTSxFQUFFLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdFLEdBQUcsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0UsUUFBUSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RixRQUFRLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBTXRGLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBRTFFLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7WUFBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUM7WUFBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7b0RBQXdFO0FBRWpGO0lBREMscUJBQVE7Ozs7b0RBR1I7QUFFRDtJQURDLHFCQUFROzs7O21EQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztpREFJUjtBQXZCRixrREF3QkM7QUFHRCxzQkFBOEIsU0FBUSxxQ0FBaUI7SUE2QnRELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUE3Qk0sVUFBVSxDQUFDLENBQVU7UUFDM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNsRCxDQUFDO0lBQ0YsQ0FBQztJQUdNLEVBQUUsQ0FBQyxDQUFVO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7SUFDRixDQUFDO0lBR00sR0FBRyxDQUFDLENBQVU7UUFDcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztJQUNGLENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFFdkUsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQztZQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7OztpREFBcUU7QUFFOUU7SUFEQyxxQkFBUTs7OztpREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7Z0RBR1I7QUFFRDtJQURDLHFCQUFROzs7OzhDQUlSO0FBOUNGLDRDQStDQztBQUdELHVCQUErQixTQUFRLHFDQUFpQjtJQVN2RCxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBWE0sZ0JBQWdCO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNNLFdBQVc7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ00sR0FBRyxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQU01RSxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFFeEUsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEUsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7OztrREFBc0U7QUFFL0U7SUFEQyxxQkFBUTs7OztrREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7aURBR1I7QUFFRDtJQURDLHFCQUFROzs7OytDQUlSO0FBMUJGLDhDQTJCQztBQUdELHdCQUFnQyxTQUFRLHFDQUFpQjtJQU94RCxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBVE0sTUFBTSxLQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxTQUFTO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNNLE1BQU0sS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFNbkUsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFFekUsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O21EQUF1RTtBQUVoRjtJQURDLHFCQUFROzs7O21EQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztrREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7Z0RBSVI7QUF4QkYsZ0RBeUJDO0FBR0QsNkJBQXFDLFNBQVEscUNBQWlCO0lBVzdELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFiTSxxQkFBcUI7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBQ00sbUJBQW1CO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUNNLG9CQUFvQjtRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUU5RSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDO1lBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDO1lBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O3dEQUE0RTtBQUVyRjtJQURDLHFCQUFROzs7O3dEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozt1REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7cURBSVI7QUE1QkYsMERBNkJDO0FBR0Qsa0NBQTBDLFNBQVEscUNBQWlCO0lBV2xFLFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFiTSxlQUFlO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDTSxtQkFBbUI7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNNLE9BQU87UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQU1TLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO0lBRW5GLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUM7WUFBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUM7WUFBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hGLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7NkRBQWlGO0FBRTFGO0lBREMscUJBQVE7Ozs7NkRBR1I7QUFFRDtJQURDLHFCQUFROzs7OzREQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OzswREFJUjtBQTVCRixvRUE2QkM7QUFHRCxnQ0FBd0MsU0FBUSxxQ0FBaUI7SUFjaEUsWUFBWSxNQUF5QixFQUFFLGFBQXFCO1FBQzNELEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQWhCTSxlQUFlO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFDTSxZQUFZO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFDTSxhQUFhO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNNLFVBQVU7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBTVMsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUM7SUFFakYsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQztZQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQztZQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEYsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7OzsyREFBK0U7QUFFeEY7SUFEQyxxQkFBUTs7OzsyREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7MERBR1I7QUFFRDtJQURDLHFCQUFROzs7O3dEQUlSO0FBL0JGLGdFQWdDQztBQUdELGlDQUF5QyxTQUFRLHFDQUFpQjtJQVFqRSxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBVk0sZUFBZTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ00sSUFBSSxLQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRSxZQUFZLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pHLGlCQUFpQixLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBTXhHLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO0lBRWxGLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUM7WUFBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEYsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUM7WUFBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RGLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7NERBQWdGO0FBRXpGO0lBREMscUJBQVE7Ozs7NERBR1I7QUFFRDtJQURDLHFCQUFROzs7OzJEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozt5REFJUjtBQXpCRixrRUEwQkM7QUFHRCw0QkFBb0MsU0FBUSxxQ0FBaUI7SUFRNUQsWUFBWSxNQUF5QixFQUFFLGFBQXFCO1FBQzNELEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQVZNLEtBQUs7UUFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ00sYUFBYTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztJQUU3RSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDO1lBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDO1lBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O3VEQUEyRTtBQUVwRjtJQURDLHFCQUFROzs7O3VEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztzREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7b0RBSVI7QUF6QkYsd0RBMEJDO0FBR0QsdUJBQStCLFNBQVEscUNBQWlCO0lBT3ZELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFUTSxNQUFNLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLGNBQWM7UUFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLHFCQUFxQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUNNLE1BQU0sS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFNbkUsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBRXhFLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO1lBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xFLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7a0RBQXNFO0FBRS9FO0lBREMscUJBQVE7Ozs7a0RBR1I7QUFFRDtJQURDLHFCQUFROzs7O2lEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OzsrQ0FJUjtBQXhCRiw4Q0F5QkM7QUFHRCwyQkFBbUMsU0FBUSxxQ0FBaUI7SUFvQjNELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFwQk0sT0FBTyxDQUFDLENBQVU7UUFDeEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQy9DLENBQUM7SUFDRixDQUFDO0lBR00sS0FBSyxDQUFDLENBQVU7UUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNGLENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUU1RSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDO1lBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO1lBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O3NEQUEwRTtBQUVuRjtJQURDLHFCQUFROzs7O3NEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztxREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7bURBSVI7QUFyQ0Ysc0RBc0NDO0FBR0Qsd0JBQWdDLFNBQVEscUNBQWlCO0lBU3hELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFYTSxJQUFJLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLGlCQUFpQjtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFDTSx5QkFBeUI7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBTVMsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFFekUsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztZQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O21EQUF1RTtBQUVoRjtJQURDLHFCQUFROzs7O21EQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztrREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7Z0RBSVI7QUExQkYsZ0RBMkJDO0FBR0QsOEJBQXNDLFNBQVEscUNBQWlCO0lBSzlELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFQTSxxQkFBcUI7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLDRCQUE0QixDQUFDLENBQUM7SUFDN0QsQ0FBQztJQU1TLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBRS9FLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUM7WUFBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUM7WUFBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hGLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7eURBQTZFO0FBRXRGO0lBREMscUJBQVE7Ozs7eURBR1I7QUFFRDtJQURDLHFCQUFROzs7O3dEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztzREFJUjtBQXRCRiw0REF1QkM7QUFHRCxzQ0FBOEMsU0FBUSxxQ0FBaUI7SUFPdEUsWUFBWSxNQUF5QixFQUFFLGFBQXFCO1FBQzNELEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQVRNLElBQUksS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEUsUUFBUSxLQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRSx1QkFBdUI7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLDhCQUE4QixDQUFDLENBQUM7SUFDL0QsQ0FBQztJQU1TLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO0lBRXZGLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsOEJBQThCLENBQUM7WUFBQyxRQUFRLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUYsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsNkJBQTZCLENBQUM7WUFBQyxRQUFRLENBQUMsNkJBQTZCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hHLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7aUVBQXFGO0FBRTlGO0lBREMscUJBQVE7Ozs7aUVBR1I7QUFFRDtJQURDLHFCQUFROzs7O2dFQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozs4REFJUjtBQXhCRiw0RUF5QkM7QUFHRCxvQ0FBNEMsU0FBUSxxQ0FBaUI7SUFvQnBFLFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFwQk0sa0JBQWtCLENBQUMsQ0FBVTtRQUNuQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQzFELENBQUM7SUFDRixDQUFDO0lBR00sR0FBRyxDQUFDLENBQVU7UUFDcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztJQUNGLENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztJQUVyRixTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDO1lBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDO1lBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RixJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OytEQUFtRjtBQUU1RjtJQURDLHFCQUFROzs7OytEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozs4REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7NERBSVI7QUFyQ0Ysd0VBc0NDO0FBR0QsK0JBQXVDLFNBQVEscUNBQWlCO0lBVy9ELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFiTSx3QkFBd0I7UUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLCtCQUErQixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUNNLHNCQUFzQjtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ00sNEJBQTRCO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUVoRixTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDO1lBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDO1lBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRixJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OzBEQUE4RTtBQUV2RjtJQURDLHFCQUFROzs7OzBEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozt5REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7dURBSVI7QUE1QkYsOERBNkJDO0FBR0QseUNBQWlELFNBQVEscUNBQWlCO0lBc0J6RSxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBdEJNLGtCQUFrQixDQUFDLENBQVU7UUFDbkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUseUJBQXlCLENBQUMsQ0FBQztRQUMxRCxDQUFDO0lBQ0YsQ0FBQztJQUNNLE1BQU0sS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckYsTUFBTSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUdyRixLQUFLLENBQUMsQ0FBVTtRQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDO0lBQ0YsQ0FBQztJQU1TLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0lBRTFGLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsaUNBQWlDLENBQUM7WUFBQyxRQUFRLENBQUMsaUNBQWlDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQUM7WUFBQyxRQUFRLENBQUMsZ0NBQWdDLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEcsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsaUNBQWlDLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RHLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7b0VBQXdGO0FBRWpHO0lBREMscUJBQVE7Ozs7b0VBR1I7QUFFRDtJQURDLHFCQUFROzs7O21FQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztpRUFJUjtBQXZDRixrRkF3Q0M7QUFHRCxtQ0FBMkMsU0FBUSxxQ0FBaUI7SUFNbkUsWUFBWSxNQUF5QixFQUFFLGFBQXFCO1FBQzNELEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQVJNLEVBQUUsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0UsS0FBSyxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixjQUFjLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLEtBQUssS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFNaEYsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7SUFFcEYsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQztZQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQztZQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUYsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7Ozs4REFBa0Y7QUFFM0Y7SUFEQyxxQkFBUTs7Ozs4REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7NkRBR1I7QUFFRDtJQURDLHFCQUFROzs7OzJEQUlSO0FBdkJGLHNFQXdCQztBQUdELGtDQUEwQyxTQUFRLHFDQUFpQjtJQUtsRSxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBUE0sYUFBYTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBTVMsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7SUFFbkYsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQztZQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQztZQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEYsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7Ozs2REFBaUY7QUFFMUY7SUFEQyxxQkFBUTs7Ozs2REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7NERBR1I7QUFFRDtJQURDLHFCQUFROzs7OzBEQUlSO0FBdEJGLG9FQXVCQztBQUdELG1DQUEyQyxTQUFRLHFDQUFpQjtJQVFuRSxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBVk0sTUFBTSxLQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxNQUFNLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLGFBQWE7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNNLE1BQU0sS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFNbkUsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7SUFFcEYsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQztZQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQztZQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQywyQkFBMkIsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUYsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7Ozs4REFBa0Y7QUFFM0Y7SUFEQyxxQkFBUTs7Ozs4REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7NkRBR1I7QUFFRDtJQURDLHFCQUFROzs7OzJEQUlSO0FBekJGLHNFQTBCQztBQUdELGlDQUF5QyxTQUFRLHFDQUFpQjtJQVFqRSxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBVk0sSUFBSSxLQUFtQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRSxNQUFNLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLGFBQWE7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNNLE1BQU0sS0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFNbkUsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7SUFFbEYsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQztZQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQztZQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEYsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7Ozs0REFBZ0Y7QUFFekY7SUFEQyxxQkFBUTs7Ozs0REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7MkRBR1I7QUFFRDtJQURDLHFCQUFROzs7O3lEQUlSO0FBekJGLGtFQTBCQztBQUdELDBCQUFrQyxTQUFRLHFDQUFpQjtJQW9CMUQsWUFBWSxNQUF5QixFQUFFLGFBQXFCO1FBQzNELEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQXBCTSxhQUFhLENBQUMsQ0FBVTtRQUM5QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3JELENBQUM7SUFDRixDQUFDO0lBR00sS0FBSyxDQUFDLENBQVU7UUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNGLENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUUzRSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO1lBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O3FEQUF5RTtBQUVsRjtJQURDLHFCQUFROzs7O3FEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztvREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7a0RBSVI7QUFyQ0Ysb0RBc0NDO0FBR0QsMEJBQWtDLFNBQVEscUNBQWlCO0lBUTFELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFWTSxLQUFLO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNNLGFBQWE7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBTVMsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFFM0UsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztZQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQztZQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEUsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7OztxREFBeUU7QUFFbEY7SUFEQyxxQkFBUTs7OztxREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7b0RBR1I7QUFFRDtJQURDLHFCQUFROzs7O2tEQUlSO0FBekJGLG9EQTBCQztBQUdELDBCQUFrQyxTQUFRLHFDQUFpQjtJQW9CMUQsWUFBWSxNQUF5QixFQUFFLGFBQXFCO1FBQzNELEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQXBCTSxhQUFhLENBQUMsQ0FBVTtRQUM5QixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3JELENBQUM7SUFDRixDQUFDO0lBR00sS0FBSyxDQUFDLENBQVU7UUFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsQ0FBQztJQUNGLENBQUM7SUFNUyxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUUzRSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDO1lBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O3FEQUF5RTtBQUVsRjtJQURDLHFCQUFROzs7O3FEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztvREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7a0RBSVI7QUFyQ0Ysb0RBc0NDO0FBR0QsMEJBQWtDLFNBQVEscUNBQWlCO0lBVzFELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFiTSxjQUFjO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDTSx5QkFBeUI7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ00scUJBQXFCO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLDRCQUE0QixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQU1TLElBQVcsU0FBUyxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBRTNFLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUM7WUFBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFzQjtRQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUM7WUFBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVNLE1BQU0sQ0FBUyxPQUE0QjtRQUNqRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUM7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7cURBQXlFO0FBRWxGO0lBREMscUJBQVE7Ozs7cURBR1I7QUFFRDtJQURDLHFCQUFROzs7O29EQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztrREFJUjtBQTVCRixvREE2QkM7QUFHRCxzQ0FBOEMsU0FBUSxxQ0FBaUI7SUFJdEUsWUFBWSxNQUF5QixFQUFFLGFBQXFCO1FBQzNELEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQU5NLEdBQUcsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0UsSUFBSSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQU05RSxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztJQUV2RixTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLDhCQUE4QixDQUFDO1lBQUMsUUFBUSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLDZCQUE2QixDQUFDO1lBQUMsUUFBUSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRyxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O2lFQUFxRjtBQUU5RjtJQURDLHFCQUFROzs7O2lFQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OztnRUFHUjtBQUVEO0lBREMscUJBQVE7Ozs7OERBSVI7QUFyQkYsNEVBc0JDO0FBR0Qsa0NBQTBDLFNBQVEscUNBQWlCO0lBS2xFLFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFQTSxLQUFLLEtBQW1CLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLEtBQUssS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsSUFBSSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQU05RSxJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztJQUVuRixTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDO1lBQUMsUUFBUSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BGLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDO1lBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RixJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7OzZEQUFpRjtBQUUxRjtJQURDLHFCQUFROzs7OzZEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozs0REFHUjtBQUVEO0lBREMscUJBQVE7Ozs7MERBSVI7QUF0QkYsb0VBdUJDO0FBR0QsMkJBQW1DLFNBQVEscUNBQWlCO0lBUTNELFlBQVksTUFBeUIsRUFBRSxhQUFxQjtRQUMzRCxLQUFLLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRTlCLENBQUM7SUFWTSxLQUFLO1FBQ1gsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUNNLGFBQWE7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBTVMsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFFNUUsU0FBUyxDQUFDLFFBQXNCO1FBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztZQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQztZQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRU0sTUFBTSxDQUFTLE9BQTRCO1FBQ2pELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSTtZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDRDtBQWRVO0lBQVQscUJBQVE7OztzREFBMEU7QUFFbkY7SUFEQyxxQkFBUTs7OztzREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7cURBR1I7QUFFRDtJQURDLHFCQUFROzs7O21EQUlSO0FBekJGLHNEQTBCQztBQUdELHNCQUE4QixTQUFRLHFDQUFpQjtJQUt0RCxZQUFZLE1BQXlCLEVBQUUsYUFBcUI7UUFDM0QsS0FBSyxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBUE0sU0FBUyxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRixJQUFJLEtBQStCLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLE1BQU0sS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFNbEYsSUFBVyxTQUFTLEtBQWEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRXZFLFNBQVMsQ0FBQyxRQUFzQjtRQUN0QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRU0sUUFBUSxDQUFDLFFBQXNCO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7WUFBQyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUk7WUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Q7QUFkVTtJQUFULHFCQUFROzs7aURBQXFFO0FBRTlFO0lBREMscUJBQVE7Ozs7aURBR1I7QUFFRDtJQURDLHFCQUFROzs7O2dEQUdSO0FBRUQ7SUFEQyxxQkFBUTs7Ozs4Q0FJUjtBQXRCRiw0Q0F1QkM7QUFHRCx5QkFBaUMsU0FBUSxxQ0FBaUI7SUFJekQsWUFBWSxNQUF5QixFQUFFLGFBQXFCO1FBQzNELEtBQUssQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFOUIsQ0FBQztJQU5NLFFBQVEsS0FBK0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekYsUUFBUSxLQUErQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQU10RixJQUFXLFNBQVMsS0FBYSxNQUFNLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUUxRSxTQUFTLENBQUMsUUFBc0I7UUFDdEMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1lBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxRQUFRLENBQUMsUUFBc0I7UUFDckMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDO1lBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSxNQUFNLENBQVMsT0FBNEI7UUFDakQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RSxJQUFJO1lBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBZFU7SUFBVCxxQkFBUTs7O29EQUF3RTtBQUVqRjtJQURDLHFCQUFROzs7O29EQUdSO0FBRUQ7SUFEQyxxQkFBUTs7OzttREFHUjtBQUVEO0lBREMscUJBQVE7Ozs7aURBSVI7QUFyQkYsa0RBc0JDO0FBR0QsZ0JBQXdCLFNBQVEsZUFBTTtJQTZUckMsWUFBWSxLQUFrQjtRQUM3QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksdUNBQWtCLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBaEJELElBQVcsVUFBVTtRQUNwQixNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztJQUM5QixDQUFDO0lBR0QsSUFBVyxlQUFlLEtBQWEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFHMUQsSUFBVyxTQUFTLEtBQWUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBR2pFLElBQVcsYUFBYSxLQUFhLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQU9qRSxzQkFBc0I7UUFDNUIsSUFBSSxTQUFTLEdBQWtDLElBQUksNkJBQTZCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBQ3JFLElBQUksR0FBVyxDQUFDO1FBQ2hCLElBQUksQ0FBQztZQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ2pCLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsRUFBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN6b0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1AsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssYUFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENB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R0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMs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QUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUs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SUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakMsQ0FBQztnQkFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDakIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdB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cEIsQ0FBQztnQkFDRixDQUFDO2dCQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzNCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDbkIsQ0FBQztnQkFDRixDQUFDO2dCQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzVCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQztnQkFDRixDQUFDO2dCQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7b0JBQzVCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDcEIsQ0FBQztnQkFDRixDQUFDO2dCQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQzdCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDckIsQ0FBQztnQkFDRixDQUFDO2dCQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzFCLENBQUM7d0JBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDbEIsQ0FBQztnQkFDRixDQUFDO2dCQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFD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RSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsR0FBRyxFQUFF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LFVBQVUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZ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akMsQ0FBQztnQkFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDakIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUIsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixHQUFH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QU0sQ0FBQyxDQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsRUFBRSxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZFLEtBQUssQ0FBQztvQkFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDakMsQ0FBQzt3QkFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzt3QkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzFCLENBQUM7b0JBQ0QsS0FBSyxDQUFDO2dCQUVQLEtBQUssQ0FBQztvQkFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDakMsQ0FBQzt3QkFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzt3QkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQzlCLENBQUM7b0JBQ0QsS0FBSyxDQUFDO2dCQUVQLEtBQUssQ0FBQztvQkFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDakMsQ0FBQzt3QkFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzt3QkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzNCLENBQUM7b0JBQ0QsS0FBSyxDQUFDO2dCQUVQLEtBQUssQ0FBQztvQkFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDakMsQ0FBQzt3QkFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQzt3QkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzNCLENBQUM7b0JBQ0QsS0FBSyxDQUFDO2dCQUVQLEtBQUss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LEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQzNFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDM0UsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUMzRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQzNFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDM0UsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUMzRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQzNFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDM0UsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUMzRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQzNFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVM7SUFDM0UsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUztJQUMzRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTO0lBQzNFLFNBQVMsRUFBRSxT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MUUsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsNEVBQTRFO0lBQzVFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx1RUFBdUU7SUFDdkUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx1RUFBdUU7SUFDdkUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwyRUFBMkU7SUFDM0UsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSwwRUFBMEU7SUFDMUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsMkVBQTJFO0lBQzNFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLHVFQUF1RTtJQUN2RSx3RUFBd0U7SUFDeEUsd0VBQXdFO0lBQ3hFLDRFQUE0RTtJQUM1RSx1RUFBdUU7SUFDdkUsd0VBQXdFO0lBQ3hFLHlFQUF5RTtJQUN6RSx3RUFBd0U7SUFDeEUsNEVBQTRFO0lBQzVFLDJFQUEyRTtJQUMzRSx3RUFBd0U7SUFDeEUseUVBQXlFO0lBQ3pFLDJFQUEyRTtJQUMzRSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLDBFQUEwRTtJQUMxRSwwRUFBMEU7SUFDMUUsdUVBQXVFO0lBQ3ZFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSwyRUFBMkU7SUFDM0UsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMEVBQTBFO0lBQzFFLHdFQUF3RTtJQUN4RSx3RUFBd0U7SUFDeEUsMkVBQTJFO0lBQzNFLHdFQUF3RTtJQUN4RSx5RUFBeUU7SUFDekUsMEVBQTBFO0lBQzFFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUsd0VBQXdFO0lBQ3hFLHdFQUF3RTtJQUN4RSw0RUFBNEU7SUFDNUUsMkVBQTJFO0lBQzNFLDBFQUEwRTtJQUMxRSx5RUFBeUU7SUFDekUseUVBQXlFO0lBQ3pFLHVFQUF1RTtJQUN2RSwyRUFBMkU7SUFDM0UsMEVBQTBFO0lBQzFFLHVFQUF1RTtJQUN2RSwyRUFBMkU7SUFDM0UsMEVB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b0NBQ1EsbUJBQW1COzhDQXVCekM7QUFFRDtJQURDLHlCQUFXLENBQUMsQ0FBQyxDQUFDOzs7b0NBQ1Msb0JBQW9COytDQTBFM0M7QUFFRDtJQURDLHlCQUFXLENBQUMsQ0FBQyxDQUFDOzs7b0NBQ1Msb0JBQW9COytDQWtDM0M7QUFFRDtJQURDLHlCQUFXLENBQUMsQ0FBQyxDQUFDOzs7b0NBQ2MseUJBQXlCO29EQWtDckQ7QUFFRDtJQURDLHlCQUFXLENBQUMsQ0FBQyxDQUFDOzs7b0NBQ2Esd0JBQXdCO21EQWtDbkQ7QUFFRDtJQURDLHlCQUFXLENBQUMsQ0FBQyxDQUFDOzs7b0NBQ1UscUJBQXFCO2dEQWtDN0M7QUFFRDtJQURDLHlCQUFXLENBQUMsQ0FBQyxDQUFDOzs7b0NBQ00saUJBQWlCOzRDQWdJckM7QUFFRDtJQURDLHlCQUFXLENBQUMsQ0FBQyxDQUFDOzs7b0NBQ1Msb0JBQW9COytDQTBDM0M7QUFFRDtJQURDLHlCQUFXLENBQUMsQ0FBQyxDQUFDOzs7b0NBQ08sa0JBQWtCOzZDQTBDdkM7QUFFRDtJQURDLHlCQUFXLENBQUMsQ0FBQyxDQUFDOzs7b0NBQ1EsbUJBQW1COzhDQTJCekM7QUFFRDtJQURDLHlCQUFXLENBQUMsQ0FBQyxDQUFDOzs7b0NBQ1EsbUJBQW1COzhDQXlCekM7QUFFRDtJQURDLHlCQUFXLENBQUMsQ0FBQyxDQUFDOzs7b0NBQ1UscUJBQXFCO2dEQXlJN0M7QUFFRDtJQURDLHlCQUFXLENBQUMsQ0FBQyxDQUFDOzs7b0NBQ1Msb0JBQW9COytDQXlCM0M7QUFFRDtJQURDLHlCQUFXLENBQUMsQ0FBQyxDQUFDOzs7b0NBQ1UscUJBQXFCO2dEQTJCN0M7QUFFRDtJQURDLHlCQUFXLENBQUMsQ0FBQyxDQUFDOzs7b0NBQ1EsbUJBQW1COzhDQXlCekM7QUFFRDtJQURDLHlCQUFXLENBQUMsQ0FBQyxDQUFDOzs7b0NBQ1Msb0JBQW9COytDQXlCM0M7QUFFRDtJQURDLHlCQUFXLENBQUMsQ0FBQyxDQUFDOzs7b0NBQ00saUJBQWlCOzRDQWtEckM7QUFFRDtJQURDLHlCQUFX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