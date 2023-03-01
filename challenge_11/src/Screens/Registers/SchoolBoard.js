import React from 'react';
import BgImg from '../../Components/BgImg';
import BottomSheet from '../../Components/BottomSheet';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from "react-native-vector-icons/FontAwesome";
import Words from '../../Components/Words'
import { ButtonContainer, ButtonText } from '../../Components/Button';

const SchoolBoard = ({navigation: {navigate}}) => {

  const Board = ["CBSC", "STATES", "ICSC"];
  const Class = [8, 9, 10, 11, 12];
  const textStyle = {
    color: "#999", fontSize: 14, textAlign: "left"
  };

  return (
    <BgImg>
        {/* text */}
        <Words
          main="Student Details"
        />

      {/* bottom sheet */}
      <BottomSheet>
      {/* drop downs */}
        <SelectDropdown
          data={Board}
          defaultButtonText={"Select board"}
          dropdownStyle={{ backgroundColor: "#062E40" }}
          buttonStyle={{
            width: "90%",
            backgroundColor: "#062E40",
            alignSelf: "center",
            paddingHorizontal: 20,
            marginBottom: 10
          }}
          buttonTextStyle={textStyle}
          rowTextStyle={textStyle}
          renderDropdownIcon={() => <Icon name="angle-down" size={20} color={"#999"} />}
          dropdownIconPosition={"right"}
        // onFocus={() => set)}
        />
        <SelectDropdown
          data={Class}
          defaultButtonText={"Select class"}
          dropdownStyle={{ backgroundColor: "#062E40" }}
          buttonStyle={{
            width: "90%",
            backgroundColor: "#062E40",
            alignSelf: "center",
            paddingHorizontal: 20,
            marginBottom: 20
          }}
          buttonTextStyle={textStyle}
          rowTextStyle={textStyle}
          renderDropdownIcon={() => <Icon name="angle-down" size={20} color={"#999"} />}
          dropdownIconPosition={"right"}
        // onFocus={() => set)}
        />

        {/* button container */}
        <ButtonContainer onPress={() => navigate("Share")}>
          <ButtonText>Continue</ButtonText>
        </ButtonContainer>
      </BottomSheet>
    </BgImg>
  )
}

export default SchoolBoard