// import { ManagerFs } from '../../managers/manager-fs.js';
import mongocursor from '../../mongo/mongoClient.js'

//'./data/movies.json'
// let movies = await mongocursor.run();

class Movies {

    constructor() {
        // this.mgfl = new ManagerFs('./data/movies.json');
        // this.movies = movies;

    }

    async getMovies() {
        // mongocursor.MongoClient();
        let movies = await mongocursor.getmovies();
        console.log(movies);
        return movies;
    }

    async getMovieById(id) {
        id = parseInt(id);
        console.log(`---> movies::getMovieById = ${id}`);
        let movies = await mongocursor.getMovieById(id);
        return movies;
    }

    async getMovieBy(elem) {
        console.log(`---> movies::getMovieBy = ${elem.value}`);
        // if (Object.values(elem)[0].isInteger){
        //     Object.values(elem)[0] = Object.values(elem)[0];

        //     // Object.values(elem)[0] = parseInt(Object.values(elem)[0]);
        // }
        let movies = await mongocursor.getMovieBy(elem);
        return movies;
        // return this.movies.filter(element => element[elem.key] == elem.value);
    }

    async removeMovie(id) {
        id = parseInt(id);
        console.log(`---> movies::removeMovieById = ${id}`);
        let movies = await mongocursor.removeMovie(id);
        return movies;
    }

    async createMovie(req) {
        console.log(`---> movies::createMovie = ${req.id}`);
        let movies = await mongocursor.createMovie(req);
        return movies;
    }

    async updateMovie(req) {
        console.log(`---> movies::updateMovie`);

        const movie = await this.getMovieById(req.id);
        if (typeof movie != 'undefined') {
            await this.removeMovie(req.id);
            await this.createMovie(req);
        }
    }

    // async getMovieByActor(elem) {
    //     console.log(`---> movies::getMovieBy = ${elem.value}`);
    //     Object.keys(elem)[0]="actors";
    //     let movies = await mongocursor.getMovieBy(elem);
    //     return movies;
    // }

    async addActorToMovie(element){
        console.log('movies.addactortoMovie----> '+element.id);
        await mongocursor.addActor(element);
    }
}

export default new Movies();