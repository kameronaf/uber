/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View,Text, Stylesheet, StatusBar} from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/Destinationsearch';
import Log from './src/screens/login/log';
import styles from './src/components/HomeSearch/styles';
import { colors } from './src/screens/login/styles';
import SearchResults from './src/screens/SearchResults';
import UberTypes from './src/components/UberTypes';

const App: () => React$Node = () => {

  return (
    <View style = {styles.container}>
      <StatusBar
        barStyle="Light-content" 
        backgroundColor = {colors.statusBar}
      />

      <SearchResults/>
    </View>
  );
};



export default App;
