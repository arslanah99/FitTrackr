import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { gql, useMutation } from '@apollo/client';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, width: 200, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, width: 200, marginBottom: 10 }}
      />
      <Button title="Sign Up" onPress={console.log('hello')} />
    </View>
  );
};

export default LoginScreen;
