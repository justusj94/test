const {Builder, By, Key} = require('selenium-webdriver');
const browsers = ['firefox', 'chrome'];

(async function example() {
    for(let x = 0; x < x.length ; x++) {
        //let driver = await new Builder().forBrowser('chrome').build();
        console.log('Start Google search test on ' + browsers[x]);
        let driver = await new Builder().forBrowser(browsers[x]).usingServer('http://172.17.0.3:4444/wd/hub').build();
        try {
            await driver.get('http://www.google.com/ncr');
            console.log('Search for webdriver');
            await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
            await driver.findElement(By.name('btnK')).click();
            await driver.wait(check_title(driver), 1000);
        } finally {
            await driver.quit();
            console.log('End Google search test on ' + browsers[x]);
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