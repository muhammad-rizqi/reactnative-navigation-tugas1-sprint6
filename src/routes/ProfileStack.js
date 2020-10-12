import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screen/Profile';
import Receiver from '../screen/Receiver';

const Stack = createStackNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Receiver" component={Receiver} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
