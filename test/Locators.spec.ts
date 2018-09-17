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
      fit('Form Correctly Filled', async () => {
        expect(await browser.getCurrentUrl())
          .toBe(
            'http://toolsqa.com/automation-practice-form/?firstname=Alejandro&lastname=Perdomo'
            + '&sex=Male&exp=7&profession=Automation+Tester&photo=upload_pic.JPG&tool=Selenium+'
            + 'Webdriver&continents=South+America&submit='
          );
      });
    });
  });
});
