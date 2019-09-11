import React, { Component } from 'react';
import { StyleSheet,Image} from "react-native";
import { Container, Header, Content, Form, Item, Input, Label
    ,Button,Text } from 'native-base';

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
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel style={{margin: 15}}>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
            
          <Button 
          
          rounded style={{
              marginTop: 30,
              margin:25,
              padding:15,
              justifyContent: 'center',
              backgroundColor:'#2196F3'}}
              onPress={() =>alert('yeah!!!')}>
          <Text >Login</Text>
          
          </Button>
          </Form>
        </Content>
      </Container>
    );
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