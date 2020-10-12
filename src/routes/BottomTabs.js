import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from '../screen/Settings';
import DrawerNav from './DrawerNav';
import ProfileStack from './ProfileStack';
import {Image} from 'react-native';

const Tabs = createBottomTabNavigator();

class BottomTabs extends Component {
  render() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen
          name="Home"
          component={DrawerNav}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{tintColor: color, width: 24, height: 24}}
                source={require('../assets/icon/home-button.png')}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={ProfileStack}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{tintColor: color, width: 24, height: 24}}
                source={require('../assets/icon/round-account-button-with-user-inside.png')}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                style={{tintColor: color, width: 24, height: 24}}
                source={require('../assets/icon/settings-cogwheel-button.png')}
              />
            ),
          }}
        />
      </Tabs.Navigator>
    );
  }
}

export default BottomTabs;
