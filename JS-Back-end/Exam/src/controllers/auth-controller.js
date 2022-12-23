const router = require('express').Router();
const { login, register } = require('../services/auth-service');
const { AUTH_COOKIE } = require('../constants');

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    
    const { email, username, password, rePass } = req.body;
    
    if (password != rePass) {
        res.locals.error = 'The repeat password should be equal to the password!';
        return res.render('auth/register');
    }

    try {
        await register({ email, username, password, rePass });

        let token = await login({ email, password });

        res.cookie(AUTH_COOKIE, token);

        res.redirect('/');

    } catch (error) {
        res.locals.error = error;
        res.render('auth/register');
    }
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await login({ email, password });

        res.cookie(AUTH_COOKIE, token);

        res.redirect('/');
    } catch (error) {
        res.locals.error = errror;
        res.render('auth/login');
    }


});

router.get('/logout', (req, res) => {
    res.clearCookie(AUTH_COOKIE);
    res.redirect('/');
});

module.exports = router;