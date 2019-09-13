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
import Login from './components /Login';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Loading from './components /Loading'
import { createAppContainer,createSwitchNavigator } from 'react-navigation'

SplashScreen.hide();
// create our app's navigation stack
<ApplicationProvider mapping={mapping} theme={theme}>
<IconRegistry icons={EvaIconsPack}/>
</ApplicationProvider>
const SwitchNavigator = createSwitchNavigator(
  {
    LoadingScreen: Loading,
    LoginScreen:Login,
  },
  {
    initialRouteName: 'LoadingScreen'
  }
);
const App = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default App;
