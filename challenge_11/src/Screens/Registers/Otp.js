import React, { useState } from 'react';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
    Pressable,
    Keyboard,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import BottomSheet from '../../Components/BottomSheet';
import BgImg from '../../Components/BgImg';
import Words from '../../Components/Words';
import OTPInput from './OtpInput';
import { ButtonContainer, ButtonText } from '../../Components/Button';

function Otp({ navigation: { navigate }, route }) {

    const [otpCode, setOtpCode] = useState("");
    const [isPinReady, setIsPinReady] = useState(false);
    const maxCodeLength = 6;

    return (
        <Pressable onPress={Keyboard.dismiss}>
            {/* Background image component */}
            <BgImg>
                {/* text */}
                <Words
                    main="Verificatioin code"
                    sub="Please enter verification code that sent to"
                    num={route.params.num}
                />
                {/* bottom sheet */}
                <BottomSheet>
                    <OTPInput
                        code={otpCode}
                        setCode={setOtpCode}
                        maximumLength={maxCodeLength}
                        setIsPinReady={setIsPinReady}
                    />
                    <ButtonContainer style={
                        { backgroundColor: isPinReady ? "#00C458" : "#0a360f" }}
                        disabled={!isPinReady}
                        onPress={() => navigate("StudentDetails")}
                    >
                        <ButtonText>Resend OTP</ButtonText>
                    </ButtonContainer>

                    <TouchableOpacity style={styles.contact} onPress={() => alert("Thanks for contacting...")}>
                        <Icon name='phone' size={20} color={'#00C458'} />
                        <Text style={styles.contactText}
                        >Contact us</Text>
                    </TouchableOpacity>
                </BottomSheet>
            </BgImg>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    contact: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        flexDirection: "row"
    },
    contactText: {
        textAlign: "center",
        fontWeight: "600",
        color: "#00C458",
        marginLeft: 5
    }
})

export default Otp;