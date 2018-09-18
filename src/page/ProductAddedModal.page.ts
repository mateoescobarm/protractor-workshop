import { ElementFinder, browser, element, by } from 'protractor';

export class ProductAdded {
  private get proceedToCheckoutButton(): ElementFinder {
    return element(by.cssContainingText('span', 'Proceed to checkout'));
  }
  public async proceedToCheckout(): Promise<void> {
    await browser.wait(this.proceedToCheckoutButton.isDisplayed);
    return this.proceedToCheckoutButton.click();
  }
}
