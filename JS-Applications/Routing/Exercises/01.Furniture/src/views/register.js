import { html } from '../../node_modules/lit-html/lit-html.JS';
import { register } from '../api/api.js';


const registerTemaplate = (onSubmit, invalidEmail, invalidPass, invalidRe) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class=${'form-control' + ( invalidEmail ? ' is-invalid' : '')} id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class=${'form-control' + (invalidPass ? ' is-invalid' : '')} id="password" type="password" name="password">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="rePass">Repeat</label>
                    <input class=${'form-control' + (invalidPass  ? ' is-invalid' : '') } id="rePass" type="password" name="rePass">
                </div>
                <input type="submit" class="btn btn-primary" value="Register" />
            </div>
        </div>
    </form>
`;


export function registerPage(ctx) {
    ctx.render(registerTemaplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();
    
        const formData = new FormData(ev.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('rePass');
    
        if(email == '' || password == '' || rePass == '') {
            ctx.render(registerTemaplate(onSubmit, email == '', password == '', rePass == ''));
            return alert('All fields are required!');
        }
        if(password !== rePass) {
            ctx.render(registerTemaplate(onSubmit, false, true, true));
            return alert('Passwords do\`t match!')
        } 
    
        await register(email, password);
        ctx.setUserNav();

    }
}

