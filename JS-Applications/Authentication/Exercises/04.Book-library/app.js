async function request(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        const err = await response.json();
        alert(err.message);
        throw new Error(err.message);
    }
    const data = await response.json();
    return data;
}

function start() {
    document.getElementById('loadBooks').addEventListener('click', getAllBooks);
    document.getElementById('createBook').addEventListener('submit', createBook);

    document.getElementById('editBook').addEventListener('submit', updateBook);
    document.querySelector('table').addEventListener('click', handleTableClick);
    
    getAllBooks();
}
start();

function handleTableClick(ev) {
    if (ev.target.className == 'editBtn') {
        document.getElementById('createBook').style.display = 'none';
        document.getElementById('editBook').style.display = 'block';
        const id = ev.target.parentNode.parentNode.dataset.id;
        loadBookForEditing(id);
        
    } else if (ev.target.className == 'deleteBtn') {
        const id = ev.target.parentNode.parentNode.dataset.id;
        deleteBook(id);
    }
}

async function loadBookForEditing(id) {
    const book = await request('http://localhost:3030/jsonstore/collections/books/' + id);
    
    document.querySelector('#editBook [name="id"]').value = id;
    document.querySelector('#editBook [name="title"]').value = book.title;
    document.querySelector('#editBook [name="author"]').value = book.author;
}

async function createBook(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get('title');
    const author = formData.get('author');
    if (title == '' || author == '') {
        return alert('All fields are required!');
    }
    
    await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author, title })
    })
    event.target.reset();
    getAllBooks();
}

async function updateBook(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const id = formData.get('id');
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    }

    await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    })

    document.getElementById('createBook').style.display = 'block';
    document.getElementById('editBook').style.display = 'none';
    event.target.reset();
}

async function deleteBook(id) {
    await request('http://localhost:3030/jsonstore/collections/books/' + id, {
        method: 'delete',
    })
    getAllBooks();
}

async function getAllBooks() {
    const books = await request('http://localhost:3030/jsonstore/collections/books');

    const rows = Object.entries(books).map(renderBook).join('');
    document.querySelector('tbody').innerHTML = rows;

    function renderBook([id, book]) {
        const result = `
        <tr data-id="${id}">
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
        </td>
        </tr>`
        
        return result;
    }
}
