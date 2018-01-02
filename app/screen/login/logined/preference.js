import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  ScrollView,
  AsyncStorage,
  Alert
} from 'react-native';
import { Button,Icon,Avatar  } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';
import RNRestart from 'react-native-restart';
import SettingsList from 'react-native-settings-list';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  fullImage: {
    width: Dimensions.get('window').width,
    height: 130,
  },
  iconStyle: {
    height:30,
    marginLeft:10,
    alignSelf:'center'
  },

});




//Export Itself
export default class App extends Component<{}> {
  constructor(){
    super();
    this.state = {
      switchValue: false
    };
    this.onValueChange = this.onValueChange.bind(this);
  }
  onValueChange(value){
    this.setState({switchValue: value});
  }

  LogoutMessage = () =>{
    Alert.alert(
      'Logout',
      'Confirm to logout ?',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: this.Logout},
      ],
    )
  }

  Logout = () =>{
    AsyncStorage.removeItem('@Logined', (err) => console.log('finished', err));
    AsyncStorage.getItem('@Logined').then((value) => {
      RNRestart.Restart();
    });
  }

  fn_profile = () =>{
    alert('To BE develop');
  }

  fn_schedule = () =>{
    alert('To BE develop');
  }


  render(){
    return(

        <View style={{backgroundColor:'#EFEFF4',flex:1}}>


           <View style={{backgroundColor:'#EFEFF4',flex:1}}>

            <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
              <SettingsList.Item
                 icon={
                     <View style={styles.iconStyle}>
                     <Avatar
                       rounded
                       source={require('../../../../assets/Sentral/avatar.png')}
                     />
                     </View>
                 }
                 title='Profile'
                 titleInfo='View'
                 onPress={this.fn_profile}
              />

              <SettingsList.Header headerText="Personalize" headerStyle={{color:'#607D8B', marginTop:30}}/>


              <SettingsList.Item
                 icon={
                     <View style={styles.iconStyle}>
                       <Icon type='font-awesome' name='bell' color='#0277BD' size={35}  />
                     </View>
                 }
                 title='Notification'
                 hasSwitch={true}
                 switchState={this.state.switchValue}
                 switchOnValueChange={this.onValueChange}
                 hasNavArrow={false}
              />
              <SettingsList.Item
                 icon={
                     <View style={styles.iconStyle}>
                       <Icon size={35} color='#3949AB' type='material-community' name='menu'  />
                     </View>
                 }
                 title='Schedule'
                 onPress={this.fn_schedule}
              />


              <SettingsList.Header headerStyle={{marginTop:55}}/>

              <SettingsList.Item
                backgroundColor='red'
                titleStyle={{color:'white'}}
                  icon={
                      <View style={styles.iconStyle}>
                        <Icon type='font-awesome' name='sign-out' color='white' size={35}  />
                      </View>
                  }
                  title='Logout'
                  onPress={this.LogoutMessage}

              />

            </SettingsList>

           </View>
        </View>



    );
  }
}


//export default MainContent;
