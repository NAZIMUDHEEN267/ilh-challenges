
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./src/Navigators/Stack";
import styled from 'styled-components/native';
import { useEffect, useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  function hideSplash() {
    setIsVisible(false);
  }

  useEffect(() => {
    setTimeout(hideSplash, 1000);
  }, [])

  const SplashScreen = (
    <ParentSplash>
      <ChildSplash>
        <Image source={require("./src/Assets/Images/logo.png")} />
      </ChildSplash>
    </ParentSplash>
  );

  return (
      isVisible ? SplashScreen : (
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      )
  )
}

export default App;

const ParentSplash = styled.View`
  height: 100%;
  width: 100%;
  position: absolute;
  flex: 1;
`;

const ChildSplash = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #062E40;
`;

const Image = styled.Image`
  height: 60px;
  width: 60px;
`;