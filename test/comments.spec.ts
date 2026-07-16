import { describe, it, expect } from 'vitest';
import { getComments, hasComments, stripComments } from '../src/parser/comments';

// ===========================================================================
// stripComments
// ===========================================================================

describe('stripComments - queries without comments', () => {
  it('should return the original string reference when there are no comments', () => {
    const soql = "SELECT Id, Name FROM Account WHERE Name = 'test'";
    expect(stripComments(soql)).toBe(soql);
  });

  it('should return the original string reference for an empty string', () => {
    const soql = '';
    expect(stripComments(soql)).toBe(soql);
  });

  it('should NOT treat // inside a string literal as a comment', () => {
    const soql = "SELECT Id FROM Account WHERE Url = 'http://example.com'";
    expect(stripComments(soql)).toBe(soql);
  });

  it('should NOT treat /* */ inside a string literal as a comment', () => {
    const soql = "SELECT Id FROM Account WHERE Name = 'a /* not a comment */ b'";
    expect(stripComments(soql)).toBe(soql);
  });

  it('should respect escaped quotes inside string literals', () => {
    const soql = "SELECT Id FROM Account WHERE Name = 'it\\'s // still a string'";
    expect(stripComments(soql)).toBe(soql);
  });

  it('should treat an unterminated string literal as a string through end of input', () => {
    const soql = "SELECT Id FROM Account WHERE Name = 'unterminated // not a comment";
    expect(stripComments(soql)).toBe(soql);
  });

  it('should not modify a lone forward slash', () => {
    const soql = 'SELECT Id FROM Account WHERE Ratio__c = 1 / 2';
    expect(stripComments(soql)).toBe(soql);
  });
});

describe('stripComments - line comments', () => {
  it('should strip a trailing line comment without a newline', () => {
    expect(stripComments('SELECT Id FROM Account // trailing comment')).toBe('SELECT Id FROM Account ');
  });

  it('should strip a line comment and preserve the LF', () => {
    expect(stripComments('SELECT Id // fields\nFROM Account')).toBe('SELECT Id \nFROM Account');
  });

  it('should strip a line comment and preserve the CRLF', () => {
    expect(stripComments('SELECT Id // fields\r\nFROM Account')).toBe('SELECT Id \r\nFROM Account');
  });

  it('should strip a whole-line comment but leave the blank line', () => {
    expect(stripComments('SELECT Id\n// a whole line comment\nFROM Account')).toBe('SELECT Id\n\nFROM Account');
  });

  it('should strip comment-only input to an empty string', () => {
    expect(stripComments('// nothing but a comment')).toBe('');
  });

  it('should not treat */ inside a line comment specially', () => {
    expect(stripComments('SELECT Id // has */ in it\nFROM Account')).toBe('SELECT Id \nFROM Account');
  });
});

describe('stripComments - block comments', () => {
  it('should strip an inline block comment surrounded by spaces, preserving the spaces', () => {
    expect(stripComments('SELECT /* fields */ Id FROM Account')).toBe('SELECT  Id FROM Account');
  });

  it('should strip a block comment spanning multiple lines', () => {
    expect(stripComments('SELECT Id\n/* this comment\nspans several\nlines */\nFROM Account')).toBe('SELECT Id\n\nFROM Account');
  });

  it('should strip block comments at the start and end of input', () => {
    expect(stripComments('/* start */ SELECT Id FROM Account /* end */')).toBe(' SELECT Id FROM Account ');
  });

  it('should insert a space when a removed comment directly touched tokens on both sides', () => {
    expect(stripComments('SELECT Id/*c*/FROM Account')).toBe('SELECT Id FROM Account');
  });

  it('should insert a space for the minimal empty block comment between tokens', () => {
    expect(stripComments('SELECT/**/Id FROM Account')).toBe('SELECT Id FROM Account');
  });

  it('should not double-space adjacent block comments between tokens', () => {
    expect(stripComments('SELECT/**//**/Id FROM Account')).toBe('SELECT Id FROM Account');
  });

  it('should not insert a space when the comment is at the start of input', () => {
    expect(stripComments('/*c*/SELECT Id FROM Account')).toBe('SELECT Id FROM Account');
  });

  it('should not insert a space when the comment is at the end of input', () => {
    expect(stripComments('SELECT Id FROM Account/*c*/')).toBe('SELECT Id FROM Account');
  });

  it('should not nest block comments (first */ closes)', () => {
    expect(stripComments('SELECT /* outer /* inner */ Id FROM Account')).toBe('SELECT  Id FROM Account');
  });

  it('should ignore // inside a block comment', () => {
    expect(stripComments('SELECT /* has // inside */ Id FROM Account')).toBe('SELECT  Id FROM Account');
  });

  it('should strip an unterminated block comment through end of input without throwing', () => {
    expect(stripComments('SELECT Id FROM Account /* unterminated')).toBe('SELECT Id FROM Account ');
  });

  it('should strip comments containing string quotes', () => {
    expect(stripComments("SELECT Id /* don't */ FROM Account")).toBe('SELECT Id  FROM Account');
  });
});

