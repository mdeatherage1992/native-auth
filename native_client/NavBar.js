import React from 'react';

import { ButtonGroup } from 'react-native-elements';

export default class NavBar extends React.Component {
  constructor () {
  super()
  this.state = {
    selectedIndex: 2
    }
  this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
  this.setState({selectedIndex})
  }

  render() {
    const buttons = ['Home', 'Explore', 'Log In']
    const { selectedIndex } = this.state
    return (
    <ButtonGroup
    id="navbar"
    onPress={this.updateIndex}
    selectedIndex={selectedIndex}
    buttons={buttons}
    containerStyle={{height: 100}}
    />
    );
  }
}
