document.querySelector('form[action="/login"]').addEventListener('submit', onLoginSubmit);

async function onLoginSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if(email == '' || password == '') return alert ('All fields are required!')

    await login(email, password);
}

async function login(email, password) {
    const responce = await fetch('http://localhost:3030/users/login', {
        method: 'post',
        headers: { 'Content-Type': 'application-json' },
        body: JSON.stringify({ email, password })
    });
    
    if (!responce.ok) {
        const error = await responce.json();
        return alert(error.message);
    }
    const data = await responce.json();
    console.log(data);
    sessionStorage.setItem('userToken', data.accessToken);
    sessionStorage.setItem('creatorId', data._id);
    window.location.pathname = 'index.html';
}