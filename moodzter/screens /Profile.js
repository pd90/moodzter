import React, { Component } from 'react';
import { Text, View } from 'react-native';
var style = require('../helpers/constants');
import{Container, Header, Left, Body, Right, Title, Label} from 'native-base'

export default class Profile extends Component {
  render() {
    return (
      <Container>
      <Header 
      style={{ backgroundColor: style.headerColor }}
          androidStatusBarColor= {style.headerColor}>
        <Left 
        style={{flex: 3}}
        />
        <Body
        style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}>
          <Title style={{color: 'black'}}>
            Profile
          </Title>
        </Body>
        <Right 
        style={{flex: 3}}/>
      </Header>
    </Container>
    );
  }
}
