import React, { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { useFonts } from 'expo-font';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home/HomeScreen';
import LoginScreen from './components/Login&Registration/LoginScreen';
import SignUpScreen from './components/Login&Registration/Registration/SignUpScreen';
import { getAuth, connectAuthEmulator } from "firebase/auth";
import firebase from 'firebase/compat';


const Stack = createNativeStackNavigator();

const client = new ApolloClient({
  uri: 'http://10.0.0.188:4001/graphql',
  cache: new InMemoryCache(),
});


const firebaseConfig = {
  apiKey: "placeholder",
  authDomain: "placeholder",
  projectId: "placeholder",
  storageBucket: "placeholder",
  messagingSenderId: "placeholder",
  appId: "placeholder",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Use a local emulator in development
if (__DEV__) {
  // If you are running on a physical device, replace http://localhost with the local ip of your PC. (http://192.168.x.x)

  const auth = getAuth();
  connectAuthEmulator(auth, "http://10.0.2.2:6969/");
}


// firebase.auth().useEmulator('http://127.0.0.1:6969/');

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('./assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const colorScheme = useColorScheme();

  if (!loaded) {
    return null;
  }


  return (
    <ApolloProvider client={client}>
      <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName={user ? "HomeScreen" : "LoginScreen"}>
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
