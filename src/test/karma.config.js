process.env.CHROME_BIN = require('puppeteer').executablePath()
module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai'],
        client: {
            mocha: {
                timeout: 10000 // 6 seconds - upped from 2 seconds
            }
        },
        files: [

            'scripts/jquery-3.2.1.min.js',
            'scripts/jsstore.js',
            '../output/sqljs.js',
            'cases/create/*.js',
            'cases/insert/*.js',
            'cases/tmp.js',
            // 'cases/count/*.js',
            'cases/select/*.js',
            // 'cases/update/*.js',
            // 'cases/delete/*.js',
            // 'cases/helper/*.js',
            // 'cases/clear/*.js',
            {
                pattern: 'static/*.json',
                included: false,
                served: true,
            }
        ],
        proxies: {
            '/static/': '/base/static/',
            '/cases/': '/base/cases/'
        },
        reporters: ['mocha'],
        port: 9876, // karma web server port
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless'],
        customLaunchers: {
            HeadlessChrome: {
                base: 'ChromeHeadless',
                flags: [
                    '--no-sandbox',
                    '--headless',
                    '--disable-gpu',
                    '--disable-translate',
                    '--disable-extensions'
                ]
            }
        },
        autoWatch: false,
        // concurrency: Infinity
        singleRun: true,
        browserNoActivityTimeout: 120000,
    })
}