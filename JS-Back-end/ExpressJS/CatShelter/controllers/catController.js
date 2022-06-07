const express = require('express');

const router = express.Router();


router.get('/navcho', (req, res) => {
    res.write('<h1>Navcho Rulez!</h2>')
})

router.get('/:catName', (req, res) => {
    if (req.params.catName == 'navcho1') {
        return res.redirect('/cats/navcho');
    }

    res.header({
        'Content-Type': 'text/html'
    })

    res.write(`<h1>${req.params.catName + ' PAGE'}</h1>`);
    res.end();
});



module.exports = router;