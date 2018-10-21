import { composeQuery } from './SoqlComposer';
import { parseQuery } from './SoqlParser';

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
  active?: boolean;
  numIndent?: number;
  fieldMaxLineLen?: number;
  logging?: boolean;
}

export function formatQuery(soql: string) {
  return composeQuery(parseQuery(soql), { format: true });
}

export class Formatter {
  options: FormatOptions;

  constructor(options: FormatOptions) {
    this.options = {
      active: false,
      numIndent: 1,
      fieldMaxLineLen: 60,
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
    return new Array(this.options.numIndent).fill('\t').join('');
  }

  formatFields(fieldData: FieldData) {
    function trimPrevSuffix(currIdx: number) {
      if (fieldData.fields[currIdx - 1]) {
        fieldData.fields[currIdx - 1].suffix = fieldData.fields[currIdx - 1].suffix.trim();
      }
    }

    fieldData.fields.forEach((field, i) => {
      field.suffix = fieldData.fields.length - 1 === i ? '' : ', ';
    });

    if (this.options.active) {
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
        } else if (this.options.fieldMaxLineLen) {
          // If max line length is specified, create a new line when needed
          lineLen += field.text.length;
          if (lineLen > this.options.fieldMaxLineLen || newLineAndIndentNext) {
            trimPrevSuffix(i);
            field.prefix += '\n\t';
            lineLen = 0;
            newLineAndIndentNext = false;
          }
        }

        this.log(field);
      });
    }
  }

  formatClause(clause: string, isSubquery: boolean = false) {
    if (isSubquery) {
      return this.options.active ? `\n${this.getIndent()}${clause}` : ` ${clause}`;
    } else {
      return this.options.active ? `\n${clause}` : ` ${clause}`;
    }
  }
  formatAddNewLine(alt: string = ' ', isSubquery: boolean = false) {
    if (isSubquery) {
      return this.options.active ? `\n${this.getIndent()}` : alt;
    } else {
      return this.options.active ? `\n` : alt;
    }
  }
}
