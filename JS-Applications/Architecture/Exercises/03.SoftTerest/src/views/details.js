import { getIdeaById } from '../api/data.js';
import { e } from '../dom.js';


export function setupDetails(section, navigation) {

    return showDetails;

    async function showDetails(id) {
        section.innerHTML = '';

        const idea = await getIdeaById(id);
        console.log(idea);
        const card = createIdeaDetails(idea);
        console.log(card);
        section.appendChild(card);

        return section;
    }
}

function createIdeaDetails(idea) {
    const fragment = document.createDocumentFragment();
    fragment.appendChild(e('img', { className: "det-img", src: idea.img }));
    fragment.appendChild(e('div', { className: "desc" },
                            e('h2', { className: "display-5"}, idea.title),
                            e('p', {className:'infoType'}, 'Description:'),
                            e('p', { className: 'idea-description' }, idea.description)
                            ));
    fragment.appendChild('div', {className: 'text-center'}, e('a', {className: 'btn detb'}, 'Delete'));

    return fragment;
}

