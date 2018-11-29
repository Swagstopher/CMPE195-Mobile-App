import React from "react";
import { Text, View, TextInput } from "react-native";
import styled from "styled-components";
import { screen } from "./base/style";

const Screen = styled(screen)`
  display: flex;
  flex-direction; column;
  background: #ebebeb;
`;

const FormLabel = styled.Text`
  font-weight: bold;
`;

const FormInput = styled.TextInput`
  border-bottom-width: 1;
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom-color: #ff0000;
`;

class FormContainer extends React.Component {
  render() {
    const View = styled.View`
      padding-left: 16px;
      padding-right: 16px;
    `;

    return (
      <View>
        <FormLabel>{this.props.label}</FormLabel>
        <FormInput />
      </View>
    );
  }
}

export default class PostSomethingScreen extends React.Component {
  render() {
    return (
      <Screen>
        <FormContainer label="Subject" />
        <FormContainer label="Details" />
        <FormContainer label="When?" />
        <FormContainer label="Where?" />
      </Screen>
    );
  }
}
