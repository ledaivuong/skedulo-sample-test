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
    './tests/features/*.feature'
  ],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome'
  }],
  logLevel: 'error',
  deprecationWarnings: true,
  bail: 0,
  baseUrl: "https://www.utest.com/",
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
    require: ['./tests/stepDefinitions/*.js']
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
    global.baseUrl = "https://www.utest.com/"
    global.context = {}
    global.shortTimeout = 10000
    global.longTimeout = 30000
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
