import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
  private get orderResume(): ElementFinder {
    return $('#center_column > div > p > strong');

  }

  public getTextOfConfirmation(): promise.Promise<string> {
    return this.orderResume.getText();
  }
}
