import { $, ElementFinder, promise } from 'protractor';

var user = 'aperdomobo@gmail.com'
var passwd = 'WorkshopProtractor'

export class SignInStepPage {
  private get logInForm(): ElementFinder {
    await $('#email').sendKeys(user);
    await $('#passwd').sendKeys(passwd);
    return $('#SubmitLogin > span');
  }

  public logIn(): promise.Promise<void> {
    return this.logInForm.click();
  }
}
