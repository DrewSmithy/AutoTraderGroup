let loginTest = (pageObject, email, password) => {
    pageObject
        .click('@signinButton')
        .waitForElementVisible('@emailInput', 10000)
        .setValue('@emailInput', email)
        .setValue('@passInput', password)
        .waitForElementVisible('@submitButton', 8000, 'Submitting Login')
        .click('@submitButton')
        .waitForElementPresent('@viewAccount', 8000, 'Login Successful')
        .expect.element('@viewAccount').text.to.equal('View Account')

}
let compareCars = (comparePage, make1, model1, make2, model2, make3, model3) => {
    comparePage
        .click('@dropDown')
        .click('@compareModelsButton')
        .waitForElementPresent('@zipInput', 8000, 'Navigating To Compare Page')
        .clearValue('@zipInput')
        .setValue('@zipInput', '95838')
        .verify.valueContains('@zipInput', '95838')
        .click('@changeZipButton')
        .waitForElementNotVisible('@changeZipButton', 10000)
        .api.pause(800)
    comparePage
        .click(comparePage.getMake1(make1))
        .api.pause(800)
    comparePage
        .click(comparePage.getModel1(model1))
        .verify.containsText('@model1', model1, '1st Make and Model Correct')
        .api.pause(1000)
    comparePage
        .click('@addModel1')
        .waitForElementPresent('@modelImage1', 8000, '1st Compare Complete')
        .waitForElementPresent('@make2', 8000)
        .click(comparePage.getMake2(make2))
        .api.pause(1000)
    comparePage
        .click(comparePage.getModel2(model2))
        .verify.containsText('@model2', model2, '2nd Make and Model Correct')
        .api.pause(800)
    comparePage
        .click('@addModel2')
        .waitForElementPresent('@modelImage2', 8000, '2nd Compare Complete')
        .waitForElementPresent('@make3', 8000)
        .api.pause(800)
    comparePage
        .click(comparePage.getMake3(make3))
        .api.pause(1000)
    comparePage
        .click(comparePage.getModel3(model3))
        .verify.containsText('@model3', model3, '3rd Make and Model Correct')
        .api.pause(1000)
    comparePage
        .click('@addModel3')
        .waitForElementPresent('@modelImage3', 8000, '3rd Compare Complete')
        .waitForElementVisible('@price3', 8000, 'Comparing Done')
        .api.pause(1000)
    comparePage
        .getText('@price1', function (result) {
            console.log(result.value)
        })
        .getText('@price2', function (result) {
            console.log(result.value)
        })
        .getText('@price3', function (result) {
            console.log(result.value)
        })
}


module.exports = {
    beforeEach: browser => {
        browser.url('https://www.autotrader.com/')
            .waitForElementPresent('body', 8000, 'Page Loaded')
            .useXpath()
    },

    after: browser => {
        browser.end()
    },

    // 'Logging In': browser => {
    //     loginTest(browser.page.AutoTrader(), 'prislocks@gmail.com', 'prislocksunny')
        
    // },

    'Comparing 3 Cars': browser => {
        compareCars(browser.page.AutoTrader(), 'Bentley', 'Continental', 'Honda', 'Civic', 'Nissan', 'GT-R')
    }

}