import { browser } from 'protractor';
import { FillPersonalInformationPage } from '../src/page/PersonalInformation.page';

describe('open browser', () => {

  beforeEach(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('filling personal information form', () => {
    const personalInfo: FillPersonalInformationPage = new FillPersonalInformationPage();

    beforeEach(async () => {
      await personalInfo.fillForm();
    });

    describe('confirmation step', () => {
      it('Form Correctly Filled', async () => {
        await expect(browser.getCurrentUrl())
          .toBe(
            `http://toolsqa.com/automation-practice-form/?firstname=Alejandro&lastname=Perdomo\
            &sex=Male&exp=7&profession=Automation+Tester&photo=&tool=Selenium+Webdriver\
            &continents=South+America&submit=`
          );
      });
    });
  });
});
