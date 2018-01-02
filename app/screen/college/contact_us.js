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
  Menu,
  TouchableOpacity,
  Linking
} from 'react-native';
import { Button,Icon } from 'react-native-elements';
import call from 'react-native-phone-call';

const win = Dimensions.get('window');
const styles = StyleSheet.create({
  fullImage: {
    width: Dimensions.get('window').width,
    height: 150,
  },
  content_container:{
    margin:20,
  },
  content_box:{
    marginBottom:10
  },
  title_box:{
    borderBottomWidth : 0.5,
    borderBottomColor: '#607D8B',
  },
  title_txt:{
    fontSize:18,
    fontWeight:'bold',

  },
  desc_box:{
    flexDirection:'row',
  },
  desc_txt:{
    fontSize:15
  },


});

const address = `SENTRAL College Penang
6th Floor, 3 Penang Street
10200 George Town, Penang, Malaysia`;
const tel = '+604 2621 888';
const fax = '+604 2636 368';
const mobile = '+60111 0937968 (WhatsApp & Wechat)';
const email = 'info@sentral.edu.my';
const opening = `Monday - Friday : 9.00am - 7.00pm
Saturday : 9.00am - 5.00pm
Sunday : 10.00am - 4.00pm
Closed on Public Holidays`;



class ContentBox extends React.Component {
  render(){
    let desc = null;
    let title = this.props.title;
    let txt = this.props.desc;

    view_txt =  <Text style={styles.desc_txt}>{txt}</Text>;

    //FOR CALL
    if(typeof this.props.call !== 'undefined'){
      const args = {
        number: this.props.desc, // String value with the number to call
        prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
      }
      view_icon = <Icon
                    size={35}
                    name='phone'
                    type='font-awesome'
                    color='#2979FF'
                    onPress={()=>call(args).catch(console.error)}
                  />;

      ;
    }else if(typeof this.props.direction !== 'undefined'){
      //LINK TO GOOGLE map
      map_url ='https://www.google.com.my/maps/place/SENTRAL+College+Penang/@5.4189773,100.3393423,17z/data=!3m1!4b1!4m5!3m4!1s0x304ac38f755c08bf:0xd044098a2bd5666d!8m2!3d5.418972!4d100.341531?hl=en';
      view_icon = <Icon
                    size={35}
                    name='map-marker'
                    type='font-awesome'
                    color='#607D8B'
                    onPress={()=>
                      Linking.canOpenURL(map_url).then(supported => {
                        if (!supported) { alert('Please install Google Maps first.');}
                        else{ Linking.openURL(map_url)}
                      })
                    }
                  />;


    }else if(typeof this.props.mail !== 'undefined'){
      //SEND E MAIL
      mail_url = 'mailto:'+txt;
      view_icon = <Icon
                    size={35}
                    name='envelope'
                    type='font-awesome'
                    color='#FF5252'
                    onPress={()=>
                      Linking.canOpenURL(mail_url).then(supported => {
                        if (!supported) { alert('Please install email first.');}
                        else{ Linking.openURL(mail_url)}
                      })
                    }
                  />;

    }else if(typeof this.props.whatsapp !== 'undefined'){
      //OPEN WHATSAPP
      default_msg = 'Hello, I want to enquire about SENTRAL';
      whatsapp_url = 'whatsapp://send?text='+default_msg+',&phone='+this.props.desc;
      view_icon = <Icon
                    size={35}
                    name='whatsapp'
                    type='font-awesome'
                    color='green'
                    onPress={()=>
                      Linking.canOpenURL(whatsapp_url).then(supported => {
                        if (!supported) { alert('Please install Whatapps first.');}
                        else{ Linking.openURL(whatsapp_url)}
                      })
                    }
                  />;
    }else{
      //DOES NOTHING
      view_icon = <View></View>;
    }

    desc = <View style={styles.desc_box}>
            <View style={{flex:1,justifyContent: 'center'}}>
              {view_txt}
            </View>
            <View style={{flex:0.2,justifyContent: 'center',alignItems: 'center'}}>
              {view_icon}
            </View>
           </View>

    return(
      <View style={styles.content_box}>
        <View style={styles.title_box}><Text style={styles.title_txt}>{title}</Text></View>
        {desc}
      </View>
    )
  }
}

class MainContent extends React.Component {
  render(){
    return(
      <ScrollView>
        <Image style={[styles.fullImage]}
          //resizeMode="contain"
          source={require('../../../assets/Sentral/banner3.png')}
        />

        <View style={styles.content_container}>
          <ContentBox title='Address' desc={address} direction='true'/>
          <ContentBox title='Tel' desc={tel} call='true' />
          <ContentBox title='Fax' desc={fax}/>
          <ContentBox title='Mobile' desc={mobile} whatsapp='true'/>
          <ContentBox title='Email' desc={email} mail='true'/>
          <ContentBox title='Opening Hour' desc={opening} />

        </View>

      </ScrollView>

    );
  }
}


export default MainContent;
