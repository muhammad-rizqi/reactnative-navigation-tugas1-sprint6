import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../styles/styles';

class Home extends Component {
  render() {
    return (
      <View style={styles.containerCenter}>
        <Text>This is home page</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('WhatsApp')}
          style={styles.button}>
          <Text>Buka WhatsApp</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
