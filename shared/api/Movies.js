import Base from './Base';

export default class MoviesAPI extends Base {
    list(params) {
        return this.apiClient.get(`movies`, {}, params );
    }

    show(params) {
        return this.apiClient.get(`movies/${params.id}`, {} );
    }

    getCart(params) {
        return (localStorage.movies) ? JSON.parse(localStorage.movies) : [];
    }

    addMovie(id) {
        if (process.env.BROWSER) {
            const movies  = localStorage.movies ? JSON.parse(localStorage.movies) : [];

            movies.push(id);
            localStorage.movies = JSON.stringify(movies);
        }
    }

    removeMovie(id) {
        if (process.env.BROWSER) {
            const movies  = localStorage.movies ? JSON.parse(localStorage.movies) : [];

            const newMovies = movies.filter( m => m !== id);
            localStorage.movies = JSON.stringify(newMovies);
        }
    }
}
