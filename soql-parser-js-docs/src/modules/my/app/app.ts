import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
  @track selectedQuery;
  @track soqlText;
  @track hasQueryError = false;

  handleQueryExampleSelected(event) {
    console.log('Event handleQueryExampleSelected()', event.detail);
    this.selectedQuery = event.detail;
  }

  handleSoqlChanged(event) {
    this.soqlText = event.detail;
  }

  handleOnQueryError(event) {
    this.hasQueryError = event.detail;
  }
}
