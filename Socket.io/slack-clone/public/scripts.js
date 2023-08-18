// const username = prompt('Username');
// const password = prompt('Password');
import joinNs from './joinNs.js';

const baseUrl = 'http://localhost:9000'

const username = '1';
const password = '1';

const socket = io(baseUrl);


socket.on('connect', () => {
    console.log('Connected');
    socket.emit('clientConnect')
});

// listen for NS List (gives us namespaces)
socket.on('nsList', nsData => {
    const lastNs = localStorage.getItem('lastNs');
    const nameSpacesDiv = document.querySelector('.namespaces');
    nameSpacesDiv.innerHTML = '';
    nsData.forEach(ns => {
        // update html with ns
        nameSpacesDiv.innerHTML += `<div class="namespace" ns="${ns.endpoint}"><img src="${ns.image}"></div>`;
        // join this namespace with io();
        io(baseUrl + `/${ns.endpoint}`);
    });

    Array.from(document.getElementsByClassName('namespace')).forEach(x => {
        x.addEventListener('click', () => {
            joinNs(x, nsData);
        });
    });

    joinNs(document.getElementsByClassName('namespace')[0], nsData);
});

