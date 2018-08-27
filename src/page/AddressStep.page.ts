import { ElementFinder, promise, element, by } from 'protractor';

export class AdressStepPage {
  private get goToShippingButton(): ElementFinder {
    return element(by.css('#center_column > form > p > button > span'));
  }

  public checkAdressProceedToShipping(): promise.Promise<void> {
    return this.goToShippingButton.click();
  }
}
