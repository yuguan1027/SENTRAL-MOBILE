/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import MainStackNav from './app/config/route';

export default class App extends Component<{}> {
  constructor(props) {
   super(props);
   this.state = {
     InitRouteName: 'MainScreen',
   }
 }

  _AutoLogin(){

    AsyncStorage.getItem('@Logined').then((value) => {
      if(value == 'USER LOGINED'){  this.setState({'InitRouteName':'LEMain'}) }
    });
  }

  componentWillMount  () {
   this._AutoLogin();
 }


  render() {
  
    return (

      <MainStackNav initRoute={this.state.InitRouteName}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
