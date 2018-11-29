import React from "react";
import { Text, View, Image, StatusBar } from "react-native";
import styled from "styled-components";
import { screen } from "./base/style";
import { sampleAvatar, sampleCover } from "./base/constants";

const ProfileData = {
  name: "LeBron James",
  age: 33,
  avatar: sampleAvatar,
  coverImage: sampleCover,
  description: "I play basketball for the Los Angeles Lakers",
  data: {
    ratings: 4.8,
    eventRating: 5
  }
};

const ProfileListing = {
  page: 1,
  events: [
    {
      id: Math.floor(Math.random() * 100),
      name: "Basketball",
      location: "Staples Center",
      date: new Date().toLocaleDateString("en-GB")
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Basketball",
      location: "Staples Center",
      date: new Date().toLocaleDateString("en-GB")
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Basketball",
      location: "Staples Center",
      date: new Date().toLocaleDateString("en-GB")
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Basketball",
      location: "Staples Center",
      date: new Date().toLocaleDateString("en-GB")
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Basketball",
      location: "Staples Center",
      date: new Date().toLocaleDateString("en-GB")
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Basketball",
      location: "Staples Center",
      date: new Date().toLocaleDateString("en-GB")
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Basketball",
      location: "Staples Center",
      date: new Date().toLocaleDateString("en-GB")
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Basketball",
      location: "Staples Center",
      date: new Date().toLocaleDateString("en-GB")
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Basketball",
      location: "Staples Center",
      date: new Date().toLocaleDateString("en-GB")
    },
    {
      id: Math.floor(Math.random() * 100),
      name: "Basketball",
      location: "Staples Center",
      date: new Date().toLocaleDateString("en-GB")
    }
  ]
};

const Screen = styled(screen)`
  display: flex;
  flex-direction; column;
  padding-top: 0;
`;

const CoverPageImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const ProfileAvatar = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 50;
  margin-top: -50px;
  margin-left: 20px;
  border: 2.5px solid white;
`;

const ProfileStats = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: -50px;
  padding-right: 20px;
`;

const ProfileHeader = styled.View`
  display: flex;
  flex: 4;
  flex-direction: column;
  background: green;
`;

const ProfileContent = styled.View`
  flex: 5;
  padding-top: 50px;
  padding-left: 20px;
`;

const Name = styled.Text`
  font-size: 24px;
  margin-bottom: 5px;
`;

const RatingName = styled.Text``;

const RatingContainer = styled.View`
  padding-top: 5px;
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

const ProfileRating = ({ name, data }) => (
  <RatingContainer>
    <RatingName>{name}</RatingName>
    <Text>{data}</Text>
  </RatingContainer>
);

const EventListing = ({ data }) => (
  <View>
    <Text>{data.name}</Text>
  </View>
);

const Description = styled.Text`
  margin-bottom: 20px;
`;

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <Screen>
        <StatusBar barStyle="light-content" />
        <ProfileHeader>
          <CoverPageImage
            source={{
              uri: ProfileData.coverImage
            }}
          />
          <ProfileAvatar
            source={{
              uri: ProfileData.avatar
            }}
          />
          <ProfileStats>
            <ProfileRating name="Events" data={9000} />
            <ProfileRating name="Rating" data={9000} />
          </ProfileStats>
        </ProfileHeader>
        <ProfileContent>
          <Name>
            {ProfileData.name}, {ProfileData.age}
          </Name>
          <Description>{ProfileData.description}</Description>
          {ProfileListing.events.map((data, index) => {
            return <EventListing data={data} />;
          })}
        </ProfileContent>
      </Screen>
    );
  }
}
