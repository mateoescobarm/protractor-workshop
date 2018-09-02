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


describe('open browser', () =>{

  beforeEach(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('buying a T-Shirt', () =>{
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productList: ProductList = new ProductList();
    const productDetail: ProductDetail = new ProductDetail();
    const productAdded: ProductAdded = new ProductAdded();
    const proceedToCheckout: SummaryStepPage = new SummaryStepPage();

    beforeEach(async () => {
      await menuContentPage.goToTShirtMenu();
      await productList.selecProduct();
      await productDetail.addToCart();
      await productAdded.proceedToCheckout();
      await proceedToCheckout.summaryProceedToCheckout();
    });

    describe('sign in step', () =>{
      const signIn: SignInStepPage = new SignInStepPage();

      beforeEach(async () => {
        await signIn.fillForm();
      });

      describe('adress and shipping steps', () =>{
        const adressProceed: AdressStepPage = new AdressStepPage();
        const checkBox: TermsOfServiceCheckBox = new TermsOfServiceCheckBox();
        const shippingStep: ShippingStepPage = new ShippingStepPage();

        beforeEach(async () => {
          await adressProceed.checkAdressProceedToShipping();
          await checkBox.checkTermsOfService();
          await shippingStep.proceedToPayment();
        });

        describe('bankment payment', () =>{
          const paymentStep: PaymentStepPage = new PaymentStepPage();
          const bankPayment: BankPaymentPage = new BankPaymentPage();

          beforeEach(async () => {
            await paymentStep.selectPaymentMetodBankWire();
            await bankPayment.goToConfirmationPage();
          });
        

          describe('confirmation step', () => {  
            const orderResume: OrderResumePage = new OrderResumePage();

            it('then should be bought a t-shirt', async () => {
              await expect(orderResume.getTextOfConfirmation())
                .toBe('Your order on My Store is complete.');
            });
          });
        });
      });
    });
  });
});
