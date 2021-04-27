import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default class IconButton extends Component {
    render() {
        return (
            <View>
                 <TouchableOpacity onPress={() => 
                    { this.handleOnPressIcon(require('../../assets/angry.png'))}}>
                        <Image style={styles.imgItem} 
                        source={require('../../assets/angry.png')}></Image>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 8
    },
    
    imgImage: {
        //flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    imgItem: {
        width: 50,
        height: 50,
        margin: 20
    }
})
