import * as api from './api/data.js';
import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { homePage } from './views/home.js';
import { browsePage } from './views/browse.js';
import { loginPage } from './views/login.js';

const main = document.querySelector('main');

setUserNav();

page('/', decorateContext, homePage);
page('/index.html', decorateContext, homePage);
page('/browse', decorateContext, browsePage);
page('/login', decorateContext, loginPage);
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