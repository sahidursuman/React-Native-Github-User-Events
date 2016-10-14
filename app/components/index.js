import React, { Component } from 'react'
import { Text, Image, View, AppRegistry, StyleSheet} from 'react-native'
import ViewContainer from './ViewContainer'

export default class TestProject extends Component {
    render() {
        let pic = {
            uri: 'https://pbs.twimg.com/media/CS-IToTWoAA3Eiq.jpg'
        };
        return (
            <View style={styles.viewContainer}>
                <Image source={pic} style={{ width: 300, height: 300 }} />
                <Text>Hi {this.props.name}!</Text>
                <ViewContainer>
                    <Text>Text From ViewContainer</Text>
                    <Text style={{backgroundColor: 'skyblue'}}>2nd Text</Text>
                </ViewContainer>
            </View>
        );
    }
}

class Greeting extends Component {
    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <TestProject name='Julian' />
            </View>
        );
    }
}

var styles = StyleSheet.create({

    main: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'space-between',
    }
})

module.exports = Greeting

