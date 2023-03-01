import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionic from "react-native-vector-icons/Ionicons";
import { videoApi } from "../../../Api/api";
import {
    ChapterText,
    ContainerTop,
    NavMenu,
    ProfileContainer,
    SubjectText,
    Row,
    ChapterBtn
} from "./Styles/Templete";
import { ScrollView } from "react-native-gesture-handler";

export default function Template(props) {
    const [videoData, setVideoData] = useState([]);

    useEffect(() => {
       async function apiCall(){
           const videoResponce = await videoApi(props.subject);
           setVideoData(videoData => [...videoData, ...videoResponce]);
       }
       apiCall();
    }, []);

    return (
        <View style={{backgroundColor: "#fff"}}>
            {/* subject nav */}
            <ContainerTop>
                <NavMenu onPress={props.goBack}>
                    <FontAwesome name="angle-left" size={20} color="green" />
                </NavMenu>

                {/* subject text */}
                <View>
                    <SubjectText>
                        {props.subject}
                    </SubjectText>
                    <Row>
                        <Row>
                            <Ionic name="radio-button-on" size={12} color="#00C458" />
                            <ChapterText>12 chapters</ChapterText>
                        </Row>
                        <Row>
                            <Ionic name="radio-button-on" size={12} color="#00C458" />
                            <ChapterText>124 Hours</ChapterText>
                        </Row>
                    </Row>
                </View>
            </ContainerTop>

            {/* buttons for video */}
            <ProfileContainer>
                <ScrollView>
                    {
                        videoData.map((item, i) => {
                            const getVideoName = item.video.slice(29,);
                            const findNumber = getVideoName.search(/[0-9]/);
                            const textName = getVideoName.slice(0, findNumber - 1);

                            return (
                                <ChapterBtn key={i} onPress={() => props.nav("TopTab", {name: props.subject, source: item, chapter: textName})}>
                                    <Text style={{
                                        textAlign: "center",
                                        fontWeight: "600",
                                        fontSize: 15
                                    }}>{textName}</Text>
                                </ChapterBtn>
                            )
                        })
                    }
                </ScrollView>
            </ProfileContainer>
        </View>
    );
}