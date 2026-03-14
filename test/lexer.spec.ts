import { describe, it, expect } from 'vitest';
import { tokenize, TokenKind, Token, tokenTypeName, isDateFunction, isAggregateFunction, isLocationFunction, isFieldsFunction, isOtherFunction, isFieldsFunctionParam, isDateLiteral, isDateNLiteral, isUsingScopeEnumeration, isIdentifierLike, isNumberLiteral, isDecimalNumberLiteral, isIntegerNumberLiteral, isRelationalOperator } from '../src/parser/lexer';
import { testCases as parserTestCases } from './test-cases';
import { testCases as validationTestCases } from './test-cases-for-is-valid';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Extract just the kinds from a token array (excluding EOF) */
function kinds(tokens: Token[]): TokenKind[] {
  return tokens.filter(t => t.kind !== TokenKind.EOF).map(t => t.kind);
}

/** Extract just the text values from a token array (excluding EOF) */
function texts(tokens: Token[]): string[] {
  return tokens.filter(t => t.kind !== TokenKind.EOF).map(t => t.text);
}

// ===========================================================================
// Basic token production
// ===========================================================================

describe('Lexer - basic tokens', () => {

  it('should produce EOF for empty input', () => {
    const tokens = tokenize('');
    expect(tokens).toHaveLength(1);
    expect(tokens[0].kind).toBe(TokenKind.EOF);
  });

  it('should produce EOF for whitespace-only input', () => {
    const tokens = tokenize('   \t\n\r  ');
    expect(tokens).toHaveLength(1);
    expect(tokens[0].kind).toBe(TokenKind.EOF);
  });

  it('should tokenize a simple SELECT query', () => {
    const tokens = tokenize('SELECT Id FROM Account');
    expect(kinds(tokens)).toEqual([
      TokenKind.SELECT,
      TokenKind.IDENTIFIER,
      TokenKind.FROM,
      TokenKind.IDENTIFIER,
    ]);
    expect(texts(tokens)).toEqual(['SELECT', 'Id', 'FROM', 'Account']);
  });

  it('should be case-insensitive for keywords', () => {
    const tokens = tokenize('select id from account');
    expect(kinds(tokens)).toEqual([
      TokenKind.SELECT,
      TokenKind.IDENTIFIER,
      TokenKind.FROM,
      TokenKind.IDENTIFIER,
    ]);
  });

  it('should preserve original text case', () => {
    const tokens = tokenize('SeLeCt Id FrOm Account');
    expect(texts(tokens)).toEqual(['SeLeCt', 'Id', 'FrOm', 'Account']);
  });
});

// ===========================================================================
// Reserved keywords
// ===========================================================================

describe('Lexer - reserved keywords', () => {
  const reservedKeywords: [string, TokenKind][] = [
    ['AND', TokenKind.AND],
    ['AS', TokenKind.AS],
    ['ASC', TokenKind.ASC],
    ['DESC', TokenKind.DESC],
    ['CUBE', TokenKind.CUBE],
    ['ELSE', TokenKind.ELSE],
    ['EXCLUDES', TokenKind.EXCLUDES],
    ['FALSE', TokenKind.FALSE],
    ['FIRST', TokenKind.FIRST],
    ['FROM', TokenKind.FROM],
    ['HAVING', TokenKind.HAVING],
    ['IN', TokenKind.IN],
    ['INCLUDES', TokenKind.INCLUDES],
    ['LAST', TokenKind.LAST],
    ['LIKE', TokenKind.LIKE],
    ['LIMIT', TokenKind.LIMIT],
    ['NOT', TokenKind.NOT],
    ['NULL', TokenKind.NULL],
    ['NULLS', TokenKind.NULLS],
    ['OR', TokenKind.OR],
    ['ROLLUP', TokenKind.ROLLUP],
    ['SELECT', TokenKind.SELECT],
    ['TRUE', TokenKind.TRUE],
    ['USING', TokenKind.USING],
    ['WHERE', TokenKind.WHERE],
    ['WITH', TokenKind.WITH],
    ['FOR', TokenKind.FOR],
    ['UPDATE', TokenKind.UPDATE],
  ];

  reservedKeywords.forEach(([text, expectedKind]) => {
    it(`should recognize keyword "${text}"`, () => {
      const tokens = tokenize(text);
      expect(tokens[0].kind).toBe(expectedKind);
      expect(tokens[0].text).toBe(text);
    });

    it(`should recognize keyword "${text.toLowerCase()}" (lower case)`, () => {
      const tokens = tokenize(text.toLowerCase());
      expect(tokens[0].kind).toBe(expectedKind);
    });
  });
});

// ===========================================================================
// Multi-word keywords
// ===========================================================================

describe('Lexer - multi-word keywords', () => {
  it('should recognize ORDER BY', () => {
    const tokens = tokenize('ORDER BY');
    expect(tokens[0].kind).toBe(TokenKind.ORDER_BY);
    expect(tokens[0].text).toBe('ORDER BY');
  });

  it('should recognize GROUP BY', () => {
    const tokens = tokenize('GROUP BY');
    expect(tokens[0].kind).toBe(TokenKind.GROUP_BY);
    expect(tokens[0].text).toBe('GROUP BY');
  });

  it('should recognize DATA CATEGORY', () => {
    const tokens = tokenize('DATA CATEGORY');
    expect(tokens[0].kind).toBe(TokenKind.DATA_CATEGORY);
    expect(tokens[0].text).toBe('DATA CATEGORY');
  });

  it('should handle ORDER BY with extra whitespace', () => {
    const tokens = tokenize('ORDER   BY');
    expect(tokens[0].kind).toBe(TokenKind.ORDER_BY);
  });

  it('should handle case-insensitive multi-word keywords', () => {
    const tokens = tokenize('order by');
    expect(tokens[0].kind).toBe(TokenKind.ORDER_BY);
  });

  it('should NOT match ORDER when not followed by BY', () => {
    const tokens = tokenize('ORDER Name');
    // "ORDER" is not a keyword by itself in the keyword map, so it's an identifier
    expect(tokens[0].kind).toBe(TokenKind.IDENTIFIER);
    expect(tokens[0].text).toBe('ORDER');
  });
});

