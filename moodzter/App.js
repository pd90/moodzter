/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
"use strict";

import React from 'react';
import { StyleSheet } from 'react-native';
import { ApplicationProvider,IconRegistry } from 'react-native-ui-kitten';
import { mapping, dark as theme } from '@eva-design/eva';
import SplashScreen from 'react-native-splash-screen';
import Login from './screens /Login';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Loading from './screens /Loading'
import { createAppContainer,createSwitchNavigator } from 'react-navigation'
import SignUp from './screens /logincomponents/SignUp';
import { createStackNavigator } from 'react-navigation-stack';
import LoginForm from './screens /logincomponents/LoginForm';
import HomeScreen from './screens /HomeScreen';
import Profile from './screens /Profile';
import TrendsScreen from './screens /TrendsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation-tabs';
SplashScreen.hide();
// create our app's navigation stack
<ApplicationProvider mapping={mapping} theme={theme}>
<IconRegistry icons={EvaIconsPack}/>
</ApplicationProvider>
const SwitchNavigator = createSwitchNavigator(
  {
    LoadingScreen: Loading,
    LoginScreen:{screen: Login,
      navigationOptions: {
        header: null,
      }
  }
  },
  {
    initialRouteName: 'LoginScreen'
  }
);

const AppNavigator = createStackNavigator({
  SwitchNavigator:{screen: SwitchNavigator},
  AppTabNavigator:{screen: AppTabNavigator},
  LoginScreen: {screen: Login,
    navigationOptions: {
      header: null,
    }},
  SignUp: { screen: SignUp }
},{ headerMode: 'none' });


//bottom tab navigation 
const AppTabNavigator = createBottomTabNavigator({
     Home: HomeScreen,
     ProfileScreen: Profile,
     Trends: TrendsScreen,
  },{
  
    navigationOptions: ({ navigation }) => ({
       //define the icon for each tab here...
      tabBarIcon: ({ focused, tintColor }) => {
     const { routeName } = navigation.state;
     
     let icon;
     switch(routeName) {
        case 'Home':
           icon = `ios-shop${focused ? '' : '-outline'}`;
         break;
         case 'ProfileScreen':
           icon = `ios-search${focused ? '' : '-outline'}`;
         break;
         case 'Trends':
           icon = `ios-appstore${focused ? '' : '-outline'}`;
         break;
       }
       
       return <Ionicons 
                name={icon} 
                size={25} 
                color={tintColor} />;
      },
    }),
    tabBarOptions: {
      initialRouteName: 'Home',
      activeTintColor: '#fff',
      inactiveTintColor: '#ddd',
      style: {
        backgroundColor: '#4d535e',
     }
  }
});



const App = createAppContainer(AppNavigator);

export default App;
