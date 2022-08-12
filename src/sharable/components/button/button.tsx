import React, { memo, ReactElement } from 'react'
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  TouchableOpacityProps,
  TextStyle
} from 'react-native'

const PRIMARY_COLOR = '#1b5b9d'
const SECONDARY_COLOR = '#66c06f'

const BUTTON_STYLES: ViewStyle = {
  width: '100%',
  backgroundColor: PRIMARY_COLOR,
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 12,
  alignItems: 'center',
  justifyContent: 'center'
}

const BUTTON_TEXT_STYLES: TextStyle = {
  color: '#fff',
  fontSize: 16
}

export interface ButtonProps extends TouchableOpacityProps {
  children?: ReactElement|string
  backgroundColor?: string
  primary?: boolean
  label?: string
}

export const Button = memo((props: ButtonProps) => {
  const {
    children,
    primary = true,
    label = 'Button',
    backgroundColor = primary ? PRIMARY_COLOR : SECONDARY_COLOR,
    style = {}
  } = props

  return <TouchableOpacity
    activeOpacity={0.8}
    {...props}
    style={[
      BUTTON_STYLES,
      { backgroundColor },
      style
    ]}
  >
    <Text style={BUTTON_TEXT_STYLES}>{children || label}</Text>
  </TouchableOpacity>
})
