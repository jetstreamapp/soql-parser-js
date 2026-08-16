/*
 * Copyright (c) Austin Turner
 * The software in this package is published under the terms of the MIT license,
 * a copy of which has been included with this distribution in the LICENSE.txt file.
 */
import { FieldType, FieldTypeOf, HavingClause, Query, Subquery, WhereClause } from '../api/api-models';
import {
  NonNegationCondition,
  queryClauses,
  renderConditionLhs,
  renderConditionValue,
  renderFieldText,
  renderTypeOfParts,
} from '../composer/leaf';
import * as utils from '../utils';

export interface FormatOptions {
  /**
   * @default 1
   *
   * Number of times `indentString` is repeated for each level of indentation.
   */
  numIndent?: number;
  /**
   * @default '\t'
   *
   * The string used for one unit of indentation. Combined with `numIndent` to produce each indentation level.
   * For example `{ indentString: ' ', numIndent: 2 }` indents with two spaces per level.
   * Must be whitespace only (spaces and/or tabs) - any other value would produce invalid SOQL and is ignored.
   */
  indentString?: string;
  /**
   * @default 60
   *
   * Number of characters before wrapping to a new line.
   * Set to 0 or 1 to force every field on a new line.
   * TYPEOF fields do not honor this setting, they will always be on one line unless `newLineAfterKeywords` is true,
   * in which case it will span multiple lines.
   * This also applies to the items of GROUP BY and ORDER BY clauses.
   */
  fieldMaxLineLength?: number;
  /**
   * @default true
   *
   * Set to true to have a subquery parentheses start and end on a new line.
   * This will be set to true if `newLineAfterKeywords` is true, in which case this property can be omitted
   */
  fieldSubqueryParensOnOwnLine?: boolean;
  /** @deprecated as of 3.3.0 - this is always true and will be removed in future version */
  whereClauseOperatorsIndented?: boolean;
  /**
   * @default false
   *
   * Adds a new line and indent after all keywords (such as SELECT, FROM, WHERE, ORDER BY, etc..)
   * Setting this to true will add new lines in other places as well, such as complex WHERE clauses
   */
  newLineAfterKeywords?: boolean;
  /** @deprecated as of 8.0.0 - this is ignored and will be removed in a future version */
  logging?: boolean;
}

export type ResolvedFormatOptions = Required<
  Pick<FormatOptions, 'numIndent' | 'indentString' | 'fieldMaxLineLength' | 'fieldSubqueryParensOnOwnLine' | 'newLineAfterKeywords'>
>;

/**
 * Applies defaults to the provided format options
 */
export function resolveFormatOptions(options: FormatOptions = {}): ResolvedFormatOptions {
  const newLineAfterKeywords = options.newLineAfterKeywords ?? false;
  return {
    // `>= 1` instead of `> 0` so that a fractional value does not floor down to no indentation at all
    numIndent: utils.isNumber(options.numIndent) && options.numIndent >= 1 ? Math.floor(options.numIndent) : 1,
    // Anything other than whitespace would be emitted into the query itself and produce invalid SOQL
    indentString: utils.isString(options.indentString) && /^[ \t]*$/.test(options.indentString) ? options.indentString : '\t',
    fieldMaxLineLength: utils.isNumber(options.fieldMaxLineLength) ? options.fieldMaxLineLength : 60,
    // Subquery parens must be on their own line if there is a new line after every keyword
    fieldSubqueryParensOnOwnLine: newLineAfterKeywords || (options.fieldSubqueryParensOnOwnLine ?? true),
    newLineAfterKeywords,
  };
}

/**
 * A single line of formatted output.
 * `indent` is the absolute indentation level (not a number of characters) - the actual indentation
 * characters are only applied when the lines are rendered to a string.
 */
interface Line {
  indent: number;
  text: string;
}

/**
 * Small helper for building up lines of output.
 * `push` starts a new line, `append` adds text to the current (last) line, starting one at `indent` if there is none yet.
 *
 * Every line in the buffer ends up with text on it - nothing downstream filters empty lines out, so a line
 * that would render as blank shows up as one (and is caught by the round-trip test suite).
 */
class Lines {
  readonly lines: Line[] = [];

  push(indent: number, text = ''): void {
    this.lines.push({ indent, text });
  }

  append(indent: number, text: string): void {
    if (this.lines.length === 0) {
      this.push(indent, text);
      return;
    }
    this.lines[this.lines.length - 1].text += text;
  }

  concat(lines: Line[]): void {
    this.lines.push(...lines);
  }
}

