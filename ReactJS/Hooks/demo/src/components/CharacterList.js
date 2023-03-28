import { useFetch } from '../hooks/useFetch.js';
const CharacterList = () => {

    const {state} = useFetch('https://swapi.dev/api/people');

    return (
        <ul>
            {state.map(c => <li key={c.name}>{c.name}</li>)}
        </ul>
    );
}

export default CharacterList;