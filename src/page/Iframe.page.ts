import { ElementFinder, $, promise, browser } from 'protractor';

export class IFramePage {
  private get pageName (): ElementFinder {
    return $('.page-title h1');
  }

  private get iFrame (): ElementFinder {
    return $('#IF1');
  }

  public getIFrameHeight(): promise.Promise<string> {
    return this.iFrame.getAttribute('height');
  }

  public async changeIFrameHeight (newHeight: number): Promise<void> {
    await browser.executeScript(`document.getElementById('IF1').style.height = '${newHeight}';`);
  }

  public getPageName (): promise.Promise<string> {
    return this.pageName.getText();
  }

  public goToIFrameOne (): promise.Promise<void> {
    return browser.switchTo().frame(this.iFrame.getWebElement());
  }

  public returnToGlobalpage (): promise.Promise<void> {
    return browser.switchTo().defaultContent();
  }
}
