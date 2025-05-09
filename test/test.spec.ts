import { describe, expect, it } from 'vitest';
import { Compose, composeQuery, formatQuery, parseQuery, Query, WhereClause } from '../src';
import { isValueQueryCondition, isWhereClauseWithRightCondition } from '../src/api/public-utils';
import { isQueryValid } from '../src/parser/visitor';
import testCases from './test-cases';
import testCasesForComposeStandAlone from './test-cases-compose';
import testCasesForFormat from './test-cases-for-format';
import testCasesForIsValid from './test-cases-for-is-valid';

const replacements = [{ matching: / last /i, replace: ' LAST ' }];

// Uncomment these to easily test one specific query - useful for troubleshooting/bug-fixing

// describe.only('parse queries', () => {
//   const testCase = testCases.find(tc => tc.testCase === 118);
//   it(`should correctly parse test case ${testCase.testCase} - ${testCase.soql}`, () => {
//     const soqlQuery = parseQuery(testCase.soql, testCase.options);
//     console.log(soqlQuery);
//     const soqlQueryWithoutUndefinedProps = JSON.parse(JSON.stringify(soqlQuery));
//     expect(testCase.output).toEqual(soqlQueryWithoutUndefinedProps);
//   });
// });

// describe.only('compose queries', () => {
//   const testCase = testCases.find(tc => tc.testCase === 104);
//   it(`should compose correctly - test case ${testCase.testCase} - ${testCase.soql}`, () => {
//     const soqlQuery = composeQuery(removeComposeOnlyFields(parseQuery(testCase.soql, testCase.options)));
//     let soql = testCase.soqlComposed || testCase.soql;
//     replacements.forEach(replacement => (soql = soql.replace(replacement.matching, replacement.replace)));
//     expect(soqlQuery).toEqual(soql);
//   });
// });

// describe.only('compose queries - standalone', () => {
//   testCasesForComposeStandAlone.forEach(testCase => {
//     it(`should correctly compose test case ${testCase.testCase} - ${testCase.soql}`, () => {
//       const soqlQuery = composeQuery(parseQuery(testCase.soql, testCase.options));
//       expect(testCase.soql).toEqual(soqlQuery);
//     });
//   });
// });

// describe.only('Test valid queries', () => {
//   testCasesForIsValid
//     .filter(testCase => testCase.isValid)
//     .forEach(testCase => {
//       it(`should identify valid queries - test case ${testCase.testCase} - ${testCase.soql}`, () => {
//         const isValid = isQueryValid(testCase.soql, testCase.options);
//         expect(parseQuery(testCase.soql, testCase.options)).to.not.throw;
//         expect(isValid).toEqual(testCase.isValid);
//       });
//     });

//   testCasesForIsValid
//     .filter(testCase => !testCase.isValid)
//     .forEach(testCase => {
//       it(`should identify invalid queries - test case ${testCase.testCase} - ${testCase.soql}`, () => {
//         const isValid = isQueryValid(testCase.soql, testCase.options);
//         expect(isValid).toEqual(testCase.isValid);
//       });
//     });
// });

// describe.only('format queries', () => {
//   const testCase = testCasesForFormat.find(tc => tc.testCase === 17);
//   it(`should format query - test case ${testCase.testCase} - ${testCase.soql}`, () => {
//     const formattedQuery = formatQuery(testCase.soql, testCase.formatOptions);
//     expect(formattedQuery).toEqual(testCase.formattedSoql);
//   });
// });

describe('parse queries', () => {
  testCases.forEach(testCase => {
    it(`should correctly parse test case ${testCase.testCase} - ${testCase.soql}`, () => {
      const soqlQuery = parseQuery(testCase.soql, testCase.options);
      expect(testCase.output).toEqual(soqlQuery);
    });
  });
});

describe('compose queries', () => {
  testCases.forEach(testCase => {
    it(`should compose correctly - test case ${testCase.testCase} - ${testCase.soql}`, () => {
      const soqlQuery = composeQuery(removeComposeOnlyFields(parseQuery(testCase.soql, testCase.options)));
      let soql = testCase.soqlComposed || testCase.soql;
      replacements.forEach(replacement => (soql = soql.replace(replacement.matching, replacement.replace)));
      expect(soqlQuery).toEqual(soql);
    });
    it(`should have valid composed queries - test case ${testCase.testCase} - ${testCase.soql}`, () => {
      const soqlQuery = composeQuery(removeComposeOnlyFields(parseQuery(testCase.soql, testCase.options)));
      expect(isQueryValid(soqlQuery, testCase.options)).toEqual(true);
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
    expect(soqlQuery).toEqual(`SELECT Id FROM Account WHERE Foo IN ('1', '2', '3') OR Bar = 'foo'`);
  });
  it('Should not add extraneous order by clauses', () => {
    const query: Query = {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
      ],
      sObject: 'Account',
      orderBy: [],
    };
    const soqlQuery = composeQuery(query);
    expect(soqlQuery).toEqual(`SELECT Id FROM Account`);
  });
});

describe('compose queries - standalone', () => {
  testCasesForComposeStandAlone.forEach(testCase => {
    it(`should correctly compose test case ${testCase.testCase} - ${testCase.soql}`, () => {
      const soqlQuery = composeQuery(testCase.input);
      expect(soqlQuery).toEqual(testCase.soql);
    });
  });
});

describe('format queries', () => {
  testCasesForFormat.forEach(testCase => {
    it(`should format query - test case ${testCase.testCase} - ${testCase.soql}`, () => {
      const formattedQuery = formatQuery(testCase.soql, testCase.formatOptions);
      expect(formattedQuery).toEqual(testCase.formattedSoql);
    });
  });
});

describe('validate queries', () => {
  testCasesForIsValid
    .filter(testCase => testCase.isValid)
    .forEach(testCase => {
      it(`should identify valid queries - test case ${testCase.testCase} - ${testCase.soql}`, () => {
        const isValid = isQueryValid(testCase.soql, testCase.options);
        expect(() => parseQuery(testCase.soql, testCase.options)).not.toThrow();
        expect(isValid).toEqual(testCase.isValid);
      });
    });

  testCasesForIsValid
    .filter(testCase => !testCase.isValid)
    .forEach(testCase => {
      it(`should identify invalid queries - test case ${testCase.testCase} - ${testCase.soql}`, () => {
        const isValid = isQueryValid(testCase.soql, testCase.options);
        expect(isValid).toEqual(testCase.isValid);
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
    const whereClause = composer.parseWhereOrHavingClause(parsedQuery.where);
    expect(whereClause).toEqual(`Name = 'Foo'`);
  });
  it(`Should compose the where clause properly with semi-join`, () => {
    const soql = `SELECT Id FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE Name LIKE '%foo%')`;
    const parsedQuery = parseQuery(soql);
    const composer = new Compose(parsedQuery, { autoCompose: false });
    const whereClause = composer.parseWhereOrHavingClause(parsedQuery.where);
    expect(whereClause).toEqual(`Id IN (SELECT AccountId FROM Contact WHERE Name LIKE '%foo%')`);
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
