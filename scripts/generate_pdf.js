const { chromium } = require('playwright');
const path = require('path');

(async () => {

    const browser = await chromium.launch();

    const page = await browser.newPage();

    const htmlPath = 'file://' +
        path.resolve('../output/resume.html');

    await page.goto(htmlPath, {
        waitUntil: 'networkidle'
    });

    await page.pdf({
        path: '../output/resume.pdf',
        format: 'A4',
        printBackground: true,
        margin: {
            top: '20px',
            bottom: '20px',
            left: '20px',
            right: '20px'
        }
    });

    await browser.close();

    console.log('resume.pdf generated');

})();