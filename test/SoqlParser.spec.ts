import { parseQuery, composeQuery, isQueryValid } from '../lib';
import { expect } from 'chai';
import 'mocha';
import testCases from './TestCases';
import testCasesForFormat from './TestCasesForFormat';
import testCasesForIsValid from './TestCasesForIsValid';
import { formatQuery } from '../lib/SoqlFormatter';

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
      expect(JSON.stringify(testCase.output)).equal(JSON.stringify(soqlQuery));
    });
  });
});

describe('compose queries', () => {
  testCases.forEach(testCase => {
    it(`should compose correctly - test case ${testCase.testCase} - ${testCase.soql}`, () => {
      const soqlQuery = composeQuery(parseQuery(testCase.soql));
      let soql = testCase.soqlComposed || testCase.soql;
      replacements.forEach(replacement => (soql = soql.replace(replacement.matching, replacement.replace)));
      expect(soqlQuery).equal(soql);
    });
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
  testCasesForIsValid.filter(testCase => testCase.isValid).forEach(testCase => {
    it(`should identify valid queries - test case ${testCase.testCase} - ${testCase.soql}`, () => {
      const isValid = isQueryValid(testCase.soql);
      expect(isValid).equal(testCase.isValid);
    });
  });
  testCasesForIsValid.filter(testCase => !testCase.isValid).forEach(testCase => {
    it(`should identify invalid queries - test case ${testCase.testCase} - ${testCase.soql}`, () => {
      const isValid = isQueryValid(testCase.soql);
      expect(isValid).equal(testCase.isValid);
    });
  });
});
