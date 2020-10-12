import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {styles} from '../../styles/styles';

const Login = (props) => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <TextInput placeholder="Email" style={styles.textInput} />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        secureTextEntry={true}
      />
      <Button onPress={() => props.navigation.navigate('Home')} title="Login" />
      <Text
        style={{margin: 24, textAlign: 'center', fontWeight: 'bold'}}
        onPress={() => props.navigation.navigate('Register')}>
        Don't have an Account? Register
      </Text>
    </View>
  );
};

export default Login;
