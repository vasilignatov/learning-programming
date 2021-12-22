import { render } from '../node_modules/lit-html/lit-html.js';
import * as api from './data.js'
import { layout } from './main.js';


const onSubmit = {
    'edit-form': onEditSubmit,
    'add-form': onCreateSubmit
}

const ctx = {
    list: [],
    async load() {
        ctx.list = await api.getAllBooks();
        update(ctx.list);
    },
    onEdit(id) {
        const book = ctx.list.find(x => x._id == id);
        update(book)
    },
    async onDelete(id) {
        const confirmed = confirm('Are you sure you want to delete this book?');
        if (confirmed) await api.deleteBook(id);
    }
}

document.body.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    onSubmit[ev.target.id](formData, ev.target);
});

start();


async function start() {
    update();
}

async function update(list, bookToEdit) {
    const result = layout(ctx, list, bookToEdit)
    render(result, document.body);
}

async function onCreateSubmit(formData, form) {
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    }
    await api.createBook(book);
    form.reset();
}

async function onEditSubmit(formData, form) {
    const id = formData.get('_id')
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    }
    
    await api.updateBook(id, book);
    form.reset();
    update();
}