import { LightningElement, api } from 'lwc';
import { Query } from '../../../types';

export default class QueryListItem extends LightningElement {
    @api item: Query;

    get className() {
        let className = 'border-t border-gray-200 p-1 cursor-pointer';
        className += this.item.active ? ' bg-gray-200' : ' hover:bg-gray-100';
        return className;
    }

    handleClick(event) {
        this.dispatchEvent(new CustomEvent('select', { detail: this.item.key }));
    }
}
