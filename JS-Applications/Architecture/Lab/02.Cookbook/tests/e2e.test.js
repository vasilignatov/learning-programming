//@ts-check
const { chromium, request } = require('playwright-chromium');
const { expect } = require('chai');

const mockData = require('./mock-data.json');

function json(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
}

let browser;
let context;
let page;

describe('E2E tests', function () {
    this.timeout(60000);

    before(async () => {
        browser = await chromium.launch({ headless: false, slowMo: 500 });
        // browser = await chromium.launch();
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        context = await browser.newContext();

        // block intensive resources and external calls (page routes take precedence)
        await context.route('**/*.{png,jpg,jpeg}', route => route.abort());
        await context.route(url => {
            return url.hostname != 'localhost';
        }, route => route.abort());

        page = await context.newPage();
    });

    afterEach(async () => {
        await page.close();
        await context.close();
    });

    describe('Catalog', () => {
        it('loads and display recipes', async () => {

            await page.route('**/data/recipes*', (request) => request.fulfill(json(mockData.list))) // creating fake requiest

            await page.goto('http:localhost:3000'); // load app page

            await page.waitForSelector('article');  // wait to load articles(recipes)

            const titles = await page.$$eval('h2', (titles) => titles.map(t => t.textContent));  // catch all h2 elements   
            expect(titles[0]).to.contains('Easy Lasagna');
            expect(titles[2]).to.contains('Roast Trout');
        })
    })
    describe('Authentication', () => {
        it('register sends correct requiest', async () => {

            await page.route('**/data/register', route => route.fulfill(json({ _id: '0001', email, accessToken: 'AAAA' })))

            const email = 'john@abv.bg';
            const pass = '123123'

            await page.goto('http:localhost:3000');    //go to page
            await page.click('text=Register');         // click register btn

            await page.waitForSelector('form');        // wait to load form

            await page.fill('[name="email"]', email)   // fill email input field
            await page.fill('[name="password"]', pass) // fill pass input field
            await page.fill('[name="rePass"]', pass) // fill pass input field

            const [request] = await Promise.all([
                page.waitForRequest(request => request.url().includes('/users/register') && request.method == 'POST'),
                page.click('[type="submit"]')
            ])
            const postData = JSON.parse(request.postData());

            expect(request.postData().email).to.equal(email);
            expect(request.postData().password).to.equal(pass);
        })
        it('login sends correct requiest', async () => {

            await page.route('**/data/login', route => route.fulfill(json({ _id: '0001', email, accessToken: 'AAAA' })))

            const email = 'john@abv.bg';
            const pass = '123123'

            await page.goto('http:localhost:3000');    //go to page
            await page.click('text=Login');         // click register btn

            await page.waitForSelector('form');        // wait to load form

            await page.fill('[name="email"]', email)   // fill email input field
            await page.fill('[name="password"]', pass) // fill pass input field
            await page.fill('[name="rePass"]', pass) // fill pass input field

            const [request] = await Promise.all([
                page.waitForRequest(request => request.url().includes('/users/register') && request.method == 'POST'),
                page.click('[type="submit"]')
            ])
            const postData = JSON.parse(request.postData());

            expect(request.postData().email).to.equal(email)
            expect(request.postData().password).to.equal(pass)
        });
    });

    describe.only('CRUD Operations', () => {
        beforeEach(async () => {
            await page.route('**/data/login', route => route.fulfill(json({ _id: '0001', email, accessToken: 'AAAA' })))

            const email = 'john@abv.bg';
            const pass = '123123'

            await page.goto('http:localhost:3000');    //go to page
            await page.click('text=Login');         // click register btn

            await page.waitForSelector('form');        // wait to load form

            await page.fill('[name="email"]', email)   // fill email input field
            await page.fill('[name="password"]', pass) // fill pass input field
            await page.fill('[name="rePass"]', pass) // fill pass input field

            await Promise.all([
                page.waitForResponse(request => request.url().includes('/users/register') && request.method == 'POST'),
                page.click('[type="submit"]')
            ]);
        });


        it('create send correct request', async () => {
            await page.click('text=Create Recipe'); // create new recipe

            const data = {             // data for new recipe
                name: '1',
                img: '2',
                ingredients: ['1', '2', '3'],
                steps: ['4', '5']
            }

            await page.fill('[name="name"]', data.name);
            await page.fill('[name="img"]', data.img);
            await page.fill('[name="ingredients"]', data.ingredients.join('\n'));
            await page.fill('[name="steps"]', data.ingredients.join('\n'));


        })


    });
})
