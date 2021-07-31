async function attachEvents() {
    const form = document.querySelector('#addForm');
    const addBtn = document.getElementById('submit');
    const logoutBtn = document.getElementById('logout');
    const loginBtn = document.getElementById('guest');

    const token = sessionStorage.getItem('userToken');

    // await loadAllCatches()
    document.querySelector('aside>button').addEventListener('click', await loadAllCatches());


    if (token) {
        const creatorId = sessionStorage.getItem('creatorId');
        logoutBtn.style.display = 'inline-block';
        loginBtn.style.display = 'none';
        addBtn.disabled = false;

        logoutBtn.addEventListener('click', logout);
        form.addEventListener('submit', createNewCatch);

        if (creatorId) {
            const catches = document.querySelectorAll('.catch');
            Array.from(catches).forEach(div => {
                if (div.dataset.creator == creatorId) {
                    let id = div.id;
                    const btns = document.getElementById(id).querySelectorAll('button');
                    btns.forEach(x => {
                        x.disabled = false;
                        x.addEventListener('click', createOrDeleteHandler)
                    })
                }
            })
        }

    } else {
        logoutBtn.style.display = 'none'
        loginBtn.style.display = 'inline-block';
    }

}
attachEvents();

async function logout() {
    const token = sessionStorage.getItem('userToken');
    const response = await fetch('http://localhost:3030/users/logout', {
        method: 'get',
        headers: { 'X-Authorization': token }
    });
    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }
    sessionStorage.clear();

    window.location.pathname = 'index.html';

}

async function loadAllCatches() {
    const response = await fetch('http://localhost:3030/data/catches');
    if (!response.ok) {
        const err = await response.json();
        return alert(err.message);
    }
    const allCatchesData = await response.json();

    document.getElementById('catches').innerHTML = allCatchesData.map(createCatch);

}

function createCatch(_catch) {
    return `
    <div class="catch" id="${_catch._id}" data-creator="${_catch._ownerId}">
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

async function createNewCatch(event) {

    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
        angler: formData.get('angler'),
        weight: formData.get('weight'),
        species: formData.get('species'),
        location: formData.get('location'),
        bait: formData.get('bait'),
        captureTime: formData.get('captureTime')
    }

    if (data.angler == '' || data.weight == '' || data.species == '' || data.location == '' ||
        data.bait == '' || data.captureTime == '') {
        return alert('All fields are required!');
    }

    await fetch('http://localhost:3030/data/catches', {
        method: 'post',
        headers: {
            'Content-Type': 'application-json',
            'X-Authorization': sessionStorage.getItem('userToken')
        },
        body: JSON.stringify(data)
    });
    event.target.reset();
}

async function deleteCatchById(id) {
    await fetch('http://localhost:3030/data/catches/' + id, {
        method: 'delete',
        headers: { 'X-Authorization': sessionStorage.getItem('userToken') }
    });

}

async function updateCatchBy(id, data) {
    try {
        await fetch('http://localhost:3030/data/catche/' + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application-json',
                'X-Authorization': sessionStorage.getItem('userToken')
            },
            body: JSON.stringify(data)
        });
    } catch (err) {
        alert(err.message);
    }
}


async function createOrDeleteHandler(ev) {
    ev.preventDefault();

    const target = ev.target;
    const div = target.parentNode;
    const id = div.id;

    if (target.className == 'update') {

        const data = {
            angler: div.querySelector('.angler').value,
            weight: div.querySelector('.weight').value,
            species: div.querySelector('.species').value,
            location: div.querySelector('.location').value,
            bait: div.querySelector('.bait').value,
            captureTime: div.querySelector('.captureTime').value
        }
        await updateCatchBy(id, data);
    } else if (target.className = 'delete') {
        await deleteCatchById(id);
        await loadAllCatches();
    }
}
