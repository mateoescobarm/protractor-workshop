import { ElementFinder, $, promise, browser, ExpectedConditions } from 'protractor';

export class IFramePage {
  private get pageName (): ElementFinder {
    return $('.page-title h1');
  }

  private get iFrame (): ElementFinder {
    return $('#IF1');
  }

  // private get iFrameTitle (): ElementFinder {
  //   return $('#content h1');
  // }

  public async getIFrameTitle (): Promise<string> {
    await browser.wait(ExpectedConditions.presenceOf(this.pageName));
    await browser.wait(ExpectedConditions.textToBePresentInElement(this.pageName,'Automation Practice Form' ));
    return this.pageName.getText();
  }

  public get getIFrameHeight(): promise.Promise<string> {
    return this.iFrame.getCssValue('height');
  }

  public async changeIFrameHeight (newHeight: string): Promise<void> {
    await browser.executeScript(`document.getElementById('IF1').style.height = '${newHeight}';`);
    await browser.executeScript(`document.getElementById('IF1').style.width = '30000px';`);
  }

  public async getPageName (): Promise<string> {
    await browser.wait(ExpectedConditions.presenceOf(this.pageName));
    return this.pageName.getText();
  }

  public async goToIFrameOne (): Promise<void> {
    await browser.wait(ExpectedConditions.presenceOf(this.iFrame));
    return browser.switchTo().frame(this.iFrame.getWebElement());
  }

  public returnToGlobalpage (): promise.Promise<void> {
    return browser.switchTo().defaultContent();
  }
}
