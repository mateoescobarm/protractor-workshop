import { $, ElementFinder, promise, browser } from 'protractor';

export class ProductDetail {
  private get addToCartButton(): ElementFinder {
    return $('#add_to_cart > button > span');
  }
  public isOpen() {
    return browser.wait(this.addToCartButton.isPresent, 10000)
  }
  public addToCart(): promise.Promise<void> {
    return this.addToCartButton.click();
  }
}
