import { FieldTypeOfCondition } from '../api/api-models';
import { isNumber, generateParens } from '../utils';

export interface FieldData {
  fields: {
    text: string;
    typeOfClause?: string[];
    isSubquery: boolean;
    prefix: string;
    suffix: string;
  }[];
  isSubquery: boolean;
  lineBreaks: number[];
}

export interface FormatOptions {
  /**
   * @default 1
   *
   * Number of tabs to indent by
   * These defaults to one
   */
  numIndent?: number;
  /**
   * @default 60
   *
   * Number of characters before wrapping to a new line.
   * Set to 0 or 1 to force every field on a new line.
   * TYPEOF fields do not honor this setting, they will always be on one line unless `newLineAfterKeywords` is true,
   * in which case it will span multiple lines.
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
  logging?: boolean;
}

/**
 * Formatter
 * This class aids in building a SOQL query from a parse query
 * and optionally formats parts of the query based on the configuration options passed in
 */
export class Formatter {
  enabled: boolean;
  private options: Required<FormatOptions>;
  private currIndent = 1;

  constructor(enabled: boolean, options: FormatOptions) {
    this.enabled = enabled;
    this.options = {
      numIndent: options.numIndent ?? 1,
      fieldMaxLineLength: options.fieldMaxLineLength ?? 60,
      fieldSubqueryParensOnOwnLine: options.fieldSubqueryParensOnOwnLine ?? true,
      whereClauseOperatorsIndented: true,
      newLineAfterKeywords: options.newLineAfterKeywords ?? false,
      logging: options.logging ?? false,
    };
    if (this.options.newLineAfterKeywords) {
      this.options.fieldSubqueryParensOnOwnLine = true;
    }
  }

  private log(data: any) {
    if (this.options.logging) {
      console.log(data);
    }
  }

  private getIndent(additionalIndent = 0) {
    return this.repeatChar((this.currIndent + additionalIndent) * (this.options.numIndent || 1), '\t');
  }

  private repeatChar(numTimes: number, char: string) {
    return new Array(numTimes).fill(char).join('');
  }

  setSubquery(isSubquery: boolean) {
    this.currIndent = isSubquery ? (this.currIndent += 1) : (this.currIndent -= 1);
  }

  stepCurrIndex(num: number) {
    this.currIndent += num;
  }

  /**
   * Format fields
   * @param fieldData
   */
  formatFields(fieldData: FieldData): void {
    function trimPrevSuffix(currIdx: number) {
      if (fieldData.fields[currIdx - 1]) {
        fieldData.fields[currIdx - 1].suffix = fieldData.fields[currIdx - 1].suffix.trim();
      }
    }

    fieldData.fields.forEach((field, i) => {
      field.suffix = fieldData.fields.length - 1 === i ? '' : ', ';
    });

    if (this.enabled) {
      let lineLen = 0;
      let newLineAndIndentNext = false;
      fieldData.fields.forEach((field, i) => {
        if (field.isSubquery) {
          // Subquery should always be on a stand-alone line
          trimPrevSuffix(i);
          field.prefix = `\n${this.getIndent()}`;
          field.suffix = fieldData.fields.length - 1 === i ? '' : ', ';
          lineLen = 0;
          newLineAndIndentNext = true;
        } else if (Array.isArray(field.typeOfClause)) {
          trimPrevSuffix(i);
          // always show on a new line
          field.prefix = `\n${this.getIndent()}`;
          newLineAndIndentNext = true;
        } else if (isNumber(this.options.fieldMaxLineLength)) {
          // If max line length is specified, create a new line when needed
          // Add two to account for ", "
          lineLen += field.text.length + field.suffix.length;
          if (lineLen > this.options.fieldMaxLineLength || newLineAndIndentNext) {
            trimPrevSuffix(i);
            if (!this.options.newLineAfterKeywords || i > 0) {
              field.prefix += `\n${this.getIndent()}`;
            }
            lineLen = 0;
            newLineAndIndentNext = false;
          }
        }

        this.log(field);
      });
    }
  }

  formatTyeOfField(text: string, typeOfClause: string[]) {
    if (this.enabled && this.options.newLineAfterKeywords) {
      return typeOfClause
        .map((part, i) => {
          if (i === 0) {
            return part;
          } else if (i === typeOfClause.length - 1) {
            return `${this.getIndent()}${part}`;
          } else {
            return `${this.getIndent()}\t${part}`;
          }
        })
        .join('\n');
    }
    return text;
  }

