import page from '../node_modules/page/page.mjs';
import { createPage } from './views/create.js';
import { dashboardPage } from './views/dashboard.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { myFurniturePage } from './views/myFurniture.js';

import * as api from './api/data.js';
window.api = api;

page('/', dashboardPage);
page('/create', createPage);
page('/detail/:id', detailsPage);
page('/edit/:id', editPage);
page('/login', loginPage);
page('/register', registerPage);
page('/my-furniture', myFurniturePage);


page.start();

