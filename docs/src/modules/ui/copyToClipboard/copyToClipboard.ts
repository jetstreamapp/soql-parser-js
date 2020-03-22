import { LightningElement, api, track } from 'lwc';

const COPY = 'COPY';
const COPIED = 'COPIED';

export default class CopyToClipboard extends LightningElement {
  @api value: string;
  @track label = COPY;

  handleCopy() {
    if (this.value) {
      // @ts-ignore type-mismatch
      const element: HTMLInputElement = this.template.querySelector('textarea');
      if (element) {
        element.value = this.value;
        element.select();
        element.setSelectionRange(0, this.value.length);
        document.execCommand('copy');
        this.label = COPIED;
        // eslint-disable-next-line @lwc/lwc/no-async-operation
        setTimeout(() => {
          this.label = COPY;
        }, 1500);
      }
    }
  }
}
