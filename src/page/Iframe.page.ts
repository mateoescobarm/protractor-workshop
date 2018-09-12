import { ElementFinder, $, promise, browser } from 'protractor';

export class IFramePage {
  private get pageName (): ElementFinder {
    return $('.page-title h1');
  }

  private get IFrame (): ElementFinder {
    return $('#IF1');
  }

  public get getIFrameHeight(): promise.Promise<string> {
    return this.IFrame.getAttribute('height');
  }

  public async changeIFrameHeight (newHeight: string): Promise<void> {
    await browser.executeScript(`document.getElementById('IF1').style.height = '${newHeight}';`);
  }

  public getPageName (): promise.Promise<string> {
    return this.pageName.getText();
  }

  public goToIFrameOne (): promise.Promise<void> {
    return browser.switchTo().frame(this.IFrame.getWebElement());
  }

  public returnToGlobalpage (): promise.Promise<void> {
    return browser.switchTo().defaultContent();
  }
}

