function movies(input) {
    let movies = [];
    for (const line of input) {
        if (line.includes('addMovie')) {
            let name = line.substring(9);
            let currentMovie = { name };
            movies.push(currentMovie);
        } else if (line.includes('directedBy')) {
            let [movie, director] = line.split(' directedBy ');
            let myMovie = movies.find(x => x.name === movie);

            if (myMovie) {
                myMovie.director = director;
            }
        } else {
            let [movie, date] = line.split(' onDate ');
            let myMovie = movies.find(x => x.name == movie);
            if (myMovie) {
                myMovie.date = date;

            }
        }
    }
    movies.forEach( movie =>{
        if(movie.name && movie.director && movie.date){
            console.log(JSON.stringify(movie));
        }
    })
    
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)