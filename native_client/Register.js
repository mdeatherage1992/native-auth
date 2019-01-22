import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


class RegisterScreen extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>This is Forms</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
  },
});

export default RegisterScreen;
