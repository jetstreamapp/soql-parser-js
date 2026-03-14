// Hand-rolled SOQL lexer - replaces chevrotain-based lexer

// ---------------------------------------------------------------------------
// TokenKind enum
// Members are grouped contiguously so that category helpers can use range checks.
// ---------------------------------------------------------------------------
export enum TokenKind {
  // ---- Reserved keywords (0-29) ----
  AND,
  AS,
  ASC,
  DESC,
  CUBE,
  ELSE,
  EXCLUDES,
  FALSE,
  FIRST,
  FROM,
  GROUP_BY,
  HAVING,
  IN,
  INCLUDES,
  LAST,
  LIKE,
  LIMIT,
  NOT,
  NULL,
  NULLS,
  OR,
  ORDER_BY,
  ROLLUP,
  SELECT,
  TRUE,
  USING,
  WHERE,
  WITH,
  FOR,
  UPDATE,

  // ---- Non-reserved keywords (can also be identifiers) ----
  ABOVE,
  ABOVE_OR_BELOW,
  APEX_NEW,
  AT,
  BELOW,
  DATA_CATEGORY,
  END,
  OFFSET,
  REFERENCE,
  SCOPE,
  TRACKING,
  THEN,
  TYPEOF,
  VIEW,
  VIEWSTAT,
  WHEN,
  SECURITY_ENFORCED,
  SYSTEM_MODE,
  USER_MODE,

  // ---- Date functions ----
  CALENDAR_MONTH,
  CALENDAR_QUARTER,
  CALENDAR_YEAR,
  DAY_IN_MONTH,
  DAY_IN_WEEK,
  DAY_IN_YEAR,
  DAY_ONLY,
  FISCAL_MONTH,
  FISCAL_QUARTER,
  FISCAL_YEAR,
  HOUR_IN_DAY,
  WEEK_IN_MONTH,
  WEEK_IN_YEAR,

  // ---- Aggregate functions ----
  AVG,
  COUNT,
  COUNT_DISTINCT,
  MIN,
  MAX,
  SUM,

  // ---- Location functions ----
  DISTANCE,
  GEOLOCATION,

  // ---- Fields function ----
  FIELDS,

  // ---- Other functions ----
  FORMAT,
  TOLABEL,
  CONVERT_TIMEZONE,
  CONVERT_CURRENCY,
  GROUPING,

  // ---- Fields function params ----
  ALL,
  CUSTOM,
  STANDARD,

  // ---- Date literals (fixed) ----
  YESTERDAY,
  TODAY,
  TOMORROW,
  LAST_WEEK,
  THIS_WEEK,
  NEXT_WEEK,
  LAST_MONTH,
  THIS_MONTH,
  NEXT_MONTH,
  LAST_90_DAYS,
  NEXT_90_DAYS,
  THIS_QUARTER,
  LAST_QUARTER,
  NEXT_QUARTER,
  THIS_YEAR,
  LAST_YEAR,
  NEXT_YEAR,
  THIS_FISCAL_QUARTER,
  LAST_FISCAL_QUARTER,
  NEXT_FISCAL_QUARTER,
  THIS_FISCAL_YEAR,
  LAST_FISCAL_YEAR,
  NEXT_FISCAL_YEAR,

  // ---- Date N literals ----
  NEXT_N_DAYS,
  LAST_N_DAYS,
  N_DAYS_AGO,
  NEXT_N_WEEKS,
  LAST_N_WEEKS,
  N_WEEKS_AGO,
  NEXT_N_MONTHS,
  LAST_N_MONTHS,
  N_MONTHS_AGO,
  NEXT_N_QUARTERS,
  LAST_N_QUARTERS,
  N_QUARTERS_AGO,
  NEXT_N_YEARS,
  LAST_N_YEARS,
  N_YEARS_AGO,
  NEXT_N_FISCAL_QUARTERS,
  LAST_N_FISCAL_QUARTERS,
  N_FISCAL_QUARTERS_AGO,
  NEXT_N_FISCAL_YEARS,
  LAST_N_FISCAL_YEARS,
  N_FISCAL_YEARS_AGO,

  // ---- Using scope enumerations ----
  DELEGATED,
  EVERYTHING,
  MINE_AND_MY_GROUPS,
  MINE,
  MY_TERRITORY,
  MY_TEAM_TERRITORY,
  TEAM,
  ALL_PRIVATE,
  MRU,

