const router = require('express').Router();
const { getTopHauses } = require('../services/housing-service');

router.get('/', async (req, res) => {
    const houses = await getTopHauses();
    console.log(houses);
    res.render('home', { houses });
});

router.get('/catalog', (req, res) => {
    res.render('catalog');
});



module.exports = router;