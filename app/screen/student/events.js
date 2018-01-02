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
  FlatList
} from 'react-native';
import { Button,SearchBar  } from 'react-native-elements';

import {
  StackNavigator,
} from 'react-navigation';

const styles = StyleSheet.create({
  title_txt: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom:10,
  },
  main_container:{
    flex:1,
    padding:100,
    margin:10,
  },
  itemList:{
    marginBottom:10
  }
});

export default class App extends Component<{}> {



  render() {
    return (
      <View stlye={styles.main_container}>

        <Text style={styles.title_txt}>Event Calendar</Text>
        <SearchBar  lightTheme placeholder='Search Here...' />
        <FlatList
        style={{marginTop:30}}
        data={[
            {
              date: '20/12/2017',
              day: 'Wednesday',
              title: 'Staff Christmas Gift Exchange'
            },
            {
              date: '23/12/2017',
              day: 'Saturday',
              title: 'SENTRAL Open Day'
            },
            {
              date: '24/12/2017',
              day: 'Sunday',
              title: 'SENTRAL Open Day'
            },
        ]}
          renderItem={
            ({item}) =>
            <Text style={styles.itemList}>{item.date} - {item.day} - {item.title}</Text>
          }
        />
      </View>
    );
  }
}
