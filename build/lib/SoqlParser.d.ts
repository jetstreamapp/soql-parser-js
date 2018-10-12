import { SOQLParser } from '../generated/SOQLParser';
import { SoqlQuery } from './models/SoqlQuery.model';
export interface SoqlQueryConfig {
    /**
     * If true, continue to parse even if there appears to be a syntax error.
     * Other exceptions may be thrown when building the SoqlQuery object
     */
    continueIfErrors?: boolean;
    logging: boolean;
    includeSubqueryAsField: boolean;
}
/**
 * @description Returns the ANTLR SOQL parser
 * @param {soql} String SOQL query
 * @param {SoqlQueryConfig} SoqlQueryConfig optional configuration
 * @returns SOQLParser
 */
export declare function getSoqlQueryContext(soql: string, config?: Partial<SoqlQueryConfig>): SOQLParser;
/**
 * @description For a given soql query, parse the query and return a parsed SoqlQuery object
 * @param {soql} String SOQL query
 * @param {SoqlQueryConfig} SoqlQueryConfig optional configuration
 * @returns SoqlQuery
 */
export declare function parseQuery(soql: string, config?: Partial<SoqlQueryConfig>): SoqlQuery;
