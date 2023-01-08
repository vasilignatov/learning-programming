const router = require('express').Router();
const Housing = require('../models/Housing');
const { create, getHauses, details, addTenant } = require('../services/housing-service');

router.get('/', async (req, res) => {
    const houses = await getHauses();
    res.render('housing', { houses });
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {

    try {
        await create({ ...req.body, owner: req.user._id });
        res.redirect('/housing');
    } catch (err) {
        res.locals.error =  err;
        res.render('create');
    }
});

router.get('/:id', async (req, res) => {
    let house = await details(req.params.id);

    let isOwner = house.owner == req.user?._id;

    let tenants = await house.getTenants();

    let houseData = await house.toObject();

    let isAvailable = houseData.availablePieces > 0;
    let isRented = house.tenants.some(x => x._id == req.user?._id);

    res.render('details', { ...houseData, isOwner, tenants, isAvailable, isRented });
});

router.get('/:housingId/rent', async (req, res) => {
    try {
        await addTenant(req.params.housingId, req.user._id);
        
    } catch (error) {
        console.log(error);
    }

    res.redirect(`/housing/${req.params.housingId}`);
});

router.get('/:housingId/delete', async (req, res) => {
    try {
        await delete (req.params.housingId);

    } catch (error) {
        console.log(error);
    }

    res.redirect(`/housing`);
});

module.exports = router;