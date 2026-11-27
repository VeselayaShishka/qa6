// tests/e2e/about.test.js — e2e тести додаткової сторінки about.html
const { test, expect } = require('@playwright/test');

test('About: перевірка заголовка вкладки', async ({ page }) => {
  await page.goto('/about.html');
  await expect(page).toHaveTitle('Про проєкт');
});

test('About: перевірка тексту заголовка h1 та кількості пунктів списку', async ({ page }) => {
  await page.goto('/about.html');
  await expect(page.locator('#pageTitle')).toHaveText('Про проєкт');
  await expect(page.locator('#featureList li')).toHaveCount(3);
});

test('About: перехід з головної сторінки та назад', async ({ page }) => {
  await page.goto('/');
  await page.click('#aboutLink');
  await expect(page).toHaveURL(/about\.html/);
  await page.click('#homeLink');
  await expect(page).toHaveURL(/index\.html|\/$/);
  await expect(page.locator('h1')).toBeVisible();
});