describe('stripComments - non-SOQL input', () => {
  it('should never throw on arbitrary text', () => {
    expect(stripComments('this is not soql // comment')).toBe('this is not soql ');
    expect(stripComments('random / slash and { braces }')).toBe('random / slash and { braces }');
  });
});

// ===========================================================================
// hasComments
// ===========================================================================

describe('hasComments', () => {
  it('should return false for a query without comments', () => {
    expect(hasComments('SELECT Id FROM Account')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(hasComments('')).toBe(false);
  });

  it('should return true for a line comment', () => {
    expect(hasComments('SELECT Id FROM Account // comment')).toBe(true);
  });

  it('should return true for a block comment', () => {
    expect(hasComments('SELECT /* fields */ Id FROM Account')).toBe(true);
  });

  it('should return true for an unterminated block comment', () => {
    expect(hasComments('SELECT Id FROM Account /* unterminated')).toBe(true);
  });

  it('should return false when comment markers only appear inside string literals', () => {
    expect(hasComments("SELECT Id FROM Account WHERE Url = 'http://example.com'")).toBe(false);
    expect(hasComments("SELECT Id FROM Account WHERE Name = '/* nope */'")).toBe(false);
  });
});

// ===========================================================================
// getComments
// ===========================================================================

describe('getComments', () => {
  it('should return an empty array for a query without comments', () => {
    expect(getComments('SELECT Id FROM Account')).toEqual([]);
  });

  it('should return line comment with text and position', () => {
    const soql = 'SELECT Id FROM Account // trailing';
    expect(getComments(soql)).toEqual([{ type: 'line', text: '// trailing', start: 23, end: 34 }]);
  });

  it('should not include the newline in a line comment', () => {
    const soql = 'SELECT Id // fields\nFROM Account';
    const [comment] = getComments(soql);
    expect(comment.text).toBe('// fields');
    expect(soql.charAt(comment.end)).toBe('\n');
  });

  it('should return block comment including delimiters', () => {
    const soql = 'SELECT /* fields */ Id FROM Account';
    expect(getComments(soql)).toEqual([{ type: 'block', text: '/* fields */', start: 7, end: 19 }]);
  });

  it('should return multiple comments in order of appearance', () => {
    const soql = '/* start */ SELECT Id // middle\nFROM Account /* end */';
    const comments = getComments(soql);
    expect(comments.map(c => c.text)).toEqual(['/* start */', '// middle', '/* end */']);
    expect(comments.map(c => c.type)).toEqual(['block', 'line', 'block']);
  });

  it('should return an unterminated block comment running through end of input', () => {
    const soql = 'SELECT Id /* unterminated';
    expect(getComments(soql)).toEqual([{ type: 'block', text: '/* unterminated', start: 10, end: soql.length }]);
  });

  it('should reconstruct the original string from positions', () => {
    const soql = 'SELECT /* a */ Id // b\nFROM Account';
    for (const comment of getComments(soql)) {
      expect(soql.substring(comment.start, comment.end)).toBe(comment.text);
    }
  });
});
