import { $, ElementFinder, promise } from 'protractor';

export class ProductList {
  private get productList(): ElementFinder {
    return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
  }

  public selecProduct(): promise.Promise<void> {
    return this.productList.click();
  }
}
