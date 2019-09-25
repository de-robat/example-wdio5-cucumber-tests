module.exports = {
    config: {
        "runner": "local",
        "framework": "cucumber",
        "reporters": ["spec"],
        "logLevel": "error",
        "bail": 0,
        "waitforTimeout": 1000,
        "specs": ["./tests/**/*.feature"],
        "services": ['selenium-standalone'],
        "seleniumArgs": {
            "version": "3.141.59",
            "drivers": {
                "chrome": {
                    "version": "77.0.3865.40",
                    "arch": process.arch,
                }
            }
        },
        "seleniumInstallArgs": {
            "version": "3.141.59",
            "baseURL": "https://selenium-release.storage.googleapis.com",
            "drivers": {
                "chrome": {
                    "version": "77.0.3865.40",
                    "arch": process.arch,
                    "baseURL": "https://chromedriver.storage.googleapis.com",
                }
            }
        },
        "cucumberOpts": {
            "backtrace": true,
            "failAmbiguousDefinitions": true,
            "failFast": false,
            "ignoreUndefinedDefinitions": false,
            "name": [],
            "snippets": true,
            "source": true,
            "profile": [],
            "require": ["./tests/**/*.steps.js"],
            "strict": true,
            "tagExpression": "not @Pending",
            "tagsInTitle": false,
            "timeout": 60000
        },
        "connectionRetryTimeout": 10000,
        "connectionRetryCount": 1,
        "seleniumLogs": "./report/",
        "capabilities": [{
            "browserName": "chrome",
            "maxInstances": 1
        }]
    }
}