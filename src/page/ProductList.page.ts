import { ElementFinder, promise, element, by } from 'protractor';

export class ProductList {
  private get productList(): ElementFinder {
    return element(by.className('product_img_link'));
  }

  public selecProduct(): promise.Promise<void> {
    return this.productList.click();
  }
}
