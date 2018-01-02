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
  Dimensions,
  ScrollView,
  ListView,
  TextInput,
  ActivityIndicator,
  Keyboard
} from 'react-native';
import { Button,Icon } from 'react-native-elements';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import {NavigationActions} from 'react-navigation';


export default class App extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      UserID: '',
      UserPassword: ''
    }
  }




  UserRegistrationFunction = ({navigation}) =>{
    Keyboard.dismiss();
     const { UserID }  = this.state ;
     const { UserPassword }  = this.state ;

     if(UserID == 'admin' && UserPassword == 'admin'){
      alert("You are successfully login");
       try {
        AsyncStorage.setItem('@Logined', 'USER LOGINED');

        this.props.navigation.dispatch(NavigationActions.reset(
          {
            index: 0,
            actions: [  NavigationActions.navigate({ routeName: 'LEMain'}) ]
          }
        ));
        //this.props.navigation.navigate('LEMain');
      } catch (error) {
        // Error saving data
      }
     }else{
       alert('Incorrect UserID / Password');
     }
  }


   render() {
     return (
      <View style={styles.container}>

        <View style={styles.login_containe,{paddingBottom:100}}>
          <Image style={[styles.fullImage]}
            resizeMode="contain"
            source={require('../../../assets/Sentral/logo.jpg')}
          />
        </View>

        <View style={styles.login_container}>
          <Text
            style={styles.input_text}>
            Student ID / Staff ID
          </Text>
          <TextInput
            onChangeText={UserID => this.setState({UserID})}
            style={styles.input_box}
            onSubmitEditing={(event) => {
              this.refs.SecondInput.focus();
            }}
          />

          <Text
            style={styles.input_text}>
            Password
          </Text>
          <TextInput
            ref='SecondInput'
            secureTextEntry = {true}
            onChangeText={UserPassword => this.setState({UserPassword})}
            style={styles.input_box}
          />

          <Button
            backgroundColor={global.SentralGreen}
            icon={{name: 'chevron-right', type: 'octicon'}}
            title='Login'
            onPress={this.UserRegistrationFunction}
          />

          <Text style={{marginTop:20,color: 'blue',textAlign:'center',textDecorationLine:'underline'}}
            onPress={() => alert('FORGET')}>
            Forget Password ?
          </Text>
        </View>
      </View>

     )

  }
}




const styles = StyleSheet.create({
  fullImage: {
    width: Dimensions.get('window').width-82,
    height: 60,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  login_container: {

    width:'100%',
    paddingRight:40,
    paddingLeft:40,
  },
  input_box: {
    height: 50,
  //  borderWidth: 1,
  //  marginBottom:10,
  ///  borderColor:'transparent',
    ///borderBottomColor:'black',
    fontSize: 20
  },
  input_text: {
    fontSize: 20
  },

});
