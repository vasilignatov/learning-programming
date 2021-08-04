import { e } from './dom.js';

async function getLikesByMovieId(id) {
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22&distinct=_ownerId&count`);
    const data = await response.json();
    return data;
}

async function getOwnLikesByMovieId(id) {
    const userId = sessionStorage.getItem('userId');
    const response = await fetch(`http://localhost:3030/data/likes?where=movieId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22`);
    const data = await response.json();
    return data;
}

async function getMovieById(id) {
    const response = await fetch(`http://localhost:3030/data/movies/${id}`);
    const data = await response.json();
    return data;
}


function createMovieCard(movie) {

    const controls = e('div', { className: 'col-md-4 text-center' },
        e('h3', { className: 'my-3' }, 'Movie Description'),
        e('p', {}, movie.description));

    const userId = sessionStorage.getItem('userId');

    if (userId) {
        if (userId == movie._ownerId) {
            controls.appendChild(e('a', { className: 'btn btn-danger', href: '#' }, 'Delete'));
            controls.appendChild(e('a', { className: 'btn btn-warning', href: '#' }, 'Edit'));
        } else if(ownLike.length == 0){
            controls.appendChild(e('a', { className: 'btn btn-primary', href: '#', onClick: likeMovie }, 'Like'));
        }
    }
    const likeSpan = e('span', { className: 'enrolled-span' }, likes + 'like' + (likes == 1 ? '' : 's'))
    controls.appendChild(likeSpan);



    const element = e('div', { className: 'container' }, e('div', { className: 'row bg-light text-dark' },
        e('h1', {}, `Movie title: ${movie.title}`),
        e('div', { className: 'col-md-8' }, e('img', { className: 'img-thumbnail', src: movie.img })),
        controls)
    );

    return element;

    async function likeMovie(event) {
        const responce = await fetch('http://localhost:3030/data/movies/', {
            method: 'post',
            headers: { 'Content-Type': 'application/json', 'X-Authorization': sessionStorage.getItem('authToken') },
            body: JSON.stringify({movieId: movie._id, })
        })

        if(responce.ok) {
            event.target.remove();
            likes++;
            likeSpan.textContent = likes + 'like' + (likes == 1 ? '' : 's');
        }
    }
}


let main;
let section;

export function setupDetails(mainTarget, sectionTarget) {
    main = mainTarget;
    section = sectionTarget;
}

export async function showDetails(id) {
    section.innerHTML = '';
    main.innerHTML = '';
    main.appendChild(section);

    const [movie, likes, ownLike] = await Promise.all([
        getMovieById(id),
        getLikesByMovieId(id),
        getOwnLikesByMovieId(id)
    ])
    const card = createMovieCard(movie, likes, ownLike);
    section.appendChild(card);

}