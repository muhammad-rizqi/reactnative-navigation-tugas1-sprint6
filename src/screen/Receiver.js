import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles/styles';

const Receiver = (props) => {
  const {text} = props.route.params;
  console.log(text);
  return (
    <View style={styles.container}>
      <Text>Status Anda: </Text>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{text}</Text>
    </View>
  );
};

export default Receiver;
