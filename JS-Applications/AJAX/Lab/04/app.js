async function getRecipieList() {

    const url = `http://localhost:3030/jsonstore/cookbook/recipes`;
    const main = document.querySelector('main');
    try {
        const responce = await fetch(url)

        if (!responce.ok) {
            throw new Error(responce.statusText)
        }

        const recipies = await responce.json();
        main.innerHTML = '';

        Object.values(recipies)
            .map(createPreview)
            .forEach(r => main.appendChild(r))

    } catch (err) {
        alert(err.message);
    }
}

function createPreview(r) {
    const result = e('article', { className: 'preview' },
        e('div', { className: 'title' }, e('h2', {}, r.name)),
        e('div', { className: 'small' }, e('img', { src: r.img }))
    );

    result.addEventListener('click', () => getRecipieDetails(r._id, result))

    return result;

}

async function getRecipieDetails(id, preview) {
    const url = `http://localhost:3030/jsonstore/cookbook/details/` + id;

    const responce = await fetch(url);
    const data = await responce.json();

    const result = e('article', {},
        e('h2', { onClick: toggleCard}, data.name),
        e('div', { className: 'band' },
            e('div', { className: 'thumb' },
                e('img', { src: data.img })),
            e('div', { className: 'ingredients' },
                e('h3', {}, 'Ingredients:'),
                e('ul', {}, data.ingredients.map(i => e('li', {}, i)))
            )
        ),
        e('div', { className: 'description' },
            e('h3', {}, 'Preparation:'),
            data.steps.map(s => e('p', {}, s))
        )
    );
    console.log(result);
    preview.replaceWith(result);

    function toggleCard() {
        result.replaceWith(preview)
    }
}

window.addEventListener('load', () => getRecipieList());


function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }


    content.forEach(e => {
        if (typeof e == 'string') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}



    // USING FETCH API

    // fetch(url)
    //     .then(responce => responce.json())
    //     .then(recipies => {
    //         main.innerHTML = '';
    //         Object.values(recipies).forEach(r => {
    //            const result = e('article', { className: 'preview' },
    //                 e('div', { className: 'title' }, e('h2', {}, r.name)),
    //                 e('div', { className: 'small' }, e('img', { src: r.img }))
    //             );
    //             main.appendChild(result);
    //         });
    //     });


    // USING Async/Await