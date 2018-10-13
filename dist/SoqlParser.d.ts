import { Query } from './models/SoqlQuery.model';
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
 * @description For a given soql query, parse the query and return a parsed SoqlQuery object
 * @param {soql} String SOQL query
 * @param {SoqlQueryConfig} SoqlQueryConfig optional configuration
 * @returns SoqlQuery
 */
export declare function parseQuery(soql: string, config?: Partial<SoqlQueryConfig>): Query;
