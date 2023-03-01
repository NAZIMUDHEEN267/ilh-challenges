import { ScrollView, Dimensions } from 'react-native'
import styled from 'styled-components/native';
import Ionic from "react-native-vector-icons/Ionicons";

const { height } = Dimensions.get("screen");

const Video = ({route: {params : {details}}, navigation}) => {
  return (
    <ScrollView style={{ padding: 10 }}>
      {
        Array(6).fill(0).map((_, i) => (
          <VideoItem
            key={i}
            height={height} activeOpacity={.7}
            onPress={() => navigation.navigate("Stream", {details})}
          >
            <VideoImg resizeMode={"cover"} source={{ uri: details.source.img }} />
            <VideoText>{details.chapter}</VideoText>
            <Row style={{ marginLeft: 8 }}>
              <Row>
                <Ionic name="radio-button-on" size={12} color="#999" />
                <ChapterText>1 chapters</ChapterText>
              </Row>
              <Row>
                <Ionic name="radio-button-on" size={12} color="#999" />
                <ChapterText> Part {i + 1}</ChapterText>
              </Row>
            </Row>
          </VideoItem>
        ))
      }
    </ScrollView>
  )
}

const VideoItem = styled.TouchableOpacity`
  height: ${props => props.height / 3.5}px;
  width: 100%;
  border-radius: 5px;
  elevation: 5;
  padding: 5px;
  margin-bottom: 5px;
`;

const VideoImg = styled.Image`
  height: 70%;
  width: 100%;
  background-color: #222;
`;

const VideoText = styled.Text`
  text-align: left;
  font-size: 15px;
  font-weight: 600;
  color: #111;
  margin: 5px;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
`;

export const ChapterText = styled.Text`
    color: #999;
    font-size: 13px;
`;

export default Video;