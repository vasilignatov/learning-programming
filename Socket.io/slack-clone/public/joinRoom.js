import { nameSpaceSockets } from './scripts.js';

export const joinRoom = async (roomTitle, namespaceId) => {
    const ackRes = await nameSpaceSockets[namespaceId].emitWithAck('joinRoom', roomTitle);
    console.log(ackRes);
    document.querySelector('.curr-room-num-users').innerHTML = `Users ${ackRes.numUsers ? ackRes.numUsers : 0}`;
    document.querySelector('.curr-room-num-text').innerHTML = roomTitle;

}


    // nameSpaceSockets[namespaceId].emit('joinRoom', roomTitle, (ackRes) => {

    //     console.log(ackRes);
    //     document.querySelector('.curr-room-num-users').innerHTML = `Users ${ackRes.numUsers ? ackRes.numUsers : 0}`;
    //     document.querySelector('.curr-room-num-users').innerHTML = roomTitle;

    // });
