import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  ScrollView,WebView
} from 'react-native';
import { Button,Icon } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';
import HTML from 'react-native-render-html';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  fullImage: {
    width: Dimensions.get('window').width,
    height: 130,
  },

});


img1 = require("../../../assets/Sentral/Programmes/banner1.png");
img2 = require("../../../assets/Sentral/Programmes/banner2.png");
img3 = require("../../../assets/Sentral/Programmes/banner3.png");
img4 = require("../../../assets/Sentral/Programmes/banner4.png");
img5 = require("../../../assets/Sentral/Programmes/banner5.png");


  const ContentGenerator = ( {img , desc} ) => (
    <ScrollView style={{ flex: 1 }}>
      
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
      />
     </ScrollView>
  );

  const htmlContent = `
      <iframe src="http://www.yuguan.byethost24.com/Sentral/Accommodation%20_%20SENTRAL%20College%20Penang.html" width="360" height="300" />
  `;

const Screen1 = () => (
  <ContentGenerator desc={htmlContent} img={img1} />
);
const Screen2 = () => (
   <ContentGenerator desc={htmlContent} img={img2} />
);
const Screen3 = () => (
   <ContentGenerator desc={htmlContent} img={img3} />
);
const Screen4 = () => (
   <ContentGenerator desc={htmlContent} img={img4} />
);
const Screen5 = () => (
   <ContentGenerator desc={htmlContent} img={img5} />
);


/*
  Tab Navigation
*/
const TabNav = TabNavigator({
  Screen1: {
    screen: Screen1,
    navigationOptions : {
      tabBarIcon: (
        <Icon name='dollar' type='font-awesome' color='#03A9F4' />
      ),
    },
  },
  Screen2: {
    screen: Screen2,
    navigationOptions : {
       tabBarIcon: (
         <Icon name='code' type='font-awesome' color='#C8E6C9' />
       ),
    },
  },
  Screen3: {
    screen: Screen3,
    navigationOptions : {
      tabBarIcon: (
        <Icon name='calculator' type='font-awesome' color='#E57373' />
      ),
    },
  },
  Screen4: {
    screen: Screen4,
    navigationOptions : {
      tabBarIcon: (
        <Icon name='globe' type='font-awesome' color='#FF6D00' />
      ),
    },
  },
  Screen5: {
    screen: Screen5,
    navigationOptions : {
      tabBarIcon: (
        <Icon name='book' type='font-awesome' color='#80DEEA' />
      ),
    },
  },

}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    showIcon :true,
    showLabel : false ,
    activeTintColor: 'white',
    inactiveTintColor: '#BDBDBD',
    labelStyle: {
      fontSize: 7,
    },
    tabStyle: {
      height: 50,
    },
    style: {
     backgroundColor: '#1a5b4c'
   },
  },
  header:null,
});



//Export Itself
export default class App extends Component<{}> {
  render(){
    return(
      <TabNav />
    );
  }
}


//export default MainContent;
