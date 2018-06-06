let loginTest = (pageObject, email, password) => {
    pageObject
        .click('@signinButton')
        .waitForElementPresent('@emailInput', 5000)
        .setValue('@emailInput', email)
        .setValue('@passInput', password)
        .waitForElementVisible('@submitButton', 5000)
        .click('@submitButton')
        .waitForElementPresent('@viewAccount', 5000)
        .expect.element('@viewAccount').text.to.equal('View Account')

}


module.exports = {
    beforeEach: browser => {
        browser.url('https://www.autotrader.com/')
            .waitForElementPresent('body', 5000, 'Page Loaded')
    },

    after: browser => {
        browser.end()
    },

    'Logging In': browser => {
        loginTest(browser.page.AutoTrader(), 'prislocks@gmail.com', 'prislocksunny')
    }

}