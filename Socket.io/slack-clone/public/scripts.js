// const username = prompt('Username');
// const password = prompt('Password');
import joinNs from './joinNs.js';

const baseUrl = 'http://localhost:9000'

const username = '1';
const password = '1';

const socket = io(baseUrl);

// sockets will be put into this array, in the index of their ns.id
export const nameSpaceSockets = [];
const listeners = {
    nsChange: [],
}

const addListeners = (nsId) => {
    if (!listeners.nsChange[nsId]) {
        nameSpaceSockets[nsId].on('nsChange', data => {
            console.log('Namespace Changed!');
            console.log(data);
        });
    } else {
    }
}

socket.on('connect', () => {
    console.log('Connected');
    socket.emit('clientConnect')
});

// listen for NS List (gives us namespaces)
socket.on('nsList', nsData => {
    // const lastNs = localStorage.getItem('lastNs');
    const nameSpacesDiv = document.querySelector('.namespaces');
    nameSpacesDiv.innerHTML = '';
    nsData.forEach(ns => {
        // update html with ns
        nameSpacesDiv.innerHTML += `<div class="namespace" ns="${ns.endpoint}"><img src="${ns.image}"></div>`;

        // initialize thisNs as its index in nameSpaceSockets
        // If the connection is new, this will be null
        // If the connection has already been estabilished, it will reconect and remain in its spot

        if (!nameSpaceSockets[ns.id]) {
            // There is no socket in this nsId. So make a new connection
            // join this namespace with io();
            nameSpaceSockets[ns.id] = io(baseUrl + `/${ns.endpoint}`);
        }
        addListeners(ns.id);
    });

    Array.from(document.getElementsByClassName('namespace')).forEach(x => {
        x.addEventListener('click', () => {
            console.log(x);
            joinNs(x, nsData);
        });
    });

    joinNs(document.getElementsByClassName('namespace')[0], nsData);
});