// ===========================================================================
// Non-reserved keywords (can also be identifiers)
// ===========================================================================

describe('Lexer - non-reserved keywords', () => {
  const nonReserved: [string, TokenKind][] = [
    ['ABOVE', TokenKind.ABOVE],
    ['ABOVE_OR_BELOW', TokenKind.ABOVE_OR_BELOW],
    ['NEW', TokenKind.APEX_NEW],
    ['AT', TokenKind.AT],
    ['BELOW', TokenKind.BELOW],
    ['END', TokenKind.END],
    ['OFFSET', TokenKind.OFFSET],
    ['REFERENCE', TokenKind.REFERENCE],
    ['SCOPE', TokenKind.SCOPE],
    ['TRACKING', TokenKind.TRACKING],
    ['THEN', TokenKind.THEN],
    ['TYPEOF', TokenKind.TYPEOF],
    ['VIEW', TokenKind.VIEW],
    ['VIEWSTAT', TokenKind.VIEWSTAT],
    ['WHEN', TokenKind.WHEN],
    ['SECURITY_ENFORCED', TokenKind.SECURITY_ENFORCED],
    ['SYSTEM_MODE', TokenKind.SYSTEM_MODE],
    ['USER_MODE', TokenKind.USER_MODE],
  ];

  nonReserved.forEach(([text, expectedKind]) => {
    it(`should recognize non-reserved keyword "${text}"`, () => {
      const tokens = tokenize(text);
      expect(tokens[0].kind).toBe(expectedKind);
    });
  });
});

// ===========================================================================
// Operators
// ===========================================================================

describe('Lexer - operators', () => {
  it('should tokenize = operator', () => {
    const tokens = tokenize('=');
    expect(tokens[0].kind).toBe(TokenKind.EQUAL);
  });

  it('should tokenize != operator', () => {
    const tokens = tokenize('!=');
    expect(tokens[0].kind).toBe(TokenKind.NOT_EQUAL);
  });

  it('should tokenize <> operator as NOT_EQUAL', () => {
    const tokens = tokenize('<>');
    expect(tokens[0].kind).toBe(TokenKind.NOT_EQUAL);
  });

  it('should tokenize < operator', () => {
    const tokens = tokenize('<');
    expect(tokens[0].kind).toBe(TokenKind.LESS_THAN);
  });

  it('should tokenize <= operator', () => {
    const tokens = tokenize('<=');
    expect(tokens[0].kind).toBe(TokenKind.LESS_THAN_OR_EQUAL);
  });

  it('should tokenize > operator', () => {
    const tokens = tokenize('>');
    expect(tokens[0].kind).toBe(TokenKind.GREATER_THAN);
  });

  it('should tokenize >= operator', () => {
    const tokens = tokenize('>=');
    expect(tokens[0].kind).toBe(TokenKind.GREATER_THAN_OR_EQUAL);
  });
});

// ===========================================================================
// Symbols
// ===========================================================================

describe('Lexer - symbols', () => {
  const symbols: [string, TokenKind][] = [
    ['(', TokenKind.L_PAREN],
    [')', TokenKind.R_PAREN],
    ['[', TokenKind.L_SQUARE_BRACKET],
    [']', TokenKind.R_SQUARE_BRACKET],
    ['.', TokenKind.DOT],
    [',', TokenKind.COMMA],
    [':', TokenKind.COLON],
    [';', TokenKind.SEMICOLON],
    ['*', TokenKind.ASTERISK],
    ['+', TokenKind.PLUS],
    ['-', TokenKind.MINUS],
  ];

  symbols.forEach(([text, expectedKind]) => {
    it(`should tokenize symbol "${text}"`, () => {
      // For + and - without following digits, they need to be standalone
      // Use the symbol surrounded by spaces to avoid signed number parsing
      const tokens = tokenize(`( ${text} )`);
      const symbolToken = tokens.find(t => t.kind === expectedKind);
      expect(symbolToken).toBeDefined();
      expect(symbolToken!.text).toBe(text);
    });
  });
});

// ===========================================================================
// Numbers
// ===========================================================================

describe('Lexer - numbers', () => {
  it('should tokenize unsigned integer', () => {
    const tokens = tokenize('42');
    expect(tokens[0].kind).toBe(TokenKind.UNSIGNED_INTEGER);
    expect(tokens[0].text).toBe('42');
  });

  it('should tokenize unsigned decimal', () => {
    const tokens = tokenize('3.14');
    expect(tokens[0].kind).toBe(TokenKind.UNSIGNED_DECIMAL);
    expect(tokens[0].text).toBe('3.14');
  });

  it('should tokenize signed positive integer', () => {
    const tokens = tokenize('( +42 )');
    const numToken = tokens.find(t => t.kind === TokenKind.SIGNED_INTEGER);
    expect(numToken).toBeDefined();
    expect(numToken!.text).toBe('+42');
  });

  it('should tokenize signed negative integer', () => {
    const tokens = tokenize('( -42 )');
    const numToken = tokens.find(t => t.kind === TokenKind.SIGNED_INTEGER);
    expect(numToken).toBeDefined();
    expect(numToken!.text).toBe('-42');
  });

  it('should tokenize signed decimal', () => {
    const tokens = tokenize('( -3.14 )');
    const numToken = tokens.find(t => t.kind === TokenKind.SIGNED_DECIMAL);
    expect(numToken).toBeDefined();
    expect(numToken!.text).toBe('-3.14');
  });

  it('should tokenize decimal starting with dot', () => {
    const tokens = tokenize('.5');
    expect(tokens[0].kind).toBe(TokenKind.UNSIGNED_DECIMAL);
    expect(tokens[0].text).toBe('.5');
  });

  it('should tokenize signed decimal starting with dot', () => {
    const tokens = tokenize('( -.5 )');
    const numToken = tokens.find(t => t.kind === TokenKind.SIGNED_DECIMAL);
    expect(numToken).toBeDefined();
    expect(numToken!.text).toBe('-.5');
  });

  it('should tokenize 0 as unsigned integer', () => {
    const tokens = tokenize('0');
    expect(tokens[0].kind).toBe(TokenKind.UNSIGNED_INTEGER);
  });
});

// ===========================================================================
// Currency-prefixed numbers
// ===========================================================================

