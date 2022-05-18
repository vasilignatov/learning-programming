import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { logout as apiLogout } from './api/data.js';
import { homePage } from './views/home.js';
import { browsePage } from './views/browse.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

const main = document.querySelector('main');

document.getElementById('logout').addEventListener('click', logout);

setUserNav();   //Set Navigation

page('/', decorateContext, homePage);
page('/index.html', decorateContext, homePage);
page('/browse', decorateContext, browsePage);
page('/login', decorateContext, loginPage);
page('/register', decorateContext, registerPage);
page('/create', decorateContext, createPage);
page('/details/:id', decorateContext, detailsPage);
page('/edit/:id', decorateContext, editPage);
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setUserNav = setUserNav;

    next();
}

function setUserNav() {
    const userId = sessionStorage.getItem('userId');

    if (userId !== null) {
        [...document.querySelectorAll('nav a.guest')].forEach(x => x.style.display = 'none');
        [...document.querySelectorAll('nav a.user')].forEach(x => x.style.display = 'block');
    } else {
        [...document.querySelectorAll('nav a.user')].forEach(x => x.style.display = 'none');
        [...document.querySelectorAll('nav a.guest')].forEach(x => x.style.display = 'block');
    }
}

async function logout() {
    await apiLogout();
    setUserNav();
    page.redirect('/');
}