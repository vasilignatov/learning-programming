async function solution() {

    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;
    const main = document.getElementById('main');
    try {
        const responce = await fetch(url);

        if (!responce.ok) {
            throw new Error(responce.status);
        }

        const data = await responce.json();
        Object.values(data)
            .map(createPreview)
            .forEach(x => main.appendChild(x))

    } catch (err) {
        alert(err.message);
    }

}


function createPreview(el) {
    const extraDiv = e('div', { className: 'extra' }, e('p', {}));
    const result = e('div', { className: 'accordion' },
        e('div', { className: 'head' },
            e('span', {}, el.title),
            e('button', { className: 'button', id: el._id, onclick: (ev) => toggleArticle(el._id, ev.target, extraDiv) }, 'MORE')),
        extraDiv
    )

    return result;
}


async function getMoreInfo(id, pEl) {
    const urlId = `http://localhost:3030/jsonstore/advanced/articles/details/` + id;

    try {
        const responceId = await fetch(urlId);
        const dataId = await responceId.json();
        pEl.textContent = dataId.content;
        
    } catch (err) {
        alert(err.message);
    }
}

function toggleArticle(id, btnRef, extraRef) {
    const pEl = extraRef.children[0];
    if (btnRef.textContent == 'MORE') {
        btnRef.textContent = 'LESS';
        getMoreInfo(id, pEl);
        extraRef.style.display = 'block';

    } else {
        extraRef.style.display = 'none';
        btnRef.textContent = 'MORE';
        pEl.texContent = '';
    }
}



window.addEventListener('load', () => solution());


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