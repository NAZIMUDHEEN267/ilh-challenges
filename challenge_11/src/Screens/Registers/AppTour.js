import React from 'react';
import { Container, Description, Headline, Image, Button } from "./Styles/AppTour";
import Icon from "react-native-vector-icons/AntDesign";
import ShareImg from "../../Assets/Images/share.jpg";
import LarnImg from "../../Assets/Images/learn.jpg";
import KidsImg from "../../Assets/Images/kids.jpg";
import PageImg from "../../Assets/Images/fullscreen.jpg";
import TitlePageImg from "../../Assets/Images/title.jpg";

const Share = ({ navigation: { navigate } }) => (
    <Container>
        <Image source={ShareImg} resizeMode={"contain"} />
        <Headline>Fractional Shares</Headline>
        <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias pariatur enim, dignissimos ullam ratione error reiciendis officiis nemo, ducimus expedita quam illo iste autem qui! Ut minima expedita quam quos!</Description>
        <Button onPress={() => navigate("Learn")}>
            <Icon name="arrowright" size={35} color={"#fff"} />
        </Button>
    </Container>
)

const Learn = ({ navigation: { navigate } }) => (
    <Container>
        <Image source={LarnImg} resizeMode={"contain"} />
        <Headline>Learn As You Go</Headline>
        <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias pariatur enim, dignissimos ullam ratione error reiciendis officiis nemo, ducimus expedita quam illo iste autem qui! Ut minima expedita quam quos!</Description>
        <Button onPress={() => navigate("Kids")}>
            <Icon name="arrowright" size={35} color={"#fff"} />
        </Button>
    </Container>
)

const Kids = ({ navigation: { navigate } }) => (
    <Container>
        <Image source={KidsImg} resizeMode={"contain"} />
        <Headline>Kids And Seen</Headline>
        <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias pariatur enim, dignissimos ullam ratione error reiciendis officiis nemo, ducimus expedita quam illo iste autem qui! Ut minima expedita quam quos!</Description>
        <Button onPress={() => navigate("Page")}>
            <Icon name="arrowright" size={35} color={"#fff"} />
        </Button>
    </Container>
)

const Page = ({ navigation: { navigate } }) => (
    <Container>
        <Image source={PageImg} resizeMode={"contain"} />
        <Headline>Full Screen Page</Headline>
        <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias pariatur enim, dignissimos ullam ratione error reiciendis officiis nemo, ducimus expedita quam illo iste autem qui! Ut minima expedita quam quos!</Description>
        <Button onPress={() => navigate("TitlePage")}>
            <Icon name="arrowright" size={35} color={"#fff"} />
        </Button>
    </Container>
)

const TitlePage = ({ navigation: { navigate } }) => (
    <Container>
        <Image source={TitlePageImg} resizeMode={"contain"} />
        <Headline>Another Title Page</Headline>
        <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias pariatur enim, dignissimos ullam ratione error reiciendis officiis nemo, ducimus expedita quam illo iste autem qui! Ut minima expedita quam quos!</Description>
        <Button style={{
            backgroundColor: "#e5e5e5",
            elevation: 2,
            borderColor: "r#000"
        }}
            onPress={() => navigate("Drawer")}>
            <Headline>Done</Headline>
        </Button>
    </Container>
)

export { Share, Learn, Kids, Page, TitlePage };