describe('Lexer - currency-prefixed numbers', () => {
  it('should tokenize USD100 as currency-prefixed integer', () => {
    const tokens = tokenize('USD100');
    expect(tokens[0].kind).toBe(TokenKind.CURRENCY_PREFIXED_INTEGER);
    expect(tokens[0].text).toBe('USD100');
  });

  it('should tokenize USD100.50 as currency-prefixed decimal', () => {
    const tokens = tokenize('USD100.50');
    expect(tokens[0].kind).toBe(TokenKind.CURRENCY_PREFIXED_DECIMAL);
    expect(tokens[0].text).toBe('USD100.50');
  });

  it('should tokenize EUR5000 as currency-prefixed integer', () => {
    const tokens = tokenize('EUR5000');
    expect(tokens[0].kind).toBe(TokenKind.CURRENCY_PREFIXED_INTEGER);
    expect(tokens[0].text).toBe('EUR5000');
  });

  it('should tokenize USD-50 as currency-prefixed integer', () => {
    const tokens = tokenize('USD-50');
    expect(tokens[0].kind).toBe(TokenKind.CURRENCY_PREFIXED_INTEGER);
    expect(tokens[0].text).toBe('USD-50');
  });

  it('should tokenize USD-50.25 as currency-prefixed decimal', () => {
    const tokens = tokenize('USD-50.25');
    expect(tokens[0].kind).toBe(TokenKind.CURRENCY_PREFIXED_DECIMAL);
    expect(tokens[0].text).toBe('USD-50.25');
  });

  it('should NOT tokenize ABCD100 as currency (4+ letter prefix)', () => {
    const tokens = tokenize('ABCD100');
    // "ABCD100" should be parsed as identifier (alpha starts, alphanumeric continues)
    expect(tokens[0].kind).toBe(TokenKind.IDENTIFIER);
  });
});

// ===========================================================================
// String literals
// ===========================================================================

describe('Lexer - string literals', () => {
  it('should tokenize a simple string', () => {
    const tokens = tokenize("'hello'");
    expect(tokens[0].kind).toBe(TokenKind.STRING_LITERAL);
    expect(tokens[0].text).toBe("'hello'");
  });

  it('should tokenize an empty string', () => {
    const tokens = tokenize("''");
    expect(tokens[0].kind).toBe(TokenKind.STRING_LITERAL);
    expect(tokens[0].text).toBe("''");
  });

  it('should tokenize a string with escaped quote', () => {
    const tokens = tokenize("'it\\'s'");
    expect(tokens[0].kind).toBe(TokenKind.STRING_LITERAL);
    expect(tokens[0].text).toBe("'it\\'s'");
  });

  it("should tokenize 'mi' as GEOLOCATION_UNIT", () => {
    const tokens = tokenize("'mi'");
    expect(tokens[0].kind).toBe(TokenKind.GEOLOCATION_UNIT);
  });

  it("should tokenize 'km' as GEOLOCATION_UNIT", () => {
    const tokens = tokenize("'km'");
    expect(tokens[0].kind).toBe(TokenKind.GEOLOCATION_UNIT);
  });

  it("should tokenize 'KM' as GEOLOCATION_UNIT (case-insensitive)", () => {
    const tokens = tokenize("'KM'");
    expect(tokens[0].kind).toBe(TokenKind.GEOLOCATION_UNIT);
  });

  it("should NOT tokenize 'mile' as GEOLOCATION_UNIT", () => {
    const tokens = tokenize("'mile'");
    expect(tokens[0].kind).toBe(TokenKind.STRING_LITERAL);
  });
});

// ===========================================================================
// Date and DateTime tokens
// ===========================================================================

describe('Lexer - date and datetime tokens', () => {
  it('should tokenize a date', () => {
    const tokens = tokenize('2023-01-15');
    expect(tokens[0].kind).toBe(TokenKind.DATE_TOKEN);
    expect(tokens[0].text).toBe('2023-01-15');
  });

  it('should tokenize a datetime with Z timezone', () => {
    const tokens = tokenize('2010-09-20T22:16:30.000Z');
    expect(tokens[0].kind).toBe(TokenKind.DATETIME);
    expect(tokens[0].text).toBe('2010-09-20T22:16:30.000Z');
  });

  it('should tokenize a datetime with + timezone offset', () => {
    const tokens = tokenize('2005-10-08T01:02:03+05:30');
    expect(tokens[0].kind).toBe(TokenKind.DATETIME);
    expect(tokens[0].text).toBe('2005-10-08T01:02:03+05:30');
  });

  it('should tokenize a datetime with - timezone offset', () => {
    const tokens = tokenize('2005-10-08T01:02:03-08:00');
    expect(tokens[0].kind).toBe(TokenKind.DATETIME);
    expect(tokens[0].text).toBe('2005-10-08T01:02:03-08:00');
  });

  it('should tokenize a simple datetime without fractional seconds', () => {
    const tokens = tokenize('2005-10-08T01:02:03Z');
    expect(tokens[0].kind).toBe(TokenKind.DATETIME);
    expect(tokens[0].text).toBe('2005-10-08T01:02:03Z');
  });
});

// ===========================================================================
// Date literals (fixed)
// ===========================================================================

