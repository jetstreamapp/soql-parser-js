import { LightningElement, track, api } from 'lwc';
import { Query, composeQuery } from 'soql-parser-js';
import * as hljs from 'highlight.js/lib/highlight.js';
hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'));

const DEFAULT_LINE_LEN = 60;

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

  get formDisabled() {
    return !this.formatOutput;
  }

  composeQuery() {
    try {
      if (this.parsedQuery) {
        const { fieldSubqueryParensOnOwnLine, whereClauseOperatorsIndented, fieldMaxLineLength } = this;
        this.composedQuery = composeQuery(JSON.parse(JSON.stringify(this.parsedQuery)), {
          format: this.formatOutput,
          formatOptions: {
            fieldSubqueryParensOnOwnLine,
            whereClauseOperatorsIndented,
            fieldMaxLineLength
          }
        });
        this.highlight();
      }
    } catch (err) {
      this.composedQuery = '';
    }
  }

  handleChange(event) {
    switch (event.detail.name) {
      case 'formatOutput': {
        this.formatOutput = event.detail.value;
        break;
      }
      case 'fieldSubqueryParensOnOwnLine': {
        this.fieldSubqueryParensOnOwnLine = event.detail.value;
        break;
      }
      case 'whereClauseOperatorsIndented': {
        this.whereClauseOperatorsIndented = event.detail.value;
        break;
      }
      case 'fieldMaxLineLength': {
        this.fieldMaxLineLength = +event.detail.value || DEFAULT_LINE_LEN;
        break;
      }
      default:
        break;
    }
    this.composeQuery();
  }

  highlight() {
    const element = this.template.querySelector('code.language-sql');
    element.innerText = this.composedQuery;
    hljs.highlightBlock(element);
  }
}
