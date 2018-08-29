import { $, ElementFinder, promise } from 'protractor';

export class SignInStepPage {
  private get userNameField(): ElementFinder {
  return $('#email');
  }
  private get passwordField(): ElementFinder {
    return $('#passwd');
  }
  private async logInForm() {
    await this.userNameField.sendKeys('aperdomobo@gmail.com');
    await this.passwordField.sendKeys('WorkshopProtractor');
  }
  private get logInButton(): ElementFinder {
    return $('#SubmitLogin > span');
  }
  public logIn(): promise.Promise<void> {
    return this.logInForm(), this.logInButton.click();
  }
}
