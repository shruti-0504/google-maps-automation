# 📍 Google Maps Directions Automation

This Node.js script automates the process of retrieving driving directions from **your residential location** to **91 Springboard, Vikhroli** using Google Maps, and saves them in an Excel sheet.

---

## 🧰 Tech Stack

- **Node.js**
- **Selenium WebDriver (Chrome)**
- **xlsx (for Excel generation)**

---

## 🚀 Features

- Opens Google Maps in Chrome
- Clicks on the “Directions” button
- Enters starting and destination addresses
- Selects the first route
- Extracts step-by-step driving instructions
- Saves the instructions to `DrivingInstructions.xlsx`
- Takes a screenshot of the result

---

## 📦 Setup Instructions

### 1. Clone or Download the Repository

```bash
git clone <your-repo-url>
cd assignment
```
2. Install Dependencies
```bash
npm install
npm install selenium-webdriver xlsx
```
4. Run the Script
```bash
node googleMapsAutomation.js
```
✅ Ensure Chrome is installed and connected to the internet.

📂 Output Files
DrivingInstructions.xlsx: Contains all step-by-step driving instructions

screenshot.png: Screenshot of the directions page

error_screenshot.png: If an error occurs during automation
