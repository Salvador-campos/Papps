import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductosAdd from "./Vistas/Screens/productos_add";
import ProductosView from './Vistas/Screens/productos';

const Stack = createNativeStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name=" " component={ProductosView} />
      <Stack.Screen name="productos_add" component={ProductosAdd}/>
    </Stack.Navigator>
  )
}

function Home(){
  return(
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Inicio!</Text>
    </View>
  );
}

function Confing() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Configuraciones</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Productos' component={MyStack} />
        <Tab.Screen name='Configuraciones' component={Confing} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}