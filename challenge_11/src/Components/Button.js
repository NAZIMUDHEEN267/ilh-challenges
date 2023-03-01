const { default: styled } = require("styled-components/native");

export const ButtonContainer = styled.TouchableOpacity `
    width: 90%;
    align-self: center;
    padding: 20px;
    background-color: #00C458;
    border-radius: 5px;
    margin-top: 10px;
`;

export const ButtonText = styled.Text `
    font-weight: 500;
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
`