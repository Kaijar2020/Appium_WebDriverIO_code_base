const { $ } = require('@wdio/globals')

class WishApp {

    WishAppLocators = {
        "first_modal": 'android.widget.Button',
        "cross_btn": '//android.widget.ImageView[@resource-id="com.contextlogic.wish:id/close_button"]',
        // "cross_btn": 'com.contextlogic.wish:id/close_button',
        "click_dont_allow": '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]',
        "best_seller": '//android.widget.TextView[@text="Best sellers"]'


    }

    async goTo(){
        await $(this.WishAppLocators.first_modal).click()
        await $(this.WishAppLocators.cross_btn).click()
        await driver.pause(1000)
        await $(this.WishAppLocators.click_dont_allow).click()
        await this.text_assert("Best sellers");
    }

    async text_assert(text){
       const tx = (await $(this.WishAppLocators.best_seller)).getText()
       expect(await tx == text)
    }

} module.exports = new WishApp();