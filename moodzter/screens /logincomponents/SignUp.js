import React, { Component } from 'react';
import { StyleSheet,Image,View,ActivityIndicator} from "react-native";
import { Container, Header, Content, Form, Item, Input, Label} from 'native-base';
import { SocialIcon } from 'react-native-elements'
import MaterialButtonPrimary from "./MaterialButtonPrimary";
import firebase from 'react-native-firebase';
import Toast from 'react-native-root-toast';
import Spinner from 'react-native-loading-spinner-overlay';

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
        email:"",
        password:"",
        errorMessage: null,
        loading:false,
        status:false,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        spinner: !this.state.loading
      });
    }, 2000);
  }
  render() {
      //Add other content here
     
    return (
    
      <Container style={styles.container}>
         {this.state.loading &&
        <View style={styles.loading}>
           <Spinner
            visible={this.state.loading}/>
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
              onPress={
                  () => this.checkTextInput()}
              caption={"Sign Up"}
              > 
          </MaterialButtonPrimary>   
          </Form>
          
        </Content>
      </Container>
    );
  }
  //handle the signin click here

  handleSignUp = () => {
      // Add a Toast on screen.
   
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
         this.hideLoading()
         this.props.navigation.navigate('LoginScreen'
         , {
             status: 'success',
           })
            Toast.show('Sign up successful!', {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0
           });
      })
      .catch(error =>{ 
        alert(error.message) 
        this.hideLoading() 
        this.setState({ errorMessage: error.message 
        })
    })
  }

  checkTextInput = () => {
    //Handler for the Submit onPress
    if (this.state.email != '' && this.state.password != '') {
        this.showLoading();
        this.handleSignUp();
    } else {
      alert('Please Enter email and password to sign up');
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
        height: 150,
        width:150,
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