/**
 * Formatter
 * Turns a parsed query into a formatted, multi-line SOQL string based on the provided `FormatOptions`.
 *
 * The formatter walks the query and produces a list of `Line`s, where every line carries its absolute
 * indentation level. Nested structures (subqueries, parenthesized WHERE conditions) simply pass a deeper
 * base indentation to their children, so indentation is always known when a line is created and never
 * needs to be fixed up after the fact. Rendering the lines to a string is the final step.
 *
 * Indentation rules (`b` is the indentation level of the query's keywords):
 * - Clause keywords (SELECT, FROM, WHERE, ...) are at `b`. Values are on the same line, or at `b + 1` if `newLineAfterKeywords` is true.
 * - SELECT fields wrap at `fieldMaxLineLength` onto lines at `b + 1`. Subquery and TYPEOF fields are always on their own line(s).
 * - Subqueries in the SELECT clause: parens at `b + 1` and the subquery at `b + 2` (or the subquery at `b + 1` with the parens hugging the first and last line if `fieldSubqueryParensOnOwnLine` is false).
 * - WHERE/HAVING conditions: the first condition is on the keyword line, each subsequent condition starts a new line prefixed with its AND/OR operator.
 *   Every open parenthesis increases the indentation of the following conditions by one level; a closing parenthesis is on its own line at the level of the group it closes.
 *   The exception is `(NOT <condition>)`, which is kept inline as a single unit.
 * - Subqueries in WHERE conditions (`Id IN (SELECT ...)`) are one level deeper than the condition they belong to, with the closing paren at the level of the condition.
 * - GROUP BY / ORDER BY items wrap at `fieldMaxLineLength` (or one per line if `newLineAfterKeywords` is true) onto lines at `b + 1`.
 */
export class Formatter {
  readonly options: ResolvedFormatOptions;

  constructor(options: FormatOptions = {}) {
    this.options = resolveFormatOptions(options);
  }

  /**
   * Formats a query (or subquery) into a multi-line SOQL string
   */
  formatQuery(query: Query | Subquery): string {
    return this.render(this.query(query, 0));
  }

  /**
   * Formats a WHERE or HAVING clause (without the keyword).
   * The first line is not indented, so the result can be placed directly after a keyword.
   */
  formatWhereOrHavingClause(whereOrHaving: WhereClause | HavingClause, base = 0): string {
    return this.renderFragment(this.conditions(whereOrHaving, base));
  }

  /**
   * Formats a subquery from the SELECT clause, including the surrounding parentheses
   */
  formatSubqueryField(subquery: Subquery): string {
    const out = new Lines();
    this.selectSubquery(out, subquery, 0, '');
    return this.render(out.lines);
  }

  /**
   * Formats a comma separated list of items (e.g. GROUP BY or ORDER BY items), wrapping based on the format options.
   * The first line is not indented, so the result can be placed directly after a keyword.
   */
  formatList(items: string[]): string {
    return this.renderFragment(this.listRows(items).map(text => ({ indent: 1, text })));
  }

  /**
   * Renders lines to a string, applying the configured indentation
   */
  private render(lines: Line[]): string {
    return lines.map(line => `${this.indent(line.indent)}${line.text}`).join('\n');
  }

  /**
   * Renders lines to a string, but without indenting the first line
   */
  private renderFragment(lines: Line[]): string {
    return lines.map((line, i) => (i === 0 ? line.text : `${this.indent(line.indent)}${line.text}`)).join('\n');
  }

  private indent(level: number): string {
    return this.options.indentString.repeat(this.options.numIndent * Math.max(level, 0));
  }

  /**
   * Produces the lines for a query (or subquery), with all keywords at indentation level `base`
   */
  private query(query: Query | Subquery, base: number): Line[] {
    const out = new Lines();

    for (const part of queryClauses(query)) {
      switch (part.kind) {
        case 'select':
          this.selectClause(out, part.fields, base);
          break;
        case 'value':
          this.clause(out, base, part.keyword, part.value);
          break;
        case 'bare':
          out.push(base, part.keyword);
          break;
        case 'list':
          this.listClause(out, base, part.keyword, part.items);
          break;
        case 'conditions':
          this.keywordThen(out, base, part.keyword, this.conditions(part.clause, base));
          break;
      }
    }

    return out.lines;
  }

  /**
   * `KEYWORD value` on one line, or `KEYWORD` followed by the value on the next line if `newLineAfterKeywords` is true
   */
  private clause(out: Lines, base: number, keyword: string, value: string): void {
    if (this.options.newLineAfterKeywords) {
      out.push(base, keyword);
      out.push(base + 1, value);
    } else {
      out.push(base, `${keyword} ${value}`);
    }
  }

