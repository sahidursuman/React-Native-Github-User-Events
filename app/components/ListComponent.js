import React, { Component } from 'react'
import { View, ListView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

const REQUEST_URL = 'https://api.github.com/events';

export default class ListCompontent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData),
                });
            })
            .done();
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource}
                style={styles.listView}
                renderRow={this.renderEvent}
                renderSeparator={this.renderSeparator} />
        )
    }

    renderSeparator(sectionID, rowID) {
        return (
            <View style={styles.separator} key={sectionID + rowID} />
        );
    }

    renderEvent = (event) => {
        return (
            <TouchableOpacity style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Image
                        defaultSource={require('../../react.png')}
                        style={styles.avatar}
                        source={{ uri: event.actor.avatar_url }} />
                </View>
                <View style={styles.eventText}>
                    <Text numberOfLines={2} style={styles.displayName}>{event.actor.display_login}</Text>
                    <Text>{event.type}:</Text>
                    <Text>{event.repo.url}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

var styles = EStyleSheet.create({
    avatarContainer: {
        flex: 1,
        width: '20%',
        alignItems: 'center'
    },
    avatar: {
        width: 53,
        height: 81,
        resizeMode: 'contain'
    },
    eventText: {
        flex: 1,
        width: '80%',
        paddingRight: 5
    },
    displayName: {
        fontSize: 20
    },
    listView: {
        backgroundColor: 'skyblue'
    },
    container: {
        flexDirection: 'row',
        flex: 1,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    separator: {
        height: 1,
        backgroundColor: '#90141414'
    },
});
