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
      padding: 100,
      height: '100vh',
      backgroundColor: '#fff'
    }}>
      <View style={{ width: '400px' }}>
        <TextField placeholder="Email" />
        <View style={{ marginTop: 15, width: '100%' }}>
          <TextField placeholder="Password" secureTextEntry />
        </View>
        <View style={{ marginTop: 15, width: '100%' }}>
          <Button style={{ height: 100 }} onPress={handleModal}>Primary Button</Button>
        </View>
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
