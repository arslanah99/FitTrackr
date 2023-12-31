import React, {useState} from 'react';
import {Image} from 'expo-image';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {TextInput, Button, Text} from 'react-native-paper';
import {gql, useMutation} from '@apollo/client';
import firebase from 'firebase/compat';
import FitTrackrIconName from '../../assets/images/fitTrackrIconName.svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {AppConstants} from '../../constants/AppConstants';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginScreen = ({navigation}) => {
  const formik = useFormik({
    initialValues: {email: '', password: ''},
    validationSchema,
    onSubmit: async (values) => {
      try {
        const userCredential = await firebase
          .auth()
          .signInWithEmailAndPassword(values.email, values.password);
        const user = userCredential.user;
        navigation.navigate('HomeScreen');
      } catch (error) {
        console.error('Error signing in: ', error, values);
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
        <Text style={styles.LoginTitle}>Log in</Text>
        <TextInput
          textColor={AppConstants.textInputTheme.colors.textColor}
          label="Email"
          placeholder="Email"
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          mode="outlined"
          theme={AppConstants.textInputTheme}
          outlineStyle={AppConstants.textInputAuthOutlineStyle}
          style={{
            width: '100%',
            marginBottom: 10,
            backgroundColor: 'transparent',
          }}
        />
        {formik.touched.email && formik.errors.email ? (
          <Text style={AppConstants.formikErrorStyles}>
            {formik.errors.email}
          </Text>
        ) : null}

        <TextInput
          textColor={AppConstants.textInputTheme.colors.textColor}
          label="Password"
          outlineStyle={AppConstants.textInputAuthOutlineStyle}
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          secureTextEntry
          theme={AppConstants.textInputTheme}
          mode="outlined"
          style={{width: '100%', marginBottom: 10}}
        />
        {formik.touched.password && formik.errors.password ? (
          <Text style={AppConstants.formikErrorStyles}>
            {formik.errors.password}
          </Text>
        ) : null}

        <Button
          mode="contained-tonal"
          labelStyle={{fontFamily: 'Poppins-Bold', color: '#381E72'}}
          style={styles.loginButton}
          onPress={formik.handleSubmit}
        >
          Log in
        </Button>

        <Button
          mode="text"
          onPress={() => {
            navigation.navigate('ForgetPasswordScreen');
          }}
        >
          Forget Password?
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

export default LoginScreen;
