import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import firebase from 'firebase/compat';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FitTrackrIconName from '../../assets/images/fitTrackrIconName.svg';
import { Image } from 'expo-image';
import { AppConstants } from '../../constants/AppConstants';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export const ForgetPasswordScreen = ({navigation}) => {
  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await firebase.auth().sendPasswordResetEmail(values.email);
        console.log('Password reset email sent');
      } catch (error) {
        console.error('Error sending password reset email: ', error);
      }
    },
  });


  return (
    <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image
        source={FitTrackrIconName}
        placeholder={AppConstants.blurhash}
        style={styles.image}
        contentFit="contain"
      />
    </View>

    <View style={styles.resetContainer}>
      <Text style={styles.resetTitle}>Forgot Password?</Text>
      <TextInput
          textColor={AppConstants.textInputTheme.colors.textColor}
          label="Email"
          outlineStyle={AppConstants.textInputAuthOutlineStyle}
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        mode="outlined"
        theme={AppConstants.textInputTheme}
        style={{ width: '100%', marginBottom: 10 }}
      />
      {formik.touched.email && formik.errors.email ? (
        <Text style={AppConstants.formikErrorStyles}>{formik.errors.email}</Text>
      ) : null}
      <Button
        mode="contained"
        labelStyle={{ fontFamily: 'Poppins-Bold', color: '#381E72' }}
        style={styles.resetButton}
        onPress={formik.handleSubmit}
      >
        Recover
      </Button>
    </View>

    <View style={styles.bottomMainContainer}>
          <View style={styles.bottomDontHaveAccountContainer}>
            <Text style={styles.dontHaveAnAccount}>Don't have an account?</Text>
            <Button
              mode="text"
              onPress={() => {
                navigation.navigate('SignUpScreen');
              }}
              labelStyle={{
                color: '#FFFFFF',
                textDecorationLine: 'underline',
                fontFamily: 'Poppins-Bold',
                marginHorizontal: 0,
                paddingRight: wp('3%'),
                paddingTop: hp('.1%'),
              }}
            >
              Sign up
            </Button>
          </View>
          <View style={styles.termsOfServiceContainer}>
            <Text style={styles.privacyPolicyTextStyle}>
              Privacy Policy and Terms of Service
            </Text>
          </View>
        </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginRight: wp('5%'),
    marginLeft: wp('5%'),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('10%'),
  },
  image: {
    width: wp('100%'),
    height: hp('10%'),
  },
  resetContainer: {
    width: wp('80%'),
  },
  resetButton: {
    marginTop: hp('1%'),
    backgroundColor: '#BEA9EE',
    borderRadius: 10,
    fontFamily: 'Poppins-Bold',
  },
  resetTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: wp('6%'),
    textAlign: 'center',
    color: '#FFFFFF',
  },
  bottomMainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomDontHaveAccountContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  termsOfServiceContainer: {},
  privacyPolicyTextStyle: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: wp('2.5%'),
    textAlign: 'center',
  },
  dontHaveAnAccount: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    marginRight: 5,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

