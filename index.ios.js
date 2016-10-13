import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import TestProject from './app'

class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <TestProject name='Julian' />
      </View>
    );
  }
}

AppRegistry.registerComponent('TestProject', () => Greeting);