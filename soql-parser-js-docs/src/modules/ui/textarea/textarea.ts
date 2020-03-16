import { LightningElement, api } from 'lwc';

export default class Textarea extends LightningElement {
  _value: string = '';
  @api name: string;
  @api label: string;
  @api disabled = false;
  @api hasError = false;
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
    let className = 'form-input block w-full pr-10 sm:text-sm sm:leading-5 disabled:opacity-75';
    if (this.disabled) {
      className += ' bg-gray-200';
    }
    if (this.hasError) {
      className += ` border-red-300 text-red-900 placeholder-red-300 focus:border-red-300 focus:shadow-outline-red`;
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
