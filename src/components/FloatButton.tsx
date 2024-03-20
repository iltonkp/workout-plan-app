import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'

type FloatButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap
}

export function FloatButton({
  icon,
  ...rest
}: FloatButtonProps): React.ReactElement {
  return (
    <TouchableOpacity
      className="px-8 py-4 bg-black rounded-full absolute bottom-4 right-5 flex-row gap-2 items-center"
      activeOpacity={0.7}
      {...rest}
    >
      <MaterialCommunityIcons name={icon} size={22} color={colors.green[400]} />

      <Text className="font-subtitle text-green-400">Add</Text>
    </TouchableOpacity>
  )
}
