exports.config = {
  port: 9515, // default
  path: '/',
  services: ['chromedriver'],
  chromeDriverArgs: ['--port=9515'], // default
  reporters: ['spec', 'allure'],
  reporterOptions: {
    allure: {
      outputDir: './allure-report/',
      useCucumberStepReporter: false,
      disableMochaHooks: true
    }
  },
  runner: 'local',
  specs: [
    './tests/amazonAcceptanceTest/features/*.feature'
  ],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome'
  }],
  logLevel: 'error',
  deprecationWarnings: true,
  bail: 0,
  baseUrl: 'https://www.amazon.com.au/',
  waitforTimeout: 15000,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  framework: 'cucumber',
  cucumberOpts: {
    timeout: 20000,
    requireModule: ['@babel/register'],
    require: ['./tests/amazonAcceptanceTest/stepDefinitions/*.js']
  },
  before: function (capabilities, specs) {
    // =================
    // Assertion Library
    // =================
    const chai = require('chai')
    global.expect = chai.expect
    global.assert = chai.assert
    global.should = chai.should()
    // ======================
    // Global Variable
    // ======================
    global.baseUrl = 'https://www.amazon.com.au/'
    global.context = {}
    // ===============
    // Custom Commands
    // ===============
  },
  afterTest: function (test) {
    if (test.error !== undefined) {
      browser.takeScreenshot();
    }
  },

}
