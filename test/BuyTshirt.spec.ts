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

 it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await menuContentPage.goToTShirtMenu();
    await (browser.sleep(3000));
    await productList.selecProduct();
    await (browser.sleep(3000));
    await productDetail.addToCart();
    await (browser.sleep(3000));
    await productAdded.proceedToCheckout();
    await(browser.sleep(3000));
    await proceedToCheckout.summaryProceedToCheckout();
    await (browser.sleep(3000));
    await signIn.fillForm();
    await (browser.sleep(3000))
    await signIn.logIn();
    await (browser.sleep(3000));
    await adressProceed.checkAdressProceedToShipping();
    await(browser.sleep(3000));
    await checkBox.checkTermsOfService();
    await(browser.sleep(3000));
    await shippingStep.proceedToPayment();
    await(browser.sleep(3000));
    await paymentStep.selectPaymentMetodBankWire();
    await(browser.sleep(3000));
    await bankPayment.goToConfirmationPage();
    await(browser.sleep(3000));
    await expect(orderResume.getTextOfConfirmation())
      .toBe('Your order on My Store is complete.');
 });
});