  formatTypeofFieldCondition(condition: FieldTypeOfCondition) {
    let output = '';
    const fields = condition.fieldList.join(', ');
    if (this.enabled && this.options.newLineAfterKeywords) {
      const indent = this.getIndent();
      output = `${condition.type}`;
      if (condition.objectType) {
        output += `\n${indent}\t\t${condition.objectType}\n${indent}\tTHEN\n${indent}\t\t${fields}`;
      } else {
        output += `\n${indent}\t\t${fields}`;
      }
    } else {
      output = condition.type;
      if (condition.objectType) {
        output += ` ${condition.objectType} THEN ${fields}`;
      } else {
        output += ` ${fields}`;
      }
    }
    return output;
  }

  /**
   * Formats subquery with additional indents
   */
  formatSubquery(queryStr: string, numTabs = 2, incrementTabsWhereClauseOpIndent: boolean = false): string {
    if (incrementTabsWhereClauseOpIndent) {
      numTabs++;
    }
    let leftParen = '(';
    let rightParen = ')';
    if (this.enabled) {
      if (this.options.fieldSubqueryParensOnOwnLine || this.options.newLineAfterKeywords) {
        queryStr = queryStr.replace(/\n/g, `\n${this.repeatChar(numTabs, '\t')}`);
        leftParen = `(\n${this.repeatChar(numTabs, '\t')}`;
        rightParen = `\n${this.repeatChar(numTabs - 1, '\t')})`;
      } else {
        queryStr = queryStr.replace(/\n/g, '\n\t');
      }
    }
    return `${leftParen}${queryStr}${rightParen}`;
  }

  /**
   * Formats all clauses that do not have a more specialized format function
   * If formatting is enabled, then this will put a new line before the clause
   * @param clause
   * @returns clause
   */
  formatClause(clause: string): string {
    if (this.enabled) {
      return this.options.newLineAfterKeywords ? `\n${clause}\n${this.getIndent()}` : `\n${clause}`;
    }
    return ` ${clause}`;
  }

  /**
   * If newLineAfterKeywords is true, then no preceding space will be added
   * This is called after clauses
   * @param text
   * @returns text
   */
  formatText(text: string): string {
    return this.enabled && (this.options.newLineAfterKeywords || text.startsWith('\n')) ? text : ` ${text}`;
  }

  formatWithIndent(text: string): string {
    return this.enabled ? `${this.getIndent()}${text}` : text;
  }

  formatOrderByArray(groupBy: string[]): string {
    if (this.enabled) {
      let currLen = 0;
      let output = '';
      groupBy.forEach((token, i) => {
        const nextToken = groupBy[i + 1];
        currLen += token.length;
        if (nextToken && (currLen + nextToken.length > (this.options.fieldMaxLineLength || 0) || this.options.newLineAfterKeywords)) {
          output += `${token},\n\t`;
          currLen = 0;
        } else {
          output += `${token}${nextToken ? ', ' : ''}`;
        }
      });
      return output;
    } else {
      return groupBy.join(', ');
    }
  }

  /**
   * Formats parens
   * @param count
   * @param character
   * @param [leadingParenInline] Make the leading paren inline (last for "(" and first for ")") used for negation condition
   * @returns
   */
  formatParens(count: number | undefined, character: '(' | ')', leadingParenInline = false) {
    let output = '';
    if (isNumber(count) && count > 0) {
      if (this.enabled) {
        if (character === '(') {
          for (let i = 0; i < count; i++) {
            if (leadingParenInline && i === count - 1) {
              output += '(';
            } else {
              if (i === 0) {
                output += '(\n';
              } else {
                this.currIndent++;
                output += `${this.getIndent()}(\n`;
              }
            }
          }
          if (!leadingParenInline || count > 1) {
            // indent the following clause
            this.currIndent++;
          }
        } else {
          for (let i = count - 1; i >= 0; i--) {
            if (leadingParenInline && i === count - 1) {
              output += ')';
            } else {
              this.currIndent--;
              output += `\n${this.getIndent()})`;
            }
          }
        }
      } else {
        output += generateParens(count, character);
      }
    }
    return output;
  }

  formatWhereClauseOperators(operator: string, whereClause: string, additionalIndent = 0): string {
    const skipNewLineAndIndent = operator === 'NOT';
    if (this.enabled && !skipNewLineAndIndent) {
      return `\n${this.getIndent(additionalIndent)}${operator} ${whereClause}`;
    } else {
      return `${skipNewLineAndIndent ? '' : ' '}${operator} ${whereClause}`;
    }
  }

  formatAddNewLine(alt: string = ' ', skipNewLineAndIndent?: boolean): string {
    return this.enabled && !skipNewLineAndIndent ? `\n` : alt;
  }
}
