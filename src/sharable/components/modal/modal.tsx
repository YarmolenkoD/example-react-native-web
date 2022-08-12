import React, { memo } from 'react'

import { Text, View, Modal as ModalContainer } from 'react-native'

import { Button } from '@sharable'

export interface ModalProps {
  visible?: boolean
  onClose?: () => void
  description?: string
  title?: string
}

export const Modal = memo((props: ModalProps) => {
  const {
    visible = false,
    onClose = () => {},
    description = '',
    title = ''
  } = props

  return <ModalContainer
    onRequestClose={onClose}
    visible={visible}
    animationType="slide"
    transparent
  >
    <View style={{
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    }}>
      <View
        style={{
          justifyContent: 'space-between',
          maxWidth: 400,
          minHeight: 200,
          width: '100%',
          backgroundColor: '#fff',
          borderRadius: 16,
          padding: 20
        }}
      >
        {title && <Text style={{ fontSize: 20, fontWeight: '600' }}>{title}</Text>}
        {description && <Text style={{ fontSize: 14 }}>{description}</Text>}
        <Button onPress={onClose}>Close modal</Button>
      </View>
    </View>
  </ModalContainer>
})