  // ---- Operators ----
  EQUAL,
  NOT_EQUAL,
  LESS_THAN,
  LESS_THAN_OR_EQUAL,
  GREATER_THAN,
  GREATER_THAN_OR_EQUAL,

  // ---- Symbols ----
  L_PAREN,
  R_PAREN,
  L_SQUARE_BRACKET,
  R_SQUARE_BRACKET,
  DOT,
  COMMA,
  COLON,
  SEMICOLON,
  ASTERISK,
  PLUS,
  MINUS,

  // ---- Literals / Identifiers ----
  DATETIME,
  DATE_TOKEN,
  CURRENCY_PREFIXED_DECIMAL,
  CURRENCY_PREFIXED_INTEGER,
  SIGNED_DECIMAL,
  UNSIGNED_DECIMAL,
  SIGNED_INTEGER,
  UNSIGNED_INTEGER,
  STRING_LITERAL,
  GEOLOCATION_UNIT,
  IDENTIFIER,
  EOF,
}

// ---------------------------------------------------------------------------
// Token interface
// ---------------------------------------------------------------------------
export interface Token {
  kind: TokenKind;
  text: string;
  start: number;
}

// ---------------------------------------------------------------------------
// Category helper functions
// ---------------------------------------------------------------------------

export function isDateFunction(kind: TokenKind): boolean {
  return kind >= TokenKind.CALENDAR_MONTH && kind <= TokenKind.WEEK_IN_YEAR;
}

export function isAggregateFunction(kind: TokenKind): boolean {
  return kind >= TokenKind.AVG && kind <= TokenKind.SUM;
}

export function isLocationFunction(kind: TokenKind): boolean {
  return kind >= TokenKind.DISTANCE && kind <= TokenKind.GEOLOCATION;
}

export function isFieldsFunction(kind: TokenKind): boolean {
  return kind === TokenKind.FIELDS;
}

export function isOtherFunction(kind: TokenKind): boolean {
  return kind >= TokenKind.FORMAT && kind <= TokenKind.GROUPING;
}

export function isFieldsFunctionParam(kind: TokenKind): boolean {
  return kind >= TokenKind.ALL && kind <= TokenKind.STANDARD;
}

export function isDateLiteral(kind: TokenKind): boolean {
  return kind >= TokenKind.YESTERDAY && kind <= TokenKind.NEXT_FISCAL_YEAR;
}

export function isDateNLiteral(kind: TokenKind): boolean {
  return kind >= TokenKind.NEXT_N_DAYS && kind <= TokenKind.N_FISCAL_YEARS_AGO;
}

export function isUsingScopeEnumeration(kind: TokenKind): boolean {
  return kind >= TokenKind.DELEGATED && kind <= TokenKind.MRU;
}

export function isIdentifierLike(kind: TokenKind): boolean {
  if (kind === TokenKind.IDENTIFIER) return true;
  // Non-reserved keywords
  if (kind >= TokenKind.ABOVE && kind <= TokenKind.USER_MODE) return true;
  // Date functions
  if (kind >= TokenKind.CALENDAR_MONTH && kind <= TokenKind.WEEK_IN_YEAR) return true;
  // Aggregate functions
  if (kind >= TokenKind.AVG && kind <= TokenKind.SUM) return true;
  // Location functions
  if (kind >= TokenKind.DISTANCE && kind <= TokenKind.GEOLOCATION) return true;
  // Fields function
  if (kind === TokenKind.FIELDS) return true;
  // Other functions
  if (kind >= TokenKind.FORMAT && kind <= TokenKind.GROUPING) return true;
  // Fields function params
  if (kind >= TokenKind.ALL && kind <= TokenKind.STANDARD) return true;
  // Date literals
  if (kind >= TokenKind.YESTERDAY && kind <= TokenKind.NEXT_FISCAL_YEAR) return true;
  // Date N literals
  if (kind >= TokenKind.NEXT_N_DAYS && kind <= TokenKind.N_FISCAL_YEARS_AGO) return true;
  // Using scope enumerations
  if (kind >= TokenKind.DELEGATED && kind <= TokenKind.MRU) return true;
  // Geolocation unit
  if (kind === TokenKind.GEOLOCATION_UNIT) return true;
  // Currency prefixed integer (was in Identifier category in chevrotain lexer)
  if (kind === TokenKind.CURRENCY_PREFIXED_INTEGER) return true;
  return false;
}

