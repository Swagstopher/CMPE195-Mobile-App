import React from "react";
import { Text, View, TextInput, Image, Alert, Button } from "react-native";
import styled from "styled-components";
import { screen } from "./base/style";
import { LinearGradient, MapView, Svg } from "expo";
import { hamburger, notification, home, user } from "../icons/svg.json";

const Screen = styled(screen)`
  display: flex;
  align-items:center;
  height: 100%;
`;

const Title = styled.Text`
  font-size: 24px;
  margin-bottom:10%;
`;

const LabelText = styled.Text`
  font-size: 18px;
  margin-bottom:2.5%;
`;

const InputForm = styled.TextInput`
  background:red;
  color: white;
  width: 80%;
  height: 7.5%;
  border-radius: 50;
  padding-left: 10px;
  margin-bottom: 2.5%;
`;

const Footer = styled.View`
position:absolute;
bottom:0;
width: 100%;
height: 10%;
display:flex;
align-items:center;
justify-content: center;
`;


export default class AddScreen extends React.Component {

constructor(props){
	super(props);
  this.state = {
    city: null, name: null, date: null,
    time: null, description: null, userID: '123ABC'
  };
  this.handleAddEvent = this.handleAddEvent.bind(this);
}

    handleAddEvent = () => {
    if(this.state.city !== null && this.state.name !== null &&
      this.state.date !== null && this.state.time !== null &&
      this.state.description !== null && this.state.userID !== null
      ){
 
      var formData = new FormData();
      formData.append("city", this.state.city);
      formData.append("name", this.state.name);
      formData.append("date", this.state.date);
      formData.append("time", this.state.time);
      formData.append("description", this.state.description);
      formData.append("userID", this.state.userID);


      fetch("http://strangerthingz-backend.herokuapp.com/addPost",
        {
          method: "POST",
          body: formData,
            headers:{
              'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(res => res.json())
.then(response => {
    Alert.alert("Event Created!");
  this.props.screen('main');
}

)
    } else {
      console.log("Didn't Work");
    }
    }

  render() {
    return (
          <Screen>
    <Title>Add Event</Title>
        <LabelText>City</LabelText>
        <InputForm 
            placeholder="Enter City"
            placeholderTextColor="white"
            autoCapitalize = 'none'
            onChangeText={(city) => this.setState({city})}
        />
                <LabelText>Name</LabelText>
        <InputForm 
            placeholder="Enter Name"
            placeholderTextColor="white"
            autoCapitalize = 'none'
            onChangeText={(name) => this.setState({name})}
        />
                <LabelText>Date</LabelText>
        <InputForm 
            placeholder="Enter Date"
            placeholderTextColor="white"
            autoCapitalize = 'none'
            onChangeText={(date) => this.setState({date})}
        />
                <LabelText>Time</LabelText>
        <InputForm 
            placeholder="Enter Time"
            placeholderTextColor="white"
            autoCapitalize = 'none'
            onChangeText={(time) => this.setState({time})}
        />
                <LabelText>Description</LabelText>
        <InputForm 
            placeholder="Enter Description"
            placeholderTextColor="white"
            autoCapitalize = 'none'
            onChangeText={(description) => this.setState({description})}
        />
        <Button onPress={this.handleAddEvent} title="Add Event"/>
              <Footer>
      <Button onPress={() => this.props.screen('main')}title="Back to Main"/>
      </Footer>
    </Screen>
      );

  }
}