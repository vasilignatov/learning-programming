import { nameSpaceSockets } from './scripts.js';

export const joinRoom = (roomTitle, namespaceId) => {
    console.log(namespaceId, 'SOCKET');
    nameSpaceSockets[namespaceId].emit('joinRoom', roomTitle, (ackRes) => {

        console.log('USERS: ', ackRes.numUsers);

        document.querySelector('.curr-room-num-users').innerHTML = `Users ${ackRes.numUsers ? ackRes.numUsers : 0}`;
        document.querySelector('.curr-room-num-users').innerHTML = roomTitle;

    });
}