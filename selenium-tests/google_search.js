const {Builder, By, Key, logging} = require('selenium-webdriver');

logging.installConsoleHandler();
logging.getLogger('webdriver.http').setLevel(logging.Level.DEBUG);

//Browser and button to press in google.nl
const browsers = [
    ['chrome', 'btnG'],
    ['firefox', 'btnK']
];

const servers = [
    'http://172.17.0.3:5555/wd/hub',    // Chrome
    'http://172.17.0.4:5555/wd/hub'     // Firefox
];

(async function example() {
    for(let x = 0; x < browsers.length ; x++) {
        console.log('Start Google search test on ' + browsers[x][0]);
        let driver = await new Builder().forBrowser(browsers[x][0]).usingServer(servers[x]).build();


        try {
            await driver.get('http://www.google.com/ncr');
            console.log('Search for webdriver');
            await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
            await driver.findElement(By.name(browsers[x][1])).click();
            await driver.wait(check_title(driver), 1000);
        } finally {
            await driver.quit();
            console.log('End Google search test on ' + browsers[x][0]);
        }
    }
})();

function check_title(driver) {
    let promise = driver.getTitle().then((title) => {
        if (title === 'webdriver - Google Search' ) {
            console.log('Success -- ' + title);
            return true;
        }
        else {
            console.log('Fail -- ' + title);
        }
    });
    return promise;
}


/*
'use strict';

const {Builder, By, Key, logging, until} = require('selenium-webdriver');
const {Options} = require('selenium-webdriver/chrome');

logging.installConsoleHandler();
logging.getLogger('webdriver.http').setLevel(logging.Level.ALL);

(async function() {
    let driver;
    try {
        driver = await new Builder()
            .forBrowser('chrome').usingServer('http://localhost:4444/wd/hub')
            .setChromeOptions(
                new Options().setMobileEmulation({deviceName: 'Nexus 5X'}))
            .build();
        await driver.get('http://www.google.com/ncr');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
        await driver && driver.quit();
    }
})().then(_ => console.log('SUCCESS'), err => console.error('ERROR: ' + err));
*/