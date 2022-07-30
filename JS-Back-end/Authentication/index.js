const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
    // res.end()
})

app.listen(5000, console.log.bind(console, 'App is listening on port http://localhost:5000'));