import React, { Component } from 'react'
import {
    Text, View, StyleSheet
    , Image, TouchableOpacity
} from 'react-native'
import IconButton from './IconButton'



export default class RenderIcon extends Component {

    state = {
        icon: require('../../assets/care.png')
    }

    handleOnPressIcon = (path) =>{
        this.setState({
            icon:path
        })
    } 

    render() {

        return (
            <View style={styles.Container}>

                <Text style={styles.TxtButton}> Ban dang cam thay nhu the nao ? </Text>
                <Image style={{ margin: 20 }} source={this.state.icon}></Image>

                <View style={styles.imgImage}>
                    {/* <TouchableOpacity onPress={() => { this.handleOnPressIcon(require('../../assets/angry.png'))}}>
                        <Image style={styles.imgItem} source={require('../../assets/angry.png')}></Image>
                    </TouchableOpacity> 
                    <TouchableOpacity onPress={() => { this.handleOnPressIcon(require('../../assets/sad.png'))}}>
                        <Image style={styles.imgItem} source={require('../../assets/sad.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.handleOnPressIcon(require('../../assets/haha.png'))}}>
                        <Image style={styles.imgItem} source={require('../../assets/haha.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.handleOnPressIcon(require('../../assets/like.png'))}}>
                        <Image style={styles.imgItem} source={require('../../assets/like.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.handleOnPressIcon(require('../../assets/love.png'))}}>
                        <Image style={styles.imgItem} source={require('../../assets/love.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.handleOnPressIcon(require('../../assets/care.png'))}}>
                        <Image style={styles.imgItem} source={require('../../assets/care.png')}></Image>
                    </TouchableOpacity>
                    */}
                    <IconButton icon={'care'}></IconButton>

                    
                </View>
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
