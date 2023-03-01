import { ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import React, { Component } from 'react';
import bgImage from "../Assets/google.png";

export class BgImg extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageBackground source={bgImage} resizeMode={'center'} style={styles.bg}>
        <KeyboardAvoidingView>
          <ScrollView>
            {this.props.children}
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: "100%"
  }
})

export default BgImg