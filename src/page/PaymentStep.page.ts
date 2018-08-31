import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private get bankWirePaymentOption(): ElementFinder {
    return $('.bankwire');
  }

  public selectPaymentMetodBankWire(): promise.Promise<void> {
    return this.bankWirePaymentOption.click();
  }
}
