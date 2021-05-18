import { LightningElement } from "lwc";

// Delay used when debouncing event handlers before invoking Apex.
const DELAY = 300;

export default class App extends LightningElement {

  // Store the reference to the timer for debouncing
  delayHandleQuantityHardwareTimeout;

  handleQuantityHardware(evt) {
    // Debouncing this method: Do not update the reactive property as long as this function is
    // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
    window.clearTimeout(this.delayHandleQuantityHardwareTimeout);
    const hardwareAmount = evt.target.value;
    this.delayHandleQuantityHardwareTimeout = setTimeout(() => {
        console.log('now the value is: ' + hardwareAmount)
    }, DELAY);
  }

  // Simple mock of item, this is only for the demo
  item = {
    parent: {
      quantity: 1
    }
  };
}
