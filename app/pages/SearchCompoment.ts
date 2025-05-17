import { expect, Locator, Page } from "@playwright/test"
import { BasePage } from "./BasePage";

export class SearchComponents extends BasePage {
    private productBtn: Locator;
    private sizeSelectorModal: Locator;

    constructor(page: Page) {
        super(page);
        this.productBtn = page.locator("[data-productid]");
        this.sizeSelectorModal = page.locator('ul.size-selector-sizes');
    }

    async goto() {
        await this.page.goto('ua/en/search/home');
        await this.page.waitForLoadState('networkidle');

    }

    async clickOnProductWithFourOrMoreSizes() {
        const products = this.productBtn;
        const total = await products.count();

        for (let i = 0; i < total; i++) {
            const product = products.nth(i);
            await product.locator('button[data-qa-action="product-grid-open-size-selector"]').click();

            const sizeList = this.sizeSelectorModal;
            await sizeList.waitFor({ state: 'visible' });

            const sizeButtons = sizeList.locator('button[data-qa-action="size-in-stock"]');
            const sizeCount = await sizeButtons.count();

            if (sizeCount >= 4) {
                await product.click();
                break;
            }
            await this.page.keyboard.press('Escape');
        }
    }
}
