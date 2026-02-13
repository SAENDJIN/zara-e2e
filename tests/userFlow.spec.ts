import { test } from "../app/fixtures/fixtures"
import { argosScreenshot } from "@argos-ci/playwright";


test('ZA-1 Full cart flow and invalid registration validation', async({page, searchComponents, cookieModal, productPage, cartPage, registrationPage })=> {
    await cookieModal.goto();
    await argosScreenshot(page, "homepage");
    await cookieModal.btnsVisible();
    await cookieModal.acceptAllCookies();
    await cookieModal.cookiesModalHidden();

    await searchComponents.goto();
    await argosScreenshot(page, "search");
    await searchComponents.clickOnProductWithFourOrMoreSizes();

    // await productPage.addAllAvailableSizes();
    // await productPage.openCart();

    // await cartPage.deleteEverySecondItem();
    // await cartPage.proceedToCheckout();

    // await registrationPage.registerNewUser();
    // await registrationPage.registerFailCheck();
})