import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {styles} from '../styles/styles';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Buat status</Text>
        <TextInput
          placeholder="Apa yang anda pikirkan?"
          onChangeText={(text) => this.setState({data: text})}
          style={styles.textInput}
        />
        <Button
          title="Kirim"
          onPress={() =>
            this.props.navigation.navigate('Receiver', {text: this.state.data})
          }
        />
      </View>
    );
  }
}

export default Profile;
