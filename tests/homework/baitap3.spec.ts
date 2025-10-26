import { test, expect } from '@playwright/test';
test.describe('baitapLocator', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoapp-sable-gamma.vercel.app')
    await page.getByRole('link', { name: 'Bài 2: Playwright Locators' }).click()
    await page.getByRole('button', { name: 'Playwright getByRole' }).click()
    await page.getByRole('button', { name: 'Bài tập' }).click()
  })
    test('Kiểm tra nút Bold', async ({ page }) => {
    const buttonB = page.getByRole('button', { name: 'Bold', pressed:true })
    await buttonB.click()
    await expect(buttonB).toBeVisible()
     })
      test('Kiểm tra more Options', async ({ page }) => {
    const moreOptions = page.getByRole('button', { name: 'More options', expanded: false })
    await moreOptions.click()
    const menuDuplicated = page.getByRole('menuitem', { name: 'Download (disabled)' })
    await expect(menuDuplicated).toBeVisible()
    const duplicate = page.getByRole('menuitem', { name: 'Duplicate' })
    await expect(duplicate).toBeVisible()
      })

     test('Kiểm tra Combobox', async ({ page }) => {
    const combobox = page.getByRole('combobox', { name: 'Font family', expanded: false })
    await combobox.click()
    const Roboto = page.getByRole('option', { name: 'Roboto', selected: true })
    await expect(Roboto).toBeVisible()
     })

      test('Kiểm tra nút Publish', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Tiêu đề' }).fill('TIÊU ĐỀ')
    const publishButton = page.getByRole('button', { name: 'Publish', pressed: true })
    await page.pause()
    await publishButton.click()

    })
})
// BÀI TẬP 2: Tìm landmark navigation có tên "Primary" và xác nhận link "Home" là trang hiện tại.
// Điền ô tìm kiếm bằng accessible name "Search docs".
// Tương tác với ô nhập được gắn label qua aria-labelledby là "Mã nội bộ".
// Click "Tải dữ liệu" và chờ live region thông báo "Đã tải 3 kết quả".
test.describe('bai tap2',() =>{
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoapp-sable-gamma.vercel.app')
    await page.getByRole('link', { name: 'Bài 2: Playwright Locators' }).click()
    await page.getByRole('button', { name: 'Playwright getByRole' }).click()
    await page.getByRole('button', { name: 'Bài tập' }).click()
  })
    test('kiểm tra headling', async ({ page }) => {
        const heading = page.getByRole('heading', { name: 'Câu 1: Landmark Navigation "Primary"' })
        await expect(heading).toContainText('Primary')
        await page.getByRole('link', { name: 'Home', exact: true })
    })
test ('kiểm tra Search docs', async({page})=>{
    const searchBox = page.getByRole('textbox',{name:'Search docs'}).fill('Điền ô tìm kiếm bằng accessible ')
    await searchBox
    await expect(searchBox).toContain
})
test('kiểm tra tải dữ liệu',async({page})=>{
    const taiDuLieu = page.getByRole('button',{name:'Tải dữ liệu'})
    await taiDuLieu.click()
    const status = page.getByText('Đã tải 3 kết quả')
    await page.pause()
    await expect(status).toBeVisible()
})


})
// BÀI TẬP 3: Click "Load comments" và kiểm tra aria-busy trên khu vực comments chuyển đúng trạng thái.
// Chờ danh sách comment xuất hiện và đếm đúng 3 phần tử listitem.
// Dùng nth() để chọn comment thứ 2 chứa text "Comment B".
test.describe('bai tap3',() =>{
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoapp-sable-gamma.vercel.app')
    await page.getByRole('link', { name: 'Bài 2: Playwright Locators' }).click()
    await page.getByRole('button', { name: 'Playwright getByRole' }).click()
    await page.getByRole('button', { name: 'Bài tập' }).click() 

})
  test ('kiểm tra load comment',async({page})=>{
    const loadComment = page.getByRole('button', { name: 'Load comments' })
    await loadComment.click()
    await page.pause()
    await expect(page.getByText('aria-busy: false')).toBeVisible()
    await page.pause()
    const list = page.locator('ul[role="list"]').filter({ hasText: 'Comment A' })
    await expect(list).toBeVisible()
    const listitem = page.locator('li[role="listitem"]')
    await expect(listitem).toHaveCount(3);
    const count = await listitem.count()
    await expect(count).toBe(3);
    console.log(count)
    await listitem.nth(1)
    await expect (listitem.nth(1)).toBeVisible()

  })
})
// BÀI TẬP 4: Click nút "Self remove" và xác nhận nút biến mất (toHaveCount(0)).
// Kiểm tra nút "Danger submit" bị disabled và ô "Readonly token" có thuộc tính readonly.
// Click "Trigger error" và xác nhận alert hiển thị nội dung lỗi.

test.describe('bai tap3',() =>{
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoapp-sable-gamma.vercel.app')
    await page.getByRole('link', { name: 'Bài 2: Playwright Locators' }).click()
    await page.getByRole('button', { name: 'Playwright getByRole' }).click()
    await page.getByRole('button', { name: 'Bài tập' }).click() 

})
test ('bài tập 4',async ({page})=>{
const nutTuXoa = page.getByRole('heading',{name:'Câu 1: Nút tự xóa'})
await nutTuXoa.click()
await expect(nutTuXoa).toHaveCount(0);
await expect(page.getByRole('button',{name:'Danger submit', disabled : true})).toBeDisabled()
// await expect(page.getByRole('textbox',{name:'Readonly token'}, checked: true))

})
})