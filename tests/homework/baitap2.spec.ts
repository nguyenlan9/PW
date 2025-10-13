import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoapp-sable-gamma.vercel.app/');
  await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
  await page.getByRole('heading', { name: 'Playwright Lessons' }).click();
  await page.getByRole('link', { name: 'Trang chủ' }).click();
  await page.getByRole('link', { name: 'Bài 1: Auto-Wait Demo' }).click();
  await page.getByRole('button', { name: 'Nâng cao' }).click();
  await page.getByText('Tôi đồng ý với các điều khoản').click();
  await page.getByRole('button', { name: 'Tiếp tục' }).click();
  await expect(page.getByRole('heading', { name: 'Chào mừng bạn đã quay trở lại!' })).toBeVisible();

})


