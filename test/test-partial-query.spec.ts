import { describe, expect, it } from 'vitest';
import { composeQuery, parseQuery } from '../src';
import testCases from './test-cases-for-partial-parse';
import { removeComposeOnlyFields } from './test-utils';

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
