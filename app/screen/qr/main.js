'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  TouchableOpacity,
  Linking,View
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class ScanScreen extends Component {
  onSuccess(e) {
    var URL = e.data;

    Linking.canOpenURL(URL).then(supported => {
      if (!supported) { alert('Not a valid URL');}
      else{   Linking.openURL(URL).catch(err => console.error('An error occured', err)); }
    })

  }

  render() {
    return (
      <QRCodeScanner
        title='Scan Code'

        onRead={this.onSuccess.bind(this)}
        topContent={(
          <Text style={styles.centerText}>
            Aim at <Text style={styles.textBold}>QR Code</Text>
          </Text>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },

  textBold: {
    fontWeight: '500',
    color: '#000',
  },

  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },

  buttonTouchable: {
    padding: 16,
  },
});

//AppRegistry.registerComponent('default', () => ScanScreen);
