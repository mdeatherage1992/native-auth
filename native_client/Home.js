import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card,Header,ListItem } from 'react-native-elements';
import LoginScreen from './Login';
import RegisterScreen from './Register';
import {navigate} from 'react-navigate';

 class HomeScreen extends Component {
   static navigationOptions = {
    };
    constructor() {
      super();
      this.state = {
        data: [],
        appts:[]
      }
      this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
      fetch("http://localhost:3000/api/v1/users")
      .then(response => response.json())
      .then(response => this.setState({data:response}))
    }
    handleAppt = () => {
      fetch("http://localhost:3000/api/v1/appointments")
      .then(response => response.json())
      .then(response => this.setState({appts:response}))
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
        <Button title="Get Users"onPress={this.handleClick}></Button>
        <Button title="Get Appointments"onPress={this.handleAppt}></Button>
        <Text>Users:</Text>
        {this.state.data.map(i =>
          <Card key={i.id + 1} style={styles.title}>
          <Text>
          {i.name} || {i.email} || {i.id}
          </Text>
          </Card>
        )}
        <Text>
        Appointments:
        </Text>
        {this.state.appts.map(i =>
          <Card key={i.id + 1} style={styles.title}>
          <Text>
                {i.title} || {i.body}
          </Text>
          </Card>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    flex: 5,
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    top: 200,
    left: 0,
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black'
    },
  button: {
    display: "flex",
    height: 50,
    width: 100,
  },
});

export default HomeScreen;
