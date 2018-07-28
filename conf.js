exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    allScriptsTimeout: 7200000,

    /**
     * usage example:
     * protractor protractor.conf.js --specs=e2e/policies/response-rules/actions/actionAlert.spec.js
     */
    suites: {
        'general#login': 'e2e/test1.spec.js'
    },
    capabilities:
    {
        'browserName': 'chrome',
        chromeOptions: {
            args: [
                'disable-extensions'
            ]
        }
    },

    framework: 'jasmine2',
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval : 5000000,
        allScriptsTimeout: 20000000
    },

    params: {
        username: 'aaa',
		password: 'bbb'

    }

};