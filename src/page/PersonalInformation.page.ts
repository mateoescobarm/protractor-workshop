import { ElementFinder, promise, $, element, by, $$, ElementArrayFinder } from 'protractor';

export class FillPersonalInformationPage {
  private get firstNameField(): ElementFinder {
    return element(by.name('firstname'));
  };

  private get lastNameField(): ElementFinder {
    return element(by.name('lastname'));
  };

  private get sexInfo(): ElementArrayFinder {
    return $$('[name="sex"]');
  };

  private sexAttribute(sex: string): ElementFinder {
    return this.sexInfo.filter((sexType) => {
      return sexType.getAttribute('value').then((attribute) => {
        return attribute === sex;
      });
    }).first();
  };

  private get experienceInfo(): ElementArrayFinder {
    return $$('[name="exp"]');
  };

  private experienceAttribute(experience: string): ElementFinder {
    return this.experienceInfo.filter((yearsOfExperience) => {
      return yearsOfExperience.getAttribute('value').then((attribute) => {
        return attribute === experience;
      });
    }).first();
  };

  private get professionInfo(): ElementArrayFinder {
    return $$('[name="profession"]');
  };

  private professionAttribute(profession: Array): ArrayConstructor {
    return this.professionInfo.array.forEach(element => {
      return element.getAttribute('value').then((attribute) => {
        return attribute === profession;
      });
    });
  };

  private get toolInfo(): ElementArrayFinder {
    return $$('[name="tool"]');
  };

  private toolAttribute(tool: string): ElementFinder {
    return this.toolInfo.array.forEach(element => {
      return element.getAttribute('value').then((attribute) => {
        return attribute === tool;
      });
    });
  };

  private get continentSelector(): ElementFinder {
    return $('#continents');
  };

  private get submitButton(): ElementFinder {
    return $('#submit');
  };

  alejandro = {
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
      'WebElement Commands']
  };

  private async logInForm(personInfo) {
    await this.firstNameField.sendKeys(personInfo.firstName);
    await this.lastNameField.sendKeys(personInfo.lastName);
    await this.sexAttribute(personInfo.sex).click();
    await this.experienceAttribute(personInfo.experience).click();
    await this.professionAttribute(personInfo.profession).click();
    await this.toolAttribute(personInfo.tools).click();
    await this.continentSelector.sendKeys(personInfo.continent);
    return this.submitButton.click();
  };

  public fillForm(): promise.Promise<void> {
    return this.logInForm(this.alejandro);
  };
};
