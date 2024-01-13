import {
  getParams,
  hasAlias,
  isComposeField,
  isComposeFieldFunction,
  isComposeFieldRelationship,
  isComposeFieldSubquery,
  isComposeFieldTypeof,
  isFieldSubquery,
  isGroupByField,
  isGroupByFn,
  isHavingClauseWithRightCondition,
  isNegationCondition,
  isNestedParamAggregateFunction,
  isOrderByField,
  isOrderByFn,
  isString,
  isSubquery,
  isValueCondition,
  isValueFunctionCondition,
  isValueQueryCondition,
  isValueWithDateLiteralCondition,
  isValueWithDateNLiteralCondition,
  isWhereClauseWithRightCondition,
  isWhereOrHavingClauseWithRightCondition,
} from '../utils';
import * as SoqlModels from './api-models';

// re-exported utils available as public API
export {
  hasAlias,
  isFieldSubquery,
  isGroupByField,
  isGroupByFn,
  isHavingClauseWithRightCondition,
  isNegationCondition,
  isOrderByField,
  isOrderByFn,
  isString,
  isSubquery,
  isValueCondition,
  isValueFunctionCondition,
  isValueQueryCondition,
  isValueWithDateLiteralCondition,
  isValueWithDateNLiteralCondition,
  isWhereClauseWithRightCondition,
  isWhereOrHavingClauseWithRightCondition,
};

export type ComposeFieldInput = ComposeField | ComposeFieldFunction | ComposeFieldRelationship | ComposeFieldSubquery | ComposeFieldTypeof;

export interface ComposeField {
  field: string;
  objectPrefix?: string;
}

export interface ComposeFieldFunction {
  // @Deprecated - will still be used if populated, but functionName is checked first and preferred
  fn?: string;
  functionName: string;
  parameters?: string | SoqlModels.FieldFunctionExpression | (string | SoqlModels.FieldFunctionExpression)[];
  alias?: string;
}

export interface ComposeFieldRelationship {
  field: string;
  relationships: string[];
  objectPrefix?: string;
}

export interface ComposeFieldSubquery {
  subquery?: SoqlModels.Subquery;
}

export interface ComposeFieldTypeof {
  field: string;
  conditions: SoqlModels.FieldTypeOfCondition[];
}

/**
 * @deprecated - use `getField()` instead
 * Pass any a basic string or populate required properties on the ComposeField object
 * and a constructed field will be returned
 * @param input string | ComposeFieldInput
 * @returns FieldType
 */
export function getComposedField(input: string | ComposeFieldInput): SoqlModels.FieldType {
  return getField(input);
}
/**
 * Pass any a basic string or populate required properties on the ComposeField object
 * and a constructed field will be returned
 * @param input string | ComposeFieldInput
 * @returns FieldType
 */
export function getField(input: string | ComposeFieldInput): SoqlModels.FieldType {
  if (typeof input === 'string') {
    return {
      type: 'Field',
      field: input,
    };
  } else if (isComposeFieldFunction(input)) {
    let parameters: string[] | SoqlModels.FieldFunctionExpression[] = [];
    if (input.parameters) {
      parameters = (Array.isArray(input.parameters) ? input.parameters : [input.parameters]) as
        | string[]
        | SoqlModels.FieldFunctionExpression[];
    }
    return {
      type: 'FieldFunctionExpression',
      functionName: (input.functionName || input.fn)!,
      parameters,
      alias: input.alias,
    };
  } else if (isComposeFieldRelationship(input)) {
    return {
      type: 'FieldRelationship',
      field: input.field,
      relationships: input.relationships,
      objectPrefix: input.objectPrefix,
    };
  } else if (isComposeFieldSubquery(input)) {
    return {
      type: 'FieldSubquery',
      subquery: input.subquery!,
    };
  } else if (isComposeFieldTypeof(input)) {
    return {
      type: 'FieldTypeof',
      field: input.field,
      conditions: input.conditions,
    };
  } else if (isComposeField(input)) {
    return {
      type: 'Field',
      field: input.field,
      objectPrefix: input.objectPrefix,
    };
  } else {
    throw new TypeError('The input object provided did not match any valid field types');
  }
}

