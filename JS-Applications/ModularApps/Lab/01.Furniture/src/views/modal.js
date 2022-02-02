import { render, html } from '../../node_modules/lit-html/lit-html.js';

const templateModal = (msg, callback) => html`
    <div id="modal">
        <p>${msg}</p>
        <button @click=${clearModal}>Ok</button>
        <button @click=${clearModal}>Cancel</button>
    </div>
`
const overlay = document.createElement('div');
overlay.id = 'overlay';

export function createModal(msg, callback) { 
    render(templateModal(msg), overlay);
    document.body.appendChild(overlay)
}


function clearModal() {
    overlay.remove();
}