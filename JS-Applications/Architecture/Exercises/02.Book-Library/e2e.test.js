const { expect } = require('chai');
const { chromium } = require('playwright-chromium');

let browser;  // Declare reusable variables
let page;
const host = 'http://localhost:3000'; // Application host

describe('E2E tests', function () {
    this.timeout(60000);

    before(async () => { browser = await chromium.launch({ headless: false, slowMo: 1000 }); });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    afterEach(async () => { await page.close(); });



    describe('e2e tests', async () => {


        it('Load books', async () => {
            await page.goto(host);
            await page.click('text=LOAD ALL BOOKS');
            const content = await page.textContent('table tbody:nth-child(2)');
            expect(content).to.contains('C# Fundamentals');
        });

        it('Add book', async () => {
            await page.goto(host);
            await page.fill('[name="author"]', 'J. R. R. Tolkien');
            await page.click('text=submit');
            await page.click('text=LOAD ALL BOOKS');
            const content = await page.textContent('table tbody:last-child');
            expect(content).to.contains('LOTR');
        });
        
        it('Edit book', async () => {
            await page.goto(host);
            await page.click('text=LOAD ALL BOOKS');
            await page.click('text=edit');
            
            const titleForEdit = await page.$$eval('#editForm input[name=title]', lines => lines.map(line => line.value.trim()));
            expect(titleForEdit[0]).to.contain('Harry Potter and the Philosopher\'s Stone');
            
            const authorForEdit = await page.$$eval('#editForm input[name=author]', lines => lines.map(line => line.value.trim()));
            expect(authorForEdit[0]).to.contain('J.K.Rowling');
            
            await page.fill('#editForm > input[name=title]', '');
            await page.fill('#editForm > input[name=title]', 'Hityr Petyr');
            await page.fill('#editForm > input[name=author]', '');
            await page.fill('#editForm > input[name=author]', 'Sava Popov');
            await page.click('#editForm >> text=Save'); 

            await page.click('text=LOAD ALL BOOKS');

            await page.waitForSelector('tbody tr td');

            const cells = await page.$$eval('tbody tr td', cells => cells.map(cell => cell.textContent));
            expect(cells[0]).to.contain('Hityr Petyr');
            expect(cells[1]).to.contain('Sava Popov');

        });
        it.only('Delete book', async () => {
            await page.goto(host);
            await page.click('text=LOAD ALL BOOKS');
            
            page.on('dialog', dialog => dialog.accept());
            
            await page.click('text=delete');

            await page.waitForSelector('tbody tr td');
            const cells = await page.$$eval('tbody tr td', cells => cells.map(cell => cell.textContent));
            expect(cells[0]).to.contain('C# Fundamentals');
            expect(cells[1]).to.contain('Svetlin Nakov');
        });
    });



})