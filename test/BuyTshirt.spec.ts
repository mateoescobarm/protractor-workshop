import { $, browser } from 'protractor';
import { MenuContentPage } from '../src/page';
import { ProductList } from '../src/page/ProductList.page';
import { ProductDetail, ProductSummary } from '../src/page/ProductDetail.page';
import { SummaryStepPage } from '../src/page/SummaryStep.page';
import { SignInStepPage } from '../src/page/SignInStep.page';
import { AdressStepPage } from '../src/page/AddressStep.page';
import { TermsOfService, ShippingStepPage } from '../src/page/ShippingStep.page';
import { PaymentStepPage } from '../src/page/PaymentStep.page';
import { BankPaymentPage } from '../src/page/BankPayment.page';


describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productList: ProductList = new ProductList();
  const productDetail: ProductDetail = new ProductDetail();
  const productSummary: ProductSummary = new ProductSummary();
  const proceedToCheckout: SummaryStepPage = new SummaryStepPage();
  const signIn: SignInStepPage = new SignInStepPage();
  const adressProceed: AdressStepPage = new AdressStepPage();
  const termsConditions: TermsOfService = new TermsOfService();
  const shippingStep: ShippingStepPage = new ShippingStepPage();
  const paymentStep: PaymentStepPage = new PaymentStepPage();
  const bankPayment: BankPaymentPage = new BankPaymentPage();
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

 it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await (browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await (browser.sleep(3000));
    await productList.goToProductMenu();
    await (browser.sleep(3000));
    await productDetail.goToProductAddButton();
    await (browser.sleep(3000));
    await productSummary.goToProceedButton();
    await (browser.sleep(3000));
    await proceedToCheckout.goToProceedToCheckout();
    await (browser.sleep(3000));
    await signIn.goToSignIn();
    await (browser.sleep(3000));
    await adressProceed.goToAdressProceed();
    await(browser.sleep(3000));
    await termsConditions.goToTermsConditions();
    await(browser.sleep(3000));
    await shippingStep.goToShippingStep();
    await(browser.sleep(3000));
    await paymentStep.goToPaymentStep();
    await(browser.sleep(3000));
    await bankPayment.goToBankPayment();
    await(browser.sleep(3000));

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
 });
});
