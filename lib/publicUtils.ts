import { FieldType, FieldTypeOfCondition, Subquery, FieldFunctionExpression, Query } from './models/SoqlQuery.model';
import {
  isString,
  isSubquery,
  getParams,
  isComposeField,
  isComposeFieldFunction,
  isComposeFieldRelationship,
  isComposeFieldSubquery,
  isComposeFieldTypeof,
} from './utils';

export interface ComposeField {
  field: string;
  objectPrefix?: string;
}

export interface ComposeFieldFunction {
  fn: string;
  parameters?: string | string[] | FieldFunctionExpression | FieldFunctionExpression[];
  alias?: string;
}

export interface ComposeFieldRelationship {
  field: string;
  relationships: string[];
  objectPrefix?: string;
}

export interface ComposeFieldSubquery {
  subquery?: Subquery;
}

export interface ComposeFieldTypeof {
  field: string;
  conditions: FieldTypeOfCondition[];
}

export type ComposeFieldInput =
  | ComposeField
  | ComposeFieldFunction
  | ComposeFieldRelationship
  | ComposeFieldSubquery
  | ComposeFieldTypeof;

export { isSubquery };

/**
 * Pass any a basic string or populate required properties on the ComposeField object
 * and a constructed field will be returned
 * @param input string | ComposeFieldInput
 * @returns FieldType
 */
export function getComposedField(input: string | ComposeFieldInput): FieldType {
  if (typeof input === 'string') {
    return {
      type: 'Field',
      field: input,
    };
  } else if (isComposeFieldFunction(input)) {
    let parameters: string[] | FieldFunctionExpression[];
    if (input.parameters) {
      parameters = (Array.isArray(input.parameters) ? input.parameters : [input.parameters]) as
        | string[]
        | FieldFunctionExpression[];
    }
    return {
      type: 'FieldFunctionExpression',
      fn: input.fn,
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
      subquery: input.subquery,
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
export function getFlattenedFields(query: Query, isAggregateResult?: boolean): string[] {
  const fields = query.fields;
  let currUnAliasedAggExp = -1;

  let sObject = (query.sObject || '').toLowerCase();
  let sObjectAlias = (query.sObjectAlias || '').toLowerCase();

  const parsedFields = fields
    .map(field => {
      switch (field.type) {
        case 'Field': {
          return field.field;
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
          if (field.isAggregateFn || isAggregateResult) {
            currUnAliasedAggExp++;
            return `expr${currUnAliasedAggExp}`;
          }
          if (params.length > 0) {
            return params.join('.');
          }
          return field.fn;
        }
        case 'FieldRelationship': {
          const firstRelationship = field.relationships[0].toLowerCase();
          if (firstRelationship === sObjectAlias || firstRelationship === sObject) {
            return field.relationships
              .concat([field.field])
              .slice(1)
              .join('.');
          }
          return field.relationships.concat([field.field]).join('.');
        }
        case 'FieldSubquery': {
          return field.from || field.subquery.relationshipName;
        }
        // TODO: see if support can be added for this, otherwise ignore
        // case 'FieldTypeof': {
        //   return this.parseTypeOfField(field);
        // }
        default:
          break;
      }
    })
    .filter(field => isString(field));

  return parsedFields;
}
