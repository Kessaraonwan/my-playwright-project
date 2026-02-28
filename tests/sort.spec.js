import { test, expect } from '@playwright/test';

test('sort test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // เลือก dropdown ให้เรียงจากราคาต่ำไปสูง
  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');

  // เช็คว่าสินค้าอันแรกราคา $7.99
  await expect(
    page.locator('[data-test="inventory-item-price"]').first()
  ).toHaveText('$7.99');

});