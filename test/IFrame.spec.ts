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

    it('checking global title', async () => {
      expect(checkingGlobalName.globalPageName())
      .toBe('IFrame practice page');
    });

  describe('checking iframe title', () =>{
    beforeAll(async () => {
      await checkingGlobalName.goToIFrameOne();
    });

    it('Iframe name Check', () => {
      expect(checkingGlobalName.getIFrameTitle())
        .toBe('Practice Automation Form');
    });  
  });   
  });
});
