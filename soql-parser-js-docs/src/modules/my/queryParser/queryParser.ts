import { LightningElement, track, api } from 'lwc';
import { parseQuery, Query, composeQuery } from 'soql-parser-js';
// import * as Prism from 'prismjs';
import * as hljs from 'highlight.js/lib/highlight.js';

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
  hasError = false;

  parseQuery() {
    try {
      this.parsedQuery = parseQuery(this._query || '');
      this.parsedQueryJson = JSON.stringify(this.parsedQuery, null, 2);
      this.hasError = false;
    } catch (ex) {
      this.parsedQueryJson = ex.message;
      this.hasError = true;
    }
    this.highlight();
    this.dispatchEvent(new CustomEvent('queryerror', { detail: this.hasError }));
  }

  highlight() {
    const element = this.template.querySelector('code');
    if (element) {
      element.innerText = this.parsedQueryJson;
      hljs.highlightBlock(element);
    }
  }
}
