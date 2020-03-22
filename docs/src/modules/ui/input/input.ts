import { LightningElement, api } from 'lwc';

export default class Input extends LightningElement {
  _value: string = '';
  @api name: string;
  @api label: string;
  @api type = 'text';
  @api disabled = false;
  @api
  set value(value) {
    this._value = value;
    // @ts-ignore type-mismatch
    const element = this.template.querySelector('input');
    if (element) {
      element.value = value;
    }
  }
  get value() {
    return this._value;
  }

  @api transformFn: (value: string) => string;

  get className() {
    let className = 'form-input font-mono block w-full sm:text-sm sm:leading-5 disabled:opacity-75';
    if (this.disabled) {
      className += ' bg-gray-200';
    }
    return className;
  }

  handleChange(event) {
    let value = event.target.value;
    if (this.transformFn) {
      value = this.transformFn(value);
    }
    if (value !== event.target.value) {
      // @ts-ignore type-mismatch
      this.template.querySelector('input').value = value;
    }
    this._value = value;
    if (this._value) {
      this.dispatchEvent(new CustomEvent('change', { detail: { name: this.name, value: this.value } }));
    }
  }
}
