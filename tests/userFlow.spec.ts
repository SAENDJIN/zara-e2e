import { test } from "../app/fixtures/fixtures"

test('ZA-1 Full cart flow and invalid registration validation', async({ searchComponents, cookieModal, productPage, cartPage, registrationPage })=> {
    await cookieModal.goto();
    await cookieModal.btnsVisible();
    await cookieModal.acceptAllCookies();
    await cookieModal.cookiesModalHidden();

    await searchComponents.goto();
    await searchComponents.clickOnProductWithMoreThanFourSizes();

    await productPage.addAllAvailableSizes();
    await productPage.openCart();

    await cartPage.deleteEverySecondItem();
    await cartPage.proceedToCheckout();

    await registrationPage.registerNewUser();
    await registrationPage.registerFailCheck();
})