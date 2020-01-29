import React from 'react'
import { StatusBar } from 'react-native'
import Navigator from '@services/navigation'

export default () => [
  <StatusBar key="1" backgroundColor="#fff" barStyle="dark-content" />,
  <Navigator key={'app-navigator'} key="2" />,
]

