import {createAppContainer,createStackNavigator} from 'react-navigation';
import React from 'react';
import HomeScreen from './Home';
import LoginScreen from './Login';
import RegisterScreen from './Register';
const AppNav = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Login: {
    screen: LoginScreen
  },
  Register: RegisterScreen
});

export default AppNav;
