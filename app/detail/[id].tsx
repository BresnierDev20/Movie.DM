import { getMovieDetailAction } from '@/core/action/detail/get_movie_detail.actions'
import { useLocalSearchParams } from 'expo-router'
import {useMovieDetail} from '@/presentation/hooks/useMovieDetail'
import { View, Text, ActivityIndicator, ScrollView, Modal } from 'react-native';
import MovieHeader from '@/presentation/components/movies/MovieHeade';
import MovieDescription from '@/presentation/components/movies/MovieDescription';
import MovieCast from '@/presentation/components/movies/MovieCast';

const MovieDetail = () => {
    const {id} = useLocalSearchParams()
    const { movieQuery, castQuery } = useMovieDetail(+id)

    if (movieQuery.isLoading || !movieQuery.data) {
        return (
            <View className="flex flex-1 justify-center items-center">
                <Text className="mb-4">Espere por favor</Text>
                <ActivityIndicator color="purple" size={30} />
            </View>
        );
    }

    return (
        <ScrollView>
          
            <MovieHeader 
                original_title={movieQuery.data.originalTitle}
                poster={movieQuery.data.poster}
                title={movieQuery.data.title}
            />

            <MovieDescription movie = {movieQuery.data}/>

            <MovieCast cast={castQuery.data ?? []} />
            
        </ScrollView>
    )
}


export default MovieDetail
