const username = prompt('Username');
const password = prompt('Password');

const socket = io('http://localhost:9000');

socket.on('connect', () => {
    console.log('Connected');
    socket.emit('clientConnect')
});

// listen for NS List (gives us namespaces)
socket.on('nsList', nsData => {
    console.log(nsData);
    nsData.forEach(ns => {
        // update html with ns
        const nameSpacesDiv = document.querySelector('.namespaces');
        nameSpacesDiv.innerHTML += `<div class="namespace" ns="${ns.name}"><img src="${ns.image}"></div>`
    });
});

