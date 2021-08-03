import { showDetails } from './details.js';

export async function getAllMovies() {
    const responce = await fetch('http://localhost:3030/data/movies');
    const data = await responce.json();

    // if (!responce.ok) {
    //     const error = await responce.json();
    //     throw new Error(error.message)
    // }

    return data;
}

function createMoviePreview(movie) {
    const element = document.createElement('div');
    element.className = 'card mb-4';
    element.innerHTML = `
         <img class="card-img-top" src="${movie.img}"
                alt="Card image cap" width="400">
        <div class="card-body">
                <h4 class="card-title">${movie.title}</h4>
        </div>
        <div class="card-footer">
            <button id="${movie._id}" type="button" class="btn btn-info movieDetailsLink">Details</button>
        </div>`;

    return element;
}

let main;
let section;
let container;



export function setupHome(mainTarget, sectionTarget) {
    main = mainTarget
    section = sectionTarget
    container = section.querySelector('.card-deck.d-flex.justify-content-center');

    container.addEventListener('click', event => {
        if (event.target.classList.contains('movieDetailsLink')) {
            showDetails(event.target.id);
        }
    })
}

export async function showHome() {
    container.innerHTML = 'Loading...';
    main.innerHTML = '';
    main.appendChild(section);

    const movies = await getAllMovies();
    const cards = movies.map(createMoviePreview);

    const fragment = document.createDocumentFragment();
    cards.forEach(m => fragment.appendChild(m));

    container.innerHTML = '';
    container.appendChild(fragment);
}