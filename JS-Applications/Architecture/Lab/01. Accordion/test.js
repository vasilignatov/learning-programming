const { chromium } = require('playwright-chromium');
const { expect } = require('chai');
let browser, page; // Declare reusable variables

describe('E2E tests', function () {
    before(async () => { browser = await chromium.launch({headless: false, slowMo: 500});});
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });

    it.only('loads static page', async () => {
        await page.goto('http://localhost:3000');

        // const content = await page.textContent('.accordion .head span');
        // expect(content).to.contains('Scalable Vector Graphics')

        const titles = await page.$$eval('.accordion .head span', (spans) => spans.map(s => s.textContent));
        expect(titles).includes('Scalable Vector Graphics');
        expect(titles).includes('Unix');
        expect(titles).includes('ALGOL');
        
        
    });

    it('toggles content', async () => {
        await page.goto('http://localhost:3000');

        await page.click('#main>.accordion:first-child >> text=More');

        await page.waitForSelector('#main>.accordion:first-child >> .extra p');                 // изчакай да се появи селектора 

        const visible = await page.isVisible('#main>.accordion:first-child >> .extra p');       // след като е видим оровери дали е видим
        expect(visible).to.be.true;
    })

    it('toggles content', async () => {
        await page.goto('http://localhost:3000');

        await page.click('#main>.accordion:first-child >> text=More');
        await page.waitForSelector('#main>.accordion:first-child >> .extra p');                  
        await page.click('#main>.accordion:first-child >> text=Less');

        const visible = await page.isVisible('#main>.accordion:first-child >> .extra p');    
        expect(visible).to.be.false;
    })

});
