import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextInput } from 'react-native-paper';
import { gql, useMutation } from '@apollo/client';
import firebase from 'firebase/compat';

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      uid
      email
    }
  }
`;

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginScreen = ({ navigation }) => {

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const userCredential = await firebase.auth().signInWithEmailAndPassword(values.email, values.password);
        const user = userCredential.user;
        console.log("User signed in: ", user);
        navigation.navigate("HomeScreen")
      } catch (error) {
        console.error("Error signing in: ", error, values);
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

      <Button title="Login" onPress={formik.handleSubmit} />

      <Button title="SignUps" onPress={() => {navigation.navigate("SignUpScreen")}} />
      <Button title="Forget Password?" onPress={() => {navigation.navigate("ForgetPasswordScreen")}} />

    </View>
  );
};

export default LoginScreen;
