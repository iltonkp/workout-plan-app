import { type FC } from 'react'
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'

type FloatButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialCommunityIcons.glyphMap
  label: string
}

export const FloatButton: FC<FloatButtonProps> = ({ icon, label, ...rest }) => {
  return (
    <TouchableOpacity
      className="px-8 py-4 bg-green-400 rounded-full absolute bottom-4 right-5 flex-row gap-2 items-center"
      activeOpacity={0.7}
      {...rest}
    >
      {icon !== undefined && (
        <MaterialCommunityIcons name={icon} size={22} color={colors.black} />
      )}

      <Text className="text-black font-bold text-md">{label}</Text>
    </TouchableOpacity>
  )
}
