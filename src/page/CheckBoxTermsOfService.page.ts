import { $, ElementFinder, promise } from 'protractor';

export class TermsOfServiceCheckBox {
  private get termsConditionsCheckBox(): ElementFinder {
    return $('#cgv');
  }

  public checkTermsOfService(): promise.Promise<void> {
    return this.termsConditionsCheckBox.click();
  }
}
