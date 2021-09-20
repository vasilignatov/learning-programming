const http = require('http');

let app = http.createServer((req, res) => {
    req.write('Hello Node.js');
    req.end();
});

app.listen(5000);
