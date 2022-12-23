const router = require('express').Router();
const homeController = require('./controllers/home-controller');
const authController = require('./controllers/auth-controller');
const toyController = require('./controllers/toy-controller');

router.use(homeController);
router.use('/auth', authController);
router.use('/toy', toyController);

router.use('*', (req, res) => {
    res.render('404');
});

module.exports = router;