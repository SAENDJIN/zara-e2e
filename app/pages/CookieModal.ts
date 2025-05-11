import { Locator, Page, expect } from "@playwright/test"
import { BasePage } from "./BasePage";

export class CookieModal extends BasePage {
    private cookieSettingBtn: Locator;
    private rejectCookieBtn: Locator;
    private acceptAllCookieBtn: Locator;
    private cookiesAllBtns: Locator;

    constructor(page: Page) {
        super(page);
        this.cookieSettingBtn = page.locator('[id=onetrust-pc-btn-handler]');
        this.rejectCookieBtn = page.locator('[id=onetrust-reject-all-handler]');
        this.acceptAllCookieBtn = page.locator('[id=onetrust-accept-btn-handler]');
        this.cookiesAllBtns = page.locator('[id=onetrust-button-group-parent]');
    }

    async goto() {
        await this.page.goto('');
    }
    async btnsVisible() {
        await expect(this.cookieSettingBtn).toBeVisible();
        await expect(this.rejectCookieBtn).toBeVisible();
    }
    async acceptAllCookies() {
        await this.acceptAllCookieBtn.click();
    }
    async cookiesModalHidden() {
        await expect(this.cookiesAllBtns).not.toBeVisible();
    }
}
