import { nowPlayingAction } from '@/core/action/movie/now.playing.action'
import { popularMoviesAction } from '@/core/action/movie/popular.action'
import { topRatedMoviesAction } from '@/core/action/movie/top.movie.action'
import { upcomingMoviesAction } from '@/core/action/movie/upcoming.action'
import {useInfiniteQuery, useQuery} from '@tanstack/react-query'

export const useMovies = () => {
    // Queries
    const nowPlayingQuery = useQuery({
      queryKey: ['movies', 'nowPlaying'],
      queryFn: nowPlayingAction,
      staleTime: 1000 * 60 * 60 * 24, // 24horas
    });
  
    const popularQuery = useQuery({ // el useQuery es para hacer solicitudes simples
      queryKey: ['movies', 'popular'],
      queryFn: popularMoviesAction,
      staleTime: 1000 * 60 * 60 * 24, // 24horas
    });

    const topRatedQuery = useInfiniteQuery({ // el useInfiniteQuery es para hacer solicitudes paginadas
        initialPageParam: 1,
        queryKey: ['movies', 'top_rated'],
        queryFn: ({ pageParam }) => {
            console.log({ pageParam }); 
            return topRatedMoviesAction({ page: pageParam }); // 
        },
        staleTime: 1000 * 60 * 60 * 24, // 24 horas
        getNextPageParam: (lastPage, pages) => pages.length + 1,
    });

    
    const upcomingQuery = useQuery({
      queryKey: ['movies', 'upcoming'],
      queryFn: upcomingMoviesAction,
      staleTime: 1000 * 60 * 60 * 24, // 24horas
    });
  
    return {
      nowPlayingQuery,
      popularQuery,
      topRatedQuery,
      upcomingQuery,
    };
};
  