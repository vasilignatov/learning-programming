const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const storageService = require('./services/storageService.js');
import { html } from './node_modules/lit-html/lit-html.js';
const port = 5000;

const app = http.createServer((req, res) => {

    switch (req.url) {
        case '/':
            let content = fs.readFileSync('./views/home/index.html');
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            const template = () => html`<p>Example</p>`;
            const a = template();
            console.log(a);

            res.write(content);
            res.end();
            break;
        case '/content/styles/site.css':
            let styles = fs.readFileSync('./content/styles/site.css');
            res.writeHead(200, {
                'Content-Type': 'text/css'
            });
            res.write(styles);
            res.end();
            break;
        case '/cats/add-cat':
            if (req.method == 'GET') {

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
            } else if (req.method == 'POST') {

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
            }
            break;
        case '/js/script.js':
            let js = fs.readFileSync('./js/script.js');
            res.writeHead(200, {
                'Content-Type': 'text/javascript'
            });
            res.write(js);
            res.end();
            break;
        default:
            res.statusCode = 404;
            break;
    }
});

app.listen(port);
console.log(`App is listening on port: ${port}`);