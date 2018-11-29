import React from "react";
import { Text, View, AsyncStorage, StatusBar, Alert } from "react-native";
import styled from "styled-components";
import AddScreen from "./src/components/AddScreen";
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
  width: 100%;jon
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
    this.changeScreen = this.changeScreen.bind(this);
  }

    changeScreen = (screen) => {
      this.setState({
        currentScreen: screen
      });
    }
  
  render() {
    if(this.state.currentScreen == "main"){
      return    (   
      <View>
        <StatusBar />
        <MainScreen screen={this.changeScreen} />
      </View>
      )
    } 

 else if(this.state.currentScreen == null){
    return (
      <View>
        <StatusBar />
        <LoginScreen screen={this.changeScreen} />
      </View>
      );
 }

  else if(this.state.currentScreen == 'add'){
    return (<View>
        <StatusBar />
        <AddScreen screen={this.changeScreen} />
      </View>);
 }
   else if(this.state.currentScreen == 'register'){
    return (<View>
        <StatusBar />
        <RegisterScreen screen={this.changeScreen}/>
      </View>);
 }

    else if(this.state.currentScreen == 'login'){
    return (<View>
        <StatusBar />
        <LoginScreen screen={this.changeScreen}/>
      </View>);
 }

    else {
          return (
      <View>
        <StatusBar />
        <LoginScreen screen={this.changeScreen}/>
      </View>
    );
    }

  }
}
