// let chrome = require('selenium-webdriver/chrome');
// let chromedriver = require('chromedriver');
//
// chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());
//
// let webdriver = require('selenium-webdriver'),
//     By = webdriver.By,
//     until = webdriver.until;
//
// let driver = new webdriver.Builder()
//    .forBrowser('chrome')
//    .build();
//
//
// driver.get('http://www.google.com/ncr');
// driver.findElement(By.name('q')).sendKeys('wiki');
// driver.wait(check_title, 20000);
//
// function check_title() {
//
//     driver.findElement(By.name('btnK')).click();
//
//     let promise = driver.getTitle().then((title) => {
//         if (title === 'wiki - Google Search' ) {
//             console.log('success');
//             return true;
//         }
//         else {
//             console.log('fail -- ' + title);
//         }
//     });
//     return promise;
// }


// let chrome = require('selenium-webdriver/chrome');
// let chromedriver = require('chromedriver');
//
// chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

/*
const {Builder, By, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

test.describe('Google Search', function() {
    let driver;

    test.before(function *() {
        driver = yield new Builder().forBrowser('chrome').usingServer('http://localhost:4444/wd/hub').build();
    });

    test.it('works with generators', function*() {
        yield driver.get('http://www.google.com/ncr');
        yield driver.findElement(By.name('q')).sendKeys('webdriver');
        yield driver.findElement(By.name('btnG')).click();
        yield driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    });

    test.after(() => driver.quit());
});

*/

const {Builder, By, Key} = require('selenium-webdriver');

(async function example() {
    //let driver = await new Builder().forBrowser('chrome').build();
    console.log('Start Google search test');
    let driver = await new Builder().forBrowser('firefox').usingServer('http://localhost:4444/wd/hub').build();
    try {
        await driver.get('http://www.google.com/ncr');
        console.log('Search for webdriver');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.findElement(By.name('btnK')).click();
        await driver.wait(check_title(driver), 1000);
    } finally {
        await driver.quit();
        console.log('End Google search test');
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