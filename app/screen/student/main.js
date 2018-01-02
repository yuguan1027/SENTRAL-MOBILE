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
  Image,
  ImageBackground,
  TouchableHighlight,
  TouchableNativeFeedback,TouchableOpacity,
  Dimensions,
  Linking
} from 'react-native';
import { Button, Icon } from 'react-native-elements';

import {
  StackNavigator,
} from 'react-navigation';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  touchable_img: {
    width:300,
    height:120,
    alignSelf: 'center'
  },
  college_container: {
    alignSelf: 'flex-start',
    width:'100%',
  },
  student_container: {
    alignSelf: 'flex-end',
    width:'100%',
  },
  college_touchable: {
    alignItems:'center',
    margin:30,
    paddingBottom:5,
    backgroundColor:'#1a5b4c'
  },
  title_text: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
  },
  description_text: {
    alignSelf: 'center',
    fontSize: 10,
    fontStyle:'italic',
    color:'white',
  }

});



export default class App extends Component<{}> {

  event_function = () => {
    this.props.navigation.navigate('SPEvents')
  }
  schedule_function = () =>{
    this.props.navigation.navigate('SPSchedule')
  }

  render() {
    return (
      <View style={styles.sp_container}>

      <View style={styles.college_container}>
        <TouchableOpacity
          style={styles.college_touchable}
          onPress={this.event_function}
          underlayColor='#ECEFF1'
        >
          <View >
            <Image
              source={require('../../../assets/Sentral/events.jpg')}
              style={styles.touchable_img}
            />
            <Text style={styles.title_text}>
              Events
            </Text>
            <Text style={styles.description_text}>
              What will happening soon ?
            </Text>
         </View>
       </TouchableOpacity>
      </View>

      <View style={styles.college_container}>
        <TouchableOpacity
          style={styles.college_touchable}
          onPress={this.schedule_function}
          underlayColor='#ECEFF1'
        >
          <View >
            <Image
              source={require('../../../assets/Sentral/schedule.jpg')}
              style={styles.touchable_img}
            />
            <Text style={styles.title_text}>
              Schedule
            </Text>
            <Text style={styles.description_text}>
              Your daily class schedule
            </Text>
         </View>
       </TouchableOpacity>
      </View>



      </View>
    );
  }
}
