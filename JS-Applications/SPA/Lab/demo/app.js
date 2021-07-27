
const header = document.querySelector('h1');
const main = document.querySelector('main');
document.querySelector('nav').addEventListener('click', (ev) => {
    switch(ev.target.id) {
        case 'home':
            header.textContent = 'Home Page';
            main.innerHTML = '<p>Welcome! This is our home page!</p>';
            break;
        case 'about':
            header.textContent = 'About Us page';
            main.innerHTML = '<p>We are lorem ipsum dolor sit amet</p>';
            break;
        case 'shop':
            header.textContent = 'Shop';
            main.innerHTML = '<p>Here you can buy some of our products. Enjoy</p>';
            break;
        case 'contacts':
            header.textContent = 'Contacts';
            main.innerHTML = '<p>Tel: +359883449072  </p>';
            break;
            
    }
})