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

    socket.emit('nsList', namespaces);
});

namespaces.forEach(ns => {
    io.of(ns.endpoint).on('connection', (socket) => {
        console.log(socket.id + ' has connected to ' + ns.endpoint);
        socket.on('joinRoom', async (roomTitle, ackCb) => {
            // room title is coming from the client!!! Which is not safe!
            // AUTH!
            socket.join(roomTitle);

            // fetch the number of sockets in this room
            const sockets = await io.of(ns.endpoint).in(roomTitle).fetchSockets();
            console.log('SOCKETS', sockets);
            const socketsCount = sockets.length;
            ackCb({
                numUsers: socketsCount
            });
        });

        socket.on('newMessageToRoom', messageObj => {
           console.log(messageObj);
            // broadcast this to all connected clients... this room only!
            // how can we find out what room THIS socket is in?
            const room = socket.rooms;
            const currentRoom = [...rooms][1]; //this is a set not arr
            // send out this messageObj to everyone including the sender
            io.of(ns.endpoint).in(currentRoom).emit('messageToRoom', messageObj);
            
        });
    });
});

