import { DrawerNavigator,StackNavigator,NavigationActions,DrawerItems } from 'react-navigation';
import { Button,Icon,SocialIcon } from 'react-native-elements';
import {
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';
import React, { Component } from 'react';
import MainScreen from '../screen/college/main';
import AboutUsScreen from '../screen/college/about_us';
import ProgrammesScreen from '../screen/college/programmes';
import StudentLifeScreen from '../screen/college/student_life';
import ContactUsScreen from '../screen/college/contact_us';
import SentralNewsScreen from '../screen/college/sentral_news';

import LiveChatScreen from '../screen/college/drawer/live_chat';
import BuildingScreen from '../screen/college/drawer/sentral_building';
import ApplyNowScreen from '../screen/college/drawer/apply_now';
import VirtualTourScreen from '../screen/college/drawer/virtual_tour';

/*
  LEVEL 2 ROUTE
*/
 import SentralNewsByID from '../screen/college/sentral_news_by_id'
/*
  START OF CONSTANT ------------------------------------------------------------
*/
const styles = StyleSheet.create({
  drawer:{
    flex: 1,
    justifyContent :'space-between',
  },
  drawer_header:{
    flex:0.4,
    backgroundColor: '#1a5b4c',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawer_header_txt:{
    color: 'white',
    fontSize: 20
  },


  drawer_item:{
    flex:3,
    justifyContent :'flex-start',
    paddingLeft:10,
  },


  drawer_footer:{
    flex:0.37,
    backgroundColor: '#EEEEEE',
    justifyContent :'flex-end',
  },

  drawer_footer_container:{
    flex: 1,
    flexDirection: 'row',
    justifyContent :'space-around',
  }

});


const sentral_facebook = 'https://www.facebook.com/n/?SentralCollegePenang';
const sentral_instagram = 'https://www.instagram.com/sentralcollegepenang';
const sentral_twitter = '';
const sentral_youtube = 'https://www.youtube.com/channel/UCgFdSXpn5jG8pI_pGLmHGlA';

//Constant
const DrawerContent = (props) => (
  <View style={styles.drawer}>
    <View style={styles.drawer_header}>
      <Text style={styles.drawer_header_txt}>
          SENTRAL Mobile
      </Text>
    </View>
    <View style={styles.drawer_item}>
      <DrawerItems {...props} />
    </View>
    <View style={styles.drawer_footer}>
      <View style={styles.drawer_footer_container}>
        <SocialIcon type='facebook' onPress={ ()=>{ Linking.openURL(sentral_facebook)}} />
        <SocialIcon type='instagram' onPress={ ()=>{ Linking.openURL(sentral_instagram)}}/>
        <SocialIcon type='youtube' onPress={ ()=>{ Linking.openURL(sentral_youtube)}} />
      </View>
    </View>
  </View>
);

/*
  END OF CONSTANT----------------------------------------------------------------
*/



//DRAWER

MainScreen.navigationOptions = {
  drawerLabel: 'College Info',
  drawerIcon: ({ tintColor }) => (
    <Icon
    name='info-circle'
    type='font-awesome'
    color='#2979FF'
    />
  ),
};

LiveChatScreen.navigationOptions = {
  drawerLabel: 'Live Chat',
  drawerIcon: ({ tintColor }) => (
    <Icon

    name='wechat'
    type='font-awesome'
    color='#D50000'
    />
  ),
};
BuildingScreen.navigationOptions = {
  drawerLabel: 'SENTRAL Gallery',
  drawerIcon: ({ tintColor }) => (
    <Icon

    name='photo'
    type='font-awesome'
    color='#f50'
    />
  ),
};

VirtualTourScreen.navigationOptions = {
  drawerLabel: 'Virtual Tour',
  drawerIcon: ({ tintColor }) => (
    <Icon

    name='simplybuilt'
    type='font-awesome'
    color='#4E342E'
    />
  ),
};
ApplyNowScreen.navigationOptions = {
  drawerLabel: 'Apply Now',
  drawerIcon: ({ tintColor }) => (
    <Icon

    name='edit'
    type='font-awesome'
    color='#212121'
    />
  ),
};




//modify
const newMainScreen = StackNavigator(
  {
    Home: {
      path: '/college',
      screen: MainScreen,
      navigationOptions: ({ navigation }) => ({
        //headerLeft: <Icon name="menu" color='white' size={35} onPress={ () => navigation.dispatch(BackToMain) } />,
        headerRight: <Icon name="menu" color='white' size={35} onPress={ () => navigation.navigate('DrawerToggle') } />,
    		title: 'College Info',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#1a5b4c'
        },
  	  }),
    },
    AboutUsStack: {
      path: '/college/about-us',
      screen: AboutUsScreen,
      navigationOptions: ({ navigation }) => ({
        //headerLeft: null,
        headerRight: <Icon name="menu" color='white' size={35} onPress={ () => navigation.navigate('DrawerToggle') } />,
    		title: 'About Us',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#1a5b4c'
        },
  	  }),
    },
    ProgrammesStack: {
      path: '/college/programmes',
      screen: ProgrammesScreen,
      navigationOptions: ({ navigation }) => ({
        //headerLeft: null,
        headerRight: <Icon name="menu" color='white' size={35} onPress={ () => navigation.navigate('DrawerToggle') } />,
    		title: 'Programmes',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#1a5b4c'
        },
  	  }),
    },
    StudentLifeStack: {
      path: '/college/student-life',
      screen: StudentLifeScreen,
      navigationOptions: ({ navigation }) => ({
        //headerLeft: null,
        headerRight: <Icon name="menu" color='white' size={35} onPress={ () => navigation.navigate('DrawerToggle') } />,
    		title: 'Student Life',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#1a5b4c'
        },
  	  }),
    },
    ContactUsStack: {
      path: '/college/contact-us',
      screen: ContactUsScreen,
      navigationOptions: ({ navigation }) => ({
        //headerLeft: null,
        headerRight: <Icon name="menu" color='white' size={35} onPress={ () => navigation.navigate('DrawerToggle') } />,
    		title: 'Contact Us',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#1a5b4c'
        },
  	  }),
    },
    SentralNewsStack: {
      path: '/college/sentral-news',
      screen: SentralNewsScreen,
      navigationOptions: ({ navigation }) => ({
        //headerLeft: null,
        headerRight: <Icon name="menu" color='white' size={35} onPress={ () => navigation.navigate('DrawerToggle') } />,
    		title: 'Sentral News',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#1a5b4c'
        },
  	  }),
    },
    /*
      LEVEL 2 ROUTE
    */
    SentralNewsByID: {
      screen: SentralNewsByID,
      navigationOptions : {
        title: 'Seminar Digital Kerajaan 2017',
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#1a5b4c'
        },
      }

    }

    //PREVIOUS routes

  }
);



const DrawerNavigation = DrawerNavigator(
  {
    Home: {
      screen: newMainScreen,
    },
    LiveChat: {
      screen: LiveChatScreen,
    },
    Gallery: {
      screen: BuildingScreen,
    },
    VirtualTour: {
      screen: VirtualTourScreen,
    },
  

  },
  {
    initialRouteName: 'Home',
    drawerPosition :'right',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
    // define customComponent here
    contentComponent: DrawerContent,
  }
);


//Export Itself
export default class App extends Component<{}> {
  render(){
    return(
        <DrawerNavigation />
    );
  }
}
