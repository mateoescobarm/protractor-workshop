import { ElementFinder, promise, $, element, by } from 'protractor';

export class FillPersonalInformationPage {
  private get firstNameField(): ElementFinder {
    return element(by.name('firstname'));
  }
  private get lastNameField(): ElementFinder {
    return element(by.name('lastname'));
  }
  private get sexCheckBox(): ElementFinder {
    return $('#sex-0');
  }
  private get experienceCheckBox(): ElementFinder {
    return $('#exp-6');
  }
  private get professionCheckBox(): ElementFinder {
    return $('#profession-1');
  }
  private get toolsCheckBox(): ElementFinder {
    return $('#tool-2');
  }
  private get continentSelector(): ElementFinder {
    return $('#continents');
  }
  private get submitButton(): ElementFinder {
    return $('#submit');
  }

  alejandro = {
    firstName: 'Alejandro',
    lastName: 'Perdomo',
    sex: 'Male',
    experience: 7,
    profession: ['Automation Tester'],
    tools: ['Selenium Webdriver'],
    continent: 'South America',
    commands: [
      'Browser Commands',
      'Navigation Commands',
      'Switch Commands',
      'Wait Commands',
      'WebElement Commands']
  }

  private async logInForm(personalInfo) {
    await this.firstNameField.sendKeys(personalInfo.firstName);
    await this.lastNameField.sendKeys(personalInfo.lastName);
    await this.sexCheckBox.click();
    await this.experienceCheckBox.click();
    await this.professionCheckBox.click();
    await this.toolsCheckBox.click();
    await this.continentSelector.sendKeys(personalInfo.continent);
    return this.submitButton.click();
  }
  public fillForm(): promise.Promise<void> {
    return this.logInForm(this.alejandro);
  }
};
