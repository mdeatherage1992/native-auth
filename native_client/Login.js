import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>This is Login</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});

export default LoginScreen;
