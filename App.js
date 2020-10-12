import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AuthStack from './src/routes/AuthStack';
import BottomTabs from './src/routes/BottomTabs';
import DrawerNav from './src/routes/DrawerNav';
import TopTabs from './src/routes/TopTabs';
import Login from './src/screen/auth/Login';
import Register from './src/screen/auth/Register';
import Home from './src/screen/Home';
import Settings from './src/screen/Settings';

class App extends Component {
  render() {
    return <AuthStack />;
  }
}

export default App;
