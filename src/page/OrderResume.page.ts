import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
  private get orderResume(): ElementFinder {
    return $('#center_column > div > p > strong');

  }

  public goToTermsConditions(): promise.Promise<void> {
    return this.orderResume.getText();
  }
}
