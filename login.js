const config = require('./config')

const { Builder, By, Key, until } = require('selenium-webdriver');

const login = async driver => {
    await driver.get(config.url);
    await driver.findElement(By.id('LoginControl1_txtLoginName')).sendKeys(config.username);
    await driver.findElement(By.id('LoginControl1_txtPassword')).sendKeys(config.pass);
    await driver.findElement(By.id('LoginControl1_btnLogin')).click()
}

module.exports = login