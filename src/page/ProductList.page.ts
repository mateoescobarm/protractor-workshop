import { ElementFinder, promise, ElementArrayFinder, $$ } from 'protractor';

export class ProductList {
  private get productContainerList(): ElementArrayFinder {
    return $$('.product_list li');
  }

  private findByProduct(name: string): ElementFinder {
    return this.productContainerList.filter((product) => {
      return product.$('a').getAttribute('title').then((attribute) => {
        return attribute === name;
      });
    }).first();
  }

  public selectProduct(name: string): promise.Promise<void> {
    return this.findByProduct(name).$('img').click();
  }
}
