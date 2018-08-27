import { $, ElementFinder, promise } from 'protractor';

export class AdressStepPage {
  private get adressProceedButton(): ElementFinder {
    return $('#center_column > form > p > button > span');
  }

  public checkAdress(): promise.Promise<void> {
    return this.adressProceedButton.click();
  }
}
