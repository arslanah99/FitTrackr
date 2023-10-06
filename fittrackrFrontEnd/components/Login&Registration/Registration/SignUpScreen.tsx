import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import firebase from 'firebase/compat';


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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Email"
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        style={{ borderWidth: 1, width: 200, marginBottom: 10 }}
      />
      {formik.touched.email && formik.errors.email ? (
        <Text>{formik.errors.email}</Text>
      ) : null}
          <TextInput
        placeholder="FullName"
        value={formik.values.fullName}
        onChangeText={formik.handleChange('fullName')}
        onBlur={formik.handleBlur('fullName')}
        style={{ borderWidth: 1, width: 200, marginBottom: 10 }}
      />
      {formik.touched.fullName && formik.errors.fullName ? (
        <Text>{formik.errors.fullName}</Text>
      ) : null}
      <TextInput
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        secureTextEntry
        style={{ borderWidth: 1, width: 200, marginBottom: 10 }}
      />
      {formik.touched.password && formik.errors.password ? (
        <Text>{formik.errors.password}</Text>
      ) : null}

      <Button mode="contained" onPress={formik.handleSubmit}>
        Sign Up
      </Button>
      <Button  mode="contained" onPress={() => {navigation.navigate("LoginScreen")}}>Go Back</Button>
    </View>
  );
};

export default SignUpScreen;
