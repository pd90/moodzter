/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
"use strict";

import React from 'react';
import { StyleSheet,View} from 'react-native';
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
import ForgotPassword from './screens /logincomponents/ForgotPassword';
import HomeScreen from './screens /HomeScreen';
import Profile from './screens /Profile';
import TrendsScreen from './screens /TrendsScreen';
import Icon from 'react-native-vector-icons/Ionicons';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

SplashScreen.hide();
// create our app's navigation stack
<ApplicationProvider mapping={mapping} theme={theme}>
<IconRegistry icons={EvaIconsPack}/>
</ApplicationProvider>
//bottom tab navigation 
const AppTabNavigator = createMaterialBottomTabNavigator({
  Home: {screen: HomeScreen,
    navigationOptions:{  
      tabBarLabel:'Home',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
          </View>),  
     }  
  },
  Trends: {screen: TrendsScreen,
    navigationOptions:{  
      tabBarLabel:'Trends',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-stats'}/>  
          </View>),  
    
  }  
  },
  Profile: {screen: Profile,
    navigationOptions:{  
      tabBarLabel:'Profile',  
      tabBarIcon: ({ tintColor }) => (  
          <View>  
              <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
          </View>),  
  }  
  }
},{
   initialRouteName: 'Home',
   activeColor: '#f0edf6',  
   inactiveColor: '#226557', 
   barStyle: { backgroundColor: '#21bff3' },  
});
const SwitchNavigator = createSwitchNavigator(
  {
    LoadingScreen: Loading,
    AppTabNavigator:{screen: AppTabNavigator},
    LoginScreen:{screen: Login,
      navigationOptions: {
        header: null,
      }
  }
  },
  {
    initialRouteName: 'LoadingScreen'
  }
);



const AppNavigator = createStackNavigator({
  SwitchNavigator:{screen: SwitchNavigator},
  LoginScreen: {screen: Login,
    navigationOptions: {
      header: null,
    }},
  SignUp: { screen: SignUp },
  ForgotPassword: { screen: ForgotPassword }
},{ headerMode: 'none' });

const App = createAppContainer(AppNavigator);

export default App;
