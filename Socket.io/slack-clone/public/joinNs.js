import { joinRoom } from './joinRoom.js';

export default function joinNs(element, nsData) {
    const nsEndpoint = element.getAttribute('ns');

    const clickedNs = nsData.find(row => row.endpoint == nsEndpoint);
    // const rooms = clickedNs.rooms;

    const roomList = document.querySelector('.room-list');
    roomList.innerHTML = '';
    clickedNs.rooms.forEach(room => {
        const liEl = document.createElement('li');
        liEl.namespaceId = room.namespaceId;
        liEl.className = 'room';
        liEl.setAttribute('namespaceId', room.namespaceId);
        const spanEl = document.createElement('span');

        if (room.privateRoom) {
            spanEl.textContent = '🔒';
        } else {
            spanEl.textContent = '🌐';
        }

        spanEl.textContent += ' ' + room.roomTitle;
        liEl.appendChild(spanEl);
        roomList.appendChild(liEl);
    });

    // add click listeners to each room so the client can tell the server it wants to join!
    const roomNodes = document.querySelectorAll('.room');
    console.log(roomNodes);
    Array.from(roomNodes).forEach(elem => {
        elem.addEventListener('click', e => {
            // console.log('Someone clicked on ' + e.target.textContent);
            const namespaceId = elem.getAttribute('namespaceId');
            const roomTitle = e.target.textContent.split(' ')[1];
            console.log(roomTitle, namespaceId);
            joinRoom(roomTitle, namespaceId);
        });
    });

    localStorage.setItem('lastNs', nsEndpoint);
}

