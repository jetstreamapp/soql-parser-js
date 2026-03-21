import { describe, expect, it } from 'vitest';
import { parseQuery } from '../src';

/**
 * Tests for error recovery behavior when ignoreParseErrors is true.
 *
 * There is a bug in tryParse (src/parser/parser.ts): when a clause parse fails,
 * the parser restores this.pos to savedPos (the position before the clause keyword
 * was consumed), then calls this.synchronize(). But synchronize() returns immediately
 * when already at a clause boundary — and the clause keyword IS a clause boundary.
 * This means the parser gets stuck at the failed clause's keyword and all subsequent
 * clauses are silently dropped.
 */
describe('error recovery with ignoreParseErrors', () => {
  it('should still parse ORDER BY and LIMIT after a malformed GROUP BY clause', () => {
    // GROUP BY has no fields (malformed), but ORDER BY and LIMIT are valid
    const soql = 'SELECT Id FROM Account GROUP BY ORDER BY Id LIMIT 10';
    const result = parseQuery(soql, { ignoreParseErrors: true });

    // These basic parts should always parse fine
    expect(result.fields).toEqual([{ type: 'Field', field: 'Id' }]);
    expect(result.sObject).toEqual('Account');

    // The malformed GROUP BY should be skipped, but the subsequent valid clauses
    // should still be parsed. This assertion will FAIL due to the bug:
    // the parser gets stuck at GROUP BY and never reaches ORDER BY or LIMIT.
    expect(result.orderBy).toBeDefined();
    expect(result.orderBy).toEqual([{ field: 'Id' }]);
    expect(result.limit).toBeDefined();
    expect(result.limit).toEqual(10);
  });

  it('should still parse LIMIT after a malformed WHERE clause', () => {
    // WHERE is incomplete (no condition after it), but LIMIT is valid
    const soql = 'SELECT Id FROM Account WHERE LIMIT 10';
    const result = parseQuery(soql, { ignoreParseErrors: true });

    expect(result.fields).toEqual([{ type: 'Field', field: 'Id' }]);
    expect(result.sObject).toEqual('Account');

    // LIMIT should still be parsed even though WHERE failed.
    // This will FAIL due to the same bug: the parser gets stuck at WHERE.
    expect(result.limit).toBeDefined();
    expect(result.limit).toEqual(10);
  });

  it('should still parse LIMIT and OFFSET after a malformed ORDER BY clause', () => {
    // ORDER BY has no fields (malformed), but LIMIT and OFFSET are valid
    const soql = 'SELECT Id FROM Account ORDER BY LIMIT 10 OFFSET 5';
    const result = parseQuery(soql, { ignoreParseErrors: true });

    expect(result.fields).toEqual([{ type: 'Field', field: 'Id' }]);
    expect(result.sObject).toEqual('Account');

    // These should be parsed despite the malformed ORDER BY.
    // This will FAIL due to the synchronize bug.
    expect(result.limit).toBeDefined();
    expect(result.limit).toEqual(10);
    expect(result.offset).toBeDefined();
    expect(result.offset).toEqual(5);
  });
});
