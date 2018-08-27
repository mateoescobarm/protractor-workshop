import { $, ElementFinder, promise } from 'protractor';

export class ShippingStepPage {
  private get shippingStep(): ElementFinder {
    return $('#form > p > button > span');

  }

  public goToShippingStep(): promise.Promise<void> {
    return this.shippingStep.click();
  }
}
