import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  ScrollView,
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
    return(
      <View>
        <Text>HELLO IS logined qr code</Text>
      </View>

    );
  }
}


//export default MainContent;
