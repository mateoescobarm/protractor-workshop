import { ElementFinder, promise, $, ElementArrayFinder } from 'protractor';

export class ProductList {
  private get productContainerList(): ElementArrayFinder {
    return $('.product_list').$$('li');
  }

  private findByProduct(name: string): ElementFinder {
    return this.productContainerList.filter((product) => {
      return product.$$('.product_img_link').getAttribute('title').then((attribute) => {
        return attribute === name;
      });
    }).first();
  }

  public selecProduct(name: string): promise.Promise<void> {
    return this.findByProduct(name).$('img').click();
  }
}
