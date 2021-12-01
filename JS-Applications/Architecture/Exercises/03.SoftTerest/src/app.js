import { setupHome } from './views/home.js';
import { setupCreate } from './views/create.js';
import { setupDash } from './views/dashboard.js';
import { setupDetails } from './views/details.js';
import { setupLogin } from './views/login.js';
import { setupRegister } from './views/register.js';

// setup views
// setup nav links
// show appropriate navigation based on user session
// start app in home view 
const main = document.querySelector('main');
const nav = document.querySelector('nav');

const views = {};
const links = {};

const navigation = {
    goTo
};

registerView('home', document.getElementById('homePage'), setupHome, 'homeLink');
registerView('login', document.getElementById('loginPage'), setupLogin, 'loginLink');
registerView('register', document.getElementById('registerPage'), setupRegister, 'registerLink');
registerView('details', document.getElementById('detailsPage'), setupDetails);
registerView('dashboard', document.getElementById('dashboard-holder'), setupDash, 'dashboardLink');
registerView('create', document.getElementById('homePage'), setupCreate, 'createLink');
document.getElementById('views').remove();

console.log(views);
console.log(links);

setupNavigaton();

//Start app in home view
goTo('home');

function registerView(name, section, setup, linkId) {
    const view = setup(section, navigation);
    views[name] = view;
    if (linkId) {
        links[linkId] = name;
    }
}

async function goTo(name, ...params) {
    main.innerHTML = '';
    const view = views[name];
    const section = await view(...params);

    main.appendChild(section);
}

function setupNavigaton() {
    setUserNav();
    
    nav.addEventListener('click', (ev) => {
        
        const viewName = links[ev.target.id];
        if (viewName) {
            ev.preventDefault();
            goTo(viewName);
        }
    });
}

function setUserNav() {
    const token = sessionStorage.getItem('authToken');
    if (token) {
        [...nav.querySelectorAll('.user-nav')].forEach(e => e.style.display = 'list-item');
        [...nav.querySelectorAll('.guest-nav')].forEach(e => e.style.display = 'none');
    } else {
        [...nav.querySelectorAll('.user-nav')].forEach(e => e.style.display = 'none');
        [...nav.querySelectorAll('.guest-nav')].forEach(e => e.style.display = 'list-item');
    }
}

