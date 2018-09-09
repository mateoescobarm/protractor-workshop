import {
  browser
} from 'protractor';

import {
  IFramePage
} from '../src/page/Iframe.page';

describe('open browser', () =>{

  beforeEach(async () => {
    await browser.get(
      'http://toolsqa.com/iframe-practice-page/'
    );
  });

  describe('checking global title', () => {
    const checkingGlobalName: IFramePage = new IFramePage ();

    it('First Global Name Check', async () => {
      await expect(checkingGlobalName.globalPageName())
      .toBe('IFrame practice page')
    });
  });
});