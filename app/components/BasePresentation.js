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
        uri: 'http://moviereelizations.com/wp-content/uploads/2015/03/cropped-cropped-tumblr_static_logo1-e1425952896142.png'
    };
    return (
        <View>
            <Image source={pic} style={styles.banner} />
            <View style={styles.inputRow}>
                <TextInput style={styles.inputText}
                    placeholder="Your Name"
                    onChangeText={props.updateName} />
                <TouchableHighlight
                    underlayColor='#0099CC'
                    style={styles.submitButton}
                    onPress={() => props.setName(props.name)}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.headers}>
                <View style={styles.textView1}>
                    <Text style={styles.headerText}>Poster</Text>
                </View>
                <View style={styles.textView2}>
                    <Text style={styles.headerText}>Information</Text>
                </View>
            </View>
        </View >
    )
}

var styles = EStyleSheet.create({
    inputText: {
        flex: 3
    },
    textView1: {
        flex: 1,
        width: '20%',
        backgroundColor: '#003399',
        alignItems: 'center',
        padding: 8
    },
    textView2: {
        flex: 1,
        width: '80%',
        backgroundColor: '#0099CC',
        alignItems: 'center',
        padding: 8
    },
    banner: {
        height: '20%',
        width: '100%',
        resizeMode: 'contain',
        marginTop: 10
    },
    headers: {
        flexDirection: "row",
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white'
    },
    inputRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    submitButton: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 10,
        alignItems: 'center'
    },
    submitButtonText: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default BasePresentation
