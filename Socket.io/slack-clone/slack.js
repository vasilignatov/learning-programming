const express = require('express');
const path = require('path');
const app = express();
const socketio = require('socket.io');

const namespaces = require('./data/namespaces');

app.use(express.static(path.resolve(__dirname + '/public')));
const server = app.listen(9000);
const io = socketio(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/layout.html');
});

io.on('connection', (socket) => {
    console.log(socket.id, 'has connected!');

    socket.emit('messageFromServer', { data: 'Welcome to the socket server!' });

    socket.on('messageFromClient', (data) => {
        console.log('Data: ', data);
    });

     socket.emit('nsList', namespaces);
});

