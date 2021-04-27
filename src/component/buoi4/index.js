import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Box1Item from './box1Item';
import Box2Item from './box2item'

export default class Buoi4 extends Component {
    render() {
        const textAvata = 'Xin chao - cao thang';
        
        return (
            <View style={styles.container} >
                <View style={styles.box1}>                    
                    {/* <Box1Item></Box1Item>
                    <Box1Item></Box1Item> */}

                    {/* Lay hinh tu internet hoac api*/}
                    <Image style = {styles.image} source = {{
                        uri:'https://anphupet.com/wp-content/uploads/2020/07/cho-corgi-con.jpg?fbclid=IwAR0W7Y8rp14I3_mx_f1HFuxweWCyidgUJOpMZZp7smCmljq5LfvZ4v7cwbI',
                    }}/>

                    {/* Lay hinh tu thu muc */}
                    {/* <Image source={require('./cho-corgi-con.jpg')}></Image> */}

                    <Text style={styles.textAvata}>{textAvata}</Text>

                </View>
                <View style={styles.box2}>
                    <View style={styles.box2Item}>
                        <Box2Item></Box2Item>
                        <Box2Item></Box2Item>
                    </View>
                    <View style={styles.box2Item}>
                        <Box2Item></Box2Item>
                        <Box2Item></Box2Item>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    box1: {
        flex: 1,
        backgroundColor: '#A1c99A',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginBottom: 20,
        justifyContent:'center',
        alignItems:'center'
    },
    box2: {
        flex: 1,
        backgroundColor: '#c8c8fA',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    box2Item: {
        flex: 1,
        flexDirection: 'row',
    },
    image:{
        width:200,
        height:200,
        borderRadius:360,
        borderWidth:15,
        borderColor:'yellow'

    },
    textAvata:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
});