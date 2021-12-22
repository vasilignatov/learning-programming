import { html } from '../node_modules/lit-html/lit-html.js';
import * as api from './data.js';

const tableRow = (book) => html`
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td data-id=${book._id}>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            </td>
        </tr>
        `

const table = (ctx) => html`
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody @click=${e => onClick(e, ctx)}>
                ${ctx.list.map(tableRow)}
            </tbody>
        </table>
        `


const editForm = (book) => html`
    <form id="edit-form">
        <input type="hidden" name="_id" .value=${book._id}>
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title..." .value=${book.title}>
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author..." .value=${book.name}>
        <input type="submit" value="Save">
    </form>
`

const addForm = (book) => html`
    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input type="submit" value="Submit">
    </form>
`

export const layout = (ctx, bookToEdit) => html`
    <button @click=${ctx.load} id="loadBooks">LOAD ALL BOOKS</button>
    ${table(ctx)}
    ${bookToEdit ? editForm(bookToEdit) : addForm()}
`

function onClick(event, ctx) {
    if (event.target.classList.contains('deleteBtn')) {
        const id = event.target.parentNode.dataset.id;
        ctx.onDelete(id)
    } else if (event.target.classList.contains('editBtn')) {
        const id = event.target.parentNode.dataset.id
        ctx.onEdit(id);
    }
}