import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import TopNavBar from '../constants/TopNavbar';

const ProfileScreen = ({navigation}) => {
  const rateApp = () => {
    // Logic for rating the app
    console.log('Rate the app');
  };

  const logout = () => {
    // Logic for logging out
    console.log('Log out');
  };

  return (
    <View>
      <View style={styles.container}>
        <Button title="Rate App" onPress={rateApp} />
        <Button title="Log Out" onPress={logout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
