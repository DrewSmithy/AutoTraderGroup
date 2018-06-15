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
let searchCars = (comparePage, make, model, zip) => {
    // comparePage
    //     .api.pause(200000000)
    comparePage
        .waitForElementPresent('@makeDropdown', 10000)
        .click(comparePage.getHomeMake(make))
        .api.pause(800)
    comparePage
        .click(comparePage.getHomeModel(model))
        .clearValue('@zipInputHome')
        .setValue('@zipInputHome', zip)
        .click('@searchBtn')
}
let compareCars = (comparePage, make1, model1, make2, model2, make3, model3) => {
    comparePage
        .click('@dropDown')
        .click('@compareModelsButton')
        .api.pause(1000)
    comparePage
        .waitForElementPresent('@zipInput', 8000)
        .clearValue('@zipInput')
        .api.pause(500)
    comparePage
        .setValue('@zipInput', '95838')
        .verify.valueContains('@zipInput', '95838')
        .waitForElementPresent('@changeZipButton', 5000)
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
        .api.pause(1000)
    comparePage
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
        .api.pause(3000)
    comparePage
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
        // browser.page.AutoTrader().navigate()
        browser.useXpath()
    },

    after: browser => {
        browser.end()
    },

    // 'Logging In': browser => {
    //     loginTest(browser.page.AutoTrader(), 'prislocks@gmail.com', 'prislocksunny')

    // },

    'Comparing 3 Cars': browser => {
        compareCars(browser.page.AutoTrader(), 'Subaru', 'BRZ', 'Honda', 'Civic', 'Nissan', 'GT-R')
    },
    // 'Search Vehicles': browser => {
    //     searchCars(browser.page.AutoTrader(), 'AMGEN', 'H3', '95838')
    // }

}