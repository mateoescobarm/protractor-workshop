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
      expect(checkingGlobalName.getPageName())
      .toBe('IFrame practice page')
    });  

    describe('checking iframe title', () =>{
      beforeAll(async () => {
        await checkingGlobalName.goToIFrameOne();
      });

      it('Iframe name Check',async () => {
        expect(checkingGlobalName.getPageName())
          .toBe('Practice Automation Form');
      });

      describe('return to globla and check name', () =>{
        beforeAll(async () =>{
          await checkingGlobalName.returnToGlobalpage();
        });

        it('return to global page  check', async () =>{
          expect(checkingGlobalName.getPageName())
            .toBe('IFrame practice page');
        });

        describe('change iframe height', () =>{
          const newHeight = '2000px';

          beforeAll(async () =>{
            await checkingGlobalName.changeIFrameHeight(newHeight);
          });

          it('checking new height', async () =>{
            expect(checkingGlobalName.iFrameHeight).toBe(newHeight);
          });

          browser.sleep(10000);
        });
      });
    });
  });
});
