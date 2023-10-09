import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import FitTrackrIconName from '../assets/images/fitTrackrIconName.svg';
import { AppConstants } from './AppConstants';
import { Image } from 'expo-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TopNavBar = ({navigation}) => {

  return (
    <>
    <View style={styles.appHeaderContainer}>
    <Appbar.Action
      icon="arrow-left"
      color="#CAC4D0"
      onPress={() => navigation.goBack()}
    />
    <View style={styles.imageContainer}>
      <Image
        source={FitTrackrIconName}
        style={styles.image}
        contentFit="contain"
      />
    </View>
    <Appbar.Action
      icon="account-circle-outline"
      color="#CAC4D0"
      onPress={() => navigation.navigate("ProfileScreen")}
    />
    </View>
  </>
  );
};

const styles = StyleSheet.create({
  appHeaderContainer: {
    backgroundColor: '#211F26',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hamburgerIcon: {
  },
  image: {
    width: wp('50%'),
    height: hp('10%'),
  },
  imageContainer: {
    height: hp('10%'),
  },
});

export default TopNavBar;
