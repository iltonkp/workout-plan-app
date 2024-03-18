import { View, Text, Linking } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export function Card(): React.ReactElement {
  return (
    <View className="bg-black h-24 rounded-2xl p-4 mb-4 flex-row justify-start items-center gap-8">
      <View className="rounded-full w-12 h-12 bg-gray-500 justify-center items-center">
        <Text className="text-xl text-green-500">SP</Text>
      </View>
      <View className="flex1">
        <Text className="text-xl text-green-500">Supino plano (barra)</Text>

        <View className="flex-row items-center gap-4">
          <MaterialCommunityIcons name="youtube" color="red" size={24} />
          <Text
            className="text-lg text-blue-600 underline"
            onPress={async () =>
              await Linking.openURL(
                'https://www.youtube.com/watch?v=wLR6s-lbvpQ',
              )
            }
          >
            Go to youtube
          </Text>
        </View>
      </View>
    </View>
  )
}
