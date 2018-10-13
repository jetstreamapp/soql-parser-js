"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) Austin Turner
 * The software in this package is published under the terms of MIT
 * license, a copy of which has been included with this distribution in the
 * LICENSE.txt file.
 */
const antlr4ts_1 = require("antlr4ts");
const tree_1 = require("antlr4ts/tree");
const _ = require("lodash");
const SOQLLexer_1 = require("./generated/SOQLLexer");
const SOQLParser_1 = require("./generated/SOQLParser");
const ErrorListener_1 = require("./ErrorListener");
const SoqlListener_1 = require("./SoqlListener");
function configureDefaults(config = {}) {
    config.continueIfErrors = _.isBoolean(config.continueIfErrors) ? config.continueIfErrors : false;
    config.logging = _.isBoolean(config.logging) ? config.logging : false;
    config.includeSubqueryAsField = _.isBoolean(config.includeSubqueryAsField) ? config.includeSubqueryAsField : true;
}
/**
 * @description Returns the ANTLR SOQL parser
 * @param {soql} String SOQL query
 * @param {SoqlQueryConfig} SoqlQueryConfig optional configuration
 * @returns SOQLParser
 */
function getSoqlQueryContext(soql, config = {}) {
    let inputStream = new antlr4ts_1.ANTLRInputStream(soql);
    let lexer = new SOQLLexer_1.SOQLLexer(inputStream);
    let tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    const parser = new SOQLParser_1.SOQLParser(tokenStream);
    if (!config.continueIfErrors) {
        parser.removeErrorListeners();
        parser.addErrorListener(new ErrorListener_1.SyntaxErrorListener());
    }
    return parser;
}
/**
 * @description For a given soql query, parse the query and return a parsed SoqlQuery object
 * @param {soql} String SOQL query
 * @param {SoqlQueryConfig} SoqlQueryConfig optional configuration
 * @returns SoqlQuery
 */
function parseQuery(soql, config = {}) {
    configureDefaults(config);
    if (config.logging) {
        console.time('parser');
        console.log('Parsing Query:', soql);
    }
    const soqlQueryContext = getSoqlQueryContext(soql, config).soql_query();
    const listener = new SoqlListener_1.Listener(config);
    // Walk the AST tree and trigger listeners
    tree_1.ParseTreeWalker.DEFAULT.walk(listener, soqlQueryContext);
    if (config.logging) {
        console.timeEnd('parser');
    }
    return listener.soqlQuery;
}
exports.parseQuery = parseQuery;
