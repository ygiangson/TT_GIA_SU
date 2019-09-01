import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import * as Theme from '../../constants/Theme'
import NavigationUtil from '../../navigation/NavigationUtil';
import {SCREEN_ROUTER} from '../../constants/Constant'

export default class NotificationScreen extends Component {
    render() {
        return (
            <View style={Theme.styles.test}>
                <TouchableOpacity onPress={() => {
                    NavigationUtil.navigate(SCREEN_ROUTER.AUTH)
                }}>
                    <Text> Notification </Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}
