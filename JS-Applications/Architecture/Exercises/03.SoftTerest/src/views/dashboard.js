import { getIdeas } from '../api/data.js';
import { e } from '../dom.js'

export function setupDash(section, navigation) {

    section.addEventListener('click', ev => {
        if( ev.target.classList.contains('btn')) {
            ev.preventDefault();
            const ideaId = ev.target.id;
            navigation.goTo('details', ideaId);
        }
    });

    return showDash;

    async function showDash() {
        section.inenrHTML = '';
        
        const ideas = await getIdeas();

        if (ideas.length == 0) {
            section.appendChild(e('h1', {}, 'No ideas yet! Be the first one :)'))
        } else {
            const cards = ideas.map(createIdeaPreview);
            cards.forEach(c => section.appendChild(c));
        }
        return section;
    }
}

function createIdeaPreview(idea) {
    const result = e('div', { className: 'card overflow-hidden current-card details' });
    result.style.width = '20rem';
    result.style.height = '18rem';

    const div = e('div', { className: "card-body" }, e('p', { className: 'card-text' }, idea.title));
    result.appendChild(div)

    const img = e('img', { className: 'card-image', src: idea.img, alt: 'Card image cap' })
    result.appendChild(img);

    const detailsBtn = e('a', { id: idea._id, className: 'btn', href: '' }, 'Details');
    result.appendChild(detailsBtn);

    return result;
}

