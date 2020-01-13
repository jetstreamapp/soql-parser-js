import { createToken, Lexer, TokenType } from 'chevrotain';

export interface TokenVocabulary {
  [vocab: string]: TokenType;
}

export const ReservedKeyword = createToken({
  name: 'KeywordReserved',
  pattern: Lexer.NA,
});

export const Keyword = createToken({
  name: 'Keyword',
  pattern: Lexer.NA,
});

export const DateFunction = createToken({
  name: 'DateFunction',
  pattern: Lexer.NA,
});

export const AggregateFunction = createToken({
  name: 'AggregateFunction',
  pattern: Lexer.NA,
});

export const LocationFunction = createToken({
  name: 'LocationFunction',
  pattern: Lexer.NA,
});

export const OtherFunction = createToken({
  name: 'OtherFunction',
  pattern: Lexer.NA,
});

export const DateLiteral = createToken({
  name: 'DateLiteral',
  pattern: Lexer.NA,
});

export const DateLiteralNotIdentifier = createToken({
  name: 'DateLiteralNotIdentifier',
  pattern: Lexer.NA,
});

export const DateNLiteral = createToken({
  name: 'DateNLiteral',
  pattern: Lexer.NA,
});

export const RelationalOperator = createToken({
  name: 'RelationalOperator',
  pattern: Lexer.NA,
});

export const SymbolIdentifier = createToken({
  name: 'SymbolIdentifier',
  pattern: Lexer.NA,
});

export const DateIdentifier = createToken({
  name: 'DateIdentifier',
  pattern: Lexer.NA,
});

export const NumberIdentifier = createToken({
  name: 'NumberIdentifier',
  pattern: Lexer.NA,
});

export const DecimalNumberIdentifier = createToken({
  name: 'DecimalNumberIdentifier',
  pattern: Lexer.NA,
});

export const IntegerNumberIdentifier = createToken({
  name: 'IntegerNumberIdentifier',
  pattern: Lexer.NA,
});

export const IdentifierNotKeyword = createToken({
  name: 'IdentifierNotKeyword',
  pattern: Lexer.NA,
});

export const UsingScopeEnumeration = createToken({
  name: 'UsingScopeEnumeration',
  pattern: Lexer.NA,
});

// This is a token that will be invoked to force a parsing error if there is a paren mismatch
export const RParenMismatch = createToken({
  name: 'RParenMismatch',
  pattern: Lexer.NA,
});

const identifierRegex = /[a-zA-Z][a-zA-Z0-9_.]*/y;

/**
 * Ensure we do not allow two decimal places in a row
 * @param text
 * @param startOffset
 */
function matchIdentifier(text: string, startOffset: number) {
  // // using 'y' sticky flag (Note it is not supported on IE11...)
  // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky
  identifierRegex.lastIndex = startOffset;

  const execResult = identifierRegex.exec(text);
  if (execResult && execResult[0].includes('..')) {
    return null;
  }
  return execResult;
}

// export const Identifier = createToken({ name: 'Identifier', pattern: /[a-zA-Z][a-zA-Z0-9_.]*/, categories: [IdentifierNotKeyword] });
export const Identifier = createToken({
  name: 'Identifier',
  pattern: matchIdentifier,
  line_breaks: false,
  categories: [IdentifierNotKeyword],
  start_chars_hint: [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ],
});

