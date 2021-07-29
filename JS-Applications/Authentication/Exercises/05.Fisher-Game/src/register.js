document.querySelector('form').addEventListener('submit', onRegisterSubmit);

async function onRegisterSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    if(email == '' || password == '' || rePass == '') return alert ('All fields are required!')
    if(password != rePass) return alert('Passwords don\'t match!');

    register(email, password);
}

async function register(email, password) {
    const responce = await fetch('http://localhost:3030/users/register', {
        method: 'post',
        headers: { 'Content-Type': 'application-json' },
        body: JSON.stringify({ email, password })
    });

    if (!responce.ok) {
        const error = await responce.json();
        return alert(error.message);
    }
    const data = await responce.json();
    sessionStorage.setItem('userToken', data.accessToken);
    window.location.pathname = 'index.html'
}