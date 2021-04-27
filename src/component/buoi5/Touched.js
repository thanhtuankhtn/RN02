import React, { Component } from 'react';
import { Text, View, StyleSheet, Button
    , TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback  } from 'react-native'

export default class Touched extends Component {

    // handledOnPress = () =>{
    //     console.log('Process');

    // };
    handledOnPress = (param1, param2) =>{
        console.log(param1,param2);

    };

    render() {
        return (
            // jsx 
            <View style ={styles.Container}>
                <Text> textInComponent </Text>
                {/* <Button title='Button' color = 'red'></Button> */}

                {/* khong  truyen param */}

                {/* <TouchableOpacity style={styles.Button} onPress={this.handledOnPress}>
                    <Text style={styles.TxtButton}>Button</Text>
                </TouchableOpacity> */}

                {/* Truyen param */}
                 <TouchableOpacity style={styles.Button} onPress={() =>{this.handledOnPress('aaa','bbb')}}>
                    <Text style={styles.TxtButton}>Button</Text>
                </TouchableOpacity>

                <TouchableHighlight style={styles.Button} onPress={this.handledOnPress}>
                    <Text style={styles.TxtButton}>Button</Text>
                </TouchableHighlight>
                <TouchableWithoutFeedback style={styles.Button} onPress={this.handledOnPress}>
                    <Text style={styles.TxtButton}>Button</Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    Button: {
       backgroundColor:'red',
       paddingHorizontal:20,
       paddingVertical:10,
       marginVertical:10
    },
    TxtButton:{
        fontSize:20
    }
})

