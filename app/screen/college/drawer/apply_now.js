import React, { Component } from 'react';
import {
  StyleSheet,
  Text,TextInput,
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
  content_wrapper:{
    padding:20,
    backgroundColor: 'white'
  },
  title:{
    fontSize:20
  },
  scroll_view:{
      backgroundColor: 'white',
      minHeight:'100%'
  }

});

class EnquiryNowScreen extends Component<{}> {
  static navigationOptions = {
    tabBarLabel: 'Enquiry Now',
    tabBarIcon: ({ tintColor }) => (
      <Icon type="font-awesome" name='edit' size={20} color='black'
        style={[styles.icon, {tintColor: tintColor}]}/>
    ),
  };

  render(){
    return(
        <View style={styles.content_wrapper}>
          <View style={styles.title_container}>
            <Text style={styles.title}>Enquiry Now</Text>
          </View>
          <ScrollView style={styles.scroll_view}>
            <Text>I am a</Text>
            <TextInput />
          </ScrollView>
        </View>
    )
  }
}


const MyApp = TabNavigator({
  Enquiry: {
    screen: EnquiryNowScreen,
  },
  Application: {
    screen: EnquiryNowScreen,
  },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled  :false,
  tabBarOptions: {
    activeTintColor:'#00E5FF',
    inactiveTintColor :'#666666',
    showIcon :true,  showLabel: false,
    labelStyle: {
      fontSize: 8,
    },
    style: {
      backgroundColor: 'white',
      borderTopWidth:0.5,
    },
    tabStyle: {
      height: 50,
    },
    indicatorStyle:{
      backgroundColor:'white',
    },
  },
});

//Export Itself
export default MyApp;


//export default MainContent;
