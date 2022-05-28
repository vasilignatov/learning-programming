const fs = require('fs');
const http = require('http');
const url = require('url');
const port = 5000;
const app = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            res.write('<h1>Homepage</h1><a href="/cats">Cats</a>');
            break;

        case '/cats':
            res.writeHead(200, {
                'Content-Type': 'text/html' 
            });
            let result = fs.readFileSync("./views/cats.html");
            res.write(result);
            break;
            //TODO Load image
        default:
            res.write('<h1>Error Page</h1><a href="/">Turn back to Home page</a>');
            break;
    }

});

app.listen(port);
console.log('Node.js server is running on port 5000!');
