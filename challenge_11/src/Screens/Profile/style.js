import styled from "styled-components/native";

export const ContainerTop = styled.View`
    height: 250px;
    width: 100%;
    background-color: #002333;
    position: absolute;
    top: 0;
    left: 0;
`;

export const ContainerNav = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 20px;
`;

export const NavText = styled.Text`
    color: #e5e5e5;
    font-size: 15px;
    font-weight: 600;
    margin-right: 20px;
`;

export const NavMenu = styled.View`
    height: 30px;
    width: 30px;
    align-items: center;
    justify-content: center;
    border-width: 2px;
    border-color: #e5e5e5;
    margin-left: 20px;
    border-radius: 5px;
`;

export const ProfileContainer = styled.View`
    height: ${props => parseInt(props.height - 200)}px;
    width: 90%;
    align-self: center;
    background-color: #fff;
    margin-top: 100px;
    margin-bottom: 110px;
    elevation: 5;
    border-radius: 5px;
    padding: 15px;
`;

export const UserDetails = styled.View`
    height: 80px;
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const ProfileImg = styled.Image`
    height: 60px;
    width: 60px;
    margin-right: 20px;
`;

export const ProfileName = styled.Text`
    color: #222;
    font-size: 16px;
    font-weight: 500;
`;

export const ProfileId = styled.Text`
    color: #999;
    font-size: 13px;
`;

export const DetailsBox = styled.View`
    margin-vertical: 10px;
`;

export const BoxItem = styled.View`
    flex-direction: row;
    padding-horizontal: 10px;
    padding-vertical: 10px;
`;

export const MainHeadline = styled.Text`
    text-align: left;
    font-weight: 600;
    font-size: 15px;
    color: #111;
    margin-bottom: 10px;
`;

export const InfoTypeText = styled.Text`
    color: #555;
    font-size: 13px;
`;

export const InfoText = styled.Text`
    color: #111;
    font-size: 13px;
    margin-left: 20px;
`;

export const InfoBtn = styled.TouchableOpacity`
    width: 90%;
    padding: 5px;
    justify-content: center;  
    flex-direction: row;
    align-self: center;
    align-items: center;
    background-color: #00C458;
    border-radius: 5px;
    margin-bottom: 8px;
`;
