import { ElementFinder, $, promise } from 'protractor';

export class IFramePage {
  private get pageName (): ElementFinder {
    return $('.page-title h1');
  }

  public goToIFrameOne (): promise.Promise<void> {
    return $('#IF1').click();
  }

  public returnToGlobal (): promise.Promise<void> {
    return $('h1').click();
  }

  public globalPageName (): promise.Promise<string> {
    return this.pageName.getText();
  }


}