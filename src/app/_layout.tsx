import '@/styles/global.css'

import { StatusBar, View } from 'react-native'
import { Slot } from 'expo-router'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

export default function Layout(): React.ReactElement {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" />
      {fontsLoaded === true && <Slot />}
    </View>
  )
}
