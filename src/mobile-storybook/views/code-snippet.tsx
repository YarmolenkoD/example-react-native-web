import * as React from 'react'
import { ViewStyle, View, Text, TextStyle } from 'react-native'

export interface CodeProps {
  value?: string
  style?: ViewStyle
}

const ROOT: ViewStyle = {
  padding: 10,
  backgroundColor: '#3d3c3c'
}

const TEXT: TextStyle = {
  color: '#cbb07a'
}

export function Code (props: CodeProps) {
  console.log(111111111111, props.value)
  return (
    <View style={[ROOT, props.style]}>
      <Text style={TEXT}>{props.value}</Text>
    </View>
  )
}
