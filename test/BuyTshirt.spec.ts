import { browser } from 'protractor';
import { MenuContentPage,
         ProductList,
         ProductDetail,
         SummaryStepPage,
         SignInStepPage,
         AdressStepPage,
         ShippingStepPage,
         PaymentStepPage,
         BankPaymentPage,
         OrderResumePage,
         ProductAdded,
         TermsOfServiceCheckBox} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productList: ProductList = new ProductList();
  const productDetail: ProductDetail = new ProductDetail();
  const productAdded: ProductAdded = new ProductAdded();
  const proceedToCheckout: SummaryStepPage = new SummaryStepPage();
  const signIn: SignInStepPage = new SignInStepPage();
  const adressProceed: AdressStepPage = new AdressStepPage();
  const checkBox: TermsOfServiceCheckBox = new TermsOfServiceCheckBox();
  const shippingStep: ShippingStepPage = new ShippingStepPage();
  const paymentStep: PaymentStepPage = new PaymentStepPage();
  const bankPayment: BankPaymentPage = new BankPaymentPage();
  const orderResume: OrderResumePage = new OrderResumePage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

 it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await (browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await (browser.sleep(3000));
    await productList.selecProduct();
    await (browser.sleep(3000));
    await productDetail.addProduct();
    await (browser.sleep(3000));
    await productAdded.goToProceedButton();
    await(browser.sleep(3000));
    await proceedToCheckout.clickProceedToCheckoutButton();
    await (browser.sleep(3000));
    await signIn.logInClick();
    await (browser.sleep(3000));
    await adressProceed.checkAdress();
    await(browser.sleep(3000));
    await checkBox.checkTermsOfService();
    await(browser.sleep(3000));
    await shippingStep.goToShippingStep();
    await(browser.sleep(3000));
    await paymentStep.goToBankPayment();
    await(browser.sleep(3000));
    await bankPayment.goToConfirmationPage();
    await(browser.sleep(3000));
    await expect(orderResume.getText())
      .toBe('Your order on My Store is complete.');
 });
});
