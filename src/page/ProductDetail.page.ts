import { $, ElementFinder, promise } from 'protractor';

export class ProductDetail {
  private get ProductAddButton(): ElementFinder {
    return $('#add_to_cart > button > span');
  }

  public goToProductAddButton(): promise.Promise<void> {
    return this.ProductAddButton.click();
  }
}
