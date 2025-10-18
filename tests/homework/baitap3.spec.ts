import { test, expect } from '@playwright/test';
test.describe('baitap', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoapp-sable-gamma.vercel.app')
    await page.getByRole('link', { name: 'Bài 2: Playwright Locators' }).click()
    await page.getByRole('button', { name: 'Playwright getByRole' }).click()
    await page.getByRole('button', { name: 'Bài tập' }).click()
   
    const buttonB = page.getByRole('button', { name: 'Bold', pressed:true })
    await buttonB.click()
    await expect(buttonB).toBeVisible()

    // const moreOptions = page.getByRole('button', { name: 'More options', expanded: false })
    // await moreOptions.click()
    // const menuDuplicated = page.getByRole('menuitem', { name: 'Download (disabled)' })
    // await expect(menuDuplicated).toBeVisible()
    // const duplicate = page.getByRole('menuitem', { name: 'Duplicate' })
    // await expect(duplicate).toBeVisible()

    // const combobox = page.getByRole('combobox', { name: 'Font family', expanded: false })
    // await combobox.click()
    // const Roboto = page.getByRole('option', { name: 'Roboto', selected: true })
    // await expect(Roboto).toBeVisible()


  
    await page.getByRole('textbox', { name: 'Tiêu đề' }).fill('TIÊU ĐỀ')
    const publishButton = page.getByRole('button', { name: 'Publish', pressed: true })
    await page.pause()
    await publishButton.click()

    })
})