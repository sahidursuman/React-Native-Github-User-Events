import React, { Component } from 'react'
import { View } from 'react-native'
import BasePresentation from './BasePresentation'
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
            <View>
                <BasePresentation
                    setName={this.setName}
                    updateName={this.updateName} />
                <ListComponent/>
            </View>
        )
    }
}