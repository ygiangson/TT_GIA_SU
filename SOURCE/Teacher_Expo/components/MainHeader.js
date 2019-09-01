import React, { Component } from "react";
import { View, Text, TouchableOpacity,Dimensions } from "react-native";
import { Header } from "react-native-elements";
import NavigationUtil from "../navigation/NavigationUtil";
import * as Icon from "expo";
import * as theme from "../constants/Theme";
import { LinearGradient } from "expo-linear-gradient";

const {width,height} =Dimensions.get('window')
export default class MainHeader extends Component {
  render() {
    const title = this.props.title;
    const { back, ...props } = this.props;

    return (
      <LinearGradient
        colors={["#1D64A2", "#0B4369"]}
        style={{
          alignItems: "center",
        }}
      >
        <Header
          placement="center"
          containerStyle={{
            backgroundColor: "transparent",
           
          }}
          leftContainerStyle={{ flex: 0 }}
          centerContainerStyle={{ flex: 1 }}
          rightContainerStyle={{ flex: 0 }}
          leftComponent={
            back && (
              <TouchableOpacity
                style={{
                  // flex: 1,
                  height: "100%",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                  // backgroundColor: theme.colors.active
                }}
                onPress={NavigationUtil.goBack}
              >
                <Icon.Ionicons
                  name="ios-arrow-round-back"
                  size={35}
                  color="#000"
                />
                {/* <Text
                         style={[theme.fonts.semiBold16, {marginLeft: 10}]}>{title}</Text> */}
              </TouchableOpacity>
            )
          }
          centerComponent={
            <Text
              numberOfLines={1}
              ellipsizeMode={"tail"}
              style={[theme.fonts.bold20, { color: theme.colors.white }]}
            >
              {title}
            </Text>
          }
        ></Header>
      </LinearGradient>
    );
  }
}
