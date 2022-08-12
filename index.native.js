import React from 'react'
// import Config from 'react-native-config'

import { AppRegistry } from 'react-native'

import App from './src/app/app-component'
// import Storybook from './src/mobile-storybook'

import { name as appName } from './src/app/app.json'

AppRegistry.registerComponent(appName, () => App)
