import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private get paymentStep(): ElementFinder {
    return $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public goToPaymentStep(): promise.Promise<void> {
    return this.paymentStep.click();
  }
}
