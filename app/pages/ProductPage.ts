import { Locator, Page, expect } from "@playwright/test"
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {
    private AddBtn: Locator;
    private closeCartModal: Locator;
    private addToCartModalBtn: Locator;
    private shoppingBagBtn: Locator;


    constructor(page: Page) {
        super(page);
        this.AddBtn = page.locator('[data-qa-action="add-to-cart"]');
        this.closeCartModal = page.locator('button[aria-label="close"]');
        this.addToCartModalBtn = page.locator('[data-qa-action="bracketing__add-to-cart"]');
        this.shoppingBagBtn = page.locator('[data-qa-id="layout-header-go-to-cart"]')

    }

    async addAllAvailableSizes() {
        await this.AddBtn.click();
        const sizeButtons = this.page.locator('[data-qa-action="size-in-stock"]');

        const count = await sizeButtons.count();

        for (let i = 0; i < count; i++) {
            const size = sizeButtons.nth(i);
            await size.click();
            
            if (await this.addToCartModalBtn.isVisible()) {
                await this.addToCartModalBtn.click()
            }
            await this.closeCartModal.click();
            await this.AddBtn.click();

        }
    }
    async openCart(){
        await this.shoppingBagBtn.click();
    }
}