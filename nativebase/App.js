import React from "react";

import login from './vistas/login';
import Signup from './vistas/Signup';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>

      <App />

    </NavigationContainer>
  )
}