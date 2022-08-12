import React, { useState } from 'react'
import { Modal } from './modal'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { View } from 'react-native'
import { Button } from '@sharable'

export default {
  title: 'Sharable/Modal',
  component: Modal
} as ComponentMeta<typeof Modal>


const Template: ComponentStory<typeof Modal> = (args: object) => {
  const [visible, setVisible] = useState(false)
  return <View>
    <View style={{ width: 300 }}>
      <Button onPress={() => setVisible(true)}>Show popup</Button>
    </View>
    <Modal
      visible={visible}
      onClose={() => setVisible(false)}
      {...args}
    />
  </View>
}

export const Primary = Template.bind({})
Primary.args = {
  title: 'Modal Title',
  description: 'Some modal test description about some info test test test'
}
