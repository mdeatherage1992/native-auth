import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import { Button, Card,Header,ListItem } from 'react-native-elements';
import {navigate} from 'react-navigate';
import GenerateForm from 'react-native-form-builder';
import { Url } from './credentials';
import { connect } from 'react-redux';
import { authSuccess } from './redux/action/AuthSuccess'
import Auth from './redux/reducer/auth';

const fields = [
  {
    type: 'text',
    name: 'user_name',
    required: true,
    icon: 'ios-person',
    label: 'Username',
  },
  {
    type: 'password',
    name: 'password',
    icon: 'ios-lock',
    required: true,
    label: 'Password',
  },
];

class LoginScreen extends Component {
  login() {
    const formValues = this.formGenerator.getValues();
    this.newSession(formValues.user_name, formValues.password)
  }

  newSession(email,password){
    var self = this;
    var credentials = {'email':email,'password':password}
    fetch(Url.login,{
      headers: Object.assign(Url.headers,credentials),
      method: "POST",
    })
    .then(response => {
      console.log(response)
      self.validateToken(response)
    })
    .catch(err => {
      console.log(err)
    })
  }

  validateToken(response) {
    const {navigate} = this.props.navigation;
    var self = this;
    var accessToken = {
      "access-token":response.headers['map']['access-token'],
      "client": response.headers['map'].client,
      "uid": response.headers['map'].uid
  }
  console.log(accessToken)
  fetch(Url.validate_token,{
    headers:Object.assign(Url.headers,accessToken)})
    .then(response => {
      authSuccess(response,accessToken)
      if(response.status === 200) {
        alert("Success!")
        navigate('Home')
      } else {
        alert("Try Again")
      }
    })
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

      <Text>This is Login</Text>
      <View>
       <GenerateForm
         ref={(c) => {
           this.formGenerator = c;
         }}
         fields={fields}
       />
     </View>
     <View style={styles.submitButton}>
       <Button block onPress={() => this.login()}>
         <Text>Login</Text>
       </Button>
     </View>
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

export default LoginScreen;
