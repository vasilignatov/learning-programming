function attachEvents() {

    const token = sessionStorage.getItem('userToken');
    const logoutBtn = document.getElementById('logout');
    const loginBtn = document.getElementById('guest');
    document.querySelector('aside>button').addEventListener('click', listAllCatches);


    if (token) {
        logoutBtn.style.display = 'inline-block';
        loginBtn.style.display = 'none';
        logoutBtn.addEventListener('click', logout);

    } else {
        logoutBtn.style.display = 'none'
        loginBtn.style.display = 'inline-block';
    }

}
attachEvents();
/*
    Update -> send put request and update data
    Delete -> delete the catch from database and page
*/


async function logout() {
    const token = sessionStorage.getItem('userToken');
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: {
            'Content-Type': 'application-json',
            'X-Authorization': token
        }
    });

    if (response.ok) {
        const error = await response.json();
        return alert(error.message);
    }
    sessionStorage.removeItem('userToken');

}

async function listAllCatches() {
    const catches = document.getElementById('catches');
    catches.innerHTML = '';
    const response = await fetch('http://localhost:3030/data/catches');
    if (!response.ok) {
        const err = await response.json();
        return alert(err.message);
    }
    const allCatchesData = await response.json();
    allCatchesData.map(createCatch).forEach(c => catches.innerHTML += c);

}

function createCatch(_catch) {
    return `
    <div class="catch" id="${_catch._id} data-creator="${_catch._ownerId}">
        <label>Angler</label>
        <input type="text" class="angler" value="${_catch.angler}" />
        <hr>
        <label>Weight</label>
        <input type="number" class="weight" value="${_catch.weight}" />
        <hr>
        <label>Species</label>
        <input type="text" class="species" value="${_catch.species}" />
        <hr>
        <label>Location</label>
        <input type="text" class="location" value="${_catch.location}" />
        <hr>
        <label>Bait</label>
        <input type="text" class="bait" value="${_catch.bait}" />
        <hr>
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${_catch.captureTime}" />
        <hr>
        <button disabled class="update">Update</button>
        <button disabled class="delete">Delete</button>
    </div>`;
}

async function createNewCatch(newCatch) {
    await fetch('http://localhost:3030/data/catches', {
        method: 'post',
        headers: { 'Content-Type': 'application-json' },
        body: JSON.stringify(newCatch)
    });
}

async function updateCatchBy(newCatch) {
    await fetch('http://localhost:3030/data/catches', {
        method: 'put',
        headers: { 'Content-Type': 'application-json' },
        body: JSON.stringify(newCatch)
    });
}

async function deleteCatchById(id) {
    const responce = await fetch('http://localhost:3030/data/catches/' + id, {
        method: 'delete'
    });
}

function e(type, attributes, content) {
    const result = document.createElement(type);
    if (attributes) { Object.entries(attributes).forEach(([k, v]) => result.setAtributes(k, v)) }
    if (text) { result.textContent = content }
    return result;
}