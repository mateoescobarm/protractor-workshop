import { $, ElementFinder, promise } from 'protractor';

export class ProductAdded {
  private get proceedToCheckoutButton(): ElementFinder {
    return $('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a'); 
  }

  public proceedToCheckout(): promise.Promise<void> {
    return this.proceedToCheckoutButton.click();
  }
}
