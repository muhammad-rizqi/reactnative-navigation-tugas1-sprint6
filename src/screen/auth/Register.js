import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {styles} from '../../styles/styles';

const Register = (props) => {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <TextInput placeholder="Email" style={styles.textInput} />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Confirm Password"
        style={styles.textInput}
        secureTextEntry={true}
      />
      <Button
        title="Register"
        onPress={() => props.navigation.navigate('Login')}
      />
      <Text
        style={{margin: 24, fontWeight: 'bold', textAlign: 'center'}}
        onPress={() => props.navigation.navigate('Login')}>
        Already have an Acount? Login
      </Text>
    </View>
  );
};

export default Register;
