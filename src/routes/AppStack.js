import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import Home from '../screen/Home';
import TopTabs from './TopTabs';

const Stack = createStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="WhatsApp" component={TopTabs} />
    </Stack.Navigator>
  );
};

export default AppStack;
