import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Box2Item extends Component {
    render() {
        return (
            <View style={styles.box2item}>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box2item: {
        flex: 1,
        backgroundColor: '#4f82c0',
        margin: 20,
        borderRadius: 10
    }
});
