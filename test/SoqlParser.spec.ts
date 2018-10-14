import { parseQuery, composeQuery } from '../lib';
import { expect } from 'chai';
import 'mocha';
import testCases from './TestCases';

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
      let soql = testCase.soql;
      replacements.forEach(replacement => (soql = soql.replace(replacement.matching, replacement.replace)));
      expect(soqlQuery).equal(soql);
    });
  });
});
