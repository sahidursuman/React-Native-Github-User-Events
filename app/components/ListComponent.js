import React, { Component } from 'react'
import { View, ListView, StyleSheet, Text } from 'react-native'

const animeList = [
    { title: "Naruto", ranking: 1 },
    { title: "Bleach", ranking: 2 },
    { title: "Attack on Titan", ranking: 3 },
]

export default class ListCompontent extends Component {
    constructor(props) {
        super(props)
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 })
        this.state = {
            animeDataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 3', 'row 4', 'row 5'])
        }
    }

    render() {
        return (
            <ListView dataSource={this.state.animeDataSource}
                contentContainerStyle={styles.container}
                renderRow={(data) => <View><Text style={styles.row}>{data}</Text></View>} />
        )
    }
}

renderAnimeRow = () => {
    return (
        <View>
            <Text>animeList.title</Text>
        </View>
    )
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        fontWeight: 'bold',
        fontSize: 30
    }
});
