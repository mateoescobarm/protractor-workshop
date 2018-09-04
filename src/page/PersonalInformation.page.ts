import { ElementFinder, promise, element, by } from 'protractor';

export class ProductDetail {
  private async fillPersonalInfo(): ElementFinder {
    return element(by.buttonText('Add to cart'));
  


  await personalInformationPage.fillForm({
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

    public addToCart(): promise.Promise<void> {
      return this.addToCartButton.click();
    }

};