import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'react-native-firebase'
export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      currentUser: null,
    };
  }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState(
      { 
        currentUser: currentUser 
      }
    )
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home</Text>
      </View>
    );
  }
}
