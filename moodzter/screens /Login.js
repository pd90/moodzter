import React, { Component } from "react";
import { StyleSheet, View, StatusBar} from "react-native";
import LoginForm from "./logincomponents/LoginForm";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.root}>
        
        <LoginForm navigation={this.props}/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1, 
    flexDirection:'column', 
    width: "100%",
    display:'flex',
  },
  statusBar: {} ,
});
