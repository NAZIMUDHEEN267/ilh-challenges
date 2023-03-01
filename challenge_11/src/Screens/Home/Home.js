import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Video from "react-native-video";
import Fontawesome from "react-native-vector-icons/FontAwesome";
import SelectDropdown from 'react-native-select-dropdown';
import CompanyLogo from "../../Assets/Images/logo.png";
import dataObj from "./data";

import {
  Nav,
  Image,
  LineBtn,
  MenuBar,
  Row,
  Container,
  BtnText,
  Section,
  Box,
  SideText,
  ProfileImg,
  BoxHeadline,
  BoxText,
  BoxButton,
  VideoText
} from './Styles/Home';
import { ScrollView } from 'react-native-gesture-handler';
import data from './data';

// get screen width
const { width } = Dimensions.get("screen");

const Home = ({ navigation }) => {
  // states for videos
  const [isPause, setIsPause] = useState([
    { "0": true },
    { "2": true },
    { "4": true },
    { "6": true },
    { "8": true },
    { "10": true },
    { "12": true }
  ]);

  const timeGreeting = function () {
    const hrs = new Date().getHours;
    if (hrs < 12) return "Good morning";
    else if (hrs > 12 && hrs < 17) return "Good after noon";
    else return "Good evening"
  };

  return (
    <ScrollView>
      {/* navbar */}
      <Nav>
        <Row>
          <MenuBar onPress={navigation.openDrawer}>
            <AntDesign name={"appstore1"} size={20} color={"#00C458"} />
          </MenuBar>
          <Image source={CompanyLogo} resizeMode={"center"} />
        </Row>

        <LineBtn style={{ borderColor: "#00C458" }}>
          <Entypo name="controller-record" size={25} color="green" />
          <BtnText style={{ color: "#00C458" }}>Classes</BtnText>
        </LineBtn>
      </Nav>

      {/* body */}
      <Container>
        {/* greeting section */}
        <Section>
          <Text style={{ fontWeight: "600", fontSize: 14 }}>{timeGreeting()}</Text>
          <Text style={{ fontSize: 26, color: "#000", fontWeight: "400" }}>{"Nazimudheen"}</Text>
        </Section>
        {/* dropdown section */}
        <Section>
          <SelectDropdown
            data={[8, 9, 10, 11, 12]}
            buttonStyle={{
              width: "100%",
              height: 70,
              backgroundColor: "#002333",
              paddingHorizontal: 20
            }}
            rowTextStyle={{ color: "#fff" }}
            buttonTextStyle={{ color: "#fff", textAlign: 'left' }}
            rowStyle={{ width: "100%", backgroundColor: "#002333" }}
            renderDropdownIcon={() => <Fontawesome name={"angle-down"} size={25} color={"#fff"} />}
            defaultButtonText={"Select class"}
          />
        </Section>

        {/* scroll button section */}
        <Section>
          <ScrollView
            horizontal
            pagingEnabled
            snapToInterval={100}
            decelerationRate='fast'
            showsHorizontalScrollIndicator={false}
          >
            {
              dataObj.subArray
                .map((subject, i) => {
                  if (typeof subject === "string") {
                    return (
                      (
                        <LineBtn key={String(i)} onPress={() => navigation.navigate(subject)}>
                          <Entypo name="controller-record" size={25} color="#00C458" />
                          <BtnText>{subject}</BtnText>
                        </LineBtn>
                      )
                    )
                  } else {
                    return (
                      <View style={{ width: 20 }} key={String(i)} />
                    )
                  }
                })
            }
          </ScrollView>
        </Section>

        {/* scrolling video section */}
        <Section>

          <SideText>Recent Courses</SideText>

          <ScrollView
            horizontal
            pagingEnabled
            snapToInterval={100}
            decelerationRate='fast'
            showsHorizontalScrollIndicator={false}
          >
            {
              dataObj.videos
                .map((link, i) => {
                  if (link !== 0) {

                    let itemIndex = i;
                    return (
                      (
                        <View style={{ width: width * .59 }} key={i}>

                          <VideoText>
                            {dataObj.subArray[itemIndex]}
                          </VideoText>

                          <Video
                            source={link}
                            style={{ width: "100%", height: 130, backgroundColor: "#111" }}
                            paused={isPause[i / 2][String(i)]}
                            muted={false}
                            repeat
                          />

                          <TouchableOpacity style={{
                            backgroundColor: "rgba(0, 0, 0, .5)",
                            position: "absolute",
                            top: "40%",
                            left: "40%",
                            padding: 2,
                            borderRadius: 5
                          }} onPress={() => setIsPause((isPause) => isPause.map((obj, index) => {
                            if (itemIndex / 2 === index) {
                              return { [String(index * 2)]: !obj[String(index * 2)] }
                            }
                            return obj;
                          }))}
                            activeOpacity={.9}
                          >
                            <AntDesign
                              name={isPause[i / 2][String(i)] ? "playcircleo" : "pausecircleo"}
                              color={"#fff"}
                              size={30}
                            />
                          </TouchableOpacity>
                        </View>
                      )
                    )
                  } else {
                    return (
                      <View style={{ width: 20 }} key={String(i)} />
                    )
                  }
                })
            }
          </ScrollView>
        </Section>

        {/* box section */}
        <Section>
          <ScrollView horizontal>
            <Box style={{ marginRight: 20, width: width * .6 }}>
              <ProfileImg source={data.Teacher_1} resizeMode={"center"} />
              <BoxHeadline>
                Target live classes
              </BoxHeadline>
              <BoxText>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae praesentium aperiam minus ducimus quis modi, facere earum facilis voluptates, commodi voluptatibus quia beatae quidem quo pariatur nihil tempore doloremque.
              </BoxText>

              <BoxButton>
                <Text style={{ color: "#fff", fontWeight: "600" }}>Book a free class</Text>
              </BoxButton>
            </Box>

            <Box style={{ width: width * .6 }}>
              <ProfileImg source={data.Teacher_2} resizeMode={"center"} />
              <BoxHeadline>
                Available free online counseling classes
              </BoxHeadline>
              <BoxText>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum recusandae praesentium aperiam minus ducimus quis modi, facere earum facilis voluptates, commodi voluptatibus quia beatae quidem quo pariatur nihil tempore doloremque.
              </BoxText>

              <BoxButton>
                <Text style={{ color: "#fff", fontWeight: "600" }}>Book a free class</Text>
              </BoxButton>
            </Box>
          </ScrollView>
        </Section>
      </Container>
    </ScrollView>
  )
}

export default Home;