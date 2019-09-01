import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import * as Theme from "../../constants/Theme";
import NavigationUtil from "../../navigation/NavigationUtil";
import { SCREEN_ROUTER } from "../../constants/Constant";
import MainHeader from "../../components/MainHeader";
import I18n from '../../i18n/i18n'
export default class ClassScreen extends Component {
  render() {
    return (
      <View style={Theme.styles.test}>
        <MainHeader title={I18n.t('class')}/>
        <TouchableOpacity
          onPress={() => {
            NavigationUtil.navigate(SCREEN_ROUTER.AUTH);
          }}
        >
          <Text> ClassScreen </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
