import React from "react";
import { Text, View, TextInput, Image } from "react-native";
import styled from "styled-components";
import { screen } from "./base/style";
import { LinearGradient, MapView, Svg } from "expo";
import { hamburger, notification, home, user } from "../icons/svg.json";
const { Circle, Rect, Path } = Svg;

const sampleAvatar =
  "https://pm1.narvii.com/6877/6fb5095a580595577174f749d566c564f5c42d42r1-1920-1080v2_128.jpg";

const sampleData = [
  {
    name: "Basketball",
    location: { name: "Staples Center", city: "Los Angeles", state: "CA" }
  },
  {
    name: "Basketball",
    location: { name: "Staples Center", city: "Los Angeles", state: "CA" }
  },
  {
    name: "Basketball",
    location: { name: "Staples Center", city: "Los Angeles", state: "CA" }
  }
];

const Screen = styled(screen)`
  display: flex;
  flex-direction; column;
`;

const Silver = styled.View`
  background: #ebebeb;
`;

const SearchContainer = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const MapTab = styled.View`
  position: absolute;
  top: 0;
  height: 15%;
  width: 100%;
  background: white;
  z-index: 1001;
  border-bottom-left-radius: 10;
  border-bottom-right-radius: 10;
`;

const Listing = styled.View``;

const Feed = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 25%;
  background: white;
  z-index: 1001;
  shadowColor: #000;
  shadowOffset: { width: 0, height: 1 };
  shadowOpacity: 0.3;
  shadowRadius: 2;
  border-top-left-radius: 10;
  border-top-right-radius: 10;
  padding:5%;
  overflow:hidden;
  `;

const FeedItem = styled.View`
  display: flex;
`;

const Footer = styled.View`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding-left: 2.5%;
  padding-right: 2.5%;
`;

const MapContainer = styled.View`
  flex: 9;
  width: 100%;
  background: pink;
`;

const PlaceholderTab = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 50;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  & Text {
    color: white;
  }
`;

const Filter = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: white;
`;

const SearchBar = styled.TextInput`
  width: 251px;
  height: 39px;
  background: #f24a4a;
  border: 2px solid #ffffff;
  border-radius: 40px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  text-align: left;
  padding-left: 5%;
  padding-right: 2.5%;
  color: #ffffff;
  &::placeholder {
    color: white;
  }
  &:focus {
    outline: none;
  }
`;

const StyledView = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PostContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding-bottom: 10;
  margin-bottom: 10;
  border-bottom-width: 1;
  border-bottom-color: rgb(240, 240, 240);
`;

const PostText = styled.Text`
  flex: 4;
`;

const PostInformationContainer = styled.View`
  display: flex;
  justify-content: center;
`;

const PostInformation = styled.Text``;

const PostTextContainer = styled.View`
  flex: 4;
  display: flex;
  justify-content: center;
`;

const PostImageContainer = styled.View`
  flex: 1;
`;
const PostImage = styled.Image`
  height: 50;
  width: 50;
  border-radius: 25;
`;

const ResizeFeed = styled.View`
  height: 20;
  width: 20;
  border-radius: 10;
  position: absolute;
  background: black;
  left: 52.5%;
  top: -7.5%;
  z-index: 10001;
`;

class Post extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <PostContainer>
        <PostImageContainer>
          <PostImage
            source={{
              uri: this.props.avatar
            }}
          />
        </PostImageContainer>
        <PostTextContainer>
          <Text>{this.props.name}</Text>
          <Text>{this.props.location}</Text>
        </PostTextContainer>
        <PostInformationContainer>
          <Text>0.4 Miles</Text>
        </PostInformationContainer>
      </PostContainer>
    );
  }
}

/*
            <MapTab>
              <Filter>
                <Text>Friends</Text>
                <Text>Circle</Text>
                <Text>Family</Text>
              </Filter>
            </MapTab>
*/

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Silver>
        <Screen>
          <SearchContainer>
            <Svg
              style={{ position: "absolute", left: 0 }}
              height={64}
              width={64}
            >
              <Path d={hamburger[0]} />
              <Path d={hamburger[1]} />
              <Path d={hamburger[2]} />
            </Svg>
            <SearchBar
              placeholderTextColor="white"
              placeholder="Search: SJSU, SJC,...."
              editable={true}
            />
            <Svg
              style={{ position: "absolute", right: 0 }}
              height={64}
              width={64}
            >
              <Path d={notification}>
                <text x="10" y="10">
                  1
                </text>
              </Path>
            </Svg>
          </SearchContainer>
          <MapContainer>
            <MapView style={{ width: "100%", aspectRatio: 1 }} />
            <Feed>
              {sampleData.map((data, index) => {
                return (
                  <Post
                    avatar={sampleAvatar}
                    location={data.location.name}
                    name={data.name}
                  />
                );
              })}
            </Feed>
          </MapContainer>
          <Footer>
            <Svg height="64" width="64" viewbox="0 0 48 48">
              <Path d={home} />
            </Svg>
            <Svg height="64" width="64" viewbox="0 0 48 48">
              <Path d={home} />
            </Svg>
            <Svg height="64" width="64" viewbox="0 0 48 48">
              <Path d={user} />
            </Svg>
            <Svg height="64" width="64" viewbox="0 0 48 48">
              <Path d={home} />
            </Svg>
            <Svg height="64" width="64" viewbox="0 0 48 48">
              <Path d={home} />
            </Svg>
          </Footer>
        </Screen>
      </Silver>
    );
  }
}
