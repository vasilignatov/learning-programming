function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', getPhonebook);
    document.getElementById('btnCreate').addEventListener('click', createContact);
}

attachEvents();

async function getPhonebook() {
    const ul = document.getElementById('phonebook');

    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const data = await response.json();
    Object
        .values(data)
        .map(c => createLi)
        .forEach(li => ul.appendChild(li));

    function createLi() {
        const li = document.createElement('li');
        li.textContent = `${c.person}: ${c.phone}`;
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.id = c._id;
        delBtn.addEventListener('click', deleteContact)
        li.appendChild(delBtn);
        return li;
    }
}

async function deleteContact(ev) {
    const id = ev.target.id;
    await fetch('http://localhost:3030/jsonstore/phonebook/' + id, {
        method: 'delete'
    })
    getPhonebook();
}

async function createContact() {
    const contact = {
        person: document.getElementById('person').values,
        phone: document.getElementById('phone').value
    }

    await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
    })
    getPhonebook()
}