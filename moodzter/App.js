/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
"use strict";

import React from 'react';
import { StyleSheet } from 'react-native';
import { ApplicationProvider,IconRegistry } from 'react-native-ui-kitten';
import { mapping, light as theme } from '@eva-design/eva';
import SplashScreen from 'react-native-splash-screen';
import Login from './components /Login';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

SplashScreen.hide();
const App = () => (
  
  <ApplicationProvider mapping={mapping} theme={theme}>
   <Login/>
   <IconRegistry icons={EvaIconsPack}/>
  </ApplicationProvider>
);

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
