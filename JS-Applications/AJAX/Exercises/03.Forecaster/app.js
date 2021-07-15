function attachEvents() {
    document.getElementById('submit').addEventListener('click', getWheather)
}

attachEvents();

async function getWheather() {
    const input = document.getElementById('location');
    const cityName = input.value;

    const code = await getCode(cityName);

    const [current, uppcomming] =await Promise.all([
        getCurrent(code),
        getUppcomming(code)
    ]);
}


async function getCode(cityName) {
    const url = `http://localhost:3030/jsonstore/forecaster/locations`;
    const responce = await fetch(url);
    const data = await responce.json();

    return data.filter(x => x.name.toLowerCase() == cityName.toLowerCase())[0].code;
}

async function getCurrent(code) {
    const url = `http://localhost:3030/jsonstore/forecaster/today/` + code;
    const responce = await fetch(url);
    const data = await responce.json();

    return data;
}

async function getUppcomming(code) {
    const url = `http://localhost:3030/jsonstore/forecaster/upcoming/` + code;
    const responce = await fetch(url);
    const data = await responce.json();

    return data;
}