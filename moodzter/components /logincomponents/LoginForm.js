import React, { Component } from 'react';
import { StyleSheet,Image} from "react-native";
import { Container, Header, Content, Form, Item, Input, Label
    ,Button,Text } from 'native-base';
import { SocialIcon } from 'react-native-elements'
import MaterialButtonPrimary from "./MaterialButtonPrimary";
export default class LoginForm extends Component {
  render() {
    return (
    
      <Container style={styles.container}>
        
        <Content  contentContainerStyle={{
         justifyContent: "center",
         alignItems: 'center',
         flex: 1,
         flexGrow: 1
      }} >
          
          <Form style={{width: '100%'}}>
         
          <Image source={require('../../assets/logo.png')} style={styles.profileImg} />
            <Item floatingLabel  style={{margin: 15}}>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item floatingLabel style={{margin: 15}}>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
            
          <MaterialButtonPrimary 
           style={{
              marginTop: 30,
              margin:25,
              padding:15,
              justifyContent: 'center',
              backgroundColor:'#2196F3'}}
              onPress={() => this.handleClick()}
              > 
          </MaterialButtonPrimary>

          <Text style={{
            alignSelf:'center'
          }}>OR</Text>

          <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
          style={{
              marginTop:25,
              marginEnd:25,
              marginStart:25,
            }}
          />
           <SocialIcon
          title='Sign In With Google'
          button
          type='google'
          style={{
              marginEnd:25,
              marginStart:25,
            }}
          />
        <Text style={{
          alignSelf:'center',
          fontSize:15,
          margin:25,
        }} 
         onPress={ this.handleClick } >Sign up with Email</Text>

          </Form>
        </Content>
      </Container>
    );
  }
  //handle the click here
  handleClick() {
     alert('love it');
  }

}
const styles = StyleSheet.create({
    container: {},
    root: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: "center",
        alignSelf:'center',
      },
      profileImg: {
        height: 150,
        width:150,
        borderRadius: 40,
        overflow: 'hidden',
        alignSelf:'center',
        alignContent:'center',
        flexWrap:'wrap'
      },
    }
  );