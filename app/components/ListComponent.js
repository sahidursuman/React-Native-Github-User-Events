import React, { Component } from 'react'
import { View, ListView, StyleSheet, Text, Image } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class ListCompontent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2, })
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
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                });
            })
            .done();
    }

    render() {
        return (
            <ListView dataSource={this.state.dataSource}
                style={styles.listView}
                renderRow={this.renderMovie} />
        )
    }

    renderMovie = (movie) => {
        return (
            <View style={styles.container}>
                <View style={styles.thumbnailContainer}>
                    <Image style={{ width: 53, height: 81 }}
                        source={{ uri: movie.posters.thumbnail }} />
                </View>
                <View style={styles.movieText}>
                    <Text numberOfLines={2} style={styles.title}>{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        );
    }
}

var styles = EStyleSheet.create({
    thumbnailContainer: {
        flex: 1,
        width: '20%',
        alignItems: 'center'
    },
    movieText: {
        flex: 1,
        width: '80%',
    },
    title: {
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
    }
});
