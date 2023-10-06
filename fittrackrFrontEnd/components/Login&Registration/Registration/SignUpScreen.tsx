import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { gql, useMutation } from '@apollo/client';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Image} from 'expo-image';
import firebase from 'firebase/compat';
import FitTrackrIconName from '../../../assets/images/fitTrackrIconName.svg';
import { AppConstants } from '../../../constants/AppConstants';



const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Full Name must be at least 2 characters')
    .required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignUpScreen = ({navigation}) => {
  
  const formik = useFormik({
    initialValues: { email: '', password: '', fullName: '' },
    validationSchema,
    onSubmit: async (values) => {
        console.log("form values", values)
      try {
        const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password);
      const user = userCredential.user;
     await user?.updateProfile({
        displayName: values.fullName
      })
        // Navigate to the sign-in screen or home screen
        navigation.navigate('LoginScreen');
      } catch (error) {
        console.error('Registration failed:', error);
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

      <View style={styles.loginContainer}>
        <Text style={styles.LoginTitle}>Sign Up</Text>

        <TextInput
          textColor={AppConstants.textInputTheme.colors.textColor}
          outlineStyle={AppConstants.textInputAuthOutlineStyle}
          label="Full Name"
          value={formik.values.fullName}
          onChangeText={formik.handleChange('fullName')}
          onBlur={formik.handleBlur('fullName')}
          mode="outlined"
          theme={AppConstants.textInputTheme}
          style={{ width: '100%', marginBottom: 10 }}
        />
        {formik.touched.fullName && formik.errors.fullName ? (
          <Text style={AppConstants.formikErrorStyles}>{formik.errors.fullName}</Text>
        ) : null}

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

        <TextInput
          textColor={AppConstants.textInputTheme.colors.textColor}
          label="Password"
          outlineStyle={AppConstants.textInputAuthOutlineStyle}
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          secureTextEntry
          mode="outlined"
          theme={AppConstants.textInputTheme}
          style={{ width: '100%', marginBottom: 10 }}
        />
        {formik.touched.password && formik.errors.password ? (
          <Text style={AppConstants.formikErrorStyles}>{formik.errors.password}</Text>
        ) : null}

        <Button
          mode="contained"
          labelStyle={{ fontFamily: 'Poppins-Bold', color: '#381E72' }}
          style={styles.loginButton}
          onPress={formik.handleSubmit}
        >
          Sign Up
        </Button>
        <Button mode="text" onPress={() => { navigation.navigate('LoginScreen'); }}>
          Already have an account? Log in
        </Button>
      </View>

      <View style={styles.bottomMainContainer}>
        <View style={styles.bottomDontHaveAccountContainer}>
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
  loginContainer: {
    width: wp('80%'),
  },
  loginButton: {
    marginTop: hp('1%'),
    backgroundColor: '#BEA9EE',
    borderRadius: 10,
    fontFamily: 'Poppins-Bold',
  },
  LoginTitle: {
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
  privacyPolicyTextStyle: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: wp('2.5%'),
    textAlign: 'center',
  },
});

export default SignUpScreen;
