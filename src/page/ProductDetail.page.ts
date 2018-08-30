import { $, ElementFinder, promise, browser } from 'protractor';

export class ProductDetail {
  private get addToCartButton(): ElementFinder {
    return $('#add_to_cart > button > span');
  }
  public addToCart(): promise.Promise<void> {
    return this.addToCartButton.click();
  }
}
