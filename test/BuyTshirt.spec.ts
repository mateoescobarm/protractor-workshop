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
    await productList.selecProduct();
    await productDetail.addToCart();
    await (browser.sleep(3000));
    await productAdded.proceedToCheckout();
    await proceedToCheckout.summaryProceedToCheckout();
    await signIn.fillForm();
    await adressProceed.checkAdressProceedToShipping();
    await checkBox.checkTermsOfService();
    await shippingStep.proceedToPayment();
    await paymentStep.selectPaymentMetodBankWire();
    await bankPayment.goToConfirmationPage();
    await expect(orderResume.getTextOfConfirmation())
      .toBe('Your order on My Store is complete.');
 });
});
