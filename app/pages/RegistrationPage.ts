import { Locator, Page, expect } from "@playwright/test"
import { BasePage } from "./BasePage";

export class RegistrationPage extends BasePage {
    private regBtn: Locator;
    private emailInput: Locator;
    private passwordInput: Locator;
    private nameInput: Locator;
    private surnameInput: Locator;
    private createAccountBtn: Locator;
    private privacyCheckBox: Locator;
    private alertModal: Locator;

    constructor(page: Page) {
        super(page);
        this.regBtn = page.locator('[data-qa-id="logon-view-alternate-button"]');
        this.emailInput = page.locator('[data-qa-input-qualifier="email"]');
        this.passwordInput = page.locator('[data-qa-input-qualifier="password"]');
        this.nameInput = page.locator('[data-qa-input-qualifier="firstName"]');
        this.surnameInput = page.locator('[data-qa-input-qualifier="lastName"]');
        this.privacyCheckBox =  page.locator('label').filter({ hasText: 'I have read and understand' }).locator('svg').nth(1);
        this.createAccountBtn = page.locator('[data-qa-action="sign-up-submit"]');
        this.alertModal = page.locator('[role="alertdialog"]');
    }

    async registerNewUser() {
        await this.regBtn.click();
        await this.emailInput.fill('test@email.com');
        await this.passwordInput.fill('123qweASD');
        await this.nameInput.fill('test');
        await this.surnameInput.fill('test');
        //IDK or understand why i need to click twice on a checkbox.
        //I've spent over three hours here -_-
        await this.privacyCheckBox.click();
        await this.privacyCheckBox.click();
        await this.createAccountBtn.click();
    }
    async registerFailCheck() {
        await expect(this.alertModal).toContainText('Your request cannot be completed at this time. Please try again later.')
    }
}