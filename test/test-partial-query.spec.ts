import { composeQuery, parseQuery, Query, WhereClause } from '../src';
import { isValueQueryCondition, isWhereClauseWithRightCondition } from '../src/api/public-utils';
import testCases from './test-cases-for-partial-parse';

const replacements = [{ matching: / last /i, replace: ' LAST ' }];

describe('parse queries', () => {
  testCases.forEach(testCase => {
    it(`should correctly parse test case ${testCase.testCase} - ${testCase.soql}`, () => {
      const soqlQuery = parseQuery(testCase.soql, { allowPartialQuery: true });
      expect(testCase.output).toEqual(soqlQuery);
    });
  });
});

describe('compose queries', () => {
  testCases.forEach(testCase => {
    it(`should compose correctly - test case ${testCase.testCase} - ${testCase.soql}`, () => {
      const soqlQuery = composeQuery(removeComposeOnlyFields(parseQuery(testCase.soql, { allowPartialQuery: true })));
      let soql = testCase.soqlComposed || testCase.soql;
      replacements.forEach(replacement => (soql = soql.replace(replacement.matching, replacement.replace)));
      expect(soqlQuery).toEqual(soql);
    });
  });
});

function removeComposeOnlyFields(query: Partial<Query>): Partial<Query> {
  (query.fields || []).forEach(removeComposeOnlyField);
  (query.fields || []).forEach(field => {
    if (field.type === 'FieldSubquery') {
      field.subquery.fields.forEach(removeComposeOnlyField);
      removeFieldsFromWhere(field.subquery.where);
    }
  });
  removeFieldsFromWhere(query.where);
  return query;
}

function removeFieldsFromWhere(where?: WhereClause) {
  if (!where) {
    return;
  }

  if (isValueQueryCondition(where.left)) {
    where.left.valueQuery.fields.forEach(removeComposeOnlyField);
  }

  if (isWhereClauseWithRightCondition(where)) {
    removeFieldsFromWhere(where.right);
  }
}

function removeComposeOnlyField(field: any) {
  delete field.isAggregateFn;
  delete field.rawValue;
  delete field.from;
}
