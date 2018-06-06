module.exports = {

    url: 'https://www.autotrader.com/',

    elements: {

        emailInput: {
            selector: ('(//input[@name="username"])[1]'),
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
        signinButton: ('span[class="hidden-xs margin-horizontal-sm text-link"]'),
        viewAccount: ('a[class="hidden-xs margin-horizontal-sm"]')


    }
}