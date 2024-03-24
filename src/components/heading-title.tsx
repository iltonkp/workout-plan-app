import { type FC } from 'react'
import { View, Text } from 'react-native'

type HeadingTitleProps = {
  label: string
}

export const HeadingTitle: FC<HeadingTitleProps> = ({ label }) => {
  return (
    <View className="border-b-2 border-green-400 w-auto py-4">
      <Text className="text-2xl text-white font-heading">{label}</Text>
    </View>
  )
}
