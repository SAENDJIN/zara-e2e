import { Locator, Page, expect } from "@playwright/test"
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
    private removeBtn: Locator;
    private continueBtn: Locator;

    constructor(page: Page) {
        super(page);

        this.removeBtn = page.locator('[data-qa-id="remove-order-item-unit"]');
        this.continueBtn = page.locator('[data-qa-id="shop-continue"]');
    }

    async deleteEverySecondItem() {
        await this.page.waitForSelector('[data-qa-order-item-id]');

        let removeButtons = await this.removeBtn.all();

        console.log(`Знайдено ${removeButtons.length} товарів у кошику.`);

        for (let i = removeButtons.length - 1; i >= 0; i--) {
            if (i % 2 === 1) {
                const btn = this.removeBtn.nth(i);
                await btn.click();

                await this.page.waitForTimeout(300);
            }
        }
    }
    async proceedToCheckout(){
        await this.continueBtn.click();
    }

}