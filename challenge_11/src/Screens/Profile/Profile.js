import { ScrollView, Dimensions, View } from 'react-native'
import {
  BoxItem,
  ContainerNav,
  ContainerTop,
  DetailsBox,
  InfoBtn,
  InfoText,
  InfoTypeText,
  MainHeadline,
  NavMenu,
  NavText,
  ProfileContainer,
  ProfileId,
  ProfileImg,
  ProfileName,
  UserDetails
} from './style';
import AntDesign from "react-native-vector-icons/AntDesign";


const { height } = Dimensions.get("screen");

const Profile = () => {
  return (
    <ScrollView>
      {/* nav top container */}
      <ContainerTop>
        <ContainerNav>
          <NavText>Profile</NavText>
          <AntDesign name="bells" color="white" size={23} />
          <NavMenu>
            <AntDesign name="appstore1" color="green" size={16} />
          </NavMenu>
        </ContainerNav>
      </ContainerTop>

      {/* main box */}
      <ProfileContainer height={height}>

        {/* profile user */}
        <UserDetails>
          <ProfileImg
            resizeMode={"cover"}
            source={require("../../Assets/Images/profile.jpg")} />
          <View>
            <ProfileName>Nazimudheen</ProfileName>
            <ProfileId>id: 1234</ProfileId>
          </View>
        </UserDetails>

        {/* user info */}
        <DetailsBox>
          {/* personal info */}
          <DetailsBox>
            <MainHeadline>Personal info</MainHeadline>
            <BoxItem>
              <InfoTypeText>Account details : </InfoTypeText>
              <InfoText>Nazimudheen</InfoText>
            </BoxItem>
            <BoxItem>
              <InfoTypeText>Email : </InfoTypeText>
              <InfoText>something@gmail.com</InfoText>
            </BoxItem>
            <BoxItem>
              <InfoTypeText>Number : </InfoTypeText>
              <InfoText>+91823948234</InfoText>
            </BoxItem>
          </DetailsBox>

          {/* user course details */}
          <DetailsBox>
            <MainHeadline>Course info</MainHeadline>

            <BoxItem>
              <InfoTypeText>Center : </InfoTypeText>
              <InfoText>Google</InfoText>
            </BoxItem>
            <BoxItem>
              <InfoTypeText>Course : </InfoTypeText>
              <InfoText>DSA</InfoText>
            </BoxItem>
            <BoxItem>
              <InfoTypeText>Payment Status : </InfoTypeText>
              <InfoText>Free</InfoText>
            </BoxItem>
            <BoxItem>
              <InfoTypeText>Expiry Date : </InfoTypeText>
              <InfoText>{Date().toString().slice(0, 15)}</InfoText>
            </BoxItem>
          </DetailsBox>
        </DetailsBox>

        {/* buttons */}
        <InfoBtn>
          <ProfileImg
            source={require("../../Assets/Images/paytm.png")}
            resizeMode={"contain"}
            style={{width: 80, borderRadius: 0}}
          />
        </InfoBtn>

        <InfoBtn>
          <ProfileImg
            resizeMode={"contain"}
            style={{ borderRadius: 0, height: 50}}
            source={require("../../Assets/Images/share.png")} />
        </InfoBtn>
      </ProfileContainer>
    </ScrollView>
  )
}

export default Profile;