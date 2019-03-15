require('chromedriver');
const login = require ('./login')

const { Builder, By, Key, until } = require('selenium-webdriver');

(async function test() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await login(driver)
    } finally {
        console.log('quiting')
        // await driver.quit();
    }
})();