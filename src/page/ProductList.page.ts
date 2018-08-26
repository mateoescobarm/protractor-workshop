import { $, ElementFinder, promise } from 'protractor';

export class productList {
  private get ProductList(): ElementFinder {
    return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
  }

  public goToProductMenu(): promise.Promise<void> {
    return this.ProductList.click();
  }
}
