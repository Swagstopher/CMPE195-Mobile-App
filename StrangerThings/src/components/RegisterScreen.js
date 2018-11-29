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

export default class RegisterScreen extends React.Component {

  constructor(props){
        super(props);
        this.state = { firstName:null, lastName: null, password: null, email: null, birthday: null };
        this.handleRegister = this.handleRegister.bind(this);
  }

    handleRegister = () => {
    if(this.state.email !== null && this.state.password !== null){
 
      var formData = new FormData();
      formData.append("firstName", this.state.firstName);
      formData.append("lastName", this.state.lastName);
      formData.append("password", this.state.email);
      formData.append("email", this.state.email);
      formData.append("birthday", this.state.birthday);


      fetch("http://strangerthingz-backend.herokuapp.com/createUser",
        {
          method: "POST",
          body: formData,
            headers:{
              'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(res => res.json())
.then(response => console.log('Success:', Alert.alert(JSON.stringify(response))))
    } else {
      console.log("Didn't Work");
    }
    }

  render() {
    return (
      <Screen>
        <LoginText>Register</LoginText>
                <LabelText>First Name</LabelText>
        <InputForm 
            placeholder="Enter First Name"
            placeholderTextColor="white"
            autoCapitalize = 'none'
            onChangeText={(firstName) => this.setState({firstName})}
        />
        <LabelText>Last Name</LabelText>
        <InputForm 
            placeholder="Enter Last Name"
            placeholderTextColor="white"
            autoCapitalize = 'none'
            onChangeText={(lastName) => this.setState({lastName})}
        />
        <LabelText>Password</LabelText>
        <InputForm 
            placeholder="Enter Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
        />
        <LabelText>Email</LabelText>
        <InputForm 
            placeholder="Enter Email"
            placeholderTextColor="white"
            autoCapitalize = 'none'
            onChangeText={(email) => this.setState({email})}
        />
        <LabelText>Birthday</LabelText>
        <InputForm 
            placeholder="Enter Birthday"
            placeholderTextColor="white"
            autoCapitalize = 'none'
            onChangeText={(birthday) => this.setState({birthday})}
        />
        <LoginButton onPress={this.handleRegister} color="white" title="Register"/>
                <OrText>Or</OrText>
        <LoginButton color="white" title="Login"/>
      </Screen>
    );
  }
}