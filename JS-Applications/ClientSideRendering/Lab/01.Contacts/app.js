import { render } from './node_modules/lit-html/lit-html.js';
import { contacts } from './contacts.js'
import cardTemplate from './card.js'

const container = document.getElementById('contacts');
container.addEventListener('click', onClick);


const result = contacts.map(cardTemplate);
render(result, container);


function onClick(event) {

    if(event.target.classList.contains('detailsBtn')) {
        const div = event.target.parentElement;
        const btn = div.querySelector('.details');
        btn.style.display = btn.style.display != 'block' ? 'block' : 'none';
    }
}

