import {View, Text} from 'react-native'
import { MovieDetail } from '@/infrastructure/model/movie'
import { FormatterDate } from '@/config/helpers/formatter'

interface Props {
    movie: MovieDetail
}
const MovieDescription = ({movie}: Props) => {
  return (
    <View className='mx-5'>
        <View className='flex flex-row'>
            <Text > { movie.rating} </Text>
            <Text > { movie.genres.join(', ')} </Text>
        </View>

        <Text className='mt-5 font-normal'> Historia </Text>
        <Text className='text-justify font-bold'> {movie.title} </Text>
        {/* <Text className='mt-2'> {movie.description} </Text> */}
        <Text className="font-bold mt-2 text-2xl">
        {FormatterDate.currency(movie.budget)}
        </Text>
    </View>
  )
}

export default MovieDescription
