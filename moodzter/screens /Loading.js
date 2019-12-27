// Loading.js
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from '../firebase/Firebase';
import mfirebase from 'react-native-firebase';

var db = mfirebase.firestore(firebase);
var moods= [];
export default class Loading extends React.Component {
  _isMounted = false;
  constructor() {
    super();
    
    this.state = {
      moods: [],
    };
  }
   componentDidMount() {    
    this._isMounted = true;
    db.collection("moods").get().then(snapshot => {
      snapshot
        .docs
        .forEach(doc => {
          if(doc.data().type=="positive"){
            moods.push(doc.data().moodname);
          }
        });
        console.log("array"+moods);
        if (this._isMounted) {
          this.setState({moods:moods});
        }
    });
    
    firebase.auth().onAuthStateChanged(user => {    
      this.props.navigation.navigate(user ? 'Home' : 'LoginScreen')
    });
   
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  
  render() {
    
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})


