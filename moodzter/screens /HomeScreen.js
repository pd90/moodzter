import React, { Component, PureComponent } from 'react';
import { Text, View } from 'react-native';
import firebase from 'react-native-firebase'
import{Container, Header, Left, Body, Right, Title, Label} from 'native-base'
import axios from 'axios';
var style = require('../helpers/constants');

export default class HomeScreen extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      currentUser: null,
      qoute: '',
    };
  }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState(
      { 
        currentUser: currentUser,
       
      }
    )

  //  axios.get('https://api.quotable.io/random')
  //  .then(response => {
  //   this.setState({ qoute: JSON.stringify(response.data.content) });
  //  })
  //  .catch(error => {
  //   console.log(error);
  //  });
  }
  render() {
    return (
      
      <Container>
        
        <Header 
           style={{ 
             backgroundColor: style.headerColor }}
             androidStatusBarColor= {style.headerColor}>
          <Left 
          style={{flex: 3}}
          />
          <Body
          style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
            <Title style={{color: 'black'}}>
              Home
            </Title>
          </Body>
          <Right 
          style={{flex: 3}}/>
        </Header>
      

        <Body
          style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
            
            <Label>
              {this.state.qoute}
            </Label>
          </Body>
      </Container>
    );
  }

  
}