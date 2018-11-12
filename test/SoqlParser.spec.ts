import { parseQuery, composeQuery, isQueryValid, Query, FieldType, WhereClause, formatQuery } from '../lib';
import { expect } from 'chai';
import 'mocha';
import testCases from './TestCases';
import testCasesForFormat from './TestCasesForFormat';
import testCasesForIsValid from './TestCasesForIsValid';

const replacements = [
  { matching: / and /i, replace: ' AND ' },
  { matching: / or /i, replace: ' OR ' },
  { matching: / asc /i, replace: ' ASC ' },
  { matching: / desc /i, replace: ' DESC ' },
  { matching: / first /i, replace: ' FIRST ' },
  { matching: / last /i, replace: ' LAST ' },
];

describe('parse queries', () => {
  testCases.forEach(testCase => {
    it(`should parse correctly - test case ${testCase.testCase} - ${testCase.soql}`, () => {
      const soqlQuery = parseQuery(testCase.soql);
      expect(testCase.output).to.deep.equal(soqlQuery);
    });
  });
});

describe('compose queries', () => {
  testCases.forEach(testCase => {
    it(`should compose correctly - test case ${testCase.testCase} - ${testCase.soql}`, () => {
      const soqlQuery = composeQuery(removeComposeOnlyFields(parseQuery(testCase.soql)));
      let soql = testCase.soqlComposed || testCase.soql;
      replacements.forEach(replacement => (soql = soql.replace(replacement.matching, replacement.replace)));
      expect(soqlQuery).to.equal(soql);
    });
  });
  it('Should add single quotes to WHERE clause if not already exists', () => {
    const query: Query = {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
      ],
      sObject: 'Account',
      where: {
        left: {
          field: 'Foo',
          operator: 'IN',
          value: ['1', '2', '3'],
          literalType: 'STRING',
        },
        operator: 'OR',
        right: {
          left: {
            field: 'Bar',
            operator: '=',
            value: 'foo',
            literalType: 'STRING',
          },
        },
      },
    };
    const soqlQuery = composeQuery(query);
    expect(soqlQuery).to.equal(`SELECT Id FROM Account WHERE Foo IN ('1', '2', '3') OR Bar = 'foo'`);
  });
});

describe('format queries', () => {
  testCasesForFormat.forEach(testCase => {
    it(`should format query - test case ${testCase.testCase} - ${testCase.soql}`, () => {
      const formattedQuery = formatQuery(testCase.soql, testCase.formatOptions);
      expect(formattedQuery).equal(testCase.formattedSoql);
    });
  });
});

describe('validate queries', () => {
  testCasesForIsValid
    .filter(testCase => testCase.isValid)
    .forEach(testCase => {
      it(`should identify valid queries - test case ${testCase.testCase} - ${testCase.soql}`, () => {
        const isValid = isQueryValid(testCase.soql);
        expect(isValid).equal(testCase.isValid);
      });
    });
  testCasesForIsValid
    .filter(testCase => !testCase.isValid)
    .forEach(testCase => {
      it(`should identify invalid queries - test case ${testCase.testCase} - ${testCase.soql}`, () => {
        const isValid = isQueryValid(testCase.soql);
        expect(isValid).equal(testCase.isValid);
      });
    });
});

function removeComposeOnlyFields(query: Query): Query {
  query.fields.forEach(removeComposeOnlyField);
  query.fields.forEach(field => {
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
  if (where.left.valueQuery) {
    where.left.valueQuery.fields.forEach(removeComposeOnlyField);
  }
  removeFieldsFromWhere(where.right);
}

function removeComposeOnlyField(field: any) {
  delete field.isAggregateFn;
  delete field.rawValue;
  delete field.from;
}
