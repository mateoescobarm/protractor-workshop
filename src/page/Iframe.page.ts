import { ElementFinder, $, promise, browser } from 'protractor';

export class IFramePage {
  private get pageName (): ElementFinder {
    return $('.page-title h1');
  }

  public globalPageName (): promise.Promise<string> {
    return this.pageName.getText();
  }

  public goToIFrameOne (): promise.Promise<void> {
    return browser.switchTo().frame($('#IF1'));
  }

  public getIFrameTitle(): promise.Promise<string> {
    return $('h1').getText()
  }

  public returnToGlobalpage (): promise.Promise<void> {
    return $('h1').click();
  }
}
