import { Locator, Page} from "@playwright/test"
import { BasePage } from "./BasePage";

export class SearchComponents extends BasePage {
    private productBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.productBtn = page.locator("[data-productid]")
    }

    async goto() {
        await this.page.goto('ua/en/search/home');
        await this.page.waitForLoadState('networkidle');

    }

    async clickOnProductWithMoreThanFourSizes(){
        const products = await this.productBtn.all();

        for(const product of products){
            const countOfSize = (await product.locator('[data-qa-action="size-in-stock"]').all()).length;

            if(countOfSize <= 4){
                await product.click();
                break;
            }
        }
    }
}
