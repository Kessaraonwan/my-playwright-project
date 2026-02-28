import { test, expect } from '@playwright/test';

test('assertions test', async ({ page }) => {

  await page.goto('https://www.saucedemo.com');

  // ใส่ password ผิดตั้งใจเลย
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('wrong_password');
  await page.locator('[data-test="login-button"]').click();

  const errorMsg = page.locator('[data-test="error"]');

  // เช็คว่า error ขึ้นมาให้เห็น
  await expect(errorMsg).toBeVisible();

  // เช็คว่าข้อความ error มีคำว่า do not match อยู่
  await expect(errorMsg).toContainText('do not match');

  // เช็คว่ากล่อง username มีกรอบแดง (CSS class ชื่อ error)
  await expect(page.locator('[data-test="username"]')).toHaveClass(/error/);

  // กดปุ่ม X ปิด error แล้วเช็คว่ามันหายไปแล้ว
  await page.locator('.error-button').click();
  await expect(errorMsg).not.toBeVisible();

});