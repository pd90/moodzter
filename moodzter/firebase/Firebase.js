import mfirebase from 'react-native-firebase'

const config = {
    apiKey: "AIzaSyD5Fm83QoMU-QK9rFZx68HisM5lV9lsybs",
    databaseURL: "https://moodzter-e6061.firebaseio.com/moods",
    authDomain: "moodzter-e6061.firebaseapp.com",
    projectId: "moodzter-e6061",
    messagingSenderId: "582239482878"
  };
  var db = mfirebase.initializeApp(config);

  export default db;

