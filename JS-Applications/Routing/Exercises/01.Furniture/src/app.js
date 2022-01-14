import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js'

import { createPage } from './views/create.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { myFurniturePage } from './views/myFurniture.js';

import * as api from './api/data.js';
window.api = api;

const main = document.querySelector('.container');

page('/', renderMiddlewere, dashboardPage);
page('/create', renderMiddlewere, createPage);
page('/detail/:id', renderMiddlewere, detailsPage);
page('/edit/:id', renderMiddlewere, editPage);
page('/login', renderMiddlewere, loginPage);
page('/register', renderMiddlewere, registerPage);
page('/my-furniture', renderMiddlewere, myFurniturePage);

page.start();


function renderMiddlewere(ctx, next) {
    ctx.render = (content) => render(content, main);
    next();
}

