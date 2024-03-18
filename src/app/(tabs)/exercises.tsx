import { ScrollView } from 'react-native'
import { Card } from '@/components/Card'

export default function Exercises(): React.ReactElement {
  return (
    <ScrollView className="flex-1 bg-gray-800 pt-16 px-4">
      <Card />
      <Card />
    </ScrollView>
  )
}
