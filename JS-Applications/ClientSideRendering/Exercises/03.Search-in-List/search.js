import { towns } from './towns.js'
import { render, html } from '../node_modules/lit-html/lit-html.js';


const searchTemplate = (towns, match) => html`
   <article>
      <div id="towns">
         <ul>
            ${towns.map(l => itemTemplate(l, match))}
         </ul>
      </div>
      <input type="text" id="searchText" .value=${match}/>
      <button @click=${search}>Search</button>
      <div id="result">${countMatches(towns, match)} </div>
   </article>
`;

const itemTemplate = (name, match) => html`
            <li class=${(match && name.toLowerCase().includes(match.toLowerCase())) ? 'active' : ''}>${name}</li>
`;

const main = document.body;
update()

function update(match = '') {
   const result = searchTemplate(towns, match);
   render(result, main);
}

function search(ev) {
   const match = ev.target.parentNode.querySelector('input').value;
   update(match);
}

function countMatches(towns, match) {
   const matches = towns.filter(m =>match && m.toLowerCase().includes(match.toLowerCase())).length;
   const result = matches  == 0 ? 'No matches found'
      : matches == 1 ? `${matches} match found`
      :  `${matches} matches found`
   return result;
}