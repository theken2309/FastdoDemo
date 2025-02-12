import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/redux/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginSuccess } from './src/redux/authSlice';

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
      const userId = await AsyncStorage.getItem('userId');
      console.log(accessToken);

      if (accessToken) {
        dispatch(loginSuccess({
          tokens: { accessToken },
          user: { userId: userId } // Thay bằng dữ liệu người dùng thực tế
        }));
      }
    } catch (error) {
      console.error('Lỗi kiểm tra xác thực:', error);
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
        <Text>Đang tải...</Text>
      </View>
    );
  }

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen options={{ headerShown: false }} name="Home" component={LayoutHome} />
          <Stack.Screen options={{ headerShown: true }} name="Checkin" component={CheckinRouter} />
          <Stack.Screen options={{ headerShown: true }} name="Todolist" component={TodolistRouter} />
          <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        </>
      ) : (
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      )}
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </Provider>
  );
}