import React, { Component } from 'react';
import { Text, View } from 'react-native';
import{Container, Header, Left, Body, Right, Title, Label} from 'native-base'

var style = require('../helpers/constants');

export default class TrendsScreen extends Component {
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
              Trends
            </Title>
          </Body>
          <Right 
          style={{flex: 3}}/>
        </Header>
      </Container>
    );
  }
}