export function isNumberLiteral(kind: TokenKind): boolean {
  return (
    kind === TokenKind.SIGNED_DECIMAL ||
    kind === TokenKind.UNSIGNED_DECIMAL ||
    kind === TokenKind.SIGNED_INTEGER ||
    kind === TokenKind.UNSIGNED_INTEGER
  );
}

export function isDecimalNumberLiteral(kind: TokenKind): boolean {
  return (
    kind === TokenKind.CURRENCY_PREFIXED_DECIMAL ||
    kind === TokenKind.SIGNED_DECIMAL ||
    kind === TokenKind.UNSIGNED_DECIMAL ||
    kind === TokenKind.CURRENCY_PREFIXED_INTEGER
  );
}

export function isIntegerNumberLiteral(kind: TokenKind): boolean {
  return kind === TokenKind.SIGNED_INTEGER || kind === TokenKind.UNSIGNED_INTEGER;
}

export function isRelationalOperator(kind: TokenKind): boolean {
  return kind >= TokenKind.EQUAL && kind <= TokenKind.GREATER_THAN_OR_EQUAL;
}

// ---------------------------------------------------------------------------
// Keyword map (upper-case key -> TokenKind)
// ---------------------------------------------------------------------------
const keywordMap = new Map<string, TokenKind>([
  // Reserved keywords
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

  // Non-reserved keywords
  ['ABOVE_OR_BELOW', TokenKind.ABOVE_OR_BELOW],
  ['ABOVE', TokenKind.ABOVE],
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

  // Date functions
  ['CALENDAR_MONTH', TokenKind.CALENDAR_MONTH],
  ['CALENDAR_QUARTER', TokenKind.CALENDAR_QUARTER],
  ['CALENDAR_YEAR', TokenKind.CALENDAR_YEAR],
  ['DAY_IN_MONTH', TokenKind.DAY_IN_MONTH],
  ['DAY_IN_WEEK', TokenKind.DAY_IN_WEEK],
  ['DAY_IN_YEAR', TokenKind.DAY_IN_YEAR],
  ['DAY_ONLY', TokenKind.DAY_ONLY],
  ['FISCAL_MONTH', TokenKind.FISCAL_MONTH],
  ['FISCAL_QUARTER', TokenKind.FISCAL_QUARTER],
  ['FISCAL_YEAR', TokenKind.FISCAL_YEAR],
  ['HOUR_IN_DAY', TokenKind.HOUR_IN_DAY],
  ['WEEK_IN_MONTH', TokenKind.WEEK_IN_MONTH],
  ['WEEK_IN_YEAR', TokenKind.WEEK_IN_YEAR],

  // Aggregate functions
  ['AVG', TokenKind.AVG],
  ['COUNT_DISTINCT', TokenKind.COUNT_DISTINCT],
  ['COUNT', TokenKind.COUNT],
  ['MIN', TokenKind.MIN],
  ['MAX', TokenKind.MAX],
  ['SUM', TokenKind.SUM],

  // Location functions
  ['DISTANCE', TokenKind.DISTANCE],
  ['GEOLOCATION', TokenKind.GEOLOCATION],

  // Fields function
  ['FIELDS', TokenKind.FIELDS],

  // Other functions
  ['FORMAT', TokenKind.FORMAT],
  ['TOLABEL', TokenKind.TOLABEL],
  ['CONVERTTIMEZONE', TokenKind.CONVERT_TIMEZONE],
  ['CONVERTCURRENCY', TokenKind.CONVERT_CURRENCY],
  ['GROUPING', TokenKind.GROUPING],

  // Fields function params
  ['ALL', TokenKind.ALL],
  ['CUSTOM', TokenKind.CUSTOM],
  ['STANDARD', TokenKind.STANDARD],

  // Date literals
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

  // Date N literals
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

  // Using scope enumerations
  ['DELEGATED', TokenKind.DELEGATED],
  ['EVERYTHING', TokenKind.EVERYTHING],
  ['MINEANDMYGROUPS', TokenKind.MINE_AND_MY_GROUPS],
  ['MINE', TokenKind.MINE],
  ['MY_TERRITORY', TokenKind.MY_TERRITORY],
  ['MY_TEAM_TERRITORY', TokenKind.MY_TEAM_TERRITORY],
  ['TEAM', TokenKind.TEAM],
  ['ALLPRIVATE', TokenKind.ALL_PRIVATE],
  ['MRU', TokenKind.MRU],
]);

