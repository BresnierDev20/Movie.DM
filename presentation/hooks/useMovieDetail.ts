// import React from 'react'

import { useQuery } from '@tanstack/react-query'
import { getMovieDetailAction } from '@/core/action/detail/get_movie_detail.actions'
import { getMovieCastAction } from '@/core/action/detail/get_movie_cast.actions'

export const useMovieDetail = (id: number ) => {

    const movieQuery = useQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovieDetailAction(id),
        staleTime: 1000 * 60 * 60 * 24,
    })

    const castQuery = useQuery({
        queryKey: ['movie', id, 'cast'],
        queryFn: () => getMovieCastAction(id),
        staleTime: 1000 * 60 * 60 * 24,
      });

    return {
        movieQuery,
        castQuery
    }
}

