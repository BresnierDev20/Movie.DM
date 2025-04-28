
import { movieApi } from '@/core/api/endpoint';
import { MovieDBCreditsResponse } from '@/infrastructure/model/movie.db.casting';
import { CastMapper } from '@/infrastructure/mappers/cast.mapper';

export const getMovieCastAction = async (movieId: number) => {
    try {
      const { data } = await movieApi.get<MovieDBCreditsResponse>(
        `/${movieId}/credits`
      );
  
      return data.cast.map(CastMapper.fromMovieDBCastToEntity);
    } catch (error) {
      console.log(error);
      throw 'Cant load cast by id';
    }
  };