// ---------------------------------------------------------------------------
// tokenTypeName - maps TokenKind to the chevrotain-compatible name string
// ---------------------------------------------------------------------------
const _tokenTypeNames: string[] = [];

// Build the name table from enum names, with overrides for specific tokens
(function initTokenTypeNames() {
  // Default: use the enum member name
  for (const key of Object.keys(TokenKind)) {
    const val = (TokenKind as any)[key];
    if (typeof val === 'number') {
      _tokenTypeNames[val] = key;
    }
  }

  // Overrides to match chevrotain token type names exactly
  _tokenTypeNames[TokenKind.TOLABEL] = 'toLabel';
  _tokenTypeNames[TokenKind.CONVERT_TIMEZONE] = 'convertTimezone';
  _tokenTypeNames[TokenKind.CONVERT_CURRENCY] = 'convertCurrency';
  _tokenTypeNames[TokenKind.STRING_LITERAL] = 'StringIdentifier';
  _tokenTypeNames[TokenKind.DATE_TOKEN] = 'DATE';
  _tokenTypeNames[TokenKind.APEX_NEW] = 'new';
  _tokenTypeNames[TokenKind.MINE_AND_MY_GROUPS] = 'MineAndMyGroups';
  _tokenTypeNames[TokenKind.MY_TERRITORY] = 'MyTerritory';
  _tokenTypeNames[TokenKind.MY_TEAM_TERRITORY] = 'MyTeamTerritory';
  _tokenTypeNames[TokenKind.ALL_PRIVATE] = 'AllPrivate';
  _tokenTypeNames[TokenKind.DELEGATED] = 'Delegated';
  _tokenTypeNames[TokenKind.EVERYTHING] = 'Everything';
  _tokenTypeNames[TokenKind.MINE] = 'Mine';
  _tokenTypeNames[TokenKind.TEAM] = 'Team';
  _tokenTypeNames[TokenKind.MRU] = 'Mru';
  _tokenTypeNames[TokenKind.IDENTIFIER] = 'Identifier';
  _tokenTypeNames[TokenKind.DOT] = 'DECIMAL';
  _tokenTypeNames[TokenKind.EQUAL] = 'EQUAL';
  _tokenTypeNames[TokenKind.UNSIGNED_INTEGER] = 'UNSIGNED_INTEGER';
  _tokenTypeNames[TokenKind.SIGNED_INTEGER] = 'SIGNED_INTEGER';
  _tokenTypeNames[TokenKind.UNSIGNED_DECIMAL] = 'UNSIGNED_DECIMAL';
  _tokenTypeNames[TokenKind.SIGNED_DECIMAL] = 'SIGNED_DECIMAL';
  _tokenTypeNames[TokenKind.CURRENCY_PREFIXED_DECIMAL] = 'CURRENCY_PREFIXED_DECIMAL';
  _tokenTypeNames[TokenKind.CURRENCY_PREFIXED_INTEGER] = 'CURRENCY_PREFIXED_INTEGER';
})();

export function tokenTypeName(kind: TokenKind): string {
  return _tokenTypeNames[kind] || TokenKind[kind];
}

// ---------------------------------------------------------------------------
// Character classification helpers
// ---------------------------------------------------------------------------
function isAlpha(ch: number): boolean {
  return (ch >= 65 && ch <= 90) || (ch >= 97 && ch <= 122); // A-Z or a-z
}

function isDigit(ch: number): boolean {
  return ch >= 48 && ch <= 57; // 0-9
}

function isAlphaNumOrUnderscore(ch: number): boolean {
  return isAlpha(ch) || isDigit(ch) || ch === 95; // _ = 95
}

function isWhitespace(ch: number): boolean {
  return ch === 32 || ch === 9 || ch === 10 || ch === 13 || ch === 12; // space, tab, LF, CR, FF
}

