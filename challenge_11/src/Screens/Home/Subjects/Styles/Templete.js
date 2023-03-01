import styled from "styled-components/native";

export const ContainerTop = styled.View`
    height: 30%;
    width: 100%;
    background-color: #002333;
    padding: 20px;
    padding-bottom: 50px;
    justify-content: space-between;
`;

export const NavMenu = styled.TouchableOpacity`
    height: 40px;
    width: 40px;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-color: #00C458;
    border-radius: 5px;
`;

export const ProfileContainer = styled.View`
    height: 65%;
    width: 90%;
    align-self: center;
    background-color: #e5e5e5;
    margin-top: -8%;
    margin-bottom: 110px;
    elevation: 5;
    border-radius: 5px;
    padding: 15px;
`;

export const SubjectText = styled.Text`
    font-size: 30px;
    color: #fff;
    font-weight: 600;
    margin-bottom: 10px;
`;

export const ChapterText = styled.Text`
    color: #00C458;
    font-size: 13px;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: 10px;
`;

export const ChapterBtn = styled.TouchableOpacity`
    width: 100%;
    border-radius: 5px;
    elevation: 5;
    background-color: #fff;
    padding: 30px;
    margin-bottom: 10px;
`;