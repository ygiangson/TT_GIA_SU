import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import * as AppConstant from '../constants/Constant'
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';

const Auth = createStackNavigator({
  Login: LoginScreen,
  Register :  RegisterScreen
})

export default createAppContainer(createSwitchNavigator({
  AuthLoading : AuthLoadingScreen,
  Main: MainTabNavigator,
  Auth : Auth
}));