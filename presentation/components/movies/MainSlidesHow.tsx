import { Movie } from "@/infrastructure/model/movie"
import { useRef } from "react"
import { View, Text } from "react-native"
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel'
import { useWindowDimensions } from "react-native"
import MovieImages from "@/presentation/components/movies/MovieImages"

interface Props {
    movies: Movie[]
}

const MainSlideHow = ({ movies }: Props) => {
    const ref = useRef<ICarouselInstance>(null)
    const width = useWindowDimensions().width

    return (
        <View className="h-[250px] w-full">
           
            <Carousel 
            ref={ref}
            data={movies}
            renderItem={({ item})=> MovieImages({id: item.id, poster: item.poster})}
            width={200}
            height={350}
            style={{
                width: width,
                height: 350,
                justifyContent: 'center',
                alignItems: 'center'
            }}
            mode='parallax'
            modeConfig={{
                parallaxAdjacentItemScale: 0.9,
                parallaxScrollingOffset: 50
            }}
            defaultIndex={1}
            
            />
        </View>
    )
}

export default MainSlideHow