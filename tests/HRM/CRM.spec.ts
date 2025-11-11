import{test, expect, Page } from'@playwright/test'
const LOGIN_URL1 ='https://crm.anhtester.com/admin/authentication'
async function loginAndNavigateToNewCustom(page: Page) {
await page.goto(LOGIN_URL1)
await expect(page.getByRole('heading', {level: 1})).toContainText('Login')
await page.locator('#email').fill('admin@example.com')
await page.locator('#password').fill('123456')
await page.keyboard.press('Enter')
await expect(page.locator("//span[normalize-space(.) = 'Customers']//parent::a")).toBeVisible()
await page.pause()
 }
