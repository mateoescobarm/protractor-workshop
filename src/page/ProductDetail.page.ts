import { $, ElementFinder, promise } from 'protractor';

export class ProductDetail {
  private get ProductDetailButton(): ElementFinder {
    return $('#add_to_cart > button > span');
  }

  public addProduct(): promise.Promise<void> {
    return this.ProductDetailButton.click();
  }
}
