import { ElementFinder, $, promise, browser } from 'protractor';

export class IFramePage {
  private get pageName (): ElementFinder {
    return $('.page-title h1');
  }

  private get iFrame (): ElementFinder {
    return $('#IF1');
  }

  private get iFrameTitle() {
    return $('.content h1');
  }

  public async getIFrameTitle() {
    await browser.wait(async () => {
      const iFrameTitleText = await this.iFrameTitle.getText();
      return iFrameTitleText !== '';
    });
    return this.iFrameTitle.getText();
  }

  public get getIFrameHeight(): promise.Promise<string> {
    return this.iFrame.getCssValue('height');
  }

  public async changeIFrameHeight (newHeight: string): Promise<void> {
    await browser.executeScript(`document.getElementById('IF1').style.height = '${newHeight}';`);
    await browser.executeScript(`document.getElementById('IF1').style.width = '3000px';`);
  }

  public getPageName (): promise.Promise<string> {
    return this.pageName.getText();
  }

  public goToIFrameOne (): Promise<void> {
    return browser.switchTo().frame(this.iFrame.getWebElement());
  }

  public returnToGlobalpage (): promise.Promise<void> {
    return browser.switchTo().defaultContent();
  }
}
