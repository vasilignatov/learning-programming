const { AUTH_COOKIE, SECRET } = require('../constants');
const { jwtVerify } = require('../utils/jwtUtils');

exports.auth = async function (req, res, next) {
    let token = req.cookies[AUTH_COOKIE];

    if (token) {
        try {
            const user = await jwtVerify(token, SECRET);
            req.user = user;
            res.locals.user = user;
            return next();
        } catch (error) {
            res.clearCookie(AUTH_COOKIE);
            res.status(401).render('404');
        }
    }
    next();
}

exports.isAuth = function (req, res, next) {
    if (!req.user) {
        res.locals.error = 'Only creator can delete his own toy review'
        return res.status(401).render('login');
    }

    next();
}

exports.isGuest = (req, res, next) => {
    if (req.user) {
        res.redirect('/');
    } else {
        next();
    }
}