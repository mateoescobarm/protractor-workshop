import { ElementFinder, promise, element, by } from 'protractor';

export class ProductDetail {
  private get addToCartButton(): ElementFinder {
    return element(by.buttonText('Add to cart'));
  }
  public addToCart(): promise.Promise<void> {
    return this.addToCartButton.click();
  }
}
