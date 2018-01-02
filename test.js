/**
 * @flow
 */

import React from 'react';
import { Button, Platform, ScrollView, Text } from 'react-native';
import { DrawerNavigator, SafeAreaView } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';





//MAIN SCREEN
const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text>{banner}</Text>
      <Button
        onPress={() => navigation.navigate('DrawerOpen')}
        title="Open drawer"
      />
      <Button onPress={() => navigation.goBack(null)} title="Go back" />
    </SafeAreaView>
  </ScrollView>
);



//Navigation
const InboxScreen = ({ navigation }) => (
  <MyNavScreen banner={'Inbox Screen'} navigation={navigation} />
);

InboxScreen.navigationOptions = {
  drawerLabel: 'Inbox',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons
      name="move-to-inbox"
      size={24}
      style={{ color: tintColor }}
    />
  ),
};


//Navigation
const DraftsScreen = ({ navigation }) => (
  <MyNavScreen banner={'Drafts Screen'} navigation={navigation} />
);
DraftsScreen.navigationOptions = {
  drawerLabel: 'Drafts',
  drawerIcon: ({ tintColor }) => (
    <MaterialIcons name="drafts" size={24} style={{ color: tintColor }} />
  ),
};

//COMBINE
const DrawerExample = DrawerNavigator(
  {
    Inbox: {
      path: '/',
      screen: InboxScreen,
    },
    Drafts: {
      path: '/sent',
      screen: DraftsScreen,
    },
  },
  {
    initialRouteName: 'Inbox',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  }
);

export default DrawerExample;
