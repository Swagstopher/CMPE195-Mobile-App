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
`

const ListingsContainer = styled.View`
	display:flex;
	height: 80%;
	flex-direction: column;
	align-items:center;
	width: 100%;

`
const Listing = styled.View`
margin: 1% 0;
width: 90%;
background:white;
box-shadow: 1px 2px 2px gray;
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

export default class MainScreen extends React.Component {

constructor(props){
	super(props);
	this.state = {results: {}};
}

componentDidMount(){
	    const that = this;
fetch('https://strangerthingz-backend.herokuapp.com/getPosts?city=sj')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
  	//Alert.alert(data);
  	that.setState({results: data});
    //console.log(JSON.stringify(data));
  });
}

  render() {
  	if(this.state.results.length > 0){
    return (
    	<Screen>
    	<Title>Listings</Title>
    	<ListingsContainer>
    		{this.state.results.map((data, index) => {
                return (
                <Listing>
                  <Text>{data.name}</Text>
                  <Text>{data.description}</Text>
                  <Text>{data.date}</Text>
                  <Text>{data.time}</Text>
                </Listing>
                );
              })}
    	</ListingsContainer>
    	<Footer>
    	<Button onPress={() => this.props.screen('add')}title="Add Event"/>
    	</Footer>
    	</Screen>
    );
  	} else {
  		return <Text>No results</Text>
  	}

  }
}