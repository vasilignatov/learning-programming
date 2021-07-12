async function getInfo() {

    const stopId = document.getElementById('stopId');
    const id = stopId.value;
    const url = 'http://localhost:3030/jsonstore/bus/businfo/' + id;


    const responce = await fetch(url);
    const data = await responce.json();

    console.log(data);

}