import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import BottomSheet from '../../Components/BottomSheet';
import Words from '../../Components/Words';
import BgImg from '../../Components/BgImg';
import { ButtonContainer, ButtonText } from '../../Components/Button';

export class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            color: "grey",
            width: 0,
            numbers: "",
        }

        this.navigate = this.props.navigation.navigate;
        this.addNumber = this.addNumber.bind(this);
    }

    addNumber = function (num) {
        this.setState({ numbers:  num });
    }

    render() {
        return (
            <BgImg>
                {/* text */}
                <Words
                    main="Enter your mobile number"
                    sub="We'll send you an OTP for verify"
                />

                {/* bottom sheet */}
                <BottomSheet>
                    {/* country code box */}
                    <View style={styles.mobile}>
                        <View style={styles.code}>
                            <ButtonText>+91</ButtonText>
                        </View>

                        {/* Input box */}
                        <TextInput
                            keyboardType='phone-pad'
                            maxLength={10}
                            placeholder="Mobile number"
                            style={[styles.num, { borderWidth: this.state.width, borderColor: this.state.color }]}
                            placeholderTextColor="#999"
                            onFocus={() => this.setState({ width: 1, color: "#00C458" })}
                            onChangeText={this.addNumber}
                        />
                    </View>

                    {/* button */}
                    <ButtonContainer
                        onPress={() => this.navigate("OTP", { num: this.state.numbers.length > 5 ? "+91" + this.state.numbers : ""})}
                    >
                        <ButtonText>Send OTP</ButtonText>
                    </ButtonContainer>
                </BottomSheet>
            </BgImg>
        )
    }
}

const styles = StyleSheet.create({
    mobile: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10
    },
    code: {
        height: 50,
        backgroundColor: "#062E40",
        justifyContent: "center",
        alignItems: "center",
        flex: .2,
        marginRight: 10,
        borderRadius: 3
    },
    num: {
        height: 50,
        backgroundColor: "#062E40",
        flex: .8,
        borderRadius: 3,
        paddingLeft: 10,
        color: "#fff",
    }
})

export default Register;