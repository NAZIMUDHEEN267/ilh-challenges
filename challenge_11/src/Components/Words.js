import React, { Component } from 'react'
import { StyleSheet, Dimensions, Text, View } from 'react-native';

const { width } = Dimensions.get("window");

export class Words extends Component {
  constructor(props) {
    super(props);

    this.main = this.props.main;
    this.sub = this.props.sub || "";
    this.num = this.props.num || ""
  }

  render() {
    return (
      <View style={{position: "absolute",  top: "30%", width: "100%"}}>
        <Text style={[styles.bold]}>{this.main}</Text>
        <Text style={[styles.light]}>{this.sub}</Text>
        <Text style={[styles.bold]}>{this.num}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "500",
    fontSize: 16,
    color: "#222",
    textAlign: "center"
  },
  light: {
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    color: "#999"
  }
})

export default Words