import { $, ElementFinder, promise } from 'protractor';

export class SignInStepPage {
  private get signIn(): ElementFinder {
    $('#email').sendKeys('aperdomobo@gmail.com');
    $('#passwd').sendKeys('WorkshopProtractor');
    return $('#SubmitLogin > span');
  }

  public logInClick(): promise.Promise<void> {
    return this.signIn.click();
  }
}
