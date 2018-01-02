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
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },

});


//Export Itself
export default class App extends Component<{}> {

  render(){
    const ic_course = <Icon size={50} color='#C62828' type='font-awesome' name='book'/>;
    const ic_attendance = <Icon size={50} color='#3949AB' type='font-awesome' name='calendar-check-o'  />;
    const ic_finance= <Icon size={50} color='#1B5E20' type='font-awesome'  name='dollar'  />;
    const ic_grade= <Icon size={50} color='#0097A7' type='font-awesome'  name='graduation-cap'  />;

    fn_course = () =>{
      alert('This is course');
    }
    fn_attendance = () =>{
      alert('This is attendance');
    }
    fn_finance = () =>{
      alert('This is finance');
    }
    fn_grade = () =>{
      alert('This is grade');
    }



    return(
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
            numColumns={2}
            data={[
                    {title:'Course' , content: ic_course, fn:'fn_course'},
                    {title:'Grade' , content: ic_grade , fn:'fn_grade'},
                    {title:'Attendance' , content: ic_attendance , fn:'fn_attendance'},
                    {title:'Finance' , content: ic_finance , fn:'fn_finance'},
                  ]}

            renderItem={({item}) =>
              <TouchableHighlight  style={{flex:1,flexDirection:'column',marginTop:20,marginBottom:50,marginRight:10,marginLeft:10}}
                onPress={eval(item.fn)}
                underlayColor="#CFD8DC"
              >
              <View>
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

    );
  }
}


//export default MainContent;
