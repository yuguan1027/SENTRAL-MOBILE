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
  Linking,
  FlatList,
  ScrollView,
} from 'react-native';
import { Button,SearchBar,Icon  } from 'react-native-elements';
import Modal from 'react-native-modal'

import {
  StackNavigator,
} from 'react-navigation';

const styles = StyleSheet.create({
  title_txt: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  title_container:{
    paddingBottom:10,
    marginLeft:10,
    marginRight:10,
    borderBottomWidth : 0.5,
    borderBottomColor: '#607D8B',
  },
  itemStyle:{
    marginBottom:10,
    marginLeft:20,
    marginRight:20,
    padding:10,
    borderRadius: 4,
   borderWidth: 0.5,
   borderColor: '#d6d7da',

 },
 course:{
   fontSize:18,
   fontWeight:'bold',
 },
 programme:{
   fontSize:15,
   fontWeight:'bold',
 },
 lecture:{
   fontSize:15,
   fontWeight:'bold',
 },
 time:{
   fontSize:13,
 },
 room:{
   fontSize:13,
 },
});

export default class App extends Component<{}> {
  state = {
    isModalVisible: false
  }

  render() {
    data =  require('./data/schedule.json');


    _toggleSearchModal = () => {alert('123')}

    return (
      <View style={{flex:1}}>
        <View style={styles.title_container}>
          <Button
          buttonStyle={{borderRadius:20,height:35,backgroundColor:"#BDBDBD",marginTop:5}}
          icon={{name: 'search'}}
          title='Search ...                                              '
          onPress={this._toggleSearchModal}
          />
          <Text style={styles.title_txt}>Friday, December 22, 2017</Text>
        </View>

        <ScrollView stlye={styles.main_container}>

          <FlatList
            data={data}
            renderItem={
              ({item}) =>
              <TouchableOpacity style={styles.itemStyle}>
                <View style={{flex:1,flexDirection:'row'}}>
                  <View style={{flex:1}}>
                    <Text style={styles.course}>{item.course}</Text>
                    <Text style={styles.programme}>{item.programme}</Text>
                    <Text style={styles.lecture}>{item.lecture}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                    <Text style={styles.room}>{item.room}</Text>
                  </View>
                  <View style={{flex:0.2,justifyContent: 'center',alignItems: 'center'}}>
                    <Icon
                      name='angle-double-right'
                      type='font-awesome'
                      color={global.SentralGreen}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            }
          />
        </ScrollView>
      </View>
    );
  }
}
