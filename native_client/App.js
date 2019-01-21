import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card } from 'react-native-elements';
import NavBar from './NavBar'

export default class App extends React.Component {
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
    return (
      <View style={styles.container}>
        <NavBar style={styles.navbar} />
        <Button title="Get Users"onPress={this.handleClick} />
        <Button title="Get Appointments"onPress={this.handleAppt} />
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
    top: 40,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    top: 200,
    left: 0,
    fontSize: 19,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black'
    },
  activeTitle: {
  color: 'red',
},
});
