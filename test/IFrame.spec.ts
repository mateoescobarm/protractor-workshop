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
    const iFramePage: IFramePage = new IFramePage ();
    let pageTitle: string;
    
    beforeAll(async () => {
      pageTitle = await iFramePage.getPageName();
    })
    

    it('checking global title', async () => {
      expect(pageTitle)
      .toBe('IFrame practice page')
    });  

    describe('checking iframe title', () =>{
      beforeAll(async () => {
        await iFramePage.goToIFrameOne();
      });

      it('Iframe name Check',async () => {
        expect(pageTitle)
          .toBe('Practice Automation Form');
      });

      describe('return to globla and check name', () =>{
        beforeAll(async () =>{
          await iFramePage.returnToGlobalpage();
        });

        it('return to global page  check', async () =>{
          expect(pageTitle)
            .toBe('IFrame practice page');
        });

        describe('change iframe height', () =>{
          const newHeight = 2000;
          let actualIFrameHeight;

          beforeAll(async () =>{
            actualIFrameHeight = await iFramePage.getIFrameHeight;
            await iFramePage.changeIFrameHeight(newHeight);
          });

          it('checking new height', async () =>{
            expect(actualIFrameHeight).toBe(newHeight);
          });
        });
      });
    });
  });
});