  /**
   * Adds a keyword followed by pre-built lines.
   * The first line continues on the keyword line, unless `newLineAfterKeywords` is true, in which case all lines are on their own line.
   */
  private keywordThen(out: Lines, base: number, keyword: string, lines: Line[]): void {
    const [first, ...rest] = lines;
    if (this.options.newLineAfterKeywords || !first) {
      out.push(base, keyword);
      out.concat(lines);
    } else {
      out.push(base, `${keyword} ${first.text}`);
      out.concat(rest);
    }
  }

  /**
   * SELECT clause - wraps fields based on `fieldMaxLineLength`, subqueries and TYPEOF fields are always on their own line(s)
   */
  private selectClause(out: Lines, fields: FieldType[], base: number): void {
    const { newLineAfterKeywords } = this.options;
    out.push(base, 'SELECT');

    const wrap = this.wrapper(false);
    let items: string[] = [];
    let breakBeforeNext = false;
    // In the default mode, the first field(s) go on the SELECT line - otherwise every line of fields is indented on its own line
    let onKeywordLine = !newLineAfterKeywords;

    const flush = (hasMoreFields: boolean) => {
      if (items.length > 0) {
        const text = `${items.join(', ')}${hasMoreFields ? ',' : ''}`;
        if (onKeywordLine) {
          out.append(base, ` ${text}`);
        } else {
          out.push(base + 1, text);
        }
        items = [];
      }
      onKeywordLine = false;
    };

    fields.forEach((field, i) => {
      const isLast = i === fields.length - 1;
      const trailingComma = isLast ? '' : ',';
      if (field.type === 'FieldSubquery') {
        flush(true);
        // the subquery occupies its own line(s), so the next field starts from an empty row
        wrap.reset();
        this.selectSubquery(out, field.subquery, base + 1, trailingComma);
        breakBeforeNext = true;
      } else if (field.type === 'FieldTypeof') {
        flush(true);
        wrap.reset();
        this.typeOfField(out, field, base + 1, trailingComma);
        breakBeforeNext = true;
      } else {
        const text = renderFieldText(field);
        if (wrap.startsNewRow(text, isLast) || breakBeforeNext) {
          flush(true);
          breakBeforeNext = false;
        }
        items.push(text);
      }
    });
    flush(false);
  }

  /**
   * The shared wrapping budget for comma separated items, used by the SELECT clause and by GROUP BY / ORDER BY
   * so that `fieldMaxLineLength` means the same thing everywhere.
   *
   * `startsNewRow` is called once per item, in order, and returns true when that item has to start a new row.
   * The `", "` separator that follows every item except the last counts towards the budget, and an item that
   * wraps carries its own length onto the new row, so a row never exceeds `fieldMaxLineLength` unless a
   * single item is longer than the whole budget. This is also what makes `fieldMaxLineLength` of 0 or 1 put
   * every item on its own line.
   */
  private wrapper(oneItemPerRow: boolean) {
    const { fieldMaxLineLength } = this.options;
    let length = 0;
    return {
      startsNewRow(text: string, isLast: boolean): boolean {
        const itemLength = text.length + (isLast ? 0 : 2);
        if (oneItemPerRow || length + itemLength > fieldMaxLineLength) {
          length = itemLength;
          return true;
        }
        length += itemLength;
        return false;
      },
      reset(): void {
        length = 0;
      },
    };
  }

  /**
   * Subquery in the SELECT clause. `indent` is the level of the parentheses.
   */
  private selectSubquery(out: Lines, subquery: Subquery, indent: number, trailingComma: string): void {
    if (this.options.fieldSubqueryParensOnOwnLine) {
      out.push(indent, '(');
      out.concat(this.query(subquery, indent + 1));
      out.push(indent, `)${trailingComma}`);
    } else {
      // parens hug the first and last line of the subquery
      const lines = this.query(subquery, indent);
      if (lines.length === 0) {
        out.push(indent, `()${trailingComma}`);
        return;
      }
      lines[0] = { ...lines[0], text: `(${lines[0].text}` };
      const last = lines.length - 1;
      lines[last] = { ...lines[last], text: `${lines[last].text})${trailingComma}` };
      out.concat(lines);
    }
  }

  /**
   * TYPEOF field. On one line, or split by keyword if `newLineAfterKeywords` is true.
   */
  private typeOfField(out: Lines, field: FieldTypeOf, indent: number, trailingComma: string): void {
    if (!this.options.newLineAfterKeywords) {
      out.push(indent, `${renderTypeOfParts(field).join(' ')}${trailingComma}`);
      return;
    }
    out.push(indent, `TYPEOF ${field.field}`);
    field.conditions.forEach(condition => {
      out.push(indent + 1, condition.type);
      if (condition.objectType) {
        out.push(indent + 2, condition.objectType);
        out.push(indent + 1, 'THEN');
      }
      out.push(indent + 2, condition.fieldList.join(', '));
    });
    out.push(indent, `END${trailingComma}`);
  }

