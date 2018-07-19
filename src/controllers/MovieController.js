import MovieService from '../service/MovieService';

export async function getMovie(req, res) {
    const id = req.swagger.params.id.value;
    let service = new MovieService();
    try {
        let movie = service.get(id);
        return res.json(movie);
    } catch (err) {
        return res.status(404).send({ message: err.message });
    }
}

export async function getMovies(req, res) {
    let service = new MovieService();
    try {
        let movies = service.get();
        return res.json(movies);
    } catch (err) {
        return res.status(404).send({ message: err.message });
    }
}

export async function deleteMovie(req, res) {
    const id = req.swagger.params.id.value;
    let service = new MovieService();
    try {
        service.delete(id);
        return res.status(204).send();
    } catch (err) {
        return res.status(404).send({ message: err.message });
    }
}

export async function postMovie(req, res) {
    let movie = req.swagger.params.body.value;
    let service = new MovieService(movie);
    try {
        let result = service.create(movie);
        return res.status(201).json(result);
    } catch (err) {
        return res.status(404).send({ message: err.message });
    }
}