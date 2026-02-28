import { test, expect } from '@playwright/test';

test('cart test', async ({ page }) => {

  // login ก่อนเลย เหมือนข้อที่แล้ว
  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // เพิ่ม Sauce Labs Backpack
  await page.locator('[data-test="inventory-item"]')
    .filter({ hasText: 'Sauce Labs Backpack' })
    .locator('button')
    .click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

  // เพิ่ม Sauce Labs Bike Light
  await page.locator('[data-test="inventory-item"]')
    .filter({ hasText: 'Sauce Labs Bike Light' })
    .locator('button')
    .click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

  // ลบ Backpack ออก
  await page.locator('[data-test="inventory-item"]')
    .filter({ hasText: 'Sauce Labs Backpack' })
    .locator('button')
    .click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

});