import '@/styles/global.css'

import { StatusBar } from 'react-native'
import { Slot } from 'expo-router'

export default function Layout(): React.ReactElement {
  return (
    <>
      <StatusBar />
      <Slot />
    </>
  )
}
