import { html, render } from '../node_modules/lit-html/lit-html.js'

const listTelmplate = (data) => html`
<ul>
    ${data.map(l => html`<li>${l}</li>`)}
</ul>`


document.getElementById('btnLoadTowns').addEventListener('click', updateList);

function updateList(ev) {
    ev.preventDefault();
    const root = document.getElementById('root');

    const townsAsStr = document.getElementById('towns').value;
    const towns = townsAsStr.split(', ').map(x => x.trim());

    const result = listTelmplate(towns);
    render(result, root)
}