import React, { Component } from 'react'
import { Text, View } from 'react-native'
import * as Theme from '../../constants/Theme'

export default class UserScreen extends Component {
    render() {
        return (
            <View style={Theme.styles.test}>
                <Text> UserScreen </Text>
            </View>
        )
    }
}
