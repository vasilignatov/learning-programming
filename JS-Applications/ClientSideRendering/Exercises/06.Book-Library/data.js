async function request(url, options) {
    const response = await fetch(url, options);
    if (response.ok) {
        return await response.json();
    }
}

const endpoint = 'http://localhost:3030/jsonstore/collections/books';


async function getAllBooks() {
    return Object
        .entries(await request(endpoint))
        .map(([k, v]) => Object.assign(v, { _id: k }))
}

async function getBookById(id) {
    return await request(endpoint + `/${id}`)
}

async function createBook(body) {
    return await request(endpoint, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    });
}

async function updateBook(id, data) {
    return request(endpoint + `/${id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
}

async function deleteBook(id) {
    return await fetch(endpoint + `/${id}`, {
        method: 'delete',
    });
}

export {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
}

