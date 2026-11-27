const { test, expect } = require('@playwright/test');

test('Example.com: перевірка наявності тексту та посилання', async ({ page }) => {
  await page.goto('https://example.com/');

  await expect(page.locator('body'))
    .toContainText('This domain is for use in documentation examples');

  await expect(page.getByRole('link').first()).toBeVisible();
});