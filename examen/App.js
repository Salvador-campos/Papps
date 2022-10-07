import React from "react";

import Login from './views/login';
import Signup from './views/signup';
import Home from './views/home';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function App() {
  return(
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
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