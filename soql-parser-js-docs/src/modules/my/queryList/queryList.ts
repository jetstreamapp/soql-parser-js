import { LightningElement, track } from 'lwc';
import { Query } from '../../../types';
import ExampleQueries from '../../../resources/sample-queries-json.json';

export default class QueryList extends LightningElement {
    @track exampleQueries: Query[] = ExampleQueries.map((query, i) => ({ key: `${i + 1}`, active: i === 0, query }));

    constructor() {
        super();
    }

    connectedCallback() {
        this.dispatchEvent(new CustomEvent('select', { detail: this.exampleQueries[0].query }));
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
