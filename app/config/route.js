
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon, Button } from 'react-native-elements';
import { AsyncStorage} from 'react-native';
//Put the screen required
import MainScreen from '../screen/main';
//College
//import College from '../screen/college/main';
import CollegeRoute from './college_route';
//Student Portal
//import StudentRoute from './student_portal_route';
//Login]
import Login from '../screen/login/main';
//QR Code
import QRCode from '../screen/qr/main';


//Student Portal
import SPMainScreen from '../screen/student/main';
import SPScheduleScreen from '../screen/student/schedule';
import SPEventScreen from '../screen/student/events';

//Logined
import LoginedMainScreen from '../screen/login/logined/main';
import LoginedActivityScreen from '../screen/login/logined/activity';
import LoginedPreferenceScreen from '../screen/login/logined/preference';
import LoginedSCOLScreen from '../screen/login/logined/SCOL';
import LoginedSchduleScreen from '../screen/login/logined/schedule';
import LoginedQRCodeScreen from '../screen/login/logined/qr_code';
import LoginedEventScreen from '../screen/login/logined/events';
import LoginedCollegeInfoScreen from '../screen/login/logined/college_info';


const tintColor = 'red';




//Export Itself
export default class App extends Component<{}> {

  AboutApp = () => {
    alert('Sentral MObile App');
  }

  render(){
    InitRoute = 'MainScreen';
    if(typeof this.props.initRoute !== 'undefined' && this.props.initRoute=='LEMain'){
        InitRoute = 'LEMain';
    }

    const MainStackNav = StackNavigator({
        MainScreen:{
      	  screen: MainScreen,
      	  navigationOptions: {
        		title: 'SENTRAL College Penang',
            headerRight: <Icon name="info-circle" type='font-awesome' color='white' size={35} onPress={ () => this.AboutApp() }  />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#1a5b4c'
            },
      	  },
        },
        College: {
          screen: CollegeRoute,
          navigationOptions: ({ navigation }) => ({
            header:null,
            headerRight: <Icon name="menu" color='white' size={35} onPress={ () => navigation.navigate('DrawerToggle') } />,
        		title: 'College Info',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#1a5b4c'
            },
      	  }),
        },
        StudentPortal: {
          screen: SPMainScreen,
          navigationOptions: ({ navigation }) => ({
            //header:null,
            title: 'Student Portal',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#1a5b4c'
            },
          }),
        },
        SPSchedule: {
          screen: SPScheduleScreen,
          navigationOptions: ({ navigation }) => ({
            //header:null,
            title: 'Schedule',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#1a5b4c'
            },
          }),
        },
        SPEvents: {
            screen: SPEventScreen,
            navigationOptions: ({ navigation }) => ({
              //header:null,
              title: 'Events',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#1a5b4c'
              },
            }),
          },
        QR:{
          screen: QRCode,
          navigationOptions: ({ navigation }) => ({
            title: 'QR Code',
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#1a5b4c'
            },
          }),
        },
        Login: {
          screen: Login,
      	  navigationOptions: {
        		title: 'Login',
        		tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#1a5b4c'
            },
          },
        },
        //Logined
        LEMain: {
          screen: LoginedMainScreen,
      	  navigationOptions: {
        		title: 'Welcome, THOR YU GUAN',
        		tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#1a5b4c'
            },
          },
        },
        LEActivity: {
          screen: LoginedActivityScreen,
      	  navigationOptions: {
        		title: 'Recent Activity',
        		tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#1a5b4c'
            },
          },
        },
        LEPreference: {
          screen: LoginedPreferenceScreen,
      	  navigationOptions: {
        		title: 'Preferences',
        		tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#1a5b4c'
            },
          },
        },
        LESCOL: {
          screen: LoginedSCOLScreen,
      	  navigationOptions: {
        		title: 'SCOL',
        		tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#1a5b4c'
            },
          },
        },
        LESchedule: {
          screen: LoginedMainScreen,
      	  navigationOptions: {
        		title: 'Schedule',
        		tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#1a5b4c'
            },
          },
        },
        LEQRCode: {
          screen: LoginedQRCodeScreen,
      	  navigationOptions: {
        		title: 'QR Code',
        		tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#1a5b4c'
            },
          },
        },
        LEEvent: {
          screen: LoginedEventScreen,
      	  navigationOptions: {
        		title: 'Events',
        		tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#1a5b4c'
            },
          },
        },
        LECollegeInfo: {
          screen: LoginedCollegeInfoScreen,
      	  navigationOptions: {
        		title: 'CollegeInfo',
        		tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: '#1a5b4c'
            },
          },
        },

      },
      {
        initialRouteName: InitRoute,
    	//mode: 'modal',
    	//headerMode: 'none',

      }
    );


    return(
        <MainStackNav / >
    );
  }
}
