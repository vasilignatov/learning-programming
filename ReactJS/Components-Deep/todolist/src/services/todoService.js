export const API_URL = 'http://localhost:3030/jsonstore/todo/todo'

export const createTodo = (todo) => {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    .then(res => res.json());
}