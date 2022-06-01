const url = require('url');
const http = require('http');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
const storageService = require('./services/storageService.js');
const port = 5000;

const app = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname; // parse the url return pathname

    if (pathname == '/' && req.method == 'GET') {

        fs.readFile('./views/home/index.html', { encoding: "utf8" }, (err, data) => {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            if (err) {
                console.log(err);
                return res.end()
            } else {
                res.write(data);
                res.end();
            }

        });
    } else if (pathname == '/cats/add-cat' && req.method == 'GET') {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        fs.readFile('./views/addCat.html', { encoding: "utf8" }, (err, result) => {
            if (err) {
                res.statusCode = 404;
                return res.end();
            }

            fs.readFile('./db.json', { encoding: 'utf8' }, (err, catData) => {
                if (err) {
                    console.log('ERROR');
                    console.log(err.message);
                }
                let breeds = JSON.parse(catData).breeds;
                let mappedBreeds = breeds.map(breed => `
                <option value="${breed}">${breed}</option>
                `);

                result = result.replace('{{breeds}}', mappedBreeds);
                res.write(result);
                res.end();
            });
        });
    } else if (pathname == '/cats/add-cat' && req.method == 'POST') {
        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {

            storageService.saveCat(fields) // recive Promise
                .then(() => {
                    res.end();
                }).catch(err => {
                    console.log('err');
                    console.log(err);
                });
        });

        res.writeHead(302, { // 302 code for redirect
            'Location': '/'
        });
    } else if (pathname == '/cats/add-breed' && req.method == 'GET') {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        fs.readFile('./views/addBreed.html', { encoding: "utf8" }, (err, result) => {
            if (err) {
                res.statusCode = 404;
                return res.end();
            }
            res.write(result);
            res.end();
        });
    } else if (pathname == '/cats/add-breed' && req.method == 'POST') {
        const form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            const breed = Object.values(fields)[0];
            
            storageService.saveBreed(breed) // recive Promise
                .then(() => {
                    res.end();
                }).catch(err => {
                    console.log('err');
                    console.log(err);
                });
        });

        res.writeHead(302, { // 302 code for redirect
            'Location': '/'
        });
    } else if (req.url == '/content/styles/site.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        });

        fs.readFile('./content/styles/site.css', (err, styles) => {
            res.write(styles);
            res.end();
        })
    } else {
        res.statusCode = 404;
    }
});
app.listen(port);
console.log(`App is listening on port: ${port}`);