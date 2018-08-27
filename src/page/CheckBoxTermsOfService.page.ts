import { $, ElementFinder, promise } from 'protractor';

export class TermsOfServiceCheckBox {
  private get termsConditions(): ElementFinder {
    return $('#cgv');
  }

  public checkTermsOfService(): promise.Promise<void> {
    return this.termsConditions.click();
  }
}
