import { html, render } from '../../node_modules/lit-html/lit-html.js';

const notificationTemplate = (message) => html`
    <section id="notification" @click=${close}>
        ${message}
    </section>
`

const container = document.getElementById('notification-holder');

export function notify(message) {
    render(notificationTemplate(message), container);
    setTimeout(close, 3000);
}

export function close(ev) {
    render('', container);
}