import{test, expect}from '@playwright/test'

test.describe('HRM Login Page',()=>{
    // Positive case
    const LOGIN_URL = 'https://hrm.anhtester.com/erp/login'
    test ('TC_LOGIN_01-Đăng nhập thành công(click)', async({page})=>{
await page.goto(LOGIN_URL);
    await expect(page.locator('h4.mb-3.f-w-600')).toContainText('Welcome to HRM | Anh Tester Demo')
     await page.locator("#iusername").fill('admin_example')
        await page.locator("#ipassword").fill('123456')
        await page.locator("//button[@type='submit']").click()
        await expect(page).toHaveURL(/.*\/erp\/desk.*/);

});
test ('TC_LOGIN_02-Đăng nhập thành công(enter)', async({page})=>{
await page.goto(LOGIN_URL);
    await expect(page.locator('h4.mb-3.f-w-600')).toContainText('Welcome to HRM | Anh Tester Demo')
     await page.locator("#iusername").fill('admin_example')
        await page.locator("#ipassword").fill('123456')
        await page.locator("//button[@type='submit']").click()
        await page.locator('#ipassword').press('Enter')
        await expect(page).toHaveURL(/.*\/erp\/desk.*/);
});

test ('TC_LOGIN_03_Sai Mật khẩu', async({page})=>{
    await page.goto(LOGIN_URL);
    await expect(page.locator('h4.mb-3.f-w-600')).toContainText('Welcome to HRM | Anh Tester Demo')
    await page.locator("//div//input[@id='iusername']").fill('admin_example')
    await page.locator("//div//input[@id ='ipassword']").fill('1234dsgr')
    await page.locator("//div//button[@type='submit']").click()
    await expect(page.locator("//div[@class ='toast-message']")).toContainText('Invalid Login Credentials')
})

test ('TC_LOGIN_04_Sai username', async({page})=>{
    await page.goto(LOGIN_URL);
    await expect(page.locator('h4.mb-3.f-w-600')).toContainText('Welcome to HRM | Anh Tester Demo')
    await page.locator("//div//input[@id='iusername']").fill('saimatkhau')
    await page.locator("//div//input[@id ='ipassword']").fill('123456')
    await page.locator("//div//button[@type='submit']").click()
    await expect(page.locator("//div[@class ='toast-message']")).toContainText('Invalid Login Credentials')
})
test ('TC_LOGIN_05_Bỏ trống cả hai trường', async({page})=>{
    await page.goto(LOGIN_URL);
    await expect(page.locator('h4.mb-3.f-w-600')).toContainText('Welcome to HRM | Anh Tester Demo')
    await page.locator("//div//input[@id='iusername']").fill('')
    await page.locator("//div//input[@id ='ipassword']").fill('')
    await page.locator("//div//button[@type='submit']").click()
    await expect(page.locator("//div[@class ='toast-message']")).toContainText('The username field is required')
})

test ('TC_LOGIN_06_Bỏ trống Password', async({page})=>{
    await page.goto(LOGIN_URL);
    await expect(page.locator('h4.mb-3.f-w-600')).toContainText('Welcome to HRM | Anh Tester Demo')
    await page.locator("//div//input[@id='iusername']").fill('admin_example')
    await page.locator("//div//input[@id ='ipassword']").fill('')
    await page.locator("//div//button[@type='submit']").click()
    await expect(page.locator("//div[@class ='toast-message']")).toContainText('The password field is required')
})

test ('TC_LOGIN_07_Bỏ trống Username', async({page})=>{
    await page.goto(LOGIN_URL);
    await expect(page.locator('h4.mb-3.f-w-600')).toContainText('Welcome to HRM | Anh Tester Demo')
    await page.locator("//div//input[@id='iusername']").fill('')
    await page.locator("//div//input[@id ='ipassword']").fill('123456')
    await page.locator("//div//button[@type='submit']").click()
    await expect(page.locator("//div[@class ='toast-message']")).toContainText('The username field is required')
})

test ('TC_LOGIN_08_Mật khẩu quá ngắn (dưới 6 ký tự)', async({page})=>{
    await page.goto(LOGIN_URL);
    await expect(page.locator('h4.mb-3.f-w-600')).toContainText('Welcome to HRM | Anh Tester Demo')
    await page.locator("//div//input[@id='iusername']").fill('admin_example')
    await page.locator("//div//input[@id ='ipassword']").fill('12')
    await page.locator("//div//button[@type='submit']").click()
    await expect(page.locator("//div[@class ='toast-message']")).toContainText('Your password is too short, minimum 6 characters required')
})

test ('TC_LOGIN_09_Mật khẩu bị che (Masking)', async({page})=>{
    await page.goto(LOGIN_URL);
    await expect(page.locator('h4.mb-3.f-w-600')).toContainText('Welcome to HRM | Anh Tester Demo')
    await page.locator("//div//input[@id='iusername']").fill('admin_example')
    await expect(page.locator("//div//input[@id ='ipassword']")).toHaveAttribute('type','password')   
})

test ('TC_LOGIN_10_Link "Quên mật khẩu"', async({page})=>{
    await page.goto(LOGIN_URL);
    await expect(page.locator('h4.mb-3.f-w-600')).toContainText('Welcome to HRM | Anh Tester Demo')
    await page.locator('span', { hasText: 'Forgot password?' }).click()
    await expect (page).toHaveURL('https://hrm.anhtester.com/erp/forgot-password')
    
})

test ('TC_LOGIN_11_Placeholder (Văn bản gợi ý)', async({page})=>{
    await page.goto(LOGIN_URL);
    await expect(page.locator('h4.mb-3.f-w-600')).toContainText('Welcome to HRM | Anh Tester Demo')
     await expect(page.locator("//div//input[@id='iusername']")).toHaveAttribute('placeholder','Your Username')
    await expect(page.locator("//div//input[@id ='ipassword']")).toHaveAttribute('placeholder','Enter Password')
    
})

test ('TC_LOGIN_12_Phân biệt Hoa/Thường', async({page})=>{
    await page.goto(LOGIN_URL);
    await expect(page.locator('h4.mb-3.f-w-600')).toContainText('Welcome to HRM | Anh Tester Demo')
     await page.locator("//div//input[@id='iusername']").fill('ADMIN_EXAMPLE')
    await page.locator("//div//input[@id ='ipassword']").fill('123456')
    await page.locator("//div//button[@type='submit']").click()
})
});
// tégoaga