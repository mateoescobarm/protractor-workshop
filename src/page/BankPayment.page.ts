import { ElementFinder, promise, element, by } from 'protractor';

export class BankPaymentPage {
  private get confirmPaymentButton(): ElementFinder {
    return element(by.buttonText('I confirm my order'));
  }

  public goToConfirmationPage(): promise.Promise<void> {
    return this.confirmPaymentButton.click();
  }
}
