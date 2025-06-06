import { Movie } from '../model/movie'
import { MovieDetail } from '../model/movie'
import { Result } from '../model/movie.response.db'
import { MovieDetailResponse } from '../model/moviedb_detail.respose'

export class MovieMapper {
    static fromTheMovieDBToMovie = (movie: Result): Movie => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average
        }
    }

    static fromTheMovieDBToMovieDetail = (movie: MovieDetailResponse): MovieDetail  => {
        return {
            id: movie.id,
            title: movie.title,
            description: movie.overview,
            releaseDate: new Date(movie.release_date),
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`,
            rating: movie.vote_average,
            budget: movie.budget,
            duration: movie.runtime,
            genres: movie.genres.map((g) => g.name),
            originalTitle: movie.original_title,
            productionCompanies: movie.production_companies.map((c) => c.name),
        }
    }
}