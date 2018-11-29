import React from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import styled from "styled-components";
import { screen } from "./base/style";

const Screen = styled(screen)`
  display: flex;
  align-items: center;
  background: gray;
  justify-content: space-around;
  padding-top: 25%;
  height: 100%;
`;

const LoginText = styled.Text`
  font-size: 48px;
  color: white;
`;

const OrText = styled.Text`
  font-size: 24px;
  color:white;
`

const LoginButton = styled.Button`
  background: lightgray;
`;

const LabelText = styled.Text`
  color:white;
  font-size: 24px;
`;

const InputForm = styled.TextInput`
  background:red;
  color: white;
  width: 80%;
  height: 7.5%;
  border-radius: 50;
  padding-left: 10px;
`;

export default class LoginScreen extends React.Component {

  constructor(props){
        super(props);
        this.state = { password: null, email: null };
        this.handleLogin = this.handleLogin.bind(this);
  }

    handleLogin = () => {
    if(this.state.email !== null && this.state.password !== null){
 
      var formData = new FormData();
      formData.append("email", this.state.email);
      formData.append("password", this.state.password);

      const that = this;

      fetch("http://strangerthingz-backend.herokuapp.com/signinUser",
        {
          method: "POST",
          body: formData,
            headers:{
              'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(res => res.json())
.then(response => {
          that.props.screen('main');
}
  )
    } else {
      console.log("Didn't Work");
    }
    }

  render() {
    return (
      <Screen>
        <LoginText>Login</LoginText>
        <LabelText>Email</LabelText>
        <InputForm 
            placeholder="Enter Email"
            placeholderTextColor="white"
            autoCapitalize = 'none'
            onChangeText={(email) => this.setState({email})}
        />
        <LabelText>Password</LabelText>
        <InputForm 
            placeholder="Enter Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
        />
        <LoginButton onPress={this.handleLogin} color="white" title="Login"/>
                <OrText>Or</OrText>
        <LoginButton onPress={() => this.props.screen('register')} color="white" title="Register"/>
      </Screen>
    );
  }
}
