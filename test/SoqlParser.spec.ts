import { parseQuery } from '../lib/SoqlParser';
import { expect } from 'chai';
import 'mocha';
import testCases from './TestCases';

describe('parse queries', () => {
  testCases.forEach(testCase => {
    it(`should parse correctly - test case ${testCase.testCase} - ${testCase.soql}`, () => {
      const soqlQuery = parseQuery(testCase.soql);
      expect(JSON.stringify(testCase.output)).equal(JSON.stringify(soqlQuery));
    });
  });
});
