import {
    createDrawerNavigator,
    DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Dimensions } from "react-native";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import BottomTab from "./BottomTab" // navigator component
import {
    DrawerHeader,
    Profile,
    ProfileImg,
    ProfileName,
    ProfileId,
    CloseBtn,
    LinkContainer,
    LinkBox,
    LinkText,
    DrawerBody,
    DrawerBtn
} from "./Style/DrawerContent";

const { height } = Dimensions.get("screen");

const { Navigator, Screen } = createDrawerNavigator();

const DrawerScreens = () => {
    return (
    <Navigator screenOptions={{ headerShown: false }} drawerContent={DrawerContents}>
        <Screen name="BottomTab" component={BottomTab}/>
    </Navigator>
)};


const links = [
    "Exam corner",
    "Subscriptions",
    "Analytics",
    "Downloads",
    "Notifications",
    "Referals",
    "Share app",
    "Log out"
];

function DrawerContents({navigation, route}) {
    return (
        <DrawerContentScrollView style={{ backgroundColor: "#002333" }}>

            {/* header */}
            <DrawerHeader height={height}>
                <CloseBtn onPress={() => navigation.closeDrawer()}>
                    <Icon name="close" color="#00C458" size={20} />
                </CloseBtn>

                <Profile>
                    <ProfileImg
                        source={require("../Assets/Images/profile.jpg")}
                        resizeMode={"contain"}
                    />
                    <View>
                        <ProfileName>Nazimudheen</ProfileName>
                        <ProfileId>1234</ProfileId>
                    </View>
                    <Icon name="angle-right" color={"#00C458"} size={19} />
                </Profile>
            </DrawerHeader>

            <DrawerBody height={height}>
                {/* links */}
                {
                    links.map((link, i) => {
                        if (i === links.length - 1) {
                            return (
                                <LinkContainer key={i}>
                                    <LinkBox style={{ borderColor: "crimson" }} />
                                    <LinkText style={{ color: "crimson" }}
                                    onPress={() => navigation.navigate("Register")}
                                    >{link}</LinkText>
                                </LinkContainer>
                            )
                        }
                        return (
                            <LinkContainer key={i}>
                                <LinkBox />
                                <LinkText>{link}</LinkText>
                            </LinkContainer>
                        )
                    })
                }
            </DrawerBody>

             {/* footer */}
             <DrawerBtn>
                <LinkText style={{ color: "#00C458"}}>Enquire now</LinkText>
             </DrawerBtn>
        </DrawerContentScrollView>
    )
}


export default DrawerScreens;