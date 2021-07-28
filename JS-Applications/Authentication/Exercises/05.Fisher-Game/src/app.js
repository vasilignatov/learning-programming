function attachEvents() {
    // document.querySelector('aside>button').addEventListener('click',)
    const token = sessionStorage.getItem('userToken');

    const logoutBtn = document.getElementById('div [id="guest"]');
    const loginBtn = document.getElementById('logout');

    console.log(loginBtn);
    console.log(logoutBtn);
    // if (token) {
    //     loginBtn.style.display = 'block';
    //     logoutBtn.style.display = 'block';
    // }
}
attachEvents();
/*
    load btn -> list all cathes
        - request to server
        - create dom catch

    create register func

    crate login func
    (only for the creator of the catch) save the id from the post requset and 
    Update -> send put request and update data
    Delete -> delete the catch from database and page
    
    Add    -> submit new catch with the values of the inputs in the fieldset id="addForm";


*/

function e(type, attributes, content) {
    const result = document.createElement(type);
    if (attributes) { Object.entries(attributes).forEach(([k, v]) => result.setAtributes(k, v)) }
    if (text) { result.textContent = content }
    return result;
}

async function listAllCatches() {
    const responce = await fetch('http://localhost:3030/data/catches');
    const data = await responce.json();
    return data;
}

async function createNewCatch(newCatch) {
    await fetch('http://localhost:3030/data/catches', {
        method: 'post',
        headers: { 'Content-Type': 'application-json' },
        body: JSON.stringify(newCatch)
    });
}

async function updateCatchBy(newCatch) {
    const responce = await fetch('http://localhost:3030/data/catches', {
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

function createCatch() {
    const catches = listAllCatches();
    const result = `
    <div class="catch">
        <label>Angler</label>
        <input type="text" class="angler" value="Paulo Amorim" />
        <hr>
        <label>Weight</label>
        <input type="number" class="weight" value="636" />
        <hr>
        <label>Species</label>
        <input type="text" class="species" value="Atlantic Blue Marlin" />
        <hr>
        <label>Location</label>
        <input type="text" class="location" value="Vitória, Brazil" />
        <hr>
        <label>Bait</label>
        <input type="text" class="bait" value="trolled pink" />
        <hr>
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="80" />
        <hr>
        <button disabled class="update">Update</button>
        <button disabled class="delete">Delete</button>
    </div>`;
}