// ---------------------------------------------------------------------------
// tokenize
// ---------------------------------------------------------------------------
export function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  const len = input.length;
  let pos = 0;

  while (pos < len) {
    const ch = input.charCodeAt(pos);

    // 1. Skip whitespace
    if (isWhitespace(ch)) {
      pos++;
      while (pos < len && isWhitespace(input.charCodeAt(pos))) {
        pos++;
      }
      continue;
    }

    // 2. String literal: '...' with backslash escape handling
    if (ch === 39) {
      // single quote
      const start = pos;
      pos++; // skip opening quote
      while (pos < len) {
        const c = input.charCodeAt(pos);
        if (c === 92) {
          // backslash - skip next character
          pos += 2;
          continue;
        }
        if (c === 39) {
          // closing quote
          pos++;
          break;
        }
        pos++;
      }
      const text = input.substring(start, pos);
      // Check for GEOLOCATION_UNIT: content is exactly 'mi' or 'km'
      const inner = text.substring(1, text.length - 1);
      const innerUpper = inner.toUpperCase();
      if (innerUpper === 'MI' || innerUpper === 'KM') {
        tokens.push({ kind: TokenKind.GEOLOCATION_UNIT, text, start });
      } else {
        tokens.push({ kind: TokenKind.STRING_LITERAL, text, start });
      }
      continue;
    }

    // 3. Check for DateTime/Date (starts with a digit, could be date/datetime or number)
    if (isDigit(ch)) {
      // Try to match datetime or date pattern: YYYY-MM-DD...
      if (pos + 9 < len && input.charCodeAt(pos + 4) === 45 && input.charCodeAt(pos + 7) === 45) {
        // Looks like it could be YYYY-MM-DD
        // Verify all digit positions
        let isDatePattern = true;
        for (const off of [0, 1, 2, 3, 5, 6, 8, 9]) {
          if (!isDigit(input.charCodeAt(pos + off))) {
            isDatePattern = false;
            break;
          }
        }

        if (isDatePattern) {
          // Check if it's a DateTime (has 'T' at pos+10)
          if (pos + 10 < len && (input.charCodeAt(pos + 10) === 84 || input.charCodeAt(pos + 10) === 116)) {
            // DateTime: YYYY-MM-DDTHH:MM:SS with optional fractional seconds and timezone
            const start = pos;
            pos += 11; // past the T
            // Match HH:MM:SS
            // Consume digits and colons for the time part
            while (pos < len) {
              const tc = input.charCodeAt(pos);
              if (isDigit(tc) || tc === 58) {
                // colon = 58
                pos++;
              } else {
                break;
              }
            }
            // Optional fractional seconds: .digits
            if (pos < len && input.charCodeAt(pos) === 46) {
              pos++;
              while (pos < len && isDigit(input.charCodeAt(pos))) {
                pos++;
              }
            }
            // Optional timezone: Z, +HH:MM, -HH:MM, +HHMM, -HHMM, or .digitsZ
            if (pos < len) {
              const tzCh = input.charCodeAt(pos);
              if (tzCh === 90 || tzCh === 122) {
                // Z or z
                pos++;
              } else if (tzCh === 46) {
                // .digitsZ
                pos++;
                while (pos < len && isDigit(input.charCodeAt(pos))) {
                  pos++;
                }
                if (pos < len && (input.charCodeAt(pos) === 90 || input.charCodeAt(pos) === 122)) {
                  pos++;
                }
              } else if (tzCh === 43 || tzCh === 45) {
                // + or -
                pos++;
                // Consume digits and optional colon: HH:MM or HHMM
                while (pos < len) {
                  const dc = input.charCodeAt(pos);
                  if (isDigit(dc) || dc === 58) {
                    pos++;
                  } else {
                    break;
                  }
                }
              }
            }
            tokens.push({ kind: TokenKind.DATETIME, text: input.substring(start, pos), start });
            continue;
          } else {
            // Date: YYYY-MM-DD
            const start = pos;
            pos += 10;
            tokens.push({ kind: TokenKind.DATE_TOKEN, text: input.substring(start, pos), start });
            continue;
          }
        }
      }

      // Number starting with digit: unsigned integer or decimal
      const start = pos;
      while (pos < len && isDigit(input.charCodeAt(pos))) {
        pos++;
      }
      // Check for decimal point
      if (pos < len && input.charCodeAt(pos) === 46) {
        // Could be decimal - check next char is a digit
        if (pos + 1 < len && isDigit(input.charCodeAt(pos + 1))) {
          pos++; // skip dot
          while (pos < len && isDigit(input.charCodeAt(pos))) {
            pos++;
          }
          tokens.push({ kind: TokenKind.UNSIGNED_DECIMAL, text: input.substring(start, pos), start });
          continue;
        }
      }
      tokens.push({ kind: TokenKind.UNSIGNED_INTEGER, text: input.substring(start, pos), start });
      continue;
    }

    // 4. Multi-char and single-char operators/symbols
    if (ch === 33) {
      // !
      if (pos + 1 < len && input.charCodeAt(pos + 1) === 61) {
        // !=
        tokens.push({ kind: TokenKind.NOT_EQUAL, text: '!=', start: pos });
        pos += 2;
        continue;
      }
      throw new Error(`Unexpected character '!' at position ${pos}`);
    }

    if (ch === 60) {
      // <
      if (pos + 1 < len) {
        const next = input.charCodeAt(pos + 1);
        if (next === 61) {
          // <=
          tokens.push({ kind: TokenKind.LESS_THAN_OR_EQUAL, text: '<=', start: pos });
          pos += 2;
          continue;
        }
        if (next === 62) {
          // <>
          tokens.push({ kind: TokenKind.NOT_EQUAL, text: '<>', start: pos });
          pos += 2;
          continue;
        }
      }
      tokens.push({ kind: TokenKind.LESS_THAN, text: '<', start: pos });
      pos++;
      continue;
    }

    if (ch === 62) {
      // >
      if (pos + 1 < len && input.charCodeAt(pos + 1) === 61) {
        // >=
        tokens.push({ kind: TokenKind.GREATER_THAN_OR_EQUAL, text: '>=', start: pos });
        pos += 2;
        continue;
      }
      tokens.push({ kind: TokenKind.GREATER_THAN, text: '>', start: pos });
      pos++;
      continue;
    }

    if (ch === 61) {
      // =
      tokens.push({ kind: TokenKind.EQUAL, text: '=', start: pos });
      pos++;
      continue;
    }

    if (ch === 40) {
      tokens.push({ kind: TokenKind.L_PAREN, text: '(', start: pos });
      pos++;
      continue;
    }
    if (ch === 41) {
      tokens.push({ kind: TokenKind.R_PAREN, text: ')', start: pos });
      pos++;
      continue;
    }
    if (ch === 91) {
      tokens.push({ kind: TokenKind.L_SQUARE_BRACKET, text: '[', start: pos });
      pos++;
      continue;
    }
    if (ch === 93) {
      tokens.push({ kind: TokenKind.R_SQUARE_BRACKET, text: ']', start: pos });
      pos++;
      continue;
    }
    if (ch === 44) {
      tokens.push({ kind: TokenKind.COMMA, text: ',', start: pos });
      pos++;
      continue;
    }
    if (ch === 58) {
      tokens.push({ kind: TokenKind.COLON, text: ':', start: pos });
      pos++;
      continue;
    }
    if (ch === 59) {
      tokens.push({ kind: TokenKind.SEMICOLON, text: ';', start: pos });
      pos++;
      continue;
    }
    if (ch === 42) {
      tokens.push({ kind: TokenKind.ASTERISK, text: '*', start: pos });
      pos++;
      continue;
    }

    // + and - : could be sign for a number, or standalone symbol
    if (ch === 43 || ch === 45) {
      // Check if followed by digits (signed number)
      if (pos + 1 < len) {
        const nextCh = input.charCodeAt(pos + 1);
        if (isDigit(nextCh)) {
          // Signed number
          const start = pos;
          pos++; // skip sign
          while (pos < len && isDigit(input.charCodeAt(pos))) {
            pos++;
          }
          // Check for decimal
          if (pos < len && input.charCodeAt(pos) === 46) {
            if (pos + 1 < len && isDigit(input.charCodeAt(pos + 1))) {
              pos++; // skip dot
              while (pos < len && isDigit(input.charCodeAt(pos))) {
                pos++;
              }
              tokens.push({ kind: TokenKind.SIGNED_DECIMAL, text: input.substring(start, pos), start });
              continue;
            }
          }
          tokens.push({ kind: TokenKind.SIGNED_INTEGER, text: input.substring(start, pos), start });
          continue;
        }
        // Check if +/- followed by a dot then digit: +.5, -.5
        if (nextCh === 46 && pos + 2 < len && isDigit(input.charCodeAt(pos + 2))) {
          const start = pos;
          pos += 2; // skip sign and dot
          while (pos < len && isDigit(input.charCodeAt(pos))) {
            pos++;
          }
          tokens.push({ kind: TokenKind.SIGNED_DECIMAL, text: input.substring(start, pos), start });
          continue;
        }
      }
      // Standalone +/-
      tokens.push({ kind: ch === 43 ? TokenKind.PLUS : TokenKind.MINUS, text: input[pos], start: pos });
      pos++;
      continue;
    }

    // Dot: could be start of decimal (.5) or just a dot symbol
    if (ch === 46) {
      // Check if followed by digit -> unsigned decimal
      if (pos + 1 < len && isDigit(input.charCodeAt(pos + 1))) {
        const start = pos;
        pos++; // skip dot
        while (pos < len && isDigit(input.charCodeAt(pos))) {
          pos++;
        }
        tokens.push({ kind: TokenKind.UNSIGNED_DECIMAL, text: input.substring(start, pos), start });
        continue;
      }
      tokens.push({ kind: TokenKind.DOT, text: '.', start: pos });
      pos++;
      continue;
    }

    // 5. Identifiers and keywords
    if (isAlpha(ch)) {
      const start = pos;
      pos++;
      while (pos < len) {
        const c = input.charCodeAt(pos);
        if (isAlphaNumOrUnderscore(c) || c === 46) {
          // dot = 46
          pos++;
        } else {
          break;
        }
      }

      let text = input.substring(start, pos);

      // Reject double dots in identifiers
      if (text.includes('..')) {
        throw new Error(`Invalid identifier with consecutive dots at position ${start}: "${text}"`);
      }

      const upper = text.toUpperCase();

      // Check for multi-word keywords: ORDER BY, GROUP BY, DATA CATEGORY
      if (upper === 'ORDER' && !text.includes('.')) {
        const byResult = peekMultiWordSuffix(input, pos, 'BY');
        if (byResult !== -1) {
          const fullText = input.substring(start, byResult);
          tokens.push({ kind: TokenKind.ORDER_BY, text: fullText, start });
          pos = byResult;
          continue;
        }
      }

      if (upper === 'GROUP' && !text.includes('.')) {
        const byResult = peekMultiWordSuffix(input, pos, 'BY');
        if (byResult !== -1) {
          const fullText = input.substring(start, byResult);
          tokens.push({ kind: TokenKind.GROUP_BY, text: fullText, start });
          pos = byResult;
          continue;
        }
      }

      if (upper === 'DATA' && !text.includes('.')) {
        const catResult = peekMultiWordSuffix(input, pos, 'CATEGORY');
        if (catResult !== -1) {
          const fullText = input.substring(start, catResult);
          tokens.push({ kind: TokenKind.DATA_CATEGORY, text: fullText, start });
          pos = catResult;
          continue;
        }
      }

      // Check for currency-prefixed numbers: exactly 3 alpha chars followed by optional minus and digits
      // Case 1: identifier already contains digits (e.g., "USD100" or "USD100.50")
      if (text.length >= 4) {
        const first3 = text.substring(0, 3);
        if (isAllAlpha(first3)) {
          const rest = text.substring(3);
          if (isCurrencyNumberSuffix(rest)) {
            if (rest.includes('.')) {
              tokens.push({ kind: TokenKind.CURRENCY_PREFIXED_DECIMAL, text, start });
            } else {
              tokens.push({ kind: TokenKind.CURRENCY_PREFIXED_INTEGER, text, start });
            }
            continue;
          }
        }
      }

      // Case 2: identifier is exactly 3 alpha chars and followed by optional minus and digits
      // e.g., "USD" followed by "-50" or "USD" followed by "-50.25"
      // The identifier scanner stopped at the minus, so we need to look ahead
      if (text.length === 3 && isAllAlpha(text)) {
        const savedPos = pos;
        let currPos = pos;
        let hasMinus = false;
        if (currPos < len && input.charCodeAt(currPos) === 45) {
          // minus
          hasMinus = true;
          currPos++;
        }
        if (hasMinus && currPos < len && isDigit(input.charCodeAt(currPos))) {
          // Consume digits
          while (currPos < len && isDigit(input.charCodeAt(currPos))) {
            currPos++;
          }
          // Check for decimal part
          if (currPos < len && input.charCodeAt(currPos) === 46 && currPos + 1 < len && isDigit(input.charCodeAt(currPos + 1))) {
            currPos++; // skip dot
            while (currPos < len && isDigit(input.charCodeAt(currPos))) {
              currPos++;
            }
            const fullText = input.substring(start, currPos);
            tokens.push({ kind: TokenKind.CURRENCY_PREFIXED_DECIMAL, text: fullText, start });
            pos = currPos;
            continue;
          }
          // Make sure it's not followed by identifier characters
          if (currPos >= len || (!isAlphaNumOrUnderscore(input.charCodeAt(currPos)) && input.charCodeAt(currPos) !== 46)) {
            const fullText = input.substring(start, currPos);
            tokens.push({ kind: TokenKind.CURRENCY_PREFIXED_INTEGER, text: fullText, start });
            pos = currPos;
            continue;
          }
          // Revert - not a currency number
          pos = savedPos;
        }
      }

      // If the identifier contains a dot, it cannot be a keyword
      if (text.includes('.')) {
        tokens.push({ kind: TokenKind.IDENTIFIER, text, start });
        continue;
      }

      // Keyword lookup (case-insensitive)
      const kwKind = keywordMap.get(upper);
      if (kwKind !== undefined) {
        tokens.push({ kind: kwKind, text, start });
        continue;
      }

      // Plain identifier
      tokens.push({ kind: TokenKind.IDENTIFIER, text, start });
      continue;
    }

    throw new Error(`Unexpected character '${input[pos]}' (code ${ch}) at position ${pos}`);
  }

  // Append EOF
  tokens.push({ kind: TokenKind.EOF, text: '', start: pos });
  return tokens;
}

