import styled from "styled-components/native";

export const OtpInputContainer = styled.View`
    align-items: center;
    `;

export const TextInputHidden = styled.TextInput`
    width: 300px;
    border-color: #e5e5e5;
    border-width: 1px;
    border-radius: 5px;
    padding: 15px;
    position: absolute;
    z-index: -1;
    opacity: 0;
    `;

export const SplitOtpBoxesContainer = styled.Pressable`
    width: 90%;
    flex-direction: row;
    justify-content: space-evenly;
` ;

export const SplitBoxes = styled.View`
    border-width: 2px;
    border-color: transparent;
    border-radius: 5px;
    padding: 8px;
    min-width: 45px;
    background-color: #062E40;
`;

export const SplitBoxesFocused = styled(SplitBoxes)`
    border-color: #00C458;
`;

export const SplitBoxText = styled.Text`
    font-size: 20px;
    color: #e5e5e5;
    align-self: center;
`;