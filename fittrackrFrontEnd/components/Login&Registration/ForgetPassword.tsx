import firebase from 'firebase/compat';
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export const ForgetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const resetPassword = (email: string) => {
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent.
        console.log("Password reset email sent");
      })
      .catch((error) => {
        // An error occurred.
        console.error("Error sending password reset email: ", error);
      });
  }
  
  const handleResetPassword = () => {
    resetPassword(email);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Enter your email to reset your password</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <Button title="Reset Password" onPress={handleResetPassword} />
    </View>
  );
}
