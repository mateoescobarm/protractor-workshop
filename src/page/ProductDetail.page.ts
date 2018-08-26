import { $, ElementFinder, promise } from 'protractor';

export class ProductDetail {
  private get ProductAddButton(): ElementFinder {
    return $('#add_to_cart > button > span');
  }

  public goToProductAddButton(): promise.Promise<void> {
    return this.ProductAddButton.click();
  }
}

export class ProductSummary {
  private get ProceedButton(): ElementFinder {
    return $('[style*="display: block;"] .button-container > a');
  }

  public goToProceedButton(): promise.Promise<void> {
    return this.ProceedButton.click();
  }
}
