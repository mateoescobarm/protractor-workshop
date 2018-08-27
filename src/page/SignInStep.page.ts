import { $, ElementFinder, promise } from 'protractor';

export class SignInStepPage {
  private get logInButton(): ElementFinder {
    $('#email').sendKeys('aperdomobo@gmail.com');
    $('#passwd').sendKeys('WorkshopProtractor');
    return $('#SubmitLogin > span');
  }

  public logIn(): promise.Promise<void> {
    return this.logInButton.click();
  }
}
