import { $, ElementFinder, promise } from 'protractor';

export class BankPaymentPage {
  private get confirmPaymentButton(): ElementFinder {
    return $('#cart_navigation > button > span');
  }

  public goToConfirmationPage(): promise.Promise<void> {
    return this.confirmPaymentButton.click();
  }
}
