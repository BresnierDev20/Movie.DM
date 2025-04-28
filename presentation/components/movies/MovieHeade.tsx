import {View, Text, Image, useWindowDimensions, Pressable} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    poster: string
    title: string
    original_title: string
}

const MovieHeader = ({poster, title, original_title}:Props) => {
    const {height: screenCustom} = useWindowDimensions()

  return (  
    <>
        <LinearGradient 
        colors={['rgba(0,0,0,0,3)', 'transparent']}
        start={[0,0]}
        style={{
            height: screenCustom * 0.4,
            position: 'absolute',
            zIndex: 1,
            width: '100%',
        }}
        
        />

        <View style={{position: 'absolute', zIndex: 99, elevation: 9, top: 40, left:10}}>
            <Pressable onPress={() => router.dismiss()}>
                <Ionicons name='arrow-back' size={30} color='black' className='shadow'/>
            </Pressable>
        </View>

        <View style={{height: screenCustom * 0.7}} className="shadow-xl shadow-black/20">
            <View className='flex-1 rounded-b-[25px] overflow-hidden'> 
                <Image source={{uri: poster}} resizeMode='cover' className='flex-1'/>
            </View>
           
        </View>

        <View className='px-5 mt-6'>
            <Text className='font-normal '> { original_title}</Text>
            <Text className='font-bold text-2xl '> { title}</Text>
        </View>
        
    </>
  )
}

export default MovieHeader


