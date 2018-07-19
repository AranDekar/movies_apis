const movies = [];

// just because I love pure javascript old fashion coding sometimes 😊
function MovieService({ id, title, plot, releaseDate, actors, duration, poster, rating } = {}) {
    this.id = id;
    this.title = title;
    this.plot = plot;
    this.releaseDate = releaseDate;
    this.actors = actors;
    this.duration = duration;
    this.poster = poster;
    this.rating = rating;
}
MovieService.prototype = {
    constructor: MovieService,
    create : (movie) => {
        if (!movie){
            throw new Error(`❌ movie is not properly sent`);
        }
        if (movies.findIndex(x => x.id === movie.id) > -1) {
            throw new Error(`❌ movie with the id: ${movie.id} is already posted`);
        }
        movies.push(movie);
        return movie;
    },
    delete : (id) => {
        let index = movies.findIndex(x => x.id === id);
        if (index === -1) {
            throw new Error(`❌ movie with the id: ${id} not found`);
        }
        movies.splice(index, 1);
    },
    get : (id = null) => {
        if (id) {
            let movie = movies.find(x => x.id === id);
            if (!movie) {
                throw new Error(`❌ movie with the id: ${id} not found`);
            }
            return movie;
        }else{
            return movies;
        }
    }
};

export default MovieService;