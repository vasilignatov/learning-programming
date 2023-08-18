export default function joinNs(element, nsData) {
    const nsEndpoint = element.getAttribute('ns');
    console.log(nsEndpoint);

    const clickedNs = nsData.find(row => row.endpoint == nsEndpoint);
    console.log(clickedNs.rooms);

    const mainRooms = document.querySelector('.room-list');
    mainRooms.textContent = '';
    clickedNs.rooms.forEach(room => {
        mainRooms.innerHTML += `<li><span class="glyphicon glyphicon-lock"></span>${room.roomTitle}</li>`;
    });
}

