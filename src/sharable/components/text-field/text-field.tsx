import React, { memo } from 'react'
import { TextInput, TextStyle } from 'react-native'

const FIELD_STYLES: TextStyle = {
  width: '100%',
  backgroundColor: '#fff',
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 12,
  alignItems: 'center',
  justifyContent: 'center',
  color: '#000',
  borderWidth: 1,
  borderColor: '#b2abab'
}

export const TextField = memo((props: any) => {
  return <TextInput
    placeholderTextColor='#888b91'
    autoCapitalize='none'
    autoCorrect={false}
    style={FIELD_STYLES}
    {...props}
  />
})
