import { ElementFinder, promise, $ } from 'protractor';

export class FillPersonalInformationPage {
  private get firstNameField(): ElementFinder {
    return $('fisrt name');
  }
  private get lastNameField(): ElementFinder {
    return $('last name');
  }
  private get sexCheckBox(): ElementFinder {
    return $('sex-0');
  }
  private get experienceCheckBox(): ElementFinder {
    return $('exp-6');
  }
  private get professionCheckBox(): ElementFinder {
    return $('profession-1');
  }
  private get toolsCheckBox(): ElementFinder {
    return $('tool-6');
  }
  private get continentSelector(): ElementFinder {
    return $('#continents');
  }
  private get commandsSelector(): ElementFinder {
    return $('#selenium_comands');
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
    await this.sexCheckBox.sendKeys(personalInfo.sex);
    await this.experienceCheckBox.sendKeys(personalInfo.experience);
    await this.professionCheckBox.sendKeys(personalInfo.profession);
    await this.toolsCheckBox.sendKeys(personalInfo.tools);
    await this.continentSelector.sendKeys(personalInfo.continent);
    await this.commandsSelector.sendKeys(personalInfo.commands);
    return this.submitButton.click();
  }
  public fillForm(): promise.Promise<void> {
    return this.logInForm(this.alejandro);
  }
};
