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
  FlatList
} from 'react-native';
import { Button,Icon,Avatar } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  avatar_container:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
  },
  lineStyle:{
    borderWidth: 0.3,
    borderColor:'#607D8B',
    margin:5,
    marginRight:30,
    marginLeft:30,
  },
  username:{
    fontSize:16,

  },
  studentID:{
    fontSize:14,
  },
  salfordID:{
    fontWeight:'bold'
  },
  footerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

});


//Export Itself
export default class App extends Component<{}> {

  render(){
    const ic_activity = <Icon size={50} color='#C62828' type='material-community' name='format-list-checks'/>;
    const ic_schedule = <Icon size={50} color='#3949AB' type='material-community' name='menu'  />;
    const ic_event = <Icon size={50} color='#0097A7' type='material-community'  name='calendar-text'  />;
    const ic_scol = <Icon size={50} color='#004D40' type='material-community' name='server-security' />;
    const ic_college = <Icon size={50} color='#212121' type='material-community' name='domain' />;
    const ic_preference = <Icon size={50} color='#455A64' type='material-community' name='tune' />;

    fn_activity = () =>{
      this.props.navigation.navigate('LEActivity');
    }
    fn_schedule = () =>{
      this.props.navigation.navigate('SPSchedule');
    }
    fn_event = () =>{
      this.props.navigation.navigate('SPEvents');
    }
    fn_scol = () =>{
      this.props.navigation.navigate('LESCOL');
    }
    fn_college = () =>{
      this.props.navigation.navigate('College');
    }
    fn_preference = () =>{
      this.props.navigation.navigate('LEPreference');
    }
    fn_qr = () =>{
      this.props.navigation.navigate('QR');
    }


    return(
      <View style={{flex:1, flexDirection: 'column',justifyContent: 'space-between'}}>

        <View>

        <View style={{flexDirection:'row'}}>
          <View style={styles.avatar_container}>
            <Avatar
              large
              rounded
              source={require('../../../../assets/Sentral/avatar.png')}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
            <View style={{marginLeft:30}}>
              <Text style={styles.username}>
                THOR YU GUAN
                <Text style={styles.salfordID}>  @00511234</Text>
              </Text>
              <Text style={styles.sentralID}>SC09170151BIT</Text>

            </View>
          </View>
        </View>

        <View style = {styles.lineStyle}></View>

        <View style={{flexDirection: 'row', marginTop:0}}>
          <FlatList
            numColumns={3}
            data={[
                    {title:'Recent Activity' , content: ic_activity, fn:'fn_activity'},
                    {title:'Schedule' , content: ic_schedule , fn:'fn_schedule'},
                    {title:'Event' , content: ic_event , fn:'fn_event'},
                    {title:'SCOL' , content: ic_scol , fn:'fn_scol'},
                    {title:'College Info' , content: ic_college , fn:'fn_college'},
                    {title:'Preference' , content: ic_preference , fn:'fn_preference'}
                  ]}

            renderItem={({item}) =>
              <TouchableHighlight  style={{flex:1,flexDirection:'column',marginTop:20,marginBottom:20,marginRight:10,marginLeft:10}}
                onPress={eval(item.fn)}
                underlayColor="#CFD8DC"
              >
              <View >
                <View>{item.content}</View>
                <View style={{justifyContent: 'center',alignItems: 'center',backgroundColor:'#CFD8DC',borderRadius:20,marginTop:10}}>
                  <Text>{item.title}</Text>
                </View>
              </View>
              </TouchableHighlight>

            }
          />
        </View>

        </View>

        <View style={styles.footerContainer}>
          <Icon size={35} color='#004D40' type='material-community'
            raised
            underlayColor='#CFD8DC'
            name='qrcode'
            onPress={fn_qr}
          />
        </View>

      </View>

    );
  }
}


//export default MainContent;
