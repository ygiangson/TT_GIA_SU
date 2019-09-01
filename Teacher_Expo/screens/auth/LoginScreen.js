import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export default class LoginScreen extends Component {

    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={style.container}>
                <Text style={{ marginTop: 200 }}>Alo</Text>
                
            </View>
        )
    }
}


const style = StyleSheet.create({
    container: {
        width  : width,
        flex : 1,
        backgroundColor : 'red'
    },
    bg: {
        position : 'absolute',
        flex: 1,
        
    }
})
