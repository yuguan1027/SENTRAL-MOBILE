import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Button,Icon } from 'react-native-elements';
import { TabNavigator } from 'react-navigation';

import { GiftedChat } from 'react-native-gifted-chat';

export default class Example extends React.Component {

  state = {
    messages: [],
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 0,
          text: "You are chatting with SENTRAL Officer now !",
          createdAt: new Date(),
          system: true,
        },
        {
          _id: 1,
          text: 'Hello, please dont be hestiated to ask anything',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://lh3.googleusercontent.com/-70oO79wd9Is/AAAAAAAAAAI/AAAAAAAAANA/Exbg2HAqJgU/s640/photo.jpg',
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }

}
