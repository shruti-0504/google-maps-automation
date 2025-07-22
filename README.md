📍 Google Maps Directions Automation
This Node.js script automates the process of retrieving driving directions from your home to 91 Springboard, Vikhroli using Google Maps, and saves them in an Excel sheet.

🧰 Tech Stack
Node.js

Selenium WebDriver (Chrome)

xlsx (Excel file generation)

🚀 How It Works
Launches Google Maps in Chrome browser.

Clicks the Directions button.

Enters your source and destination.

Selects the first route and collects step-by-step directions.

Saves the directions in DrivingInstructions.xlsx.

Takes a screenshot for visual confirmation.

📦 Setup Instructions
1. Clone or Download
bash
Copy
Edit
git clone <your-repo-url>
cd assignment
2. Install Required Packages
bash
Copy
Edit
npm init -y
npm install selenium-webdriver xlsx
3. Run the Script
bash
Copy
Edit
node googleMapsAutomation.js
📝 Make sure Chrome is installed and your internet connection is working.

📂 Output
DrivingInstructions.xlsx: Step-by-step driving directions.

screenshot.png: Screenshot after success.

error_screenshot.png: Screenshot if something goes wrong.

✍️ Customize
To change the source address, edit this line in googleMapsAutomation.js:

js
Copy
Edit
await startBox.sendKeys('Your Home Address Here\n');
