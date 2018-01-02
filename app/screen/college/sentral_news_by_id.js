import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableHighlight,
  Dimensions,
  ScrollView,
  ListView,
  Menu,
  TouchableOpacity
} from 'react-native';
import { Button,Icon } from 'react-native-elements';
import Video from 'react-native-video';


const win = Dimensions.get('window');
const styles = StyleSheet.create({
  fullImage: {
    width: Dimensions.get('window').width,
    height: 150,
  },
  normalImage: {
    width: 200,
    height: 100,
  },
  iconText: {
    alignSelf: 'center',
    fontSize: 11,
  },
  container_SentralNews: {
    marginTop:20,
    marginBottom:20,
    marginLeft:10,
    marginRight:10,
    padding:10,
  },
  text_SentralNews: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom:10,
  },
  Video: {
    marginTop:15,
    marginBottom:15,
    width: Dimensions.get('window').width-80,
    height: 150,
  },

});


const MainContent  = ({ navigation }) => (
    <ScrollView>
      <Image style={[styles.fullImage]}
        //resizeMode="contain"
        source={require('../../../assets/Sentral/news1.jpg')}
      />

      <View style={styles.container_SentralNews}>
        <Text style={styles.text_SentralNews}>Seminar Digital Kerajaan 2017</Text>
        <Text>
        The Seminar Digital Kerajaan 2017 was organized to share knowledge, ideas and experiences towards improving the delivery system of government services through the implementation of Digital Government to targeted groups. It also aims to instill and strengthen the information and communications technology (ICT) culture amongst civil servants as knowledgeable employees optimizing the use of ICT. Ten students pursuing BSc (Hons) Business IT, and eleven students pursuing Diploma in Computer Systems Technology at SENTRAL College Penang participated in the seminar.

          Our students had the opportunity to showcase their project and ideas to the public. It was the proposal on the implementation of Beacon technology at SENTRAL. They managed to capture the attention of Yang Berhormat Dato’ Seri Farizan bin Darus, Setiausaha Kerajaan Negeri Pulau Pinang and Dato’ Haji Ghazali Derahman, Timbalan Setiausaha Kerajaan (Pengurusan) / Merangkap CIO Negeri. The VIPs were truly impressed with our students’ project, as well as their communication and presentation skills. The words of encouragement from the VIPs motivated our students and boosted their confidence.
        </Text>
        <Image style={[styles.normalImage]} source={require('../../../assets/Sentral/news1.1.jpg')} />
        <Image style={[styles.normalImage]} source={require('../../../assets/Sentral/news1.2.jpg')} />

      </View>

    </ScrollView>
);


export default MainContent;
