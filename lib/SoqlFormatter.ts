import { isNumber } from './utils';

export interface FieldData {
  fields: {
    text: string;
    isSubquery: boolean;
    prefix: string;
    suffix: string;
  }[];
  isSubquery: boolean;
  lineBreaks: number[];
}

export interface FormatOptions {
  numIndent?: number;
  fieldMaxLineLen?: number;
  fieldSubqueryParensOnOwnLine?: boolean;
  whereClauseOperatorsIndented?: boolean;
  logging?: boolean;
}

/**
 * Formatter
 * This class aids in building a SOQL query from a parse query
 * and optionally formats parts of the query based on the configuration options passed in
 */
export class Formatter {
  enabled: boolean;
  private options: FormatOptions;
  private currIndent = 1;

  constructor(enabled: boolean, options: FormatOptions) {
    this.enabled = enabled;
    this.options = {
      numIndent: 1,
      fieldMaxLineLen: 60,
      fieldSubqueryParensOnOwnLine: true,
      whereClauseOperatorsIndented: false,
      logging: false,
      ...options,
    };
  }

  private log(data: any) {
    if (this.options.logging) {
      console.log(data);
    }
  }

  private getIndent() {
    return this.repeatChar(this.currIndent * this.options.numIndent, '\t');
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
        } else if (isNumber(this.options.fieldMaxLineLen)) {
          // If max line length is specified, create a new line when needed
          // Add two to account for ", "
          lineLen += field.text.length + field.suffix.length;
          if (lineLen > this.options.fieldMaxLineLen || newLineAndIndentNext) {
            trimPrevSuffix(i);
            field.prefix += `\n${this.getIndent()}`;
            lineLen = 0;
            newLineAndIndentNext = false;
          }
        }

        this.log(field);
      });
    }
  }

  /**
   * Formats subquery with additional indents
   */
  formatSubquery(queryStr: string, numTabs = 2, incrementTabsWhereClauseOpIndent: boolean = false): string {
    if (incrementTabsWhereClauseOpIndent && this.options.whereClauseOperatorsIndented) {
      numTabs++;
    }
    let leftParen = '(';
    let rightParen = ')';
    if (this.enabled) {
      if (this.options.fieldSubqueryParensOnOwnLine) {
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
    return this.enabled ? `\n${clause}` : ` ${clause}`;
  }

  formatOrderByArray(groupBy: string[]): string {
    if (this.enabled) {
      let currLen = 0;
      let output = '';
      groupBy.forEach((token, i) => {
        const nextToken = groupBy[i + 1];
        currLen += token.length;
        if (nextToken && currLen + nextToken.length > this.options.fieldMaxLineLen) {
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

  formatWhereClauseOperators(operator: string, whereClause: string): string {
    if (this.enabled && this.options.whereClauseOperatorsIndented) {
      return `\n\t${operator} ${whereClause}`;
    } else {
      return `${this.formatAddNewLine(' ')}${operator} ${whereClause}`;
    }
  }

  formatAddNewLine(alt: string = ' '): string {
    return this.enabled ? `\n` : alt;
  }
}
