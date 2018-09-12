import {
  browser
} from 'protractor';

import {
  IFramePage
} from '../src/page/Iframe.page';

describe('open browser', () => {

  beforeAll(async () => {
    await browser.get(
      'http://toolsqa.com/iframe-practice-page/'
    );
  });

  describe('checking global title', () => {
    const iFramePage: IFramePage = new IFramePage();
    let pageTitle: string;

    beforeAll(async () => {
      pageTitle = await iFramePage.getPageName();
    });

    it('checking global title', async () => {
      expect(pageTitle)
      .toBe('IFrame practice page');
    });

    describe('checking iframe title', () => {
      let iFrameTitle: string;
      beforeAll(async () => {
        await iFramePage.goToIFrameOne();
        iFrameTitle = await iFramePage.getIFrameTitle();
      });

      it('Iframe name Check', async () => {
        expect(iFrameTitle)
          .toBe('Practice Automation Form');
      });

      describe('return to globla and check name', () => {
        beforeAll(async () => {
          await iFramePage.returnToGlobalpage();
          pageTitle = await iFramePage.getPageName();
        });

        it('return to global page  check', async () => {
          expect(pageTitle)
            .toBe('IFrame practice page');
        });

        describe('change iframe height', () => {
          const newHeight = '100px';
          let actualIFrameHeight;

          beforeAll(async () => {
            await iFramePage.changeIFrameHeight(newHeight);
            actualIFrameHeight = await iFramePage.getIFrameHeight;
          });

          it(`checking height to ${newHeight}`, () => {
            expect(actualIFrameHeight).toBe(newHeight);
          });
        });
      });
    });
  });
});
