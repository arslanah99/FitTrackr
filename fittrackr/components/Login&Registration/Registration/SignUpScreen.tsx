import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { gql, useMutation } from '@apollo/client';

const REGISTER_MUTATION = gql`
  mutation Register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
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

const SignUpScreen = ({navigation}) => {
  const [register] = useMutation(REGISTER_MUTATION);
  const [email, setEmail] = useState('');
  
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: async (values) => {
        console.log("form values", values)
      try {
        // const { data } = await register({
        //     variables: { email: formik.values.email, password: formik.values.password },
        // });
        // console.log(data);
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
    </View>
  );
};

export default SignUpScreen;
