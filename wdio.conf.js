exports.config = {
    runner: 'local',
    automationProtocol: 'devtools',
    specs: [
    './test/specs/**/*.js'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    capabilities: [{
        browserName: "chrome",
        'goog:chromeOptions':{
          binary: "/usr/bin/chromium",
          args: ["--headless", "--disable-gpu", "--no-sandbox"],
        //   args: ["--disable-gpu", '--disable-web-security',"--no-sandbox"],
          prefs: {
            'safebrowsing.enabled': false,
            'safebrowsing.disable_download_protection': true,
            "download": {
                "prompt_for_download": false,
                "directory_upgrade": true,
                "default_directory": "/home/vipulgupta2048/webd/"
            },          
          }
        },
    }],
    logLevel: 'error',
    bail: 0,
    // Simple URL to download a file from
    baseUrl: "http://www.fileformatcommons.com/txt-file-format/",
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    services: ['devtools'],
    framework: 'mocha',
    reporters: [
        'spec',
    ],
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        bail: true,
        timeout: 6000000,
    },
}
