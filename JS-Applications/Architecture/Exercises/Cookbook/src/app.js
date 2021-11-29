import { logout as apiLogout } from './api/data.js'
import { setupCatalog } from './views/catalog.js';
import { setupCreate } from './views/create.js';
import { setupLogin } from './views/login.js';
import { setupRegister } from './views/register.js';
import { setupDetails } from './views/details.js';
import { setupEdit } from './views/edit.js';
import { createNavigation } from './navigation.js'

window.addEventListener('load', async () => {
    const main = document.querySelector('main');
    const nav = document.querySelector('nav');

    debugger;

    const navigaition = createNavigation(main, nav);
    navigaition.registerView('catalog', document.getElementById('catalog'), setupCatalog, 'catalogLink');
    navigaition.registerView('details', document.getElementById('details'), setupDetails);
    navigaition.registerView('login', document.getElementById('login'), setupLogin, 'loginLink');
    navigaition.registerView('register', document.getElementById('register'), setupRegister, 'registerLink');
    navigaition.registerView('create', document.getElementById('create'), setupCreate, 'createLink');
    navigaition.registerView('edit', document.getElementById('edit'), setupEdit);
    document.getElementById('views').remove();

    document.getElementById('logoutBtn').addEventListener('click', logout)

    // Start application in catalog view
    navigaition.goTo('catalog');

    async function logout() {
        await apiLogout();

        navigaition.setUserNav();
        navigaition.goTo('catalog');
    }
});
