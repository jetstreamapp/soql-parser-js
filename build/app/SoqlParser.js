"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) Austin Turner
 * The software in this package is published under the terms of the CPAL v1.0
 * license, a copy of which has been included with this distribution in the
 * LICENSE.txt file.
 */
const antlr4ts_1 = require("antlr4ts");
const SOQLParser_1 = require("../generated/SOQLParser");
const SOQLLexer_1 = require("../generated//SOQLLexer");
const tree_1 = require("antlr4ts/tree");
const SoqlListener_1 = require("./SoqlListener");
const ErrorListener_1 = require("./ErrorListener");
const _ = require("lodash");
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
exports.getSoqlQueryContext = getSoqlQueryContext;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29xbFBhcnNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcHAvU29xbFBhcnNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7OztHQUtHO0FBQ0gsdUNBQXlGO0FBQ3pGLHdEQU1pQztBQUNqQyx1REFBb0Q7QUFDcEQsd0NBQWdEO0FBR2hELGlEQUEwQztBQUUxQyxtREFBc0Q7QUFDdEQsNEJBQTRCO0FBWTVCLDJCQUEyQixTQUFtQyxFQUFFO0lBQzlELE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFDakcsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN0RSxNQUFNLENBQUMsc0JBQXNCLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsR0FBRyxNQUFNLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO0FBQ3BILENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILDZCQUFvQyxJQUFZLEVBQUUsU0FBbUMsRUFBRTtJQUNyRixJQUFJLFdBQVcsR0FBRyxJQUFJLDJCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLElBQUksS0FBSyxHQUFHLElBQUkscUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2QyxJQUFJLFdBQVcsR0FBRyxJQUFJLDRCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLE1BQU0sTUFBTSxHQUFHLElBQUksdUJBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUUzQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDOUIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksbUNBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFaRCxrREFZQztBQUVEOzs7OztHQUtHO0FBQ0gsb0JBQTJCLElBQVksRUFBRSxTQUFtQyxFQUFFO0lBQzVFLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsTUFBTSxnQkFBZ0IsR0FBc0IsbUJBQW1CLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzNGLE1BQU0sUUFBUSxHQUFHLElBQUksdUJBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV0QywwQ0FBMEM7SUFDMUMsc0JBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBRWhFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUNELE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0FBQzVCLENBQUM7QUFoQkQsZ0NBZ0JDIn0=