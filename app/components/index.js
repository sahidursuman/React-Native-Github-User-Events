import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import BasePresentation from '../presentation/BasePresentation'
import ListComponent from './ListComponent'

export default class TestProject extends Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }
    updateName = (text) => {
        this.setState({ name: text })
    }

    setName = () => {
        alert('Hello: ' + this.state.name)
    }

    render() {
        return (
            <View style = {styles.viewStyle}>
                <BasePresentation
                    setName={this.setName}
                    updateName={this.updateName} />
                <ListComponent/>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    viewStyle: {
        flex: 1
    }
})