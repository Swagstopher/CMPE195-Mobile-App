import React from "react";
import { Text, View, TextInput, Image } from "react-native";
import styled from "styled-components";
import { screen } from "./base/style";
import { sampleAvatar, sampleCover, alphabetUpper } from "./base/constants";

const Screen = styled(screen)`
  display: flex;
  background: #ebebeb;
`;

const FriendAvatar = styled.Image`
  height: 50;
  width: 50;
  border-radius: 25;
  margin-left: 2px;
  margin-right: 2px;
`;

const FriendName = styled.Text`
  font-size: 18px;
`;

const FriendsListHeader = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
`;

const FriendContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1;
  border-bottom-color: #ff0000;
  margin-left: 20;
`;

const FriendInfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;
  justify-content: space-around;
  width: 62.5%;
`;

const AlphabetContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

const Friend = ({ name, data }) => (
  <FriendContainer>
    <FriendInfoContainer>
      <FriendAvatar
        source={{
          uri: sampleAvatar
        }}
      />
      <FriendName>LeBron James</FriendName>
    </FriendInfoContainer>
  </FriendContainer>
);

const FriendsList = styled.View`
  display: flex;
  flex: 9;
`;

const FriendsListContentContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const FriendsListFeed = styled.View`
  display: flex;
  flex-direction: row;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
  padding-left: 20;
  padding-right: 20;
`;

const FriendsListSearch = styled.TextInput`
  width: 356px;
  height: 42px;

  background: #f24a4a;
  border: 4px solid #ffffff;
  border-radius: 40px;
  color: white;

  padding-left: 20;
  padding-right: 20;

  &::placeholder {
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

export default class FriendsListScreen extends React.Component {
  render() {
    return (
      <Screen>
        <FriendsListHeader>
          <FriendsListFeed>
            <FriendAvatar
              source={{
                uri: sampleAvatar
              }}
            />
            <FriendAvatar
              source={{
                uri: sampleAvatar
              }}
            />
            <FriendAvatar
              source={{
                uri: sampleAvatar
              }}
            />
          </FriendsListFeed>
          <FriendsListSearch />
        </FriendsListHeader>
        <FriendsListContentContainer>
          <FriendsList>
            <Friend />
            <Friend />
            <Friend />
          </FriendsList>
          <AlphabetContainer>
            {alphabetUpper.split("").map((data, index) => {
              return <Text>{data}</Text>;
            })}
          </AlphabetContainer>
        </FriendsListContentContainer>
      </Screen>
    );
  }
}
