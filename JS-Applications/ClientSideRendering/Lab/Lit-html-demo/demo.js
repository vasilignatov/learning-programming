import { html, render } from 'https://unpkg.com/lit-html?module';


async function demo() {
    const main = document.getElementById('content');
    const articlesData = await (await fetch('../TemplatingDemo/articles.json')).json();
    
    const articleTemplate = (article) => html`
    <article>
        <header>
            <h3>${article.title}</h3>
        </header>
        <div class="article-content">
            <p>${article.content}</p>
        </div>
        <footer>Author: ${article.author}</footer>
    </article>`

    render(articlesData.map(articleTemplate), main)// lit- html can works with arrays

}

demo()