import { LightningElement, api } from 'lwc';

export default class Checkbox extends LightningElement {
  _value: boolean = false;
  @api name: string;
  @api label: string;
  @api disabled = false;
  @api
  set value(value) {
    this._value = value;
    try {
      this.template.querySelector('input').value = value;
    } catch (ex) {}
  }
  get value() {
    return this._value;
  }

  handleToggle() {
    this._value = !this.value;
    this.dispatchEvent(new CustomEvent('change', { detail: { name: this.name, value: this.value } }));
  }
}
