import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TodolistRouter from './src/screens/Todolist/_routerTodolist';
import CheckinRouter from './src/screens/Checkin/_routerCheckin';
import Login from './src/screens/Login/Login';
import './global.css'
import LayoutHome from './src/screens/Home/_layout';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={LayoutHome} />
        <Stack.Screen options={{ headerShown: true }} name="Checkin" component={CheckinRouter} />
        <Stack.Screen options={{ headerShown: true }} name="Todolist" component={TodolistRouter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

