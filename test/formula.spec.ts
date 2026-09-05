import { describe, expect, it } from 'vitest';
import { composeQuery, formatQuery, isFormulaFunction, parseQuery, Query } from '../src';

describe('FORMULA conditions', () => {
  it('continues to parse Formula as a field name outside a function call', () => {
    expect(parseQuery("SELECT Formula FROM Opportunity WHERE Formula = 'Enabled'")).toEqual({
      fields: [{ type: 'Field', field: 'Formula' }],
      sObject: 'Opportunity',
      where: {
        left: { field: 'Formula', operator: '=', value: "'Enabled'", literalType: 'STRING' },
      },
    });
  });

  it('parses addition, dotted fields, casing, and compact spacing into a nested AST', () => {
    const parsed = parseQuery("SELECT Id FROM Opportunity WHERE formula('Account.Amount__c+ExpectedRevenue') <= 500 AND Name = 'Renewal'");

    expect(parsed.where).toEqual({
      left: {
        fn: {
          functionName: 'FORMULA',
          parameters: ["'Account.Amount__c + ExpectedRevenue'"],
          rawValue: "formula('Account.Amount__c+ExpectedRevenue')",
          formula: {
            type: 'BinaryExpression',
            operator: '+',
            left: { type: 'FieldReference', parts: ['Account', 'Amount__c'] },
            right: { type: 'FieldReference', parts: ['ExpectedRevenue'] },
          },
        },
        operator: '<=',
        value: '500',
        literalType: 'INTEGER',
      },
      operator: 'AND',
      right: {
        left: { field: 'Name', operator: '=', value: "'Renewal'", literalType: 'STRING' },
      },
    });
  });

  it('supports FORMULA inside grouped and negated WHERE conditions', () => {
    const parsed = parseQuery("SELECT Id FROM Opportunity WHERE NOT (FORMULA('Amount - ExpectedRevenue') > 100 OR Status = 'Closed')");

    expect(composeQuery(parsed)).toBe(
      "SELECT Id FROM Opportunity WHERE NOT (FORMULA('Amount - ExpectedRevenue') > 100 OR Status = 'Closed')",
    );
  });

  it('composes a manually constructed formula AST without raw source text', () => {
    const query: Query = {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Opportunity',
      where: {
        left: {
          fn: {
            functionName: 'FORMULA',
            formula: {
              type: 'BinaryExpression',
              operator: '-',
              left: { type: 'FieldReference', parts: ['Account', 'Amount__c'] },
              right: { type: 'FieldReference', parts: ['ExpectedRevenue'] },
            },
          },
          operator: '>',
          value: '100',
          literalType: 'INTEGER',
        },
      },
    };

    expect(composeQuery(query)).toBe("SELECT Id FROM Opportunity WHERE FORMULA('Account.Amount__c - ExpectedRevenue') > 100");
  });

  it('normalizes the nested expression while formatting', () => {
    expect(formatQuery("SELECT Id FROM Opportunity WHERE formula('Amount-ExpectedRevenue')>100")).toBe(
      "SELECT Id\nFROM Opportunity\nWHERE FORMULA('Amount - ExpectedRevenue') > 100",
    );
  });

  it('exports a type guard for formula functions', () => {
    const condition = parseQuery("SELECT Id FROM Opportunity WHERE FORMULA('Amount + ExpectedRevenue') > 100").where!.left;

    if (!condition || !('fn' in condition)) {
      throw new Error('Expected a function condition');
    }

    expect(isFormulaFunction(condition.fn)).toBe(true);
    expect(isFormulaFunction({ functionName: 'COUNT', parameters: ['Id'] })).toBe(false);
    expect(isFormulaFunction({ functionName: 'FORMULA', rawValue: "FORMULA('Amount + ExpectedRevenue')" })).toBe(false);
    expect(isFormulaFunction({ functionName: 'FORMULA', formula: { type: 'BinaryExpression' } })).toBe(true);
    expect(isFormulaFunction(null)).toBe(false);
  });

  it('composes a FORMULA object without a nested AST from its rawValue', () => {
    const query: Query = {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Opportunity',
      where: {
        left: {
          fn: { functionName: 'FORMULA', rawValue: "FORMULA('Amount + ExpectedRevenue')" },
          operator: '>',
          value: '100',
          literalType: 'INTEGER',
        },
      },
    };

    expect(composeQuery(query)).toBe("SELECT Id FROM Opportunity WHERE FORMULA('Amount + ExpectedRevenue') > 100");
  });

  it('throws when composing a malformed formula AST', () => {
    const query: Query = {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Opportunity',
      where: {
        left: {
          fn: {
            functionName: 'FORMULA',
            formula: {
              type: 'BinaryExpression',
              operator: '*' as any,
              left: { type: 'FieldReference', parts: ['Amount'] },
              right: { type: 'FieldReference', parts: [] },
            },
          },
          operator: '>',
          value: '100',
          literalType: 'INTEGER',
        },
      },
    };

    expect(() => composeQuery(query)).toThrow('Invalid FORMULA expression');
  });

  it('throws when composing a formula AST whose field parts are not plain identifiers', () => {
    const query: Query = {
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Opportunity',
      where: {
        left: {
          fn: {
            functionName: 'FORMULA',
            formula: {
              type: 'BinaryExpression',
              operator: '-',
              left: { type: 'FieldReference', parts: ['Amount + Cost'] },
              right: { type: 'FieldReference', parts: ['ExpectedRevenue'] },
            },
          },
          operator: '>',
          value: '100',
          literalType: 'INTEGER',
        },
      },
    };

    expect(() => composeQuery(query)).toThrow('Invalid FORMULA expression');
  });

  it('omits an invalid FORMULA WHERE clause when parse errors are ignored', () => {
    expect(
      parseQuery("SELECT Id FROM Opportunity WHERE FORMULA('Amount * ExpectedRevenue') > 100 ORDER BY Name", {
        ignoreParseErrors: true,
      }),
    ).toEqual({
      fields: [{ type: 'Field', field: 'Id' }],
      sObject: 'Opportunity',
      orderBy: [{ field: 'Name' }],
    });
  });
});
