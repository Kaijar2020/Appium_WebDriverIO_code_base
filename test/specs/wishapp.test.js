const { expect } = require('@wdio/globals')
const WishPage = require('../pageobjects/wisapp')

describe('Explore Wish APP',()=>{

    it('Go to the home page',async()=>{
        await WishPage.goTo();
    })
})