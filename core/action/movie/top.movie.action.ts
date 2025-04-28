import { movieApi } from "@/core/api/endpoint" // ✅ ahora sí
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper"
import { MovieDBMoviesResponse } from "@/infrastructure/model/movie.response.db";

interface Opcions {
 page?: number;
 limit?: number;
}


export const topRatedMoviesAction = async ({page = 0, limit = 10}:Opcions) => {
    try {
        const { data } = await movieApi.get<MovieDBMoviesResponse>('/top_rated', {
            params: {
                page: page,
            }
        });
        
        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
         
    // console.log(JSON.stringify(data, null, 2));
        return movies;

    } catch (error) {
        console.log(error);
        throw 'Cannot load top_rated movies';
    } 
};