// ---------------------------------------------------------------------------
// Helper: peek ahead for multi-word keyword suffix
// Returns the new position after the suffix word, or -1 if not found.
// ---------------------------------------------------------------------------
function peekMultiWordSuffix(input: string, pos: number, suffix: string): number {
  const len = input.length;
  let p = pos;

  // Must have at least one whitespace
  if (p >= len || !isWhitespace(input.charCodeAt(p))) {
    return -1;
  }

  // Skip whitespace
  while (p < len && isWhitespace(input.charCodeAt(p))) {
    p++;
  }

  // Check if the next word matches suffix (case-insensitive) and is not followed by alpha/digit/_
  const suffixLen = suffix.length;
  if (p + suffixLen > len) {
    return -1;
  }

  for (let i = 0; i < suffixLen; i++) {
    const c = input.charCodeAt(p + i);
    const s = suffix.charCodeAt(i);
    // Case-insensitive compare (suffix is already uppercase)
    const upper = c >= 97 && c <= 122 ? c - 32 : c;
    if (upper !== s) {
      return -1;
    }
  }

  // Make sure the suffix word is not followed by an identifier character
  const afterSuffix = p + suffixLen;
  if (afterSuffix < len) {
    const nextCh = input.charCodeAt(afterSuffix);
    if (isAlphaNumOrUnderscore(nextCh) || nextCh === 46) {
      return -1;
    }
  }

  return afterSuffix;
}

// ---------------------------------------------------------------------------
// Helper: check if string is all alpha
// ---------------------------------------------------------------------------
function isAllAlpha(s: string): boolean {
  for (let i = 0; i < s.length; i++) {
    if (!isAlpha(s.charCodeAt(i))) return false;
  }
  return true;
}

// ---------------------------------------------------------------------------
// Helper: check if string matches a currency number suffix pattern
// Pattern: optional minus, then digits, then optional (dot + digits)
// Must have at least one digit.
// ---------------------------------------------------------------------------
function isCurrencyNumberSuffix(s: string): boolean {
  if (s.length === 0) return false;
  let i = 0;
  if (s.charCodeAt(i) === 45) {
    // minus
    i++;
  }
  if (i >= s.length || !isDigit(s.charCodeAt(i))) return false;
  while (i < s.length && isDigit(s.charCodeAt(i))) {
    i++;
  }
  if (i < s.length) {
    if (s.charCodeAt(i) === 46) {
      // dot
      i++;
      if (i >= s.length || !isDigit(s.charCodeAt(i))) return false;
      while (i < s.length && isDigit(s.charCodeAt(i))) {
        i++;
      }
    }
  }
  return i === s.length;
}
