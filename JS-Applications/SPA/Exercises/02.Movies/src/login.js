import { showHome } from './home.js'


async function onSubmit(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    const responce = await fetch('http://localhost:3030/users/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    
    if (responce.ok) {
        event.target.reset();
        const data = await responce.json();
        sessionStorage.setItem('authToken', data.accessToken);
        sessionStorage.setItem('userId', data._id);
        sessionStorage.setItem('email', data.email);

        document.getElementById('welcome-msg').textContent = `Welcome, ${email}`;

        Array.from(document.querySelectorAll('nav .user')).forEach(l => l.style.display = 'block');
        Array.from(document.querySelectorAll('nav .guest')).forEach(l => l.style.display = 'none');
        showHome();
    } else {
        const err = await responce.json();
        alert(err.message);
    }
    
}

let main;
let section;

export function setupLogin(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;

    const form = section.querySelector('form');

    form.addEventListener('submit', onSubmit );
}

export async function showLogin() {
        main.innerHTML = '';
        main.appendChild(section)
    }