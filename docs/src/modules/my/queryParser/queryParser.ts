// import * as Prism from 'prismjs';
import * as hljs from 'highlight.js/lib/highlight.js';
import { api, LightningElement, track } from 'lwc';
import { parseQuery, Query } from 'soql-parser-js';

hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));

export default class QueryParser extends LightningElement {
  private _query: string = '';

  @api
  set query(query: string) {
    this._query = query;
    this.parseQuery();
  }
  get query() {
    return this._query;
  }

  @track parsedQuery: Query;
  @track parsedQueryJson: string;
  @track composedQuery: string;
  @track allowApexBindVariables = false;
  @track allowPartialQuery = false;
  @track ignoreParseErrors = false;
  hasError = false;
  hasRendered = false;

  renderedCallback() {
    if (!this.hasRendered) {
      this.setExampleJs();
      this.hasRendered = true;
    }
  }

  parseQuery() {
    try {
      this.parsedQuery = parseQuery(this._query || '', {
        allowApexBindVariables: this.allowApexBindVariables,
        allowPartialQuery: this.allowPartialQuery,
        ignoreParseErrors: this.ignoreParseErrors,
        logErrors: true
      });
      this.parsedQueryJson = JSON.stringify(this.parsedQuery, null, 2);
      this.hasError = false;
    } catch (ex) {
      this.parsedQueryJson = ex.message;
      this.hasError = true;
    }
    this.highlight();
    this.dispatchEvent(new CustomEvent('queryerror', { detail: this.hasError }));
  }

  setExampleJs() {
    // @ts-ignore type-mismatch
    const element = this.template.querySelector('code.javascript');
    element.innerText = `parseQuery(soqlQuery, { allowApexBindVariables: ${this.allowApexBindVariables}, allowPartialQuery: ${this.allowPartialQuery}, ignoreParseErrors: ${this.ignoreParseErrors} });`;
    hljs.highlightBlock(element);
  }

  highlight() {
    // @ts-ignore type-mismatch
    const element = this.template.querySelector('code.json');
    if (element) {
      element.innerText = this.parsedQueryJson;
      hljs.highlightBlock(element);
    }
  }

  handleChange(event) {
    const { name, value } = event.detail;
    switch (name) {
      case 'allowApexBindVariables': {
        this.allowApexBindVariables = value;
        break;
      }
      case 'allowPartialQuery': {
        this.allowPartialQuery = value;
        break;
      }
      case 'ignoreParseErrors': {
        this.ignoreParseErrors = value;
        break;
      }
      default:
        break;
    }
    this.setExampleJs();
    this.parseQuery();
  }
}
