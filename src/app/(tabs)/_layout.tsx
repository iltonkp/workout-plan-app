import { View } from 'react-native'
import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { colors } from '@/styles/colors'

export default function TabLayouts(): React.ReactElement {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.green[400],
          tabBarInactiveTintColor: colors.white,
          tabBarStyle: {
            backgroundColor: colors.black,
            borderBlockColor: colors.black,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="weight-lifter"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="exercises"
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name="clipboard-text-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  )
}
