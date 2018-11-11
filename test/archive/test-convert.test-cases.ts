/**
 * @deprecated
 * HERE FOR REFERENCE
 * CONVERTED UNIT TESTS TO NEW DATA FORMAT
 *
 * TS_NODE_PROJECT="test/tsconfig.test.1.json" ts-node -r ts-node/register -P test/tsconfig.test.1.json test/test-convert.test-cases.ts
 *
 */

import { testCases } from './TestCases.old';
import { getComposedField } from '../../lib/publicUtils';
import { writeFileSync } from 'fs';
import { FieldRelationship, Subquery } from '../../lib';

const cases = testCases;
const output: any[] = [];

cases.forEach((tc, i) => {
  tc.testCase = i + 1;
  output.push(tc.output);

  if (tc.output.subqueries) {
    tc.output.subqueries.forEach((subquery, subI) => {
      delete subquery.subqueries;
      subquery.fields.forEach((field, i) => {
        try {
          subquery.fields[i] = parseField(field, null);
          const sObjectPrefix = subquery.sObjectPrefix;
          delete subquery.sObjectPrefix;
          subquery.relationshipName = subquery.sObjectRelationshipName;
          subquery.sObjectPrefix = sObjectPrefix;
        } catch (ex) {
          console.log('error parsing field', field);
          console.log(ex);
        }
      });
      replaceWhereClause(subquery.where);
      tc.output.subqueries[subI] = {
        sObjectRelationshipName: subquery.sObjectRelationshipName,
        fields: subquery.fields,
        relationshipName: subquery.relationshipName,
        where: subquery.where,
        sObjectPrefix: subquery.sObjectPrefix,
        sObjectAlias: subquery.sObjectAlias,
      } as Subquery;
    });
  }

  tc.output.fields.forEach((field, i) => {
    try {
      tc.output.fields[i] = parseField(field, tc.output.subqueries);
    } catch (ex) {
      console.log('error parsing field', field);
      console.log(ex);
    }
  });

  replaceWhereClause(tc.output.where);

  if (tc.output.subqueries) {
    tc.output.subqueries.forEach(subquery => delete subquery.sObjectRelationshipName);
  }
});

cases.forEach((tc, i) => {
  delete tc.output.subqueries;
});

function parseField(field: any, subqueries: any) {
  if (field.subqueryObjName && subqueries) {
    const subquery = subqueries.find(sc => sc.sObjectRelationshipName === field.subqueryObjName);
    const newField: any = getComposedField({
      subquery,
    });
    return {
      type: newField.type,
      from: subquery.relationshipName,
      subquery: newField.subquery,
    };
  } else if (field.fn) {
    let nestedField: any;
    if (field.fn.fn) {
      nestedField = getComposedField({
        fn: field.fn.fn.name,
        parameters: field.fn.fn.parameter,
        alias: field.fn.fn.alias,
      });
      nestedField = {
        type: nestedField.type,
        fn: nestedField.fn,
        rawValue: field.fn.fn.text,
        isAggregateFn: ['GROUPING', 'FORMAT', 'CONVERTCURRENCY'].includes(nestedField.fn.toUpperCase())
          ? undefined
          : true,
        parameters: nestedField.parameters,
        alias: nestedField.alias,
      };
    }
    const newField: any = getComposedField({
      fn: field.fn.name,
      parameters: nestedField || field.fn.parameter,
      alias: field.fn.alias,
    });
    return {
      type: newField.type,
      fn: newField.fn,
      rawValue: field.fn.text,
      isAggregateFn: ['GROUPING', 'FORMAT', 'CONVERTCURRENCY', 'TOLABEL'].includes(newField.fn.toUpperCase())
        ? undefined
        : true,
      parameters: newField.parameters,
      alias: newField.alias,
    };
  } else if (field.relationshipFields) {
    const newField: FieldRelationship = getComposedField({
      field: field.text.split('.').slice(-1)[0],
      relationships: field.relationshipFields.slice(0, -1),
      objectPrefix: field.objectPrefix,
      alias: field.alias,
    }) as FieldRelationship;
    return {
      type: newField.type,
      field: newField.field,
      relationships: newField.relationships,
      rawValue: `${field.objectPrefix ? `${field.objectPrefix}.` : ''}${field.text}`,
      objectPrefix: field.objectPrefix,
    };
  } else if (field.typeOf) {
    return getComposedField({
      field: field.typeOf.field,
      conditions: field.typeOf.conditions,
    });
  } else if (field.text && field.objectPrefix) {
    return getComposedField({
      field: field.text,
      objectPrefix: field.objectPrefix,
    });
  } else if (field.text) {
    return getComposedField(field.text);
  }
}

function replaceWhereClause(obj) {
  if (!obj) {
    return;
  }
  if (obj.left.valueQuery) {
    obj.left.valueQuery.fields = obj.left.valueQuery.fields.map(field => parseField(field, null));
    delete obj.left.valueQuery.subqueries;
  }
  replaceWhereClause(obj.right);
}

writeFileSync('output.json', JSON.stringify(cases, null, 2));
