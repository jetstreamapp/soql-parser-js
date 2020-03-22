// https://salesforce.stackexchange.com/questions/269615/lightning-web-components-open-source-with-lightning-design-system-lwc-with-slds
import '@lwc/synthetic-shadow'; // This is required to allow global styles to apply within components
import { buildCustomElementConstructor } from 'lwc';
import MyApp from 'my/app';

customElements.define('my-app', buildCustomElementConstructor(MyApp));
