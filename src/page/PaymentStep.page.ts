import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private get bankWirePaymentOption(): ElementFinder {
    return $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public selectPaymentMetodBankWire(): promise.Promise<void> {
    return this.bankWirePaymentOption.click();
  }
}
