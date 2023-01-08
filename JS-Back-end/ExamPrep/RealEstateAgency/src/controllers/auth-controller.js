const router = require('express').Router();
const { login, register } = require('../services/auth-service');
const { AUTH_COOKIE } = require('../constants');

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const { name, username, password, rePass } = req.body;

    if (password != rePass) {
        res.locals.error = 'Passwords missmatch!';
        return res.render('auth/register');
    }

    try {
        await register({ name, username, password });

        let token = await login({ username, password });

        res.cookie(AUTH_COOKIE, token);

        res.redirect('/auth/login');

    } catch (error) {
        //TODO: 
    }
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const token = await login({ username, password });

        res.cookie(AUTH_COOKIE, token);

        res.redirect('/');
    } catch (error) {
        console.log(error);
        // TODO: NOTIFICATION
    }


});

router.get('/logout', (req, res) => {
    res.clearCookie(AUTH_COOKIE);
    res.redirect('/');
});

module.exports = router;