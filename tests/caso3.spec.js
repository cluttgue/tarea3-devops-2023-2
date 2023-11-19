// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Caso 3', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Caso 3', async function() {
    await driver.get("http://localhost:3000/")
    await driver.manage().window().setRect({ width: 550, height: 691 })
    await driver.findElement(By.css(".pt-8")).click()
    await driver.findElement(By.css("#add-movie-btn path")).click()
    await driver.findElement(By.id("title")).click()
    await driver.findElement(By.id("title")).sendKeys("The Dark Knight")
    await driver.findElement(By.id("description")).click()
    await driver.findElement(By.id("description")).sendKeys("The Dark Knight")
    await driver.findElement(By.id("year")).click()
    await driver.findElement(By.id("year")).sendKeys("2008")
    await driver.findElement(By.id("director_id")).click()
    {
      const dropdown = await driver.findElement(By.id("director_id"))
      await dropdown.findElement(By.xpath("//option[. = 'Cristopher Nolan']")).click()
    }
    await driver.findElement(By.css("option:nth-child(2)")).click()
    await driver.findElement(By.css(".h-min > .flex")).click()
    await driver.findElement(By.css("#add-movie-btn path")).click()
    await driver.findElement(By.id("title")).click()
    await driver.findElement(By.id("title")).sendKeys("Memento")
    await driver.findElement(By.id("description")).sendKeys("Memento description")
    await driver.findElement(By.css(".flex-1")).click()
    await driver.findElement(By.id("year")).click()
    await driver.findElement(By.id("year")).sendKeys("2000")
    await driver.findElement(By.id("director_id")).click()
    {
      const dropdown = await driver.findElement(By.id("director_id"))
      await dropdown.findElement(By.xpath("//option[. = 'Cristopher Nolan']")).click()
    }
    await driver.findElement(By.css("option:nth-child(2)")).click()
    await driver.findElement(By.css(".h-min > .flex")).click()
  })
})