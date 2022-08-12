import React from 'react'
import { TextField } from './text-field'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { View } from 'react-native'

export default {
  title: 'Sharable/TextField',
  component: TextField
} as ComponentMeta<typeof TextField>


const Template: ComponentStory<typeof TextField> = (args: object) => (
  <View style={{ width: 300 }}>
    <TextField
      {...args}
    />
  </View>
)

export const Primary = Template.bind({})
Primary.args = {
  placeholder: 'Placeholder'
}
