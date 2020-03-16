import { LightningElement, api } from 'lwc';

export default class Input extends LightningElement {
  _value: string = '';
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

  get className() {
    let className = 'form-input block w-full sm:text-sm sm:leading-5 disabled:opacity-75';
    if (this.disabled) {
      className += ' bg-gray-200';
    }
    return className;
  }

  handleChange(event) {
    this._value = event.target.value;
    if (this._value) {
      this.dispatchEvent(new CustomEvent('change', { detail: { name: this.name, value: this.value } }));
    }
  }
}
