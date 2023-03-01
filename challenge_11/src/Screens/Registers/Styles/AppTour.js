import styled from "styled-components/native";

export const Container = styled.View `
    height: 100%;
    width: 100%;
    padding: 20px;
    align-items: center;
`;

export const Image = styled.Image`
    width: 90%;
    height: 60%;
    margin-bottom: 5px;
`;

export const Headline = styled.Text`
    font-size: 20px;
    text-align: center;
    margin-vertical: 5px;
    color: #000;
`;

export const Description = styled.Text `
    font-size: 15px;
    text-align: center;
    color: #999;
`;

export const Button = styled.TouchableOpacity`
    height: 60px;
    width: 60px;
    border-radius: 5px;
    background-color: #00C458;
    position: absolute;
    bottom: 10%;
    right: 5%;
    align-items: center;
    justify-content: center;
    border-width: .7px;
`;
