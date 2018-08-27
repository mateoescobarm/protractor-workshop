import { $, ElementFinder, promise } from 'protractor';

export class AdressStepPage {
  private get goToShippingButton(): ElementFinder {
    return $('#center_column > form > p > button > span');
  }

  public checkAdressProceedToShipping(): promise.Promise<void> {
    return this.goToShippingButton.click();
  }
}
