import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class RendenWithState extends Component {

    //Khai bao cach 1
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isLogin:false
    //     };
    // }

    //Khai bao cach 2 rut gon, dac ten dung
    state = {
        isLogin: false
    }

    handelLogin = () => {
        //ham setState la bat dong bo
        this.setState({
            isLogin: true
        },
        ()=>{ //log ra gia tri sau khi ham setState duoc thuc thi
            console.log(this.state.isLogin);
        });

        console.log('tt');
    };

    handelLogout = () => {
    }

    renderLogin = () => {
        if (this.state.isLogin) {
            return (<>
                <Text style={styles.TxtButton}>Hello React Navitive 02</Text>

                <TouchableOpacity style={styles.Button}>
                    <Text style={styles.TxtButton}>Log out</Text>
                </TouchableOpacity>
            </>)

        }
        return (
            <TouchableOpacity style={styles.Button} onPress={this.handelLogin} >
                <Text style={styles.TxtButton}>Login</Text>
            </TouchableOpacity >
        )

    }

    render() {
        return (
            <View style={styles.Container}>
                <Text style={styles.TxtButton}> textInComponent </Text>
                {this.renderLogin()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Button: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 8
    },
    TxtButton: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
