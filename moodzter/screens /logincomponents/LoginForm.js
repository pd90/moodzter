import React, { Component } from 'react';
import { StyleSheet,Image,View,ActivityIndicator} from "react-native";
import { Container, Header, Content, Form, Item, Input, Label
    ,Button,Text,Toast } from 'native-base';
import { SocialIcon } from 'react-native-elements'
import MaterialButtonPrimary from "./MaterialButtonPrimary";
import firebase from 'react-native-firebase';
import {facebookLogin} from '../../helpers/facebooklogin'
export default class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state={
        email:"",
        password:"",
        loading:false,
    };
  }
  render() {
    const { navigation } = this.props.navigation;
    const mStatus = navigation.getParam('status', 'fail');
  
    return (
      
      <Container style={styles.container}>
       {this.state.loading &&
        <View style={styles.loading}>
            <ActivityIndicator  
            size='large'
            color="#2196F3"
            />
        </View>
        }
        <Content  contentContainerStyle={{
         justifyContent: "center",
         alignItems: 'center',
         flex: 1,
         flexGrow: 1
      }} >
          
          <Form style={{width: '100%'}}>
         
          <Image source={require('../../assets/logo.png')} style={styles.profileImg} />
            <Item floatingLabel  style={{margin: 15}} >
              <Label>Email</Label>
              <Input
              value={this.state.email} 
              onChangeText={(text) => this.setState({ email: text })}/>
            </Item>
            <Item floatingLabel style={{margin: 15}}>
              <Label>Password</Label>
              <Input
               secureTextEntry={true}
               value={this.state.password} 
              onChangeText={(text) => this.setState({ password: text })} />
            </Item>
            
          <MaterialButtonPrimary 
           style={{
              marginTop: 30,
              margin:25,
              padding:15,
              justifyContent: 'center',
              backgroundColor:'#2196F3'}}
              onPress={() => this.checkTextInput(navigation)}
              caption={"Login"}
              > 
          </MaterialButtonPrimary>

        
          <Text style={{
            alignSelf:'center'
          }}>OR</Text>

          <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
          onPress={ () => {
            facebookLogin()
         }
         }
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
          margin:15,
        }} 
         onPress={ () => {
            navigation.navigate('SignUp') 
         }
         } >Sign up with Email.</Text>

         <Text style={{
          alignSelf:'center',
          fontSize:12,
          borderColor: '#00fff',
          }} 
         onPress={ () => {
            navigation.navigate('SignUp') 
         }
         } >Forgot password?</Text>
          </Form>
        </Content>
      </Container>
    );
  }
  //handle the signin click here
  signInWithEmail=(navigation) => {
     //login logic for firebase 
     const { email, password } = this.state
     firebase
     .auth()
     .signInWithEmailAndPassword(email, password)
     .then(() => {
       this.hideLoading()
       navigation.navigate('Home')
      })
     .catch(error => {
       alert(error.message) 
       this.hideLoading() 
       this.setState({ errorMessage: error.message })
      })
  }
  checkTextInput = (navigation) => {
    //Handler for the Submit onPress
    if (this.state.email != '' && this.state.password != '') {
        this.showLoading();
        this.signInWithEmail(navigation);
    } else {
      alert('Please Enter email and password to sign in');
      this.hideLoading();
    }
  };
  showLoading() {
    this.setState({loading: true})
  }

  hideLoading() {
    this.setState({loading: false})
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
        height: 120,
        width:120,
        borderRadius: 40,
        overflow: 'hidden',
        alignSelf:'center',
        alignContent:'center',
        flexWrap:'wrap'
      },
      loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.5,
    },
    }
  );