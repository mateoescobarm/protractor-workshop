import {
  ElementFinder,
  promise,
  $,
  element,
  by,
  $$,
  ElementArrayFinder
} from 'protractor';
import { resolve } from 'url';
import { DownloadFile } from '../service';

export class FillPersonalInformationPage {
  private get firstNameField(): ElementFinder {
    return element(by.name('firstname'));
  }

  private get lastNameField(): ElementFinder {
    return element(by.name('lastname'));
  }

  private get sexInfo(): ElementArrayFinder {
    return $$('[name="sex"]');
  }

  private sexAttribute(sex: string): ElementFinder {
    return this.sexInfo.filter((sexType) => {
      return sexType.getAttribute('value').then((attribute) => {
        return attribute === sex;
      });
    }).first();
  }

  private get experienceInfo(): ElementArrayFinder {
    return $$('[name="exp"]');
  }

  private experienceAttribute(experience: string): ElementFinder {
    return this.experienceInfo.filter((yearsOfExperience) => {
      return yearsOfExperience.getAttribute('value').then((attribute) => {
        return attribute === experience;
      });
    }).first();
  }

  private get professionInfo(): ElementArrayFinder {
    return $$('[name="profession"]');
  }

  private async professionAttribute(profession: string[]): Promise<void> {
    await this.professionInfo.each(async (professionElement) => {
      const professionElementValue = await professionElement.getAttribute('value');
      if (profession.indexOf(professionElementValue) !== -1) {
        await professionElement.click();
      }
    });
  }

  private get toolInfo(): ElementArrayFinder {
    return $$('[name="tool"]');
  }

  private async toolAttribute(tools: string[]): Promise<void> {
    await this.toolInfo.each(async (toolsElement) => {
      const toolsElementValue = await toolsElement.getAttribute('value');
      if (tools.indexOf(toolsElementValue) !== -1) {
        await toolsElement.click();
      }
    });
  }

  private get continentDropdown(): ElementFinder {
    return $('#continents');
  }

  private get continentDropdownOptions(): ElementArrayFinder {
    return this.continentDropdown.$$('option');
  }

  private async selectContinentOption(continent: string): Promise<void> {
    await this.continentDropdown.click();
    await this.continentDropdownOptions.filter((continentco) => {
      return continentco.getAttribute('value').then((attribute) => {
        return attribute === continent;
      });
    }).first().click();
  }

  private get uploadInput(): ElementFinder {
    return element(by.id('photo'));
  }

  private uploadFile(filePath: string): promise.Promise<void> {
    const absolutePath = resolve(__dirname, filePath);
    return this.uploadInput.sendKeys(absolutePath);
  }

  private get submitButton(): ElementFinder {
    return $('#submit');
  }

  private get testFileDownloadLink(): ElementFinder {
    return element(by.linkText('Test File to Download'));
  }

  private async download() {
    const link = await this.testFileDownloadLink.getAttribute('href');

    const service = new DownloadFile();
    await service.downloadFile(link, 'testfile.xlsx');
  }

  private alejandro = {
    firstName: 'Alejandro',
    lastName: 'Perdomo',
    sex: 'Male',
    experience: '7',
    profession: ['Automation Tester'],
    tools: ['Selenium Webdriver'],
    continent: 'South America',
    commands: [
      'Browser Commands',
      'Navigation Commands',
      'Switch Commands',
      'Wait Commands',
      'WebElement Commands'],
    file: '../../resources/upload_pic.JPG',
    downloadFile: true
  };

  private async logInForm(personInfo) {
    await this.firstNameField.sendKeys(personInfo.firstName);
    await this.lastNameField.sendKeys(personInfo.lastName);
    await this.sexAttribute(personInfo.sex).click();
    await this.experienceAttribute(personInfo.experience).click();
    await this.professionAttribute(personInfo.profession);
    await this.toolAttribute(personInfo.tools);
    await this.selectContinentOption(personInfo.continent);
    await this.uploadFile(personInfo.file);

    if (personInfo.downloadFile) {
      await this.download();
    }
  }

  public async fillForm(): Promise<void> {
    return this.logInForm(this.alejandro);
  }

  public async submitForm(): Promise<void> {
    return this.submitButton.click();
  }
}
