import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Box1Item1 extends Component {
    render() {
        return (
            <View style={styles.boxitem1}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boxitem1: {
        backgroundColor: '#ffffc2',
        borderRadius: 10,
        flex: 1,
        margin: 20
    }
});
