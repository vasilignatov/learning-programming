getRecipieList();

async function getRecipieList() {
    const main = document.querySelector('main');
    main.textContent = '';

    const allRecipes = await request('http://localhost:3030/jsonstore/cookbook/recipes');
    Object
        .values(allRecipes)
        .map(createSmallCard)
        .forEach(r => main.appendChild(r));
}

async function getRecipeById(id) {
    const data = await request('http://localhost:3030/jsonstore/cookbook/recipes/' + id);
    const article = document.getElementById(id);
    document.querySelector('main').replaceChild(createSmallCard(data), article);
}

function createSmallCard(card) {

    const result =  e('article', { className: 'preview', id: card._id },
    e('div', { className: 'title' }, e('h2', {}, card.name)),
    e('div', { className: 'small' }, e('img', { src: card.img })));+

    result.addEventListener('click', () => createRecipePreview(card._id, result));

    return result;
}

async function createRecipePreview(id, preview) {
    const data = await request('http://localhost:3030/jsonstore/cookbook/details/' + id);

    const result =  e('article', { id: data._id },
        e('h2', {}, data.name),
        e('div', { className: 'band' },
            e('div', { className: 'thumb' }, e('img', { src: data.img })),
            e('div', { className: 'ingredients' },
                e('h3', {}, 'Ingredients:'),
                e('ul', {}, data.ingredients.map(x => e('li', {}, x)))
            )
        ),
    	e('div', { className: 'description' }, 
            e('h3', {}, 'Preparation:'),
                data.steps.map(x => e('p', {}, x)))
    );

    result.addEventListener('click', () => getRecipeById(data._id, result));
    preview.replaceWith(result);
}

async function request(url) {
    try {
        const responce = await fetch(url);
        if (responce.ok) {
            const data = await responce.json();
            return data
        } else {
            throw new Error(responce.statusText);
        }
    } catch (err) {
        throw new Error(err);
    }
}
