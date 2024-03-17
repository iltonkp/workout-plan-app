import { Tabs } from 'expo-router'
import { View } from 'react-native'

export default function TabLayouts(): React.ReactElement {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen name="index" />
      </Tabs>
    </View>
  )
}