describe('Lexer - date literals', () => {
  const dateLiterals: [string, TokenKind][] = [
    ['YESTERDAY', TokenKind.YESTERDAY],
    ['TODAY', TokenKind.TODAY],
    ['TOMORROW', TokenKind.TOMORROW],
    ['LAST_WEEK', TokenKind.LAST_WEEK],
    ['THIS_WEEK', TokenKind.THIS_WEEK],
    ['NEXT_WEEK', TokenKind.NEXT_WEEK],
    ['LAST_MONTH', TokenKind.LAST_MONTH],
    ['THIS_MONTH', TokenKind.THIS_MONTH],
    ['NEXT_MONTH', TokenKind.NEXT_MONTH],
    ['LAST_90_DAYS', TokenKind.LAST_90_DAYS],
    ['NEXT_90_DAYS', TokenKind.NEXT_90_DAYS],
    ['THIS_QUARTER', TokenKind.THIS_QUARTER],
    ['LAST_QUARTER', TokenKind.LAST_QUARTER],
    ['NEXT_QUARTER', TokenKind.NEXT_QUARTER],
    ['THIS_YEAR', TokenKind.THIS_YEAR],
    ['LAST_YEAR', TokenKind.LAST_YEAR],
    ['NEXT_YEAR', TokenKind.NEXT_YEAR],
    ['THIS_FISCAL_QUARTER', TokenKind.THIS_FISCAL_QUARTER],
    ['LAST_FISCAL_QUARTER', TokenKind.LAST_FISCAL_QUARTER],
    ['NEXT_FISCAL_QUARTER', TokenKind.NEXT_FISCAL_QUARTER],
    ['THIS_FISCAL_YEAR', TokenKind.THIS_FISCAL_YEAR],
    ['LAST_FISCAL_YEAR', TokenKind.LAST_FISCAL_YEAR],
    ['NEXT_FISCAL_YEAR', TokenKind.NEXT_FISCAL_YEAR],
  ];

  dateLiterals.forEach(([text, expectedKind]) => {
    it(`should recognize date literal "${text}"`, () => {
      const tokens = tokenize(text);
      expect(tokens[0].kind).toBe(expectedKind);
    });
  });
});

// ===========================================================================
// Date N literals
// ===========================================================================

describe('Lexer - date N literals', () => {
  const dateNLiterals: [string, TokenKind][] = [
    ['NEXT_N_DAYS', TokenKind.NEXT_N_DAYS],
    ['LAST_N_DAYS', TokenKind.LAST_N_DAYS],
    ['N_DAYS_AGO', TokenKind.N_DAYS_AGO],
    ['NEXT_N_WEEKS', TokenKind.NEXT_N_WEEKS],
    ['LAST_N_WEEKS', TokenKind.LAST_N_WEEKS],
    ['N_WEEKS_AGO', TokenKind.N_WEEKS_AGO],
    ['NEXT_N_MONTHS', TokenKind.NEXT_N_MONTHS],
    ['LAST_N_MONTHS', TokenKind.LAST_N_MONTHS],
    ['N_MONTHS_AGO', TokenKind.N_MONTHS_AGO],
    ['NEXT_N_QUARTERS', TokenKind.NEXT_N_QUARTERS],
    ['LAST_N_QUARTERS', TokenKind.LAST_N_QUARTERS],
    ['N_QUARTERS_AGO', TokenKind.N_QUARTERS_AGO],
    ['NEXT_N_YEARS', TokenKind.NEXT_N_YEARS],
    ['LAST_N_YEARS', TokenKind.LAST_N_YEARS],
    ['N_YEARS_AGO', TokenKind.N_YEARS_AGO],
    ['NEXT_N_FISCAL_QUARTERS', TokenKind.NEXT_N_FISCAL_QUARTERS],
    ['LAST_N_FISCAL_QUARTERS', TokenKind.LAST_N_FISCAL_QUARTERS],
    ['N_FISCAL_QUARTERS_AGO', TokenKind.N_FISCAL_QUARTERS_AGO],
    ['NEXT_N_FISCAL_YEARS', TokenKind.NEXT_N_FISCAL_YEARS],
    ['LAST_N_FISCAL_YEARS', TokenKind.LAST_N_FISCAL_YEARS],
    ['N_FISCAL_YEARS_AGO', TokenKind.N_FISCAL_YEARS_AGO],
  ];

  dateNLiterals.forEach(([text, expectedKind]) => {
    it(`should recognize date N literal "${text}"`, () => {
      const tokens = tokenize(text);
      expect(tokens[0].kind).toBe(expectedKind);
    });
  });

  it('should tokenize LAST_N_DAYS:365 as three tokens', () => {
    const tokens = tokenize('LAST_N_DAYS:365');
    expect(kinds(tokens)).toEqual([
      TokenKind.LAST_N_DAYS,
      TokenKind.COLON,
      TokenKind.UNSIGNED_INTEGER,
    ]);
  });
});

// ===========================================================================
// Functions
// ===========================================================================

describe('Lexer - function keywords', () => {
  it('should recognize date functions', () => {
    const dateFns = ['CALENDAR_MONTH', 'CALENDAR_QUARTER', 'CALENDAR_YEAR', 'DAY_IN_MONTH',
      'DAY_IN_WEEK', 'DAY_IN_YEAR', 'DAY_ONLY', 'FISCAL_MONTH', 'FISCAL_QUARTER',
      'FISCAL_YEAR', 'HOUR_IN_DAY', 'WEEK_IN_MONTH', 'WEEK_IN_YEAR'];
    dateFns.forEach(fn => {
      const tokens = tokenize(fn);
      expect(isDateFunction(tokens[0].kind)).toBe(true);
    });
  });

  it('should recognize aggregate functions', () => {
    const aggFns = ['AVG', 'COUNT', 'COUNT_DISTINCT', 'MIN', 'MAX', 'SUM'];
    aggFns.forEach(fn => {
      const tokens = tokenize(fn);
      expect(isAggregateFunction(tokens[0].kind)).toBe(true);
    });
  });

  it('should recognize location functions', () => {
    ['DISTANCE', 'GEOLOCATION'].forEach(fn => {
      const tokens = tokenize(fn);
      expect(isLocationFunction(tokens[0].kind)).toBe(true);
    });
  });

  it('should recognize FIELDS function', () => {
    const tokens = tokenize('FIELDS');
    expect(isFieldsFunction(tokens[0].kind)).toBe(true);
  });

  it('should recognize other functions', () => {
    ['FORMAT', 'TOLABEL', 'CONVERTTIMEZONE', 'CONVERTCURRENCY', 'GROUPING'].forEach(fn => {
      const tokens = tokenize(fn);
      expect(isOtherFunction(tokens[0].kind)).toBe(true);
    });
  });

  it('should recognize FIELDS function params', () => {
    ['ALL', 'CUSTOM', 'STANDARD'].forEach(fn => {
      const tokens = tokenize(fn);
      expect(isFieldsFunctionParam(tokens[0].kind)).toBe(true);
    });
  });
});

// ===========================================================================
// Using scope enumerations
// ===========================================================================

