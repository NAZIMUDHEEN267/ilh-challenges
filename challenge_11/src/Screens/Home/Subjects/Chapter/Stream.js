import { View, ActivityIndicator, W } from "react-native";
import styled from "styled-components/native";
import AntiDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";
import Video from "react-native-video";
import { ContainerTop } from "../Styles/Templete";
import WebView from "react-native-webview";

const Stream = ({ route }) => {
    const path = route.params.details;

    return (
        <View style={{ height: "100%", width: "100%" }}>
            {/* video container */}
                <WebView 
                    source={{uri: path.source.video}}
                    style={{height: "100%", width: "100%"}}
                />

            {/* body */}
            <ContainerBody>

                {/* video text */}
                <TextContainer style={{ borderBottomWidth: 1, borderBottomColor: "rgba(194, 172, 171, .3)" }}>
                    <VideoText style={{marginBottom: 10}}>
                        {path.chapter.split("-").join(" ")}
                    </VideoText>
                    <Icon style={{ flex: .2 }}>
                        <AntiDesign name="clouddownloado" color="#999" size={33} />
                    </Icon>
                </TextContainer>

                {/* change video */}
                <TextContainer style={{
                    justifyContent: "space-between",
                    borderBottomWidth: 1, 
                    borderBottomColor: "rgba(194, 172, 171, .3)",
                    height: 70
                }}>
                    <Icon>
                        <AntiDesign name="arrowleft" color="#999" size={23} />
                        <ChapterText style={{ color: "#999" }}> Preview</ChapterText>
                    </Icon>
                    <Row>
                        <Ionic name="radio-button-on" size={12} color="#00C458" />
                        <ChapterText> Part 1</ChapterText>
                    </Row>
                    <Icon>
                        <ChapterText style={{ color: "#999" }}>Next </ChapterText>
                        <AntiDesign name="arrowright" color="#999" size={23} />
                    </Icon>
                </TextContainer>
            </ContainerBody>
        </View>
    )
}

const ContainerBody = styled.View`
    height: 50%;
    width: 100%;
    background-color: #002333;
    padding: 10px;
`;

const TextContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

const VideoText = styled.Text`
  text-align: left;
  font-size: 17px;
  font-weight: 600;
  color: #fff;
  margin: 5px;
  flex: .8;
`;

const Icon = styled.View`
    flex: .3; 
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const Row = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
`;

const ChapterText = styled.Text`
    color: #00C458;
    font-size: 13px;
`;

export default Stream;