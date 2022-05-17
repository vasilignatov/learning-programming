import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../api/data.js';

const loginTemplate = (onSubmit, errorMsg) => html`
                <section id="login">
                    <article class="narrow">
                        <header class="pad-med">
                            <h1>Login</h1>
                        </header>
                        <form id="login-form" @submit=${onSubmit} class="main-form pad-large">
                            ${errorMsg ? html`<div class="error">${errorMsg}</div>` : ''}
                            <label>E-mail: <input type="text" name="email"></label>
                            <label>Password: <input type="password" name="password"></label>
                            <input class="action cta" type="submit" value="Sign In">
                        </form>
                        <footer class="pad-small">Don't have an account? <a href="/register" class="invert">Sign up here</a>
                        </footer>
                    </article>
                </section>
`;

export async function loginPage(ctx) {

    ctx.render(loginTemplate());

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            await login({ emial, password });

            ctx.setUserNav();
            ctx.page.redirect('/my-teams'); 
        } catch(err) {
            ctx.render(loginTemplate(onSubmit, err.message))
        }
        if (email != '' && password != '') {
            
        }
    }
}