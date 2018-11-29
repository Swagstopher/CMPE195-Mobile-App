import React from "react";
import { Text, View, TextInput, Image } from "react-native";
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

`

export default class MainScreen extends React.Component {
  render() {
    return (
    	<Screen>
    	<Title>Listings</Title>
    	</Screen>
    );
  }
}