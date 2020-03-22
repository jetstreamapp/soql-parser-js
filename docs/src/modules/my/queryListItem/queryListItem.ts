import { LightningElement, api } from 'lwc';
import { Query } from '../../../types';

export default class QueryListItem extends LightningElement {
  @api item: Query;

  get className() {
    let className = 'border-t border-gray-700 p-1 cursor-pointer';
    className += this.item.active ? ' bg-gray-700' : ' hover:bg-gray-700';
    return className;
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('select', { detail: this.item.key }));
  }
}
