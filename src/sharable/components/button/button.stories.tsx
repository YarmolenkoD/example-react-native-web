import React from "react";
import { Button } from "./button";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { View } from "react-native";

export default {
  title: 'Sharable/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args: object) => (
  <View style={{ width: 300 }}>
    <Button {...args} />
  </View>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary Button',
};