describe('Lexer - using scope enumerations', () => {
  const scopes: [string, TokenKind][] = [
    ['DELEGATED', TokenKind.DELEGATED],
    ['EVERYTHING', TokenKind.EVERYTHING],
    ['MINEANDMYGROUPS', TokenKind.MINE_AND_MY_GROUPS],
    ['MINE', TokenKind.MINE],
    ['MY_TERRITORY', TokenKind.MY_TERRITORY],
    ['MY_TEAM_TERRITORY', TokenKind.MY_TEAM_TERRITORY],
    ['TEAM', TokenKind.TEAM],
    ['ALLPRIVATE', TokenKind.ALL_PRIVATE],
    ['MRU', TokenKind.MRU],
  ];

  scopes.forEach(([text, expectedKind]) => {
    it(`should recognize scope "${text}"`, () => {
      const tokens = tokenize(text);
      expect(tokens[0].kind).toBe(expectedKind);
      expect(isUsingScopeEnumeration(tokens[0].kind)).toBe(true);
    });
  });
});

// ===========================================================================
// Identifiers
// ===========================================================================

describe('Lexer - identifiers', () => {
  it('should tokenize simple identifiers', () => {
    const tokens = tokenize('MyField');
    expect(tokens[0].kind).toBe(TokenKind.IDENTIFIER);
    expect(tokens[0].text).toBe('MyField');
  });

  it('should tokenize identifiers with underscores', () => {
    const tokens = tokenize('My_Field__c');
    expect(tokens[0].kind).toBe(TokenKind.IDENTIFIER);
    expect(tokens[0].text).toBe('My_Field__c');
  });

  it('should tokenize dotted identifiers as single token', () => {
    const tokens = tokenize('Contact.FirstName');
    expect(tokens[0].kind).toBe(TokenKind.IDENTIFIER);
    expect(tokens[0].text).toBe('Contact.FirstName');
  });

  it('should tokenize multi-level dotted identifiers', () => {
    const tokens = tokenize('Contact.Account.Name');
    expect(tokens[0].kind).toBe(TokenKind.IDENTIFIER);
    expect(tokens[0].text).toBe('Contact.Account.Name');
  });

  it('should reject identifiers with consecutive dots', () => {
    expect(() => tokenize('Contact..Name')).toThrow(/consecutive dots/);
  });

  it('should treat dotted keywords as identifiers', () => {
    // If a keyword-like word has a dot, it's an identifier
    const tokens = tokenize('Account.Name');
    expect(tokens[0].kind).toBe(TokenKind.IDENTIFIER);
    expect(tokens[0].text).toBe('Account.Name');
  });
});

// ===========================================================================
// Token positions (start offsets)
// ===========================================================================

describe('Lexer - token positions', () => {
  it('should record correct start positions', () => {
    const tokens = tokenize('SELECT Id FROM Account');
    expect(tokens[0].start).toBe(0);  // SELECT
    expect(tokens[1].start).toBe(7);  // Id
    expect(tokens[2].start).toBe(10); // FROM
    expect(tokens[3].start).toBe(15); // Account
  });

  it('should handle multiple spaces between tokens', () => {
    const tokens = tokenize('SELECT   Id');
    expect(tokens[0].start).toBe(0);
    expect(tokens[1].start).toBe(9);
  });
});

// ===========================================================================
// tokenTypeName
// ===========================================================================

describe('Lexer - tokenTypeName', () => {
  it('should return "Identifier" for IDENTIFIER', () => {
    expect(tokenTypeName(TokenKind.IDENTIFIER)).toBe('Identifier');
  });

  it('should return "StringIdentifier" for STRING_LITERAL', () => {
    expect(tokenTypeName(TokenKind.STRING_LITERAL)).toBe('StringIdentifier');
  });

  it('should return "DATE" for DATE_TOKEN', () => {
    expect(tokenTypeName(TokenKind.DATE_TOKEN)).toBe('DATE');
  });

  it('should return "toLabel" for TOLABEL', () => {
    expect(tokenTypeName(TokenKind.TOLABEL)).toBe('toLabel');
  });

  it('should return "convertTimezone" for CONVERT_TIMEZONE', () => {
    expect(tokenTypeName(TokenKind.CONVERT_TIMEZONE)).toBe('convertTimezone');
  });

  it('should return "convertCurrency" for CONVERT_CURRENCY', () => {
    expect(tokenTypeName(TokenKind.CONVERT_CURRENCY)).toBe('convertCurrency');
  });

  it('should return "DECIMAL" for DOT', () => {
    expect(tokenTypeName(TokenKind.DOT)).toBe('DECIMAL');
  });

  it('should return "new" for APEX_NEW', () => {
    expect(tokenTypeName(TokenKind.APEX_NEW)).toBe('new');
  });

  it('should return correct names for scope enumerations', () => {
    expect(tokenTypeName(TokenKind.MINE_AND_MY_GROUPS)).toBe('MineAndMyGroups');
    expect(tokenTypeName(TokenKind.MY_TERRITORY)).toBe('MyTerritory');
    expect(tokenTypeName(TokenKind.MY_TEAM_TERRITORY)).toBe('MyTeamTerritory');
    expect(tokenTypeName(TokenKind.ALL_PRIVATE)).toBe('AllPrivate');
    expect(tokenTypeName(TokenKind.DELEGATED)).toBe('Delegated');
    expect(tokenTypeName(TokenKind.EVERYTHING)).toBe('Everything');
    expect(tokenTypeName(TokenKind.MINE)).toBe('Mine');
    expect(tokenTypeName(TokenKind.TEAM)).toBe('Team');
    expect(tokenTypeName(TokenKind.MRU)).toBe('Mru');
  });
});

// ===========================================================================
// Category helper functions
// ===========================================================================

