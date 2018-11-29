import React from "react";
import { Text, View, TextInput } from "react-native";
import styled from "styled-components";
import { screen } from "./base/style";
import { LinearGradient } from "expo";

const yourId = "Lebron James";

const sampleAvatar =
  "https://pm1.narvii.com/6877/6fb5095a580595577174f749d566c564f5c42d42r1-1920-1080v2_128.jpg";

const sampleData = {
  name:
    "Adolph Blaine Charles David Earl Frederick Gerald Hubert Irvin John Kenneth Lloyd Martin Nero Oliver Paul Quincy Randolph Sherman Thomas Uncas Victor William Xerxes Yancy Wolfeschlegelsteinhausenbergerdorff",
  message: [
    { name: "Lebron James", message: "Sup." },
    { name: "Lebron James", message: "Wanna play some ball?" },
    { name: "Lebron James", message: "Tonight at the Staples Center" },
    { name: "Me", message: "Yeah I'm Down!" }
  ]
};

const Screen = styled(screen)`
  display: flex;
  flex-direction; column;
`;

const ChatHeader = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ChatHeaderText = styled.Text`
  font-size: 24px;
  color: white;
`;

const ChatBody = styled.View`
  flex: 10;
  background: white;
`;

const ChatFooter = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatBox = styled.TextInput`
  background: white;
  height: 40;
  width: 90%;
  font-size: 20px;
  border-radius: 50;
  padding-left: 20;
  padding-right: 20;
`;

const ChatMessageContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 10;
  padding-bottom: 10;
  width: 100%;
  justify-content: ${props => (props.left ? "flex-start" : "flex-end")};
`;

const MessageContainer = styled.View`
  display: flex;
  justify-content: center;
  background: ${props => (props.sender ? "red" : "lightgrey")};
  border-radius: 25;
  padding-right: 20;
  padding-left: 20;
`;

const ChatAvatar = styled.Image`
  height: 50;
  width: 50;
  border-radius: 25;
  margin-right: 10;
  margin-left: 10;
`;

const Received = styled.Text`
  font-size: 20px;
  color: white;
  flex: 1;
`;

class BackButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Text>Hello, World!</Text>;
  }
}

class ChatMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let component;

    if (this.props.name === yourId) {
      component = (
        <ChatMessageContainer left={true}>
          <ChatAvatar
            source={{
              uri: sampleAvatar
            }}
          />
          <MessageContainer sender={true}>
            <Received>{this.props.message}</Received>
            <Text>
              {new Date().toLocaleDateString("en-GB")}{" "}
              {new Date().toLocaleTimeString()}{" "}
            </Text>
          </MessageContainer>
        </ChatMessageContainer>
      );
    } else {
      component = (
        <ChatMessageContainer left={false}>
          <MessageContainer sender={false}>
            <Received>{this.props.message}</Received>
            <Text>
              {new Date().toLocaleDateString("en-GB")}{" "}
              {new Date().toLocaleTimeString()}{" "}
            </Text>
          </MessageContainer>
          <ChatAvatar
            source={{
              uri: sampleAvatar
            }}
          />
        </ChatMessageContainer>
      );
    }

    return <ChatMessageContainer>{component}</ChatMessageContainer>;
  }
}

class ChatInput extends React.Component {
  render() {
    return <View />;
  }
}

export default class ChatScreen extends React.Component {
  render() {
    return (
      <LinearGradient colors={["rgba(242,74,74,1.0)", "rgba(252,70,107,1.0)"]}>
        <Screen>
          <ChatHeader>
            <ChatHeaderText>{sampleData.name}</ChatHeaderText>
          </ChatHeader>
          <ChatBody>
            {sampleData.message.map((data, index) => {
              return <ChatMessage name={data.name} message={data.message} />;
            })}
          </ChatBody>
          <ChatFooter>
            <ChatBox placeholder="Send a Message" />
          </ChatFooter>
        </Screen>
      </LinearGradient>
    );
  }
}
