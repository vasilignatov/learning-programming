import { html, render } from '../node_modules/lit-html/lit-html.js';

const endpoint = 'http://localhost:3030/jsonstore/advanced/table';

const rowTemplate = (row, select) => html`
   <tr class=${select ? 'select' : '' }>
      <td>${row.firstName} ${row.lastName}</td>
      <td>${row.email}</td>
      <td>${row.course}</td>
   </tr>
   `;


const main = document.querySelector('tbody');
const input = document.getElementById('searchField');

start();

async function start() {
   document.querySelector('#searchBtn').addEventListener('click', (onClick));

   const data = await getData();
   const rows = Object.values(data)
 

   function onClick() {
      update(rows, input.value.toLowerCase());
      input.value = '';
   }

   function update(rows, match = '') {
      const result = rows.map(e => rowTemplate(e, compare(e, match)));
      render(result, main)
   }

   function compare(item, match) {
      return Object.values(item).some(v => match && v.toLowerCase().includes(match));
   }

   async function getData() {
      const response = await fetch(endpoint);
      if (response.ok) {
         const data = await response.json();
         return data;
      } else {
         const err = await response.json();
         return alert(err.message);
      }
   }
}



