const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        //await LoginPage.open()

        await LoginPage.login("srana@ael-bd.com",123456)
        //await expect(SecurePage.flashAlert).toBeExisting()
        //await expect(SecurePage.flashAlert).toHaveTextContaining(
            //'You logged into a secure area!')

        expect (await LoginPage.assert_job_title()).toHaveText("Applied Positon (Software Development)")   
    })

    after("Delete the Session", async()=>{
        await driver.deleteSession();
    })
})

