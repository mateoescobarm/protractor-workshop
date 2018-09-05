import { browser } from 'protractor';
import { FillPersonalInformationPage } from '../src/page/PersonalInformation.page';

describe('open browser', () =>{

  beforeEach(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('filling personal information form', () =>{
    const personalInfo: FillPersonalInformationPage = new FillPersonalInformationPage();

    beforeEach(async () =>{
      await personalInfo.fillForm();
      await browser.sleep(5000);
    });
  });
});
