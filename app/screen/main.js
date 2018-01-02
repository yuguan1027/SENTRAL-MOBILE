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
  TouchableOpacity,
  TouchableNativeFeedback,
  Linking
} from 'react-native';
import { Button,Icon } from 'react-native-elements';

import {
  StackNavigator,
} from 'react-navigation';

export default class App extends Component<{}> {

  college_info_function = () => {
    this.props.navigation.navigate('College')
  }
  student_portal_function = () => {
      this.props.navigation.navigate('StudentPortal')
    //Linking.openURL('facebook://app')
  }
  login_function = () => {
    this.props.navigation.navigate('Login')
  }
  qr_function = () => {
      this.props.navigation.navigate('QR')
  }


  render() {
    return (
      <ImageBackground
        style={styles.backgroundImage}
      >

        <View style={styles.main_container}>
          <View style={styles.college_container}>
            <TouchableOpacity
              style={styles.college_touchable}
              onPress={this.college_info_function}
              underlayColor='#ECEFF1'
            >
              <View >
                <Image
                  style={styles.touchable_img}
                  source={require('../../assets/Sentral/college_info.jpg')}
                />
                <Text style={styles.title_text}>
                  COLLEGE INFO
                </Text>
                <Text style={styles.description_text}>
                  About Us, Programmes ...
                </Text>
             </View>
           </TouchableOpacity>
          </View>

          <View style={styles.student_container}>
            <TouchableOpacity
              style={styles.student_touchable}
              onPress={this.student_portal_function}
              underlayColor='#ECEFF1'
            >
              <View>
                <Image
                  style={styles.touchable_img}
                  source={require('../../assets/Sentral/student_portal.jpg')}
                />
                <Text style={styles.title_text}>
                  STUDENT PORTAL
                </Text>
                <Text style={styles.description_text}>
                  Schedule, Event ...
                </Text>
             </View>
           </TouchableOpacity>
          </View>


          <View style={styles.qr_container}>
            <Icon
              size={50}
              name='qrcode'
              type='font-awesome'
              color={global.SentralGreen}
              onPress={this.qr_function}
            />
          </View>


          <View style={styles.login_container}>
            <TouchableOpacity
              style={{alignItems:'center',backgroundColor:'#1a5b4c'}}
              onPress={this.login_function}
            >
              <View style={styles.login_touchable}>
                <Text style={{color:'white',fontSize:20,padding:10,fontWeight: 'bold'}}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground >
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  main_container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    //position:'absolute',
  },
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
  qr_container:{
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight:20
  },
  college_touchable: {
    alignItems:'center',
    margin:30,
    paddingBottom:5,
    backgroundColor:'#1a5b4c'
  },
  student_touchable: {
    alignItems:'center',
    margin:30,
    paddingBottom:5,
    backgroundColor:'#1a5b4c'
  },


  //Align to Bottom
  login_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
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
