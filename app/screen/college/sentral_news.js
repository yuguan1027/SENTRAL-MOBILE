import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Button,Icon } from 'react-native-elements';


const longtext = "The Seminar Digital Kerajaan 2017 was organized to share knowledge, ideas and experiences towards improving the delivery system of government services through the ";
const win = Dimensions.get('window');
const styles = StyleSheet.create({
  fullImage: {
    width: Dimensions.get('window').width,
    height: 150,
  },
  iconText: {
    alignSelf: 'center',
    fontSize: 11,
  },
  container_SentralNews: {
    marginTop:20,
    marginBottom:20,
    marginLeft:10,
    marginRight:10,
  },
  text_SentralNews: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom:10,
  },

});

class SentralNewsContent extends React.Component {
  render(){
    return(
      <TouchableHighlight
        style={{ marginBottom:10 }}
        underlayColor='#ECEFF1'
        onPress={() => this.props.navigation.navigate('SentralNewsByID')} >
        <View style={{flex: 1, flexDirection: 'row',justifyContent: 'space-between'}}>
          <Text style={{flex:0.6,paddingRight:5}}>{longtext}</Text>
          <Image
            style={{flex:0.4,resizeMode: "contain",height:125  }}
              source={require('../../../assets/Sentral/news1.jpg')}
          />
        </View>
      </TouchableHighlight>
    )
  }
}
class MainContent extends React.Component{
  render(){
    return(
      <ScrollView>

        <View style={styles.container_SentralNews}>
            <SentralNewsContent navigation={this.props.navigation}/>
            <SentralNewsContent navigation={this.props.navigation}/>
            <SentralNewsContent navigation={this.props.navigation}/>
            <SentralNewsContent navigation={this.props.navigation}/>
            <SentralNewsContent navigation={this.props.navigation}/>
            <SentralNewsContent navigation={this.props.navigation}/>
            <SentralNewsContent navigation={this.props.navigation}/>
            <SentralNewsContent navigation={this.props.navigation}/>
            <SentralNewsContent navigation={this.props.navigation}/>
            <SentralNewsContent navigation={this.props.navigation}/>
            <SentralNewsContent navigation={this.props.navigation}/>
            <SentralNewsContent navigation={this.props.navigation}/>
            <SentralNewsContent navigation={this.props.navigation}/>

        </View>

      </ScrollView>
    )
  }
}

export default MainContent;
