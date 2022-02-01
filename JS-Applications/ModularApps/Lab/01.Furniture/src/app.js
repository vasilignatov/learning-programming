import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';

import { dashboardPage } from './views/dashboard.js';



const main = document.querySelector('.container');

page('/', decorator, dashboardPage);
setNav();
page.start();

function decorator(ctx, next) {
    ctx.render = (content) => render(content, main);
    ctx.setNav = setNav;
    next();
}

function setNav() {
    const userId = sessionStorage.getItem('userId');
    if (userId !== null) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
}

