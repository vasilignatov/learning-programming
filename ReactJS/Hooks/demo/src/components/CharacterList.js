import { useFetch } from '../hooks/useFetch.js';
const CharacterList = () => {

    const characters = useFetch('https://swapi.dev/api/people');

    return (
        <ul>
            {characters.map(c => <li key={c.name}>{c.name}</li>)}
        </ul>
    );
}

export default CharacterList;