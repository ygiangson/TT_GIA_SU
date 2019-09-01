import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, BottomTabBar } from 'react-navigation';
import * as Icon from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen';
import * as theme from '../constants/Theme'
import I18n from '../i18n/i18n'
import NotificationScreen from '../screens/notifications/NotificationScreen';


const TabBarComponent = (props) => (<BottomTabBar {...props} />);

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName = 'basket';
  switch (routeName) {
    case 'Home': {
      iconName = "diamond"
      break
    }
    case 'SavePoint': {
      iconName = "wallet"
      break
    }
    case 'Notification': {
      iconName = "bell"
      break
    }
    case 'User': {
      iconName = "user"
      break
    }
  }
  return <Icon.SimpleLineIcons name={iconName} size={20} color={tintColor} outline />
};

const bottomBar = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    title: I18n.t('home'), navigationOptions: {
      tabBarLabel: I18n.t('home')
    }
  },
  Notification: {
    screen: NotificationScreen,
    title: I18n.t('notification'), navigationOptions: {
      tabBarLabel: I18n.t('notification')
    }
  }
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => getTabBarIcon(navigation, focused, tintColor),
      // tabBarLabel: ({ focused, tintColor }) => getTabBarLabel(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: theme.colors.active,
      inactiveTintColor: theme.colors.inactive,
      // style: {
      //   backgroundColor: theme.colors.white,
      //   height: 58
      // }
    },
    tabBarComponent: props => {

      return <TabBarComponent
        {...props}
        onTabPress={props.onTabPress}
        style={{
          borderTopColor: theme.colors.primary,
          backgroundColor: theme.colors.bottombarBg,
          height: 58
        }}
      />
    },

  },

)

export default createStackNavigator({

  main: {
    screen: bottomBar
  }

},
  {
    defaultNavigationOptions: {
      header: null
    }
  })
