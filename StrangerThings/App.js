import React from "react";
import { Text, View, AsyncStorage, StatusBar } from "react-native";
import styled from "styled-components";
import HomeScreen from "./src/components/HomeScreen";
import MainScreen from "./src/components/MainScreen";
import LoginScreen from "./src/components/LoginScreen";
import RegisterScreen from "./src/components/RegisterScreen";
import ChatScreen from "./src/components/ChatScreen";
import ProfileScreen from "./src/components/ProfileScreen";
import FriendsListScreen from "./src/components/FriendsListScreen";
import PostSomethingScreen from "./src/components/PostSomethingScreen";

const StyledView = styled.View`
  background-color: #f24a4a;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      login: true,
      counter: 0,
      currentScreen: null,
      prevScreen: null,
      listExtended: false
    };
  }
  
  render() {
    return (
      <View>
        <StatusBar />
        <MainScreen />
      </View>
    );
  }
}
