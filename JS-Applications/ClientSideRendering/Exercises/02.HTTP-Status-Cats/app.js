import { cats as catsData } from './catSeeder.js'
import { styleMap } from '../node_modules/lit-html/directives/style-map.js';
import { html, render } from '../node_modules/lit-html/lit-html.js';

const catCardTemplate = (cat) => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn">${cat.isVisible ? 'Hide' : 'Show' } status code</button>
            <div class="status" style=${styleMap(cat.isVisible ? {} : {display: 'none'})} id=${cat.id}>
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>
`;

const main = document.getElementById('allCats');
catsData.forEach(cat => cat.isVisible = false);
update();


function update() {
    const catsList = html`
    <ul  @click=${toggleInfo}>
        ${catsData.map(catCardTemplate)}
    </ul>`
    
    render(catsList, main);
}

function toggleInfo(event) {    
    const elementId = event.target.parentNode.querySelector('.status').id;
    console.log(elementId);
    const cat = catsData.find(c => c.id == elementId);
    cat.isVisible = !cat.isVisible;    

    update();
}