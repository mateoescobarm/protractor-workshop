import { $, ElementFinder, promise } from 'protractor';

export class AdressStepPage {
  private get adressProceed(): ElementFinder {
    return $('#center_column > form > p > button > span');
  }

  public goToAdressProceed(): promise.Promise<void> {
    return this.adressProceed.click();
  }
}
