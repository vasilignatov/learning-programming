async function getInfo() {

    const stopId = document.getElementById('stopId');
    const id = stopId.value;
    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + id;


    
    try {
        const ul = document.getElementById('buses')
        ul.innerHTML = '';
        
        const responce = await fetch(url);
        const data = await responce.json();
        
        document.getElementById('stopName') = data.name;
        
        Object.entries(data.buses).map(([bus, time]) => {
            const liEl = document.createElement('li');
            liEl.textContent = `Bus ${bus} arrives in ${time}`;
            ul.appendChild(liEl);
        })
        stopId.value = '';

    } catch(err) {
        stopName.textContent = 'Error'
    }

}