import {html, render} from 'https://unpkg.com/lit-html?module';
// import { classMap } from '../node_modules/lit-html/directives/class-map.js';

const buttonTemplate = (text, type) => html`
        <style>
             .btn {
                padding: 0.5em 1em;
                border-radius: 0.5em;
                font-family: sans-serif;
                font-weight: bold;
                font-size: 1.2em;
                outline: none;
                cursor: pointer;
                box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
                border: none;
            }

            .basic {
                color: rgb(0, 0, 0);
                background-color: rgb(255, 255, 255);
            }

            .primary {
                color: rgb(255, 255, 255);
                background-color: rgb(63, 81, 181);
            }

            .accent {
                color: rgb(255, 255, 255);
                background-color: rgb(255, 64, 129);
            }

            .warn {
                color: rgb(255, 255, 255);
                background-color: rgb(244, 67, 54);
            }
        </style>
        <button class="btn ${
    type === 'primary' ? 'primary'
    : type === 'accent' ? 'accent'
    : type === 'warn' ? 'warn' : ''}"
>${text}</button>`;


class CustomButtons extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: 'open' });
        const text = this.getAttribute('text');
        const type = this.getAttribute('type');
        render(buttonTemplate(text, type), this.shadowRoot);
    }
}

customElements.define('custom-button', CustomButtons);