describe('Lexer - category helpers', () => {
  it('isIdentifierLike should return true for identifiers and non-reserved keywords', () => {
    expect(isIdentifierLike(TokenKind.IDENTIFIER)).toBe(true);
    expect(isIdentifierLike(TokenKind.ABOVE)).toBe(true);
    expect(isIdentifierLike(TokenKind.OFFSET)).toBe(true);
    expect(isIdentifierLike(TokenKind.CALENDAR_MONTH)).toBe(true);
    expect(isIdentifierLike(TokenKind.AVG)).toBe(true);
    expect(isIdentifierLike(TokenKind.DISTANCE)).toBe(true);
    expect(isIdentifierLike(TokenKind.FIELDS)).toBe(true);
    expect(isIdentifierLike(TokenKind.FORMAT)).toBe(true);
    expect(isIdentifierLike(TokenKind.ALL)).toBe(true);
    expect(isIdentifierLike(TokenKind.YESTERDAY)).toBe(true);
    expect(isIdentifierLike(TokenKind.NEXT_N_DAYS)).toBe(true);
    expect(isIdentifierLike(TokenKind.DELEGATED)).toBe(true);
    expect(isIdentifierLike(TokenKind.GEOLOCATION_UNIT)).toBe(true);
    expect(isIdentifierLike(TokenKind.CURRENCY_PREFIXED_INTEGER)).toBe(true);
  });

  it('isIdentifierLike should return false for reserved keywords and symbols', () => {
    expect(isIdentifierLike(TokenKind.SELECT)).toBe(false);
    expect(isIdentifierLike(TokenKind.FROM)).toBe(false);
    expect(isIdentifierLike(TokenKind.WHERE)).toBe(false);
    expect(isIdentifierLike(TokenKind.L_PAREN)).toBe(false);
    expect(isIdentifierLike(TokenKind.EQUAL)).toBe(false);
    expect(isIdentifierLike(TokenKind.EOF)).toBe(false);
  });

  it('isNumberLiteral should identify number types', () => {
    expect(isNumberLiteral(TokenKind.SIGNED_DECIMAL)).toBe(true);
    expect(isNumberLiteral(TokenKind.UNSIGNED_DECIMAL)).toBe(true);
    expect(isNumberLiteral(TokenKind.SIGNED_INTEGER)).toBe(true);
    expect(isNumberLiteral(TokenKind.UNSIGNED_INTEGER)).toBe(true);
    expect(isNumberLiteral(TokenKind.CURRENCY_PREFIXED_DECIMAL)).toBe(false);
    expect(isNumberLiteral(TokenKind.IDENTIFIER)).toBe(false);
  });

  it('isDecimalNumberLiteral should identify decimal types', () => {
    expect(isDecimalNumberLiteral(TokenKind.CURRENCY_PREFIXED_DECIMAL)).toBe(true);
    expect(isDecimalNumberLiteral(TokenKind.SIGNED_DECIMAL)).toBe(true);
    expect(isDecimalNumberLiteral(TokenKind.UNSIGNED_DECIMAL)).toBe(true);
    expect(isDecimalNumberLiteral(TokenKind.CURRENCY_PREFIXED_INTEGER)).toBe(true);
    expect(isDecimalNumberLiteral(TokenKind.UNSIGNED_INTEGER)).toBe(false);
  });

  it('isIntegerNumberLiteral should identify integer types', () => {
    expect(isIntegerNumberLiteral(TokenKind.SIGNED_INTEGER)).toBe(true);
    expect(isIntegerNumberLiteral(TokenKind.UNSIGNED_INTEGER)).toBe(true);
    expect(isIntegerNumberLiteral(TokenKind.SIGNED_DECIMAL)).toBe(false);
  });

  it('isRelationalOperator should identify operators', () => {
    expect(isRelationalOperator(TokenKind.EQUAL)).toBe(true);
    expect(isRelationalOperator(TokenKind.NOT_EQUAL)).toBe(true);
    expect(isRelationalOperator(TokenKind.LESS_THAN)).toBe(true);
    expect(isRelationalOperator(TokenKind.LESS_THAN_OR_EQUAL)).toBe(true);
    expect(isRelationalOperator(TokenKind.GREATER_THAN)).toBe(true);
    expect(isRelationalOperator(TokenKind.GREATER_THAN_OR_EQUAL)).toBe(true);
    expect(isRelationalOperator(TokenKind.L_PAREN)).toBe(false);
  });
});

// ===========================================================================
// Complex query tokenization
// ===========================================================================

