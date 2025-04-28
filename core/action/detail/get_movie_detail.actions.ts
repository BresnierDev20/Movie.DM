import { movieApi } from "@/core/api/endpoint" // ✅ ahora sí
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper"
import { MovieDetailResponse } from "@/infrastructure/model/moviedb_detail.respose";
import { MovieDetail } from "@/infrastructure/model/movie";


export const getMovieDetailAction = async (id: number | string):Promise<MovieDetail> => {
    try {
        const { data } = await movieApi.get<MovieDetailResponse>(
            `/${id}`
        );

        console.log('Pelicula - HTPP cargado');


        return MovieMapper.fromTheMovieDBToMovieDetail(data);

    } catch (error) {

        console.log(error);
        throw 'cannot load now playing movies';
    }

    
}