import { $, ElementFinder, promise } from 'protractor';

export class BankPaymentPage {
  private get bankPayment(): ElementFinder {
    return $('#cart_navigation > button > span');
  }

  public goToBankPayment(): promise.Promise<void> {
    return this.bankPayment.click();
  }
}