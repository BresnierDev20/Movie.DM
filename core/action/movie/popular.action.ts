import { movieApi } from "@/core/api/endpoint" // ✅ ahora sí
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper"
import { MovieDBMoviesResponse } from "@/infrastructure/model/movie.response.db";


export const popularMoviesAction = async () => {
    try {
      const { data } = await movieApi.get<MovieDBMoviesResponse>('/popular');
  
      console.log(JSON.stringify(data, null, 2));
      const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
  
      return movies;
    } catch (error) {
      console.log(error);
      throw 'Cannot load now playing movies';
    }
};
 

