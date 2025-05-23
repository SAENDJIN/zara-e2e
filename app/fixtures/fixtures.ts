import { test as base } from "@playwright/test";
import { CookieModal } from '../pages/CookieModal';
import { SearchComponents } from "../pages/SearchCompoment";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";
import { RegistrationPage } from "../pages/RegistrationPage";

type Fixture = {
    cookieModal: CookieModal;
    searchComponents: SearchComponents;
    productPage: ProductPage;
    cartPage: CartPage;
    registrationPage: RegistrationPage;
}

export const test = base.extend<Fixture>({
    cookieModal: async ({ page }, use) => {
        const cookieModal = new CookieModal(page);
        await use(cookieModal)
    },
    searchComponents: async ({ page }, use) => {
        const searchComponents = new SearchComponents(page);
        await use(searchComponents)
    },
    productPage: async ({ page }, use) => {
        const productPage = new ProductPage(page);
        await use(productPage)
    },
    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page);
        await use(cartPage)
    },
    registrationPage: async ({ page }, use) => {
        const registrationPage = new RegistrationPage(page);
        await use(registrationPage)
    },
})