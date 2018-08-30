import { $, ElementFinder, promise, browser } from 'protractor';

export class ProductAdded {
  private get proceedToCheckoutButton(): ElementFinder {
    return $('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a'); 
  }
  public isOpen() {
    return browser.wait(this.proceedToCheckoutButton.isPresent, 10000);
  }
  public proceedToCheckout(): promise.Promise<void> {
    return this.proceedToCheckoutButton.click();
  }
}
