import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { Button, Card,Header,ListItem } from 'react-native-elements';
import {navigate} from 'react-navigate';

class RegisterScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
      <Header
        style ={styles.navBar}
        leftComponent=<Button
          style={styles.button}
           title="Home"
           onPress={() => navigate('Home')}
         ></Button>
         rightComponent=<Button
         style={styles.button}
           title="Login"
           onPress={() => navigate('Login')}
         ></Button>
         centerComponent=<Button
         style={styles.button}
           title="Register"
           onPress={() => navigate('Register')}
         ></Button>
         />
      <Text>This is Forms</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
  },
  button: {
    display: "flex",
    height: 50,
    width: 100,
  },
});

export default RegisterScreen;
