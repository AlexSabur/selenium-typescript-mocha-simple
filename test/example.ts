import { Builder, By, until, Key, ThenableWebDriver } from 'selenium-webdriver';
import 'chromedriver'
import { Options } from "selenium-webdriver/chrome";
import { expect } from "chai";

describe("Условный тест", () => {
  const options = new Options();
    options.headless();
  const driver: ThenableWebDriver = new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();

  it("Google в заголовке Google", async () => {
    await driver.get("https://www.google.com");

    await driver.findElement(By.name("q")).sendKeys("Google", Key.RETURN);

    await driver.wait(until.elementLocated(By.id("search")));

    const title = await driver.getTitle();

    expect(title).to.equal("Google - Поиск в Google");
  });

  after(async () => driver.quit());
});
