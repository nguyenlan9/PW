import { test, expect } from '@playwright/test';

test.describe ('baitapLocator', () => {
  test.beforeEach(async ({ page }) => {
  await page.goto('https://demoapp-sable-gamma.vercel.app');
  await page.getByRole('link', { name: 'Bài 2: Playwright Locators' }).click();
  await page.getByRole('button', { name: '🎯 Bài tập Tổng hợp' }).click();
  })

test('Locator1a', async ({ page }) => {
 

  const addToCart = page.locator("//span[contains(text(),'Add to Cart')]");
  const countButton = await addToCart.count()
  console.log(`số button Add to Cart: ${countButton}`)
  
  const productCart = page.locator("//div[@data-category='electronics']")
const electronics = await productCart.count()
console.log(`Số lượng Electronics ${electronics}`)

const productCart2 = page.locator("//div[@data-price='49'and @data-category='clothing']")
const clothing = await productCart2.count()
console.log(`Số lượng Clothing ${clothing}`)

 const productCart3 = page.locator("//div[@class = 'product-grid']").filter({hasText:'iPhone'})
 const iPhone =await productCart3.count()
 console.log(`Số lượng Iphone ${iPhone}`)

// const productCart4 = page.locator("//div[@class='product=grid']").filter({has:page.getByRole('')})
const analytics = page.locator("//span[contains(text(),'Analytics')]")
await expect(analytics).toBeVisible()
await analytics.click()

})
test ('locator2a', async({page})=>{
const userCard1 = page.locator("//div[@data-role ='admin' and @data-status ='active']")
const userCard = await userCard1.count()
console.log (`Số lượng user admin ${userCard}`)

const buttons1 = page.locator("//span[text()='Edit'or text()='Delete']")
const buttonS = await buttons1.count()
console.log(`Số lượng button Edit or Delete ${buttonS}`)


const userCard2 = page.locator("//span").filter({hasText:'john'})
const email = await userCard2.count()
console.log(`User email ${email}`)

const userCard3 = page.locator("//div[@style='display: flex; flex-direction: column; gap: 12px;']//div[@data-role ='admin' or @data-role ='user']").filter({hasNot: page.locator('span:has-text("Delete")')})
const userDelete = await userCard3.count();
console.log(`Số lượng user không có nút Delete: ${userDelete}`);

const addNew = page.locator("//span[text()='Add New User']")
await addNew.click()

const userCard4 = page.locator("//div[@style='display: flex; flex-direction: column; gap: 12px;']//div[@data-status ='inactive']")
const userInactive = await userCard4.count()
console.log(`Số lượng userInactive ${userInactive}`)

})

})