export const StringIdentifier = createToken({ name: 'StringIdentifier', line_breaks: true, pattern: /(')(?:(?=(\\?))\2.)*?\1/ });

export const WhiteSpace = createToken({
  name: 'WhiteSpace',
  pattern: /\s+/,
  group: Lexer.SKIPPED,
});

// // GROUPS
// export const LITERAL = createToken({ name: 'LITERAL', pattern: Lexer.NA });
// export const RELATIONAL_OPERATOR = createToken({ name: 'RELATIONAL_OPERATOR', pattern: Lexer.NA });
// export const EQUALITY_OPERATOR = createToken({ name: 'EQUALITY_OPERATOR', pattern: Lexer.NA });
// export const PRINT = createToken({ name: 'PRINT', pattern: Lexer.NA });

// RESERVED KEYWORDS
// We specify the "longer_alt" property to resolve keywords vs identifiers ambiguity.
// See: https://github.com/SAP/chevrotain/blob/master/examples/lexer/keywords_vs_identifiers/keywords_vs_identifiers.js
export const And = createToken({ name: 'AND', pattern: /AND/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const As = createToken({ name: 'AS', pattern: /AS/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });

export const Desc = createToken({ name: 'DESC', pattern: /DESC/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const Asc = createToken({ name: 'ASC', pattern: /ASC/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });

// FIXME: split into two tokens, BY is a reserved keyword, order is not
export const OrderBy = createToken({ name: 'ORDER_BY', pattern: /ORDER BY/i, longer_alt: Identifier });

export const Cube = createToken({ name: 'CUBE', pattern: /CUBE/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const Else = createToken({ name: 'ELSE', pattern: /ELSE/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const Excludes = createToken({
  name: 'EXCLUDES',
  pattern: /EXCLUDES/i,
  longer_alt: Identifier,
  categories: [Keyword, ReservedKeyword],
});
export const False = createToken({ name: 'FALSE', pattern: /FALSE/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const First = createToken({ name: 'FIRST', pattern: /FIRST/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const From = createToken({ name: 'FROM', pattern: /FROM/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });

// FIXME: split into two tokens, BY is a reserved keyword, group is not
export const GroupBy = createToken({ name: 'GROUP_BY', pattern: /GROUP BY/i, longer_alt: Identifier });

export const Having = createToken({ name: 'HAVING', pattern: /HAVING/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const In = createToken({ name: 'IN', pattern: /IN/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });

// FIXME: split into two tokens, NOT is a reserved keyword, IN is not
export const NotIn = createToken({ name: 'NOT_IN', pattern: /NOT IN/i, longer_alt: Identifier });

export const Includes = createToken({
  name: 'INCLUDES',
  pattern: /INCLUDES/i,
  longer_alt: Identifier,
  categories: [Keyword, ReservedKeyword],
});
export const Last = createToken({ name: 'LAST', pattern: /LAST/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const Like = createToken({ name: 'LIKE', pattern: /LIKE/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const Limit = createToken({ name: 'LIMIT', pattern: /LIMIT/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const Not = createToken({ name: 'NOT', pattern: /NOT/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const Null = createToken({ name: 'NULL', pattern: /NULL/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const Nulls = createToken({ name: 'NULLS', pattern: /NULLS/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const Or = createToken({ name: 'OR', pattern: /OR/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const Rollup = createToken({ name: 'ROLLUP', pattern: /ROLLUP/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const Select = createToken({ name: 'SELECT', pattern: /SELECT/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const True = createToken({ name: 'TRUE', pattern: /TRUE/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const Using = createToken({ name: 'USING', pattern: /USING/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const Where = createToken({ name: 'WHERE', pattern: /WHERE/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const With = createToken({ name: 'WITH', pattern: /WITH/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const For = createToken({ name: 'FOR', pattern: /FOR/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });
export const Update = createToken({ name: 'UPDATE', pattern: /UPDATE/i, longer_alt: Identifier, categories: [Keyword, ReservedKeyword] });

// NON-RESERVED KEYWORDS
export const Above = createToken({ name: 'ABOVE', pattern: /ABOVE/i, longer_alt: Identifier, categories: [Keyword, Identifier] });
export const AboveOrBelow = createToken({
  name: 'ABOVE_OR_BELOW',
  pattern: /ABOVE_OR_BELOW/i,
  longer_alt: Identifier,
  categories: [Keyword, Identifier],
});
export const At = createToken({ name: 'AT', pattern: /AT/i, longer_alt: Identifier, categories: [Keyword, Identifier] });
export const Below = createToken({ name: 'BELOW', pattern: /BELOW/i, longer_alt: Identifier, categories: [Keyword, Identifier] });
export const DataCategory = createToken({
  name: 'DATA_CATEGORY',
  pattern: /DATA CATEGORY/i,
  longer_alt: Identifier,
  categories: [Keyword],
});
export const End = createToken({ name: 'END', pattern: /END/i, longer_alt: Identifier, categories: [Keyword, Identifier] });

export const Offset = createToken({ name: 'OFFSET', pattern: /OFFSET/i, longer_alt: Identifier, categories: [Keyword, Identifier] });

export const Reference = createToken({
  name: 'REFERENCE',
  pattern: /REFERENCE/i,
  longer_alt: Identifier,
  categories: [Keyword, Identifier],
});
export const Scope = createToken({ name: 'SCOPE', pattern: /SCOPE/i, longer_alt: Identifier, categories: [Keyword, Identifier] });
export const Tracking = createToken({ name: 'TRACKING', pattern: /TRACKING/i, longer_alt: Identifier, categories: [Keyword, Identifier] });
export const Then = createToken({ name: 'THEN', pattern: /THEN/i, longer_alt: Identifier, categories: [Keyword, Identifier] });
export const Typeof = createToken({ name: 'TYPEOF', pattern: /TYPEOF/i, longer_alt: Identifier, categories: [Keyword, Identifier] });
export const View = createToken({ name: 'VIEW', pattern: /VIEW/i, longer_alt: Identifier, categories: [Keyword, Identifier] });
export const Viewstat = createToken({ name: 'VIEWSTAT', pattern: /VIEWSTAT/i, longer_alt: Identifier, categories: [Keyword, Identifier] });
export const When = createToken({ name: 'WHEN', pattern: /WHEN/i, longer_alt: Identifier, categories: [Keyword, Identifier] });
export const SecurityEnforced = createToken({
  name: 'SECURITY_ENFORCED',
  pattern: /SECURITY_ENFORCED/i,
  longer_alt: Identifier,
  categories: [Keyword, Identifier],
});

// DATE FUNCTIONS
export const CalendarMonth = createToken({
  name: 'CALENDAR_MONTH',
  pattern: /CALENDAR_MONTH/i,
  longer_alt: Identifier,
  categories: [DateFunction, Identifier],
});
export const CalendarQuarter = createToken({
  name: 'CALENDAR_QUARTER',
  pattern: /CALENDAR_QUARTER/i,
  longer_alt: Identifier,
  categories: [DateFunction, Identifier],
});
export const CalendarYear = createToken({
  name: 'CALENDAR_YEAR',
  pattern: /CALENDAR_YEAR/i,
  longer_alt: Identifier,
  categories: [DateFunction, Identifier],
});
export const DayInMonth = createToken({
  name: 'DAY_IN_MONTH',
  pattern: /DAY_IN_MONTH/i,
  longer_alt: Identifier,
  categories: [DateFunction, Identifier],
});
export const DayInWeek = createToken({
  name: 'DAY_IN_WEEK',
  pattern: /DAY_IN_WEEK/i,
  longer_alt: Identifier,
  categories: [DateFunction, Identifier],
});
export const DayInYear = createToken({
  name: 'DAY_IN_YEAR',
  pattern: /DAY_IN_YEAR/i,
  longer_alt: Identifier,
  categories: [DateFunction, Identifier],
});
export const DayOnly = createToken({
  name: 'DAY_ONLY',
  pattern: /DAY_ONLY/i,
  longer_alt: Identifier,
  categories: [DateFunction, Identifier],
});
export const FiscalMonth = createToken({
  name: 'FISCAL_MONTH',
  pattern: /FISCAL_MONTH/i,
  longer_alt: Identifier,
  categories: [DateFunction, Identifier],
});
export const FiscalQuarter = createToken({
  name: 'FISCAL_QUARTER',
  pattern: /FISCAL_QUARTER/i,
  longer_alt: Identifier,
  categories: [DateFunction, Identifier],
});
export const FiscalYear = createToken({
  name: 'FISCAL_YEAR',
  pattern: /FISCAL_YEAR/i,
  longer_alt: Identifier,
  categories: [DateFunction, Identifier],
});
export const HourInDay = createToken({
  name: 'HOUR_IN_DAY',
  pattern: /HOUR_IN_DAY/i,
  longer_alt: Identifier,
  categories: [DateFunction, Identifier],
});
export const WeekInMonth = createToken({
  name: 'WEEK_IN_MONTH',
  pattern: /WEEK_IN_MONTH/i,
  longer_alt: Identifier,
  categories: [DateFunction, Identifier],
});
export const WeekInYear = createToken({
  name: 'WEEK_IN_YEAR',
  pattern: /WEEK_IN_YEAR/i,
  longer_alt: Identifier,
  categories: [DateFunction, Identifier],
});

// AGGREGATE FUNCTIONS
export const Avg = createToken({ name: 'AVG', pattern: /AVG/i, longer_alt: Identifier, categories: [AggregateFunction, Identifier] });
export const Count = createToken({ name: 'COUNT', pattern: /COUNT/i, longer_alt: Identifier, categories: [AggregateFunction, Identifier] });
export const CountDistinct = createToken({
  name: 'COUNT_DISTINCT',
  pattern: /COUNT_DISTINCT/i,
  longer_alt: Identifier,
  categories: [AggregateFunction, Identifier],
});
export const Min = createToken({ name: 'MIN', pattern: /MIN/i, longer_alt: Identifier, categories: [AggregateFunction, Identifier] });
export const Max = createToken({ name: 'MAX', pattern: /MAX/i, longer_alt: Identifier, categories: [AggregateFunction, Identifier] });
export const Sum = createToken({ name: 'SUM', pattern: /SUM/i, longer_alt: Identifier, categories: [AggregateFunction, Identifier] });

// LOCATION FUNCTIONS
export const Distance = createToken({
  name: 'DISTANCE',
  pattern: /DISTANCE/i,
  longer_alt: Identifier,
  categories: [LocationFunction, Identifier],
});

export const Geolocation = createToken({
  name: 'GEOLOCATION',
  pattern: /GEOLOCATION/i,
  longer_alt: Identifier,
  categories: [LocationFunction, Identifier],
});

// OTHER FUNCTIONS
export const Format = createToken({
  name: 'FORMAT',
  pattern: /FORMAT/i,
  longer_alt: Identifier,
  categories: [OtherFunction, Identifier],
});
export const Tolabel = createToken({
  name: 'toLabel',
  pattern: /TOLABEL/i,
  longer_alt: Identifier,
  categories: [OtherFunction, Identifier],
});
export const ConvertTimeZone = createToken({
  name: 'convertTimezone',
  pattern: /CONVERTTIMEZONE/i,
  longer_alt: Identifier,
  categories: [OtherFunction, Identifier],
});
export const ConvertCurrency = createToken({
  name: 'convertCurrency',
  pattern: /CONVERTCURRENCY/i,
  longer_alt: Identifier,
  categories: [OtherFunction, Identifier],
});
export const Grouping = createToken({
  name: 'GROUPING',
  pattern: /GROUPING/i,
  longer_alt: Identifier,
  categories: [OtherFunction, Identifier],
});

// DATE LITERALS
export const Yesterday = createToken({
  name: 'YESTERDAY',
  pattern: /YESTERDAY/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const Today = createToken({
  name: 'TODAY',
  pattern: /TODAY/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const Tomorrow = createToken({
  name: 'TOMORROW',
  pattern: /TOMORROW/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const LastWeek = createToken({
  name: 'LAST_WEEK',
  pattern: /LAST_WEEK/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const ThisWeek = createToken({
  name: 'THIS_WEEK',
  pattern: /THIS_WEEK/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const NextWeek = createToken({
  name: 'NEXT_WEEK',
  pattern: /NEXT_WEEK/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const LastMonth = createToken({
  name: 'LAST_MONTH',
  pattern: /LAST_MONTH/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const ThisMonth = createToken({
  name: 'THIS_MONTH',
  pattern: /THIS_MONTH/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const NextMonth = createToken({
  name: 'NEXT_MONTH',
  pattern: /NEXT_MONTH/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const Last90_days = createToken({
  name: 'LAST_90_DAYS',
  pattern: /LAST_90_DAYS/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const Next90_days = createToken({
  name: 'NEXT_90_DAYS',
  pattern: /NEXT_90_DAYS/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const ThisQuarter = createToken({
  name: 'THIS_QUARTER',
  pattern: /THIS_QUARTER/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const LastQuarter = createToken({
  name: 'LAST_QUARTER',
  pattern: /LAST_QUARTER/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const NextQuarter = createToken({
  name: 'NEXT_QUARTER',
  pattern: /NEXT_QUARTER/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const ThisYear = createToken({
  name: 'THIS_YEAR',
  pattern: /THIS_YEAR/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const LastYear = createToken({
  name: 'LAST_YEAR',
  pattern: /LAST_YEAR/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const NextYear = createToken({
  name: 'NEXT_YEAR',
  pattern: /NEXT_YEAR/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const ThisFiscalQuarter = createToken({
  name: 'THIS_FISCAL_QUARTER',
  pattern: /THIS_FISCAL_QUARTER/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const LastFiscalQuarter = createToken({
  name: 'LAST_FISCAL_QUARTER',
  pattern: /LAST_FISCAL_QUARTER/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const NextFiscalQuarter = createToken({
  name: 'NEXT_FISCAL_QUARTER',
  pattern: /NEXT_FISCAL_QUARTER/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const ThisFiscalYear = createToken({
  name: 'THIS_FISCAL_YEAR',
  pattern: /THIS_FISCAL_YEAR/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const LastFiscalYear = createToken({
  name: 'LAST_FISCAL_YEAR',
  pattern: /LAST_FISCAL_YEAR/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});
export const NextFiscalYear = createToken({
  name: 'NEXT_FISCAL_YEAR',
  pattern: /NEXT_FISCAL_YEAR/i,
  longer_alt: Identifier,
  categories: [DateLiteral, Identifier, DateLiteralNotIdentifier],
});

// DATE_N_LITERALS
export const NextNDays = createToken({
  name: 'NEXT_N_DAYS',
  pattern: /NEXT_N_DAYS/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const LastNDays = createToken({
  name: 'LAST_N_DAYS',
  pattern: /LAST_N_DAYS/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const NDaysAgo = createToken({
  name: 'N_DAYS_AGO',
  pattern: /N_DAYS_AGO/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const NextNWeeks = createToken({
  name: 'NEXT_N_WEEKS',
  pattern: /NEXT_N_WEEKS/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const LastNWeeks = createToken({
  name: 'LAST_N_WEEKS',
  pattern: /LAST_N_WEEKS/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const NWeeksAgo = createToken({
  name: 'N_WEEKS_AGO',
  pattern: /N_WEEKS_AGO/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const NextNMonths = createToken({
  name: 'NEXT_N_MONTHS',
  pattern: /NEXT_N_MONTHS/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const LastNMonths = createToken({
  name: 'LAST_N_MONTHS',
  pattern: /LAST_N_MONTHS/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const NMonthsAgo = createToken({
  name: 'N_MONTHS_AGO',
  pattern: /N_MONTHS_AGO/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const NextNQuarters = createToken({
  name: 'NEXT_N_QUARTERS',
  pattern: /NEXT_N_QUARTERS/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const LastNQuarters = createToken({
  name: 'LAST_N_QUARTERS',
  pattern: /LAST_N_QUARTERS/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const NQuartersAgo = createToken({
  name: 'N_QUARTERS_AGO',
  pattern: /N_QUARTERS_AGO/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const NextNYears = createToken({
  name: 'NEXT_N_YEARS',
  pattern: /NEXT_N_YEARS/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const LastNYears = createToken({
  name: 'LAST_N_YEARS',
  pattern: /LAST_N_YEARS/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const NYearsAgo = createToken({
  name: 'N_YEARS_AGO',
  pattern: /N_YEARS_AGO/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const NextNFiscalQuarters = createToken({
  name: 'NEXT_N_FISCAL_QUARTERS',
  pattern: /NEXT_N_FISCAL_QUARTERS/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const LastNFiscalQuarters = createToken({
  name: 'LAST_N_FISCAL_QUARTERS',
  pattern: /LAST_N_FISCAL_QUARTERS/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const NFiscalQuartersAgo = createToken({
  name: 'N_FISCAL_QUARTERS_AGO',
  pattern: /N_FISCAL_QUARTERS_AGO/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const NextNFiscalYears = createToken({
  name: 'NEXT_N_FISCAL_YEARS',
  pattern: /NEXT_N_FISCAL_YEARS/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const LastNFiscalYears = createToken({
  name: 'LAST_N_FISCAL_YEARS',
  pattern: /LAST_N_FISCAL_YEARS/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});
export const NFiscalYearsAgo = createToken({
  name: 'N_FISCAL_YEARS_AGO',
  pattern: /N_FISCAL_YEARS_AGO/i,
  longer_alt: Identifier,
  categories: [DateNLiteral, Identifier],
});

// RELATIONAL OPERATORS
export const Equal = createToken({ name: 'EQUAL', pattern: '=', categories: [RelationalOperator] });
export const NotEqual = createToken({ name: 'NOT_EQUAL', pattern: /!=|<>/, categories: [RelationalOperator] });
export const LessThan = createToken({ name: 'LESS_THAN', pattern: '<', categories: [RelationalOperator] });
export const LessThanOrEqual = createToken({ name: 'LESS_THAN_OR_EQUAL', pattern: '<=', categories: [RelationalOperator] });
export const GreaterThan = createToken({ name: 'GREATER_THAN', pattern: '>', categories: [RelationalOperator] });
export const GreaterThanOrEqual = createToken({ name: 'GREATER_THAN_OR_EQUAL', pattern: '>=', categories: [RelationalOperator] });

// SYMBOLS
export const Decimal = createToken({ name: 'DECIMAL', pattern: '.', categories: [SymbolIdentifier] });
export const Colon = createToken({ name: 'COLON', pattern: ':', categories: [SymbolIdentifier] });
export const Semicolon = createToken({ name: 'SEMICOLON', pattern: ';', categories: [SymbolIdentifier] });
export const Comma = createToken({ name: 'COMMA', pattern: ',', categories: [SymbolIdentifier] });
export const Asterisk = createToken({ name: 'ASTERISK', pattern: '*', categories: [SymbolIdentifier] });
export const LParen = createToken({ name: 'L_PAREN', pattern: '(', categories: [SymbolIdentifier] });
export const RParen = createToken({ name: 'R_PAREN', pattern: ')', categories: [SymbolIdentifier] });
export const Plus = createToken({ name: 'PLUS', pattern: '+', categories: [SymbolIdentifier] });
export const Minus = createToken({ name: 'MINUS', pattern: '-', categories: [SymbolIdentifier] });

export const DateTime = createToken({
  name: 'DATETIME',
  pattern: /[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\Z|\.[0-9]+Z|\+[0-9]{2}:[0-9]{2}|\-[0-9]{2}:[0-9]{2})/i,
  categories: [DateIdentifier],
});

export const DateToken = createToken({ name: 'DATE', pattern: /[0-9]{4}-[0-9]{2}-[0-9]{2}/, categories: [DateIdentifier] });

export const CurrencyPrefixedDecimal = createToken({
  name: 'CURRENCY_PREFIXED_DECIMAL',
  pattern: /[a-zA-Z]{3}[0-9]+\.\d+/,
  longer_alt: Identifier,
  categories: [DecimalNumberIdentifier],
});
export const SignedDecimal = createToken({
  name: 'SIGNED_DECIMAL',
  pattern: /(\-|\+)[0-9]*\.\d+/,
  categories: [NumberIdentifier, DecimalNumberIdentifier],
});
export const UnsignedDecimal = createToken({
  name: 'UNSIGNED_DECIMAL',
  pattern: /[0-9]*\.\d+/,
  categories: [NumberIdentifier, DecimalNumberIdentifier],
});
export const CurrencyPrefixedInteger = createToken({
  name: 'CURRENCY_PREFIXED_INTEGER',
  pattern: /[a-zA-Z]{3}[0-9]+/,
  longer_alt: Identifier,
  categories: [DecimalNumberIdentifier],
});
export const SignedInteger = createToken({
  name: 'SIGNED_INTEGER',
  pattern: /(\-|\+)[0-9]+/,
  categories: [NumberIdentifier, IntegerNumberIdentifier],
});
export const GeolocationUnit = createToken({
  name: 'GEOLOCATION_UNIT',
  pattern: /'(mi|km)'/i,
  longer_alt: Identifier,
  categories: [Identifier],
});

export const UnsignedInteger = createToken({
  name: 'UNSIGNED_INTEGER',
  pattern: /0|[1-9]\d*/,
  categories: [NumberIdentifier, IntegerNumberIdentifier],
});

// Using Scope enumeration values
// https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_using_scope.htm?search_text=format()
// export const UsingScopeEnumeration = createToken({
//   name: 'UsingScopeEnumeration',
//   pattern: /DELEGATED|EVERYTHING|MINEANDMYGROUPS|MINE|MY_TERRITORY|MY_TEAM_TERRITORY|TEAM|ALLPRIVATE/i,
//   longer_alt: Identifier,
//   categories: [Identifier],
//   start_chars_hint: ['A', 'D', 'E', 'M', 'T', 'a', 'd', 'e', 'm', 't'],
// });

export const Delegated = createToken({
  name: 'Delegated',
  pattern: /DELEGATED/i,
  longer_alt: Identifier,
  categories: [UsingScopeEnumeration, Identifier],
  start_chars_hint: ['D', 'd'],
});
export const Everything = createToken({
  name: 'Everything',
  pattern: /EVERYTHING/i,
  longer_alt: Identifier,
  categories: [UsingScopeEnumeration, Identifier],
  start_chars_hint: ['E', 'e'],
});
export const MineAndMyGroups = createToken({
  name: 'MineAndMyGroups',
  pattern: /MINEANDMYGROUPS/i,
  longer_alt: Identifier,
  categories: [UsingScopeEnumeration, Identifier],
  start_chars_hint: ['M', 'm'],
});
export const Mine = createToken({
  name: 'Mine',
  pattern: /MINE/i,
  longer_alt: Identifier,
  categories: [UsingScopeEnumeration, Identifier],
  start_chars_hint: ['M', 'm'],
});
export const MyTerritory = createToken({
  name: 'MyTerritory',
  pattern: /MY_TERRITORY/i,
  longer_alt: Identifier,
  categories: [UsingScopeEnumeration, Identifier],
  start_chars_hint: ['M', 'm'],
});
export const MyTeamTerritory = createToken({
  name: 'MyTeamTerritory',
  pattern: /MY_TEAM_TERRITORY/i,
  longer_alt: Identifier,
  categories: [UsingScopeEnumeration, Identifier],
  start_chars_hint: ['M', 'm'],
});
export const Team = createToken({
  name: 'Team',
  pattern: /TEAM/i,
  longer_alt: Identifier,
  categories: [UsingScopeEnumeration, Identifier],
  start_chars_hint: ['T', 't'],
});
export const AllPrivate = createToken({
  name: 'AllPrivate',
  pattern: /ALLPRIVATE/i,
  longer_alt: Identifier,
  categories: [UsingScopeEnumeration, Identifier],
  start_chars_hint: ['A', 'a'],
});

export const allTokens = [
  // we place WhiteSpace first as it is very common thus it will speed up the lexer.
  WhiteSpace,
  // "keywords" appear before the Identifier
  And,
  Asc,
  As,
  OrderBy,
  Cube,
  Desc,
  Else,
  Excludes,
  False,
  First,
  From,
  Grouping,
  GroupBy,
  Having,
  Includes,

  Like,
  Limit,
  Nulls,
  Null,

  Rollup,
  Select,
  True,
  Using,
  Where,
  With,

  Update,

  // https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_using_scope.htm?search_text=format()
  Delegated,
  Everything,
  MineAndMyGroups,
  Mine,
  MyTerritory,
  MyTeamTerritory,
  Team,
  AllPrivate, // https://help.salesforce.com/articleView?id=000334863&language=en_US&type=1&mode=1

  AboveOrBelow,
  Above,
  At,
  Below,
  DataCategory,
  End,
  Offset,
  Reference,
  Scope,
  Tracking,
  Then,
  Typeof,
  Viewstat,
  View,
  When,
  SecurityEnforced,
  CalendarMonth,
  CalendarQuarter,
  CalendarYear,
  DayInMonth,
  DayInWeek,
  DayInYear,
  DayOnly,
  FiscalMonth,
  FiscalQuarter,
  FiscalYear,
  HourInDay,
  WeekInMonth,
  WeekInYear,
  Avg,
  CountDistinct,
  Count,
  Min,
  Max,
  Sum,
  Distance,
  Geolocation,
  Format,
  Tolabel,
  ConvertTimeZone,
  ConvertCurrency,
  Yesterday,
  Today,
  Tomorrow,
  LastWeek,
  ThisWeek,
  NextWeek,
  LastMonth,
  ThisMonth,
  NextMonth,
  Last90_days,
  Next90_days,
  ThisQuarter,
  LastQuarter,
  NextQuarter,
  ThisYear,
  LastYear,
  NextYear,
  ThisFiscalQuarter,
  LastFiscalQuarter,
  NextFiscalQuarter,
  ThisFiscalYear,
  LastFiscalYear,
  NextFiscalYear,
  NextNDays,
  LastNDays,
  NDaysAgo,
  NextNWeeks,
  LastNWeeks,
  NWeeksAgo,
  NextNMonths,
  LastNMonths,
  NMonthsAgo,
  NextNQuarters,
  LastNQuarters,
  NQuartersAgo,
  NextNYears,
  LastNYears,
  NYearsAgo,
  NextNFiscalQuarters,
  LastNFiscalQuarters,
  NFiscalQuartersAgo,
  NextNFiscalYears,
  LastNFiscalYears,
  NFiscalYearsAgo,

  GeolocationUnit,

  In,
  NotIn,
  For,
  Or,
  Last,
  Not,

  // The Identifier must appear after the keywords because all keywords are valid identifiers.
  CurrencyPrefixedDecimal,
  CurrencyPrefixedInteger,
  StringIdentifier,
  Identifier,
  DateTime,
  DateToken,
  SignedDecimal,
  UnsignedDecimal,
  UnsignedInteger,
  SignedInteger,
  Equal,
  NotEqual,
  LessThanOrEqual,
  LessThan,
  GreaterThanOrEqual,
  GreaterThan,
  Decimal,
  Colon,
  Semicolon,
  Comma,
  Asterisk,
  LParen,
  RParen,
  Plus,
  Minus,
];

const SoqlLexer = new Lexer(allTokens, { ensureOptimizations: true, skipValidations: false });

export function lex(soql: string) {
  return SoqlLexer.tokenize(soql);
}
