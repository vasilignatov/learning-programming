const http = require('http');
const fs = require('fs');

const port = 5000;

const app = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            let content = fs.readFileSync('./views/home/index.html');
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(content);
            break;
        case '/content/styles/site.css':
            let styles = fs.readFileSync('./content/styles/site.css');
            res.writeHead(200, {
                'Content-Type': 'text/css'
            });
            res.write(styles);
        case '/js/script.js':
            let js = fs.readFileSync('./js/script.js');
            // res.writeHead(200, {
            //     'Content-Type': 'text/javascript'
            // });
            res.write(js);
        default:
            res.statusCode = 404;
            break;
    }
    res.end();
});

app.listen(port);
console.log(`App is listening on port: ${port}`);