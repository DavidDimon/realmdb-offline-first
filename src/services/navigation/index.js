import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '@screens/Home'

const homeStack = createStackNavigator(
  {
    home: Home,
  },
  {
    initialRouteName: 'home',
    defaultNavigationOptions: {
      headerShown: false
    },
  }
)

const mainNavigator = createSwitchNavigator(
  {
    app: homeStack,
  },
  {
    initialRouteName: 'app',
  }
)

export default createAppContainer(mainNavigator)