  /**
   * GROUP BY / ORDER BY - comma separated items that wrap at `fieldMaxLineLength` (or one per line if `newLineAfterKeywords` is true)
   */
  private listClause(out: Lines, base: number, keyword: string, items: string[]): void {
    this.keywordThen(
      out,
      base,
      keyword,
      this.listRows(items).map(text => ({ indent: base + 1, text })),
    );
  }

  private listRows(items: string[]): string[] {
    const wrap = this.wrapper(this.options.newLineAfterKeywords);
    const rows: string[] = [];
    let current: string[] = [];
    items.forEach((item, i) => {
      if (wrap.startsNewRow(item, i === items.length - 1) && current.length > 0) {
        rows.push(`${current.join(', ')},`);
        current = [];
      }
      current.push(item);
    });
    rows.push(current.join(', '));
    return rows;
  }

  /**
   * WHERE / HAVING conditions.
   * The clause is a linked list of `left` condition + `operator` + `right` (the rest of the list), where parentheses are
   * stored as open/close counts on the conditions themselves.
   *
   * Every open paren adds a level to the `parens` stack and indents the conditions that follow.
   * A `NOT` that is immediately preceded by an open paren and immediately followed by the matching close paren
   * (`(NOT Name = 'a')`) is kept together on one line - the stack tracks these "hugging" parens so the close paren stays inline too.
   */
  private conditions(clause: WhereClause | HavingClause, base: number): Line[] {
    const out = new Lines();
    /** One entry per currently open paren. `true` if the paren hugs a NOT and should stay inline */
    const parens: boolean[] = [];
    const conditionIndent = () => base + parens.length + 1;

    let node: WhereClause | HavingClause | undefined = clause;
    while (node) {
      const left = node.left;
      const next: WhereClause | HavingClause | undefined = utils.isWhereOrHavingClauseWithRightCondition(node) ? node.right : undefined;
      if (utils.isNegationCondition(left)) {
        // parens preceding a NOT, e.g. `(NOT Id = '1')` or `((NOT (Name = 'a' OR Name = 'b')) AND Id = '1')`
        const hugsNot = this.isSelfContainedNegation(next);
        for (let i = 0; i < left.openParen; i++) {
          const hug = hugsNot && i === left.openParen - 1;
          out.append(conditionIndent(), '(');
          parens.push(hug);
          if (!hug) {
            out.push(conditionIndent());
          }
        }
      } else if (left) {
        for (let i = 0; i < (left.openParen || 0); i++) {
          out.append(conditionIndent(), '(');
          parens.push(false);
          out.push(conditionIndent());
        }
        this.condition(out, left, conditionIndent());
        for (let i = 0; i < (left.closeParen || 0); i++) {
          const hug = parens.pop() ?? false;
          const indent = conditionIndent();
          if (hug) {
            out.append(indent, ')');
          } else {
            out.push(indent, ')');
          }
        }
      }
      if (utils.isWhereOrHavingClauseWithRightCondition(node)) {
        if (node.operator === 'NOT') {
          out.append(conditionIndent(), 'NOT ');
        } else {
          out.push(conditionIndent(), `${node.operator} `);
        }
      }
      node = next;
    }
    return out.lines;
  }

  /**
   * True if the condition following a NOT is a single condition that closes the paren the NOT is in, e.g. `(NOT Id = '1')`.
   * In this case the negation is kept inline instead of splitting the parens onto their own lines.
   */
  private isSelfContainedNegation(nodeAfterNot: WhereClause | HavingClause | undefined): boolean {
    const condition = nodeAfterNot?.left;
    return !!condition && !utils.isNegationCondition(condition) && !(condition.openParen || 0) && (condition.closeParen || 0) > 0;
  }

  /**
   * A single condition, e.g. `Name = 'foo'` or `Id IN (SELECT ...)`, appended to the current line
   */
  private condition(out: Lines, condition: NonNegationCondition, indent: number): void {
    if (utils.isValueQueryCondition(condition)) {
      out.append(indent, `${renderConditionLhs(condition)} (`);
      if (this.options.fieldSubqueryParensOnOwnLine) {
        out.concat(this.query(condition.valueQuery, indent + 1));
        out.push(indent, ')');
      } else {
        const lines = this.query(condition.valueQuery, indent);
        if (lines.length > 0) {
          out.append(indent, lines[0].text);
          out.concat(lines.slice(1));
        }
        out.append(indent, ')');
      }
    } else {
      out.append(indent, `${renderConditionLhs(condition)} ${renderConditionValue(condition)}`);
    }
  }
}
