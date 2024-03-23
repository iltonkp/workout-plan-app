import { useCallback, type FC } from 'react'
import { Linking, View, Text, Alert } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

type YoutubeLinkProps = {
  videoCode: string
}

export const YoutubeLink: FC<YoutubeLinkProps> = ({ videoCode }) => {
  const handleYoutubeLink = useCallback(async () => {
    const url = 'https://www.youtube.com/watch?v=' + videoCode
    const isValidLink = await Linking.canOpenURL(url)

    if (isValidLink) {
      await Linking.openURL(url)
    } else {
      Alert.alert(
        'Something went wrong',
        'Sorry, but was not possible to open this video 😟',
      )
    }
  }, [videoCode])

  return (
    <View className="flex-row items-center gap-2">
      <MaterialCommunityIcons name="youtube" color="red" size={24} />
      <Text
        className="text-lg text-blue-600 underline"
        onPress={handleYoutubeLink}
      >
        Go to youtube
      </Text>
    </View>
  )
}
