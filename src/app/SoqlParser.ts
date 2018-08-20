/*
 * Copyright (c) Austin Turner
 * The software in this package is published under the terms of the CPAL v1.0
 * license, a copy of which has been included with this distribution in the
 * LICENSE.txt file.
 */
import { ANTLRInputStream, CommonTokenStream, Token, ParserRuleContext } from 'antlr4ts';
import {
  SOQLParser,
  From_clauseContext,
  Select_clauseContext,
  Soql_queryContext,
  Where_clauseContext,
} from '../generated/SOQLParser';
import { SOQLLexer } from '../generated//SOQLLexer';
import { ParseTreeWalker } from 'antlr4ts/tree';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Listener } from './SoqlListener';
import { SoqlQuery } from './models/SoqlQuery.model';
import { SyntaxErrorListener } from './ErrorListener';
import * as _ from 'lodash';

export interface SoqlQueryConfig {
  /**
   * If true, continue to parse even if there appears to be a syntax error.
   * Other exceptions may be thrown when building the SoqlQuery object
   */
  continueIfErrors?: boolean; // default=false
  logging: boolean; // default=false
  includeSubqueryAsField: boolean; // default=true
}

function configureDefaults(config: Partial<SoqlQueryConfig> = {}) {
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
export function getSoqlQueryContext(soql: string, config: Partial<SoqlQueryConfig> = {}): SOQLParser {
  let inputStream = new ANTLRInputStream(soql);
  let lexer = new SOQLLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  const parser = new SOQLParser(tokenStream);

  if (!config.continueIfErrors) {
    parser.removeErrorListeners();
    parser.addErrorListener(new SyntaxErrorListener());
  }

  return parser;
}

/**
 * @description For a given soql query, parse the query and return a parsed SoqlQuery object
 * @param {soql} String SOQL query
 * @param {SoqlQueryConfig} SoqlQueryConfig optional configuration
 * @returns SoqlQuery
 */
export function parseQuery(soql: string, config: Partial<SoqlQueryConfig> = {}): SoqlQuery {
  configureDefaults(config);
  const soqlQueryContext: Soql_queryContext = getSoqlQueryContext(soql, config).soql_query();
  const listener = new Listener(config);

  // Walk the AST tree and trigger listeners
  ParseTreeWalker.DEFAULT.walk(listener as any, soqlQueryContext);

  return listener.soqlQuery;
}
