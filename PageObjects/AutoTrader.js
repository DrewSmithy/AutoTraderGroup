var autoTraderCommands = {
    getMake1: (option) => `select[id="make-1"] option[value="${option}"]`,
    getModel1: (option) => `select[id="model-1"] option[value="${option}"]`,
    getMake2: (option) => `select[id="make-2"] option[value="${option}"]`,
    getModel2: (option) => `select[id="model-2"] option[value="${option}"]`,
    getMake3: (option) => `select[id="make-3"] option[value="${option}"]`,
    getModel3: (option) => `select[id="model-3"] option[value="${option}"]`
}


module.exports = {

    url: 'https://www.autotrader.com/',
    commands: [autoTraderCommands],
    elements: {
        emailInput: {
            selector: '(//input[@name="username"])[1]',
            locateStrategy: 'xpath'
        },
        passInput: {
            selector: ('(//input[@type="password"])[1]'),
            locateStrategy: 'xpath'
        },
        submitButton: {
            selector: ('(//input[@type="submit"])[1]'),
            locateStrategy: 'xpath'
        },
        signinButton: {
            selector: 'span[class="hidden-xs margin-horizontal-sm text-link"]',
            locateStrategy: 'css selector'
        },
        viewAccount: {
            selector: ('a[class="hidden-xs margin-horizontal-sm"]'),
            locateStrategy: 'css selector'
        },
        dropDown: {
            selector: ('a[class="dropdown-toggle"]'),
            locateStrategy: 'css selector'
        },
        compareModelsButton: {
            selector: ('a[href="/research/compare?rdpage=SUBNAV"]'),
            locateStrategy: 'css selector'
        },
        zipInput: {
            selector: ('input[id="address"]'),
            locateStrategy: 'css selector'
        },
        changeZipButton: {
            selector: ('//input[@id="change-zip-button"]'),
            locateStrategy: 'xpath'
        },
        make1: {
            selector: ('select[id="make-1"]'),
            locateStrategy: 'css selector'
        },
        make2: {
            selector: ('select[id="make-2"]'),
            locateStrategy: 'css selector'
        },
        make3: {
            selector: ('select[id="make-3"]'),
            locateStrategy: 'css selector'
        },
        model1: {
            selector: ('select[id="model-1"]'),
            locateStrategy: 'css selector'
        },
        model2: {
            selector: ('select[id="model-2"]'),
            locateStrategy: 'css selector'
        },
        model3: {
            selector: ('select[id="model-3"]'),
            locateStrategy: 'css selector'
        },
        addModel1: {
            selector: ('span[id="add-1"]')
        },
        addModel2: {
            selector: ('span[id="add-2"]')
        },
        addModel3: {
            selector: ('span[id="add-3"]')
        },
        modelImage1:{
            selector: ('img[id="main-car-image-1"]'),
            locateStrategy: 'css selector'
        },
        modelImage2: {
            selector: ('img[id="main-car-image-2"]'),
            locateStrategy: 'css selector'
        },
        modelImage3: {
            selector: ('img[id="main-car-image-3"]'),
            locateStrategy: 'css selector'
        },
        price1: {
            selector: ('(//span[@class="price"])[1]'),
            locateStrategy: 'xpath' 
        },
        price2: {
            selector: ('(//span[@class="price"])[2]'),
            locateStrategy: 'xpath' 
        },
        price3: {
            selector: ('(//span[@class="price"])[3]'),
            locateStrategy: 'xpath' 
        }
    }
}