describe('Lexer - complex queries', () => {
  it('should tokenize a WHERE clause with LIKE', () => {
    const tokens = tokenize("SELECT Id FROM Contact WHERE Name LIKE 'A%'");
    const k = kinds(tokens);
    expect(k).toEqual([
      TokenKind.SELECT, TokenKind.IDENTIFIER, TokenKind.FROM, TokenKind.IDENTIFIER,
      TokenKind.WHERE, TokenKind.IDENTIFIER, TokenKind.LIKE, TokenKind.STRING_LITERAL,
    ]);
  });

  it('should tokenize GROUP BY with aggregate', () => {
    const tokens = tokenize('SELECT LeadSource, COUNT(Name) FROM Lead GROUP BY LeadSource');
    const k = kinds(tokens);
    expect(k).toEqual([
      TokenKind.SELECT, TokenKind.IDENTIFIER, TokenKind.COMMA,
      TokenKind.COUNT, TokenKind.L_PAREN, TokenKind.IDENTIFIER, TokenKind.R_PAREN,
      TokenKind.FROM, TokenKind.IDENTIFIER,
      TokenKind.GROUP_BY, TokenKind.IDENTIFIER,
    ]);
  });

  it('should tokenize subquery', () => {
    const tokens = tokenize('SELECT Name, (SELECT LastName FROM Contacts) FROM Account');
    const k = kinds(tokens);
    expect(k).toEqual([
      TokenKind.SELECT, TokenKind.IDENTIFIER, TokenKind.COMMA,
      TokenKind.L_PAREN, TokenKind.SELECT, TokenKind.IDENTIFIER,
      TokenKind.FROM, TokenKind.IDENTIFIER, TokenKind.R_PAREN,
      TokenKind.FROM, TokenKind.IDENTIFIER,
    ]);
  });

  it('should tokenize ORDER BY with NULLS LAST', () => {
    const tokens = tokenize('SELECT Name FROM Account ORDER BY Name DESC NULLS LAST');
    const k = kinds(tokens);
    expect(k).toEqual([
      TokenKind.SELECT, TokenKind.IDENTIFIER, TokenKind.FROM, TokenKind.IDENTIFIER,
      TokenKind.ORDER_BY, TokenKind.IDENTIFIER, TokenKind.DESC, TokenKind.NULLS, TokenKind.LAST,
    ]);
  });

  it('should tokenize HAVING clause', () => {
    const tokens = tokenize('SELECT Name, COUNT(Id) FROM Account GROUP BY Name HAVING COUNT(Id) > 1');
    const k = kinds(tokens);
    expect(k).toEqual([
      TokenKind.SELECT, TokenKind.IDENTIFIER, TokenKind.COMMA,
      TokenKind.COUNT, TokenKind.L_PAREN, TokenKind.IDENTIFIER, TokenKind.R_PAREN,
      TokenKind.FROM, TokenKind.IDENTIFIER,
      TokenKind.GROUP_BY, TokenKind.IDENTIFIER,
      TokenKind.HAVING, TokenKind.COUNT, TokenKind.L_PAREN, TokenKind.IDENTIFIER, TokenKind.R_PAREN,
      TokenKind.GREATER_THAN, TokenKind.UNSIGNED_INTEGER,
    ]);
  });

  it('should tokenize DISTANCE with GEOLOCATION', () => {
    const tokens = tokenize("DISTANCE(Location, GEOLOCATION(37.775, -122.418), 'mi')");
    const k = kinds(tokens);
    expect(k).toEqual([
      TokenKind.DISTANCE, TokenKind.L_PAREN, TokenKind.IDENTIFIER, TokenKind.COMMA,
      TokenKind.GEOLOCATION, TokenKind.L_PAREN, TokenKind.UNSIGNED_DECIMAL, TokenKind.COMMA,
      TokenKind.SIGNED_DECIMAL, TokenKind.R_PAREN, TokenKind.COMMA,
      TokenKind.GEOLOCATION_UNIT, TokenKind.R_PAREN,
    ]);
  });

  it('should tokenize WITH SECURITY_ENFORCED', () => {
    const tokens = tokenize('SELECT Name FROM Account WITH SECURITY_ENFORCED');
    const k = kinds(tokens);
    expect(k).toEqual([
      TokenKind.SELECT, TokenKind.IDENTIFIER, TokenKind.FROM, TokenKind.IDENTIFIER,
      TokenKind.WITH, TokenKind.SECURITY_ENFORCED,
    ]);
  });

  it('should tokenize FOR VIEW / FOR REFERENCE / FOR UPDATE', () => {
    const tokens1 = tokenize('FOR VIEW');
    expect(kinds(tokens1)).toEqual([TokenKind.FOR, TokenKind.VIEW]);

    const tokens2 = tokenize('FOR REFERENCE');
    expect(kinds(tokens2)).toEqual([TokenKind.FOR, TokenKind.REFERENCE]);

    const tokens3 = tokenize('FOR UPDATE');
    expect(kinds(tokens3)).toEqual([TokenKind.FOR, TokenKind.UPDATE]);
  });

  it('should tokenize TYPEOF ... WHEN ... THEN ... ELSE ... END', () => {
    const tokens = tokenize('TYPEOF What WHEN Account THEN Phone ELSE Name END');
    const k = kinds(tokens);
    expect(k).toEqual([
      TokenKind.TYPEOF, TokenKind.IDENTIFIER,
      TokenKind.WHEN, TokenKind.IDENTIFIER, TokenKind.THEN, TokenKind.IDENTIFIER,
      TokenKind.ELSE, TokenKind.IDENTIFIER, TokenKind.END,
    ]);
  });

  it('should tokenize USING SCOPE', () => {
    const tokens = tokenize('USING SCOPE MINE');
    const k = kinds(tokens);
    expect(k).toEqual([TokenKind.USING, TokenKind.SCOPE, TokenKind.MINE]);
  });

  it('should tokenize ROLLUP', () => {
    const tokens = tokenize('GROUP BY ROLLUP(Status, LeadSource)');
    const k = kinds(tokens);
    expect(k).toEqual([
      TokenKind.GROUP_BY, TokenKind.ROLLUP, TokenKind.L_PAREN,
      TokenKind.IDENTIFIER, TokenKind.COMMA, TokenKind.IDENTIFIER,
      TokenKind.R_PAREN,
    ]);
  });

  it('should tokenize FORMAT(MIN(closedate))', () => {
    const tokens = tokenize('FORMAT(MIN(closedate))');
    const k = kinds(tokens);
    expect(k).toEqual([
      TokenKind.FORMAT, TokenKind.L_PAREN,
      TokenKind.MIN, TokenKind.L_PAREN, TokenKind.IDENTIFIER, TokenKind.R_PAREN,
      TokenKind.R_PAREN,
    ]);
  });

  it('should tokenize convertCurrency and convertTimezone', () => {
    const tokens1 = tokenize('convertCurrency(amount)');
    expect(tokens1[0].kind).toBe(TokenKind.CONVERT_CURRENCY);

    const tokens2 = tokenize('convertTimezone(CreatedDate)');
    expect(tokens2[0].kind).toBe(TokenKind.CONVERT_TIMEZONE);
  });

  it('should tokenize DATA CATEGORY with AT and ABOVE_OR_BELOW', () => {
    const tokens = tokenize('WITH DATA CATEGORY Product__c AT mobile_phones__c');
    const k = kinds(tokens);
    expect(k).toEqual([
      TokenKind.WITH, TokenKind.DATA_CATEGORY,
      TokenKind.IDENTIFIER, TokenKind.AT, TokenKind.IDENTIFIER,
    ]);
  });

  it('should tokenize datetime in WHERE clause', () => {
    const tokens = tokenize('WHERE LoginTime > 2010-09-20T22:16:30.000Z AND LoginTime < 2010-09-21');
    const k = kinds(tokens);
    expect(k).toEqual([
      TokenKind.WHERE, TokenKind.IDENTIFIER, TokenKind.GREATER_THAN, TokenKind.DATETIME,
      TokenKind.AND, TokenKind.IDENTIFIER, TokenKind.LESS_THAN, TokenKind.DATE_TOKEN,
    ]);
  });

  it('should tokenize INCLUDES/EXCLUDES', () => {
    const tokens = tokenize("WHERE BillingState INCLUDES ('California','New York')");
    const k = kinds(tokens);
    expect(k).toEqual([
      TokenKind.WHERE, TokenKind.IDENTIFIER, TokenKind.INCLUDES,
      TokenKind.L_PAREN, TokenKind.STRING_LITERAL, TokenKind.COMMA, TokenKind.STRING_LITERAL, TokenKind.R_PAREN,
    ]);
  });

  it('should tokenize WITH USER_MODE and SYSTEM_MODE', () => {
    const t1 = tokenize('WITH USER_MODE');
    expect(kinds(t1)).toEqual([TokenKind.WITH, TokenKind.USER_MODE]);

    const t2 = tokenize('WITH SYSTEM_MODE');
    expect(kinds(t2)).toEqual([TokenKind.WITH, TokenKind.SYSTEM_MODE]);
  });
});

