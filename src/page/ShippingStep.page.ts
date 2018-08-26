import { $, ElementFinder, promise } from 'protractor';

export class TermsOfService {
  private get termsConditions(): ElementFinder {
    return $('#cgv');
  }

  public goToTermsConditions(): promise.Promise<void> {
    return this.termsConditions.click();
  }
}

export class ShippingStepPage {
  private get shippingStep(): ElementFinder {
    return $('#form > p > button > span');

  }

  public goToShippingStep(): promise.Promise<void> {
    return this.shippingStep.click();
  }
}
