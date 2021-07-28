function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', getPhonebook);
    document.getElementById('btnCreate').addEventListener('click', createContact);
}

attachEvents();

async function getPhonebook() {
    const ul = document.getElementById('phonebook');
    ul.innerHTML = '';
    const response = await fetch('http://localhost:3030/jsonstore/phonebook');
    const data = await response.json();
    Object
        .values(data)
        .map(c => createLi(c))
        .forEach(c => ul.appendChild(c));

}

function createLi(c) {
    const liEl = document.createElement('li');
    liEl.textContent = `${c.person}: ${c.phone}`;
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.id = c._id;
    delBtn.addEventListener('click', deleteContact)
    liEl.appendChild(delBtn);
    return liEl;
}

async function deleteContact(ev) {
    const id = ev.target.id;
    const conf = confirm('Are you sure to delete this contact?');
    if(conf) {
        await fetch('http://localhost:3030/jsonstore/phonebook/' + id, {
            method: 'delete'
        })
        getPhonebook()
    }
}

async function createContact() {
    const person = document.getElementById('person');
    const phone = document.getElementById('phone');

    if (person.value != '' && phone.value != '') {
        const contact = {
            person: person.value,
            phone: phone.value
        }

        await fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contact)
        })
        person.value = '';
        phone.value = '';
        getPhonebook()
        return;
    }
    alert('Place write the empty input fields!');
}



