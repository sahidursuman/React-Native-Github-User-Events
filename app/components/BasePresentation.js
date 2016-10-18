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
        uri: 'http://spotlightreport.net/wp-content/uploads/2011/06/MTV-movie-awards-logo-banner.jpg'
    };
    return (
        <View>
            <Image source={pic} style={styles.banner} />
            <View style={styles.inputRow}>
                <TextInput style={styles.inputText}
                    placeholder="Who are you?"
                    onChangeText={props.updateName} />
                <TouchableHighlight
                    style={styles.submit}
                    onPress={() => props.setName(props.name)}>
                    <Text>Submit</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.headers}>
                <Text style={styles.text1}>Flex1</Text>
                <Text style={styles.text2}>Flex2</Text>
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
        width: '20%',
        paddingRight: 16,
        backgroundColor: 'orange'
    },
    text2: {
        flex: 1,
        width: '80%',
        backgroundColor: 'skyblue'
    },
    banner: {
        height: '25%',
    },
    headers: {
        flexDirection: "row",
    },
    inputRow: {
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
