import React, { useState } from 'react'
import { View } from 'react-native'

import { Button, Modal, TextField } from '@sharable'

const App = () => {
  const [visible, setVisible] = useState(false)

  const handleModal = () => setVisible(!visible)

  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      paddingHorizontal: 20
    }}>
      <TextField placeholder="Email" />
      <View style={{ marginTop: 15, width: '100%' }}>
        <TextField placeholder="Password" secureTextEntry />
      </View>
      <View style={{ marginTop: 15, width: '100%' }}>
        <Button onPress={handleModal}>Primary Button</Button>
      </View>
      <Modal
        visible={visible}
        onClose={handleModal}
        title="Modal Title"
        description="Some modal test description about some info test test test"
      />
    </View>
  )
}

export default App
