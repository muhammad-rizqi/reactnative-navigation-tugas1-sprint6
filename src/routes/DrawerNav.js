import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppStack from './AppStack';

const Drawer = createDrawerNavigator();

class DrawerNav extends Component {
  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={AppStack} />
      </Drawer.Navigator>
    );
  }
}

export default DrawerNav;
