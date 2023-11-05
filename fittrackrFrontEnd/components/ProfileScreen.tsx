import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import TopNavBar from '../constants/TopNavbar';
import firebase from 'firebase/compat';
import { useCreateWorkoutPlan } from './PowerBuilding/powerBuildingMutation';

const ProfileScreen = ({navigation}) => {
  const {createWorkoutPlan, loading, error} = useCreateWorkoutPlan()
  const rateApp = async () => {
    // Logic for rating the app
    console.log('Rate the app');
  };

  const handlePress = async () => {

    const workoutPlanInput = {
      WeekNumber: 1,
      Focus: 'Strength',
    };
 
    await createWorkoutPlan(workoutPlanInput);
  }

  const logout = async () => {
    // Logic for logging out
    console.log('Log out');
   await firebase.auth().signOut();
  };
  if (loading) return <Text style={{color:"white"}}>Loading...</Text>;
  if (error) return <Text  style={{color:"white"}}>Error: {error.message}</Text>;
  return (
    <View>
      <View style={styles.container}>
        <Button title="Rate App" onPress={rateApp} />
        <Button title="Log Out" onPress={logout} />
        <Button title="Create Workout Plan" onPress={handlePress} />
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
