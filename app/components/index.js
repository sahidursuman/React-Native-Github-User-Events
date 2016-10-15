import React, { Component } from 'react'
import { Text, Image, View, AppRegistry, StyleSheet, Dimensions} from 'react-native'
import ViewContainer from './ViewContainer'
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
    textColor: '#0275d8'
});

export default class TestProject extends Component {
    render() {
        let pic = {
            uri: 'http://orig14.deviantart.net/3428/f/2016/150/f/e/my_anime_list_banner_by_weaselmon-da4cin6.png'
        };
        return (
            <View>
                <Image source={pic} style={styles.banner} />
                <Text style={styles.greetingText}>Hi, {this.props.name}!</Text>
                <ViewContainer>
                    <Text>Text From ViewContainer</Text>
                </ViewContainer>
                <View style={styles.flexStyle}>
                    <Text style={styles.text1}>Flex1</Text>
                    <Text style={styles.text2}>Flex2</Text>
                    <Text style={styles.text3}>Flex3</Text>
                </View>
            </View>
        );
    }
}

class Greeting extends Component {
    render() {
        return (
            <View>
                <TestProject name='Julian' />
            </View>
        );
    }
}

var styles = EStyleSheet.create({
    text1: {
        flex: 1,
        backgroundColor: 'orange'
    },
    text2: {
        flex: 2,
        backgroundColor: 'skyblue'
    },
    text3: {
        flex: 1,
        backgroundColor: 'red'
    },
    banner: {
        height: '15%'
    },
    greetingText: {
        color: '$textColor',
        fontSize: '1.5rem'
    },
    flexStyle: {
        flexDirection: "row",
    }
})

module.exports = Greeting

