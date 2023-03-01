import { Dimensions, View } from 'react-native';
import styled from 'styled-components/native';
import Ionic from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const { height } = Dimensions.get("screen");

const Header = ({ route, navigation }) => {

    const upperCase = Array.from(route.params.chapter).map((letter, i) => {
        if(i === 0) {
            return letter.toUpperCase();
        }
        return letter
    }).join("");
    
    const chapter = upperCase.split("-").join(" ");

    return (
        <Container height={height}>
            <TopRow>
                <NavMenu onPress={navigation.goBack}>
                    <FontAwesome name="angle-left" size={25} color="green" />
                </NavMenu>
                <SubjectText>{route.params.name}</SubjectText>
            </TopRow>
            <View>
                <MainText>{chapter}</MainText>
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
        </Container>
    )
}

const Container = styled.View`
    height: ${props => parseInt(props.height * .3)}px;
    width: 100%;
    background-color: #00202F;
    padding: 20px;
    justify-content: space-between;
`;

const NavMenu = styled.TouchableOpacity`
    height: 30px;
    width: 30px;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-color: #e5e5e5;
    border-radius: 5px;
`;

const SubjectText = styled.Text`
    font-size: 20px;
    color: #fff;
    font-weight: 600;
    margin-bottom: 10px;
`;

const TopRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 10px;
    width: 60%;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
`;

const MainText = styled.Text`
    font-size: 26px;
    color: #fff;
    font-weight: 600;
    text-align: left;
    margin-bottom: 10px;
`;

const ChapterText = styled.Text`
    color: #00C458;
    font-size: 13px;
`;

export default Header