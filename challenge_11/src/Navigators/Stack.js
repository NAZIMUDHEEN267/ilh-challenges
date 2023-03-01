import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Registers path component
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text } from "react-native";
import Register from '../Screens/Registers/Register';
import Otp from '../Screens/Registers/Otp';
import StudentDetails from '../Screens/Registers/StudentDetails';
import SchoolBoard from '../Screens/Registers/SchoolBoard';
import Video from "../Screens/Home/Subjects/Chapter/Video";
import ChapterTest from "../Screens/Home/Subjects/Chapter/ChapterTest";
import QN_Bank from "../Screens/Home/Subjects/Chapter/QN_Bank";
import Resources from "../Screens/Home/Subjects/Chapter/Resources";
import {
    Share,
    Learn,
    Kids,
    Page,
    TitlePage
} from '../Screens/Registers/AppTour';

import Home from "../Screens/Home/Home"; // Home based path components
import HomeBio from "../Screens/Home/Subjects/Biology";
import HomeEng from "../Screens/Home/Subjects/English";
import HomeMat from "../Screens/Home/Subjects/Maths";
import HomeIt from "../Screens/Home/Subjects/It";
import HomeChem from "../Screens/Home/Subjects/Chemistry";
import HomePhy from "../Screens/Home/Subjects/Physics";
import HomeHis from "../Screens/Home/Subjects/History";

import Stream from "../Screens/Home/Subjects/Chapter/Stream";

import Drawer from "./Drawer" // navigator

import Header from "../Screens/Home/Subjects/Chapter/Header";

const { Navigator, Screen } = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

// main stack navigator
const StackNavigator = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Register" component={Register} />
            <Screen name="OTP" component={Otp} />
            <Screen name="StudentDetails" component={StudentDetails} />
            <Screen name="SchoolBoard" component={SchoolBoard} />
            <Screen name="Share" component={Share} />
            <Screen name="Learn" component={Learn} />
            <Screen name="Kids" component={Kids} />
            <Screen name="Page" component={Page} />
            <Screen name="TitlePage" component={TitlePage} />
            <Screen name="Drawer" component={Drawer} />
        </Navigator>
    )
};

// home stack navigator
const HomeStackScreens = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="Home" component={Home} options={({ navigation }) => {

                return (
                    {
                        tabBarButton: (props) => (
                            <TabButton
                                style={navigation.isFocused() ? afterStyle : beforStyle}
                                onPress={() => navigation.navigate("Home")}
                            >
                                {navigation.isFocused() ? (
                                    <>
                                        <AntDesing name="home" size={20} color={"green"} />
                                        <TabBtnText>Home</TabBtnText>
                                    </>
                                ) : (
                                    <AntDesing name="home" size={20} color={"#999"} />
                                )}
                            </TabButton>)
                    })
            }} />
            <Screen name="Biology" component={HomeBio} />
            <Screen name="English" component={HomeEng} />
            <Screen name="Maths" component={HomeMat} />
            <Screen name="It" component={HomeIt} />
            <Screen name="Chemist" component={HomeChem} />
            <Screen name="Physics" component={HomePhy} />
            <Screen name="History" component={HomeHis} />
            <Screen name="TopTab" options={{
                header: Header,
                headerShown: true,
            }}>
                {({route}) => (
                    (
                        <TopTab.Navigator screenOptions={{
                            tabBarIndicatorContainerStyle: { backgroundColor: "#002333" },
                            tabBarPressColor: "red",
                            tabBarLabel: ({ focused, children }) => (focused ? <Text style={{ color: "#fff" }}>{children}</Text> : <Text style={{ color: "#999" }}>{children}</Text>),
                            tabBarIndicatorStyle: { borderColor: "#00C458", borderWidth: 1.5 }
                        }}>
                            <TopTab.Screen name="Video" component={Video} initialParams={{details: route.params}}/>
                            <TopTab.Screen name="ChapterTest" component={ChapterTest} />
                            <TopTab.Screen name="QN_Bank" component={QN_Bank} />
                            <TopTab.Screen name="Resources" component={Resources} />
                        </TopTab.Navigator>
                    )
                )}
            </Screen>
            <Screen name="Stream" component={Stream} />
        </Navigator>
    )
};

export { StackNavigator, HomeStackScreens }