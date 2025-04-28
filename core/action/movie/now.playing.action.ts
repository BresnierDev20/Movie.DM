import { movieApi } from "@/core/api/endpoint" // ✅ ahora sí
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper"
import { MovieDBMoviesResponse } from "@/infrastructure/model/movie.response.db";

export const nowPlayingAction = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponse>('/popular');
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
    // console.log(movies);
    return movies;
  } catch (error) {
    console.log(error);
    throw 'cannot load now playing movies';
  }
};