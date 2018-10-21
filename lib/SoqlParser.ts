import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree';
import * as utils from './utils';
import { SyntaxErrorListener } from './ErrorListener';
import { SOQLLexer } from './generated/SOQLLexer';
import { SOQLParser, Soql_queryContext } from './generated/SOQLParser';
import { Query } from './models/SoqlQuery.model';
import { Listener, ListenerQuick } from './SoqlListener';

export interface ConfigBase {
  logging?: boolean; // default=false
}

export interface SoqlQueryConfig extends ConfigBase {
  continueIfErrors?: boolean; // default=false
}

function configureBaseDefaults(config: Partial<ConfigBase> = {}) {
  config.logging = utils.isBoolean(config.logging) ? config.logging : false;
}

function configureDefaults(config: Partial<SoqlQueryConfig> = {}) {
  config.continueIfErrors = utils.isBoolean(config.continueIfErrors) ? config.continueIfErrors : false;
  config.logging = utils.isBoolean(config.logging) ? config.logging : false;
}

/**
 * @description Returns the ANTLR SOQL parser
 * @param {soql} String SOQL query
 * @param {SoqlQueryConfig} SoqlQueryConfig optional configuration
 * @returns SOQLParser
 */
function getSoqlQueryContext(soql: string, config: Partial<SoqlQueryConfig> = {}): SOQLParser {
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
export function parseQuery(soql: string, config: Partial<SoqlQueryConfig> = {}): Query {
  configureDefaults(config);
  if (config.logging) {
    console.time('parser');
    console.log('Parsing Query:', soql);
  }
  const soqlQueryContext: Soql_queryContext = getSoqlQueryContext(soql, config).soql_query();
  const listener = new Listener(config);

  // Walk the AST tree and trigger listeners
  ParseTreeWalker.DEFAULT.walk(listener as any, soqlQueryContext);

  if (config.logging) {
    console.timeEnd('parser');
  }
  return listener.soqlQuery;
}

/**
 * @description Parse query to determine if the query is valid.
 * @param {soql} String SOQL query
 * @param {logging} boolean optional Prints out logging information
 * @returns boolean
 */
export function isQueryValid(soql: string, config: ConfigBase = {}): boolean {
  configureBaseDefaults(config);
  let isValid = true;
  if (config.logging) {
    console.time('isQueryValid');
    console.log('Parsing Query:', soql);
  }

  try {
    getSoqlQueryContext(soql).soql_query();
  } catch (ex) {
    isValid = false;
  } finally {
    if (config.logging) {
      console.log('isValidQuery', isValid);
      console.timeEnd('isQueryValid');
    }
  }

  return isValid;
}
