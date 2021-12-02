const { expect } = require('chai');
const { chromium } = require('playwright-chromium');

let browser;  // Declare reusable variables
let page;
const host = 'http://localhost:3000'; // Application host
const DEBUG = true;

describe('E2E tests', function () {
    this.timeout(6000);

    before(async () => { browser = await chromium.launch({ headless: false, slowMo: 1000 }); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it('load messages', async () => {
        await page.goto(host);
        await page.click('text=Refresh');

        const result = await page.$eval('textarea', (textarea) => textarea.value);
        expect(result).to.contains('Spami: Hello, are you there?')
    });

    it.only('send message', async () => {
        await page.goto(host);
        await page.fill('#author', 'Vasil');
        await page.fill('#content', 'Test message');

        await page.click('text=send');
        await page.click('text=Refresh');
        
        const textarea = await page.$eval('textarea', (textarea) => textarea.value);
        const result = textarea.includes('Vasil: Test message');
        expect(result).to.be.true;
    });
});