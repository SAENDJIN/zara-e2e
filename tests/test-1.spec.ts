import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.zara.com/ua/en/signup?redirectUrl=https%3A%2F%2Fwww.zara.com%2Fua%2Fen%2Fshop%2F54177130896%2Fuser%2Fpersonal-data');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).fill('test@email.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('123qwe');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('123qweASD');
  await page.getByRole('textbox', { name: 'Password' }).press('Tab');
  await page.locator('div').filter({ hasText: /^Name$/ }).nth(3).click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).click();
  await page.getByRole('textbox', { name: 'Name', exact: true }).fill('TEST');
  await page.getByRole('textbox', { name: 'Name', exact: true }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Surname' }).click();
  await page.getByRole('textbox', { name: 'Surname' }).fill('test');
  await page.locator('label').filter({ hasText: 'I have read and understand' }).locator('svg').nth(1).click();
  await page.locator('label').filter({ hasText: 'I have read and understand' }).locator('svg').nth(1).click();
  await page.getByRole('button', { name: 'Create Account' }).click();
});