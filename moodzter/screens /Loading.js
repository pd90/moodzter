// Loading.js
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from '../firebase/Firebase';
import mfirebase from 'react-native-firebase';

var db = mfirebase.firestore(firebase);
export default class Loading extends React.Component {
  
  constructor() {
    super();
    
    this.state = {
      moods: []
    };
  }
   componentDidMount() {    
    var moods = {};
    db.collection("moods")
    .onSnapshot(function(querySnapshot) {
     
        querySnapshot.forEach(function(doc) {
            // now do the reducer work to add global mood list
            var type = doc.data().type;
            moods[type] = doc.data().moodname;
        });  
        
    });
    
    firebase.auth().onAuthStateChanged(user => {    
      this.props.navigation.navigate(user ? 'Home' : 'LoginScreen')
    })
    console.log("array obj"+JSON.stringify(moods));
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


