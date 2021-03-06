import { $, ElementFinder, promise } from 'protractor';

export class SignInStepPage {
  private get userNameField(): ElementFinder {
    return $('#email');
  }
  private get passwordField(): ElementFinder {
    return $('#passwd');
  }
  private get logInButton(): ElementFinder {
    return $('#SubmitLogin > span');
  }
  private async logInForm() {
    await this.userNameField.sendKeys('aperdomobo@gmail.com');
    await this.passwordField.sendKeys('WorkshopProtractor');
    return this.logInButton.click();
  }
  public fillForm(): promise.Promise<void> {
    return this.logInForm();
  }
}
