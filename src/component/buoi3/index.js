import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class buoi3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, styles.colorBox1]}>
                    <Text>Purple: #C9C9FF</Text>
                </View>
                <View style={[styles.box, styles.colorBox2]}>
                    <Text>Blue: #3D85C6</Text>
                </View>
                <View style={[styles.box, styles.colorBox3]}>
                    <Text>Green: #96CC96</Text>
                </View>
                <View style={[styles.box, styles.colorBox4]}>
                    <Text>Yellow: #F4B940</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //paddingTop:50,
        //paddingBottom:50,
        paddingVertical: 50,
        //paddingLeft:20,
        //paddingRight:20
        paddingHorizontal: 50
    },
    box: {
        flex: 1,
        borderRadius: 10,
        marginBottom: 20,
    },
    colorBox1: {
        backgroundColor: '#C9C9FF',
        alignItems: 'center',
        justifyContent: 'center' //Dua chu ra phuong thang dung (truc y)
    },
    colorBox2: {
        backgroundColor: '#3D85C6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    colorBox3: {
        backgroundColor: '#96CC96',
        alignItems: 'center',
        justifyContent: 'center'
    },
    colorBox4: {
        backgroundColor: '#F4B940',
        alignItems: 'center',
        justifyContent: 'center'
    }
});