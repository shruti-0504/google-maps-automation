const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');
const XLSX = require('xlsx');

async function main() {
  // Step 1: Setup browser
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();

  try {
    // Step 2: Go to Google Maps
    await driver.get('https://maps.google.com');
    await driver.manage().setTimeouts({ implicit: 10000 });

    // Step 3: Click on "Directions" button
    const directionsButton = await driver.findElement(By.css('[aria-label="Directions"]'));
    await directionsButton.click();

    // Step 4: Enter your starting point (home location)
    const startInput = await driver.findElement(By.xpath('//input[@aria-label="Choose starting point, or click on the map..."]'));
    await startInput.sendKeys('Andheri East, Mumbai', Key.ENTER); // Change this to your address

    // Step 5: Enter destination
    const destInput = await driver.findElement(By.xpath('//input[@aria-label="Choose destination, or click on the map..."]'));
    await destInput.sendKeys('91 Springboard, Vikhroli', Key.ENTER);

    // Wait for directions to load
    await driver.sleep(5000);

    // Step 6: Get driving instructions
    const steps = await driver.findElements(By.css('.section-directions-trip-description .section-directions-trip-numbers'));

    let instructions = [];

    for (const step of steps) {
      const text = await step.getText();
      instructions.push([text]);
    }

    if (instructions.length === 0) {
      // fallback: try another selector for steps
      const altSteps = await driver.findElements(By.css('div[class*="directions-mode-step"] span'));
      for (const step of altSteps) {
        const text = await step.getText();
        if (text.trim()) instructions.push([text]);
      }
    }

    // Step 7: Save to Excel
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([["Driving Instructions"], ...instructions]);
    XLSX.utils.book_append_sheet(wb, ws, "Directions");
    XLSX.writeFile(wb, "DrivingInstructions.xlsx");

    // Step 8: Take screenshot
    const image = await driver.takeScreenshot();
    fs.writeFileSync('map_screenshot.png', image, 'base64');

    console.log('Driving instructions saved and screenshot taken!');
  } catch (err) {
    console.error('Something went wrong:', err);
  } finally {
    await driver.quit();
  }
}

main();
