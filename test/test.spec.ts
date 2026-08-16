import { describe, expect, it } from 'vitest';
import { Compose, composeQuery, formatQuery, parseQuery, Query } from '../src';
import { isQueryValid } from '../src/parser/parser';
import testCases from './test-cases';
import testCasesForComposeStandAlone from './test-cases-compose';
import testCasesForFormat from './test-cases-for-format';
import testCasesForIsValid from './test-cases-for-is-valid';
import { removeComposeOnlyFields } from './test-utils';

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

  it('Should not add extraneous group by clauses', () => {
    const query: Query = {
      fields: [
        {
          type: 'Field',
          field: 'Id',
        },
      ],
      sObject: 'Account',
      groupBy: [],
    };
    expect(composeQuery(query)).toEqual(`SELECT Id FROM Account`);
    expect(composeQuery(query, { format: true })).toEqual(`SELECT Id\nFROM Account`);
  });

  it('Should ignore an indentString that is not whitespace', () => {
    const soql = 'SELECT Id, Name FROM Account WHERE Id = 1';
    expect(formatQuery(soql, { indentString: 'XX', fieldMaxLineLength: 1 })).toEqual(
      formatQuery(soql, { indentString: '\t', fieldMaxLineLength: 1 }),
    );
    expect(formatQuery(soql, { indentString: '  ', fieldMaxLineLength: 1 })).toContain('\n  ');
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
      expect(isQueryValid(formattedQuery)).toEqual(true);
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
  it(`Should compose the where clause with formatting`, () => {
    const soql = `SELECT Id FROM Account WHERE Name = 'Foo' AND (Id = '1' OR Id IN (SELECT AccountId FROM Contact))`;
    const parsedQuery = parseQuery(soql);
    const composer = new Compose(parsedQuery, { autoCompose: false, format: true });
    const whereClause = composer.parseWhereOrHavingClause(parsedQuery.where);
    expect(whereClause).toEqual(
      `Name = 'Foo'\n\tAND (\n\t\tId = '1'\n\t\tOR Id IN (\n\t\t\tSELECT AccountId\n\t\t\tFROM Contact\n\t\t)\n\t)`,
    );
  });
  it(`Should compose individual parts with and without formatting`, () => {
    const soql = `SELECT Id, (SELECT Id FROM Contacts), TYPEOF What WHEN Account THEN Phone ELSE Name END FROM Account GROUP BY Name, Type ORDER BY Name DESC, Type`;
    const parsedQuery = parseQuery(soql);
    const plain = new Compose(parsedQuery, { autoCompose: false });
    expect(plain.parseFields(parsedQuery.fields!).map(field => field.text)).toEqual([
      'Id',
      '(SELECT Id FROM Contacts)',
      'TYPEOF What WHEN Account THEN Phone ELSE Name END',
    ]);
    expect(plain.parseGroupByClause(parsedQuery.groupBy!)).toEqual('Name, Type');
    expect(plain.parseOrderBy(parsedQuery.orderBy!)).toEqual('Name DESC, Type');

    const formatted = new Compose(parsedQuery, { autoCompose: false, format: true, formatOptions: { newLineAfterKeywords: true } });
    expect(formatted.parseFields(parsedQuery.fields!).map(field => field.text)).toEqual([
      'Id',
      '(\n\tSELECT\n\t\tId\n\tFROM\n\t\tContacts\n)',
      'TYPEOF What WHEN Account THEN Phone ELSE Name END',
    ]);
    expect(formatted.parseGroupByClause(parsedQuery.groupBy!)).toEqual('Name,\n\tType');
    expect(formatted.parseOrderBy(parsedQuery.orderBy!)).toEqual('Name DESC,\n\tType');
  });
});
