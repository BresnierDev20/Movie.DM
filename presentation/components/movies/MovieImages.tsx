import { router } from 'expo-router'
import { View, Image, Pressable } from 'react-native'


interface Props {
    poster: string
    id: number
    smallPoster?: boolean
    className?: string
}

const MovieImages = ({id, poster, smallPoster, className}: Props) => {
  return (
    <Pressable className={`active:scale-95 px-2 ${className}`} onPress={() => router.push(`/detail/${id}`)}>
        <Image
        source={{uri: poster}}
        className={'shadow-lg rounded-2xl w-full h-full'}
        style={{
            width: smallPoster ? 80 : 150,
            height: smallPoster ? 130 : 250
        }}
        resizeMode='cover'
        >

        </Image>
    </Pressable>
  )
}

export default MovieImages


/*

    Que hace cada propiedades  de Vistas

shadow-lg : Sombra grande

rounded-2xl: Aplica un radio de borde extra grande a todos los bordes del element

w-full: Establece el ancho del elemento al 100% de su contenedor padre

h-full: Establece la altura del elemento al 100% de su contenedor padre

resizeMode='cover', la imagen se escala proporcionalmente para llenar completamente el contenedor

active:scale-95: Aplica una escala del 95% al elemento cuando se presiona, creando un efecto de retroceso

px-2: Aplica un relleno horizontal de 2 unidades al elemento
*/




