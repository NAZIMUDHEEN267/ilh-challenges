import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    height: 100%;
    padding: 20px;
    margin-bottom: 80px;
`;

export const Nav = styled.View`
    width: 100%;
    height: 100px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px;
    border-bottom-width: 1px;
    border-color: #d6d2c5;
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.Image`
    width: 50px;
    height: 50px;
    margin-left: 15px;
    align-self: center;
    margin-top: -15px;
`;

export const MenuBar = styled.TouchableOpacity`
    width: 45px;
    height: 45px;
    border-width: 1px;
    border-color: #00C458;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`;

export const LineBtn = styled.TouchableOpacity`
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    height: 50px;
    width: 100px;
    border-width: 2px;
    border-color: black;
    border-radius: 5px;
    flex-direction: row;
`;

export const BtnText = styled.Text`
    font-size: 15px;
    color: black;
    font-weight: 600;
`;

export const Section = styled.View`
    padding-vertical: 12px;
    width: 100%;
`;

export const SideText = styled.Text`
    font-size: 15px;
    font-weight: 600;
    color: #111;
    text-align: left;
    margin-bottom: 10px;
`;

export const VideoText = styled.Text`
    color: #fff;
    font-size: 13px;
    position: absolute;
    bottom: 5%;
    left: 5%;
    z-index: 1;
    padding: 2px;
    border-radius: 2px;
    backgroundColor: rgba(0,0,0,.5);
    letter-spacing: 1.2px;
`;

export const Box = styled.View`
    height: 420px;
    padding: 20px;
    justify-content: space-between;
    background-color: #002333;
    border-radius: 5px;
`;

export const ProfileImg = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin-vertical: 5px;
`;

export const BoxHeadline = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: 600;
    margin-vertical: 5px;
`;

export const BoxText = styled.Text`
    font-size: 13px;
    color: #999;
    font-weight: 500;
    margin-vertical: 5px;
`;

export const BoxButton = styled.TouchableOpacity`
    margin-top: 8px;
    border-radius: 5px;
    background-color: #00C458;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 50px;
`;