// ===========================================================================
// Edge cases
// ===========================================================================

describe('Lexer - edge cases', () => {
  it('should handle COUNT() with no space before FROM', () => {
    const tokens = tokenize('SELECT COUNT()FROM Contact');
    const k = kinds(tokens);
    expect(k).toEqual([
      TokenKind.SELECT, TokenKind.COUNT, TokenKind.L_PAREN, TokenKind.R_PAREN,
      TokenKind.FROM, TokenKind.IDENTIFIER,
    ]);
  });

  it('should throw on unexpected character', () => {
    expect(() => tokenize('SELECT ~ FROM Account')).toThrow();
  });

  it('should throw on lone !', () => {
    expect(() => tokenize('!')).toThrow(/Unexpected character/);
  });

  it('should tokenize query with tabs and newlines', () => {
    const tokens = tokenize('SELECT\n\tId\n\tFROM\n\tAccount');
    expect(kinds(tokens)).toEqual([
      TokenKind.SELECT, TokenKind.IDENTIFIER, TokenKind.FROM, TokenKind.IDENTIFIER,
    ]);
  });

  it('should handle multiple commas and parens', () => {
    const tokens = tokenize('(a, b, c)');
    expect(kinds(tokens)).toEqual([
      TokenKind.L_PAREN, TokenKind.IDENTIFIER, TokenKind.COMMA,
      TokenKind.IDENTIFIER, TokenKind.COMMA, TokenKind.IDENTIFIER,
      TokenKind.R_PAREN,
    ]);
  });

  it('should handle semicolons', () => {
    const tokens = tokenize('SELECT Id FROM Account;');
    expect(tokens[tokens.length - 2].kind).toBe(TokenKind.SEMICOLON);
  });

  it('should handle FIELDS(ALL)', () => {
    const tokens = tokenize('FIELDS(ALL)');
    expect(kinds(tokens)).toEqual([
      TokenKind.FIELDS, TokenKind.L_PAREN, TokenKind.ALL, TokenKind.R_PAREN,
    ]);
  });

  it('should handle FIELDS(CUSTOM)', () => {
    const tokens = tokenize('FIELDS(CUSTOM)');
    expect(kinds(tokens)).toEqual([
      TokenKind.FIELDS, TokenKind.L_PAREN, TokenKind.CUSTOM, TokenKind.R_PAREN,
    ]);
  });

  it('should handle FIELDS(STANDARD)', () => {
    const tokens = tokenize('FIELDS(STANDARD)');
    expect(kinds(tokens)).toEqual([
      TokenKind.FIELDS, TokenKind.L_PAREN, TokenKind.STANDARD, TokenKind.R_PAREN,
    ]);
  });

  it('should tokenize SELECT * FROM Account', () => {
    const tokens = tokenize('SELECT * FROM Account');
    expect(kinds(tokens)).toEqual([
      TokenKind.SELECT, TokenKind.ASTERISK, TokenKind.FROM, TokenKind.IDENTIFIER,
    ]);
  });

  it('should handle dotted relationship paths with __r', () => {
    const tokens = tokenize('Mother_of_Child__r.FirstName__c');
    expect(tokens[0].kind).toBe(TokenKind.IDENTIFIER);
    expect(tokens[0].text).toBe('Mother_of_Child__r.FirstName__c');
  });
});

// ===========================================================================
// Integration: all parser test case queries should tokenize without error
// ===========================================================================

describe('Lexer - parser test case queries tokenize without error', () => {
  parserTestCases.forEach(tc => {
    it(`test case ${tc.testCase}: ${tc.soql.substring(0, 60)}${tc.soql.length > 60 ? '...' : ''}`, () => {
      const tokens = tokenize(tc.soql);
      // Should always end with EOF
      expect(tokens.length).toBeGreaterThanOrEqual(1);
      expect(tokens[tokens.length - 1].kind).toBe(TokenKind.EOF);
      // Should have at least SELECT token
      expect(tokens[0].kind).toBe(TokenKind.SELECT);
    });
  });
});

// ===========================================================================
// Integration: valid queries from is-valid test cases should tokenize
// ===========================================================================

describe('Lexer - valid query test cases tokenize without error', () => {
  const validCases = validationTestCases.filter(tc => tc.isValid);
  validCases.forEach(tc => {
    it(`valid test case ${tc.testCase}: ${tc.soql.trim().substring(0, 60)}${tc.soql.trim().length > 60 ? '...' : ''}`, () => {
      const tokens = tokenize(tc.soql);
      expect(tokens.length).toBeGreaterThanOrEqual(1);
      expect(tokens[tokens.length - 1].kind).toBe(TokenKind.EOF);
    });
  });
});

// ===========================================================================
// Integration: invalid queries - lexer should either tokenize or throw
// (lexer-level errors are distinct from parser-level errors)
// ===========================================================================

describe('Lexer - invalid query test cases should not hang or crash unexpectedly', () => {
  const invalidCases = validationTestCases.filter(tc => !tc.isValid);
  invalidCases.forEach(tc => {
    it(`invalid test case ${tc.testCase}: ${tc.soql.trim().substring(0, 60)}${tc.soql.trim().length > 60 ? '...' : ''}`, () => {
      // Invalid queries may still tokenize fine at the lexer level
      // (e.g., "SELECT FROM Account" is valid tokens but invalid syntax)
      // Or they may throw if they contain invalid characters
      try {
        const tokens = tokenize(tc.soql);
        // If it succeeds, that's fine - it's a parser-level error
        expect(tokens[tokens.length - 1].kind).toBe(TokenKind.EOF);
      } catch (e) {
        // Lexer-level errors are also acceptable for invalid queries
        expect(e).toBeInstanceOf(Error);
      }
    });
  });
});
