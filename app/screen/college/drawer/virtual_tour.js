import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  ScrollView,WebView,BackHandler,Alert
} from 'react-native';
import { Button,Icon } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  fullImage: {
    width: Dimensions.get('window').width,
    height: 130,
  },

});




//Export Itself
export default class App extends Component<{}> {


  render(){
    alert('Searching For 360 API');

    return(
      <WebView
         source={{uri: 'http://www.openstudio.fr/jquery-virtual-tour/'}}
         style={{marginTop: 20}}
       />

    );
  }
}


//export default MainContent;
