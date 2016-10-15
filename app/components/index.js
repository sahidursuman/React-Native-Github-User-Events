import React, { Component } from 'react'
import { View } from 'react-native'
import BasePresentation from './BasePresentation'

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
                    name={this.name}
                    setName={this.setName} />
            </View>
        )
    }
}

class Greeting extends Component {
    render() {
        return (
            <View>
                <TestProject defaultName='Julian' />
            </View>
        );
    }
}

module.exports = Greeting

