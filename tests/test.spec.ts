import { test } from "../app/fixtures/fixtures"
import {expect} from "@playwright/test"
test("test", async ({ page }) => {
  await page.goto("https://www.zara.com/ge/en/signup");
  await page
    .locator(".zds-checkbox-icon.zds-checkbox-icon--unchecked")
    .nth(1)
    .click();
  expect(true).toBeTruthy();
});