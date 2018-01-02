import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  ScrollView,
  FlatList
} from 'react-native';
import { Button,Icon } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  fullImage: {
    width: Dimensions.get('window').width,
    height: 130,
  },

});




//Export Itself
export default class App extends Component<{}> {



  randitem(arr){
    return arr[Math.floor(Math.random()*arr.length)];
  }


  render(){
    const activityType = ['first-order','exclamation-circle','crosshairs','coffee','code','envira','expand','database','drupal','joomla','stack-overflow','wechat','yelp'];
    const randColor = [
      '#00897B','#4527A0',
      '#303F9F','#1976D2','#D50000',
      '#1B5E20',
      '#3E2723','#616161','#263238','#C51162',
      '#000000','#E64A19'
    ];
    const randMessage = [
      'How this Transactional Push Notification Saves the Day:  ',
      'Swarm’s messages are a good place to start because they exhibit so many of the push notification best practices.',
      'Sunshine is a weather app that sends personalized forecasts based on your tastes.',
      'Delectable, the wine database app, found a way to incorporate topical events into its messaging.',
      'The creativity of this message shines through its effectiveness at both entertaining the user and offering a recommendation. ',
      'QuizUp, a mobile trivia game, came up with this ingenious re-engagement message.',
      'This retail push notification from Amazon spices up an otherwise mundane shipping notice.',
      'It’s common advice in marketing to “ride the wave” of current events, but that’s easier said than done.',
    ];

    const activityData = Array.apply(null, Array(10)).map(function (x, i) { return i; });

    return(
      <View>
      <FlatList
        numColumns={1}
        data={activityData}
        renderItem={({item}) =>
          <TouchableHighlight  style={{flex:1,flexDirection:'column',margin:2,paddingTop:10,paddingBottom:10}}
            onPress={()=>alert('ads')}
            underlayColor="#CFD8DC"
          >
            <View style={{flexDirection:'row'}}>
              <View style={{flex:0.2}}>
                <Icon size={35} color={this.randitem(randColor)} type='font-awesome' name={this.randitem(activityType)} />
              </View>
              <View style={{flex:0.8}}>
                <Text>{this.randitem(randMessage)}</Text>
              </View>
            </View>
          </TouchableHighlight>

        }
      />



      </View>

    );
  }
}


//export default MainContent;
