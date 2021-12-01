import { getIdeaDetailsById } from '../api/data.js';
import { e } from '../dom.js
';


export function setupDetails(section, navigation) {

    return showDetails;

    async function showDetails(id) {
        const idea = await getIdeaDetailsById(id);
        console.log(idea);

        return section;
    }
}

function createDetails(idea) {
    // const result = 


    // return result
}

