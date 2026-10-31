import { describe, expect, it } from 'vitest';
import { composeQuery, parseQuery } from '../src';
import { escapeStringLiteral } from '../src/utils';

function composeWhereValue(value: string | string[], operator = '=', literalType: 'STRING' = 'STRING'): string {
  return composeQuery({
    fields: [{ type: 'Field', field: 'Id' }],
    sObject: 'Account',
    where: {
      left: {
        field: 'Name',
        operator: operator as '=',
        value: value as string,
        literalType: Array.isArray(value) ? (value.map(() => literalType) as any) : literalType,
      },
    },
  });
}

describe('STRING literal passthrough in composeQuery', () => {
  it('passes through a value that is exactly one well-formed literal', () => {
    expect(composeWhereValue("'media'")).toEqual("SELECT Id FROM Account WHERE Name = 'media'");
  });

  it('passes through an empty literal', () => {
    expect(composeWhereValue("''")).toEqual("SELECT Id FROM Account WHERE Name = ''");
  });

  it('passes through a literal containing escaped quotes and backslashes', () => {
    expect(composeWhereValue("'mr\\'s \\\\ back'")).toEqual("SELECT Id FROM Account WHERE Name = 'mr\\'s \\\\ back'");
  });

  it('escapes a value that starts and ends with a quote but holds an unescaped inner quote', () => {
    expect(composeWhereValue("'x' OR Id != null OR Name = 'y'")).toEqual(
      "SELECT Id FROM Account WHERE Name = '\\'x\\' OR Id != null OR Name = \\'y\\''",
    );
  });

  it('escapes a quoted-looking value with an empty first literal followed by more SOQL', () => {
    expect(composeWhereValue("'' OR Name != ''")).toEqual("SELECT Id FROM Account WHERE Name = '\\'\\' OR Name != \\'\\''");
  });

  it('escapes a value whose closing quote is itself escaped', () => {
    // Not a complete literal, so it is wrapped: the outer quotes become part of the value and the result stays one literal
    expect(composeWhereValue("'abc\\'")).toEqual("SELECT Id FROM Account WHERE Name = '\\'abc\\''");
  });

  it('wraps and escapes a lone single quote', () => {
    expect(composeWhereValue("'")).toEqual("SELECT Id FROM Account WHERE Name = '\\''");
  });

  it('applies the same check to each element of an IN list', () => {
    expect(composeWhereValue(["'ok'", "'x') OR Id != null OR Name IN ('y'"], 'IN')).toEqual(
      "SELECT Id FROM Account WHERE Name IN ('ok', '\\'x\\') OR Id != null OR Name IN (\\'y\\'')",
    );
  });

  it('still round-trips string values produced by parseQuery', () => {
    const soql = "SELECT Id FROM Account WHERE Name = 'mr\\'s' AND Type IN ('a', 'b\\\\')";
    expect(composeQuery(parseQuery(soql))).toEqual(soql);
  });
});

describe('escapeStringLiteral', () => {
  describe('single quotes', () => {
    it('escapes a bare single quote', () => {
      expect(escapeStringLiteral("med'ia")).toEqual("med\\'ia");
    });

    it('escapes multiple bare single quotes', () => {
      expect(escapeStringLiteral("it's a 'test'")).toEqual("it\\'s a \\'test\\'");
    });

    it('preserves a pre-escaped single quote', () => {
      expect(escapeStringLiteral("mr\\'s")).toEqual("mr\\'s");
    });

    it('handles a leading single quote', () => {
      expect(escapeStringLiteral("'foo")).toEqual("\\'foo");
    });

    it('handles a trailing single quote', () => {
      expect(escapeStringLiteral("foo'")).toEqual("foo\\'");
    });
  });

  describe('backslashes', () => {
    it('escapes a lone backslash followed by a non-escape char', () => {
      expect(escapeStringLiteral('back\\slash')).toEqual('back\\\\slash');
    });

    it('escapes a trailing backslash with nothing after it', () => {
      expect(escapeStringLiteral('trailing\\')).toEqual('trailing\\\\');
    });

    it('preserves a pre-escaped backslash (\\\\)', () => {
      expect(escapeStringLiteral('a\\\\b')).toEqual('a\\\\b');
    });

    it('preserves \\n', () => {
      expect(escapeStringLiteral('line1\\nline2')).toEqual('line1\\nline2');
    });

    it('preserves \\t', () => {
      expect(escapeStringLiteral('a\\tb')).toEqual('a\\tb');
    });

    it('preserves \\r', () => {
      expect(escapeStringLiteral('a\\rb')).toEqual('a\\rb');
    });

    it('preserves \\b', () => {
      expect(escapeStringLiteral('a\\bb')).toEqual('a\\bb');
    });

    it('preserves \\f', () => {
      expect(escapeStringLiteral('a\\fb')).toEqual('a\\fb');
    });

    it('preserves uppercase escape chars (\\N, \\R, \\T, \\B, \\F)', () => {
      expect(escapeStringLiteral('a\\Nb\\Rc\\Td\\Be\\Ff')).toEqual('a\\Nb\\Rc\\Td\\Be\\Ff');
    });

    it('preserves \\"', () => {
      expect(escapeStringLiteral('a\\"b')).toEqual('a\\"b');
    });

    it('preserves \\_ (LIKE underscore escape)', () => {
      expect(escapeStringLiteral('a\\_b')).toEqual('a\\_b');
    });

    it('preserves \\% (LIKE percent escape)', () => {
      expect(escapeStringLiteral('a\\%b')).toEqual('a\\%b');
    });
  });

  describe('unicode escapes', () => {
    it('preserves \\uXXXX with valid hex', () => {
      expect(escapeStringLiteral('caf\\u00e9')).toEqual('caf\\u00e9');
    });

    it('preserves \\uXXXX with uppercase hex', () => {
      expect(escapeStringLiteral('a\\uFFFFb')).toEqual('a\\uFFFFb');
    });

    it('escapes the backslash when \\u is not followed by 4 hex digits', () => {
      expect(escapeStringLiteral('\\uZZZZ')).toEqual('\\\\uZZZZ');
    });

    it('escapes the backslash when \\u has fewer than 4 digits remaining', () => {
      expect(escapeStringLiteral('\\u12')).toEqual('\\\\u12');
    });
  });

  describe('mixed', () => {
    it('handles a quote alongside a valid escape', () => {
      expect(escapeStringLiteral("it's\\na test")).toEqual("it\\'s\\na test");
    });

    it('handles multiple lone backslashes', () => {
      expect(escapeStringLiteral('a\\xb\\yc')).toEqual('a\\\\xb\\\\yc');
    });

    it('returns empty string for empty input', () => {
      expect(escapeStringLiteral('')).toEqual('');
    });

    it('returns input unchanged when no escaping is needed', () => {
      expect(escapeStringLiteral('hello world')).toEqual('hello world');
    });
  });

  describe('round-trip integrity', () => {
    it('does not double-escape already-escaped values', () => {
      const input = "mr\\'s\\nback\\\\slash";
      expect(escapeStringLiteral(input)).toEqual(input);
    });
  });
});
