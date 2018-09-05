<<<<<<< HEAD

import {
  ElementFinder,
  promise,
  $,
  element,
  by,
  $$,
  ElementArrayFinder
} from 'protractor';

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

  private async professionAttribute(profession: string[]): Promise<void>{
    await this.professionInfo.each(async (professionElement) => {
      let professionElementValue = await professionElement.getAttribute('value');
      if (profession.indexOf(professionElementValue)!==-1) {
        await professionElement.click();
      };
    });
  }

  private get toolInfo(): ElementArrayFinder {
    return $$('[name="tool"]');
  }

  private async toolAttribute(tools: string[]): Promise<void> {
    await this.toolInfo.each(async (toolsElement) => {
      let toolsElementValue = await toolsElement.getAttribute('value');
      if (tools.indexOf(toolsElementValue)!==-1) {
        await toolsElement.click();
      };
    });
  }

  private get continentDropdown(): ElementFinder {
    return $('#continents');
  }

  private get continentDropdownOptions(): ElementArrayFinder {
    return this.continentDropdown.$$('option')
  }

  private async selectContinentOption(continent: string): Promise<void> {
    await this.continentDropdown.click();
    await this.continentDropdownOptions.filter((continentco) => {
      return continentco.getAttribute('value').then((attribute) => {
        return attribute === continent;
      });
    }).first().click();
  }

  private get submitButton(): ElementFinder {
    return $('#submit');
  }

  private alejandro = {
=======
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
>>>>>>> personal info fill form test
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
<<<<<<< HEAD
  };

  private async logInForm(personInfo) {
    await this.firstNameField.sendKeys(personInfo.firstName);
    await this.lastNameField.sendKeys(personInfo.lastName);
    await this.sexAttribute(personInfo.sex).click();
    await this.experienceAttribute(personInfo.experience).click();
    await this.professionAttribute(personInfo.profession);
    await this.toolAttribute(personInfo.tools);
    await this.selectContinentOption(personInfo.continent);
    return this.submitButton.click();
  }

  public fillForm(): promise.Promise<void> {
    return this.logInForm(this.alejandro);
  }
}
=======
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
<<<<<<< HEAD
>>>>>>> personal info fill form test
=======
>>>>>>> endline 2
