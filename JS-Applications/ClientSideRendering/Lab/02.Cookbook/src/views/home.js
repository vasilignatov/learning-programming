import { getRecent } from '../api/data.js';
import { html } from '../../node_modules/lit-html/lit-html.js'

const homeTamplate = (recipes, onClick) => html`
    <section id="home">
        <div class="hero">
            <h2>Welcome to My Cookbook</h2>
        </div>
        <header class="section-title">Recently added recipes</header>
        <div class="recent-recipes" @click=${onClick}>${recipes}</div>
        <footer class="section-title">
            <p>Browse all recipes in the <a href="/catalog">Catalog</a></p>
        </footer>
    </section>`

const previewTemplate = (recipe) => html`
<article class="recent" data-id=${recipe._id}>
    <div class="recent-preview">
        <img src="assets/fish.jpg">
    </div>
    <div class="recent-title">Roast Trout</div>
</article>`


const spacerTemplate = () => html`<div class="recent-space"></div>`;

export function setupHome(section, nav) {
    return showHome;

    async function showHome() {

        const recipes = await getRecent();
        const cards = recipes.map(previewTemplate);
        const result = [];

        for(let i = 0; i < cards.length; i++) {
            result.push(cards[i]);
            if (i < cards.length - 1) {
                result.push(spacerTemplate());
            }
        }

        // while (cards.length > 0) {
        //     result.push(cards.shift())
        //     if (cards.length > 0) {
        //         result.push(spacerTemplate());
        //     }
        // }

        return homeTamplate(result, onClick);
    }

    function onClick(event) {
        let article = event.target;
        console.log(event.currentTarget);

        while (article.tagName != 'ARTICLE' && article != event.currentTarget) {
            article = article.parentNode;
        }

        if(article.dataset.id) {
            nav.goTo('details', article.dataset.id)
        }
    }
}