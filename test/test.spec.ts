import { expect } from 'chai';
import 'mocha';
import { parseQuery, WhereClause, Query, Compose, composeQuery, formatQuery } from '../src';
import { isQueryValid } from '../src/parser/visitor';
import testCases from './test-cases';
import testCasesForFormat from './test-cases-for-format';
import testCasesForIsValid from './test-cases-for-is-valid';

const replacements = [{ matching: / last /i, replace: ' LAST ' }];

describe('parse queries', () => {
  testCases.forEach(testCase => {
    it(`should correctly parse test case ${testCase.testCase} - ${testCase.soql}`, () => {
      const soqlQuery = parseQuery(testCase.soql, testCase.options);
      expect(testCase.output).to.deep.equal(soqlQuery);
    });
  });
});

// Uncomment these to easily test one specific query - useful for troubleshooting/bugfixing

// describe.only('parse queries', () => {
//   const testCase = testCases.find(tc => tc.testCase === 58);
//   it(`should correctly parse test case ${testCase.testCase} - ${testCase.soql}`, () => {
//     const soqlQuery = parseQuery(testCase.soql, testCase.options);
//     const soqlQueryWithoutUndefinedProps = JSON.parse(JSON.stringify(soqlQuery));
//     expect(testCase.output).to.deep.equal(soqlQueryWithoutUndefinedProps);
//   });
// });

// describe.only('compose queries', () => {
//   const testCase = testCases.find(tc => tc.testCase === 53);
//   it(`should compose correctly - test case ${testCase.testCase} - ${testCase.soql}`, () => {
//     const soqlQuery = composeQuery(removeComposeOnlyFields(parseQuery(testCase.soql, testCase.options)));
//     let soql = testCase.soqlComposed || testCase.soql;
//     replacements.forEach(replacement => (soql = soql.replace(replacement.matching, replacement.replace)));
//     expect(soqlQuery).to.equal(soql);
//   });
// });

// describe.only('Test valid queries', () => {
//   testCasesForIsValid
//     .filter(testCase => testCase.testCase === 122)
//     .forEach(testCase => {
//       it(`should identify validity of query - test case ${testCase.testCase} - ${testCase.soql}`, () => {
//         const soqlQuery = parseQuery(testCase.soql, testCase.options);
//         const isValid = isQueryValid(testCase.soql);
//         expect(isValid).equal(testCase.isValid);
//       });
//       // it(`should identify valid queries - test case ${testCase.testCase} - ${testCase.soql}`, () => {
//       //   const isValid = isQueryValid(testCase.soql);
//       //   expect(isValid).equal(testCase.isValid);
//       //   expect(parseQuery(testCase.soql, testCase.options)).to.not.throw;
//       // });
//     });
// });

describe('compose queries', () => {
  testCases.forEach(testCase => {
    it(`should compose correctly - test case ${testCase.testCase} - ${testCase.soql}`, () => {
      const soqlQuery = composeQuery(removeComposeOnlyFields(parseQuery(testCase.soql, testCase.options)));
      let soql = testCase.soqlComposed || testCase.soql;
      replacements.forEach(replacement => (soql = soql.replace(replacement.matching, replacement.replace)));
      expect(soqlQuery).to.equal(soql);
    });
    it(`should have valid composed queries - test case ${testCase.testCase} - ${testCase.soql}`, () => {
      const soqlQuery = composeQuery(removeComposeOnlyFields(parseQuery(testCase.soql, testCase.options)));
      expect(isQueryValid(soqlQuery, testCase.options)).equal(true);
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
        const isValid = isQueryValid(testCase.soql, testCase.options);
        expect(parseQuery(testCase.soql, testCase.options)).to.not.throw;
        expect(isValid).equal(testCase.isValid);
      });
    });

  testCasesForIsValid
    .filter(testCase => !testCase.isValid)
    .forEach(testCase => {
      it(`should identify invalid queries - test case ${testCase.testCase} - ${testCase.soql}`, () => {
        const isValid = isQueryValid(testCase.soql, testCase.options);
        expect(isValid).equal(testCase.isValid);
      });
    });
});

describe('calls individual compose methods', () => {
  // TODO: add more tests
  // We have adequate coverage of overall queries, but these are public and should have adequate coverage individually
  it(`Should compose the where clause properly`, () => {
    const soql = `SELECT Id FROM Account WHERE Name = 'Foo'`;
    const parsedQuery = parseQuery(soql);
    const composer = new Compose(parsedQuery, { autoCompose: false });
    const whereClause = composer.parseWhereClause(parsedQuery.where);
    expect(whereClause).to.equal(`Name = 'Foo'`);
  });
  it(`Should compose the where clause properly with semi-join`, () => {
    const soql = `SELECT Id FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE Name LIKE '%foo%')`;
    const parsedQuery = parseQuery(soql);
    const composer = new Compose(parsedQuery, { autoCompose: false });
    const whereClause = composer.parseWhereClause(parsedQuery.where);
    expect(whereClause).to.equal(`Id IN (SELECT AccountId FROM Contact WHERE Name LIKE '%foo%')`);
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
