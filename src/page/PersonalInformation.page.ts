import { ElementFinder, promise, $, element, by, $$, ElementArrayFinder } from 'protractor';

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
      })
    }).first();
  }
  private get experienceInfo(): ElementArrayFinder {
    return $$('[name="exp"]');
  }
  private experienceAttribute(experience: string): ElementFinder {
    return this.experienceInfo.filter((yearsOfExperience) => {
      return yearsOfExperience.getAttribute('value').then((attribute) => {
        return attribute === experience;
      })
    }).first();
  }
  private get professionInfo(): ElementArrayFinder {
    return $$('[name="exp"]');
  }
  private professionAttribute(profession: string): ElementFinder {
    return this.professionInfo.filter((professiontype) => {
      return professiontype.getAttribute('value').then((attribute) => {
        return attribute === profession;
      })
    }).first();
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
    await this.sexAttribute(personalInfo.sex).click();
    await this.experienceAttribute(personalInfo.experience).click();
    await this.professionAttribute(personalInfo.profession).click();
    await this.toolsCheckBox.click();
    await this.continentSelector.sendKeys(personalInfo.continent);
    return this.submitButton.click();
  }
  public fillForm(): promise.Promise<void> {
    return this.logInForm(this.alejandro);
  }
};
