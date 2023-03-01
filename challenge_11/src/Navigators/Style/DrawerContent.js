import styled from "styled-components/native";
export const DrawerHeader = styled.View`
    width: 100%;
    padding: 10px;
    justify-content: center;
    height: ${props => parseInt(props.height * .20)}px
`;

export const Profile = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 15px;
`;

export const ProfileImg = styled.Image`
    border-width: 3px;
    border-color: #00C458;
    border-radius: 50px;
    height: 60px;
    width: 60px;
`;

export const ProfileName = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: 500;
`;

export const ProfileId = styled.Text`
    color: #999;
    font-size: 13px;
`;

export const CloseBtn = styled.TouchableOpacity`
    position: absolute;
    top: 5%;
    left: 5%;
    border-width: 2px;
    border-color: #efefef;
    border-radius: 2px;
    padding: 4px;
`;

export const DrawerBody = styled.View`
    padding: 20px;
    height: ${props => parseInt(props.height * .6)}px;
    justify-content: space-between;
`;

export const LinkContainer = styled.View`
    flex-direction: row;
    align-items: center;
    border-bottom-color: rgba(201, 192, 183, .3);
    border-bottom-width: 1px;
    width: 100%;
    height: 40px;
    padding-left: 30px;
    padding-bottom: 5px;
`;

export const LinkBox = styled.View`
    height: 20px;
    width: 20px;
    border-color: #00C458;
    border-width: 1px;
`;

export const LinkText = styled.Text`
    color: #e5e5e5;
    font-size: 16px;
    margin-left: 9px;
    font-weight: 600;
`;

export const DrawerBtn = styled.TouchableOpacity`
    width: 80%;
    align-self: center;
    margin-vertical: 10px;
    border-radius: 5px;
    border-width: 2px;
    border-color: #00C458;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;
