import {View, Text, ActivityIndicator, ScrollView } from 'react-native'
import { useMovies } from '@/presentation/hooks/useMovie';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MainSlideHow from '@/presentation/components/movies/MainSlidesHow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';

const HomeScreen = () => {
    const safeArea = useSafeAreaInsets();
    const { nowPlayingQuery , popularQuery, topRatedQuery, upcomingQuery} = useMovies();
    
    if (nowPlayingQuery.isLoading && popularQuery.isLoading && topRatedQuery.isLoading && upcomingQuery.isLoading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="purple" />
            </View>
        )
    }
    return (
        <ScrollView>
            <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
                <Text className="text-3xl px-4 font-bold">HomeScreen</Text>

                {/* Imagenes */}
                <MainSlideHow movies={nowPlayingQuery.data ?? []} />

                <MovieHorizontalList
                    title="Populares"
                    movies={popularQuery.data ?? []}
                    className="mb-5"
                />

                <MovieHorizontalList
                    title="Mejor Calificadas"
                    movies={topRatedQuery.data?.pages.flat() ?? []}
                    className="mb-5"
                    loadNextPage={topRatedQuery.fetchNextPage}
                />

                <MovieHorizontalList
                    title='Próximamente'
                    movies={upcomingQuery.data ?? []}
                    className='mb-5'
                />
                
            </View>
        </ScrollView>
    )
}

export default HomeScreen