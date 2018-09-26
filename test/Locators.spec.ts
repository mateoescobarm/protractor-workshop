import { browser } from 'protractor';
import { FillPersonalInformationPage } from '../src/page/PersonalInformation.page';
import { DownloadFile } from '../src/service';

describe('open browser', () => {

  beforeEach(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('filling personal information form', () => {
    const personalInfo: FillPersonalInformationPage = new FillPersonalInformationPage();

    beforeEach(async () => {
      await personalInfo.fillForm();
    });

    describe('submit form', () => {

      beforeEach(async () => {
        await personalInfo.submitForm();
      });

      describe('confirmation step', () => {

        it('Form Correctly Filled', async () => {
          expect(await browser.getCurrentUrl())
            .toBe(
              'http://toolsqa.com/automation-practice-form/?firstname=Alejandro&lastname=Perdomo'
              + '&sex=Male&exp=7&profession=Automation+Tester&photo=upload_pic.JPG&tool=Selenium+'
              + 'Webdriver&continents=South+America&submit='
            );
        });
        it('then should download a file', async () => {
          const service = new DownloadFile();
          const file = await service.readFileFromTemp('testfile.xlsx');
          expect(file.byteLength).toBeGreaterThanOrEqual(8000);
        });
      });
    });
  });
});
