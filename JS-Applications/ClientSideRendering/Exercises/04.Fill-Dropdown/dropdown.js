import { html, render } from '../node_modules/lit-html/lit-html.js';
import data from './data.js';

const selectTemplate = (citys) => html`
<select id="menu">
    ${citys.map(x => html`<option id=${x._id}>${x.text}</option>` )}
</select>
`;

const main = document.querySelector('div');
const input = document.getElementById('itemText');

initialize();

async function initialize() {
    const result = await data.get();
    const list = Object.values(result);

    document.querySelector('form').addEventListener('submit', (ev) => addItem(ev, list))
    update(list);
}

function update(list) {
    const result = selectTemplate(list);
    render(result, main);
}

async function addItem(ev, list) {
    ev.preventDefault();
    const item = {
        text: input.value
    }
    
    input.value = '';

    const result = await data.post(item);
    list.push(result);
    update(list);    
}