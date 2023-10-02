import firebase from 'firebase/compat';
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({navigation}) => {

  const logoutUser = async () => {
    try {
      await firebase.auth().signOut();
      navigation.navigate('LoginScreen');  // Navigate back to LoginScreen
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome Home!</Text>
      <Button title="Sign Out" onPress={logoutUser} />
    </View>
  );
};

export default HomeScreen;
