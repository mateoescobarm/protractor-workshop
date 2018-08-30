import { $, ElementFinder, promise } from 'protractor';

export class ShippingStepPage {
  private get goToPaymentStepButton(): ElementFinder {
    return $('#form > p > button > span');

  }

  public proceedToPayment(): promise.Promise<void> {
    return this.goToPaymentStepButton.click();
  }
}
