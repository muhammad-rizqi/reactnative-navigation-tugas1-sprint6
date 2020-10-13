import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TodoAPI from '../screen/tabs/TodoAPI';
import TodoAsync from '../screen/tabs/TodoAsync';
import TodoArray from '../screen/tabs/TodoArray';

const Tabs = createMaterialTopTabNavigator();

class TopTabs extends Component {
  render() {
    return (
      <Tabs.Navigator>
        <Tabs.Screen name="Array" component={TodoArray} />
        <Tabs.Screen name="Async" component={TodoAsync} />
        <Tabs.Screen name="API" component={TodoAPI} />
      </Tabs.Navigator>
    );
  }
}

export default TopTabs;
