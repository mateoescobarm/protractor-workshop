import { $, browser } from 'protractor';
import { MenuContentPage } from '../src/page';
import { ProductList } from '../src/page/ProductList.page';
import { ProductDetail, ProductSummary } from '../src/page/ProductDetail.page';
import { SummaryStepPage } from '../src/page/SummaryStep.page';


describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productList: ProductList = new ProductList();
  const productDetail: ProductDetail = new ProductDetail();
  const productSummary: ProductSummary = new ProductSummary();
  const proceedToCheckout: SummaryStepPage = new SummaryStepPage();
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

 it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await (browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    await productList.goToProductMenu();
    await(browser.sleep(3000));
    await productDetail.goToProductAddButton();
    await(browser.sleep(3000));
    await productSummary.goToProceedButton();
    await(browser.sleep(3000));
    await proceedToCheckout.goToProceedToCheckout();
    await(browser.sleep(3000));
  
    await $('#email').sendKeys('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');
    await $('#SubmitLogin > span').click();
    await(browser.sleep(3000));
  
    await $('#center_column > form > p > button > span').click();
    await(browser.sleep(3000));

    await $('#cgv').click();
    await(browser.sleep(3000));

    await $('#form > p > button > span').click();
    await(browser.sleep(3000));
    await $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click();
    await(browser.sleep(3000));
    await $('#cart_navigation > button > span').click();
    await(browser.sleep(3000));

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
 });
});
