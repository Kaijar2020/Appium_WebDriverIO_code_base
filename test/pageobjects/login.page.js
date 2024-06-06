const { $ } = require('@wdio/globals')
const Page = require('./page');
const { RoachHotelMap } = require('appium/build/lib/schema/schema');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    //Login page Locators 
    LoginScreenLocators = {
        "email" : '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[1]',
        "password" : '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.widget.EditText[2]',
        "login_btn" : '(//android.view.View[@content-desc="Login"])[2]',
        "clickOutside" : '//android.widget.ImageView[@content-desc="Ez-Onboarding"]',
        "profileText" : '//android.view.View[@content-desc="Applied Positon (Software Development)"]'
    }
    /**
     * define selectors using getter methods
     */
    /*
    get inputUsername () {
        return $(this.LoginScreenLocators.email);
    }

    get inputPassword () {
        return $(this.LoginScreenLocators.password);
    }

    get btnSubmit () {
        return $(this.LoginScreenLocators.login_btn);
    }
    */
    async click_outside(){
         $(this.LoginScreenLocators.clickOutside).click();
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username,pass) {
        await driver.pause(1000);
        await $(this.LoginScreenLocators.email).click();
        await $(this.LoginScreenLocators.email).addValue(username);
        await this.click_outside();
        // await driver.pause(1000);
        await $(this.LoginScreenLocators.password).click();
        await driver.pause(1000);
        await $(this.LoginScreenLocators.password).setValue(pass);
        //await driver.pause(1000);
        await this.click_outside();
        await driver.pause(1000);
        await $(this.LoginScreenLocators.login_btn).click();
        await driver.pause(2000);
    }

    async assert_job_title(){
       const degination_text = await $(this.LoginScreenLocators.profileText).getText();
       console.log(degination_text);
       return degination_text ;
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    // open () {
    //     return super.open('login');
    // }
}

module.exports = new LoginPage();
