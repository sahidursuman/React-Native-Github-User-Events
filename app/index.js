import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    AppRegistry
} from 'react-native';

export default class TestProject extends Component {
    render() {
        let pic = {
            uri: 'https://pbs.twimg.com/media/CS-IToTWoAA3Eiq.jpg'
        };
        return (
            <View style={{ alignItems: 'center' }}>
                <Image source={pic} style={{ width: 193, height: 110 }} />
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }
}

