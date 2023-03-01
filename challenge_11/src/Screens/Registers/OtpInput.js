import React, { useRef, useState, useEffect } from "react";
import {
    OtpInputContainer,
    TextInputHidden,
    SplitOtpBoxesContainer,
    SplitBoxes,
    SplitBoxText,
    SplitBoxesFocused
} from "./Styles/Otp";

const OtpInput = ({ code, setCode, maximumLength, setIsPinReady }) => {
    // Used for store text input details
    const inputRef = useRef();
    const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);
    
    // When user tap on the text boxes this function will occurred
    const handleOnPress = () => {
        setIsInputBoxFocused(true);
        inputRef.current.focus();
    }
    
    // When focus out this function will called
    const handleOnBlur = () => {
        setIsInputBoxFocused(false);
    };

    // Used for iteration through "code" (string storage for numeric values)
    const boxArray = new Array(maximumLength).fill(0);
    
    // hook
    useEffect(() => {
        setIsPinReady(code.length === maximumLength);

      return () => {
        setIsPinReady(false);
      }
    }, [code]);
    
    
    const boxDigit = (_, index) => {

        const digit = code[index] || "";

        const isOnFocus = index === code.length - 1;
        const StyledSplitBox = (isOnFocus && isInputBoxFocused) ? SplitBoxesFocused : SplitBoxes;
        
        return (
            <StyledSplitBox key={index}>
                <SplitBoxText>{digit}</SplitBoxText>
            </StyledSplitBox>
        )
    }

    return (
        <OtpInputContainer>
            <SplitOtpBoxesContainer onPress={handleOnPress}>
                {boxArray.map(boxDigit)}
            </SplitOtpBoxesContainer>
            <TextInputHidden
                value={code}
                onChangeText={setCode}
                maxLength={maximumLength}
                ref={inputRef}
                onBlur={handleOnBlur}
                keyboardType="number-pad"
            />
        </OtpInputContainer>
    )
}

export default OtpInput;