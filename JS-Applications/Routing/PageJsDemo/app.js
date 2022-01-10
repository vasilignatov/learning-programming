import page from '//unpkg.com/page/page.mjs';

const pages = {
    '/home': '<h2>Home Page</h2><p>Home page content</p>',
    '/catalog': '<h2>Catalog Page</h2><p>List of articles</p>',
    '/about': '<h2>About Page</h2><p>Contact Information</p>'
}
const defaultPage = '<h2>404</h2><p>Page Not Found</p>'

const main = document.querySelector('main');

page('/home', () => updateContent);
page('/catalog', () => updateContent);
page('/about', () => updateContent);
page.strt();

function updateContent(context) {
    main.innerHTML = pages[context.pathname] || defaultPage;
}