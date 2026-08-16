import { describe, expect, it } from 'vitest';
import { composeQuery, formatQuery, FormatOptions, isQueryValid, parseQuery } from '../src';
import testCases from './test-cases';
import { removeComposeOnlyFields } from './test-utils';

/**
 * Structural invariants that must hold for every formatted query, regardless of the format options:
 * - the output is valid SOQL
 * - formatting is idempotent (formatting an already-formatted query does not change it)
 * - the formatted query parses to the same AST as the original query
 * - no whitespace-only lines and no trailing whitespace on any line
 */
const optionSets: { name: string; options: FormatOptions }[] = [
  { name: 'defaults', options: {} },
  { name: 'newLineAfterKeywords', options: { newLineAfterKeywords: true } },
  { name: 'fieldSubqueryParensOnOwnLine=false', options: { fieldSubqueryParensOnOwnLine: false } },
  { name: 'numIndent=2, fieldMaxLineLength=20', options: { numIndent: 2, fieldMaxLineLength: 20 } },
  { name: 'fieldMaxLineLength=1', options: { fieldMaxLineLength: 1 } },
  {
    name: 'indentString=two spaces, numIndent=2, newLineAfterKeywords',
    options: { indentString: '  ', numIndent: 2, newLineAfterKeywords: true },
  },
];

const normalize = (soql: string, options?: any) => JSON.parse(JSON.stringify(removeComposeOnlyFields(parseQuery(soql, options))));

describe('format round-trip invariants', () => {
  optionSets.forEach(({ name, options }) => {
    describe(name, () => {
      testCases.forEach(testCase => {
        it(`test case ${testCase.testCase} - ${testCase.soql}`, () => {
          const formatted = formatQuery(testCase.soql, options, testCase.options);

          expect(isQueryValid(formatted, testCase.options), 'formatted query should be valid').toBe(true);
          expect(formatQuery(formatted, options, testCase.options), 'formatting should be idempotent').toEqual(formatted);
          expect(normalize(formatted, testCase.options), 'formatted query should parse to the same AST').toEqual(
            normalize(testCase.soql, testCase.options),
          );
          expect(formatted, 'should not contain whitespace-only lines').not.toMatch(/\n[ \t]*\n/);
          expect(formatted, 'should not contain trailing whitespace').not.toMatch(/[ \t](\n|$)/);
          expect(formatted, 'should not start with whitespace').not.toMatch(/^\s/);
        });
      });
    });
  });
});

describe('compose does not mutate the input query', () => {
  it('should produce identical output when composing the same parsed query twice', () => {
    const parsed = parseQuery(
      'SELECT Id, (SELECT Id FROM Account.Contacts) FROM Account WHERE Id IN (SELECT AccountId FROM Account.Contacts)',
    );
    const snapshot = JSON.stringify(parsed);
    const first = composeQuery(parsed);
    const second = composeQuery(parsed);
    expect(second).toEqual(first);
    expect(JSON.stringify(parsed)).toEqual(snapshot);
  });
  it('should produce identical output when formatting the same parsed query twice', () => {
    const parsed = parseQuery('SELECT Id, (SELECT Id FROM Account.Contacts) FROM Account');
    const first = composeQuery(parsed, { format: true });
    const second = composeQuery(parsed, { format: true });
    expect(second).toEqual(first);
  });
});
