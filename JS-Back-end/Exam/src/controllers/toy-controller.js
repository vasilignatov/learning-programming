const router = require('express').Router();
const Toy = require('../models/Toy');
const { isAuth } = require('../middlewares/authMiddleware');
const { create, getAll, getById, deleteToy, updateToy } = require('../services/toy-service');

router.get('/catalog', async (req, res) => {
    const toys = await getAll();
    res.render('catalog', { toys });
});

// CREATE PAGE 
router.get('/create',
    isAuth,
    (req, res) => {
        res.render('create');
    });

router.post('/create',
    isAuth,
    async (req, res) => {
        const toy = { ...req.body, owner: req.user._id };

        try {
            await create(toy);
            res.redirect('/toy/catalog');
        } catch (err) {
            let errorMsg = err._message + ': ' + Object.keys(err.errors)[0];
            res.locals.error = errorMsg;
            res.render('create');
        }
    });

// Details
router.get('/:id', async (req, res) => {
    let toy = await getById(req.params.id);
    let toyData = toy.toObject();
    let isOwner = toy.owner == req.user?._id;
    let isBuyed = toyData.buyingList.some(x => x == req.user?._id);


    res.render('details', { ...toyData, isOwner, isBuyed });
    // res.render('details', { ...houseData, isOwner, tenants, isAvailable, isRented });
});


async function isNotOwner(req, res, next) {
    const toy = await getById(req.params.id);
    if (req.user._id == toy.owner) {
        res.locals.error = new Error('You are not authorized to delete');
        return res.render(`/toy/${toy._id}`);
    }
    next();
}

async function isOwner(req, res, next) {
    const toy = await getById(req.params.id);
    if (req.user._id != toy.owner) {
        res.locals.error = new Error('You are not authorized to delete');
        return res.render(`/toy/${toy._id}`);
    }
    next();
}

async function isBuyed(req, res, next) {
    const toy = await getById(req.params.id);
    let isBuyed = toy.buyingList.some(b => b == req.user._id);

    if (!isBuyed) {
        return next();
    }
    throw new Error('You are alredy buy this toy!');
}

// DELETE 
router.get('/:id/delete',
    isAuth,
    isOwner,
    async (req, res) => {
        try {
            await deleteToy(req.params.id);
            res.redirect('/toy/catalog');
        } catch (err) {
            res.locals.error = err;
            res.render('create');
        }
    });


// EDIT PAGE 
router.get('/:id/edit',
    isAuth,
    isOwner,
    async (req, res) => {
        const toy = await getById(req.params.id);
        res.render('edit', toy);
    });

router.post('/:id/edit',
    isAuth,
    isOwner,
    async (req, res) => {
        const toyId = req.params.id;
        try {
            await updateToy(toyId, req.body);
            res.redirect(`/toy/${toyId}`);
        } catch (error) {
            res.locals.error = error;
            res.render(`edit`);
        }
    });

// BUY
router.get('/:id/buy',
    isAuth,
    isNotOwner,
    isBuyed,
    async (req, res) => {

        const toy = await getById(req.params.id);
        try {
            toy.buyingList.push(req.user);

            toy.save();

            res.redirect(`/toy/${req.params.id}`);
        } catch (err) {
            res.locals.error = err;
            res.render(`catalog`);
        }
    });


module.exports = router;