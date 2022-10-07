import React from "react";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {initializeApp} from 'firebase/app'
import {firebaseConfig} from './db/firebase_config';
import login from './vistas/login';
import Signup from './vistas/Signup';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { alignContent, alignItems, flex, justifyContent, style } from "styled-system";

const Stack = createStackNavigator();

function App() {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}



export default  () => {
  return (
    <NavigationContainer>

      <App />

    </NavigationContainer>
  )
}