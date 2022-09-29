import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductosView from "./Vistas/Screens/productos";
import ProductosAdd from "./Vistas/Screens/productos_add";

const Stack = createNativeStackNavigator();

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="productos" component={ProductosView} options={{
        title: "Productos",
        headerTitleAlign: "center",
      }}/>
      <Stack.Screen name="productos_add" component={ProductosAdd}/>
    </Stack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;