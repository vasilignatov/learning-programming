const router = require('express').Router();
const { getAll } = require('../services/toy-service');

router.get('/', async (req, res) => {
    res.render('home');
});

router.get('/search', async (req, res) => {
    const search = await getAll();
    res.render('search', { search });
});

router.post('/search', async (req, res) => {
    const { title, charity } = req.body;
    let search = await getAll();

    if (title) {
        search = search.filter(toy => {
            return toy.title.toLowerCase().includes(title.toLowerCase());
        });
    }
    
    if (charity) {
        search = search.filter(toy => {
            return toy.charity.toLowerCase().includes(charity.toLowerCase());
        });
    }

    res.render('search', { search });
});




module.exports = router;