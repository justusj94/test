const {Builder, By, Key, logging} = require('selenium-webdriver');

logging.installConsoleHandler();
logging.getLogger('webdriver.http').setLevel(logging.Level.DEBUG);

//Browser and button to press in google.nl
const browsers = [
    ['chrome', 'extrabtn'],
    ['firefox', 'extrabtn']
];

const servers = [
    'http://172.17.0.4:5555/wd/hub',    // Chrome
    'http://172.17.0.5:5555/wd/hub'     // Firefox
];

(async function example() {
    for(let x = 0; x < browsers.length ; x++) {
        console.log('Start test on ' + browsers[x][0]);
        let driver = await new Builder().forBrowser(browsers[x][0]).usingServer(servers[x]).build();


        try {
            await driver.get('http://127.0.0.1:3000');
            console.log('Search for btn and use it');
            await driver.findElement(By.name(browsers[x][1])).click();
            await driver.wait(check_title(driver), 1000);
        } finally {
            await driver.quit();
            console.log('End test on ' + browsers[x][0]);
        }
    }
})();

function check_title(driver) {
    let promise = driver.getTitle().then((title) => {
        if (title === 'Extra page' ) {
            console.log('Success -- ' + title);
            return true;
        }
        else {
            console.log('Fail -- ' + title);
        }
    });
    return promise;
}
