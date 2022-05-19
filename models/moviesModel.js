import movie from './movies/movies.js';
import actor from './actors/actors.js';
import messagesapp from "../data/messages.js";

class MoviesModel {

    async getMovies() {
        console.log("---> moviesModel::getMovies");
        const movies = await movie.getMovies();
        return movies;
    }

    async getMovieById(id) {
        console.log(`---> moviesModel::getMovieById = ${id}`);
        const _movie = await movie.getMovieById(id);
        return _movie;
    }

    async removeMovie(id) {
        console.log(`---> moviesModel::removeMovie = ${id}`);
        const index = await movie.removeMovie(id);
        if (index != -1) { actor.removeActors(id) }
        return index;
    }

    async getMovieBy(elem) {
        console.log(`---> moviesModel::getMovieBy = ${elem.value}`)
        const _movies = await movie.getMovieBy(elem);
        return _movies;
    }

    async createMovie(req) {
        console.log(`---> moviesModel::createMovie = ${req.id}`);
        let movies = await movie.createMovie(req);
        return movies;
    }

    async updateMovie(req) {
        console.log(`---> moviesModel::updateMovie = ${req.id}`);
        const new_movie = req;
        await movie.updateMovie(new_movie);
        // if (typeof _movie == 'undefined')
        //     throw new Error(messagesapp.movie_error_update);
        this.getMovies();
    }

    async getMoviesFromActor(req) {
        console.log(`---> moviesModel::getMoviesFromActor = ${req.id}`);
        const _movies = await movie.getMovieByActor(req);
        return _movies;
    }

    async addActors(req) {
        console.log(`---> moviesModel::addActors = ${req.id}`);
        await movie.addActorToMovie(req);
        return this.getMovieById(req.id);
    }

}

export default new MoviesModel()