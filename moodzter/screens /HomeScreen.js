import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'react-native-firebase'
import{Container, Header, Left, Body, Right, Title} from 'native-base'
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
      <Container>
        <Header>
          <Left 
          style={{flex: 3}}
          />
          <Body
          style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
            <Title>
              Home
            </Title>
          </Body>
          <Right 
          style={{flex: 3}}/>
        </Header>
      </Container>
    );
  }
}
