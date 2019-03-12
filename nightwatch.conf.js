const LIBPATH = 'lib/';
var config = require('./config.js');

module.exports = {
  "src_folders": [
    "tests"
  ],
  //"page_objects_path": "./pageobjects",
  "output_folder": "./reports", // reports (test outcome) output by nightwatch
  "selenium": { // downloaded by selenium-download module (see readme)
    "start_process": true, // tells nightwatch to start/stop the selenium process
     "server_path": "node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.141.5.jar",
    "host": config.selenium.host,
    "port": config.selenium.port, // standard selenium port
    "cli_args": { // chromedriver is downloaded by selenium-download (see readme)
       "webdriver.chrome.driver" : "node_modules/chromedriver/lib/chromedriver/chromedriver"
    }
  },

  "test_workers" : {"enabled" : true, "workers" : "auto"}, // perform tests in parallel where possible

  "test_settings": {
    "default": {
      "screenshots": {
        "enabled": true, // if you want to keep screenshots
        "path": './screenshots' // save screenshots here
      },

      "globals": {
        "waitForConditionTimeout": 5000, // sometimes internet is slow so wait.
        "GOOGLE_URL" : config.globals.url
      },

     "desiredCapabilities" : {
                "browserName": "chromium-browser",
                "javascriptEnabled" : true,
                "chromeOptions" : {
                "args" : ["--no-sandbox", "--headless"]
                
            },
                "acceptSslCerts" : true

            }
    }
  }
}