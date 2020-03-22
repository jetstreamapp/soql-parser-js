import { LightningElement, track, api } from 'lwc';
import { Query, composeQuery } from 'soql-parser-js';
import * as hljs from 'highlight.js/lib/highlight.js';
hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'));

const DEFAULT_LINE_LEN = 60;
const NOT_DIGIT_RGX = /[^\d]/g;

export default class QueryComposer extends LightningElement {
  private _parsedQuery: Query;

  @api
  set parsedQuery(query: Query) {
    this._parsedQuery = query;
    this.composeQuery();
  }
  get parsedQuery() {
    return this._parsedQuery;
  }

  @track composedQuery: string;
  @track formatOutput = true;
  @track fieldSubqueryParensOnOwnLine = true;
  @track whereClauseOperatorsIndented = false;
  @track fieldMaxLineLength = DEFAULT_LINE_LEN;
  hasRendered = false;
  fieldMaxLineLengthTransformFn = (value: string): string => {
    return (value as string).replace(NOT_DIGIT_RGX, '');
  };

  get formDisabled() {
    return !this.formatOutput;
  }

  renderedCallback() {
    // @ts-ignore type-mismatch
    const element = this.template.querySelector('code.javascript');
    element.innerText =
      `// composeQuery(parsedQuery), {\n` +
      `//   format: ${this.formatOutput},\n` +
      `//   formatOptions: {\n` +
      `//     fieldSubqueryParensOnOwnLine: ${this.fieldSubqueryParensOnOwnLine},\n` +
      `//     whereClauseOperatorsIndented: ${this.whereClauseOperatorsIndented},\n` +
      `//     fieldMaxLineLength: ${this.fieldMaxLineLength},\n` +
      `//   }\n` +
      `// });\n`;

    element.innerText =
      `// composeQuery(parsedQuery), {\n` +
      `//   format: ${this.formatOutput},\n` +
      `//   formatOptions: { fieldSubqueryParensOnOwnLine: ${this.fieldSubqueryParensOnOwnLine}, whereClauseOperatorsIndented: ${this.whereClauseOperatorsIndented}, fieldMaxLineLength: ${this.fieldMaxLineLength} }\n` +
      `// });\n`;

    // element.innerText = `// composeQuery(parsedQuery, { format: ${this.formatOutput}, formatOptions: { fieldSubqueryParensOnOwnLine, whereClauseOperatorsIndented, fieldMaxLineLength } });`;
    hljs.highlightBlock(element);
    this.hasRendered = true;
  }

  composeQuery() {
    try {
      if (this.parsedQuery) {
        const { fieldSubqueryParensOnOwnLine, whereClauseOperatorsIndented, fieldMaxLineLength } = this;
        this.composedQuery = composeQuery(JSON.parse(JSON.stringify(this.parsedQuery)), {
          format: this.formatOutput,
          formatOptions: { fieldSubqueryParensOnOwnLine, whereClauseOperatorsIndented, fieldMaxLineLength }
        });
        this.highlight();
      }
    } catch (err) {
      this.composedQuery = '';
    }
  }

  handleChange(event) {
    const { name, value } = event.detail;
    switch (name) {
      case 'formatOutput': {
        this.formatOutput = value;
        break;
      }
      case 'fieldSubqueryParensOnOwnLine': {
        this.fieldSubqueryParensOnOwnLine = value;
        break;
      }
      case 'whereClauseOperatorsIndented': {
        this.whereClauseOperatorsIndented = value;
        break;
      }
      case 'fieldMaxLineLength': {
        this.fieldMaxLineLength = +value || DEFAULT_LINE_LEN;
        break;
      }
      default:
        break;
    }
    this.composeQuery();
  }

  highlight() {
    // @ts-ignore type-mismatch
    const element = this.template.querySelector('code.language-sql');
    element.innerText = this.composedQuery;
    hljs.highlightBlock(element);
  }
}
