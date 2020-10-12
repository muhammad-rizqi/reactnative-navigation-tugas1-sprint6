import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Chat from '../screen/tabs/Chat';
import Call from '../screen/tabs/Call';
import Status from '../screen/tabs/Status';

const Tabs = createMaterialTopTabNavigator();

class TopTabs extends Component {
  render() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen name="Chat" component={Chat} />
        <Tabs.Screen name="Status" component={Status} />
        <Tabs.Screen name="Call" component={Call} />
      </Tabs.Navigator>
    );
  }
}

export default TopTabs;
