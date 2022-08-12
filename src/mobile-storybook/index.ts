import { AppRegistry } from 'react-native'

import { getStorybookUI, configure, addDecorator } from '@storybook/react-native'
import { withKnobs } from '@storybook/addon-knobs'

import { loadStories } from './story-loader'

import './rn-addons'

import { name as appName } from '../app/app.json'

// enables knobs for all stories
addDecorator(withKnobs)

configure(() => {
  loadStories()
}, module)

const StorybookUIRoot = getStorybookUI({})

AppRegistry.registerComponent(appName, () => StorybookUIRoot)

export default StorybookUIRoot
