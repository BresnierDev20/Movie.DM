import { movieApi } from "@/core/api/endpoint" // ✅ ahora sí
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper"
import { MovieDBMoviesResponse } from "@/infrastructure/model/movie.response.db";

export const upcomingMoviesAction = async () => {
    try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/upcoming');
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    
    return movies;

    } catch (error) {
        console.log(error);
        throw 'Cannot load top_rated movies';
    }
};