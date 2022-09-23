
import { Builder, Capabilities, By } from "selenium-webdriver"
import { skipPartiallyEmittedExpressions } from "typescript"

require('chromedriver')


const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    driver.get('https://le-assessment-6.herokuapp.com/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(3000)
})
test('Choices are shown when the button is clicked', async () => {
    const choices = await driver.findElement(By.id('choose-header'))
    const displayed = await choices.isDisplayed()
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(3000)
    expect(displayed).toBe(true)
    await driver.sleep(3000)
})
test('Player duo is shown when a choice is clicked', async () => {
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed()
    await driver.findElement(By.className('bot-btn')).click()
    await driver.sleep(3000)
    expect(displayed).toBe(true)
    await driver.sleep(3000)
})

