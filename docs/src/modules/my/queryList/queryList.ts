import { api, LightningElement, track } from 'lwc';
import ExampleQueries from '../../../resources/sample-queries-json.json';
import { Query } from '../../../types';

export default class QueryList extends LightningElement {
  @api selectedQuery: string;
  @track exampleQueries: Query[] = ExampleQueries.map((query, i) => ({ key: `${i + 1}`, active: i === 0, query }));

  connectedCallback() {
    if (!this.selectedQuery) {
      this.dispatchEvent(new CustomEvent('select', { detail: this.exampleQueries[0].query }));
    }
  }

  handleSelect(event) {
    this.exampleQueries = this.exampleQueries.map(item => {
      if (item.key === event.detail) {
        this.dispatchEvent(new CustomEvent('select', { detail: item.query }));
      }
      return {
        ...item,
        active: item.key === event.detail
      };
    });
  }
}
