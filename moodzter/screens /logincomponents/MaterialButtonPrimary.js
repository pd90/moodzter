import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default class MaterialButtonPrimary extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]} onPress={this.props.onPress}>
        <Text style={styles.caption}>{this.props.caption}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#2196F3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    minHeight:50,
    borderRadius: 10,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-regular",
    fontWeight: "200"
  }
});
