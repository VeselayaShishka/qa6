// tests/screenshots/about.spec.js — 2 screenshot тести для сторінки about.html
const { test, expect } = require('@playwright/test');

test('About: скриншот усієї сторінки', async ({ page }) => {
  await page.goto('/about.html');
  expect(await page.screenshot()).toMatchSnapshot('screenshots/about-page/about-page.png');
});

test('About: скриншот елемента (картка)', async ({ page }) => {
  await page.goto('/about.html');
  const card = page.locator('#infoCard');
  expect(await card.screenshot()).toMatchSnapshot('screenshots/about-page/about-card.png');
});
