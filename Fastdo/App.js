import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector,Provider } from 'react-redux';
import { loginSuccess } from './src/redux/authSlice'; // Action creator
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from './src/redux/store';
import TodolistRouter from './src/screens/Todolist/_routerTodolist';
import CheckinRouter from './src/screens/Checkin/_routerCheckin';
import Login from './src/screens/Login/Login';
import LayoutHome from './src/screens/Home/_layout';
import './global.css';

const Stack = createNativeStackNavigator();

const AppContent = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    try {
      const accessToken = await AsyncStorage.getItem('authToken');
      const userId= await AsyncStorage.getItem('userId'); 

      if (accessToken) {
        dispatch(loginSuccess({
          tokens: { accessToken },
          user: { id: userId } 
        }));
      } else {
        console.log("No access token found");
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);


  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  // Render nội dung chính của ứng dụng
  return (
    <Stack.Navigator>

      {isLoggedIn ? (
        <>
          <Stack.Screen options={{ headerShown: false }} name="Home" component={LayoutHome} />
          <Stack.Screen options={{ headerShown: true }} name="Checkin" component={CheckinRouter} />
          <Stack.Screen options={{ headerShown: true }} name="Todolist" component={TodolistRouter} />
        </>
      ) : null}
     
    	  <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
    </Stack.Navigator>
  );
};

// Component App (bọc NavigationContainer với Redux Provider)
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </Provider>
  );
}