import { ElementFinder, $, promise, browser } from 'protractor';

export class IFramePage {
  private get pageName (): ElementFinder {
    return $('.page-title h1');
  }

  private get getIFrame (): ElementFinder {
    return $('#IF1');
  }

  public get iFrameHeight(): promise.Promise<string> {
    return this.getIFrame.getAttribute('height');
  }

  public getPageName (): promise.Promise<string> {
    return this.pageName.getText();
  }

  public goToIFrameOne (): promise.Promise<void> {
    return browser.switchTo().frame(this.getIFrame.getWebElement());
  }

  public returnToGlobalpage (): promise.Promise<void> {
    return browser.switchTo().defaultContent();
  }

  public async changIFrameHeight (newHeight: string): Promise<void> {
    await browser.executeScript(`document.getElementById('IF1').style.height = '${newHeight}';`);
  }

}

