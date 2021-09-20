async function getInfo() {

    const stopId = document.getElementById('stopId');
    const id = stopId.value;
    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + id;

    try {
        const ul = document.getElementById('buses');
        ul.textContent = 'Loading...'
        const responce = await fetch(url);
        const data = await responce.json();
        ul.textContent = '';
        document.getElementById('stopName').textContent = data.name;
        Object.entries(data.buses).forEach(([busId, time]) => {
            const li = document.createElement('li');
            li.textContent = `Bus ${busId} arrives in ${time}`;
            ul.appendChild(li);
        })
    } catch (err) {
        stopName.textContent = 'Error';
    }

}