import {createAppContainer} from 'react-navigation';
import React, {Component} from 'react';
import HomeScreen from './Home';
import LoginScreen from './Login';
import RegisterScreen from './Register';
import AppNav from './AppNav';

class App extends Component {
  render(){
    const AppContainer = createAppContainer(AppNav);
    return (
      <AppContainer />
    )
  }
}

export default App;
