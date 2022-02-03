import { html } from '../../node_modules/lit-html/lit-html.js';
import { until } from '../../node_modules/lit-html/directives/until.js';

import { getF } from '../api/data.js';
import { notify } from '../views/notifications.js';
import { createModal } from '../views/modal.js';


const dashboardTemplate = (data, search, onSearch, onDetails) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
    
            <!-- Search box -->
            <fieldset style="display: inline-block;">
                <legend>Search field</legend>
                <input type="text" name="search" id="search" value=${search}>
                <button @click=${onSearch}>Search</button>
            </fieldset>
    
        </div>
    </div>
    <div @click=${onDetails} class="row space-top">
        ${data.map(itemTemplate)}
    </div>
`;


const itemTemplate = (item) => html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${item.img} alt=${item.description}>
                <p>${item.description}</p>
                <footer>
                    <p>Price: <span>${item.price} $</span></p>
                </footer>
                <div>
                    <a href="javascript:void(0)" class="btn btn-info">Details</a>
                </div>
            </div>
        </div>
    </div>`;

const loaderTemplate = html`
<div class="lds-roller">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>
`

export async function dashboardPage(ctx) {
    const searchParam = ctx.querystring.split('=')[1] || '';

    const data = await getF(searchParam);
    if (data.length == 0) {
        ctx.render(unitl(populateTemlate(), loaderTemplate));
        notify(`No Matches ${searchParam} Found!`);
        return;
    }
    ctx.render(until(populateTemlate(), loaderTemplate));

    function onSearch(event) {
        //get data from input 
        const searchInput = document.getElementById('search').value;
        //send data to router 
        ctx.page.redirect('/?search=' + searchInput);
    }

    function onDetails(event) {
        if (event.target.tagName == 'A') {
            createModal('This is simple Modal examle implemented for educational purpose!');
        }
    }

    async function populateTemlate() {
        const data = await getF(searchParam);
        return dashboardTemplate(data, searchParam, onSearch, onDetails);
    }
}
