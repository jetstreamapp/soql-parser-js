import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
  @track sidebarOpen = false;
  @track selectedQuery;
  @track soqlText;
  @track hasQueryError = false;

  connectedCallback() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  disconnectedCallback() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleQueryExampleSelected(event) {
    console.log('Event handleQueryExampleSelected()', event.detail);
    this.selectedQuery = event.detail;
  }

  handleSoqlChanged(event) {
    this.soqlText = event.detail;
    this.closeSidebar();
  }

  handleOnQueryError(event) {
    this.hasQueryError = event.detail;
  }

  openSidebar() {
    this.sidebarOpen = true;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

  handleKeydown(event) {
    if ((this.sidebarOpen && event.code === '') || event.keyCode === 27) {
      this.sidebarOpen = false;
    }
  }
}
