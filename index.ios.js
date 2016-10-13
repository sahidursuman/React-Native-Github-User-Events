import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  Image,
  View
} from 'react-native';

class TestProject extends Component {
  render() {
    let pic = {
      uri: 'https://pbs.twimg.com/media/CS-IToTWoAA3Eiq.jpg'
    };
    return (
      <View>
        <Image source={pic} style={{ width: 193, height: 110 }} />
        <Text>Hello World!</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('TestProject', () => TestProject);
