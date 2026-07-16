/**
 * Comment utilities that operate on the raw query string without parsing it.
 *
 * These intentionally do NOT share the lexer's scanner: the lexer is strict
 * (it throws on unterminated comments and unexpected characters), while these
 * utilities are lenient so they can be safely applied to any string - including
 * invalid SOQL - without throwing. Only two constructs are recognized:
 * string literals ('...' with backslash escapes, so comment markers inside
 * strings are never treated as comments) and the two comment forms.
 */

export interface SoqlComment {
  type: 'line' | 'block';
  /** Full comment text, including the `//` or `/* *\/` delimiters */
  text: string;
  /** Index of the first character of the comment in the input string */
  start: number;
  /** Index just past the last character of the comment (exclusive) */
  end: number;
}

function isWhitespaceChar(ch: number): boolean {
  return ch === 32 || ch === 9 || ch === 10 || ch === 13 || ch === 12; // space, tab, LF, CR, FF
}

function scanComments(input: string, stopAfterFirst: boolean): SoqlComment[] {
  const comments: SoqlComment[] = [];
  const len = input.length;
  let pos = 0;

  while (pos < len) {
    const ch = input.charCodeAt(pos);

    // String literal: '...' with backslash escape handling (same rules as the
    // lexer) so comment markers inside strings are skipped over. An unterminated
    // string consumes the rest of the input.
    if (ch === 39) {
      // single quote
      pos++;
      while (pos < len) {
        const c = input.charCodeAt(pos);
        if (c === 92) {
          // backslash - skip next character
          pos += 2;
          continue;
        }
        if (c === 39) {
          pos++;
          break;
        }
        pos++;
      }
      continue;
    }

    if (ch === 47) {
      // forward slash
      const next = pos + 1 < len ? input.charCodeAt(pos + 1) : 0;
      if (next === 47) {
        // '//' - line comment runs to end of line or end of input; the newline
        // is not part of the comment
        const start = pos;
        pos += 2;
        while (pos < len) {
          const c = input.charCodeAt(pos);
          if (c === 10 || c === 13) {
            break;
          }
          pos++;
        }
        comments.push({ type: 'line', text: input.substring(start, pos), start, end: pos });
        if (stopAfterFirst) {
          return comments;
        }
        continue;
      }
      if (next === 42) {
        // '/*' - block comment runs through '*/' (non-nesting); an unterminated
        // comment runs to end of input rather than throwing
        const start = pos;
        pos += 2;
        while (pos < len) {
          if (input.charCodeAt(pos) === 42 && pos + 1 < len && input.charCodeAt(pos + 1) === 47) {
            pos += 2;
            break;
          }
          pos++;
        }
        comments.push({ type: 'block', text: input.substring(start, pos), start, end: pos });
        if (stopAfterFirst) {
          return comments;
        }
        continue;
      }
    }

    pos++;
  }

  return comments;
}

/**
 * Returns all comments found in a query string, in order of appearance.
 * Does not parse or validate the query and never throws.
 * @param soql raw query string (does not need to be valid SOQL)
 * @returns comments with their type, text (including delimiters), and position
 */
export function getComments(soql: string): SoqlComment[] {
  return scanComments(soql, false);
}

/**
 * Returns `true` if the query string contains at least one comment.
 * Does not parse or validate the query and never throws.
 * @param soql raw query string (does not need to be valid SOQL)
 */
export function hasComments(soql: string): boolean {
  return scanComments(soql, true).length > 0;
}

/**
 * Removes all comments from a query string without otherwise modifying it -
 * no parsing, no reformatting, no whitespace or keyword normalization.
 * If the string contains no comments, the original string is returned as-is,
 * so this is safe to call unconditionally on every query.
 *
 * A single space is inserted in place of a removed comment when it directly
 * touched non-whitespace on both sides (e.g. `SELECT Id/*c*\/FROM` becomes
 * `SELECT Id FROM`) so adjacent tokens are never merged. Whitespace that
 * surrounded a comment is left as-is.
 * @param soql raw query string (does not need to be valid SOQL)
 * @returns the query with comments removed, or the original string if there were none
 */
export function stripComments(soql: string): string {
  const comments = scanComments(soql, false);
  if (comments.length === 0) {
    return soql;
  }
  let output = '';
  let prevEnd = 0;
  for (const comment of comments) {
    output += soql.substring(prevEnd, comment.start);
    const charBefore = output.length > 0 ? output.charCodeAt(output.length - 1) : 0;
    const charAfter = comment.end < soql.length ? soql.charCodeAt(comment.end) : 0;
    if (charBefore !== 0 && !isWhitespaceChar(charBefore) && charAfter !== 0 && !isWhitespaceChar(charAfter)) {
      output += ' ';
    }
    prevEnd = comment.end;
  }
  output += soql.substring(prevEnd);
  return output;
}
