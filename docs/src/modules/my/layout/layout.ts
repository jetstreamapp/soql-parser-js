import { LightningElement, track } from 'lwc';

export default class Layout extends LightningElement {
  @track sidebarOpen = false;

  connectedCallback() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  disconnectedCallback() {
    window.removeEventListener('keydown', this.handleKeydown);
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