/**
 * Gets flattened fields - this will turn a Query into a list of fields that can be used to parse results from a returned dataset from SFDC
 * Subqueries only include the child SObject relationship name
 * @param query
 * @param [isAggregateResult] pass in true to force expr0...1 for all non-aliased functions even if field is not explicitly an aggregate expression
 * @returns flattened fields
 */
export function getFlattenedFields(
  query: SoqlModels.Query | SoqlModels.Subquery | SoqlModels.FieldSubquery,
  isAggregateResult?: boolean,
): string[] {
  if (!query) {
    return [];
  }
  query = isFieldSubquery(query) ? query.subquery : query;
  const fields = query.fields;
  if (!fields) {
    return [];
  }
  // if a relationship field is used in a group by, then Salesforce removes the relationship portion of the field in the returned records
  let groupByFields: { [field: string]: string } = {};
  if (!!query.groupBy) {
    groupByFields = (Array.isArray(query.groupBy) ? query.groupBy : [query.groupBy]).reduce(
      (output: { [field: string]: string }, clause) => {
        if (isGroupByField(clause)) {
          output[clause.field.toLocaleLowerCase()] = clause.field;
        }
        return output;
      },
      {},
    );
  }
  let currUnAliasedAggExp = -1;
  let sObject = (isSubquery(query) ? query.relationshipName : query.sObject || '').toLowerCase();
  let sObjectAlias = (query.sObjectAlias || '').toLowerCase();

  const parsedFields = fields
    .flatMap(field => {
      switch (field.type) {
        case 'Field': {
          return field.alias || field.field;
        }
        case 'FieldFunctionExpression': {
          let params = getParams(field);
          // If the parameter has dot notation and the first entry is the object name/alias, remove it
          params = params.map(param => {
            if (param.includes('.')) {
              let tempParams = param.split('.');
              const firstParam = tempParams[0].toLowerCase();
              if (firstParam === sObjectAlias || firstParam === sObject) {
                tempParams = tempParams.slice(1);
              }
              return tempParams.join('.');
            }
            return param;
          });

          if (field.alias && (field.isAggregateFn || isAggregateResult)) {
            return field.alias;
          }

          if (field.alias) {
            const firstParam = params[0];
            // Include the full path and replace the field with the alias
            if (firstParam.includes('.')) {
              params = firstParam.split('.').slice(0, -1);
              params.push(field.alias);
              return params.join('.');
            }
            return field.alias;
          }
          // Non-aliased aggregate fields use computed name expr0, expr1, etc..
          if (field.isAggregateFn || isNestedParamAggregateFunction(field) || isAggregateResult) {
            currUnAliasedAggExp++;
            return `expr${currUnAliasedAggExp}`;
          }
          if (params.length > 0) {
            return params.join('.');
          }
          return field.functionName;
        }
        case 'FieldRelationship': {
          const firstRelationship = field.relationships[0].toLowerCase();
          if (hasAlias(field)) {
            return field.alias;
          }
          // If relationship field is used in groupby, then return field instead of full path
          if (field.rawValue && groupByFields[field.rawValue.toLocaleLowerCase()]) {
            return field.field;
          }
          // If first object is the same object queried, remove the object
          if (firstRelationship === sObjectAlias || firstRelationship === sObject) {
            return field.relationships.concat([field.field]).slice(1).join('.');
          }
          return field.relationships.concat([field.field]).join('.');
        }
        case 'FieldSubquery': {
          return field.subquery.relationshipName;
        }
        case 'FieldTypeof': {
          // keep track of fields to avoid adding duplicates
          const priorFields = new Set<string>();
          const fields: string[] = [];
          // Add all unique fields across all conditions
          field.conditions.forEach(condition => {
            condition.fieldList.forEach(currField => {
              if (!priorFields.has(currField)) {
                priorFields.add(currField);
                fields.push(`${field.field}.${currField}`);
              }
            });
          });
          return fields;
        }
        default:
          break;
      }
    })
    .filter(field => isString(field)) as string[];

  return parsedFields;
}
