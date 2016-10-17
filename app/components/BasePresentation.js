import React, { Component } from 'react'
import {
    Text, Image, View, StyleSheet,
    Dimensions, TouchableHighlight, TextInput
} from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
    textColor: '#0275d8'
});

const BasePresentation = (props) => {
    let pic = {
        uri: 'http://orig14.deviantart.net/3428/f/2016/150/f/e/my_anime_list_banner_by_weaselmon-da4cin6.png'
    };
    return (
        <View>
            <Image source={pic} style={styles.banner} />
            <View style={styles.flexStyle}>
                <TextInput style={styles.inputText}
                    placeholder="Who are you?"
                    onChangeText={props.updateName} />
                <TouchableHighlight
                    style={styles.submit}
                    onPress={ () => props.setName(props.name)}>
                    <Text style={{ textAlign: 'center' }}>Submit</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.flexStyle}>
                <Text style={styles.text1}>Flex1</Text>
                <Text style={styles.text2}>Flex2</Text>
                <Text style={styles.text3}>Flex3</Text>
            </View>
        </View >
    )
}

var styles = EStyleSheet.create({
    inputText: {
        flex: 3
    },
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
    flexStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    submit: {
        flex: 1,
        backgroundColor: 'silver',
        padding: 10
    }
})

export default BasePresentation
