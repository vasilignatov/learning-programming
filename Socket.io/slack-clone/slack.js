const express = require('express');
const path = require('path');
const app = express();
const socketio = require('socket.io');
const Room = require('./classes/Room');

const namespaces = require('./data/namespaces');

app.use(express.static(path.resolve(__dirname + '/public')));

const server = app.listen(9000);
const io = socketio(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/layout.html');
});

app.get('/change-ns', (req, res) => {
    // updated NS array
    namespaces[0].addRoom(new Room(0, 'Deleted Articles', 0)); 
    io.of(namespaces[0].endpoint).emit('nsChange', namespaces[0]);
    res.json(namespaces[0]);
});

io.on('connection', (socket) => {
    console.log(socket.id, 'has connected!');

    socket.emit('messageFromServer', { data: 'Welcome to the socket server!' });

    socket.on('messageFromClient', (data) => {
        console.log('Data: ', data);
    });

    socket.emit('nsList', namespaces);
});

namespaces.forEach(ns => {
    io.of(ns.endpoint).on('connection', (socket) => {
        console.log(socket.id + ' has connected to ' + ns.endpoint);
    });
});

