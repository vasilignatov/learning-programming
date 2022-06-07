const port = 5000;
const path = require('path');
const express = require('express');
const fs = require('fs');

const catControler = require('./controllers/catController.js');
const requestLogger = require('./middlewares/requestLogger.js');

const app = express(); // create express server

app.use('/static', express.static('./public'));
// evrething starts with static static have access to public folder

// app.use('/cats',requestLogger, catControler); //controller level usecase
app.use(requestLogger);
// use middleware 

app.use('/cats', catControler);
// evrey request starts with /cats use this controller for it


// app.use((req, res, next) => {
//     console.log(req.path);

//     next();
// });
// middleware 



// download method
app.get('/', (req, res) => { // route path

    let absPath = path.join(__dirname, './views/home/index.html');
    let relPath = path.resolve(__dirname, './views/home/index.html');


    res.sendFile(__dirname + '/views/home/index.html');

});
// url params usecase
app.get('/cats/:catName', (req, res) => {
    if (req.params.catName.includes('navcho')) {
        return res.redirect('/cats/navcho');
    }

    res.header({
        'Content-Type': 'text/html'
    })

    res.write(`<h1>${req.params.catName + ' PAGE'}</h1>`);
    res.end();
});

//send file 
app.get('/send-file', (req, res) => {
    res.sendFile('./images/cat.png', { // dosen`t need end();
        root: __dirname
    });
})

app.get('/cats/navcho', (req, res) => {
    res.write('THIS IS NAVCHO\`s PAGE !');
    res.end();
})

// res.json method
app.get('/data', (req, res) => {
    res.json({
        'CatName': 'Navcho',
        'Age': '20'
    });
})


app.listen(port)
console.log(`Server is listening on port ${port}`);