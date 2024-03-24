import { type FC } from 'react'
import { View, Text, Image } from 'react-native'

type AvatarProps = {
  imageUrl?: string
}

export const Avatar: FC<AvatarProps> = ({ imageUrl }) => {
  return (
    <View className="rounded-full w-14 h-14 bg-gray-500 justify-center items-center">
      {imageUrl !== undefined ? (
        <Image source={{ uri: imageUrl }} className="w-14 h-14 rounded-full" />
      ) : (
        <Text className="font-subtitle text-lg text-green-400">N / A</Text>
      )}
    </View>
  )
}
