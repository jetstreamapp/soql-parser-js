import { LightningElement, api, track } from 'lwc';

export default class soqlQueryTextbox extends LightningElement {
  private _query;
  @api
  set query(query: string) {
    this._query = query;
    if (query) {
      this.value = query;
      this.setValue(query);
    }
  }
  get query() {
    return this._query;
  }

  @track value = '';
  @api hasQueryError = false;

  get className() {
    let className = 'form-input block font-mono border-4 w-full sm:text-sm sm:leading-5 focus:border-transparent';
    if (this.hasQueryError) {
      className += ` border-red-300 text-red-900 placeholder-red-300 focus:border-red-300`;
    } else {
      className += ` border-transparent`;
    }
    return className;
  }

  handleChange(event) {
    this.value = event.target.value;
    this.emitValueChanged();
  }

  setValue(value: string) {
    // @ts-ignore type-mismatch
    this.template.querySelector('textarea').value = value;
    this.emitValueChanged();
  }

  emitValueChanged() {
    this.dispatchEvent(new CustomEvent('changed', { detail: this.value }));
  }
}
